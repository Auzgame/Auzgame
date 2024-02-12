window.firebaseLoaded = true;
let didInit = false;
const SECOND_FIREBASE_INSTANCE_NAME = "firebase_instance_2";

function initializeFireBase() {
  if (didInit) {
    return;
  }

  let hostname = window.location.hostname;
  let firebaseConfig;

  if (
    hostname.indexOf("dev1v1") >= 0 ||
    hostname.indexOf("dev.1v1") >= 0 ||
    hostname.indexOf("localhost") >= 0
  ) {
    firebaseConfig = getFireBaseConfigDev();
  } else if (
    hostname.indexOf("rc.1v1") >= 0 ||
    hostname.indexOf("rcfunctions1v1") >= 0 ||
    hostname.indexOf("test1v1") >= 0 ||
    hostname.indexOf("test.1v1") >= 0
  ) {
    firebaseConfig = getFireBaseConfigRC();
  } else {
    firebaseConfig = getFireBaseConfigProd();
  }

  // Initialize Firebase
  window.mainApp = firebase.initializeApp(firebaseConfig);
  window.anonymousApp = firebase.initializeApp(
    firebaseConfig,
    SECOND_FIREBASE_INSTANCE_NAME
  );
  window.currentApp = window.mainApp;

  didInit = true;
}

function getFireBaseConfigProd() {
  // Your web app's Firebase configuration
  return {
    apiKey: "AIzaSyBPrAfspM9RFxuNuDtSyaOZ5YRjDBNiq5I",
    authDomain: "1v1.lol",
    databaseURL: "https://justbuild-cdb86.firebaseio.com",
    projectId: "justbuild-cdb86",
    storageBucket: "justbuild-cdb86.appspot.com",
    messagingSenderId: "93158914000",
    appId: "1:93158914000:web:e73a8b453338ab7c",
  };
}

function getFireBaseConfigDev() {
  // Your web app's Firebase configuration
  return {
    apiKey: "AIzaSyANZ0SDhqoc62msSooQFs3SEb4XbC7gvk4",
    authDomain: "dev.1v1.lol",
    databaseURL: "https://dev1v1.firebaseio.com",
    projectId: "dev1v1",
    storageBucket: "dev1v1.appspot.com",
    messagingSenderId: "90097883404",
    appId: "1:90097883404:android:0931a7bbf3e74f2b9a5129",
  };
}

function getFireBaseConfigRC() {
  // Your web app's Firebase configuration
  return {
    apiKey: "AIzaSyA1H3OsFttu-57p0f7mXxUdgJ2Y0iHZRJg",
    authDomain: "rcfunctions1v1.firebaseapp.com",
    projectId: "rcfunctions1v1",
    storageBucket: "rcfunctions1v1.appspot.com",
    messagingSenderId: "896755136685",
    appId: "1:896755136685:web:1ccd8f30abdce578dbee24",
  };
}
