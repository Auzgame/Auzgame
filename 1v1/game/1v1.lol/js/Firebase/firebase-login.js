function checkIfConnected() {
  if (
    firebase.auth(window.currentApp).currentUser === null ||
    firebase.auth(window.currentApp).currentUser.isAnonymous
  ) {
    let response = AuthResponse.Error("Not connected");
    returnAuthResponse(response);
    return;
  }

  returnIdToken();
}

function signInWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();

  // When signing in with an anonymous user, try and link the account with popup.
  if (
    firebase.auth(window.currentApp).currentUser !== null &&
    firebase.auth(window.currentApp).currentUser.isAnonymous
  ) {
    window.currentApp = window.anonymousApp;

    firebase
      .auth(window.currentApp)
      .currentUser.linkWithPopup(provider)
      .then((result) => {
        const tempApp = window.mainApp;
        window.mainApp = window.anonymousApp;
        window.anonymousApp = tempApp;
        window.currentApp = window.mainApp;

        returnIdToken();
      })
      .catch((error) => {
        if (error.credential !== undefined && error.credential !== null) {
          window.currentApp = window.mainApp;

          // If linking user fails, then sign into their account regularly.
          firebase
            .auth(window.currentApp)
            .signInWithCredential(error.credential)
            .then((result) => {
              returnIdToken();
            })
            .catch((error) => {
              let response = AuthResponse.Error(error);
              returnAuthResponse(response);
            });
        } else {
          let response = AuthResponse.Error(error);
          returnAuthResponse(response);
        }
      });
  } else {
    window.currentApp = window.mainApp;

    // When not using anonymous user, sign in as usual via popup
    firebase
      .auth(window.currentApp)
      .signInWithPopup(provider)
      .then((result) => {
        returnIdToken();
      })
      .catch((error) => {
        let response = AuthResponse.Error(error);
        returnAuthResponse(response);
      });
  }
}

function signInAnonymously() {
  window.currentApp = window.anonymousApp;

  firebase
    .auth(window.currentApp)
    .signInAnonymously()
    .then(() => {
      returnIdToken();
    })
    .catch((error) => {
      let response = AuthResponse.Error(error);
      returnAuthResponse(response);
    });
}

/**
 Used from PC only
 */
function firebaseLogin(providerName) {
  let provider = getProvider(providerName);
  window.currentApp = window.mainApp;

  firebase.auth(window.currentApp).useDeviceLanguage();
  firebase.auth(window.currentApp).signInWithRedirect(provider);
}

// This is being called directly from unity.
function signOut() {
  let response;

  firebase
    .auth(window.currentApp)
    .signOut()
    .then(() => {
      response = AuthResponse.Success("loggedOut");
    })
    .catch((error) => {
      response = AuthResponse.Error(error);
    })
    .finally(() => {
      returnAuthResponse(response);
    });
}

function getProvider(providerName) {
  if (providerName && providerName.indexOf("facebook") !== -1)
    return new firebase.auth.FacebookAuthProvider();
  else return new firebase.auth.GoogleAuthProvider();
}

function returnIdToken() {
  let response;

  firebase
    .auth(window.currentApp)
    .currentUser.getIdToken(true)
    .then((token) => {
      response = AuthResponse.Success(token);
    })
    .catch(function (error) {
      response = AuthResponse.Error(error);
    })
    .finally(() => {
      returnAuthResponse(response);
    });
}

function returnAuthResponse(response) {
  window.unityInstance.SendMessage(
    "PersistantObjects",
    "OnGotWebResponse",
    JSON.stringify(response)
  );
}

class AuthResponse {
  constructor(taskResult, response) {
    this.Result = taskResult === undefined ? "" : taskResult;
    this.Response = response === undefined ? "" : response;
  }

  static Success(token) {
    return new AuthResponse(AuthTaskResult.Success, token);
  }

  static Cancelled() {
    return new AuthResponse(AuthTaskResult.Cancelled, "Cancelled");
  }

  static Error(error) {
    return new AuthResponse(AuthTaskResult.Error, error);
  }
}

class AuthTaskResult {
  static Success = "Success";
  static Cancelled = "Cancelled";
  static Error = "Error";
}
