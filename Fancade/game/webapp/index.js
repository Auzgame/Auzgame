var Module = typeof Module != "undefined" ? Module : {};
if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0
}
Module.expectedDataFileDownloads++;
(function() {
    if (Module["ENVIRONMENT_IS_PTHREAD"] || Module["$ww"]) return;
    var loadPackage = function(metadata) {
        var PACKAGE_PATH = "";
        if (typeof window === "object") {
            PACKAGE_PATH = window["encodeURIComponent"](window.location.href.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/")
        } else if (typeof process === "undefined" && typeof location !== "undefined") {
            PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/")
        }
        var PACKAGE_NAME = "index.data";
        var REMOTE_PACKAGE_BASE = "index.data";
        if (typeof Module["locateFilePackage"] === "function" && !Module["locateFile"]) {
            Module["locateFile"] = Module["locateFilePackage"];
            err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")
        }
        var REMOTE_PACKAGE_NAME = Module["locateFile"] ? Module["locateFile"](REMOTE_PACKAGE_BASE, "") : REMOTE_PACKAGE_BASE;
        var REMOTE_PACKAGE_SIZE = metadata["remote_package_size"];

        function fetchRemotePackage(packageName, packageSize, callback, errback) {
            if (typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string") {
                require("fs").readFile(packageName, function(err, contents) {
                    if (err) {
                        errback(err)
                    } else {
                        callback(contents.buffer)
                    }
                });
                return
            }
            var xhr = new XMLHttpRequest;
            xhr.open("GET", packageName, true);
            xhr.responseType = "arraybuffer";
            xhr.onprogress = function(event) {
                var url = packageName;
                var size = packageSize;
                if (event.total) size = event.total;
                if (event.loaded) {
                    if (!xhr.addedTotal) {
                        xhr.addedTotal = true;
                        if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
                        Module.dataFileDownloads[url] = {
                            loaded: event.loaded,
                            total: size
                        }
                    } else {
                        Module.dataFileDownloads[url].loaded = event.loaded
                    }
                    var total = 0;
                    var loaded = 0;
                    var num = 0;
                    for (var download in Module.dataFileDownloads) {
                        var data = Module.dataFileDownloads[download];
                        total += data.total;
                        loaded += data.loaded;
                        num++
                    }
                    total = Math.ceil(total * Module.expectedDataFileDownloads / num);
                    if (Module["setStatus"]) Module["setStatus"](`Downloading data... (${loaded}/${total})`)
                } else if (!Module.dataFileDownloads) {
                    if (Module["setStatus"]) Module["setStatus"]("Downloading data...")
                }
            };
            xhr.onerror = function(event) {
                throw new Error("NetworkError for: " + packageName)
            };
            xhr.onload = function(event) {
                if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || xhr.status == 0 && xhr.response) {
                    var packageData = xhr.response;
                    callback(packageData)
                } else {
                    throw new Error(xhr.statusText + " : " + xhr.responseURL)
                }
            };
            xhr.send(null)
        }

        function handleError(error) {
            console.error("package error:", error)
        }
        var fetchedCallback = null;
        var fetched = Module["getPreloadedPackage"] ? Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;
        if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
            if (fetchedCallback) {
                fetchedCallback(data);
                fetchedCallback = null
            } else {
                fetched = data
            }
        }, handleError);

        function runWithFS() {
            function assert(check, msg) {
                if (!check) throw msg + (new Error).stack
            }
            Module["FS_createPath"]("/", "assets", true, true);
            Module["FS_createPath"]("/assets", "blocks", true, true);
            Module["FS_createPath"]("/assets", "daily", true, true);
            Module["FS_createPath"]("/assets", "fight", true, true);
            Module["FS_createPath"]("/assets", "games", true, true);
            Module["FS_createPath"]("/assets", "sounds", true, true);
            Module["FS_createPath"]("/assets", "views", true, true);

            function DataRequest(start, end, audio) {
                this.start = start;
                this.end = end;
                this.audio = audio
            }
            DataRequest.prototype = {
                requests: {},
                open: function(mode, name) {
                    this.name = name;
                    this.requests[name] = this;
                    Module["addRunDependency"](`fp ${this.name}`)
                },
                send: function() {},
                onload: function() {
                    var byteArray = this.byteArray.subarray(this.start, this.end);
                    this.finish(byteArray)
                },
                finish: function(byteArray) {
                    var that = this;
                    Module["FS_createDataFile"](this.name, null, byteArray, true, true, true);
                    Module["removeRunDependency"](`fp ${that.name}`);
                    this.requests[this.name] = null
                }
            };
            var files = metadata["files"];
            for (var i = 0; i < files.length; ++i) {
                new DataRequest(files[i]["start"], files[i]["end"], files[i]["audio"] || 0).open("GET", files[i]["filename"])
            }

            function processPackageData(arrayBuffer) {
                assert(arrayBuffer, "Loading data file failed.");
                assert(arrayBuffer.constructor.name === ArrayBuffer.name, "bad input to processPackageData");
                var byteArray = new Uint8Array(arrayBuffer);
                DataRequest.prototype.byteArray = byteArray;
                var files = metadata["files"];
                for (var i = 0; i < files.length; ++i) {
                    DataRequest.prototype.requests[files[i].filename].onload()
                }
                Module["removeRunDependency"]("datafile_index.data")
            }
            Module["addRunDependency"]("datafile_index.data");
            if (!Module.preloadResults) Module.preloadResults = {};
            Module.preloadResults[PACKAGE_NAME] = {
                fromCache: false
            };
            if (fetched) {
                processPackageData(fetched);
                fetched = null
            } else {
                fetchedCallback = processPackageData
            }
        }
        if (Module["calledRun"]) {
            runWithFS()
        } else {
            if (!Module["preRun"]) Module["preRun"] = [];
            Module["preRun"].push(runWithFS)
        }
    };
    loadPackage({
        "files": [{
            "filename": "/assets/atlas.png",
            "start": 0,
            "end": 256825
        }, {
            "filename": "/assets/blocks/ACCELEROMETER_V",
            "start": 256825,
            "end": 257138
        }, {
            "filename": "/assets/blocks/ARCH",
            "start": 257138,
            "end": 257315
        }, {
            "filename": "/assets/blocks/BALL",
            "start": 257315,
            "end": 257460
        }, {
            "filename": "/assets/blocks/BOX",
            "start": 257460,
            "end": 257675
        }, {
            "filename": "/assets/blocks/BRICKS",
            "start": 257675,
            "end": 257858
        }, {
            "filename": "/assets/blocks/BUTTERFLY",
            "start": 257858,
            "end": 259155
        }, {
            "filename": "/assets/blocks/BUTTON",
            "start": 259155,
            "end": 259678
        }, {
            "filename": "/assets/blocks/BUTTON_B",
            "start": 259678,
            "end": 260563
        }, {
            "filename": "/assets/blocks/CAMERA_ORBIT",
            "start": 260563,
            "end": 261951
        }, {
            "filename": "/assets/blocks/COMMENT",
            "start": 261951,
            "end": 262065
        }, {
            "filename": "/assets/blocks/CpF_LIST_ELEMENT_Cp",
            "start": 262065,
            "end": 262431
        }, {
            "filename": "/assets/blocks/DASH_CAT",
            "start": 262431,
            "end": 264296
        }, {
            "filename": "/assets/blocks/DINO",
            "start": 264296,
            "end": 268915
        }, {
            "filename": "/assets/blocks/DINO_RED",
            "start": 268915,
            "end": 270650
        }, {
            "filename": "/assets/blocks/DIRT",
            "start": 270650,
            "end": 270743
        }, {
            "filename": "/assets/blocks/DIRT_B",
            "start": 270743,
            "end": 270922
        }, {
            "filename": "/assets/blocks/DIRT_SLAB",
            "start": 270922,
            "end": 271044
        }, {
            "filename": "/assets/blocks/ECVV_SET_ANG_LIMITS_E",
            "start": 271044,
            "end": 271501
        }, {
            "filename": "/assets/blocks/ECVV_SET_ANG_MOTOR_E",
            "start": 271501,
            "end": 271956
        }, {
            "filename": "/assets/blocks/ECVV_SET_ANG_SPRING_E",
            "start": 271956,
            "end": 272411
        }, {
            "filename": "/assets/blocks/ECVV_SET_LIN_LIMITS_E",
            "start": 272411,
            "end": 272866
        }, {
            "filename": "/assets/blocks/ECVV_SET_LIN_MOTOR_E",
            "start": 272866,
            "end": 273322
        }, {
            "filename": "/assets/blocks/ECVV_SET_LIN_SPRING_E",
            "start": 273322,
            "end": 273772
        }, {
            "filename": "/assets/blocks/EC_SET_VAR_E",
            "start": 273772,
            "end": 274027
        }, {
            "filename": "/assets/blocks/ECpC_SET_VAR_E",
            "start": 274027,
            "end": 274404
        }, {
            "filename": "/assets/blocks/EFFF_VOLUME_PITCH_E",
            "start": 274404,
            "end": 274847
        }, {
            "filename": "/assets/blocks/EFF_LOOP_EFE",
            "start": 274847,
            "end": 275217
        }, {
            "filename": "/assets/blocks/EFF_SET_SCORE_E",
            "start": 275217,
            "end": 275601
        }, {
            "filename": "/assets/blocks/EFF_SFX_PLAY_FE",
            "start": 275601,
            "end": 275983
        }, {
            "filename": "/assets/blocks/EF_INSPECT_E",
            "start": 275983,
            "end": 276332
        }, {
            "filename": "/assets/blocks/EF_RANDOM_SEED_E",
            "start": 276332,
            "end": 276720
        }, {
            "filename": "/assets/blocks/EF_SET_VAR_E",
            "start": 276720,
            "end": 276971
        }, {
            "filename": "/assets/blocks/EF_SFX_STOP_E",
            "start": 276971,
            "end": 277347
        }, {
            "filename": "/assets/blocks/EFpF_SET_VAR_E",
            "start": 277347,
            "end": 277721
        }, {
            "filename": "/assets/blocks/EFpO_MENU_ITEM_E",
            "start": 277721,
            "end": 278093
        }, {
            "filename": "/assets/blocks/EFp_DEC_VAR_E",
            "start": 278093,
            "end": 278359
        }, {
            "filename": "/assets/blocks/EFp_INC_VAR_E",
            "start": 278359,
            "end": 278631
        }, {
            "filename": "/assets/blocks/EOF_SET_BOUNCE_E",
            "start": 278631,
            "end": 279023
        }, {
            "filename": "/assets/blocks/EOF_SET_FRICTION_E",
            "start": 279023,
            "end": 279419
        }, {
            "filename": "/assets/blocks/EOF_SET_MASS_E",
            "start": 279419,
            "end": 279802
        }, {
            "filename": "/assets/blocks/EOOV_ADD_CONSTRAINT_EC",
            "start": 279802,
            "end": 280253
        }, {
            "filename": "/assets/blocks/EOT_SET_VISIBLE_E",
            "start": 280253,
            "end": 280631
        }, {
            "filename": "/assets/blocks/EOVQ_SET_POS_E",
            "start": 280631,
            "end": 281093
        }, {
            "filename": "/assets/blocks/EOVVV_ADD_FORCE_E",
            "start": 281093,
            "end": 281606
        }, {
            "filename": "/assets/blocks/EOVV_SET_LOCKED_E",
            "start": 281606,
            "end": 282068
        }, {
            "filename": "/assets/blocks/EOVV_SET_VEL_E",
            "start": 282068,
            "end": 282526
        }, {
            "filename": "/assets/blocks/EO_COLLISION_EOFVE",
            "start": 282526,
            "end": 283047
        }, {
            "filename": "/assets/blocks/EO_CREATE_EO",
            "start": 283047,
            "end": 283423
        }, {
            "filename": "/assets/blocks/EO_DESTROY_E",
            "start": 283423,
            "end": 283800
        }, {
            "filename": "/assets/blocks/EO_INSPECT_E",
            "start": 283800,
            "end": 284148
        }, {
            "filename": "/assets/blocks/EO_SET_VAR_E",
            "start": 284148,
            "end": 284399
        }, {
            "filename": "/assets/blocks/EOpO_SET_VAR_E",
            "start": 284399,
            "end": 284773
        }, {
            "filename": "/assets/blocks/EQ_INSPECT_E",
            "start": 284773,
            "end": 285124
        }, {
            "filename": "/assets/blocks/EQ_SET_VAR_E",
            "start": 285124,
            "end": 285377
        }, {
            "filename": "/assets/blocks/EQpQ_SET_VAR_E",
            "start": 285377,
            "end": 285753
        }, {
            "filename": "/assets/blocks/ET_IF_EEE",
            "start": 285753,
            "end": 286117
        }, {
            "filename": "/assets/blocks/ET_INSPECT_E",
            "start": 286117,
            "end": 286466
        }, {
            "filename": "/assets/blocks/ET_SET_VAR_E",
            "start": 286466,
            "end": 286716
        }, {
            "filename": "/assets/blocks/ETpT_SET_VAR_E",
            "start": 286716,
            "end": 287090
        }, {
            "filename": "/assets/blocks/EVQF_SET_CAM_E",
            "start": 287090,
            "end": 287540
        }, {
            "filename": "/assets/blocks/EVQ_SET_LIT_E",
            "start": 287540,
            "end": 287937
        }, {
            "filename": "/assets/blocks/EV_INSPECT_E",
            "start": 287937,
            "end": 288285
        }, {
            "filename": "/assets/blocks/EV_SET_GRAVITY_E",
            "start": 288285,
            "end": 288664
        }, {
            "filename": "/assets/blocks/EV_SET_VAR_E",
            "start": 288664,
            "end": 288916
        }, {
            "filename": "/assets/blocks/EVpV_SET_VAR_E",
            "start": 288916,
            "end": 289291
        }, {
            "filename": "/assets/blocks/E_BUT_SENSOR_EE",
            "start": 289291,
            "end": 289661
        }, {
            "filename": "/assets/blocks/E_JOY_SENSOR_VE",
            "start": 289661,
            "end": 290023
        }, {
            "filename": "/assets/blocks/E_LATE_UPDATE_EE",
            "start": 290023,
            "end": 290388
        }, {
            "filename": "/assets/blocks/E_LOSE_E",
            "start": 290388,
            "end": 290761
        }, {
            "filename": "/assets/blocks/E_PLAY_EE",
            "start": 290761,
            "end": 291123
        }, {
            "filename": "/assets/blocks/E_SCREENSHOT_EE",
            "start": 291123,
            "end": 291512
        }, {
            "filename": "/assets/blocks/E_SWIPE_EVE",
            "start": 291512,
            "end": 291884
        }, {
            "filename": "/assets/blocks/E_TOUCH_EFFE",
            "start": 291884,
            "end": 292319
        }, {
            "filename": "/assets/blocks/E_WIN_E",
            "start": 292319,
            "end": 292696
        }, {
            "filename": "/assets/blocks/FALSE_T",
            "start": 292696,
            "end": 292943
        }, {
            "filename": "/assets/blocks/FFF_EULER_Q",
            "start": 292943,
            "end": 293332
        }, {
            "filename": "/assets/blocks/FFF_JOIN_V",
            "start": 293332,
            "end": 293719
        }, {
            "filename": "/assets/blocks/FF_ADD_F",
            "start": 293719,
            "end": 294018
        }, {
            "filename": "/assets/blocks/FF_DIV_F",
            "start": 294018,
            "end": 294312
        }, {
            "filename": "/assets/blocks/FF_EQL_T",
            "start": 294312,
            "end": 294613
        }, {
            "filename": "/assets/blocks/FF_GT_T",
            "start": 294613,
            "end": 294922
        }, {
            "filename": "/assets/blocks/FF_LOG_F",
            "start": 294922,
            "end": 295238
        }, {
            "filename": "/assets/blocks/FF_LT_T",
            "start": 295238,
            "end": 295545
        }, {
            "filename": "/assets/blocks/FF_MAX_F",
            "start": 295545,
            "end": 295850
        }, {
            "filename": "/assets/blocks/FF_MIN_F",
            "start": 295850,
            "end": 296156
        }, {
            "filename": "/assets/blocks/FF_MOD_F",
            "start": 296156,
            "end": 296450
        }, {
            "filename": "/assets/blocks/FF_MUL_F",
            "start": 296450,
            "end": 296755
        }, {
            "filename": "/assets/blocks/FF_POW_F",
            "start": 296755,
            "end": 297054
        }, {
            "filename": "/assets/blocks/FF_RANDOM_F",
            "start": 297054,
            "end": 297370
        }, {
            "filename": "/assets/blocks/FF_S2W_VV",
            "start": 297370,
            "end": 297701
        }, {
            "filename": "/assets/blocks/FF_SUB_F",
            "start": 297701,
            "end": 297999
        }, {
            "filename": "/assets/blocks/FLOWERS",
            "start": 297999,
            "end": 298136
        }, {
            "filename": "/assets/blocks/FOLDER_EMPTY",
            "start": 298136,
            "end": 298276
        }, {
            "filename": "/assets/blocks/FOLDER_LOCKED",
            "start": 298276,
            "end": 298469
        }, {
            "filename": "/assets/blocks/FOLDER_UNKNOWN",
            "start": 298469,
            "end": 298634
        }, {
            "filename": "/assets/blocks/FOLIAGE",
            "start": 298634,
            "end": 298726
        }, {
            "filename": "/assets/blocks/FOLIAGE_B",
            "start": 298726,
            "end": 298901
        }, {
            "filename": "/assets/blocks/FOLIAGE_BOT",
            "start": 298901,
            "end": 299034
        }, {
            "filename": "/assets/blocks/FOLIAGE_SLAB",
            "start": 299034,
            "end": 299195
        }, {
            "filename": "/assets/blocks/FOLIAGE_TOP",
            "start": 299195,
            "end": 299324
        }, {
            "filename": "/assets/blocks/FRAME_F",
            "start": 299324,
            "end": 299534
        }, {
            "filename": "/assets/blocks/F_ABS_F",
            "start": 299534,
            "end": 299751
        }, {
            "filename": "/assets/blocks/F_CEIL_F",
            "start": 299751,
            "end": 299969
        }, {
            "filename": "/assets/blocks/F_COS_F",
            "start": 299969,
            "end": 300187
        }, {
            "filename": "/assets/blocks/F_FLOOR_F",
            "start": 300187,
            "end": 300408
        }, {
            "filename": "/assets/blocks/F_NEG_F",
            "start": 300408,
            "end": 300621
        }, {
            "filename": "/assets/blocks/F_ROUND_F",
            "start": 300621,
            "end": 300841
        }, {
            "filename": "/assets/blocks/F_SIN_F",
            "start": 300841,
            "end": 301063
        }, {
            "filename": "/assets/blocks/FpF_LIST_ELEMENT_Fp",
            "start": 301063,
            "end": 301425
        }, {
            "filename": "/assets/blocks/GOAL",
            "start": 301425,
            "end": 301864
        }, {
            "filename": "/assets/blocks/GRASS_A",
            "start": 301864,
            "end": 302007
        }, {
            "filename": "/assets/blocks/GRASS_B",
            "start": 302007,
            "end": 302169
        }, {
            "filename": "/assets/blocks/IO",
            "start": 302169,
            "end": 302273
        }, {
            "filename": "/assets/blocks/L2R",
            "start": 302273,
            "end": 302381
        }, {
            "filename": "/assets/blocks/MARKER",
            "start": 302381,
            "end": 302494
        }, {
            "filename": "/assets/blocks/MOTOR_X",
            "start": 302494,
            "end": 303125
        }, {
            "filename": "/assets/blocks/MOTOR_Y",
            "start": 303125,
            "end": 303982
        }, {
            "filename": "/assets/blocks/MOTOR_Z",
            "start": 303982,
            "end": 304639
        }, {
            "filename": "/assets/blocks/MULTI_IN",
            "start": 304639,
            "end": 304748
        }, {
            "filename": "/assets/blocks/MULTI_IN_E",
            "start": 304748,
            "end": 304861
        }, {
            "filename": "/assets/blocks/MULTI_OUT",
            "start": 304861,
            "end": 304973
        }, {
            "filename": "/assets/blocks/MULTI_OUT_E",
            "start": 304973,
            "end": 305088
        }, {
            "filename": "/assets/blocks/NONE",
            "start": 305088,
            "end": 305298
        }, {
            "filename": "/assets/blocks/NUMBER_F",
            "start": 305298,
            "end": 305547
        }, {
            "filename": "/assets/blocks/OBSTACLE",
            "start": 305547,
            "end": 305675
        }, {
            "filename": "/assets/blocks/OO_EQL_T",
            "start": 305675,
            "end": 305978
        }, {
            "filename": "/assets/blocks/O_GET_POS_VQ",
            "start": 305978,
            "end": 306312
        }, {
            "filename": "/assets/blocks/O_GET_SIZE_VV",
            "start": 306312,
            "end": 306636
        }, {
            "filename": "/assets/blocks/O_GET_VEL_VV",
            "start": 306636,
            "end": 306968
        }, {
            "filename": "/assets/blocks/OpF_LIST_ELEMENT_Op",
            "start": 306968,
            "end": 307329
        }, {
            "filename": "/assets/blocks/PARTICLE",
            "start": 307329,
            "end": 307441
        }, {
            "filename": "/assets/blocks/PASS_THROUGH",
            "start": 307441,
            "end": 307565
        }, {
            "filename": "/assets/blocks/QQF_LERP_Q",
            "start": 307565,
            "end": 307954
        }, {
            "filename": "/assets/blocks/QQ_MUL_Q",
            "start": 307954,
            "end": 308257
        }, {
            "filename": "/assets/blocks/QUATERNION_Q",
            "start": 308257,
            "end": 308602
        }, {
            "filename": "/assets/blocks/Q_EULER_FFF",
            "start": 308602,
            "end": 308991
        }, {
            "filename": "/assets/blocks/Q_INV_Q",
            "start": 308991,
            "end": 309206
        }, {
            "filename": "/assets/blocks/QpF_LIST_ELEMENT_Qp",
            "start": 309206,
            "end": 309570
        }, {
            "filename": "/assets/blocks/SCREEN_SIZE_FF",
            "start": 309570,
            "end": 309885
        }, {
            "filename": "/assets/blocks/SCRIPT",
            "start": 309885,
            "end": 310031
        }, {
            "filename": "/assets/blocks/SFX_Fp",
            "start": 310031,
            "end": 310353
        }, {
            "filename": "/assets/blocks/SHRUB",
            "start": 310353,
            "end": 310552
        }, {
            "filename": "/assets/blocks/SLATE",
            "start": 310552,
            "end": 310646
        }, {
            "filename": "/assets/blocks/SLATE_B",
            "start": 310646,
            "end": 310851
        }, {
            "filename": "/assets/blocks/SLATE_BOT",
            "start": 310851,
            "end": 310989
        }, {
            "filename": "/assets/blocks/SLATE_NE",
            "start": 310989,
            "end": 311102
        }, {
            "filename": "/assets/blocks/SLATE_NW",
            "start": 311102,
            "end": 311222
        }, {
            "filename": "/assets/blocks/SLATE_SE",
            "start": 311222,
            "end": 311338
        }, {
            "filename": "/assets/blocks/SLATE_SW",
            "start": 311338,
            "end": 311458
        }, {
            "filename": "/assets/blocks/SLATE_TOP",
            "start": 311458,
            "end": 311582
        }, {
            "filename": "/assets/blocks/SLIDER",
            "start": 311582,
            "end": 313484
        }, {
            "filename": "/assets/blocks/SLIDER_X",
            "start": 313484,
            "end": 313764
        }, {
            "filename": "/assets/blocks/SLIDER_Y",
            "start": 313764,
            "end": 314085
        }, {
            "filename": "/assets/blocks/SLIDER_Z",
            "start": 314085,
            "end": 314383
        }, {
            "filename": "/assets/blocks/SPHERE",
            "start": 314383,
            "end": 314523
        }, {
            "filename": "/assets/blocks/STEEL",
            "start": 314523,
            "end": 314663
        }, {
            "filename": "/assets/blocks/STICK_DE",
            "start": 314663,
            "end": 314814
        }, {
            "filename": "/assets/blocks/STICK_DN",
            "start": 314814,
            "end": 314966
        }, {
            "filename": "/assets/blocks/STICK_DS",
            "start": 314966,
            "end": 315123
        }, {
            "filename": "/assets/blocks/STICK_DW",
            "start": 315123,
            "end": 315281
        }, {
            "filename": "/assets/blocks/STICK_NE",
            "start": 315281,
            "end": 315435
        }, {
            "filename": "/assets/blocks/STICK_NW",
            "start": 315435,
            "end": 315598
        }, {
            "filename": "/assets/blocks/STICK_SE",
            "start": 315598,
            "end": 315755
        }, {
            "filename": "/assets/blocks/STICK_SW",
            "start": 315755,
            "end": 315915
        }, {
            "filename": "/assets/blocks/STICK_UE",
            "start": 315915,
            "end": 316069
        }, {
            "filename": "/assets/blocks/STICK_UN",
            "start": 316069,
            "end": 316239
        }, {
            "filename": "/assets/blocks/STICK_US",
            "start": 316239,
            "end": 316396
        }, {
            "filename": "/assets/blocks/STICK_UW",
            "start": 316396,
            "end": 316551
        }, {
            "filename": "/assets/blocks/STICK_X",
            "start": 316551,
            "end": 316693
        }, {
            "filename": "/assets/blocks/STICK_Y",
            "start": 316693,
            "end": 316842
        }, {
            "filename": "/assets/blocks/STICK_Z",
            "start": 316842,
            "end": 316980
        }, {
            "filename": "/assets/blocks/STONE",
            "start": 316980,
            "end": 317074
        }, {
            "filename": "/assets/blocks/STONE_B",
            "start": 317074,
            "end": 317251
        }, {
            "filename": "/assets/blocks/STONE_BLOCK",
            "start": 317251,
            "end": 317449
        }, {
            "filename": "/assets/blocks/STONE_BOT",
            "start": 317449,
            "end": 317587
        }, {
            "filename": "/assets/blocks/STONE_LOWER",
            "start": 317587,
            "end": 317728
        }, {
            "filename": "/assets/blocks/STONE_PILLAR",
            "start": 317728,
            "end": 317883
        }, {
            "filename": "/assets/blocks/STONE_SLAB",
            "start": 317883,
            "end": 318031
        }, {
            "filename": "/assets/blocks/STONE_TOP",
            "start": 318031,
            "end": 318156
        }, {
            "filename": "/assets/blocks/SWIPE_CHICK",
            "start": 318156,
            "end": 320933
        }, {
            "filename": "/assets/blocks/THIS_O",
            "start": 320933,
            "end": 321048
        }, {
            "filename": "/assets/blocks/TILT_BALL",
            "start": 321048,
            "end": 321295
        }, {
            "filename": "/assets/blocks/TRUE_T",
            "start": 321295,
            "end": 321541
        }, {
            "filename": "/assets/blocks/TT_AND_T",
            "start": 321541,
            "end": 321834
        }, {
            "filename": "/assets/blocks/TT_EQL_T",
            "start": 321834,
            "end": 322135
        }, {
            "filename": "/assets/blocks/TT_OR_T",
            "start": 322135,
            "end": 322426
        }, {
            "filename": "/assets/blocks/T_NOT_T",
            "start": 322426,
            "end": 322640
        }, {
            "filename": "/assets/blocks/TpF_LIST_ELEMENT_Tp",
            "start": 322640,
            "end": 323002
        }, {
            "filename": "/assets/blocks/VAR_Cp",
            "start": 323002,
            "end": 323255
        }, {
            "filename": "/assets/blocks/VAR_Fp",
            "start": 323255,
            "end": 323504
        }, {
            "filename": "/assets/blocks/VAR_Op",
            "start": 323504,
            "end": 323754
        }, {
            "filename": "/assets/blocks/VAR_Qp",
            "start": 323754,
            "end": 324006
        }, {
            "filename": "/assets/blocks/VAR_Tp",
            "start": 324006,
            "end": 324256
        }, {
            "filename": "/assets/blocks/VAR_Vp",
            "start": 324256,
            "end": 324506
        }, {
            "filename": "/assets/blocks/VECTOR_V",
            "start": 324506,
            "end": 324849
        }, {
            "filename": "/assets/blocks/VF_AXIS_ANG_Q",
            "start": 324849,
            "end": 325174
        }, {
            "filename": "/assets/blocks/VF_MUL_V",
            "start": 325174,
            "end": 325475
        }, {
            "filename": "/assets/blocks/VQ_MUL_V",
            "start": 325475,
            "end": 325777
        }, {
            "filename": "/assets/blocks/VVVV_LINE_VS_PLANE_V",
            "start": 325777,
            "end": 326222
        }, {
            "filename": "/assets/blocks/VV_ADD_V",
            "start": 326222,
            "end": 326521
        }, {
            "filename": "/assets/blocks/VV_CROSS_V",
            "start": 326521,
            "end": 326826
        }, {
            "filename": "/assets/blocks/VV_DIST_F",
            "start": 326826,
            "end": 327125
        }, {
            "filename": "/assets/blocks/VV_DOT_F",
            "start": 327125,
            "end": 327438
        }, {
            "filename": "/assets/blocks/VV_EQL_T",
            "start": 327438,
            "end": 327740
        }, {
            "filename": "/assets/blocks/VV_LOOK_ROT_Q",
            "start": 327740,
            "end": 328067
        }, {
            "filename": "/assets/blocks/VV_RAYCAST_TVO",
            "start": 328067,
            "end": 328452
        }, {
            "filename": "/assets/blocks/VV_SUB_V",
            "start": 328452,
            "end": 328750
        }, {
            "filename": "/assets/blocks/V_NORMALIZE_V",
            "start": 328750,
            "end": 328974
        }, {
            "filename": "/assets/blocks/V_SPLIT_FFF",
            "start": 328974,
            "end": 329360
        }, {
            "filename": "/assets/blocks/V_W2S_FF",
            "start": 329360,
            "end": 329692
        }, {
            "filename": "/assets/blocks/VpF_LIST_ELEMENT_Vp",
            "start": 329692,
            "end": 330055
        }, {
            "filename": "/assets/blocks/WHEEL",
            "start": 330055,
            "end": 331796
        }, {
            "filename": "/assets/blocks/WOOD_LOWER_X",
            "start": 331796,
            "end": 331987
        }, {
            "filename": "/assets/blocks/WOOD_LOWER_Z",
            "start": 331987,
            "end": 332177
        }, {
            "filename": "/assets/blocks/WOOD_UPPER_X",
            "start": 332177,
            "end": 332368
        }, {
            "filename": "/assets/blocks/WOOD_UPPER_Z",
            "start": 332368,
            "end": 332558
        }, {
            "filename": "/assets/blocks/WOOD_X",
            "start": 332558,
            "end": 332733
        }, {
            "filename": "/assets/blocks/WOOD_Y",
            "start": 332733,
            "end": 332923
        }, {
            "filename": "/assets/blocks/WOOD_Z",
            "start": 332923,
            "end": 333094
        }, {
            "filename": "/assets/daily/5A6818207F21049E",
            "start": 333094,
            "end": 335949
        }, {
            "filename": "/assets/daily/5A6818207F21049E.webp",
            "start": 335949,
            "end": 337333
        }, {
            "filename": "/assets/daily/5AEDD85F09AE9AE2",
            "start": 337333,
            "end": 338786
        }, {
            "filename": "/assets/daily/5AEDD85F09AE9AE2.webp",
            "start": 338786,
            "end": 339906
        }, {
            "filename": "/assets/daily/5B04EDCE313419F7",
            "start": 339906,
            "end": 348438
        }, {
            "filename": "/assets/daily/5B04EDCE313419F7.webp",
            "start": 348438,
            "end": 352196
        }, {
            "filename": "/assets/daily/5B48E0402A39D525",
            "start": 352196,
            "end": 363185
        }, {
            "filename": "/assets/daily/5B48E0402A39D525.webp",
            "start": 363185,
            "end": 368206
        }, {
            "filename": "/assets/daily/5B7AAE24DD00AE95",
            "start": 368206,
            "end": 384500
        }, {
            "filename": "/assets/daily/5B7AAE24DD00AE95.webp",
            "start": 384500,
            "end": 386795
        }, {
            "filename": "/assets/daily/5B9EBE3E669CBF12",
            "start": 386795,
            "end": 412473
        }, {
            "filename": "/assets/daily/5B9EBE3E669CBF12.webp",
            "start": 412473,
            "end": 418411
        }, {
            "filename": "/assets/daily/5BD059EDADF51D52",
            "start": 418411,
            "end": 427860
        }, {
            "filename": "/assets/daily/5BD059EDADF51D52.webp",
            "start": 427860,
            "end": 428163
        }, {
            "filename": "/assets/daily/5BD5944CAA9BB5E0",
            "start": 428163,
            "end": 440926
        }, {
            "filename": "/assets/daily/5BD5944CAA9BB5E0.webp",
            "start": 440926,
            "end": 441982
        }, {
            "filename": "/assets/daily/5BEC8352E4E078B1",
            "start": 441982,
            "end": 446363
        }, {
            "filename": "/assets/daily/5BEC8352E4E078B1.webp",
            "start": 446363,
            "end": 447758
        }, {
            "filename": "/assets/daily/5C3D4BD690D74FED",
            "start": 447758,
            "end": 460258
        }, {
            "filename": "/assets/daily/5C3D4BD690D74FED.webp",
            "start": 460258,
            "end": 460867
        }, {
            "filename": "/assets/daily/5C5DE4D93967B0A5",
            "start": 460867,
            "end": 481136
        }, {
            "filename": "/assets/daily/5C5DE4D93967B0A5.webp",
            "start": 481136,
            "end": 484412
        }, {
            "filename": "/assets/daily/5C6C81275F4BA24D",
            "start": 484412,
            "end": 498549
        }, {
            "filename": "/assets/daily/5C6C81275F4BA24D.webp",
            "start": 498549,
            "end": 501049
        }, {
            "filename": "/assets/daily/5C72AA5479863C81",
            "start": 501049,
            "end": 512606
        }, {
            "filename": "/assets/daily/5C72AA5479863C81.webp",
            "start": 512606,
            "end": 513636
        }, {
            "filename": "/assets/daily/5C74CB320F057263",
            "start": 513636,
            "end": 540270
        }, {
            "filename": "/assets/daily/5C74CB320F057263.webp",
            "start": 540270,
            "end": 542281
        }, {
            "filename": "/assets/daily/5C7C994B8E46A717",
            "start": 542281,
            "end": 553999
        }, {
            "filename": "/assets/daily/5C7C994B8E46A717.webp",
            "start": 553999,
            "end": 554965
        }, {
            "filename": "/assets/daily/5C86641A890D3A4E",
            "start": 554965,
            "end": 562162
        }, {
            "filename": "/assets/daily/5C86641A890D3A4E.webp",
            "start": 562162,
            "end": 566207
        }, {
            "filename": "/assets/daily/5C893D999E99CD74",
            "start": 566207,
            "end": 572950
        }, {
            "filename": "/assets/daily/5C893D999E99CD74.webp",
            "start": 572950,
            "end": 575485
        }, {
            "filename": "/assets/daily/5C9791AF15FB9DF9",
            "start": 575485,
            "end": 590164
        }, {
            "filename": "/assets/daily/5C9791AF15FB9DF9.webp",
            "start": 590164,
            "end": 591278
        }, {
            "filename": "/assets/daily/5C9E59C073780F10",
            "start": 591278,
            "end": 601174
        }, {
            "filename": "/assets/daily/5C9E59C073780F10.webp",
            "start": 601174,
            "end": 602579
        }, {
            "filename": "/assets/daily/5CA0DA40A85D6208",
            "start": 602579,
            "end": 615381
        }, {
            "filename": "/assets/daily/5CA0DA40A85D6208.webp",
            "start": 615381,
            "end": 616796
        }, {
            "filename": "/assets/daily/5CA52D8AC0F5CCB9",
            "start": 616796,
            "end": 641370
        }, {
            "filename": "/assets/daily/5CA52D8AC0F5CCB9.webp",
            "start": 641370,
            "end": 646284
        }, {
            "filename": "/assets/daily/5CB80970E9D6C005",
            "start": 646284,
            "end": 660074
        }, {
            "filename": "/assets/daily/5CB80970E9D6C005.webp",
            "start": 660074,
            "end": 662026
        }, {
            "filename": "/assets/daily/5CC7412ACD5FB747",
            "start": 662026,
            "end": 672109
        }, {
            "filename": "/assets/daily/5CC7412ACD5FB747.webp",
            "start": 672109,
            "end": 674393
        }, {
            "filename": "/assets/daily/5CCF984B45C9F044",
            "start": 674393,
            "end": 683623
        }, {
            "filename": "/assets/daily/5CCF984B45C9F044.webp",
            "start": 683623,
            "end": 689264
        }, {
            "filename": "/assets/daily/5CD5A9283BFC8B0B",
            "start": 689264,
            "end": 703091
        }, {
            "filename": "/assets/daily/5CD5A9283BFC8B0B.webp",
            "start": 703091,
            "end": 703922
        }, {
            "filename": "/assets/daily/5CDD5DBD80C86BBE",
            "start": 703922,
            "end": 716195
        }, {
            "filename": "/assets/daily/5CDD5DBD80C86BBE.webp",
            "start": 716195,
            "end": 717411
        }, {
            "filename": "/assets/daily/5CE83E034F30F5BB",
            "start": 717411,
            "end": 725294
        }, {
            "filename": "/assets/daily/5CE83E034F30F5BB.webp",
            "start": 725294,
            "end": 726318
        }, {
            "filename": "/assets/daily/5CECE8F8BDE5E8CA",
            "start": 726318,
            "end": 746442
        }, {
            "filename": "/assets/daily/5CECE8F8BDE5E8CA.webp",
            "start": 746442,
            "end": 749461
        }, {
            "filename": "/assets/daily/5CFA0C69859A727F",
            "start": 749461,
            "end": 765034
        }, {
            "filename": "/assets/daily/5CFA0C69859A727F.webp",
            "start": 765034,
            "end": 773116
        }, {
            "filename": "/assets/daily/5CFB51C5F0312016",
            "start": 773116,
            "end": 798465
        }, {
            "filename": "/assets/daily/5CFB51C5F0312016.webp",
            "start": 798465,
            "end": 800048
        }, {
            "filename": "/assets/daily/5D01F6D05B05C161",
            "start": 800048,
            "end": 805552
        }, {
            "filename": "/assets/daily/5D01F6D05B05C161.webp",
            "start": 805552,
            "end": 809917
        }, {
            "filename": "/assets/daily/5D13591AB08F0F0B",
            "start": 809917,
            "end": 819957
        }, {
            "filename": "/assets/daily/5D13591AB08F0F0B.webp",
            "start": 819957,
            "end": 823179
        }, {
            "filename": "/assets/daily/5D13BAFD669BC9EE",
            "start": 823179,
            "end": 860332
        }, {
            "filename": "/assets/daily/5D13BAFD669BC9EE.webp",
            "start": 860332,
            "end": 868846
        }, {
            "filename": "/assets/daily/5D187EB68D628035",
            "start": 868846,
            "end": 884347
        }, {
            "filename": "/assets/daily/5D187EB68D628035.webp",
            "start": 884347,
            "end": 885419
        }, {
            "filename": "/assets/daily/5D305F5A730CDA13",
            "start": 885419,
            "end": 894642
        }, {
            "filename": "/assets/daily/5D305F5A730CDA13.webp",
            "start": 894642,
            "end": 896569
        }, {
            "filename": "/assets/daily/5D34288C4EB9B91C",
            "start": 896569,
            "end": 914081
        }, {
            "filename": "/assets/daily/5D34288C4EB9B91C.webp",
            "start": 914081,
            "end": 919062
        }, {
            "filename": "/assets/daily/5D43327D2DCDAA22",
            "start": 919062,
            "end": 943699
        }, {
            "filename": "/assets/daily/5D43327D2DCDAA22.webp",
            "start": 943699,
            "end": 946765
        }, {
            "filename": "/assets/daily/5D9C668EFD2EA6FB",
            "start": 946765,
            "end": 959778
        }, {
            "filename": "/assets/daily/5D9C668EFD2EA6FB.webp",
            "start": 959778,
            "end": 961617
        }, {
            "filename": "/assets/daily/5DD9F42718DE9F12",
            "start": 961617,
            "end": 978686
        }, {
            "filename": "/assets/daily/5DD9F42718DE9F12.webp",
            "start": 978686,
            "end": 980119
        }, {
            "filename": "/assets/daily/5DDEA6DCA1EBA798",
            "start": 980119,
            "end": 986722
        }, {
            "filename": "/assets/daily/5DDEA6DCA1EBA798.webp",
            "start": 986722,
            "end": 988780
        }, {
            "filename": "/assets/daily/5DEA8DAD5F804506",
            "start": 988780,
            "end": 998611
        }, {
            "filename": "/assets/daily/5DEA8DAD5F804506.webp",
            "start": 998611,
            "end": 1000625
        }, {
            "filename": "/assets/daily/5DECAAB70F71EA92",
            "start": 1000625,
            "end": 1033425
        }, {
            "filename": "/assets/daily/5DECAAB70F71EA92.webp",
            "start": 1033425,
            "end": 1042935
        }, {
            "filename": "/assets/daily/5DF8E41842F0233D",
            "start": 1042935,
            "end": 1075038
        }, {
            "filename": "/assets/daily/5DF8E41842F0233D.webp",
            "start": 1075038,
            "end": 1078609
        }, {
            "filename": "/assets/daily/5DFEEE25B4B7FA54",
            "start": 1078609,
            "end": 1118316
        }, {
            "filename": "/assets/daily/5DFEEE25B4B7FA54.webp",
            "start": 1118316,
            "end": 1121571
        }, {
            "filename": "/assets/daily/5E03DC7EA1C9CF6E",
            "start": 1121571,
            "end": 1142871
        }, {
            "filename": "/assets/daily/5E03DC7EA1C9CF6E.webp",
            "start": 1142871,
            "end": 1145081
        }, {
            "filename": "/assets/daily/5E0A4B498E2D561E",
            "start": 1145081,
            "end": 1206420
        }, {
            "filename": "/assets/daily/5E0A4B498E2D561E.webp",
            "start": 1206420,
            "end": 1209409
        }, {
            "filename": "/assets/daily/5E13E17968940F5B",
            "start": 1209409,
            "end": 1234829
        }, {
            "filename": "/assets/daily/5E13E17968940F5B.webp",
            "start": 1234829,
            "end": 1236340
        }, {
            "filename": "/assets/daily/5E144CA9724DEE22",
            "start": 1236340,
            "end": 1245481
        }, {
            "filename": "/assets/daily/5E144CA9724DEE22.webp",
            "start": 1245481,
            "end": 1246707
        }, {
            "filename": "/assets/daily/5E1480E087D65091",
            "start": 1246707,
            "end": 1263579
        }, {
            "filename": "/assets/daily/5E1480E087D65091.webp",
            "start": 1263579,
            "end": 1265458
        }, {
            "filename": "/assets/daily/5E1DB2EF1CFBAA2E",
            "start": 1265458,
            "end": 1269101
        }, {
            "filename": "/assets/daily/5E1DB2EF1CFBAA2E.webp",
            "start": 1269101,
            "end": 1269688
        }, {
            "filename": "/assets/daily/5E2886FD4AADAB11",
            "start": 1269688,
            "end": 1301347
        }, {
            "filename": "/assets/daily/5E2886FD4AADAB11.webp",
            "start": 1301347,
            "end": 1308492
        }, {
            "filename": "/assets/daily/5E32C758CC4B1049",
            "start": 1308492,
            "end": 1334015
        }, {
            "filename": "/assets/daily/5E32C758CC4B1049.webp",
            "start": 1334015,
            "end": 1336276
        }, {
            "filename": "/assets/daily/5E3329B2473ED6E6",
            "start": 1336276,
            "end": 1352712
        }, {
            "filename": "/assets/daily/5E3329B2473ED6E6.webp",
            "start": 1352712,
            "end": 1354099
        }, {
            "filename": "/assets/daily/5E46DD286A449568",
            "start": 1354099,
            "end": 1376657
        }, {
            "filename": "/assets/daily/5E46DD286A449568.webp",
            "start": 1376657,
            "end": 1379759
        }, {
            "filename": "/assets/daily/5E4AD6589B57FD60",
            "start": 1379759,
            "end": 1389680
        }, {
            "filename": "/assets/daily/5E4AD6589B57FD60.webp",
            "start": 1389680,
            "end": 1390850
        }, {
            "filename": "/assets/daily/5E4CF4E1DFD12E68",
            "start": 1390850,
            "end": 1410238
        }, {
            "filename": "/assets/daily/5E4CF4E1DFD12E68.webp",
            "start": 1410238,
            "end": 1415008
        }, {
            "filename": "/assets/daily/5E5089520B93434C",
            "start": 1415008,
            "end": 1430836
        }, {
            "filename": "/assets/daily/5E5089520B93434C.webp",
            "start": 1430836,
            "end": 1431541
        }, {
            "filename": "/assets/daily/5E53C97AEC34342E",
            "start": 1431541,
            "end": 1451170
        }, {
            "filename": "/assets/daily/5E53C97AEC34342E.webp",
            "start": 1451170,
            "end": 1455479
        }, {
            "filename": "/assets/daily/5E5F7D7D54E8B5E6",
            "start": 1455479,
            "end": 1487740
        }, {
            "filename": "/assets/daily/5E5F7D7D54E8B5E6.webp",
            "start": 1487740,
            "end": 1489902
        }, {
            "filename": "/assets/daily/5E63700B7B7F1E88",
            "start": 1489902,
            "end": 1503798
        }, {
            "filename": "/assets/daily/5E63700B7B7F1E88.webp",
            "start": 1503798,
            "end": 1504597
        }, {
            "filename": "/assets/daily/5E68A3273A6DC951",
            "start": 1504597,
            "end": 1522570
        }, {
            "filename": "/assets/daily/5E68A3273A6DC951.webp",
            "start": 1522570,
            "end": 1525425
        }, {
            "filename": "/assets/daily/5E68D8C9943758B0",
            "start": 1525425,
            "end": 1553481
        }, {
            "filename": "/assets/daily/5E68D8C9943758B0.webp",
            "start": 1553481,
            "end": 1557797
        }, {
            "filename": "/assets/daily/5E6B0C7D4B1ED3A4",
            "start": 1557797,
            "end": 1574963
        }, {
            "filename": "/assets/daily/5E6B0C7D4B1ED3A4.webp",
            "start": 1574963,
            "end": 1578466
        }, {
            "filename": "/assets/daily/5E78D7A40B6741ED",
            "start": 1578466,
            "end": 1609135
        }, {
            "filename": "/assets/daily/5E78D7A40B6741ED.webp",
            "start": 1609135,
            "end": 1611087
        }, {
            "filename": "/assets/daily/5E797F2778EEEAD9",
            "start": 1611087,
            "end": 1618302
        }, {
            "filename": "/assets/daily/5E797F2778EEEAD9.webp",
            "start": 1618302,
            "end": 1619299
        }, {
            "filename": "/assets/daily/5E83CE86C36B1375",
            "start": 1619299,
            "end": 1650105
        }, {
            "filename": "/assets/daily/5E83CE86C36B1375.webp",
            "start": 1650105,
            "end": 1651579
        }, {
            "filename": "/assets/daily/5E85B18268189C91",
            "start": 1651579,
            "end": 1679278
        }, {
            "filename": "/assets/daily/5E85B18268189C91.webp",
            "start": 1679278,
            "end": 1682683
        }, {
            "filename": "/assets/daily/5E887D48900364C7",
            "start": 1682683,
            "end": 1699991
        }, {
            "filename": "/assets/daily/5E887D48900364C7.webp",
            "start": 1699991,
            "end": 1702917
        }, {
            "filename": "/assets/daily/5E88C38AC87BF504",
            "start": 1702917,
            "end": 1717370
        }, {
            "filename": "/assets/daily/5E88C38AC87BF504.webp",
            "start": 1717370,
            "end": 1718056
        }, {
            "filename": "/assets/daily/5E8DD2233619024B",
            "start": 1718056,
            "end": 1723848
        }, {
            "filename": "/assets/daily/5E8DD2233619024B.webp",
            "start": 1723848,
            "end": 1725637
        }, {
            "filename": "/assets/daily/5E99693299966548",
            "start": 1725637,
            "end": 1743272
        }, {
            "filename": "/assets/daily/5E99693299966548.webp",
            "start": 1743272,
            "end": 1744266
        }, {
            "filename": "/assets/daily/5E99CD887C4A8028",
            "start": 1744266,
            "end": 1767271
        }, {
            "filename": "/assets/daily/5E99CD887C4A8028.webp",
            "start": 1767271,
            "end": 1770307
        }, {
            "filename": "/assets/daily/5E9C15AF1E393F81",
            "start": 1770307,
            "end": 1794679
        }, {
            "filename": "/assets/daily/5E9C15AF1E393F81.webp",
            "start": 1794679,
            "end": 1797658
        }, {
            "filename": "/assets/daily/5E9C23569F24A38A",
            "start": 1797658,
            "end": 1825780
        }, {
            "filename": "/assets/daily/5E9C23569F24A38A.webp",
            "start": 1825780,
            "end": 1826916
        }, {
            "filename": "/assets/daily/5EA0A2B023A8D226",
            "start": 1826916,
            "end": 1858340
        }, {
            "filename": "/assets/daily/5EA0A2B023A8D226.webp",
            "start": 1858340,
            "end": 1862259
        }, {
            "filename": "/assets/daily/5EA28212C0DB7331",
            "start": 1862259,
            "end": 1872599
        }, {
            "filename": "/assets/daily/5EA28212C0DB7331.webp",
            "start": 1872599,
            "end": 1873831
        }, {
            "filename": "/assets/daily/5EA5A186600222DF",
            "start": 1873831,
            "end": 1886130
        }, {
            "filename": "/assets/daily/5EA5A186600222DF.webp",
            "start": 1886130,
            "end": 1886642
        }, {
            "filename": "/assets/daily/5EA7CDFE892C982F",
            "start": 1886642,
            "end": 1904171
        }, {
            "filename": "/assets/daily/5EA7CDFE892C982F.webp",
            "start": 1904171,
            "end": 1905769
        }, {
            "filename": "/assets/daily/5EAADDBF8ECE01D2",
            "start": 1905769,
            "end": 1926893
        }, {
            "filename": "/assets/daily/5EAADDBF8ECE01D2.webp",
            "start": 1926893,
            "end": 1927670
        }, {
            "filename": "/assets/daily/5EAE3D1A8400B1FD",
            "start": 1927670,
            "end": 1949281
        }, {
            "filename": "/assets/daily/5EAE3D1A8400B1FD.webp",
            "start": 1949281,
            "end": 1954802
        }, {
            "filename": "/assets/daily/5EB02027C9BE8CDA",
            "start": 1954802,
            "end": 1978481
        }, {
            "filename": "/assets/daily/5EB02027C9BE8CDA.webp",
            "start": 1978481,
            "end": 1982292
        }, {
            "filename": "/assets/daily/5EB4DEC6401A5BFA",
            "start": 1982292,
            "end": 2003952
        }, {
            "filename": "/assets/daily/5EB4DEC6401A5BFA.webp",
            "start": 2003952,
            "end": 2006503
        }, {
            "filename": "/assets/daily/5EB90D8FA8111876",
            "start": 2006503,
            "end": 2033920
        }, {
            "filename": "/assets/daily/5EB90D8FA8111876.webp",
            "start": 2033920,
            "end": 2035531
        }, {
            "filename": "/assets/daily/5EBACACFAB662A20",
            "start": 2035531,
            "end": 2047996
        }, {
            "filename": "/assets/daily/5EBACACFAB662A20.webp",
            "start": 2047996,
            "end": 2049488
        }, {
            "filename": "/assets/daily/5EBB1F2D726B2805",
            "start": 2049488,
            "end": 2061424
        }, {
            "filename": "/assets/daily/5EBB1F2D726B2805.webp",
            "start": 2061424,
            "end": 2065997
        }, {
            "filename": "/assets/daily/5EBB62523C0B03D5",
            "start": 2065997,
            "end": 2089758
        }, {
            "filename": "/assets/daily/5EBB62523C0B03D5.webp",
            "start": 2089758,
            "end": 2090935
        }, {
            "filename": "/assets/daily/5EBF7E2DB83FE37A",
            "start": 2090935,
            "end": 2097822
        }, {
            "filename": "/assets/daily/5EBF7E2DB83FE37A.webp",
            "start": 2097822,
            "end": 2099894
        }, {
            "filename": "/assets/daily/5EC0D757BC8BD207",
            "start": 2099894,
            "end": 2119296
        }, {
            "filename": "/assets/daily/5EC0D757BC8BD207.webp",
            "start": 2119296,
            "end": 2123543
        }, {
            "filename": "/assets/daily/5ECD0DCA893FC63B",
            "start": 2123543,
            "end": 2131206
        }, {
            "filename": "/assets/daily/5ECD0DCA893FC63B.webp",
            "start": 2131206,
            "end": 2132504
        }, {
            "filename": "/assets/daily/5ECE0271F09526EB",
            "start": 2132504,
            "end": 2148697
        }, {
            "filename": "/assets/daily/5ECE0271F09526EB.webp",
            "start": 2148697,
            "end": 2149212
        }, {
            "filename": "/assets/daily/5ED2257D01367CE5",
            "start": 2149212,
            "end": 2177327
        }, {
            "filename": "/assets/daily/5ED2257D01367CE5.webp",
            "start": 2177327,
            "end": 2179241
        }, {
            "filename": "/assets/daily/5ED47DB90075489B",
            "start": 2179241,
            "end": 2189990
        }, {
            "filename": "/assets/daily/5ED47DB90075489B.webp",
            "start": 2189990,
            "end": 2193300
        }, {
            "filename": "/assets/daily/5EDA2A6995AD4384",
            "start": 2193300,
            "end": 2220604
        }, {
            "filename": "/assets/daily/5EDA2A6995AD4384.webp",
            "start": 2220604,
            "end": 2222307
        }, {
            "filename": "/assets/daily/5EE1261C7932BCAA",
            "start": 2222307,
            "end": 2227993
        }, {
            "filename": "/assets/daily/5EE1261C7932BCAA.webp",
            "start": 2227993,
            "end": 2228886
        }, {
            "filename": "/assets/daily/5EE1691B3B3F2593",
            "start": 2228886,
            "end": 2238314
        }, {
            "filename": "/assets/daily/5EE1691B3B3F2593.webp",
            "start": 2238314,
            "end": 2240488
        }, {
            "filename": "/assets/daily/5EE1D6FFF84521B6",
            "start": 2240488,
            "end": 2263530
        }, {
            "filename": "/assets/daily/5EE1D6FFF84521B6.webp",
            "start": 2263530,
            "end": 2265232
        }, {
            "filename": "/assets/daily/5EE418F188962CCA",
            "start": 2265232,
            "end": 2280316
        }, {
            "filename": "/assets/daily/5EE418F188962CCA.webp",
            "start": 2280316,
            "end": 2283652
        }, {
            "filename": "/assets/daily/5EE63A5F0BB69F11",
            "start": 2283652,
            "end": 2307642
        }, {
            "filename": "/assets/daily/5EE63A5F0BB69F11.webp",
            "start": 2307642,
            "end": 2314475
        }, {
            "filename": "/assets/daily/5EE717D327461A13",
            "start": 2314475,
            "end": 2342590
        }, {
            "filename": "/assets/daily/5EE717D327461A13.webp",
            "start": 2342590,
            "end": 2343250
        }, {
            "filename": "/assets/daily/5EEDA9F331703888",
            "start": 2343250,
            "end": 2378710
        }, {
            "filename": "/assets/daily/5EEDA9F331703888.webp",
            "start": 2378710,
            "end": 2379937
        }, {
            "filename": "/assets/daily/5EEF098AED32F544",
            "start": 2379937,
            "end": 2391983
        }, {
            "filename": "/assets/daily/5EEF098AED32F544.webp",
            "start": 2391983,
            "end": 2393969
        }, {
            "filename": "/assets/daily/5EFDCF657950CD8D",
            "start": 2393969,
            "end": 2412161
        }, {
            "filename": "/assets/daily/5EFDCF657950CD8D.webp",
            "start": 2412161,
            "end": 2415246
        }, {
            "filename": "/assets/daily/5F06B79199C1DE16",
            "start": 2415246,
            "end": 2433964
        }, {
            "filename": "/assets/daily/5F06B79199C1DE16.webp",
            "start": 2433964,
            "end": 2434374
        }, {
            "filename": "/assets/daily/5F073D04CE255F09",
            "start": 2434374,
            "end": 2459640
        }, {
            "filename": "/assets/daily/5F073D04CE255F09.webp",
            "start": 2459640,
            "end": 2461891
        }, {
            "filename": "/assets/daily/5F085A3508210D33",
            "start": 2461891,
            "end": 2475538
        }, {
            "filename": "/assets/daily/5F085A3508210D33.webp",
            "start": 2475538,
            "end": 2476779
        }, {
            "filename": "/assets/daily/5F0871570178C074",
            "start": 2476779,
            "end": 2486724
        }, {
            "filename": "/assets/daily/5F0871570178C074.webp",
            "start": 2486724,
            "end": 2487172
        }, {
            "filename": "/assets/daily/5F0C05B89ABB477A",
            "start": 2487172,
            "end": 2512123
        }, {
            "filename": "/assets/daily/5F0C05B89ABB477A.webp",
            "start": 2512123,
            "end": 2514014
        }, {
            "filename": "/assets/daily/5F100C8863AECD6C",
            "start": 2514014,
            "end": 2562065
        }, {
            "filename": "/assets/daily/5F100C8863AECD6C.webp",
            "start": 2562065,
            "end": 2573139
        }, {
            "filename": "/assets/daily/5F11931275BD465E",
            "start": 2573139,
            "end": 2608838
        }, {
            "filename": "/assets/daily/5F11931275BD465E.webp",
            "start": 2608838,
            "end": 2609521
        }, {
            "filename": "/assets/daily/5F1AB52145FC5C5E",
            "start": 2609521,
            "end": 2643071
        }, {
            "filename": "/assets/daily/5F1AB52145FC5C5E.webp",
            "start": 2643071,
            "end": 2645337
        }, {
            "filename": "/assets/daily/5F223AB3695D85D5",
            "start": 2645337,
            "end": 2678496
        }, {
            "filename": "/assets/daily/5F223AB3695D85D5.webp",
            "start": 2678496,
            "end": 2680027
        }, {
            "filename": "/assets/daily/5F239F1B9B1FCD08",
            "start": 2680027,
            "end": 2704335
        }, {
            "filename": "/assets/daily/5F239F1B9B1FCD08.webp",
            "start": 2704335,
            "end": 2706397
        }, {
            "filename": "/assets/daily/5F23D7051E610E6C",
            "start": 2706397,
            "end": 2738170
        }, {
            "filename": "/assets/daily/5F23D7051E610E6C.webp",
            "start": 2738170,
            "end": 2738660
        }, {
            "filename": "/assets/daily/5F24F51B8BF063CB",
            "start": 2738660,
            "end": 2745385
        }, {
            "filename": "/assets/daily/5F24F51B8BF063CB.webp",
            "start": 2745385,
            "end": 2746583
        }, {
            "filename": "/assets/daily/5F2567DA32EAAB92",
            "start": 2746583,
            "end": 2769225
        }, {
            "filename": "/assets/daily/5F2567DA32EAAB92.webp",
            "start": 2769225,
            "end": 2771445
        }, {
            "filename": "/assets/daily/5F2680B5A871C4DC",
            "start": 2771445,
            "end": 2778373
        }, {
            "filename": "/assets/daily/5F2680B5A871C4DC.webp",
            "start": 2778373,
            "end": 2779252
        }, {
            "filename": "/assets/daily/5F278ABD44B3BFF1",
            "start": 2779252,
            "end": 2806489
        }, {
            "filename": "/assets/daily/5F278ABD44B3BFF1.webp",
            "start": 2806489,
            "end": 2808111
        }, {
            "filename": "/assets/daily/5F27BB076260B8F2",
            "start": 2808111,
            "end": 2819823
        }, {
            "filename": "/assets/daily/5F27BB076260B8F2.webp",
            "start": 2819823,
            "end": 2821358
        }, {
            "filename": "/assets/daily/5F307A5164F04D91",
            "start": 2821358,
            "end": 2842758
        }, {
            "filename": "/assets/daily/5F307A5164F04D91.webp",
            "start": 2842758,
            "end": 2845086
        }, {
            "filename": "/assets/daily/5F34CA1B8EB9A50A",
            "start": 2845086,
            "end": 2875178
        }, {
            "filename": "/assets/daily/5F34CA1B8EB9A50A.webp",
            "start": 2875178,
            "end": 2877278
        }, {
            "filename": "/assets/daily/5F35E0EB16359E52",
            "start": 2877278,
            "end": 2899787
        }, {
            "filename": "/assets/daily/5F35E0EB16359E52.webp",
            "start": 2899787,
            "end": 2900475
        }, {
            "filename": "/assets/daily/5F3768557175EC27",
            "start": 2900475,
            "end": 2923958
        }, {
            "filename": "/assets/daily/5F3768557175EC27.webp",
            "start": 2923958,
            "end": 2925034
        }, {
            "filename": "/assets/daily/5F3C0CAC65CE511F",
            "start": 2925034,
            "end": 2939935
        }, {
            "filename": "/assets/daily/5F3C0CAC65CE511F.webp",
            "start": 2939935,
            "end": 2940780
        }, {
            "filename": "/assets/daily/5F3FB53C6C3AB3E3",
            "start": 2940780,
            "end": 2956150
        }, {
            "filename": "/assets/daily/5F3FB53C6C3AB3E3.webp",
            "start": 2956150,
            "end": 2957550
        }, {
            "filename": "/assets/daily/5F45F8D06C34B22F",
            "start": 2957550,
            "end": 2969611
        }, {
            "filename": "/assets/daily/5F45F8D06C34B22F.webp",
            "start": 2969611,
            "end": 2973711
        }, {
            "filename": "/assets/daily/5F47B90B3AFCE6E2",
            "start": 2973711,
            "end": 2978536
        }, {
            "filename": "/assets/daily/5F47B90B3AFCE6E2.webp",
            "start": 2978536,
            "end": 2980861
        }, {
            "filename": "/assets/daily/5F490F0F424DCB5F",
            "start": 2980861,
            "end": 2994255
        }, {
            "filename": "/assets/daily/5F490F0F424DCB5F.webp",
            "start": 2994255,
            "end": 2995879
        }, {
            "filename": "/assets/daily/5F4A9E29B01C55A8",
            "start": 2995879,
            "end": 3012862
        }, {
            "filename": "/assets/daily/5F4A9E29B01C55A8.webp",
            "start": 3012862,
            "end": 3014314
        }, {
            "filename": "/assets/daily/5F4BB658A8D82AAA",
            "start": 3014314,
            "end": 3024347
        }, {
            "filename": "/assets/daily/5F4BB658A8D82AAA.webp",
            "start": 3024347,
            "end": 3026100
        }, {
            "filename": "/assets/daily/5F50055C53A3AD19",
            "start": 3026100,
            "end": 3053828
        }, {
            "filename": "/assets/daily/5F50055C53A3AD19.webp",
            "start": 3053828,
            "end": 3055681
        }, {
            "filename": "/assets/daily/5F5224F4CB5C18BE",
            "start": 3055681,
            "end": 3079694
        }, {
            "filename": "/assets/daily/5F5224F4CB5C18BE.webp",
            "start": 3079694,
            "end": 3087825
        }, {
            "filename": "/assets/daily/5F58771151011383",
            "start": 3087825,
            "end": 3094117
        }, {
            "filename": "/assets/daily/5F58771151011383.webp",
            "start": 3094117,
            "end": 3094654
        }, {
            "filename": "/assets/daily/5F59FCD8BCC46041",
            "start": 3094654,
            "end": 3110882
        }, {
            "filename": "/assets/daily/5F59FCD8BCC46041.webp",
            "start": 3110882,
            "end": 3112060
        }, {
            "filename": "/assets/daily/5F5B9C3133A59DEC",
            "start": 3112060,
            "end": 3122430
        }, {
            "filename": "/assets/daily/5F5B9C3133A59DEC.webp",
            "start": 3122430,
            "end": 3125101
        }, {
            "filename": "/assets/daily/5F61AEA629A6B311",
            "start": 3125101,
            "end": 3133588
        }, {
            "filename": "/assets/daily/5F61AEA629A6B311.webp",
            "start": 3133588,
            "end": 3137657
        }, {
            "filename": "/assets/daily/5F645EEE28ED4F68",
            "start": 3137657,
            "end": 3163579
        }, {
            "filename": "/assets/daily/5F645EEE28ED4F68.webp",
            "start": 3163579,
            "end": 3167677
        }, {
            "filename": "/assets/daily/5F65FEE8396B4F03",
            "start": 3167677,
            "end": 3173385
        }, {
            "filename": "/assets/daily/5F65FEE8396B4F03.webp",
            "start": 3173385,
            "end": 3174238
        }, {
            "filename": "/assets/daily/5F6AB26A23704C7D",
            "start": 3174238,
            "end": 3184558
        }, {
            "filename": "/assets/daily/5F6AB26A23704C7D.webp",
            "start": 3184558,
            "end": 3185180
        }, {
            "filename": "/assets/daily/5F6AE81B9C078BBB",
            "start": 3185180,
            "end": 3187967
        }, {
            "filename": "/assets/daily/5F6AE81B9C078BBB.webp",
            "start": 3187967,
            "end": 3189808
        }, {
            "filename": "/assets/daily/5F71A8629687F47A",
            "start": 3189808,
            "end": 3209433
        }, {
            "filename": "/assets/daily/5F71A8629687F47A.webp",
            "start": 3209433,
            "end": 3210205
        }, {
            "filename": "/assets/daily/5F776B69BE82268F",
            "start": 3210205,
            "end": 3234244
        }, {
            "filename": "/assets/daily/5F776B69BE82268F.webp",
            "start": 3234244,
            "end": 3235104
        }, {
            "filename": "/assets/daily/5F777C4914B2D353",
            "start": 3235104,
            "end": 3251395
        }, {
            "filename": "/assets/daily/5F777C4914B2D353.webp",
            "start": 3251395,
            "end": 3252112
        }, {
            "filename": "/assets/daily/5F77A5D151370EBE",
            "start": 3252112,
            "end": 3277834
        }, {
            "filename": "/assets/daily/5F77A5D151370EBE.webp",
            "start": 3277834,
            "end": 3278707
        }, {
            "filename": "/assets/daily/5F785A78660E7CED",
            "start": 3278707,
            "end": 3293670
        }, {
            "filename": "/assets/daily/5F785A78660E7CED.webp",
            "start": 3293670,
            "end": 3295084
        }, {
            "filename": "/assets/daily/5F7A3CCE372C9A4C",
            "start": 3295084,
            "end": 3304857
        }, {
            "filename": "/assets/daily/5F7A3CCE372C9A4C.webp",
            "start": 3304857,
            "end": 3306464
        }, {
            "filename": "/assets/daily/5F7B465D92BD0D6D",
            "start": 3306464,
            "end": 3319227
        }, {
            "filename": "/assets/daily/5F7B465D92BD0D6D.webp",
            "start": 3319227,
            "end": 3323672
        }, {
            "filename": "/assets/daily/5F7F258355FF162F",
            "start": 3323672,
            "end": 3329849
        }, {
            "filename": "/assets/daily/5F7F258355FF162F.webp",
            "start": 3329849,
            "end": 3332816
        }, {
            "filename": "/assets/daily/5F81993913299B95",
            "start": 3332816,
            "end": 3354035
        }, {
            "filename": "/assets/daily/5F81993913299B95.webp",
            "start": 3354035,
            "end": 3355475
        }, {
            "filename": "/assets/daily/5F88F34A0B4E1219",
            "start": 3355475,
            "end": 3390413
        }, {
            "filename": "/assets/daily/5F88F34A0B4E1219.webp",
            "start": 3390413,
            "end": 3396266
        }, {
            "filename": "/assets/daily/5F897437BE1218C6",
            "start": 3396266,
            "end": 3402304
        }, {
            "filename": "/assets/daily/5F897437BE1218C6.webp",
            "start": 3402304,
            "end": 3403224
        }, {
            "filename": "/assets/daily/5F8978798E71A27A",
            "start": 3403224,
            "end": 3420867
        }, {
            "filename": "/assets/daily/5F8978798E71A27A.webp",
            "start": 3420867,
            "end": 3421408
        }, {
            "filename": "/assets/daily/5F8C2EFC6442E4E5",
            "start": 3421408,
            "end": 3430552
        }, {
            "filename": "/assets/daily/5F8C2EFC6442E4E5.webp",
            "start": 3430552,
            "end": 3431e3
        }, {
            "filename": "/assets/daily/5F9121C43C93CEDB",
            "start": 3431e3,
            "end": 3445279
        }, {
            "filename": "/assets/daily/5F9121C43C93CEDB.webp",
            "start": 3445279,
            "end": 3445883
        }, {
            "filename": "/assets/daily/5F9283586158C699",
            "start": 3445883,
            "end": 3478512
        }, {
            "filename": "/assets/daily/5F9283586158C699.webp",
            "start": 3478512,
            "end": 3480285
        }, {
            "filename": "/assets/daily/5F953A0C91C6E687",
            "start": 3480285,
            "end": 3494203
        }, {
            "filename": "/assets/daily/5F953A0C91C6E687.webp",
            "start": 3494203,
            "end": 3496505
        }, {
            "filename": "/assets/daily/5F96C03177A526B0",
            "start": 3496505,
            "end": 3506037
        }, {
            "filename": "/assets/daily/5F96C03177A526B0.webp",
            "start": 3506037,
            "end": 3508349
        }, {
            "filename": "/assets/daily/5F9950B6AE24AF4E",
            "start": 3508349,
            "end": 3522367
        }, {
            "filename": "/assets/daily/5F9950B6AE24AF4E.webp",
            "start": 3522367,
            "end": 3523253
        }, {
            "filename": "/assets/daily/5F9AE73C84317499",
            "start": 3523253,
            "end": 3534338
        }, {
            "filename": "/assets/daily/5F9AE73C84317499.webp",
            "start": 3534338,
            "end": 3536876
        }, {
            "filename": "/assets/daily/5F9D7E85568C7D66",
            "start": 3536876,
            "end": 3547499
        }, {
            "filename": "/assets/daily/5F9D7E85568C7D66.webp",
            "start": 3547499,
            "end": 3551930
        }, {
            "filename": "/assets/daily/5F9DAE312F148B45",
            "start": 3551930,
            "end": 3597559
        }, {
            "filename": "/assets/daily/5F9DAE312F148B45.webp",
            "start": 3597559,
            "end": 3602457
        }, {
            "filename": "/assets/daily/5FA46D218DC60F71",
            "start": 3602457,
            "end": 3611676
        }, {
            "filename": "/assets/daily/5FA46D218DC60F71.webp",
            "start": 3611676,
            "end": 3614253
        }, {
            "filename": "/assets/daily/5FA6BCFD16EB8B3B",
            "start": 3614253,
            "end": 3625049
        }, {
            "filename": "/assets/daily/5FA6BCFD16EB8B3B.webp",
            "start": 3625049,
            "end": 3627457
        }, {
            "filename": "/assets/daily/5FA7EAF8BE792D82",
            "start": 3627457,
            "end": 3645607
        }, {
            "filename": "/assets/daily/5FA7EAF8BE792D82.webp",
            "start": 3645607,
            "end": 3647338
        }, {
            "filename": "/assets/daily/5FC9C7ABC0CE5862",
            "start": 3647338,
            "end": 3655837
        }, {
            "filename": "/assets/daily/5FC9C7ABC0CE5862.webp",
            "start": 3655837,
            "end": 3658763
        }, {
            "filename": "/assets/daily/5FCCA62DF76C480D",
            "start": 3658763,
            "end": 3670577
        }, {
            "filename": "/assets/daily/5FCCA62DF76C480D.webp",
            "start": 3670577,
            "end": 3672417
        }, {
            "filename": "/assets/daily/5FCCB8BE4D12D247",
            "start": 3672417,
            "end": 3701533
        }, {
            "filename": "/assets/daily/5FCCB8BE4D12D247.webp",
            "start": 3701533,
            "end": 3704544
        }, {
            "filename": "/assets/daily/5FD082855F78D0EC",
            "start": 3704544,
            "end": 3725140
        }, {
            "filename": "/assets/daily/5FD082855F78D0EC.webp",
            "start": 3725140,
            "end": 3726252
        }, {
            "filename": "/assets/daily/5FD25449355F9CD7",
            "start": 3726252,
            "end": 3756576
        }, {
            "filename": "/assets/daily/5FD25449355F9CD7.webp",
            "start": 3756576,
            "end": 3758746
        }, {
            "filename": "/assets/daily/5FD6667855B97C33",
            "start": 3758746,
            "end": 3781885
        }, {
            "filename": "/assets/daily/5FD6667855B97C33.webp",
            "start": 3781885,
            "end": 3785239
        }, {
            "filename": "/assets/daily/5FD7A1F412FFC8A4",
            "start": 3785239,
            "end": 3801015
        }, {
            "filename": "/assets/daily/5FD7A1F412FFC8A4.webp",
            "start": 3801015,
            "end": 3803106
        }, {
            "filename": "/assets/daily/5FDB006D232B37F9",
            "start": 3803106,
            "end": 3840544
        }, {
            "filename": "/assets/daily/5FDB006D232B37F9.webp",
            "start": 3840544,
            "end": 3843791
        }, {
            "filename": "/assets/daily/5FDB8275E5D9966B",
            "start": 3843791,
            "end": 3857724
        }, {
            "filename": "/assets/daily/5FDB8275E5D9966B.webp",
            "start": 3857724,
            "end": 3863742
        }, {
            "filename": "/assets/daily/5FE1D73210CDD9DD",
            "start": 3863742,
            "end": 3884556
        }, {
            "filename": "/assets/daily/5FE1D73210CDD9DD.webp",
            "start": 3884556,
            "end": 3885898
        }, {
            "filename": "/assets/daily/5FE20E99AC1E9CE4",
            "start": 3885898,
            "end": 3900021
        }, {
            "filename": "/assets/daily/5FE20E99AC1E9CE4.webp",
            "start": 3900021,
            "end": 3901294
        }, {
            "filename": "/assets/daily/5FE6E43F5364A913",
            "start": 3901294,
            "end": 3918204
        }, {
            "filename": "/assets/daily/5FE6E43F5364A913.webp",
            "start": 3918204,
            "end": 3923392
        }, {
            "filename": "/assets/daily/5FE783C70752433D",
            "start": 3923392,
            "end": 3935760
        }, {
            "filename": "/assets/daily/5FE783C70752433D.webp",
            "start": 3935760,
            "end": 3937306
        }, {
            "filename": "/assets/daily/5FE9944B2D70FA60",
            "start": 3937306,
            "end": 3958445
        }, {
            "filename": "/assets/daily/5FE9944B2D70FA60.webp",
            "start": 3958445,
            "end": 3967223
        }, {
            "filename": "/assets/daily/5FEB31F26B907BC7",
            "start": 3967223,
            "end": 3975793
        }, {
            "filename": "/assets/daily/5FEB31F26B907BC7.webp",
            "start": 3975793,
            "end": 3978700
        }, {
            "filename": "/assets/daily/5FF1BC45472867A0",
            "start": 3978700,
            "end": 4023587
        }, {
            "filename": "/assets/daily/5FF1BC45472867A0.webp",
            "start": 4023587,
            "end": 4028578
        }, {
            "filename": "/assets/daily/5FF3E2B1F59AF437",
            "start": 4028578,
            "end": 4044787
        }, {
            "filename": "/assets/daily/5FF3E2B1F59AF437.webp",
            "start": 4044787,
            "end": 4057958
        }, {
            "filename": "/assets/daily/5FF438D6BE16C6B8",
            "start": 4057958,
            "end": 4086047
        }, {
            "filename": "/assets/daily/5FF438D6BE16C6B8.webp",
            "start": 4086047,
            "end": 4090742
        }, {
            "filename": "/assets/daily/5FF46EAF8762FBF0",
            "start": 4090742,
            "end": 4096816
        }, {
            "filename": "/assets/daily/5FF46EAF8762FBF0.webp",
            "start": 4096816,
            "end": 4098300
        }, {
            "filename": "/assets/daily/5FF8DD1A02698194",
            "start": 4098300,
            "end": 4141823
        }, {
            "filename": "/assets/daily/5FF8DD1A02698194.webp",
            "start": 4141823,
            "end": 4147247
        }, {
            "filename": "/assets/daily/5FFC2D2C186CCE76",
            "start": 4147247,
            "end": 4158842
        }, {
            "filename": "/assets/daily/5FFC2D2C186CCE76.webp",
            "start": 4158842,
            "end": 4161911
        }, {
            "filename": "/assets/daily/5FFD20A6A28B2768",
            "start": 4161911,
            "end": 4182811
        }, {
            "filename": "/assets/daily/5FFD20A6A28B2768.webp",
            "start": 4182811,
            "end": 4188111
        }, {
            "filename": "/assets/daily/5FFE25325D019337",
            "start": 4188111,
            "end": 4224786
        }, {
            "filename": "/assets/daily/5FFE25325D019337.webp",
            "start": 4224786,
            "end": 4230215
        }, {
            "filename": "/assets/daily/60001797EE0542B7",
            "start": 4230215,
            "end": 4235460
        }, {
            "filename": "/assets/daily/60001797EE0542B7.webp",
            "start": 4235460,
            "end": 4238447
        }, {
            "filename": "/assets/daily/60024DB182D0D7AA",
            "start": 4238447,
            "end": 4249370
        }, {
            "filename": "/assets/daily/60024DB182D0D7AA.webp",
            "start": 4249370,
            "end": 4255983
        }, {
            "filename": "/assets/daily/60027B49DB1BA245",
            "start": 4255983,
            "end": 4261813
        }, {
            "filename": "/assets/daily/60027B49DB1BA245.webp",
            "start": 4261813,
            "end": 4263731
        }, {
            "filename": "/assets/daily/6002FA9D8D0BB830",
            "start": 4263731,
            "end": 4287425
        }, {
            "filename": "/assets/daily/6002FA9D8D0BB830.webp",
            "start": 4287425,
            "end": 4292634
        }, {
            "filename": "/assets/daily/6008755C0CB9FA90",
            "start": 4292634,
            "end": 4297868
        }, {
            "filename": "/assets/daily/6008755C0CB9FA90.webp",
            "start": 4297868,
            "end": 4298279
        }, {
            "filename": "/assets/daily/6009A2749DF80C0D",
            "start": 4298279,
            "end": 4310167
        }, {
            "filename": "/assets/daily/6009A2749DF80C0D.webp",
            "start": 4310167,
            "end": 4311093
        }, {
            "filename": "/assets/daily/600A8B4075C432EE",
            "start": 4311093,
            "end": 4330366
        }, {
            "filename": "/assets/daily/600A8B4075C432EE.webp",
            "start": 4330366,
            "end": 4334724
        }, {
            "filename": "/assets/daily/600D3B42A7D43F64",
            "start": 4334724,
            "end": 4343962
        }, {
            "filename": "/assets/daily/600D3B42A7D43F64.webp",
            "start": 4343962,
            "end": 4344822
        }, {
            "filename": "/assets/daily/600E2161EC0B62AC",
            "start": 4344822,
            "end": 4354354
        }, {
            "filename": "/assets/daily/600E2161EC0B62AC.webp",
            "start": 4354354,
            "end": 4356804
        }, {
            "filename": "/assets/daily/60127ED70017A765",
            "start": 4356804,
            "end": 4391274
        }, {
            "filename": "/assets/daily/60127ED70017A765.webp",
            "start": 4391274,
            "end": 4395302
        }, {
            "filename": "/assets/daily/6012CB49AE42FD4F",
            "start": 4395302,
            "end": 4415277
        }, {
            "filename": "/assets/daily/6012CB49AE42FD4F.webp",
            "start": 4415277,
            "end": 4420269
        }, {
            "filename": "/assets/daily/6016D2F1979A13A3",
            "start": 4420269,
            "end": 4442964
        }, {
            "filename": "/assets/daily/6016D2F1979A13A3.webp",
            "start": 4442964,
            "end": 4446967
        }, {
            "filename": "/assets/daily/6020F44F3A287C88",
            "start": 4446967,
            "end": 4500549
        }, {
            "filename": "/assets/daily/6020F44F3A287C88.webp",
            "start": 4500549,
            "end": 4505206
        }, {
            "filename": "/assets/daily/6023FF3229FAE1BD",
            "start": 4505206,
            "end": 4516648
        }, {
            "filename": "/assets/daily/6023FF3229FAE1BD.webp",
            "start": 4516648,
            "end": 4519386
        }, {
            "filename": "/assets/daily/60249886467E4A98",
            "start": 4519386,
            "end": 4530186
        }, {
            "filename": "/assets/daily/60249886467E4A98.webp",
            "start": 4530186,
            "end": 4530989
        }, {
            "filename": "/assets/daily/6027C48261353585",
            "start": 4530989,
            "end": 4538908
        }, {
            "filename": "/assets/daily/6027C48261353585.webp",
            "start": 4538908,
            "end": 4539702
        }, {
            "filename": "/assets/daily/60285E96AF36C4D5",
            "start": 4539702,
            "end": 4582358
        }, {
            "filename": "/assets/daily/60285E96AF36C4D5.webp",
            "start": 4582358,
            "end": 4589076
        }, {
            "filename": "/assets/daily/602BD676A800F9AA",
            "start": 4589076,
            "end": 4606061
        }, {
            "filename": "/assets/daily/602BD676A800F9AA.webp",
            "start": 4606061,
            "end": 4608935
        }, {
            "filename": "/assets/daily/602D05F6558211FD",
            "start": 4608935,
            "end": 4624195
        }, {
            "filename": "/assets/daily/602D05F6558211FD.webp",
            "start": 4624195,
            "end": 4625295
        }, {
            "filename": "/assets/daily/602F3DC96E83ACF0",
            "start": 4625295,
            "end": 4642625
        }, {
            "filename": "/assets/daily/602F3DC96E83ACF0.webp",
            "start": 4642625,
            "end": 4644671
        }, {
            "filename": "/assets/daily/6030B8998DE515CB",
            "start": 4644671,
            "end": 4654661
        }, {
            "filename": "/assets/daily/6030B8998DE515CB.webp",
            "start": 4654661,
            "end": 4657440
        }, {
            "filename": "/assets/daily/60310712D1C23657",
            "start": 4657440,
            "end": 4666990
        }, {
            "filename": "/assets/daily/60310712D1C23657.webp",
            "start": 4666990,
            "end": 4670692
        }, {
            "filename": "/assets/daily/6038DF3A84C455F8",
            "start": 4670692,
            "end": 4687997
        }, {
            "filename": "/assets/daily/6038DF3A84C455F8.webp",
            "start": 4687997,
            "end": 4690176
        }, {
            "filename": "/assets/daily/60396ADC5C043172",
            "start": 4690176,
            "end": 4737082
        }, {
            "filename": "/assets/daily/60396ADC5C043172.webp",
            "start": 4737082,
            "end": 4744526
        }, {
            "filename": "/assets/daily/603BBADF6C795139",
            "start": 4744526,
            "end": 4775594
        }, {
            "filename": "/assets/daily/603BBADF6C795139.webp",
            "start": 4775594,
            "end": 4778920
        }, {
            "filename": "/assets/daily/603F838845FB54BA",
            "start": 4778920,
            "end": 4793703
        }, {
            "filename": "/assets/daily/603F838845FB54BA.webp",
            "start": 4793703,
            "end": 4794401
        }, {
            "filename": "/assets/daily/6041C66A11ADA9FF",
            "start": 4794401,
            "end": 4802491
        }, {
            "filename": "/assets/daily/6041C66A11ADA9FF.webp",
            "start": 4802491,
            "end": 4807820
        }, {
            "filename": "/assets/daily/604319B33611A48C",
            "start": 4807820,
            "end": 4829525
        }, {
            "filename": "/assets/daily/604319B33611A48C.webp",
            "start": 4829525,
            "end": 4832501
        }, {
            "filename": "/assets/daily/604356C714BDE10A",
            "start": 4832501,
            "end": 4838791
        }, {
            "filename": "/assets/daily/604356C714BDE10A.webp",
            "start": 4838791,
            "end": 4841865
        }, {
            "filename": "/assets/daily/604419DD712FC463",
            "start": 4841865,
            "end": 4847161
        }, {
            "filename": "/assets/daily/604419DD712FC463.webp",
            "start": 4847161,
            "end": 4848176
        }, {
            "filename": "/assets/daily/60454EEB430DBC6A",
            "start": 4848176,
            "end": 4870562
        }, {
            "filename": "/assets/daily/60454EEB430DBC6A.webp",
            "start": 4870562,
            "end": 4872688
        }, {
            "filename": "/assets/daily/604EC11E549920F6",
            "start": 4872688,
            "end": 4883371
        }, {
            "filename": "/assets/daily/604EC11E549920F6.webp",
            "start": 4883371,
            "end": 4886374
        }, {
            "filename": "/assets/daily/604F5881EBA8E83A",
            "start": 4886374,
            "end": 4894197
        }, {
            "filename": "/assets/daily/604F5881EBA8E83A.webp",
            "start": 4894197,
            "end": 4897552
        }, {
            "filename": "/assets/daily/6050CBA84FA9E22B",
            "start": 4897552,
            "end": 4926360
        }, {
            "filename": "/assets/daily/6050CBA84FA9E22B.webp",
            "start": 4926360,
            "end": 4930388
        }, {
            "filename": "/assets/daily/605774D8A365816F",
            "start": 4930388,
            "end": 4961100
        }, {
            "filename": "/assets/daily/605774D8A365816F.webp",
            "start": 4961100,
            "end": 4963220
        }, {
            "filename": "/assets/daily/605E407A807B9FBC",
            "start": 4963220,
            "end": 4975662
        }, {
            "filename": "/assets/daily/605E407A807B9FBC.webp",
            "start": 4975662,
            "end": 4977237
        }, {
            "filename": "/assets/daily/605EA53B6331853E",
            "start": 4977237,
            "end": 4983217
        }, {
            "filename": "/assets/daily/605EA53B6331853E.webp",
            "start": 4983217,
            "end": 4985613
        }, {
            "filename": "/assets/daily/6062955A0664A797",
            "start": 4985613,
            "end": 5009121
        }, {
            "filename": "/assets/daily/6062955A0664A797.webp",
            "start": 5009121,
            "end": 5012504
        }, {
            "filename": "/assets/daily/606845B88904DF25",
            "start": 5012504,
            "end": 5039757
        }, {
            "filename": "/assets/daily/606845B88904DF25.webp",
            "start": 5039757,
            "end": 5042958
        }, {
            "filename": "/assets/daily/606877F9EEAEDBC0",
            "start": 5042958,
            "end": 5073249
        }, {
            "filename": "/assets/daily/606877F9EEAEDBC0.webp",
            "start": 5073249,
            "end": 5074984
        }, {
            "filename": "/assets/daily/606F0EBF3E18B010",
            "start": 5074984,
            "end": 5098567
        }, {
            "filename": "/assets/daily/606F0EBF3E18B010.webp",
            "start": 5098567,
            "end": 5099139
        }, {
            "filename": "/assets/daily/60705358D90ECBDD",
            "start": 5099139,
            "end": 5118823
        }, {
            "filename": "/assets/daily/60705358D90ECBDD.webp",
            "start": 5118823,
            "end": 5121160
        }, {
            "filename": "/assets/daily/6071E57854C4E030",
            "start": 5121160,
            "end": 5127733
        }, {
            "filename": "/assets/daily/6071E57854C4E030.webp",
            "start": 5127733,
            "end": 5129892
        }, {
            "filename": "/assets/daily/607686BD78F83C95",
            "start": 5129892,
            "end": 5167204
        }, {
            "filename": "/assets/daily/607686BD78F83C95.webp",
            "start": 5167204,
            "end": 5170329
        }, {
            "filename": "/assets/daily/6076BBF481B974CF",
            "start": 5170329,
            "end": 5183202
        }, {
            "filename": "/assets/daily/6076BBF481B974CF.webp",
            "start": 5183202,
            "end": 5186783
        }, {
            "filename": "/assets/daily/6076C98D34BB93E7",
            "start": 5186783,
            "end": 5192394
        }, {
            "filename": "/assets/daily/6076C98D34BB93E7.webp",
            "start": 5192394,
            "end": 5194336
        }, {
            "filename": "/assets/daily/607734858216C673",
            "start": 5194336,
            "end": 5213339
        }, {
            "filename": "/assets/daily/607734858216C673.webp",
            "start": 5213339,
            "end": 5214888
        }, {
            "filename": "/assets/daily/607AF6559F69753B",
            "start": 5214888,
            "end": 5218746
        }, {
            "filename": "/assets/daily/607AF6559F69753B.webp",
            "start": 5218746,
            "end": 5219790
        }, {
            "filename": "/assets/daily/608047013C51D867",
            "start": 5219790,
            "end": 5237975
        }, {
            "filename": "/assets/daily/608047013C51D867.webp",
            "start": 5237975,
            "end": 5243142
        }, {
            "filename": "/assets/daily/60851784770864E1",
            "start": 5243142,
            "end": 5267388
        }, {
            "filename": "/assets/daily/60851784770864E1.webp",
            "start": 5267388,
            "end": 5271700
        }, {
            "filename": "/assets/daily/60858D1202EDE078",
            "start": 5271700,
            "end": 5278610
        }, {
            "filename": "/assets/daily/60858D1202EDE078.webp",
            "start": 5278610,
            "end": 5283942
        }, {
            "filename": "/assets/daily/6088D5085BE1DC30",
            "start": 5283942,
            "end": 5322168
        }, {
            "filename": "/assets/daily/6088D5085BE1DC30.webp",
            "start": 5322168,
            "end": 5324641
        }, {
            "filename": "/assets/daily/608C14E91DF10A91",
            "start": 5324641,
            "end": 5331253
        }, {
            "filename": "/assets/daily/608C14E91DF10A91.webp",
            "start": 5331253,
            "end": 5332027
        }, {
            "filename": "/assets/daily/608D5BA50F63AEAD",
            "start": 5332027,
            "end": 5340433
        }, {
            "filename": "/assets/daily/608D5BA50F63AEAD.webp",
            "start": 5340433,
            "end": 5343635
        }, {
            "filename": "/assets/daily/6093D2E281D09801",
            "start": 5343635,
            "end": 5346004
        }, {
            "filename": "/assets/daily/6093D2E281D09801.webp",
            "start": 5346004,
            "end": 5347218
        }, {
            "filename": "/assets/daily/609992DCED1B5BC5",
            "start": 5347218,
            "end": 5379165
        }, {
            "filename": "/assets/daily/609992DCED1B5BC5.webp",
            "start": 5379165,
            "end": 5387726
        }, {
            "filename": "/assets/daily/6099B7D54A5028EC",
            "start": 5387726,
            "end": 5393830
        }, {
            "filename": "/assets/daily/6099B7D54A5028EC.webp",
            "start": 5393830,
            "end": 5398899
        }, {
            "filename": "/assets/daily/609CAF9A4931B9C0",
            "start": 5398899,
            "end": 5417604
        }, {
            "filename": "/assets/daily/609CAF9A4931B9C0.webp",
            "start": 5417604,
            "end": 5418439
        }, {
            "filename": "/assets/daily/609CFF9E6F7E54CF",
            "start": 5418439,
            "end": 5434034
        }, {
            "filename": "/assets/daily/609CFF9E6F7E54CF.webp",
            "start": 5434034,
            "end": 5437199
        }, {
            "filename": "/assets/daily/60A091A89A937D0D",
            "start": 5437199,
            "end": 5456566
        }, {
            "filename": "/assets/daily/60A091A89A937D0D.webp",
            "start": 5456566,
            "end": 5460540
        }, {
            "filename": "/assets/daily/60A37242731E8C79",
            "start": 5460540,
            "end": 5485758
        }, {
            "filename": "/assets/daily/60A37242731E8C79.webp",
            "start": 5485758,
            "end": 5495906
        }, {
            "filename": "/assets/daily/60A8D97A10E20E06",
            "start": 5495906,
            "end": 5532989
        }, {
            "filename": "/assets/daily/60A8D97A10E20E06.webp",
            "start": 5532989,
            "end": 5534791
        }, {
            "filename": "/assets/daily/60AA7DE1C80CF95F",
            "start": 5534791,
            "end": 5543096
        }, {
            "filename": "/assets/daily/60AA7DE1C80CF95F.webp",
            "start": 5543096,
            "end": 5544661
        }, {
            "filename": "/assets/daily/60AF6E51EB23B1B2",
            "start": 5544661,
            "end": 5552386
        }, {
            "filename": "/assets/daily/60AF6E51EB23B1B2.webp",
            "start": 5552386,
            "end": 5553232
        }, {
            "filename": "/assets/daily/60B0B192C31A685D",
            "start": 5553232,
            "end": 5578726
        }, {
            "filename": "/assets/daily/60B0B192C31A685D.webp",
            "start": 5578726,
            "end": 5582030
        }, {
            "filename": "/assets/daily/60B35696A92CF12B",
            "start": 5582030,
            "end": 5589315
        }, {
            "filename": "/assets/daily/60B35696A92CF12B.webp",
            "start": 5589315,
            "end": 5591924
        }, {
            "filename": "/assets/daily/60BE239F70977F47",
            "start": 5591924,
            "end": 5628739
        }, {
            "filename": "/assets/daily/60BE239F70977F47.webp",
            "start": 5628739,
            "end": 5634546
        }, {
            "filename": "/assets/daily/60C1886A7D52D84C",
            "start": 5634546,
            "end": 5648889
        }, {
            "filename": "/assets/daily/60C1886A7D52D84C.webp",
            "start": 5648889,
            "end": 5652764
        }, {
            "filename": "/assets/daily/60C28D56A6BF4DBF",
            "start": 5652764,
            "end": 5669129
        }, {
            "filename": "/assets/daily/60C28D56A6BF4DBF.webp",
            "start": 5669129,
            "end": 5673728
        }, {
            "filename": "/assets/daily/60C333A7925E51EB",
            "start": 5673728,
            "end": 5684264
        }, {
            "filename": "/assets/daily/60C333A7925E51EB.webp",
            "start": 5684264,
            "end": 5685712
        }, {
            "filename": "/assets/daily/60CB770135BCA7D6",
            "start": 5685712,
            "end": 5695886
        }, {
            "filename": "/assets/daily/60CB770135BCA7D6.webp",
            "start": 5695886,
            "end": 5699442
        }, {
            "filename": "/assets/daily/60CF77C562452787",
            "start": 5699442,
            "end": 5723761
        }, {
            "filename": "/assets/daily/60CF77C562452787.webp",
            "start": 5723761,
            "end": 5727364
        }, {
            "filename": "/assets/daily/60CFE857F85B16A8",
            "start": 5727364,
            "end": 5765621
        }, {
            "filename": "/assets/daily/60CFE857F85B16A8.webp",
            "start": 5765621,
            "end": 5766176
        }, {
            "filename": "/assets/daily/60D2F534EC209A8D",
            "start": 5766176,
            "end": 5779870
        }, {
            "filename": "/assets/daily/60D2F534EC209A8D.webp",
            "start": 5779870,
            "end": 5781695
        }, {
            "filename": "/assets/daily/60D40C4C84E8EB8A",
            "start": 5781695,
            "end": 5787455
        }, {
            "filename": "/assets/daily/60D40C4C84E8EB8A.webp",
            "start": 5787455,
            "end": 5788886
        }, {
            "filename": "/assets/daily/60D48F0959EDFAED",
            "start": 5788886,
            "end": 5798659
        }, {
            "filename": "/assets/daily/60D48F0959EDFAED.webp",
            "start": 5798659,
            "end": 5800126
        }, {
            "filename": "/assets/daily/60D631FB8E991203",
            "start": 5800126,
            "end": 5808367
        }, {
            "filename": "/assets/daily/60D631FB8E991203.webp",
            "start": 5808367,
            "end": 5809148
        }, {
            "filename": "/assets/daily/60D8DF18DF9B6C0B",
            "start": 5809148,
            "end": 5853716
        }, {
            "filename": "/assets/daily/60D8DF18DF9B6C0B.webp",
            "start": 5853716,
            "end": 5858352
        }, {
            "filename": "/assets/daily/60E9E0A85E06ADFC",
            "start": 5858352,
            "end": 5873763
        }, {
            "filename": "/assets/daily/60E9E0A85E06ADFC.webp",
            "start": 5873763,
            "end": 5875925
        }, {
            "filename": "/assets/daily/60EABE94E7A92B70",
            "start": 5875925,
            "end": 5894373
        }, {
            "filename": "/assets/daily/60EABE94E7A92B70.webp",
            "start": 5894373,
            "end": 5896391
        }, {
            "filename": "/assets/daily/60EC05F556F22CF3",
            "start": 5896391,
            "end": 5918e3
        }, {
            "filename": "/assets/daily/60EC05F556F22CF3.webp",
            "start": 5918e3,
            "end": 5923529
        }, {
            "filename": "/assets/daily/60EDB37B89CF2232",
            "start": 5923529,
            "end": 5943032
        }, {
            "filename": "/assets/daily/60EDB37B89CF2232.webp",
            "start": 5943032,
            "end": 5944797
        }, {
            "filename": "/assets/daily/60EED8EFA56F9DAE",
            "start": 5944797,
            "end": 5958675
        }, {
            "filename": "/assets/daily/60EED8EFA56F9DAE.webp",
            "start": 5958675,
            "end": 5960965
        }, {
            "filename": "/assets/daily/60F1B5E273BFFE81",
            "start": 5960965,
            "end": 5976214
        }, {
            "filename": "/assets/daily/60F1B5E273BFFE81.webp",
            "start": 5976214,
            "end": 5978959
        }, {
            "filename": "/assets/daily/60F1B83DF7DC76E0",
            "start": 5978959,
            "end": 6039136
        }, {
            "filename": "/assets/daily/60F1B83DF7DC76E0.webp",
            "start": 6039136,
            "end": 6040565
        }, {
            "filename": "/assets/daily/60F1E385EE92B195",
            "start": 6040565,
            "end": 6055905
        }, {
            "filename": "/assets/daily/60F1E385EE92B195.webp",
            "start": 6055905,
            "end": 6058897
        }, {
            "filename": "/assets/daily/60F2C28107BF373A",
            "start": 6058897,
            "end": 6072689
        }, {
            "filename": "/assets/daily/60F2C28107BF373A.webp",
            "start": 6072689,
            "end": 6075951
        }, {
            "filename": "/assets/daily/60F32506C3A709CC",
            "start": 6075951,
            "end": 6082437
        }, {
            "filename": "/assets/daily/60F32506C3A709CC.webp",
            "start": 6082437,
            "end": 6084799
        }, {
            "filename": "/assets/daily/60F5379F101EC200",
            "start": 6084799,
            "end": 6099475
        }, {
            "filename": "/assets/daily/60F5379F101EC200.webp",
            "start": 6099475,
            "end": 6108299
        }, {
            "filename": "/assets/daily/60F9DBDF814715DB",
            "start": 6108299,
            "end": 6113870
        }, {
            "filename": "/assets/daily/60F9DBDF814715DB.webp",
            "start": 6113870,
            "end": 6116844
        }, {
            "filename": "/assets/daily/60FE91758FAE14D8",
            "start": 6116844,
            "end": 6139009
        }, {
            "filename": "/assets/daily/60FE91758FAE14D8.webp",
            "start": 6139009,
            "end": 6144238
        }, {
            "filename": "/assets/daily/61023085A2A36F3D",
            "start": 6144238,
            "end": 6159189
        }, {
            "filename": "/assets/daily/61023085A2A36F3D.webp",
            "start": 6159189,
            "end": 6169018
        }, {
            "filename": "/assets/daily/6107D31161FD8F02",
            "start": 6169018,
            "end": 6185127
        }, {
            "filename": "/assets/daily/6107D31161FD8F02.webp",
            "start": 6185127,
            "end": 6187585
        }, {
            "filename": "/assets/daily/6108338C3B05AC64",
            "start": 6187585,
            "end": 6203463
        }, {
            "filename": "/assets/daily/6108338C3B05AC64.webp",
            "start": 6203463,
            "end": 6204945
        }, {
            "filename": "/assets/daily/610BAE62306FA9D8",
            "start": 6204945,
            "end": 6213360
        }, {
            "filename": "/assets/daily/610BAE62306FA9D8.webp",
            "start": 6213360,
            "end": 6216094
        }, {
            "filename": "/assets/daily/610FC0AF79952EDE",
            "start": 6216094,
            "end": 6223025
        }, {
            "filename": "/assets/daily/610FC0AF79952EDE.webp",
            "start": 6223025,
            "end": 6224578
        }, {
            "filename": "/assets/daily/611537E4661AC451",
            "start": 6224578,
            "end": 6230382
        }, {
            "filename": "/assets/daily/611537E4661AC451.webp",
            "start": 6230382,
            "end": 6232528
        }, {
            "filename": "/assets/daily/6115E8F8BBB939C8",
            "start": 6232528,
            "end": 6245759
        }, {
            "filename": "/assets/daily/6115E8F8BBB939C8.webp",
            "start": 6245759,
            "end": 6249588
        }, {
            "filename": "/assets/daily/61164D78CA292E92",
            "start": 6249588,
            "end": 6264407
        }, {
            "filename": "/assets/daily/61164D78CA292E92.webp",
            "start": 6264407,
            "end": 6267327
        }, {
            "filename": "/assets/daily/611BB499E87A39AC",
            "start": 6267327,
            "end": 6280541
        }, {
            "filename": "/assets/daily/611BB499E87A39AC.webp",
            "start": 6280541,
            "end": 6283505
        }, {
            "filename": "/assets/daily/612018FAD2270A39",
            "start": 6283505,
            "end": 6314494
        }, {
            "filename": "/assets/daily/612018FAD2270A39.webp",
            "start": 6314494,
            "end": 6316717
        }, {
            "filename": "/assets/daily/61224DBEF875079B",
            "start": 6316717,
            "end": 6329935
        }, {
            "filename": "/assets/daily/61224DBEF875079B.webp",
            "start": 6329935,
            "end": 6332064
        }, {
            "filename": "/assets/daily/6125E270C468AE7C",
            "start": 6332064,
            "end": 6354692
        }, {
            "filename": "/assets/daily/6125E270C468AE7C.webp",
            "start": 6354692,
            "end": 6357138
        }, {
            "filename": "/assets/daily/612CC51875C8FEF4",
            "start": 6357138,
            "end": 6362274
        }, {
            "filename": "/assets/daily/612CC51875C8FEF4.webp",
            "start": 6362274,
            "end": 6363980
        }, {
            "filename": "/assets/daily/6138A3C42C5AF3D9",
            "start": 6363980,
            "end": 6378288
        }, {
            "filename": "/assets/daily/6138A3C42C5AF3D9.webp",
            "start": 6378288,
            "end": 6381292
        }, {
            "filename": "/assets/daily/613CDB39C23CBBA2",
            "start": 6381292,
            "end": 6394339
        }, {
            "filename": "/assets/daily/613CDB39C23CBBA2.webp",
            "start": 6394339,
            "end": 6395743
        }, {
            "filename": "/assets/daily/613F50F0B332494A",
            "start": 6395743,
            "end": 6416833
        }, {
            "filename": "/assets/daily/613F50F0B332494A.webp",
            "start": 6416833,
            "end": 6420111
        }, {
            "filename": "/assets/daily/61474448D48FB22C",
            "start": 6420111,
            "end": 6436007
        }, {
            "filename": "/assets/daily/61474448D48FB22C.webp",
            "start": 6436007,
            "end": 6440814
        }, {
            "filename": "/assets/daily/614ECD8B0CE08C9F",
            "start": 6440814,
            "end": 6464214
        }, {
            "filename": "/assets/daily/614ECD8B0CE08C9F.webp",
            "start": 6464214,
            "end": 6465786
        }, {
            "filename": "/assets/daily/614EF51CB0E894B2",
            "start": 6465786,
            "end": 6473920
        }, {
            "filename": "/assets/daily/614EF51CB0E894B2.webp",
            "start": 6473920,
            "end": 6475060
        }, {
            "filename": "/assets/daily/6154E3B10CCD5F10",
            "start": 6475060,
            "end": 6482158
        }, {
            "filename": "/assets/daily/6154E3B10CCD5F10.webp",
            "start": 6482158,
            "end": 6484086
        }, {
            "filename": "/assets/daily/6157CB6FCF873E0F",
            "start": 6484086,
            "end": 6493112
        }, {
            "filename": "/assets/daily/6157CB6FCF873E0F.webp",
            "start": 6493112,
            "end": 6496231
        }, {
            "filename": "/assets/daily/615999797E89CDC8",
            "start": 6496231,
            "end": 6507471
        }, {
            "filename": "/assets/daily/615999797E89CDC8.webp",
            "start": 6507471,
            "end": 6514156
        }, {
            "filename": "/assets/daily/615F90EDA6B6889C",
            "start": 6514156,
            "end": 6523648
        }, {
            "filename": "/assets/daily/615F90EDA6B6889C.webp",
            "start": 6523648,
            "end": 6525507
        }, {
            "filename": "/assets/daily/6162822CF9AC52F7",
            "start": 6525507,
            "end": 6548149
        }, {
            "filename": "/assets/daily/6162822CF9AC52F7.webp",
            "start": 6548149,
            "end": 6550323
        }, {
            "filename": "/assets/daily/61630DBCB805C7B8",
            "start": 6550323,
            "end": 6564951
        }, {
            "filename": "/assets/daily/61630DBCB805C7B8.webp",
            "start": 6564951,
            "end": 6565758
        }, {
            "filename": "/assets/daily/616369AFDF122214",
            "start": 6565758,
            "end": 6578405
        }, {
            "filename": "/assets/daily/616369AFDF122214.webp",
            "start": 6578405,
            "end": 6580169
        }, {
            "filename": "/assets/daily/61695734D7CFC73B",
            "start": 6580169,
            "end": 6595806
        }, {
            "filename": "/assets/daily/61695734D7CFC73B.webp",
            "start": 6595806,
            "end": 6596919
        }, {
            "filename": "/assets/daily/616AB381A7C43ED5",
            "start": 6596919,
            "end": 6626098
        }, {
            "filename": "/assets/daily/616AB381A7C43ED5.webp",
            "start": 6626098,
            "end": 6629547
        }, {
            "filename": "/assets/daily/616CB7B365D8DC12",
            "start": 6629547,
            "end": 6635336
        }, {
            "filename": "/assets/daily/616CB7B365D8DC12.webp",
            "start": 6635336,
            "end": 6637382
        }, {
            "filename": "/assets/daily/6173FE096C021D69",
            "start": 6637382,
            "end": 6644485
        }, {
            "filename": "/assets/daily/6173FE096C021D69.webp",
            "start": 6644485,
            "end": 6645214
        }, {
            "filename": "/assets/daily/6174194EA3A1606A",
            "start": 6645214,
            "end": 6664521
        }, {
            "filename": "/assets/daily/6174194EA3A1606A.webp",
            "start": 6664521,
            "end": 6667545
        }, {
            "filename": "/assets/daily/6177EDC139257D50",
            "start": 6667545,
            "end": 6681899
        }, {
            "filename": "/assets/daily/6177EDC139257D50.webp",
            "start": 6681899,
            "end": 6682848
        }, {
            "filename": "/assets/daily/61791206901D0038",
            "start": 6682848,
            "end": 6693733
        }, {
            "filename": "/assets/daily/61791206901D0038.webp",
            "start": 6693733,
            "end": 6698634
        }, {
            "filename": "/assets/daily/617EE467B05654B8",
            "start": 6698634,
            "end": 6703864
        }, {
            "filename": "/assets/daily/617EE467B05654B8.webp",
            "start": 6703864,
            "end": 6706481
        }, {
            "filename": "/assets/daily/617FB91C58DE3C32",
            "start": 6706481,
            "end": 6719868
        }, {
            "filename": "/assets/daily/617FB91C58DE3C32.webp",
            "start": 6719868,
            "end": 6722013
        }, {
            "filename": "/assets/daily/618623D2F4B30AC0",
            "start": 6722013,
            "end": 6782758
        }, {
            "filename": "/assets/daily/618623D2F4B30AC0.webp",
            "start": 6782758,
            "end": 6785529
        }, {
            "filename": "/assets/daily/61873A9169D13D0B",
            "start": 6785529,
            "end": 6798945
        }, {
            "filename": "/assets/daily/61873A9169D13D0B.webp",
            "start": 6798945,
            "end": 6802148
        }, {
            "filename": "/assets/daily/6187B9B3D91228F4",
            "start": 6802148,
            "end": 6811863
        }, {
            "filename": "/assets/daily/6187B9B3D91228F4.webp",
            "start": 6811863,
            "end": 6814170
        }, {
            "filename": "/assets/daily/618CC4B76A7B8AB1",
            "start": 6814170,
            "end": 6831165
        }, {
            "filename": "/assets/daily/618CC4B76A7B8AB1.webp",
            "start": 6831165,
            "end": 6832692
        }, {
            "filename": "/assets/daily/618CEFF04707397F",
            "start": 6832692,
            "end": 6845012
        }, {
            "filename": "/assets/daily/618CEFF04707397F.webp",
            "start": 6845012,
            "end": 6847439
        }, {
            "filename": "/assets/daily/618FAA36C93162C3",
            "start": 6847439,
            "end": 6882252
        }, {
            "filename": "/assets/daily/618FAA36C93162C3.webp",
            "start": 6882252,
            "end": 6884439
        }, {
            "filename": "/assets/daily/6190F030F5328F98",
            "start": 6884439,
            "end": 6897532
        }, {
            "filename": "/assets/daily/6190F030F5328F98.webp",
            "start": 6897532,
            "end": 6901435
        }, {
            "filename": "/assets/daily/619105FC823570A0",
            "start": 6901435,
            "end": 6911950
        }, {
            "filename": "/assets/daily/619105FC823570A0.webp",
            "start": 6911950,
            "end": 6914009
        }, {
            "filename": "/assets/daily/61934219619294DB",
            "start": 6914009,
            "end": 6920166
        }, {
            "filename": "/assets/daily/61934219619294DB.webp",
            "start": 6920166,
            "end": 6924744
        }, {
            "filename": "/assets/daily/61935AABCEDC7B03",
            "start": 6924744,
            "end": 7006156
        }, {
            "filename": "/assets/daily/61935AABCEDC7B03.webp",
            "start": 7006156,
            "end": 7011122
        }, {
            "filename": "/assets/daily/6195B39810EB58F6",
            "start": 7011122,
            "end": 7018922
        }, {
            "filename": "/assets/daily/6195B39810EB58F6.webp",
            "start": 7018922,
            "end": 7021268
        }, {
            "filename": "/assets/daily/6196409E5B3AA720",
            "start": 7021268,
            "end": 7030060
        }, {
            "filename": "/assets/daily/6196409E5B3AA720.webp",
            "start": 7030060,
            "end": 7033686
        }, {
            "filename": "/assets/daily/6197386C6E97D505",
            "start": 7033686,
            "end": 7045370
        }, {
            "filename": "/assets/daily/6197386C6E97D505.webp",
            "start": 7045370,
            "end": 7046072
        }, {
            "filename": "/assets/daily/61989E74DCADCF0F",
            "start": 7046072,
            "end": 7057027
        }, {
            "filename": "/assets/daily/61989E74DCADCF0F.webp",
            "start": 7057027,
            "end": 7058649
        }, {
            "filename": "/assets/daily/619A0FA65CBB3398",
            "start": 7058649,
            "end": 7083275
        }, {
            "filename": "/assets/daily/619A0FA65CBB3398.webp",
            "start": 7083275,
            "end": 7084910
        }, {
            "filename": "/assets/daily/619A2B319650FBF9",
            "start": 7084910,
            "end": 7103991
        }, {
            "filename": "/assets/daily/619A2B319650FBF9.webp",
            "start": 7103991,
            "end": 7106356
        }, {
            "filename": "/assets/daily/619B0E25FBCF8042",
            "start": 7106356,
            "end": 7108005
        }, {
            "filename": "/assets/daily/619B0E25FBCF8042.webp",
            "start": 7108005,
            "end": 7110248
        }, {
            "filename": "/assets/daily/619EEBB08F3939FB",
            "start": 7110248,
            "end": 7121050
        }, {
            "filename": "/assets/daily/619EEBB08F3939FB.webp",
            "start": 7121050,
            "end": 7123436
        }, {
            "filename": "/assets/daily/61A1ED97CB7B4348",
            "start": 7123436,
            "end": 7136656
        }, {
            "filename": "/assets/daily/61A1ED97CB7B4348.webp",
            "start": 7136656,
            "end": 7137943
        }, {
            "filename": "/assets/daily/61A4497AA7247C88",
            "start": 7137943,
            "end": 7173846
        }, {
            "filename": "/assets/daily/61A4497AA7247C88.webp",
            "start": 7173846,
            "end": 7180537
        }, {
            "filename": "/assets/daily/61A62C84E97E97A4",
            "start": 7180537,
            "end": 7196838
        }, {
            "filename": "/assets/daily/61A62C84E97E97A4.webp",
            "start": 7196838,
            "end": 7197978
        }, {
            "filename": "/assets/daily/61A6806937DC0336",
            "start": 7197978,
            "end": 7293986
        }, {
            "filename": "/assets/daily/61A6806937DC0336.webp",
            "start": 7293986,
            "end": 7299278
        }, {
            "filename": "/assets/daily/61AD78EEBEB6BCD8",
            "start": 7299278,
            "end": 7310654
        }, {
            "filename": "/assets/daily/61AD78EEBEB6BCD8.webp",
            "start": 7310654,
            "end": 7312225
        }, {
            "filename": "/assets/daily/61AE3DBB2A7ABB99",
            "start": 7312225,
            "end": 7323638
        }, {
            "filename": "/assets/daily/61AE3DBB2A7ABB99.webp",
            "start": 7323638,
            "end": 7326285
        }, {
            "filename": "/assets/daily/61BD4FF9129CFBEF",
            "start": 7326285,
            "end": 7337088
        }, {
            "filename": "/assets/daily/61BD4FF9129CFBEF.webp",
            "start": 7337088,
            "end": 7338843
        }, {
            "filename": "/assets/daily/61BF1BCBD54D5537",
            "start": 7338843,
            "end": 7341088
        }, {
            "filename": "/assets/daily/61BF1BCBD54D5537.webp",
            "start": 7341088,
            "end": 7341682
        }, {
            "filename": "/assets/daily/61C39806779C1193",
            "start": 7341682,
            "end": 7358083
        }, {
            "filename": "/assets/daily/61C39806779C1193.webp",
            "start": 7358083,
            "end": 7360383
        }, {
            "filename": "/assets/daily/61C60BF5DCE4F0A7",
            "start": 7360383,
            "end": 7380442
        }, {
            "filename": "/assets/daily/61C60BF5DCE4F0A7.webp",
            "start": 7380442,
            "end": 7382230
        }, {
            "filename": "/assets/daily/61C738ED0A59A2C6",
            "start": 7382230,
            "end": 7400142
        }, {
            "filename": "/assets/daily/61C738ED0A59A2C6.webp",
            "start": 7400142,
            "end": 7404789
        }, {
            "filename": "/assets/daily/61C74474978A8631",
            "start": 7404789,
            "end": 7420732
        }, {
            "filename": "/assets/daily/61C74474978A8631.webp",
            "start": 7420732,
            "end": 7422405
        }, {
            "filename": "/assets/daily/61C756B63FEE88E7",
            "start": 7422405,
            "end": 7439640
        }, {
            "filename": "/assets/daily/61C756B63FEE88E7.webp",
            "start": 7439640,
            "end": 7445359
        }, {
            "filename": "/assets/daily/61C77D0BBD7B2745",
            "start": 7445359,
            "end": 7449044
        }, {
            "filename": "/assets/daily/61C77D0BBD7B2745.webp",
            "start": 7449044,
            "end": 7449694
        }, {
            "filename": "/assets/daily/61C77D73895BA26A",
            "start": 7449694,
            "end": 7474718
        }, {
            "filename": "/assets/daily/61C77D73895BA26A.webp",
            "start": 7474718,
            "end": 7475859
        }, {
            "filename": "/assets/daily/61C7B501B8852460",
            "start": 7475859,
            "end": 7519966
        }, {
            "filename": "/assets/daily/61C7B501B8852460.webp",
            "start": 7519966,
            "end": 7521831
        }, {
            "filename": "/assets/daily/61C7D53B3E42CE84",
            "start": 7521831,
            "end": 7529109
        }, {
            "filename": "/assets/daily/61C7D53B3E42CE84.webp",
            "start": 7529109,
            "end": 7530111
        }, {
            "filename": "/assets/daily/61C8B89CD85F79EC",
            "start": 7530111,
            "end": 7615276
        }, {
            "filename": "/assets/daily/61C8B89CD85F79EC.webp",
            "start": 7615276,
            "end": 7620538
        }, {
            "filename": "/assets/daily/61C9B0FB69273933",
            "start": 7620538,
            "end": 7630225
        }, {
            "filename": "/assets/daily/61C9B0FB69273933.webp",
            "start": 7630225,
            "end": 7636196
        }, {
            "filename": "/assets/daily/61D118DFEE84E1C5",
            "start": 7636196,
            "end": 7648452
        }, {
            "filename": "/assets/daily/61D118DFEE84E1C5.webp",
            "start": 7648452,
            "end": 7649958
        }, {
            "filename": "/assets/daily/61D15622300AB41B",
            "start": 7649958,
            "end": 7660175
        }, {
            "filename": "/assets/daily/61D15622300AB41B.webp",
            "start": 7660175,
            "end": 7665376
        }, {
            "filename": "/assets/daily/61D51637F9B6AF11",
            "start": 7665376,
            "end": 7690678
        }, {
            "filename": "/assets/daily/61D51637F9B6AF11.webp",
            "start": 7690678,
            "end": 7695898
        }, {
            "filename": "/assets/daily/61D5CA8A659C1AB9",
            "start": 7695898,
            "end": 7724068
        }, {
            "filename": "/assets/daily/61D5CA8A659C1AB9.webp",
            "start": 7724068,
            "end": 7727022
        }, {
            "filename": "/assets/daily/61D81315095BA8E9",
            "start": 7727022,
            "end": 7742634
        }, {
            "filename": "/assets/daily/61D81315095BA8E9.webp",
            "start": 7742634,
            "end": 7744007
        }, {
            "filename": "/assets/daily/61DA20600419CB0B",
            "start": 7744007,
            "end": 7753795
        }, {
            "filename": "/assets/daily/61DA20600419CB0B.webp",
            "start": 7753795,
            "end": 7757141
        }, {
            "filename": "/assets/daily/61E676423CDD8281",
            "start": 7757141,
            "end": 7768855
        }, {
            "filename": "/assets/daily/61E676423CDD8281.webp",
            "start": 7768855,
            "end": 7770837
        }, {
            "filename": "/assets/daily/61E79892125F2C1E",
            "start": 7770837,
            "end": 7784789
        }, {
            "filename": "/assets/daily/61E79892125F2C1E.webp",
            "start": 7784789,
            "end": 7787912
        }, {
            "filename": "/assets/daily/61F1CDB410A00427",
            "start": 7787912,
            "end": 7795583
        }, {
            "filename": "/assets/daily/61F1CDB410A00427.webp",
            "start": 7795583,
            "end": 7797958
        }, {
            "filename": "/assets/daily/61FD72D31DD14428",
            "start": 7797958,
            "end": 7822008
        }, {
            "filename": "/assets/daily/61FD72D31DD14428.webp",
            "start": 7822008,
            "end": 7826328
        }, {
            "filename": "/assets/daily/6202576E76816F65",
            "start": 7826328,
            "end": 7830108
        }, {
            "filename": "/assets/daily/6202576E76816F65.webp",
            "start": 7830108,
            "end": 7834543
        }, {
            "filename": "/assets/daily/620637E165A705B2",
            "start": 7834543,
            "end": 7844884
        }, {
            "filename": "/assets/daily/620637E165A705B2.webp",
            "start": 7844884,
            "end": 7846796
        }, {
            "filename": "/assets/daily/6214F9FA745BE950",
            "start": 7846796,
            "end": 7875307
        }, {
            "filename": "/assets/daily/6214F9FA745BE950.webp",
            "start": 7875307,
            "end": 7876442
        }, {
            "filename": "/assets/daily/621913A1EAF5CF24",
            "start": 7876442,
            "end": 7901100
        }, {
            "filename": "/assets/daily/621913A1EAF5CF24.webp",
            "start": 7901100,
            "end": 7906798
        }, {
            "filename": "/assets/daily/621EF76C20033756",
            "start": 7906798,
            "end": 7914133
        }, {
            "filename": "/assets/daily/621EF76C20033756.webp",
            "start": 7914133,
            "end": 7916285
        }, {
            "filename": "/assets/daily/6229AE9E95941F8E",
            "start": 7916285,
            "end": 7936222
        }, {
            "filename": "/assets/daily/6229AE9E95941F8E.webp",
            "start": 7936222,
            "end": 7938583
        }, {
            "filename": "/assets/daily/6233E4030A18A8A8",
            "start": 7938583,
            "end": 7949172
        }, {
            "filename": "/assets/daily/6233E4030A18A8A8.webp",
            "start": 7949172,
            "end": 7951744
        }, {
            "filename": "/assets/db",
            "start": 7951744,
            "end": 7951986
        }, {
            "filename": "/assets/fight/5A6818207F21049E",
            "start": 7951986,
            "end": 7954841
        }, {
            "filename": "/assets/fight/5A6818207F21049E.webp",
            "start": 7954841,
            "end": 7966915
        }, {
            "filename": "/assets/fight/5B9EBE3E669CBF12",
            "start": 7966915,
            "end": 7992593
        }, {
            "filename": "/assets/fight/5B9EBE3E669CBF12.webp",
            "start": 7992593,
            "end": 8012241
        }, {
            "filename": "/assets/fight/5CA52D8AC0F5CCB9",
            "start": 8012241,
            "end": 8036815
        }, {
            "filename": "/assets/fight/5CA52D8AC0F5CCB9.webp",
            "start": 8036815,
            "end": 8064115
        }, {
            "filename": "/assets/fight/5D187EB68D628035",
            "start": 8064115,
            "end": 8079616
        }, {
            "filename": "/assets/fight/5D187EB68D628035.webp",
            "start": 8079616,
            "end": 8086616
        }, {
            "filename": "/assets/fight/5E144CA9724DEE22",
            "start": 8086616,
            "end": 8095757
        }, {
            "filename": "/assets/fight/5E144CA9724DEE22.webp",
            "start": 8095757,
            "end": 8106545
        }, {
            "filename": "/assets/fight/5E9C23569F24A38A",
            "start": 8106545,
            "end": 8128659
        }, {
            "filename": "/assets/fight/5E9C23569F24A38A.webp",
            "start": 8128659,
            "end": 8133695
        }, {
            "filename": "/assets/fight/5F085A3508210D33",
            "start": 8133695,
            "end": 8147342
        }, {
            "filename": "/assets/fight/5F085A3508210D33.webp",
            "start": 8147342,
            "end": 8151147
        }, {
            "filename": "/assets/fight/5F2680B5A871C4DC",
            "start": 8151147,
            "end": 8158075
        }, {
            "filename": "/assets/fight/5F2680B5A871C4DC.webp",
            "start": 8158075,
            "end": 8162210
        }, {
            "filename": "/assets/fight/5F7F258355FF162F",
            "start": 8162210,
            "end": 8168387
        }, {
            "filename": "/assets/fight/5F7F258355FF162F.webp",
            "start": 8168387,
            "end": 8177e3
        }, {
            "filename": "/assets/fight/5F96C03177A526B0",
            "start": 8177e3,
            "end": 8186532
        }, {
            "filename": "/assets/fight/5F96C03177A526B0.webp",
            "start": 8186532,
            "end": 8206440
        }, {
            "filename": "/assets/fight/5FE783C70752433D",
            "start": 8206440,
            "end": 8218808
        }, {
            "filename": "/assets/fight/5FE783C70752433D.webp",
            "start": 8218808,
            "end": 8225036
        }, {
            "filename": "/assets/fight/5FF3E2B1F59AF437",
            "start": 8225036,
            "end": 8241092
        }, {
            "filename": "/assets/fight/5FF3E2B1F59AF437.webp",
            "start": 8241092,
            "end": 8272961
        }, {
            "filename": "/assets/fight/5FFC2D2C186CCE76",
            "start": 8272961,
            "end": 8284556
        }, {
            "filename": "/assets/fight/5FFC2D2C186CCE76.webp",
            "start": 8284556,
            "end": 8296617
        }, {
            "filename": "/assets/fight/6012CB49AE42FD4F",
            "start": 8296617,
            "end": 8316592
        }, {
            "filename": "/assets/fight/6012CB49AE42FD4F.webp",
            "start": 8316592,
            "end": 8336736
        }, {
            "filename": "/assets/fight/6020F44F3A287C88",
            "start": 8336736,
            "end": 8390318
        }, {
            "filename": "/assets/fight/6020F44F3A287C88.webp",
            "start": 8390318,
            "end": 8407697
        }, {
            "filename": "/assets/fight/604419DD712FC463",
            "start": 8407697,
            "end": 8413914
        }, {
            "filename": "/assets/fight/604419DD712FC463.webp",
            "start": 8413914,
            "end": 8414919
        }, {
            "filename": "/assets/fight/60851784770864E1",
            "start": 8414919,
            "end": 8439165
        }, {
            "filename": "/assets/fight/60851784770864E1.webp",
            "start": 8439165,
            "end": 8454845
        }, {
            "filename": "/assets/fight/609992DCED1B5BC5",
            "start": 8454845,
            "end": 8488762
        }, {
            "filename": "/assets/fight/609992DCED1B5BC5.webp",
            "start": 8488762,
            "end": 8502967
        }, {
            "filename": "/assets/fight/60BE239F70977F47",
            "start": 8502967,
            "end": 8539782
        }, {
            "filename": "/assets/fight/60BE239F70977F47.webp",
            "start": 8539782,
            "end": 8561023
        }, {
            "filename": "/assets/fight/60D2F534EC209A8D",
            "start": 8561023,
            "end": 8574717
        }, {
            "filename": "/assets/fight/60D2F534EC209A8D.webp",
            "start": 8574717,
            "end": 8594638
        }, {
            "filename": "/assets/fight/6107D31161FD8F02",
            "start": 8594638,
            "end": 8610747
        }, {
            "filename": "/assets/fight/6107D31161FD8F02.webp",
            "start": 8610747,
            "end": 8622819
        }, {
            "filename": "/assets/fight/612018FAD2270A39",
            "start": 8622819,
            "end": 8653808
        }, {
            "filename": "/assets/fight/612018FAD2270A39.webp",
            "start": 8653808,
            "end": 8662369
        }, {
            "filename": "/assets/fight/614ECD8B0CE08C9F",
            "start": 8662369,
            "end": 8685769
        }, {
            "filename": "/assets/fight/614ECD8B0CE08C9F.webp",
            "start": 8685769,
            "end": 8700171
        }, {
            "filename": "/assets/fight/6171191D1D5C25BA",
            "start": 8700171,
            "end": 8717462
        }, {
            "filename": "/assets/fight/6171191D1D5C25BA.webp",
            "start": 8717462,
            "end": 8729857
        }, {
            "filename": "/assets/fight/617FC7B1C5E03307",
            "start": 8729857,
            "end": 8753197
        }, {
            "filename": "/assets/fight/617FC7B1C5E03307.webp",
            "start": 8753197,
            "end": 8772482
        }, {
            "filename": "/assets/fight/61F77B7E06B4DC8D",
            "start": 8772482,
            "end": 8786636
        }, {
            "filename": "/assets/fight/61F77B7E06B4DC8D.webp",
            "start": 8786636,
            "end": 8792252
        }, {
            "filename": "/assets/fight/62036F2322BA7282",
            "start": 8792252,
            "end": 8811801
        }, {
            "filename": "/assets/fight/62036F2322BA7282.webp",
            "start": 8811801,
            "end": 8830107
        }, {
            "filename": "/assets/fight/62AC38A51E0432AF",
            "start": 8830107,
            "end": 8876932
        }, {
            "filename": "/assets/fight/62AC38A51E0432AF.webp",
            "start": 8876932,
            "end": 8883295
        }, {
            "filename": "/assets/fight/BATTLE_UNKNOWN.webp",
            "start": 8883295,
            "end": 8883865
        }, {
            "filename": "/assets/fight/fight",
            "start": 8883865,
            "end": 8888861
        }, {
            "filename": "/assets/games/5A6818207F21049E",
            "start": 8888861,
            "end": 8891716
        }, {
            "filename": "/assets/games/5A6818207F21049E.webp",
            "start": 8891716,
            "end": 8893622
        }, {
            "filename": "/assets/games/5AEDD85F09AE9AE2",
            "start": 8893622,
            "end": 8895075
        }, {
            "filename": "/assets/games/5AEDD85F09AE9AE2.webp",
            "start": 8895075,
            "end": 8899347
        }, {
            "filename": "/assets/games/5B04EDCE313419F7",
            "start": 8899347,
            "end": 8907879
        }, {
            "filename": "/assets/games/5B04EDCE313419F7.webp",
            "start": 8907879,
            "end": 8911683
        }, {
            "filename": "/assets/games/5B48E0402A39D525",
            "start": 8911683,
            "end": 8922672
        }, {
            "filename": "/assets/games/5B48E0402A39D525.webp",
            "start": 8922672,
            "end": 8928915
        }, {
            "filename": "/assets/games/5B586BC84B91DF7A",
            "start": 8928915,
            "end": 8957863
        }, {
            "filename": "/assets/games/5B586BC84B91DF7A.webp",
            "start": 8957863,
            "end": 8963327
        }, {
            "filename": "/assets/games/5B7024E63D9B066A",
            "start": 8963327,
            "end": 8979391
        }, {
            "filename": "/assets/games/5B7024E63D9B066A.webp",
            "start": 8979391,
            "end": 8984509
        }, {
            "filename": "/assets/games/5B7948C4AD85967E",
            "start": 8984509,
            "end": 8995059
        }, {
            "filename": "/assets/games/5B7948C4AD85967E.webp",
            "start": 8995059,
            "end": 8996668
        }, {
            "filename": "/assets/games/5B7AAE24DD00AE95",
            "start": 8996668,
            "end": 9012962
        }, {
            "filename": "/assets/games/5B7AAE24DD00AE95.webp",
            "start": 9012962,
            "end": 9018935
        }, {
            "filename": "/assets/games/5B9EBE3E669CBF12",
            "start": 9018935,
            "end": 9044634
        }, {
            "filename": "/assets/games/5B9EBE3E669CBF12.webp",
            "start": 9044634,
            "end": 9050542
        }, {
            "filename": "/assets/games/5BB9FA18F59B4A2D",
            "start": 9050542,
            "end": 9072727
        }, {
            "filename": "/assets/games/5BB9FA18F59B4A2D.webp",
            "start": 9072727,
            "end": 9078215
        }, {
            "filename": "/assets/games/5BD5944CAA9BB5E0",
            "start": 9078215,
            "end": 9091022
        }, {
            "filename": "/assets/games/5BD5944CAA9BB5E0.webp",
            "start": 9091022,
            "end": 9093140
        }, {
            "filename": "/assets/games/5BEC8352E4E078B1",
            "start": 9093140,
            "end": 9097521
        }, {
            "filename": "/assets/games/5BEC8352E4E078B1.webp",
            "start": 9097521,
            "end": 9099470
        }, {
            "filename": "/assets/games/5BFC1C2A246D67DD",
            "start": 9099470,
            "end": 9108041
        }, {
            "filename": "/assets/games/5BFC1C2A246D67DD.webp",
            "start": 9108041,
            "end": 9109784
        }, {
            "filename": "/assets/games/5C1AA5FCBA847DF9",
            "start": 9109784,
            "end": 9115384
        }, {
            "filename": "/assets/games/5C1AA5FCBA847DF9.webp",
            "start": 9115384,
            "end": 9117435
        }, {
            "filename": "/assets/games/5C3C280BB314BE96",
            "start": 9117435,
            "end": 9129981
        }, {
            "filename": "/assets/games/5C3C280BB314BE96.webp",
            "start": 9129981,
            "end": 9139520
        }, {
            "filename": "/assets/games/5C6C81275F4BA24D",
            "start": 9139520,
            "end": 9153657
        }, {
            "filename": "/assets/games/5C6C81275F4BA24D.webp",
            "start": 9153657,
            "end": 9156739
        }, {
            "filename": "/assets/games/5C74CB320F057263",
            "start": 9156739,
            "end": 9183373
        }, {
            "filename": "/assets/games/5C74CB320F057263.webp",
            "start": 9183373,
            "end": 9187520
        }, {
            "filename": "/assets/games/5C980EB56F9F02DB",
            "start": 9187520,
            "end": 9207280
        }, {
            "filename": "/assets/games/5C980EB56F9F02DB.webp",
            "start": 9207280,
            "end": 9210775
        }, {
            "filename": "/assets/games/5CA0DA40A85D6208",
            "start": 9210775,
            "end": 9218234
        }, {
            "filename": "/assets/games/5CA0DA40A85D6208.webp",
            "start": 9218234,
            "end": 9220595
        }, {
            "filename": "/assets/games/5CA52D8AC0F5CCB9",
            "start": 9220595,
            "end": 9245169
        }, {
            "filename": "/assets/games/5CA52D8AC0F5CCB9.webp",
            "start": 9245169,
            "end": 9251047
        }, {
            "filename": "/assets/games/5CA6212462EF6153",
            "start": 9251047,
            "end": 9256974
        }, {
            "filename": "/assets/games/5CA6212462EF6153.webp",
            "start": 9256974,
            "end": 9258508
        }, {
            "filename": "/assets/games/5CC7412ACD5FB747",
            "start": 9258508,
            "end": 9268591
        }, {
            "filename": "/assets/games/5CC7412ACD5FB747.webp",
            "start": 9268591,
            "end": 9271199
        }, {
            "filename": "/assets/games/5CCF984B45C9F044",
            "start": 9271199,
            "end": 9280429
        }, {
            "filename": "/assets/games/5CCF984B45C9F044.webp",
            "start": 9280429,
            "end": 9287300
        }, {
            "filename": "/assets/games/5CE83E034F30F5BB",
            "start": 9287300,
            "end": 9295183
        }, {
            "filename": "/assets/games/5CE83E034F30F5BB.webp",
            "start": 9295183,
            "end": 9298415
        }, {
            "filename": "/assets/games/5CECE8F8BDE5E8CA",
            "start": 9298415,
            "end": 9308858
        }, {
            "filename": "/assets/games/5CECE8F8BDE5E8CA.webp",
            "start": 9308858,
            "end": 9312253
        }, {
            "filename": "/assets/games/5CF3ECA67AB60F9D",
            "start": 9312253,
            "end": 9339648
        }, {
            "filename": "/assets/games/5CF3ECA67AB60F9D.webp",
            "start": 9339648,
            "end": 9344812
        }, {
            "filename": "/assets/games/5CFB51C5F0312016",
            "start": 9344812,
            "end": 9370161
        }, {
            "filename": "/assets/games/5CFB51C5F0312016.webp",
            "start": 9370161,
            "end": 9374198
        }, {
            "filename": "/assets/games/5D01F6B5940D6100",
            "start": 9374198,
            "end": 9385758
        }, {
            "filename": "/assets/games/5D01F6B5940D6100.webp",
            "start": 9385758,
            "end": 9388227
        }, {
            "filename": "/assets/games/5D01F6D05B05C161",
            "start": 9388227,
            "end": 9393731
        }, {
            "filename": "/assets/games/5D01F6D05B05C161.webp",
            "start": 9393731,
            "end": 9398752
        }, {
            "filename": "/assets/games/5D01F6F45B7C4B73",
            "start": 9398752,
            "end": 9421359
        }, {
            "filename": "/assets/games/5D01F6F45B7C4B73.webp",
            "start": 9421359,
            "end": 9426820
        }, {
            "filename": "/assets/games/5D01F70D3373F2DD",
            "start": 9426820,
            "end": 9454245
        }, {
            "filename": "/assets/games/5D01F70D3373F2DD.webp",
            "start": 9454245,
            "end": 9459536
        }, {
            "filename": "/assets/games/5D0E52CAC34823EE",
            "start": 9459536,
            "end": 9466090
        }, {
            "filename": "/assets/games/5D0E52CAC34823EE.webp",
            "start": 9466090,
            "end": 9469498
        }, {
            "filename": "/assets/games/5D13591AB08F0F0B",
            "start": 9469498,
            "end": 9479538
        }, {
            "filename": "/assets/games/5D13591AB08F0F0B.webp",
            "start": 9479538,
            "end": 9483192
        }, {
            "filename": "/assets/games/5D14BAD1A6DE80C6",
            "start": 9483192,
            "end": 9491743
        }, {
            "filename": "/assets/games/5D14BAD1A6DE80C6.webp",
            "start": 9491743,
            "end": 9498103
        }, {
            "filename": "/assets/games/5D187EB68D628035",
            "start": 9498103,
            "end": 9513604
        }, {
            "filename": "/assets/games/5D187EB68D628035.webp",
            "start": 9513604,
            "end": 9515940
        }, {
            "filename": "/assets/games/5D305F5A730CDA13",
            "start": 9515940,
            "end": 9525163
        }, {
            "filename": "/assets/games/5D305F5A730CDA13.webp",
            "start": 9525163,
            "end": 9527692
        }, {
            "filename": "/assets/games/5D36098A423B8F8F",
            "start": 9527692,
            "end": 9563276
        }, {
            "filename": "/assets/games/5D36098A423B8F8F.webp",
            "start": 9563276,
            "end": 9566758
        }, {
            "filename": "/assets/games/5D43327D2DCDAA22",
            "start": 9566758,
            "end": 9591395
        }, {
            "filename": "/assets/games/5D43327D2DCDAA22.webp",
            "start": 9591395,
            "end": 9594741
        }, {
            "filename": "/assets/games/5D4811F29115C373",
            "start": 9594741,
            "end": 9610300
        }, {
            "filename": "/assets/games/5D4811F29115C373.webp",
            "start": 9610300,
            "end": 9616412
        }, {
            "filename": "/assets/games/5D4D9D381CD9C64F",
            "start": 9616412,
            "end": 9636367
        }, {
            "filename": "/assets/games/5D4D9D381CD9C64F.webp",
            "start": 9636367,
            "end": 9639729
        }, {
            "filename": "/assets/games/5D63CDF8CB82EDEB",
            "start": 9639729,
            "end": 9644765
        }, {
            "filename": "/assets/games/5D63CDF8CB82EDEB.webp",
            "start": 9644765,
            "end": 9648254
        }, {
            "filename": "/assets/games/5D9C668EFD2EA6FB",
            "start": 9648254,
            "end": 9661267
        }, {
            "filename": "/assets/games/5D9C668EFD2EA6FB.webp",
            "start": 9661267,
            "end": 9666462
        }, {
            "filename": "/assets/games/5DDA4196494F554E",
            "start": 9666462,
            "end": 9705619
        }, {
            "filename": "/assets/games/5DDA4196494F554E.webp",
            "start": 9705619,
            "end": 9714687
        }, {
            "filename": "/assets/games/5DDCC2B6907E7478",
            "start": 9714687,
            "end": 9721403
        }, {
            "filename": "/assets/games/5DDCC2B6907E7478.webp",
            "start": 9721403,
            "end": 9726423
        }, {
            "filename": "/assets/games/5DDEA6DCA1EBA798",
            "start": 9726423,
            "end": 9733026
        }, {
            "filename": "/assets/games/5DDEA6DCA1EBA798.webp",
            "start": 9733026,
            "end": 9735700
        }, {
            "filename": "/assets/games/5DECAAB70F71EA92",
            "start": 9735700,
            "end": 9768500
        }, {
            "filename": "/assets/games/5DECAAB70F71EA92.webp",
            "start": 9768500,
            "end": 9778022
        }, {
            "filename": "/assets/games/5DF8E41842F0233D",
            "start": 9778022,
            "end": 9810125
        }, {
            "filename": "/assets/games/5DF8E41842F0233D.webp",
            "start": 9810125,
            "end": 9816762
        }, {
            "filename": "/assets/games/5DFEEE25B4B7FA54",
            "start": 9816762,
            "end": 9854616
        }, {
            "filename": "/assets/games/5DFEEE25B4B7FA54.webp",
            "start": 9854616,
            "end": 9861089
        }, {
            "filename": "/assets/games/5E03DC7EA1C9CF6E",
            "start": 9861089,
            "end": 9881951
        }, {
            "filename": "/assets/games/5E03DC7EA1C9CF6E.webp",
            "start": 9881951,
            "end": 9886773
        }, {
            "filename": "/assets/games/5E04B27B30823301",
            "start": 9886773,
            "end": 9891308
        }, {
            "filename": "/assets/games/5E04B27B30823301.webp",
            "start": 9891308,
            "end": 9893468
        }, {
            "filename": "/assets/games/5E0A4B498E2D561E",
            "start": 9893468,
            "end": 9954807
        }, {
            "filename": "/assets/games/5E0A4B498E2D561E.webp",
            "start": 9954807,
            "end": 9961850
        }, {
            "filename": "/assets/games/5E144CA9724DEE22",
            "start": 9961850,
            "end": 9970991
        }, {
            "filename": "/assets/games/5E144CA9724DEE22.webp",
            "start": 9970991,
            "end": 9977843
        }, {
            "filename": "/assets/games/5E1480E087D65091",
            "start": 9977843,
            "end": 9994676
        }, {
            "filename": "/assets/games/5E1480E087D65091.webp",
            "start": 9994676,
            "end": 9997219
        }, {
            "filename": "/assets/games/5E44B2DD8C323489",
            "start": 9997219,
            "end": 10009495
        }, {
            "filename": "/assets/games/5E44B2DD8C323489.webp",
            "start": 10009495,
            "end": 10014092
        }, {
            "filename": "/assets/games/5E4EFE454A01D678",
            "start": 10014092,
            "end": 10053926
        }, {
            "filename": "/assets/games/5E4EFE454A01D678.webp",
            "start": 10053926,
            "end": 10060630
        }, {
            "filename": "/assets/games/5E5CDCB8A651234C",
            "start": 10060630,
            "end": 10074947
        }, {
            "filename": "/assets/games/5E5CDCB8A651234C.webp",
            "start": 10074947,
            "end": 10079468
        }, {
            "filename": "/assets/games/5E5E8427239FCBB1",
            "start": 10079468,
            "end": 10095782
        }, {
            "filename": "/assets/games/5E5E8427239FCBB1.webp",
            "start": 10095782,
            "end": 10098170
        }, {
            "filename": "/assets/games/5E66630FF9A7DEE0",
            "start": 10098170,
            "end": 10112379
        }, {
            "filename": "/assets/games/5E66630FF9A7DEE0.webp",
            "start": 10112379,
            "end": 10116507
        }, {
            "filename": "/assets/games/5E68A3273A6DC951",
            "start": 10116507,
            "end": 10134480
        }, {
            "filename": "/assets/games/5E68A3273A6DC951.webp",
            "start": 10134480,
            "end": 10139651
        }, {
            "filename": "/assets/games/5E72248DB8B551A1",
            "start": 10139651,
            "end": 10158095
        }, {
            "filename": "/assets/games/5E72248DB8B551A1.webp",
            "start": 10158095,
            "end": 10162556
        }, {
            "filename": "/assets/games/5E78D7A40B6741ED",
            "start": 10162556,
            "end": 10193225
        }, {
            "filename": "/assets/games/5E78D7A40B6741ED.webp",
            "start": 10193225,
            "end": 10198297
        }, {
            "filename": "/assets/games/5E85B18268189C91",
            "start": 10198297,
            "end": 10225996
        }, {
            "filename": "/assets/games/5E85B18268189C91.webp",
            "start": 10225996,
            "end": 10232435
        }, {
            "filename": "/assets/games/5E99CD887C4A8028",
            "start": 10232435,
            "end": 10255440
        }, {
            "filename": "/assets/games/5E99CD887C4A8028.webp",
            "start": 10255440,
            "end": 10258802
        }, {
            "filename": "/assets/games/5E9D90DED103F721",
            "start": 10258802,
            "end": 10288699
        }, {
            "filename": "/assets/games/5E9D90DED103F721.webp",
            "start": 10288699,
            "end": 10296089
        }, {
            "filename": "/assets/games/5E9F40DA7F9C9FA8",
            "start": 10296089,
            "end": 10324392
        }, {
            "filename": "/assets/games/5E9F40DA7F9C9FA8.webp",
            "start": 10324392,
            "end": 10330158
        }, {
            "filename": "/assets/games/5EA3060C267794F9",
            "start": 10330158,
            "end": 10361486
        }, {
            "filename": "/assets/games/5EA3060C267794F9.webp",
            "start": 10361486,
            "end": 10364701
        }, {
            "filename": "/assets/games/5EADBCF5413A97E9",
            "start": 10364701,
            "end": 10376866
        }, {
            "filename": "/assets/games/5EADBCF5413A97E9.webp",
            "start": 10376866,
            "end": 10380341
        }, {
            "filename": "/assets/games/5EB4DEC6401A5BFA",
            "start": 10380341,
            "end": 10402001
        }, {
            "filename": "/assets/games/5EB4DEC6401A5BFA.webp",
            "start": 10402001,
            "end": 10407304
        }, {
            "filename": "/assets/games/5EB4F55AF03B27E4",
            "start": 10407304,
            "end": 10430463
        }, {
            "filename": "/assets/games/5EB4F55AF03B27E4.webp",
            "start": 10430463,
            "end": 10437829
        }, {
            "filename": "/assets/games/5EBB62523C0B03D5",
            "start": 10437829,
            "end": 10461590
        }, {
            "filename": "/assets/games/5EBB62523C0B03D5.webp",
            "start": 10461590,
            "end": 10465759
        }, {
            "filename": "/assets/games/5EC0D757BC8BD207",
            "start": 10465759,
            "end": 10485161
        }, {
            "filename": "/assets/games/5EC0D757BC8BD207.webp",
            "start": 10485161,
            "end": 10495207
        }, {
            "filename": "/assets/games/5EE1D6FFF84521B6",
            "start": 10495207,
            "end": 10518249
        }, {
            "filename": "/assets/games/5EE1D6FFF84521B6.webp",
            "start": 10518249,
            "end": 10521519
        }, {
            "filename": "/assets/games/5EE418F188962CCA",
            "start": 10521519,
            "end": 10536603
        }, {
            "filename": "/assets/games/5EE418F188962CCA.webp",
            "start": 10536603,
            "end": 10543707
        }, {
            "filename": "/assets/games/5EE63A5F0BB69F11",
            "start": 10543707,
            "end": 10567697
        }, {
            "filename": "/assets/games/5EE63A5F0BB69F11.webp",
            "start": 10567697,
            "end": 10575162
        }, {
            "filename": "/assets/games/5EE717D327461A13",
            "start": 10575162,
            "end": 10603259
        }, {
            "filename": "/assets/games/5EE717D327461A13.webp",
            "start": 10603259,
            "end": 10606995
        }, {
            "filename": "/assets/games/5F06B79199C1DE16",
            "start": 10606995,
            "end": 10625713
        }, {
            "filename": "/assets/games/5F06B79199C1DE16.webp",
            "start": 10625713,
            "end": 10627795
        }, {
            "filename": "/assets/games/5F084A0BCE06B710",
            "start": 10627795,
            "end": 10678404
        }, {
            "filename": "/assets/games/5F084A0BCE06B710.webp",
            "start": 10678404,
            "end": 10684359
        }, {
            "filename": "/assets/games/5F1AB52145FC5C5E",
            "start": 10684359,
            "end": 10717909
        }, {
            "filename": "/assets/games/5F1AB52145FC5C5E.webp",
            "start": 10717909,
            "end": 10722909
        }, {
            "filename": "/assets/games/5F2567DA32EAAB92",
            "start": 10722909,
            "end": 10745551
        }, {
            "filename": "/assets/games/5F2567DA32EAAB92.webp",
            "start": 10745551,
            "end": 10749913
        }, {
            "filename": "/assets/games/5F27BB076260B8F2",
            "start": 10749913,
            "end": 10761625
        }, {
            "filename": "/assets/games/5F27BB076260B8F2.webp",
            "start": 10761625,
            "end": 10764984
        }, {
            "filename": "/assets/games/5F2DB02E4CFCD37F",
            "start": 10764984,
            "end": 10774987
        }, {
            "filename": "/assets/games/5F2DB02E4CFCD37F.webp",
            "start": 10774987,
            "end": 10780817
        }, {
            "filename": "/assets/games/5F39593BFC59C233",
            "start": 10780817,
            "end": 10795630
        }, {
            "filename": "/assets/games/5F39593BFC59C233.webp",
            "start": 10795630,
            "end": 10800592
        }, {
            "filename": "/assets/games/5F3C0CAC65CE511F",
            "start": 10800592,
            "end": 10815493
        }, {
            "filename": "/assets/games/5F3C0CAC65CE511F.webp",
            "start": 10815493,
            "end": 10818376
        }, {
            "filename": "/assets/games/5F490F0F424DCB5F",
            "start": 10818376,
            "end": 10831770
        }, {
            "filename": "/assets/games/5F490F0F424DCB5F.webp",
            "start": 10831770,
            "end": 10833948
        }, {
            "filename": "/assets/games/5F50D2641B5B3EBE",
            "start": 10833948,
            "end": 10864482
        }, {
            "filename": "/assets/games/5F50D2641B5B3EBE.webp",
            "start": 10864482,
            "end": 10867930
        }, {
            "filename": "/assets/games/5F5A4E32A2926D92",
            "start": 10867930,
            "end": 10877017
        }, {
            "filename": "/assets/games/5F5A4E32A2926D92.webp",
            "start": 10877017,
            "end": 10881655
        }, {
            "filename": "/assets/games/5F5F2D5C3E628863",
            "start": 10881655,
            "end": 10897088
        }, {
            "filename": "/assets/games/5F5F2D5C3E628863.webp",
            "start": 10897088,
            "end": 10901115
        }, {
            "filename": "/assets/games/5F6E28E0322020BC",
            "start": 10901115,
            "end": 10912006
        }, {
            "filename": "/assets/games/5F6E28E0322020BC.webp",
            "start": 10912006,
            "end": 10915638
        }, {
            "filename": "/assets/games/5F750EDC0079733F",
            "start": 10915638,
            "end": 10930860
        }, {
            "filename": "/assets/games/5F750EDC0079733F.webp",
            "start": 10930860,
            "end": 10933104
        }, {
            "filename": "/assets/games/5F7A3CCE372C9A4C",
            "start": 10933104,
            "end": 10942877
        }, {
            "filename": "/assets/games/5F7A3CCE372C9A4C.webp",
            "start": 10942877,
            "end": 10944696
        }, {
            "filename": "/assets/games/5F897437BE1218C6",
            "start": 10944696,
            "end": 10950734
        }, {
            "filename": "/assets/games/5F897437BE1218C6.webp",
            "start": 10950734,
            "end": 10955476
        }, {
            "filename": "/assets/games/5F9283586158C699",
            "start": 10955476,
            "end": 10988105
        }, {
            "filename": "/assets/games/5F9283586158C699.webp",
            "start": 10988105,
            "end": 10992046
        }, {
            "filename": "/assets/games/5F9D7E85568C7D66",
            "start": 10992046,
            "end": 11002669
        }, {
            "filename": "/assets/games/5F9D7E85568C7D66.webp",
            "start": 11002669,
            "end": 11008834
        }, {
            "filename": "/assets/games/5F9DAE312F148B45",
            "start": 11008834,
            "end": 11054463
        }, {
            "filename": "/assets/games/5F9DAE312F148B45.webp",
            "start": 11054463,
            "end": 11067323
        }, {
            "filename": "/assets/games/5FD25449355F9CD7",
            "start": 11067323,
            "end": 11097647
        }, {
            "filename": "/assets/games/5FD25449355F9CD7.webp",
            "start": 11097647,
            "end": 11103837
        }, {
            "filename": "/assets/games/5FDB8275E5D9966B",
            "start": 11103837,
            "end": 11117770
        }, {
            "filename": "/assets/games/5FDB8275E5D9966B.webp",
            "start": 11117770,
            "end": 11123850
        }, {
            "filename": "/assets/games/5FE1D73210CDD9DD",
            "start": 11123850,
            "end": 11144664
        }, {
            "filename": "/assets/games/5FE1D73210CDD9DD.webp",
            "start": 11144664,
            "end": 11146226
        }, {
            "filename": "/assets/games/5FE5F2098BD535FF",
            "start": 11146226,
            "end": 11155830
        }, {
            "filename": "/assets/games/5FE5F2098BD535FF.webp",
            "start": 11155830,
            "end": 11159022
        }, {
            "filename": "/assets/games/5FF8DD1A02698194",
            "start": 11159022,
            "end": 11202566
        }, {
            "filename": "/assets/games/5FF8DD1A02698194.webp",
            "start": 11202566,
            "end": 11206260
        }, {
            "filename": "/assets/games/5FFE25325D019337",
            "start": 11206260,
            "end": 11242935
        }, {
            "filename": "/assets/games/5FFE25325D019337.webp",
            "start": 11242935,
            "end": 11252576
        }, {
            "filename": "/assets/games/5FFEEA620BE54704",
            "start": 11252576,
            "end": 11298314
        }, {
            "filename": "/assets/games/5FFEEA620BE54704.webp",
            "start": 11298314,
            "end": 11300639
        }, {
            "filename": "/assets/games/602BD676A800F9AA",
            "start": 11300639,
            "end": 11317624
        }, {
            "filename": "/assets/games/602BD676A800F9AA.webp",
            "start": 11317624,
            "end": 11321560
        }, {
            "filename": "/assets/games/6041C66A11ADA9FF",
            "start": 11321560,
            "end": 11329650
        }, {
            "filename": "/assets/games/6041C66A11ADA9FF.webp",
            "start": 11329650,
            "end": 11333847
        }, {
            "filename": "/assets/games/604F5881EBA8E83A",
            "start": 11333847,
            "end": 11341670
        }, {
            "filename": "/assets/games/604F5881EBA8E83A.webp",
            "start": 11341670,
            "end": 11346379
        }, {
            "filename": "/assets/games/605774D8A365816F",
            "start": 11346379,
            "end": 11377110
        }, {
            "filename": "/assets/games/605774D8A365816F.webp",
            "start": 11377110,
            "end": 11379326
        }, {
            "filename": "/assets/games/605E407A807B9FBC",
            "start": 11379326,
            "end": 11391776
        }, {
            "filename": "/assets/games/605E407A807B9FBC.webp",
            "start": 11391776,
            "end": 11393863
        }, {
            "filename": "/assets/games/605E5683BC131ED5",
            "start": 11393863,
            "end": 11429841
        }, {
            "filename": "/assets/games/605E5683BC131ED5.webp",
            "start": 11429841,
            "end": 11431972
        }, {
            "filename": "/assets/games/605F3B8DC80A36DA",
            "start": 11431972,
            "end": 11455619
        }, {
            "filename": "/assets/games/605F3B8DC80A36DA.webp",
            "start": 11455619,
            "end": 11456858
        }, {
            "filename": "/assets/games/606845B88904DF25",
            "start": 11456858,
            "end": 11484067
        }, {
            "filename": "/assets/games/606845B88904DF25.webp",
            "start": 11484067,
            "end": 11487152
        }, {
            "filename": "/assets/games/60B4E9C2D6CE8B5C",
            "start": 11487152,
            "end": 11528758
        }, {
            "filename": "/assets/games/60B4E9C2D6CE8B5C.webp",
            "start": 11528758,
            "end": 11534115
        }, {
            "filename": "/assets/games/60C5A2B329B04F31",
            "start": 11534115,
            "end": 11560952
        }, {
            "filename": "/assets/games/60C5A2B329B04F31.webp",
            "start": 11560952,
            "end": 11565920
        }, {
            "filename": "/assets/games/60F001B50971B850",
            "start": 11565920,
            "end": 11629088
        }, {
            "filename": "/assets/games/60F001B50971B850.webp",
            "start": 11629088,
            "end": 11635755
        }, {
            "filename": "/assets/games/61023085A2A36F3D",
            "start": 11635755,
            "end": 11650706
        }, {
            "filename": "/assets/games/61023085A2A36F3D.webp",
            "start": 11650706,
            "end": 11662199
        }, {
            "filename": "/assets/games/610FC0AF79952EDE",
            "start": 11662199,
            "end": 11669130
        }, {
            "filename": "/assets/games/610FC0AF79952EDE.webp",
            "start": 11669130,
            "end": 11671021
        }, {
            "filename": "/assets/games/6138A3C42C5AF3D9",
            "start": 11671021,
            "end": 11685329
        }, {
            "filename": "/assets/games/6138A3C42C5AF3D9.webp",
            "start": 11685329,
            "end": 11689711
        }, {
            "filename": "/assets/games/613CDB39C23CBBA2",
            "start": 11689711,
            "end": 11702772
        }, {
            "filename": "/assets/games/613CDB39C23CBBA2.webp",
            "start": 11702772,
            "end": 11704398
        }, {
            "filename": "/assets/games/616369AFDF122214",
            "start": 11704398,
            "end": 11717045
        }, {
            "filename": "/assets/games/616369AFDF122214.webp",
            "start": 11717045,
            "end": 11719757
        }, {
            "filename": "/assets/games/61D15622300AB41B",
            "start": 11719757,
            "end": 11729974
        }, {
            "filename": "/assets/games/61D15622300AB41B.webp",
            "start": 11729974,
            "end": 11735323
        }, {
            "filename": "/assets/games/menu",
            "start": 11735323,
            "end": 11740918
        }, {
            "filename": "/assets/sounds/125404_clang.wav",
            "start": 11740918,
            "end": 11753990,
            "audio": 1
        }, {
            "filename": "/assets/sounds/146721_ui_beep.wav",
            "start": 11753990,
            "end": 11758492,
            "audio": 1
        }, {
            "filename": "/assets/sounds/188204_scrape.wav",
            "start": 11758492,
            "end": 11790528,
            "audio": 1
        }, {
            "filename": "/assets/sounds/194795_ui_button.wav",
            "start": 11790528,
            "end": 11792630,
            "audio": 1
        }, {
            "filename": "/assets/sounds/240566_screenshot_done.wav",
            "start": 11792630,
            "end": 11796784,
            "audio": 1
        }, {
            "filename": "/assets/sounds/249929_splash1.wav",
            "start": 11796784,
            "end": 11808488,
            "audio": 1
        }, {
            "filename": "/assets/sounds/257357_button.wav",
            "start": 11808488,
            "end": 11809852,
            "audio": 1
        }, {
            "filename": "/assets/sounds/315935_bang.wav",
            "start": 11809852,
            "end": 11862362,
            "audio": 1
        }, {
            "filename": "/assets/sounds/319154_block_close.wav",
            "start": 11862362,
            "end": 11883104,
            "audio": 1
        }, {
            "filename": "/assets/sounds/319154_block_open.wav",
            "start": 11883104,
            "end": 11892626,
            "audio": 1
        }, {
            "filename": "/assets/sounds/328991_block_create.wav",
            "start": 11892626,
            "end": 11897290,
            "audio": 1
        }, {
            "filename": "/assets/sounds/328991_block_select.wav",
            "start": 11897290,
            "end": 11898764,
            "audio": 1
        }, {
            "filename": "/assets/sounds/328991_block_trash.wav",
            "start": 11898764,
            "end": 11910900,
            "audio": 1
        }, {
            "filename": "/assets/sounds/352519_disk_eject.wav",
            "start": 11910900,
            "end": 11948184,
            "audio": 1
        }, {
            "filename": "/assets/sounds/352519_disk_insert.wav",
            "start": 11948184,
            "end": 11971476,
            "audio": 1
        }, {
            "filename": "/assets/sounds/363090_coin.wav",
            "start": 11971476,
            "end": 11976234,
            "audio": 1
        }, {
            "filename": "/assets/sounds/36837_engine_no_click.wav",
            "start": 11976234,
            "end": 11988272,
            "audio": 1
        }, {
            "filename": "/assets/sounds/378355_ball.wav",
            "start": 11988272,
            "end": 11996438,
            "audio": 1
        }, {
            "filename": "/assets/sounds/399095_jump.wav",
            "start": 11996438,
            "end": 12001816,
            "audio": 1
        }, {
            "filename": "/assets/sounds/401801_key1.wav",
            "start": 12001816,
            "end": 12007268,
            "audio": 1
        }, {
            "filename": "/assets/sounds/401801_key2.wav",
            "start": 12007268,
            "end": 12009546,
            "audio": 1
        }, {
            "filename": "/assets/sounds/401801_tick.wav",
            "start": 12009546,
            "end": 12011226,
            "audio": 1
        }, {
            "filename": "/assets/sounds/411911_chirp.wav",
            "start": 12011226,
            "end": 12020098,
            "audio": 1
        }, {
            "filename": "/assets/sounds/521481_camera.wav",
            "start": 12020098,
            "end": 12035530,
            "audio": 1
        }, {
            "filename": "/assets/sounds/78937_squeek.wav",
            "start": 12035530,
            "end": 12045640,
            "audio": 1
        }, {
            "filename": "/assets/sounds/camera4.wav",
            "start": 12045640,
            "end": 12049750,
            "audio": 1
        }, {
            "filename": "/assets/sounds/camera8.wav",
            "start": 12049750,
            "end": 12056050,
            "audio": 1
        }, {
            "filename": "/assets/sounds/chaching.wav",
            "start": 12056050,
            "end": 12105330,
            "audio": 1
        }, {
            "filename": "/assets/sounds/coin02_band.wav",
            "start": 12105330,
            "end": 12117314,
            "audio": 1
        }, {
            "filename": "/assets/sounds/error1.wav",
            "start": 12117314,
            "end": 12138574,
            "audio": 1
        }, {
            "filename": "/assets/sounds/floor6.wav",
            "start": 12138574,
            "end": 12169598,
            "audio": 1
        }, {
            "filename": "/assets/sounds/iowa_marimba_yarn_c4.wav",
            "start": 12169598,
            "end": 12282974,
            "audio": 1
        }, {
            "filename": "/assets/sounds/iowa_piano_ff_c6.wav",
            "start": 12282974,
            "end": 12527538,
            "audio": 1
        }, {
            "filename": "/assets/sounds/khz1_pipey_c3.wav",
            "start": 12527538,
            "end": 12660686,
            "audio": 1
        }, {
            "filename": "/assets/sounds/music1.wav",
            "start": 12660686,
            "end": 13748730,
            "audio": 1
        }, {
            "filename": "/assets/sounds/music2.wav",
            "start": 13748730,
            "end": 14815618,
            "audio": 1
        }, {
            "filename": "/assets/sounds/music3.wav",
            "start": 14815618,
            "end": 15525848,
            "audio": 1
        }, {
            "filename": "/assets/sounds/music4.wav",
            "start": 15525848,
            "end": 16307410,
            "audio": 1
        }, {
            "filename": "/assets/sounds/music5.wav",
            "start": 16307410,
            "end": 17017640,
            "audio": 1
        }, {
            "filename": "/assets/sounds/music6.wav",
            "start": 17017640,
            "end": 17727870,
            "audio": 1
        }, {
            "filename": "/assets/sounds/music7.wav",
            "start": 17727870,
            "end": 18937422,
            "audio": 1
        }, {
            "filename": "/assets/sounds/snus_close.wav",
            "start": 18937422,
            "end": 18959966,
            "audio": 1
        }, {
            "filename": "/assets/sounds/snus_open.wav",
            "start": 18959966,
            "end": 18973384,
            "audio": 1
        }, {
            "filename": "/assets/sounds/thumbstick5_01.wav",
            "start": 18973384,
            "end": 18978242,
            "audio": 1
        }, {
            "filename": "/assets/sounds/win.wav",
            "start": 18978242,
            "end": 19049206,
            "audio": 1
        }, {
            "filename": "/assets/views/baloo2.woff",
            "start": 19049206,
            "end": 19073278
        }, {
            "filename": "/assets/views/block_settings.html",
            "start": 19073278,
            "end": 19075267
        }, {
            "filename": "/assets/views/common.css",
            "start": 19075267,
            "end": 19080540
        }, {
            "filename": "/assets/views/common.js",
            "start": 19080540,
            "end": 19088211
        }, {
            "filename": "/assets/views/confirm_deletion.html",
            "start": 19088211,
            "end": 19090502
        }, {
            "filename": "/assets/views/create_user.html",
            "start": 19090502,
            "end": 19092660
        }, {
            "filename": "/assets/views/editor_script.html",
            "start": 19092660,
            "end": 19100670
        }, {
            "filename": "/assets/views/editor_script_blockly.html",
            "start": 19100670,
            "end": 19113096
        }, {
            "filename": "/assets/views/game_moderation.html",
            "start": 19113096,
            "end": 19117610
        }, {
            "filename": "/assets/views/messagebox.html",
            "start": 19117610,
            "end": 19119649
        }, {
            "filename": "/assets/views/select_level.html",
            "start": 19119649,
            "end": 19131950
        }, {
            "filename": "/assets/views/show_hint.html",
            "start": 19131950,
            "end": 19133392
        }, {
            "filename": "/assets/views/sign_in.html",
            "start": 19133392,
            "end": 19135793
        }],
        "remote_package_size": 19135793
    })
})();
var moduleOverrides = Object.assign({}, Module);
var arguments_ = [];
var thisProgram = "./this.program";
var quit_ = (status, toThrow) => {
    throw toThrow
};
var ENVIRONMENT_IS_WEB = typeof window == "object";
var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
var scriptDirectory = "";

function locateFile(path) {
    if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory)
    }
    return scriptDirectory + path
}
var read_, readAsync, readBinary;
if (ENVIRONMENT_IS_NODE) {
    var fs = require("fs");
    var nodePath = require("path");
    if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = nodePath.dirname(scriptDirectory) + "/"
    } else {
        scriptDirectory = __dirname + "/"
    }
    read_ = (filename, binary) => {
        filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
        return fs.readFileSync(filename, binary ? undefined : "utf8")
    };
    readBinary = filename => {
        var ret = read_(filename, true);
        if (!ret.buffer) {
            ret = new Uint8Array(ret)
        }
        return ret
    };
    readAsync = (filename, onload, onerror, binary = true) => {
        filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
        fs.readFile(filename, binary ? undefined : "utf8", (err, data) => {
            if (err) onerror(err);
            else onload(binary ? data.buffer : data)
        })
    };
    if (!Module["thisProgram"] && process.argv.length > 1) {
        thisProgram = process.argv[1].replace(/\\/g, "/")
    }
    arguments_ = process.argv.slice(2);
    if (typeof module != "undefined") {
        module["exports"] = Module
    }
    process.on("uncaughtException", ex => {
        if (ex !== "unwind" && !(ex instanceof ExitStatus) && !(ex.context instanceof ExitStatus)) {
            throw ex
        }
    });
    quit_ = (status, toThrow) => {
        process.exitCode = status;
        throw toThrow
    };
    Module["inspect"] = () => "[Emscripten Module object]"
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href
    } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src
    }
    if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1)
    } else {
        scriptDirectory = ""
    } {
        read_ = url => {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, false);
            xhr.send(null);
            return xhr.responseText
        };
        if (ENVIRONMENT_IS_WORKER) {
            readBinary = url => {
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response)
            }
        }
        readAsync = (url, onload, onerror) => {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                    onload(xhr.response);
                    return
                }
                onerror()
            };
            xhr.onerror = onerror;
            xhr.send(null)
        }
    }
} else {}
var out = Module["print"] || console.log.bind(console);
var err = Module["printErr"] || console.error.bind(console);
Object.assign(Module, moduleOverrides);
moduleOverrides = null;
if (Module["arguments"]) arguments_ = Module["arguments"];
if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
if (Module["quit"]) quit_ = Module["quit"];
var wasmBinary;
if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
if (typeof WebAssembly != "object") {
    abort("no native wasm support detected")
}
var wasmMemory;
var ABORT = false;
var EXITSTATUS;

function assert(condition, text) {
    if (!condition) {
        abort(text)
    }
}
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateMemoryViews() {
    var b = wasmMemory.buffer;
    Module["HEAP8"] = HEAP8 = new Int8Array(b);
    Module["HEAP16"] = HEAP16 = new Int16Array(b);
    Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
    Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
    Module["HEAP32"] = HEAP32 = new Int32Array(b);
    Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
    Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
    Module["HEAPF64"] = HEAPF64 = new Float64Array(b)
}
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATMAIN__ = [];
var __ATEXIT__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;

function preRun() {
    if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
            addOnPreRun(Module["preRun"].shift())
        }
    }
    callRuntimeCallbacks(__ATPRERUN__)
}

function initRuntime() {
    runtimeInitialized = true;
    if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
    FS.ignorePermissions = false;
    TTY.init();
    callRuntimeCallbacks(__ATINIT__)
}

function preMain() {
    callRuntimeCallbacks(__ATMAIN__)
}

function postRun() {
    if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
            addOnPostRun(Module["postRun"].shift())
        }
    }
    callRuntimeCallbacks(__ATPOSTRUN__)
}

function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb)
}

function addOnInit(cb) {
    __ATINIT__.unshift(cb)
}

function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb)
}
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;

function getUniqueRunDependency(id) {
    return id
}

function addRunDependency(id) {
    runDependencies++;
    if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
    }
}

function removeRunDependency(id) {
    runDependencies--;
    if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
    }
    if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null
        }
        if (dependenciesFulfilled) {
            var callback = dependenciesFulfilled;
            dependenciesFulfilled = null;
            callback()
        }
    }
}

function abort(what) {
    if (Module["onAbort"]) {
        Module["onAbort"](what)
    }
    what = "Aborted(" + what + ")";
    err(what);
    ABORT = true;
    EXITSTATUS = 1;
    what += ". Build with -sASSERTIONS for more info.";
    var e = new WebAssembly.RuntimeError(what);
    throw e
}
var dataURIPrefix = "data:application/octet-stream;base64,";
var isDataURI = filename => filename.startsWith(dataURIPrefix);
var isFileURI = filename => filename.startsWith("file://");
var wasmBinaryFile;
wasmBinaryFile = "index.wasm";
if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile)
}

function getBinarySync(file) {
    if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary)
    }
    if (readBinary) {
        return readBinary(file)
    }
    throw "both async and sync fetching of the wasm failed"
}

function getBinaryPromise(binaryFile) {
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch == "function" && !isFileURI(binaryFile)) {
            return fetch(binaryFile, {
                credentials: "same-origin"
            }).then(response => {
                if (!response["ok"]) {
                    throw "failed to load wasm binary file at '" + binaryFile + "'"
                }
                return response["arrayBuffer"]()
            }).catch(() => getBinarySync(binaryFile))
        } else if (readAsync) {
            return new Promise((resolve, reject) => {
                readAsync(binaryFile, response => resolve(new Uint8Array(response)), reject)
            })
        }
    }
    return Promise.resolve().then(() => getBinarySync(binaryFile))
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
    return getBinaryPromise(binaryFile).then(binary => WebAssembly.instantiate(binary, imports)).then(instance => instance).then(receiver, reason => {
        err(`failed to asynchronously prepare wasm: ${reason}`);
        abort(reason)
    })
}

function instantiateAsync(binary, binaryFile, imports, callback) {
    if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
        return fetch(binaryFile, {
            credentials: "same-origin"
        }).then(response => {
            var result = WebAssembly.instantiateStreaming(response, imports);
            return result.then(callback, function(reason) {
                err(`wasm streaming compile failed: ${reason}`);
                err("falling back to ArrayBuffer instantiation");
                return instantiateArrayBuffer(binaryFile, imports, callback)
            })
        })
    }
    return instantiateArrayBuffer(binaryFile, imports, callback)
}

function createWasm() {
    var info = {
        "a": wasmImports
    };

    function receiveInstance(instance, module) {
        wasmExports = instance.exports;
        wasmMemory = wasmExports["qb"];
        updateMemoryViews();
        wasmTable = wasmExports["Eb"];
        addOnInit(wasmExports["rb"]);
        removeRunDependency("wasm-instantiate");
        return wasmExports
    }
    addRunDependency("wasm-instantiate");

    function receiveInstantiationResult(result) {
        receiveInstance(result["instance"])
    }
    if (Module["instantiateWasm"]) {
        try {
            return Module["instantiateWasm"](info, receiveInstance)
        } catch (e) {
            err(`Module.instantiateWasm callback failed with error: ${e}`);
            return false
        }
    }
    instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult);
    return {}
}
var tempDouble;
var tempI64;
var ASM_CONSTS = {
    605784: $0 => {
        downloadFileInBrowser(UTF8ToString($0))
    },
    605826: () => {
        hideOverlayGradient()
    },
    605851: $0 => {
        setDeepLinkLoadingFraction($0)
    },
    605884: ($0, $1, $2) => {
        fetchUrl(UTF8ToString($0), $1, $2)
    },
    605921: $0 => {
        webViewOpen(UTF8ToString($0))
    },
    605954: () => {
        webViewClose()
    },
    605972: $0 => {
        webViewExecuteJS(UTF8ToString($0))
    },
    606010: () => {
        adInit()
    },
    606024: () => {
        adInterstitialShow()
    },
    606050: () => {
        adRewardedShow()
    },
    606072: ($0, $1) => {
        Audio.init($0, $1)
    },
    606096: () => {
        Audio.deinit()
    },
    606116: () => {
        Audio.pause()
    },
    606135: () => {
        Audio.resume()
    },
    606155: () => {
        hideOverlayGradient()
    },
    606180: () => {
        if (fsSyncStatus === "to") return;
        fsSyncStatus = "to";
        FS.syncfs(false, function(err) {
            if (err) {
                simpleLogC("syncfs error " + err)
            }
            fsSyncStatus = ""
        })
    },
    606341: () => {
        if (fsSyncStatus === "from") return;
        fsSyncStatus = "from";
        FS.syncfs(true, function(err) {
            if (err) {
                simpleLogC("syncfs error " + err)
            }
            fsSyncStatus = ""
        })
    },
    606505: () => {
        pokiEnsureStop()
    },
    606527: () => {
        pokiEnsureStart()
    },
    606550: () => {
        firebaseInit()
    },
    606568: () => {
        firebaseDeinit()
    },
    606588: () => {
        firebasePause()
    },
    606607: () => {
        firebaseResume()
    },
    606627: () => {
        firebaseSigninAnonymous()
    },
    606656: $0 => {
        firebaseSendPasswordResetEmail(UTF8ToString($0))
    },
    606708: ($0, $1) => {
        firebaseSignIn(UTF8ToString($0), UTF8ToString($1))
    },
    606762: ($0, $1) => {
        firebaseLinkUser(UTF8ToString($0), UTF8ToString($1))
    },
    606818: ($0, $1, $2) => {
        firebaseMerge(UTF8ToString($0), UTF8ToString($1), $2)
    },
    606875: ($0, $1) => {
        firebaseDeleteCurrentUser(UTF8ToString($0), UTF8ToString($1))
    },
    606940: () => {
        firebaseSignout()
    },
    606961: () => firebaseSignedInEmail(),
    606995: () => firebaseGetUid(),
    607022: () => firebaseUserIsAnonymous(),
    607058: ($0, $1) => {
        firebaseWriteNick(UTF8ToString($0), UTF8ToString($1))
    },
    607115: $0 => {
        firebaseWriteGems($0)
    },
    607140: () => {
        firebaseReadGems()
    },
    607162: ($0, $1, $2, $3) => {
        firebaseQueryGames($0, UTF8ToString($1), $2, $3)
    },
    607214: ($0, $1, $2) => {
        firebaseWriteBuys(UTF8ToString($0), UTF8ToString($1), $2)
    },
    607275: $0 => {
        writeDailyReward($0)
    },
    607299: $0 => {
        writeDailyStreakReward($0)
    },
    607329: ($0, $1, $2, $3) => {
        firebaseUpdateScores(UTF8ToString($0), $1, $2, $3)
    },
    607383: ($0, $1, $2) => {
        firebaseReadCounts($0, UTF8ToString($1), $2)
    },
    607431: ($0, $1) => {
        firebaseReadLedger($0, UTF8ToString($1))
    },
    607475: ($0, $1, $2, $3) => {
        firebaseWriteLedger(UTF8ToString($0), UTF8ToString($1), $2, $3)
    },
    607542: ($0, $1, $2) => {
        firebaseDownload(UTF8ToString($0), UTF8ToString($1), UTF8ToString($2))
    },
    607616: ($0, $1, $2, $3, $4, $5, $6) => {
        firebaseUpload(UTF8ToString($0), UTF8ToString($1), UTF8ToString($2), UTF8ToString($3), UTF8ToString($4), $5, UTF8ToString($6))
    },
    607746: $0 => {
        firebaseSyncUpload(UTF8ToString($0))
    },
    607786: $0 => {
        firebaseSyncDownload(UTF8ToString($0))
    },
    607828: ($0, $1) => {
        firebaseSendBugReport(UTF8ToString($0), UTF8ToString($1))
    },
    607889: ($0, $1) => {
        firebaseAnalyticsParam(UTF8ToString($0), UTF8ToString($1))
    },
    607953: ($0, $1) => {
        firebaseAnalyticsParam(UTF8ToString($0), $1)
    },
    608003: ($0, $1) => {
        firebaseAnalyticsParam(UTF8ToString($0), $1)
    },
    608053: $0 => {
        firebaseAnalyticsEvent(UTF8ToString($0))
    },
    608099: $0 => {
        firebaseAnalytics.setUserProperties({
            "first_launch": UTF8ToString($0)
        })
    },
    608176: () => {
        firebaseRemoteConfigFetch()
    },
    608209: $0 => {
        downloadFileInBrowser(UTF8ToString($0))
    },
    608251: ($0, $1, $2) => {
        showShareFileModal(UTF8ToString($0), UTF8ToString($1), UTF8ToString($2))
    },
    608326: $0 => {
        window.open(UTF8ToString($0), "_blank")
    },
    608371: () => {
        location.reload()
    },
    608394: ($0, $1, $2, $3) => {
        showStoreLinkModal(UTF8ToString($0), $1, $2, $3)
    },
    608446: $0 => {
        try {
            window.parent.postMessage({
                type: "levelsCompletionData",
                data: UTF8ToString($0)
            }, "*")
        } catch {}
    },
    608553: () => {
        FS.mkdir("/sandbox");
        FS.mount(IDBFS, {}, "/sandbox");
        FS.syncfs(true, function(err) {
            if (err) {
                simpleLogC("syncfs error " + err)
            }
            ccall("app_init", "v")
        })
    },
    608721: () => document.getElementById("canvas").width,
    608771: () => document.getElementById("canvas").height
};

function is_daily_reward_possible() {
    return dailyRewardPossible
}

function is_latest_browser_tab() {
    try {
        return localStorage["startup-time"] == startupTimeStr
    } catch (err) {
        return true
    }
}

function set_latest_browser_tab() {
    startupTimeStr = Date.now().toString();
    try {
        localStorage["startup-time"] = startupTimeStr
    } catch (err) {}
}

function get_device_pixel_ratio() {
    return window.devicePixelRatio
}

function get_single_game_link_guid() {
    return getGameGuidArgument()
}

function get_hostname() {
    return getHostname()
}

function get_url_level_index() {
    return getUrlLevelIndex()
}

function get_start_in_edit_mode() {
    return getStartInEditMode()
}

function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = `Program terminated with exit(${status})`;
    this.status = status
}
var callRuntimeCallbacks = callbacks => {
    while (callbacks.length > 0) {
        callbacks.shift()(Module)
    }
};

function getValue(ptr, type = "i8") {
    if (type.endsWith("*")) type = "*";
    switch (type) {
        case "i1":
            return HEAP8[ptr >> 0];
        case "i8":
            return HEAP8[ptr >> 0];
        case "i16":
            return HEAP16[ptr >> 1];
        case "i32":
            return HEAP32[ptr >> 2];
        case "i64":
            abort("to do getValue(i64) use WASM_BIGINT");
        case "float":
            return HEAPF32[ptr >> 2];
        case "double":
            return HEAPF64[ptr >> 3];
        case "*":
            return HEAPU32[ptr >> 2];
        default:
            abort(`invalid type for getValue: ${type}`)
    }
}
var noExitRuntime = Module["noExitRuntime"] || true;
var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx;
    while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr))
    }
    var str = "";
    while (idx < endPtr) {
        var u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2
        } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63
        }
        if (u0 < 65536) {
            str += String.fromCharCode(u0)
        } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
        }
    }
    return str
};
var UTF8ToString = (ptr, maxBytesToRead) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
var ___assert_fail = (condition, filename, line, func) => {
    abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"])
};
var PATH = {
    isAbs: path => path.charAt(0) === "/",
    splitPath: filename => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1)
    },
    normalizeArray: (parts, allowAboveRoot) => {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === ".") {
                parts.splice(i, 1)
            } else if (last === "..") {
                parts.splice(i, 1);
                up++
            } else if (up) {
                parts.splice(i, 1);
                up--
            }
        }
        if (allowAboveRoot) {
            for (; up; up--) {
                parts.unshift("..")
            }
        }
        return parts
    },
    normalize: path => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
        if (!path && !isAbsolute) {
            path = "."
        }
        if (path && trailingSlash) {
            path += "/"
        }
        return (isAbsolute ? "/" : "") + path
    },
    dirname: path => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
            return "."
        }
        if (dir) {
            dir = dir.substr(0, dir.length - 1)
        }
        return root + dir
    },
    basename: path => {
        if (path === "/") return "/";
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1) return path;
        return path.substr(lastSlash + 1)
    },
    join: function() {
        var paths = Array.prototype.slice.call(arguments);
        return PATH.normalize(paths.join("/"))
    },
    join2: (l, r) => PATH.normalize(l + "/" + r)
};
var initRandomFill = () => {
    if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
        return view => crypto.getRandomValues(view)
    } else if (ENVIRONMENT_IS_NODE) {
        try {
            var crypto_module = require("crypto");
            var randomFillSync = crypto_module["randomFillSync"];
            if (randomFillSync) {
                return view => crypto_module["randomFillSync"](view)
            }
            var randomBytes = crypto_module["randomBytes"];
            return view => (view.set(randomBytes(view.byteLength)), view)
        } catch (e) {}
    }
    abort("initRandomDevice")
};
var randomFill = view => (randomFill = initRandomFill())(view);
var PATH_FS = {
    resolve: function() {
        var resolvedPath = "",
            resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = i >= 0 ? arguments[i] : FS.cwd();
            if (typeof path != "string") {
                throw new TypeError("Arguments to path.resolve must be strings")
            } else if (!path) {
                return ""
            }
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = PATH.isAbs(path)
        }
        resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
        return (resolvedAbsolute ? "/" : "") + resolvedPath || "."
    },
    relative: (from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);

        function trim(arr) {
            var start = 0;
            for (; start < arr.length; start++) {
                if (arr[start] !== "") break
            }
            var end = arr.length - 1;
            for (; end >= 0; end--) {
                if (arr[end] !== "") break
            }
            if (start > end) return [];
            return arr.slice(start, end - start + 1)
        }
        var fromParts = trim(from.split("/"));
        var toParts = trim(to.split("/"));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break
            }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push("..")
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join("/")
    }
};
var FS_stdin_getChar_buffer = [];
var lengthBytesUTF8 = str => {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i);
        if (c <= 127) {
            len++
        } else if (c <= 2047) {
            len += 2
        } else if (c >= 55296 && c <= 57343) {
            len += 4;
            ++i
        } else {
            len += 3
        }
    }
    return len
};
var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
    if (!(maxBytesToWrite > 0)) return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;
    for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
            var u1 = str.charCodeAt(++i);
            u = 65536 + ((u & 1023) << 10) | u1 & 1023
        }
        if (u <= 127) {
            if (outIdx >= endIdx) break;
            heap[outIdx++] = u
        } else if (u <= 2047) {
            if (outIdx + 1 >= endIdx) break;
            heap[outIdx++] = 192 | u >> 6;
            heap[outIdx++] = 128 | u & 63
        } else if (u <= 65535) {
            if (outIdx + 2 >= endIdx) break;
            heap[outIdx++] = 224 | u >> 12;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63
        } else {
            if (outIdx + 3 >= endIdx) break;
            heap[outIdx++] = 240 | u >> 18;
            heap[outIdx++] = 128 | u >> 12 & 63;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63
        }
    }
    heap[outIdx] = 0;
    return outIdx - startIdx
};

function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array
}
var FS_stdin_getChar = () => {
    if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (ENVIRONMENT_IS_NODE) {
            var BUFSIZE = 256;
            var buf = Buffer.alloc(BUFSIZE);
            var bytesRead = 0;
            var fd = process.stdin.fd;
            try {
                bytesRead = fs.readSync(fd, buf)
            } catch (e) {
                if (e.toString().includes("EOF")) bytesRead = 0;
                else throw e
            }
            if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString("utf-8")
            } else {
                result = null
            }
        } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            result = window.prompt("Input: ");
            if (result !== null) {
                result += "\n"
            }
        } else if (typeof readline == "function") {
            result = readline();
            if (result !== null) {
                result += "\n"
            }
        }
        if (!result) {
            return null
        }
        FS_stdin_getChar_buffer = intArrayFromString(result, true)
    }
    return FS_stdin_getChar_buffer.shift()
};
var TTY = {
    ttys: [],
    init() {},
    shutdown() {},
    register(dev, ops) {
        TTY.ttys[dev] = {
            input: [],
            output: [],
            ops: ops
        };
        FS.registerDevice(dev, TTY.stream_ops)
    },
    stream_ops: {
        open(stream) {
            var tty = TTY.ttys[stream.node.rdev];
            if (!tty) {
                throw new FS.ErrnoError(43)
            }
            stream.tty = tty;
            stream.seekable = false
        },
        close(stream) {
            stream.tty.ops.fsync(stream.tty)
        },
        fsync(stream) {
            stream.tty.ops.fsync(stream.tty)
        },
        read(stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.get_char) {
                throw new FS.ErrnoError(60)
            }
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
                var result;
                try {
                    result = stream.tty.ops.get_char(stream.tty)
                } catch (e) {
                    throw new FS.ErrnoError(29)
                }
                if (result === undefined && bytesRead === 0) {
                    throw new FS.ErrnoError(6)
                }
                if (result === null || result === undefined) break;
                bytesRead++;
                buffer[offset + i] = result
            }
            if (bytesRead) {
                stream.node.timestamp = Date.now()
            }
            return bytesRead
        },
        write(stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.put_char) {
                throw new FS.ErrnoError(60)
            }
            try {
                for (var i = 0; i < length; i++) {
                    stream.tty.ops.put_char(stream.tty, buffer[offset + i])
                }
            } catch (e) {
                throw new FS.ErrnoError(29)
            }
            if (length) {
                stream.node.timestamp = Date.now()
            }
            return i
        }
    },
    default_tty_ops: {
        get_char(tty) {
            return FS_stdin_getChar()
        },
        put_char(tty, val) {
            if (val === null || val === 10) {
                out(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            } else {
                if (val != 0) tty.output.push(val)
            }
        },
        fsync(tty) {
            if (tty.output && tty.output.length > 0) {
                out(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            }
        },
        ioctl_tcgets(tty) {
            return {
                c_iflag: 25856,
                c_oflag: 5,
                c_cflag: 191,
                c_lflag: 35387,
                c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        },
        ioctl_tcsets(tty, optional_actions, data) {
            return 0
        },
        ioctl_tiocgwinsz(tty) {
            return [24, 80]
        }
    },
    default_tty1_ops: {
        put_char(tty, val) {
            if (val === null || val === 10) {
                err(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            } else {
                if (val != 0) tty.output.push(val)
            }
        },
        fsync(tty) {
            if (tty.output && tty.output.length > 0) {
                err(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            }
        }
    }
};
var mmapAlloc = size => {
    abort()
};
var MEMFS = {
    ops_table: null,
    mount(mount) {
        return MEMFS.createNode(null, "/", 16384 | 511, 0)
    },
    createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            throw new FS.ErrnoError(63)
        }
        if (!MEMFS.ops_table) {
            MEMFS.ops_table = {
                dir: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr,
                        lookup: MEMFS.node_ops.lookup,
                        mknod: MEMFS.node_ops.mknod,
                        rename: MEMFS.node_ops.rename,
                        unlink: MEMFS.node_ops.unlink,
                        rmdir: MEMFS.node_ops.rmdir,
                        readdir: MEMFS.node_ops.readdir,
                        symlink: MEMFS.node_ops.symlink
                    },
                    stream: {
                        llseek: MEMFS.stream_ops.llseek
                    }
                },
                file: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr
                    },
                    stream: {
                        llseek: MEMFS.stream_ops.llseek,
                        read: MEMFS.stream_ops.read,
                        write: MEMFS.stream_ops.write,
                        allocate: MEMFS.stream_ops.allocate,
                        mmap: MEMFS.stream_ops.mmap,
                        msync: MEMFS.stream_ops.msync
                    }
                },
                link: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr,
                        readlink: MEMFS.node_ops.readlink
                    },
                    stream: {}
                },
                chrdev: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr
                    },
                    stream: FS.chrdev_stream_ops
                }
            }
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
            node.node_ops = MEMFS.ops_table.dir.node;
            node.stream_ops = MEMFS.ops_table.dir.stream;
            node.contents = {}
        } else if (FS.isFile(node.mode)) {
            node.node_ops = MEMFS.ops_table.file.node;
            node.stream_ops = MEMFS.ops_table.file.stream;
            node.usedBytes = 0;
            node.contents = null
        } else if (FS.isLink(node.mode)) {
            node.node_ops = MEMFS.ops_table.link.node;
            node.stream_ops = MEMFS.ops_table.link.stream
        } else if (FS.isChrdev(node.mode)) {
            node.node_ops = MEMFS.ops_table.chrdev.node;
            node.stream_ops = MEMFS.ops_table.chrdev.stream
        }
        node.timestamp = Date.now();
        if (parent) {
            parent.contents[name] = node;
            parent.timestamp = node.timestamp
        }
        return node
    },
    getFileDataAsTypedArray(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents)
    },
    expandFileStorage(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return;
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0)
    },
    resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
            node.contents = null;
            node.usedBytes = 0
        } else {
            var oldContents = node.contents;
            node.contents = new Uint8Array(newSize);
            if (oldContents) {
                node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)))
            }
            node.usedBytes = newSize
        }
    },
    node_ops: {
        getattr(node) {
            var attr = {};
            attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
            attr.ino = node.id;
            attr.mode = node.mode;
            attr.nlink = 1;
            attr.uid = 0;
            attr.gid = 0;
            attr.rdev = node.rdev;
            if (FS.isDir(node.mode)) {
                attr.size = 4096
            } else if (FS.isFile(node.mode)) {
                attr.size = node.usedBytes
            } else if (FS.isLink(node.mode)) {
                attr.size = node.link.length
            } else {
                attr.size = 0
            }
            attr.atime = new Date(node.timestamp);
            attr.mtime = new Date(node.timestamp);
            attr.ctime = new Date(node.timestamp);
            attr.blksize = 4096;
            attr.blocks = Math.ceil(attr.size / attr.blksize);
            return attr
        },
        setattr(node, attr) {
            if (attr.mode !== undefined) {
                node.mode = attr.mode
            }
            if (attr.timestamp !== undefined) {
                node.timestamp = attr.timestamp
            }
            if (attr.size !== undefined) {
                MEMFS.resizeFileStorage(node, attr.size)
            }
        },
        lookup(parent, name) {
            throw FS.genericErrors[44]
        },
        mknod(parent, name, mode, dev) {
            return MEMFS.createNode(parent, name, mode, dev)
        },
        rename(old_node, new_dir, new_name) {
            if (FS.isDir(old_node.mode)) {
                var new_node;
                try {
                    new_node = FS.lookupNode(new_dir, new_name)
                } catch (e) {}
                if (new_node) {
                    for (var i in new_node.contents) {
                        throw new FS.ErrnoError(55)
                    }
                }
            }
            delete old_node.parent.contents[old_node.name];
            old_node.parent.timestamp = Date.now();
            old_node.name = new_name;
            new_dir.contents[new_name] = old_node;
            new_dir.timestamp = old_node.parent.timestamp;
            old_node.parent = new_dir
        },
        unlink(parent, name) {
            delete parent.contents[name];
            parent.timestamp = Date.now()
        },
        rmdir(parent, name) {
            var node = FS.lookupNode(parent, name);
            for (var i in node.contents) {
                throw new FS.ErrnoError(55)
            }
            delete parent.contents[name];
            parent.timestamp = Date.now()
        },
        readdir(node) {
            var entries = [".", ".."];
            for (var key in node.contents) {
                if (!node.contents.hasOwnProperty(key)) {
                    continue
                }
                entries.push(key)
            }
            return entries
        },
        symlink(parent, newname, oldpath) {
            var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
            node.link = oldpath;
            return node
        },
        readlink(node) {
            if (!FS.isLink(node.mode)) {
                throw new FS.ErrnoError(28)
            }
            return node.link
        }
    },
    stream_ops: {
        read(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= stream.node.usedBytes) return 0;
            var size = Math.min(stream.node.usedBytes - position, length);
            if (size > 8 && contents.subarray) {
                buffer.set(contents.subarray(position, position + size), offset)
            } else {
                for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i]
            }
            return size
        },
        write(stream, buffer, offset, length, position, canOwn) {
            if (buffer.buffer === HEAP8.buffer) {
                canOwn = false
            }
            if (!length) return 0;
            var node = stream.node;
            node.timestamp = Date.now();
            if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                if (canOwn) {
                    node.contents = buffer.subarray(offset, offset + length);
                    node.usedBytes = length;
                    return length
                } else if (node.usedBytes === 0 && position === 0) {
                    node.contents = buffer.slice(offset, offset + length);
                    node.usedBytes = length;
                    return length
                } else if (position + length <= node.usedBytes) {
                    node.contents.set(buffer.subarray(offset, offset + length), position);
                    return length
                }
            }
            MEMFS.expandFileStorage(node, position + length);
            if (node.contents.subarray && buffer.subarray) {
                node.contents.set(buffer.subarray(offset, offset + length), position)
            } else {
                for (var i = 0; i < length; i++) {
                    node.contents[position + i] = buffer[offset + i]
                }
            }
            node.usedBytes = Math.max(node.usedBytes, position + length);
            return length
        },
        llseek(stream, offset, whence) {
            var position = offset;
            if (whence === 1) {
                position += stream.position
            } else if (whence === 2) {
                if (FS.isFile(stream.node.mode)) {
                    position += stream.node.usedBytes
                }
            }
            if (position < 0) {
                throw new FS.ErrnoError(28)
            }
            return position
        },
        allocate(stream, offset, length) {
            MEMFS.expandFileStorage(stream.node, offset + length);
            stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length)
        },
        mmap(stream, length, position, prot, flags) {
            if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43)
            }
            var ptr;
            var allocated;
            var contents = stream.node.contents;
            if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
                allocated = false;
                ptr = contents.byteOffset
            } else {
                if (position > 0 || position + length < contents.length) {
                    if (contents.subarray) {
                        contents = contents.subarray(position, position + length)
                    } else {
                        contents = Array.prototype.slice.call(contents, position, position + length)
                    }
                }
                allocated = true;
                ptr = mmapAlloc(length);
                if (!ptr) {
                    throw new FS.ErrnoError(48)
                }
                HEAP8.set(contents, ptr)
            }
            return {
                ptr: ptr,
                allocated: allocated
            }
        },
        msync(stream, buffer, offset, length, mmapFlags) {
            MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
            return 0
        }
    }
};
var asyncLoad = (url, onload, onerror, noRunDep) => {
    var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
    readAsync(url, arrayBuffer => {
        assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep)
    }, event => {
        if (onerror) {
            onerror()
        } else {
            throw `Loading data file "${url}" failed.`
        }
    });
    if (dep) addRunDependency(dep)
};
var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
    FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn)
};
var preloadPlugins = Module["preloadPlugins"] || [];
var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
    if (typeof Browser != "undefined") Browser.init();
    var handled = false;
    preloadPlugins.forEach(plugin => {
        if (handled) return;
        if (plugin["canHandle"](fullname)) {
            plugin["handle"](byteArray, fullname, finish, onerror);
            handled = true
        }
    });
    return handled
};
var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
    var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
    var dep = getUniqueRunDependency(`cp ${fullname}`);

    function processData(byteArray) {
        function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
                FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn)
            }
            if (onload) onload();
            removeRunDependency(dep)
        }
        if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
                if (onerror) onerror();
                removeRunDependency(dep)
            })) {
            return
        }
        finish(byteArray)
    }
    addRunDependency(dep);
    if (typeof url == "string") {
        asyncLoad(url, byteArray => processData(byteArray), onerror)
    } else {
        processData(url)
    }
};
var FS_modeStringToFlags = str => {
    var flagModes = {
        "r": 0,
        "r+": 2,
        "w": 512 | 64 | 1,
        "w+": 512 | 64 | 2,
        "a": 1024 | 64 | 1,
        "a+": 1024 | 64 | 2
    };
    var flags = flagModes[str];
    if (typeof flags == "undefined") {
        throw new Error(`Unknown file open mode: ${str}`)
    }
    return flags
};
var FS_getMode = (canRead, canWrite) => {
    var mode = 0;
    if (canRead) mode |= 292 | 73;
    if (canWrite) mode |= 146;
    return mode
};
var IDBFS = {
    dbs: {},
    indexedDB: () => {
        if (typeof indexedDB != "undefined") return indexedDB;
        var ret = null;
        if (typeof window == "object") ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        assert(ret, "IDBFS used, but indexedDB not supported");
        return ret
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function(mount) {
        return MEMFS.mount.apply(null, arguments)
    },
    syncfs: (mount, populate, callback) => {
        IDBFS.getLocalSet(mount, (err, local) => {
            if (err) return callback(err);
            IDBFS.getRemoteSet(mount, (err, remote) => {
                if (err) return callback(err);
                var src = populate ? remote : local;
                var dst = populate ? local : remote;
                IDBFS.reconcile(src, dst, callback)
            })
        })
    },
    quit: () => {
        Object.values(IDBFS.dbs).forEach(value => value.close());
        IDBFS.dbs = {}
    },
    getDB: (name, callback) => {
        var db = IDBFS.dbs[name];
        if (db) {
            return callback(null, db)
        }
        var req;
        try {
            req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION)
        } catch (e) {
            return callback(e)
        }
        if (!req) {
            return callback("Unable to connect to IndexedDB")
        }
        req.onupgradeneeded = e => {
            var db = e.target.result;
            var transaction = e.target.transaction;
            var fileStore;
            if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
                fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME)
            } else {
                fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME)
            }
            if (!fileStore.indexNames.contains("timestamp")) {
                fileStore.createIndex("timestamp", "timestamp", {
                    unique: false
                })
            }
        };
        req.onsuccess = () => {
            db = req.result;
            IDBFS.dbs[name] = db;
            callback(null, db)
        };
        req.onerror = e => {
            callback(e.target.error);
            e.preventDefault()
        }
    },
    getLocalSet: (mount, callback) => {
        var entries = {};

        function isRealDir(p) {
            return p !== "." && p !== ".."
        }

        function toAbsolute(root) {
            return p => PATH.join2(root, p)
        }
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
        while (check.length) {
            var path = check.pop();
            var stat;
            try {
                stat = FS.stat(path)
            } catch (e) {
                return callback(e)
            }
            if (FS.isDir(stat.mode)) {
                check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)))
            }
            entries[path] = {
                "timestamp": stat.mtime
            }
        }
        return callback(null, {
            type: "local",
            entries: entries
        })
    },
    getRemoteSet: (mount, callback) => {
        var entries = {};
        IDBFS.getDB(mount.mountpoint, (err, db) => {
            if (err) return callback(err);
            try {
                var transaction = db.transaction([IDBFS.DB_STORE_NAME], "readonly");
                transaction.onerror = e => {
                    callback(e.target.error);
                    e.preventDefault()
                };
                var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
                var index = store.index("timestamp");
                index.openKeyCursor().onsuccess = event => {
                    var cursor = event.target.result;
                    if (!cursor) {
                        return callback(null, {
                            type: "remote",
                            db: db,
                            entries: entries
                        })
                    }
                    entries[cursor.primaryKey] = {
                        "timestamp": cursor.key
                    };
                    cursor.continue()
                }
            } catch (e) {
                return callback(e)
            }
        })
    },
    loadLocalEntry: (path, callback) => {
        var stat, node;
        try {
            var lookup = FS.lookupPath(path);
            node = lookup.node;
            stat = FS.stat(path)
        } catch (e) {
            return callback(e)
        }
        if (FS.isDir(stat.mode)) {
            return callback(null, {
                "timestamp": stat.mtime,
                "mode": stat.mode
            })
        } else if (FS.isFile(stat.mode)) {
            node.contents = MEMFS.getFileDataAsTypedArray(node);
            return callback(null, {
                "timestamp": stat.mtime,
                "mode": stat.mode,
                "contents": node.contents
            })
        } else {
            return callback(new Error("node type not supported"))
        }
    },
    storeLocalEntry: (path, entry, callback) => {
        try {
            if (FS.isDir(entry["mode"])) {
                FS.mkdirTree(path, entry["mode"])
            } else if (FS.isFile(entry["mode"])) {
                FS.writeFile(path, entry["contents"], {
                    canOwn: true
                })
            } else {
                return callback(new Error("node type not supported"))
            }
            FS.chmod(path, entry["mode"]);
            FS.utime(path, entry["timestamp"], entry["timestamp"])
        } catch (e) {
            return callback(e)
        }
        callback(null)
    },
    removeLocalEntry: (path, callback) => {
        try {
            var stat = FS.stat(path);
            if (FS.isDir(stat.mode)) {
                FS.rmdir(path)
            } else if (FS.isFile(stat.mode)) {
                FS.unlink(path)
            }
        } catch (e) {
            return callback(e)
        }
        callback(null)
    },
    loadRemoteEntry: (store, path, callback) => {
        var req = store.get(path);
        req.onsuccess = event => callback(null, event.target.result);
        req.onerror = e => {
            callback(e.target.error);
            e.preventDefault()
        }
    },
    storeRemoteEntry: (store, path, entry, callback) => {
        try {
            var req = store.put(entry, path)
        } catch (e) {
            callback(e);
            return
        }
        req.onsuccess = event => callback();
        req.onerror = e => {
            callback(e.target.error);
            e.preventDefault()
        }
    },
    removeRemoteEntry: (store, path, callback) => {
        var req = store.delete(path);
        req.onsuccess = event => callback();
        req.onerror = e => {
            callback(e.target.error);
            e.preventDefault()
        }
    },
    reconcile: (src, dst, callback) => {
        var total = 0;
        var create = [];
        Object.keys(src.entries).forEach(function(key) {
            var e = src.entries[key];
            var e2 = dst.entries[key];
            if (!e2 || e["timestamp"].getTime() != e2["timestamp"].getTime()) {
                create.push(key);
                total++
            }
        });
        var remove = [];
        Object.keys(dst.entries).forEach(function(key) {
            if (!src.entries[key]) {
                remove.push(key);
                total++
            }
        });
        if (!total) {
            return callback(null)
        }
        var errored = false;
        var db = src.type === "remote" ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], "readwrite");
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);

        function done(err) {
            if (err && !errored) {
                errored = true;
                return callback(err)
            }
        }
        transaction.onerror = e => {
            done(this.error);
            e.preventDefault()
        };
        transaction.oncomplete = e => {
            if (!errored) {
                callback(null)
            }
        };
        create.sort().forEach(path => {
            if (dst.type === "local") {
                IDBFS.loadRemoteEntry(store, path, (err, entry) => {
                    if (err) return done(err);
                    IDBFS.storeLocalEntry(path, entry, done)
                })
            } else {
                IDBFS.loadLocalEntry(path, (err, entry) => {
                    if (err) return done(err);
                    IDBFS.storeRemoteEntry(store, path, entry, done)
                })
            }
        });
        remove.sort().reverse().forEach(path => {
            if (dst.type === "local") {
                IDBFS.removeLocalEntry(path, done)
            } else {
                IDBFS.removeRemoteEntry(store, path, done)
            }
        })
    }
};
var FS = {
    root: null,
    mounts: [],
    devices: {},
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: false,
    ignorePermissions: true,
    ErrnoError: null,
    genericErrors: {},
    filesystems: null,
    syncFSRequests: 0,
    lookupPath(path, opts = {}) {
        path = PATH_FS.resolve(path);
        if (!path) return {
            path: "",
            node: null
        };
        var defaults = {
            follow_mount: true,
            recurse_count: 0
        };
        opts = Object.assign(defaults, opts);
        if (opts.recurse_count > 8) {
            throw new FS.ErrnoError(32)
        }
        var parts = path.split("/").filter(p => !!p);
        var current = FS.root;
        var current_path = "/";
        for (var i = 0; i < parts.length; i++) {
            var islast = i === parts.length - 1;
            if (islast && opts.parent) {
                break
            }
            current = FS.lookupNode(current, parts[i]);
            current_path = PATH.join2(current_path, parts[i]);
            if (FS.isMountpoint(current)) {
                if (!islast || islast && opts.follow_mount) {
                    current = current.mounted.root
                }
            }
            if (!islast || opts.follow) {
                var count = 0;
                while (FS.isLink(current.mode)) {
                    var link = FS.readlink(current_path);
                    current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                    var lookup = FS.lookupPath(current_path, {
                        recurse_count: opts.recurse_count + 1
                    });
                    current = lookup.node;
                    if (count++ > 40) {
                        throw new FS.ErrnoError(32)
                    }
                }
            }
        }
        return {
            path: current_path,
            node: current
        }
    },
    getPath(node) {
        var path;
        while (true) {
            if (FS.isRoot(node)) {
                var mount = node.mount.mountpoint;
                if (!path) return mount;
                return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path
            }
            path = path ? `${node.name}/${path}` : node.name;
            node = node.parent
        }
    },
    hashName(parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
            hash = (hash << 5) - hash + name.charCodeAt(i) | 0
        }
        return (parentid + hash >>> 0) % FS.nameTable.length
    },
    hashAddNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node
    },
    hashRemoveNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
            FS.nameTable[hash] = node.name_next
        } else {
            var current = FS.nameTable[hash];
            while (current) {
                if (current.name_next === node) {
                    current.name_next = node.name_next;
                    break
                }
                current = current.name_next
            }
        }
    },
    lookupNode(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
            throw new FS.ErrnoError(errCode, parent)
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;
            if (node.parent.id === parent.id && nodeName === name) {
                return node
            }
        }
        return FS.lookup(parent, name)
    },
    createNode(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node
    },
    destroyNode(node) {
        FS.hashRemoveNode(node)
    },
    isRoot(node) {
        return node === node.parent
    },
    isMountpoint(node) {
        return !!node.mounted
    },
    isFile(mode) {
        return (mode & 61440) === 32768
    },
    isDir(mode) {
        return (mode & 61440) === 16384
    },
    isLink(mode) {
        return (mode & 61440) === 40960
    },
    isChrdev(mode) {
        return (mode & 61440) === 8192
    },
    isBlkdev(mode) {
        return (mode & 61440) === 24576
    },
    isFIFO(mode) {
        return (mode & 61440) === 4096
    },
    isSocket(mode) {
        return (mode & 49152) === 49152
    },
    flagsToPermissionString(flag) {
        var perms = ["r", "w", "rw"][flag & 3];
        if (flag & 512) {
            perms += "w"
        }
        return perms
    },
    nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
            return 0
        }
        if (perms.includes("r") && !(node.mode & 292)) {
            return 2
        } else if (perms.includes("w") && !(node.mode & 146)) {
            return 2
        } else if (perms.includes("x") && !(node.mode & 73)) {
            return 2
        }
        return 0
    },
    mayLookup(dir) {
        var errCode = FS.nodePermissions(dir, "x");
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0
    },
    mayCreate(dir, name) {
        try {
            var node = FS.lookupNode(dir, name);
            return 20
        } catch (e) {}
        return FS.nodePermissions(dir, "wx")
    },
    mayDelete(dir, name, isdir) {
        var node;
        try {
            node = FS.lookupNode(dir, name)
        } catch (e) {
            return e.errno
        }
        var errCode = FS.nodePermissions(dir, "wx");
        if (errCode) {
            return errCode
        }
        if (isdir) {
            if (!FS.isDir(node.mode)) {
                return 54
            }
            if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                return 10
            }
        } else {
            if (FS.isDir(node.mode)) {
                return 31
            }
        }
        return 0
    },
    mayOpen(node, flags) {
        if (!node) {
            return 44
        }
        if (FS.isLink(node.mode)) {
            return 32
        } else if (FS.isDir(node.mode)) {
            if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
                return 31
            }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags))
    },
    MAX_OPEN_FDS: 4096,
    nextfd() {
        for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
            if (!FS.streams[fd]) {
                return fd
            }
        }
        throw new FS.ErrnoError(33)
    },
    getStreamChecked(fd) {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(8)
        }
        return stream
    },
    getStream: fd => FS.streams[fd],
    createStream(stream, fd = -1) {
        if (!FS.FSStream) {
            FS.FSStream = function() {
                this.shared = {}
            };
            FS.FSStream.prototype = {};
            Object.defineProperties(FS.FSStream.prototype, {
                object: {
                    get() {
                        return this.node
                    },
                    set(val) {
                        this.node = val
                    }
                },
                isRead: {
                    get() {
                        return (this.flags & 2097155) !== 1
                    }
                },
                isWrite: {
                    get() {
                        return (this.flags & 2097155) !== 0
                    }
                },
                isAppend: {
                    get() {
                        return this.flags & 1024
                    }
                },
                flags: {
                    get() {
                        return this.shared.flags
                    },
                    set(val) {
                        this.shared.flags = val
                    }
                },
                position: {
                    get() {
                        return this.shared.position
                    },
                    set(val) {
                        this.shared.position = val
                    }
                }
            })
        }
        stream = Object.assign(new FS.FSStream, stream);
        if (fd == -1) {
            fd = FS.nextfd()
        }
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream
    },
    closeStream(fd) {
        FS.streams[fd] = null
    },
    chrdev_stream_ops: {
        open(stream) {
            var device = FS.getDevice(stream.node.rdev);
            stream.stream_ops = device.stream_ops;
            if (stream.stream_ops.open) {
                stream.stream_ops.open(stream)
            }
        },
        llseek() {
            throw new FS.ErrnoError(70)
        }
    },
    major: dev => dev >> 8,
    minor: dev => dev & 255,
    makedev: (ma, mi) => ma << 8 | mi,
    registerDevice(dev, ops) {
        FS.devices[dev] = {
            stream_ops: ops
        }
    },
    getDevice: dev => FS.devices[dev],
    getMounts(mount) {
        var mounts = [];
        var check = [mount];
        while (check.length) {
            var m = check.pop();
            mounts.push(m);
            check.push.apply(check, m.mounts)
        }
        return mounts
    },
    syncfs(populate, callback) {
        if (typeof populate == "function") {
            callback = populate;
            populate = false
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
            err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;

        function doCallback(errCode) {
            FS.syncFSRequests--;
            return callback(errCode)
        }

        function done(errCode) {
            if (errCode) {
                if (!done.errored) {
                    done.errored = true;
                    return doCallback(errCode)
                }
                return
            }
            if (++completed >= mounts.length) {
                doCallback(null)
            }
        }
        mounts.forEach(mount => {
            if (!mount.type.syncfs) {
                return done(null)
            }
            mount.type.syncfs(mount, populate, done)
        })
    },
    mount(type, opts, mountpoint) {
        var root = mountpoint === "/";
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
            throw new FS.ErrnoError(10)
        } else if (!root && !pseudo) {
            var lookup = FS.lookupPath(mountpoint, {
                follow_mount: false
            });
            mountpoint = lookup.path;
            node = lookup.node;
            if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10)
            }
            if (!FS.isDir(node.mode)) {
                throw new FS.ErrnoError(54)
            }
        }
        var mount = {
            type: type,
            opts: opts,
            mountpoint: mountpoint,
            mounts: []
        };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
            FS.root = mountRoot
        } else if (node) {
            node.mounted = mount;
            if (node.mount) {
                node.mount.mounts.push(mount)
            }
        }
        return mountRoot
    },
    unmount(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, {
            follow_mount: false
        });
        if (!FS.isMountpoint(lookup.node)) {
            throw new FS.ErrnoError(28)
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach(hash => {
            var current = FS.nameTable[hash];
            while (current) {
                var next = current.name_next;
                if (mounts.includes(current.mount)) {
                    FS.destroyNode(current)
                }
                current = next
            }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1)
    },
    lookup(parent, name) {
        return parent.node_ops.lookup(parent, name)
    },
    mknod(path, mode, dev) {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === "." || name === "..") {
            throw new FS.ErrnoError(28)
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.mknod) {
            throw new FS.ErrnoError(63)
        }
        return parent.node_ops.mknod(parent, name, mode, dev)
    },
    create(path, mode) {
        mode = mode !== undefined ? mode : 438;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0)
    },
    mkdir(path, mode) {
        mode = mode !== undefined ? mode : 511;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0)
    },
    mkdirTree(path, mode) {
        var dirs = path.split("/");
        var d = "";
        for (var i = 0; i < dirs.length; ++i) {
            if (!dirs[i]) continue;
            d += "/" + dirs[i];
            try {
                FS.mkdir(d, mode)
            } catch (e) {
                if (e.errno != 20) throw e
            }
        }
    },
    mkdev(path, mode, dev) {
        if (typeof dev == "undefined") {
            dev = mode;
            mode = 438
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev)
    },
    symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
            throw new FS.ErrnoError(44)
        }
        var lookup = FS.lookupPath(newpath, {
            parent: true
        });
        var parent = lookup.node;
        if (!parent) {
            throw new FS.ErrnoError(44)
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.symlink) {
            throw new FS.ErrnoError(63)
        }
        return parent.node_ops.symlink(parent, newname, oldpath)
    },
    rename(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        lookup = FS.lookupPath(old_path, {
            parent: true
        });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, {
            parent: true
        });
        new_dir = lookup.node;
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        if (old_dir.mount !== new_dir.mount) {
            throw new FS.ErrnoError(75)
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(28)
        }
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(55)
        }
        var new_node;
        try {
            new_node = FS.lookupNode(new_dir, new_name)
        } catch (e) {}
        if (old_node === new_node) {
            return
        }
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!old_dir.node_ops.rename) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
            throw new FS.ErrnoError(10)
        }
        if (new_dir !== old_dir) {
            errCode = FS.nodePermissions(old_dir, "w");
            if (errCode) {
                throw new FS.ErrnoError(errCode)
            }
        }
        FS.hashRemoveNode(old_node);
        try {
            old_dir.node_ops.rename(old_node, new_dir, new_name)
        } catch (e) {
            throw e
        } finally {
            FS.hashAddNode(old_node)
        }
    },
    rmdir(path) {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.rmdir) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10)
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node)
    },
    readdir(path) {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
            throw new FS.ErrnoError(54)
        }
        return node.node_ops.readdir(node)
    },
    unlink(path) {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        if (!parent) {
            throw new FS.ErrnoError(44)
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.unlink) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10)
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node)
    },
    readlink(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
            throw new FS.ErrnoError(44)
        }
        if (!link.node_ops.readlink) {
            throw new FS.ErrnoError(28)
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link))
    },
    stat(path, dontFollow) {
        var lookup = FS.lookupPath(path, {
            follow: !dontFollow
        });
        var node = lookup.node;
        if (!node) {
            throw new FS.ErrnoError(44)
        }
        if (!node.node_ops.getattr) {
            throw new FS.ErrnoError(63)
        }
        return node.node_ops.getattr(node)
    },
    lstat(path) {
        return FS.stat(path, true)
    },
    chmod(path, mode, dontFollow) {
        var node;
        if (typeof path == "string") {
            var lookup = FS.lookupPath(path, {
                follow: !dontFollow
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        node.node_ops.setattr(node, {
            mode: mode & 4095 | node.mode & ~4095,
            timestamp: Date.now()
        })
    },
    lchmod(path, mode) {
        FS.chmod(path, mode, true)
    },
    fchmod(fd, mode) {
        var stream = FS.getStreamChecked(fd);
        FS.chmod(stream.node, mode)
    },
    chown(path, uid, gid, dontFollow) {
        var node;
        if (typeof path == "string") {
            var lookup = FS.lookupPath(path, {
                follow: !dontFollow
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        node.node_ops.setattr(node, {
            timestamp: Date.now()
        })
    },
    lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true)
    },
    fchown(fd, uid, gid) {
        var stream = FS.getStreamChecked(fd);
        FS.chown(stream.node, uid, gid)
    },
    truncate(path, len) {
        if (len < 0) {
            throw new FS.ErrnoError(28)
        }
        var node;
        if (typeof path == "string") {
            var lookup = FS.lookupPath(path, {
                follow: true
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isDir(node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!FS.isFile(node.mode)) {
            throw new FS.ErrnoError(28)
        }
        var errCode = FS.nodePermissions(node, "w");
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        node.node_ops.setattr(node, {
            size: len,
            timestamp: Date.now()
        })
    },
    ftruncate(fd, len) {
        var stream = FS.getStreamChecked(fd);
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(28)
        }
        FS.truncate(stream.node, len)
    },
    utime(path, atime, mtime) {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        node.node_ops.setattr(node, {
            timestamp: Math.max(atime, mtime)
        })
    },
    open(path, flags, mode) {
        if (path === "") {
            throw new FS.ErrnoError(44)
        }
        flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
        mode = typeof mode == "undefined" ? 438 : mode;
        if (flags & 64) {
            mode = mode & 4095 | 32768
        } else {
            mode = 0
        }
        var node;
        if (typeof path == "object") {
            node = path
        } else {
            path = PATH.normalize(path);
            try {
                var lookup = FS.lookupPath(path, {
                    follow: !(flags & 131072)
                });
                node = lookup.node
            } catch (e) {}
        }
        var created = false;
        if (flags & 64) {
            if (node) {
                if (flags & 128) {
                    throw new FS.ErrnoError(20)
                }
            } else {
                node = FS.mknod(path, mode, 0);
                created = true
            }
        }
        if (!node) {
            throw new FS.ErrnoError(44)
        }
        if (FS.isChrdev(node.mode)) {
            flags &= ~512
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54)
        }
        if (!created) {
            var errCode = FS.mayOpen(node, flags);
            if (errCode) {
                throw new FS.ErrnoError(errCode)
            }
        }
        if (flags & 512 && !created) {
            FS.truncate(node, 0)
        }
        flags &= ~(128 | 512 | 131072);
        var stream = FS.createStream({
            node: node,
            path: FS.getPath(node),
            flags: flags,
            seekable: true,
            position: 0,
            stream_ops: node.stream_ops,
            ungotten: [],
            error: false
        });
        if (stream.stream_ops.open) {
            stream.stream_ops.open(stream)
        }
        if (Module["logReadFiles"] && !(flags & 1)) {
            if (!FS.readFiles) FS.readFiles = {};
            if (!(path in FS.readFiles)) {
                FS.readFiles[path] = 1
            }
        }
        return stream
    },
    close(stream) {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (stream.getdents) stream.getdents = null;
        try {
            if (stream.stream_ops.close) {
                stream.stream_ops.close(stream)
            }
        } catch (e) {
            throw e
        } finally {
            FS.closeStream(stream.fd)
        }
        stream.fd = null
    },
    isClosed(stream) {
        return stream.fd === null
    },
    llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS.ErrnoError(70)
        }
        if (whence != 0 && whence != 1 && whence != 2) {
            throw new FS.ErrnoError(28)
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position
    },
    read(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28)
        }
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(8)
        }
        if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!stream.stream_ops.read) {
            throw new FS.ErrnoError(28)
        }
        var seeking = typeof position != "undefined";
        if (!seeking) {
            position = stream.position
        } else if (!stream.seekable) {
            throw new FS.ErrnoError(70)
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead
    },
    write(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28)
        }
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8)
        }
        if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!stream.stream_ops.write) {
            throw new FS.ErrnoError(28)
        }
        if (stream.seekable && stream.flags & 1024) {
            FS.llseek(stream, 0, 2)
        }
        var seeking = typeof position != "undefined";
        if (!seeking) {
            position = stream.position
        } else if (!stream.seekable) {
            throw new FS.ErrnoError(70)
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten
    },
    allocate(stream, offset, length) {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (offset < 0 || length <= 0) {
            throw new FS.ErrnoError(28)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8)
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(43)
        }
        if (!stream.stream_ops.allocate) {
            throw new FS.ErrnoError(138)
        }
        stream.stream_ops.allocate(stream, offset, length)
    },
    mmap(stream, length, position, prot, flags) {
        if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
            throw new FS.ErrnoError(2)
        }
        if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(2)
        }
        if (!stream.stream_ops.mmap) {
            throw new FS.ErrnoError(43)
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags)
    },
    msync(stream, buffer, offset, length, mmapFlags) {
        if (!stream.stream_ops.msync) {
            return 0
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags)
    },
    munmap: stream => 0,
    ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
            throw new FS.ErrnoError(59)
        }
        return stream.stream_ops.ioctl(stream, cmd, arg)
    },
    readFile(path, opts = {}) {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || "binary";
        if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
            throw new Error(`Invalid encoding type "${opts.encoding}"`)
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === "utf8") {
            ret = UTF8ArrayToString(buf, 0)
        } else if (opts.encoding === "binary") {
            ret = buf
        }
        FS.close(stream);
        return ret
    },
    writeFile(path, data, opts = {}) {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == "string") {
            var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
            var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
            FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn)
        } else if (ArrayBuffer.isView(data)) {
            FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn)
        } else {
            throw new Error("Unsupported data type")
        }
        FS.close(stream)
    },
    cwd: () => FS.currentPath,
    chdir(path) {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        if (lookup.node === null) {
            throw new FS.ErrnoError(44)
        }
        if (!FS.isDir(lookup.node.mode)) {
            throw new FS.ErrnoError(54)
        }
        var errCode = FS.nodePermissions(lookup.node, "x");
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        FS.currentPath = lookup.path
    },
    createDefaultDirectories() {
        FS.mkdir("/tmp");
        FS.mkdir("/home");
        FS.mkdir("/home/web_user")
    },
    createDefaultDevices() {
        FS.mkdir("/dev");
        FS.registerDevice(FS.makedev(1, 3), {
            read: () => 0,
            write: (stream, buffer, offset, length, pos) => length
        });
        FS.mkdev("/dev/null", FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev("/dev/tty", FS.makedev(5, 0));
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var randomBuffer = new Uint8Array(1024),
            randomLeft = 0;
        var randomByte = () => {
            if (randomLeft === 0) {
                randomLeft = randomFill(randomBuffer).byteLength
            }
            return randomBuffer[--randomLeft]
        };
        FS.createDevice("/dev", "random", randomByte);
        FS.createDevice("/dev", "urandom", randomByte);
        FS.mkdir("/dev/shm");
        FS.mkdir("/dev/shm/tmp")
    },
    createSpecialDirectories() {
        FS.mkdir("/proc");
        var proc_self = FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd");
        FS.mount({
            mount() {
                var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
                node.node_ops = {
                    lookup(parent, name) {
                        var fd = +name;
                        var stream = FS.getStreamChecked(fd);
                        var ret = {
                            parent: null,
                            mount: {
                                mountpoint: "fake"
                            },
                            node_ops: {
                                readlink: () => stream.path
                            }
                        };
                        ret.parent = ret;
                        return ret
                    }
                };
                return node
            }
        }, {}, "/proc/self/fd")
    },
    createStandardStreams() {
        if (Module["stdin"]) {
            FS.createDevice("/dev", "stdin", Module["stdin"])
        } else {
            FS.symlink("/dev/tty", "/dev/stdin")
        }
        if (Module["stdout"]) {
            FS.createDevice("/dev", "stdout", null, Module["stdout"])
        } else {
            FS.symlink("/dev/tty", "/dev/stdout")
        }
        if (Module["stderr"]) {
            FS.createDevice("/dev", "stderr", null, Module["stderr"])
        } else {
            FS.symlink("/dev/tty1", "/dev/stderr")
        }
        var stdin = FS.open("/dev/stdin", 0);
        var stdout = FS.open("/dev/stdout", 1);
        var stderr = FS.open("/dev/stderr", 1)
    },
    ensureErrnoError() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno, node) {
            this.name = "ErrnoError";
            this.node = node;
            this.setErrno = function(errno) {
                this.errno = errno
            };
            this.setErrno(errno);
            this.message = "FS error"
        };
        FS.ErrnoError.prototype = new Error;
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        [44].forEach(code => {
            FS.genericErrors[code] = new FS.ErrnoError(code);
            FS.genericErrors[code].stack = "<generic error, no stack>"
        })
    },
    staticInit() {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, "/");
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = {
            "MEMFS": MEMFS,
            "IDBFS": IDBFS
        }
    },
    init(input, output, error) {
        FS.init.initialized = true;
        FS.ensureErrnoError();
        Module["stdin"] = input || Module["stdin"];
        Module["stdout"] = output || Module["stdout"];
        Module["stderr"] = error || Module["stderr"];
        FS.createStandardStreams()
    },
    quit() {
        FS.init.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
            var stream = FS.streams[i];
            if (!stream) {
                continue
            }
            FS.close(stream)
        }
    },
    findObject(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
            return null
        }
        return ret.object
    },
    analyzePath(path, dontResolveLastLink) {
        try {
            var lookup = FS.lookupPath(path, {
                follow: !dontResolveLastLink
            });
            path = lookup.path
        } catch (e) {}
        var ret = {
            isRoot: false,
            exists: false,
            error: 0,
            name: null,
            path: null,
            object: null,
            parentExists: false,
            parentPath: null,
            parentObject: null
        };
        try {
            var lookup = FS.lookupPath(path, {
                parent: true
            });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH.basename(path);
            lookup = FS.lookupPath(path, {
                follow: !dontResolveLastLink
            });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === "/"
        } catch (e) {
            ret.error = e.errno
        }
        return ret
    },
    createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == "string" ? parent : FS.getPath(parent);
        var parts = path.split("/").reverse();
        while (parts.length) {
            var part = parts.pop();
            if (!part) continue;
            var current = PATH.join2(parent, part);
            try {
                FS.mkdir(current)
            } catch (e) {}
            parent = current
        }
        return current
    },
    createFile(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode)
    },
    createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        var path = name;
        if (parent) {
            parent = typeof parent == "string" ? parent : FS.getPath(parent);
            path = name ? PATH.join2(parent, name) : parent
        }
        var mode = FS_getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
            if (typeof data == "string") {
                var arr = new Array(data.length);
                for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
                data = arr
            }
            FS.chmod(node, mode | 146);
            var stream = FS.open(node, 577);
            FS.write(stream, data, 0, data.length, 0, canOwn);
            FS.close(stream);
            FS.chmod(node, mode)
        }
    },
    createDevice(parent, name, input, output) {
        var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
            open(stream) {
                stream.seekable = false
            },
            close(stream) {
                if (output && output.buffer && output.buffer.length) {
                    output(10)
                }
            },
            read(stream, buffer, offset, length, pos) {
                var bytesRead = 0;
                for (var i = 0; i < length; i++) {
                    var result;
                    try {
                        result = input()
                    } catch (e) {
                        throw new FS.ErrnoError(29)
                    }
                    if (result === undefined && bytesRead === 0) {
                        throw new FS.ErrnoError(6)
                    }
                    if (result === null || result === undefined) break;
                    bytesRead++;
                    buffer[offset + i] = result
                }
                if (bytesRead) {
                    stream.node.timestamp = Date.now()
                }
                return bytesRead
            },
            write(stream, buffer, offset, length, pos) {
                for (var i = 0; i < length; i++) {
                    try {
                        output(buffer[offset + i])
                    } catch (e) {
                        throw new FS.ErrnoError(29)
                    }
                }
                if (length) {
                    stream.node.timestamp = Date.now()
                }
                return i
            }
        });
        return FS.mkdev(path, mode, dev)
    },
    forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != "undefined") {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")
        } else if (read_) {
            try {
                obj.contents = intArrayFromString(read_(obj.url), true);
                obj.usedBytes = obj.contents.length
            } catch (e) {
                throw new FS.ErrnoError(29)
            }
        } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.")
        }
    },
    createLazyFile(parent, name, url, canRead, canWrite) {
        function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = []
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length - 1 || idx < 0) {
                return undefined
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = idx / this.chunkSize | 0;
            return this.getter(chunkNum)[chunkOffset]
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
            var xhr = new XMLHttpRequest;
            xhr.open("HEAD", url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
            var chunkSize = 1024 * 1024;
            if (!hasByteServing) chunkSize = datalength;
            var doXHR = (from, to) => {
                if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, false);
                if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                xhr.responseType = "arraybuffer";
                if (xhr.overrideMimeType) {
                    xhr.overrideMimeType("text/plain; charset=x-user-defined")
                }
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                if (xhr.response !== undefined) {
                    return new Uint8Array(xhr.response || [])
                }
                return intArrayFromString(xhr.responseText || "", true)
            };
            var lazyArray = this;
            lazyArray.setDataGetter(chunkNum => {
                var start = chunkNum * chunkSize;
                var end = (chunkNum + 1) * chunkSize - 1;
                end = Math.min(end, datalength - 1);
                if (typeof lazyArray.chunks[chunkNum] == "undefined") {
                    lazyArray.chunks[chunkNum] = doXHR(start, end)
                }
                if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
                return lazyArray.chunks[chunkNum]
            });
            if (usesGzip || !datalength) {
                chunkSize = datalength = 1;
                datalength = this.getter(0).length;
                chunkSize = datalength;
                out("LazyFiles on gzip forces download of the whole file when length is accessed")
            }
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true
        };
        if (typeof XMLHttpRequest != "undefined") {
            if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var lazyArray = new LazyUint8Array;
            Object.defineProperties(lazyArray, {
                length: {
                    get: function() {
                        if (!this.lengthKnown) {
                            this.cacheLength()
                        }
                        return this._length
                    }
                },
                chunkSize: {
                    get: function() {
                        if (!this.lengthKnown) {
                            this.cacheLength()
                        }
                        return this._chunkSize
                    }
                }
            });
            var properties = {
                isDevice: false,
                contents: lazyArray
            }
        } else {
            var properties = {
                isDevice: false,
                url: url
            }
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
            node.contents = properties.contents
        } else if (properties.url) {
            node.contents = null;
            node.url = properties.url
        }
        Object.defineProperties(node, {
            usedBytes: {
                get: function() {
                    return this.contents.length
                }
            }
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(key => {
            var fn = node.stream_ops[key];
            stream_ops[key] = function forceLoadLazyFile() {
                FS.forceLoadFile(node);
                return fn.apply(null, arguments)
            }
        });

        function writeChunks(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= contents.length) return 0;
            var size = Math.min(contents.length - position, length);
            if (contents.slice) {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents[position + i]
                }
            } else {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents.get(position + i)
                }
            }
            return size
        }
        stream_ops.read = (stream, buffer, offset, length, position) => {
            FS.forceLoadFile(node);
            return writeChunks(stream, buffer, offset, length, position)
        };
        stream_ops.mmap = (stream, length, position, prot, flags) => {
            FS.forceLoadFile(node);
            var ptr = mmapAlloc(length);
            if (!ptr) {
                throw new FS.ErrnoError(48)
            }
            writeChunks(stream, HEAP8, ptr, length, position);
            return {
                ptr: ptr,
                allocated: true
            }
        };
        node.stream_ops = stream_ops;
        return node
    }
};
var SYSCALLS = {
    DEFAULT_POLLMASK: 5,
    calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
            return path
        }
        var dir;
        if (dirfd === -100) {
            dir = FS.cwd()
        } else {
            var dirstream = SYSCALLS.getStreamFromFD(dirfd);
            dir = dirstream.path
        }
        if (path.length == 0) {
            if (!allowEmpty) {
                throw new FS.ErrnoError(44)
            }
            return dir
        }
        return PATH.join2(dir, path)
    },
    doStat(func, path, buf) {
        try {
            var stat = func(path)
        } catch (e) {
            if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
                return -54
            }
            throw e
        }
        HEAP32[buf >> 2] = stat.dev;
        HEAP32[buf + 4 >> 2] = stat.mode;
        HEAPU32[buf + 8 >> 2] = stat.nlink;
        HEAP32[buf + 12 >> 2] = stat.uid;
        HEAP32[buf + 16 >> 2] = stat.gid;
        HEAP32[buf + 20 >> 2] = stat.rdev;
        tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 24 >> 2] = tempI64[0], HEAP32[buf + 28 >> 2] = tempI64[1];
        HEAP32[buf + 32 >> 2] = 4096;
        HEAP32[buf + 36 >> 2] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
        HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3;
        tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
        HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3;
        tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
        HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3;
        tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
        return 0
    },
    doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43)
        }
        if (flags & 2) {
            return 0
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags)
    },
    varargs: undefined,
    get() {
        var ret = HEAP32[+SYSCALLS.varargs >> 2];
        SYSCALLS.varargs += 4;
        return ret
    },
    getp() {
        return SYSCALLS.get()
    },
    getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret
    },
    getStreamFromFD(fd) {
        var stream = FS.getStreamChecked(fd);
        return stream
    }
};

function ___syscall_faccessat(dirfd, path, amode, flags) {
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (amode & ~7) {
            return -28
        }
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        if (!node) {
            return -44
        }
        var perms = "";
        if (amode & 4) perms += "r";
        if (amode & 2) perms += "w";
        if (amode & 1) perms += "x";
        if (perms && FS.nodePermissions(node, perms)) {
            return -2
        }
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}
var setErrNo = value => {
    HEAP32[___errno_location() >> 2] = value;
    return value
};

function ___syscall_fcntl64(fd, cmd, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
            case 0:
                {
                    var arg = SYSCALLS.get();
                    if (arg < 0) {
                        return -28
                    }
                    while (FS.streams[arg]) {
                        arg++
                    }
                    var newStream;newStream = FS.createStream(stream, arg);
                    return newStream.fd
                }
            case 1:
            case 2:
                return 0;
            case 3:
                return stream.flags;
            case 4:
                {
                    var arg = SYSCALLS.get();stream.flags |= arg;
                    return 0
                }
            case 5:
                {
                    var arg = SYSCALLS.getp();
                    var offset = 0;HEAP16[arg + offset >> 1] = 2;
                    return 0
                }
            case 6:
            case 7:
                return 0;
            case 16:
            case 8:
                return -28;
            case 9:
                setErrNo(28);
                return -1;
            default:
                {
                    return -28
                }
        }
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}
var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);

function ___syscall_getdents64(fd, dirp, count) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        if (!stream.getdents) {
            stream.getdents = FS.readdir(stream.path)
        }
        var struct_size = 280;
        var pos = 0;
        var off = FS.llseek(stream, 0, 1);
        var idx = Math.floor(off / struct_size);
        while (idx < stream.getdents.length && pos + struct_size <= count) {
            var id;
            var type;
            var name = stream.getdents[idx];
            if (name === ".") {
                id = stream.node.id;
                type = 4
            } else if (name === "..") {
                var lookup = FS.lookupPath(stream.path, {
                    parent: true
                });
                id = lookup.node.id;
                type = 4
            } else {
                var child = FS.lookupNode(stream.node, name);
                id = child.id;
                type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8
            }
            tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
            tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
            HEAP16[dirp + pos + 16 >> 1] = 280;
            HEAP8[dirp + pos + 18 >> 0] = type;
            stringToUTF8(name, dirp + pos + 19, 256);
            pos += struct_size;
            idx += 1
        }
        FS.llseek(stream, idx * struct_size, 0);
        return pos
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}

function ___syscall_ioctl(fd, op, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
            case 21509:
                {
                    if (!stream.tty) return -59;
                    return 0
                }
            case 21505:
                {
                    if (!stream.tty) return -59;
                    if (stream.tty.ops.ioctl_tcgets) {
                        var termios = stream.tty.ops.ioctl_tcgets(stream);
                        var argp = SYSCALLS.getp();
                        HEAP32[argp >> 2] = termios.c_iflag || 0;
                        HEAP32[argp + 4 >> 2] = termios.c_oflag || 0;
                        HEAP32[argp + 8 >> 2] = termios.c_cflag || 0;
                        HEAP32[argp + 12 >> 2] = termios.c_lflag || 0;
                        for (var i = 0; i < 32; i++) {
                            HEAP8[argp + i + 17 >> 0] = termios.c_cc[i] || 0
                        }
                        return 0
                    }
                    return 0
                }
            case 21510:
            case 21511:
            case 21512:
                {
                    if (!stream.tty) return -59;
                    return 0
                }
            case 21506:
            case 21507:
            case 21508:
                {
                    if (!stream.tty) return -59;
                    if (stream.tty.ops.ioctl_tcsets) {
                        var argp = SYSCALLS.getp();
                        var c_iflag = HEAP32[argp >> 2];
                        var c_oflag = HEAP32[argp + 4 >> 2];
                        var c_cflag = HEAP32[argp + 8 >> 2];
                        var c_lflag = HEAP32[argp + 12 >> 2];
                        var c_cc = [];
                        for (var i = 0; i < 32; i++) {
                            c_cc.push(HEAP8[argp + i + 17 >> 0])
                        }
                        return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
                            c_iflag: c_iflag,
                            c_oflag: c_oflag,
                            c_cflag: c_cflag,
                            c_lflag: c_lflag,
                            c_cc: c_cc
                        })
                    }
                    return 0
                }
            case 21519:
                {
                    if (!stream.tty) return -59;
                    var argp = SYSCALLS.getp();HEAP32[argp >> 2] = 0;
                    return 0
                }
            case 21520:
                {
                    if (!stream.tty) return -59;
                    return -28
                }
            case 21531:
                {
                    var argp = SYSCALLS.getp();
                    return FS.ioctl(stream, op, argp)
                }
            case 21523:
                {
                    if (!stream.tty) return -59;
                    if (stream.tty.ops.ioctl_tiocgwinsz) {
                        var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
                        var argp = SYSCALLS.getp();
                        HEAP16[argp >> 1] = winsize[0];
                        HEAP16[argp + 2 >> 1] = winsize[1]
                    }
                    return 0
                }
            case 21524:
                {
                    if (!stream.tty) return -59;
                    return 0
                }
            case 21515:
                {
                    if (!stream.tty) return -59;
                    return 0
                }
            default:
                return -28
        }
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}

function ___syscall_mkdirat(dirfd, path, mode) {
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        path = PATH.normalize(path);
        if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
        FS.mkdir(path, mode, 0);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}

function ___syscall_openat(dirfd, path, flags, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        var mode = varargs ? SYSCALLS.get() : 0;
        return FS.open(path, flags, mode).fd
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}

function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
    try {
        oldpath = SYSCALLS.getStr(oldpath);
        newpath = SYSCALLS.getStr(newpath);
        oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
        newpath = SYSCALLS.calculateAt(newdirfd, newpath);
        FS.rename(oldpath, newpath);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}

function ___syscall_rmdir(path) {
    try {
        path = SYSCALLS.getStr(path);
        FS.rmdir(path);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}

function ___syscall_stat64(path, buf) {
    try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.stat, path, buf)
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}

function ___syscall_unlinkat(dirfd, path, flags) {
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (flags === 0) {
            FS.unlink(path)
        } else if (flags === 512) {
            FS.rmdir(path)
        } else {
            abort("Invalid flags passed to unlinkat")
        }
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}
var readI53FromI64 = ptr => HEAPU32[ptr >> 2] + HEAP32[ptr + 4 >> 2] * 4294967296;

function ___syscall_utimensat(dirfd, path, times, flags) {
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path, true);
        if (!times) {
            var atime = Date.now();
            var mtime = atime
        } else {
            var seconds = readI53FromI64(times);
            var nanoseconds = HEAP32[times + 8 >> 2];
            atime = seconds * 1e3 + nanoseconds / (1e3 * 1e3);
            times += 16;
            seconds = readI53FromI64(times);
            nanoseconds = HEAP32[times + 8 >> 2];
            mtime = seconds * 1e3 + nanoseconds / (1e3 * 1e3)
        }
        FS.utime(path, atime, mtime);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno
    }
}
var __emscripten_throw_longjmp = () => {
    throw Infinity
};
var convertI32PairToI53Checked = (lo, hi) => hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;

function __gmtime_js(time_low, time_high, tmPtr) {
    var time = convertI32PairToI53Checked(time_low, time_high);
    var date = new Date(time * 1e3);
    HEAP32[tmPtr >> 2] = date.getUTCSeconds();
    HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
    HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
    HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
    HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
    HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
    HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
    var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
    HEAP32[tmPtr + 28 >> 2] = yday
}
var isLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
var MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
var MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var ydayFromDate = date => {
    var leap = isLeapYear(date.getFullYear());
    var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE;
    var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
    return yday
};

function __localtime_js(time_low, time_high, tmPtr) {
    var time = convertI32PairToI53Checked(time_low, time_high);
    var date = new Date(time * 1e3);
    HEAP32[tmPtr >> 2] = date.getSeconds();
    HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
    HEAP32[tmPtr + 8 >> 2] = date.getHours();
    HEAP32[tmPtr + 12 >> 2] = date.getDate();
    HEAP32[tmPtr + 16 >> 2] = date.getMonth();
    HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
    HEAP32[tmPtr + 24 >> 2] = date.getDay();
    var yday = ydayFromDate(date) | 0;
    HEAP32[tmPtr + 28 >> 2] = yday;
    HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
    var start = new Date(date.getFullYear(), 0, 1);
    var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    var winterOffset = start.getTimezoneOffset();
    var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
    HEAP32[tmPtr + 32 >> 2] = dst
}
var __mktime_js = function(tmPtr) {
    var ret = (() => {
        var date = new Date(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0);
        var dst = HEAP32[tmPtr + 32 >> 2];
        var guessedOffset = date.getTimezoneOffset();
        var start = new Date(date.getFullYear(), 0, 1);
        var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
        var winterOffset = start.getTimezoneOffset();
        var dstOffset = Math.min(winterOffset, summerOffset);
        if (dst < 0) {
            HEAP32[tmPtr + 32 >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset)
        } else if (dst > 0 != (dstOffset == guessedOffset)) {
            var nonDstOffset = Math.max(winterOffset, summerOffset);
            var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
            date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4)
        }
        HEAP32[tmPtr + 24 >> 2] = date.getDay();
        var yday = ydayFromDate(date) | 0;
        HEAP32[tmPtr + 28 >> 2] = yday;
        HEAP32[tmPtr >> 2] = date.getSeconds();
        HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
        HEAP32[tmPtr + 8 >> 2] = date.getHours();
        HEAP32[tmPtr + 12 >> 2] = date.getDate();
        HEAP32[tmPtr + 16 >> 2] = date.getMonth();
        HEAP32[tmPtr + 20 >> 2] = date.getYear();
        var timeMs = date.getTime();
        if (isNaN(timeMs)) {
            setErrNo(61);
            return -1
        }
        return timeMs / 1e3
    })();
    return setTempRet0((tempDouble = ret, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)), ret >>> 0
};
var stringToNewUTF8 = str => {
    var size = lengthBytesUTF8(str) + 1;
    var ret = _malloc(size);
    if (ret) stringToUTF8(str, ret, size);
    return ret
};
var __tzset_js = (timezone, daylight, tzname) => {
    var currentYear = (new Date).getFullYear();
    var winter = new Date(currentYear, 0, 1);
    var summer = new Date(currentYear, 6, 1);
    var winterOffset = winter.getTimezoneOffset();
    var summerOffset = summer.getTimezoneOffset();
    var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
    HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
    HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);

    function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT"
    }
    var winterName = extractZone(winter);
    var summerName = extractZone(summer);
    var winterNamePtr = stringToNewUTF8(winterName);
    var summerNamePtr = stringToNewUTF8(summerName);
    if (summerOffset < winterOffset) {
        HEAPU32[tzname >> 2] = winterNamePtr;
        HEAPU32[tzname + 4 >> 2] = summerNamePtr
    } else {
        HEAPU32[tzname >> 2] = summerNamePtr;
        HEAPU32[tzname + 4 >> 2] = winterNamePtr
    }
};
var _abort = () => {
    abort("")
};
var readEmAsmArgsArray = [];
var readEmAsmArgs = (sigPtr, buf) => {
    readEmAsmArgsArray.length = 0;
    var ch;
    while (ch = HEAPU8[sigPtr++]) {
        var wide = ch != 105;
        wide &= ch != 112;
        buf += wide && buf % 8 ? 4 : 0;
        readEmAsmArgsArray.push(ch == 112 ? HEAPU32[buf >> 2] : ch == 105 ? HEAP32[buf >> 2] : HEAPF64[buf >> 3]);
        buf += wide ? 8 : 4
    }
    return readEmAsmArgsArray
};
var runEmAsmFunction = (code, sigPtr, argbuf) => {
    var args = readEmAsmArgs(sigPtr, argbuf);
    return ASM_CONSTS[code].apply(null, args)
};
var _emscripten_asm_const_int = (code, sigPtr, argbuf) => runEmAsmFunction(code, sigPtr, argbuf);
var _emscripten_set_main_loop_timing = (mode, value) => {
    Browser.mainLoop.timingMode = mode;
    Browser.mainLoop.timingValue = value;
    if (!Browser.mainLoop.func) {
        return 1
    }
    if (!Browser.mainLoop.running) {
        Browser.mainLoop.running = true
    }
    if (mode == 0) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
            var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
            setTimeout(Browser.mainLoop.runner, timeUntilNextTick)
        };
        Browser.mainLoop.method = "timeout"
    } else if (mode == 1) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
            Browser.requestAnimationFrame(Browser.mainLoop.runner)
        };
        Browser.mainLoop.method = "rAF"
    } else if (mode == 2) {
        if (typeof Browser.setImmediate == "undefined") {
            if (typeof setImmediate == "undefined") {
                var setImmediates = [];
                var emscriptenMainLoopMessageId = "setimmediate";
                var Browser_setImmediate_messageHandler = event => {
                    if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
                        event.stopPropagation();
                        setImmediates.shift()()
                    }
                };
                addEventListener("message", Browser_setImmediate_messageHandler, true);
                Browser.setImmediate = function Browser_emulated_setImmediate(func) {
                    setImmediates.push(func);
                    if (ENVIRONMENT_IS_WORKER) {
                        if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
                        Module["setImmediates"].push(func);
                        postMessage({
                            target: emscriptenMainLoopMessageId
                        })
                    } else postMessage(emscriptenMainLoopMessageId, "*")
                }
            } else {
                Browser.setImmediate = setImmediate
            }
        }
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
            Browser.setImmediate(Browser.mainLoop.runner)
        };
        Browser.mainLoop.method = "immediate"
    }
    return 0
};
var _emscripten_get_now;
_emscripten_get_now = () => performance.now();
var setMainLoop = (browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) => {
    assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    Browser.mainLoop.func = browserIterationFunc;
    Browser.mainLoop.arg = arg;
    var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;

    function checkIsRunning() {
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
            return false
        }
        return true
    }
    Browser.mainLoop.running = false;
    Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
            var start = Date.now();
            var blocker = Browser.mainLoop.queue.shift();
            blocker.func(blocker.arg);
            if (Browser.mainLoop.remainingBlockers) {
                var remaining = Browser.mainLoop.remainingBlockers;
                var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
                if (blocker.counted) {
                    Browser.mainLoop.remainingBlockers = next
                } else {
                    next = next + .5;
                    Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9
                }
            }
            Browser.mainLoop.updateStatus();
            if (!checkIsRunning()) return;
            setTimeout(Browser.mainLoop.runner, 0);
            return
        }
        if (!checkIsRunning()) return;
        Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
        if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
            Browser.mainLoop.scheduler();
            return
        } else if (Browser.mainLoop.timingMode == 0) {
            Browser.mainLoop.tickStartTime = _emscripten_get_now()
        }
        Browser.mainLoop.runIter(browserIterationFunc);
        if (!checkIsRunning()) return;
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
        Browser.mainLoop.scheduler()
    };
    if (!noSetTiming) {
        if (fps && fps > 0) {
            _emscripten_set_main_loop_timing(0, 1e3 / fps)
        } else {
            _emscripten_set_main_loop_timing(1, 1)
        }
        Browser.mainLoop.scheduler()
    }
    if (simulateInfiniteLoop) {
        throw "unwind"
    }
};
var handleException = e => {
    if (e instanceof ExitStatus || e == "unwind") {
        return EXITSTATUS
    }
    quit_(1, e)
};
var runtimeKeepaliveCounter = 0;
var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
var _proc_exit = code => {
    EXITSTATUS = code;
    if (!keepRuntimeAlive()) {
        if (Module["onExit"]) Module["onExit"](code);
        ABORT = true
    }
    quit_(code, new ExitStatus(code))
};
var exitJS = (status, implicit) => {
    EXITSTATUS = status;
    _proc_exit(status)
};
var _exit = exitJS;
var maybeExit = () => {
    if (!keepRuntimeAlive()) {
        try {
            _exit(EXITSTATUS)
        } catch (e) {
            handleException(e)
        }
    }
};
var callUserCallback = func => {
    if (ABORT) {
        return
    }
    try {
        func();
        maybeExit()
    } catch (e) {
        handleException(e)
    }
};
var safeSetTimeout = (func, timeout) => setTimeout(() => {
    callUserCallback(func)
}, timeout);
var warnOnce = text => {
    if (!warnOnce.shown) warnOnce.shown = {};
    if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = "warning: " + text;
        err(text)
    }
};
var Browser = {
    mainLoop: {
        running: false,
        scheduler: null,
        method: "",
        currentlyRunningMainloop: 0,
        func: null,
        arg: 0,
        timingMode: 0,
        timingValue: 0,
        currentFrameNumber: 0,
        queue: [],
        pause() {
            Browser.mainLoop.scheduler = null;
            Browser.mainLoop.currentlyRunningMainloop++
        },
        resume() {
            Browser.mainLoop.currentlyRunningMainloop++;
            var timingMode = Browser.mainLoop.timingMode;
            var timingValue = Browser.mainLoop.timingValue;
            var func = Browser.mainLoop.func;
            Browser.mainLoop.func = null;
            setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
            _emscripten_set_main_loop_timing(timingMode, timingValue);
            Browser.mainLoop.scheduler()
        },
        updateStatus() {
            if (Module["setStatus"]) {
                var message = Module["statusMessage"] || "Please wait...";
                var remaining = Browser.mainLoop.remainingBlockers;
                var expected = Browser.mainLoop.expectedBlockers;
                if (remaining) {
                    if (remaining < expected) {
                        Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")")
                    } else {
                        Module["setStatus"](message)
                    }
                } else {
                    Module["setStatus"]("")
                }
            }
        },
        runIter(func) {
            if (ABORT) return;
            if (Module["preMainLoop"]) {
                var preRet = Module["preMainLoop"]();
                if (preRet === false) {
                    return
                }
            }
            callUserCallback(func);
            if (Module["postMainLoop"]) Module["postMainLoop"]()
        }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init() {
        if (Browser.initted) return;
        Browser.initted = true;
        var imagePlugin = {};
        imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
            return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name)
        };
        imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
            var b = new Blob([byteArray], {
                type: Browser.getMimetype(name)
            });
            if (b.size !== byteArray.length) {
                b = new Blob([new Uint8Array(byteArray).buffer], {
                    type: Browser.getMimetype(name)
                })
            }
            var url = URL.createObjectURL(b);
            var img = new Image;
            img.onload = () => {
                assert(img.complete, `Image ${name} could not be decoded`);
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                preloadedImages[name] = canvas;
                URL.revokeObjectURL(url);
                if (onload) onload(byteArray)
            };
            img.onerror = event => {
                err(`Image ${url} could not be decoded`);
                if (onerror) onerror()
            };
            img.src = url
        };
        preloadPlugins.push(imagePlugin);
        var audioPlugin = {};
        audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
            return !Module.noAudioDecoding && name.substr(-4) in {
                ".ogg": 1,
                ".wav": 1,
                ".mp3": 1
            }
        };
        audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
            var done = false;

            function finish(audio) {
                if (done) return;
                done = true;
                preloadedAudios[name] = audio;
                if (onload) onload(byteArray)
            }
            var b = new Blob([byteArray], {
                type: Browser.getMimetype(name)
            });
            var url = URL.createObjectURL(b);
            var audio = new Audio;
            audio.addEventListener("canplaythrough", () => finish(audio), false);
            audio.onerror = function audio_onerror(event) {
                if (done) return;
                err(`warning: browser could not fully decode audio ${name}, trying slower base64 approach`);

                function encode64(data) {
                    var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                    var PAD = "=";
                    var ret = "";
                    var leftchar = 0;
                    var leftbits = 0;
                    for (var i = 0; i < data.length; i++) {
                        leftchar = leftchar << 8 | data[i];
                        leftbits += 8;
                        while (leftbits >= 6) {
                            var curr = leftchar >> leftbits - 6 & 63;
                            leftbits -= 6;
                            ret += BASE[curr]
                        }
                    }
                    if (leftbits == 2) {
                        ret += BASE[(leftchar & 3) << 4];
                        ret += PAD + PAD
                    } else if (leftbits == 4) {
                        ret += BASE[(leftchar & 15) << 2];
                        ret += PAD
                    }
                    return ret
                }
                audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
                finish(audio)
            };
            audio.src = url;
            safeSetTimeout(() => {
                finish(audio)
            }, 1e4)
        };
        preloadPlugins.push(audioPlugin);

        function pointerLockChange() {
            Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"]
        }
        var canvas = Module["canvas"];
        if (canvas) {
            canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || (() => {});
            canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || (() => {});
            canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
            document.addEventListener("pointerlockchange", pointerLockChange, false);
            document.addEventListener("mozpointerlockchange", pointerLockChange, false);
            document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
            document.addEventListener("mspointerlockchange", pointerLockChange, false);
            if (Module["elementPointerLock"]) {
                canvas.addEventListener("click", ev => {
                    if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
                        Module["canvas"].requestPointerLock();
                        ev.preventDefault()
                    }
                }, false)
            }
        }
    },
    createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
        var ctx;
        var contextHandle;
        if (useWebGL) {
            var contextAttributes = {
                antialias: false,
                alpha: false,
                majorVersion: typeof WebGL2RenderingContext != "undefined" ? 2 : 1
            };
            if (webGLContextAttributes) {
                for (var attribute in webGLContextAttributes) {
                    contextAttributes[attribute] = webGLContextAttributes[attribute]
                }
            }
            if (typeof GL != "undefined") {
                contextHandle = GL.createContext(canvas, contextAttributes);
                if (contextHandle) {
                    ctx = GL.getContext(contextHandle).GLctx
                }
            }
        } else {
            ctx = canvas.getContext("2d")
        }
        if (!ctx) return null;
        if (setInModule) {
            if (!useWebGL) assert(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
            Module.ctx = ctx;
            if (useWebGL) GL.makeContextCurrent(contextHandle);
            Module.useWebGL = useWebGL;
            Browser.moduleContextCreatedCallbacks.forEach(callback => callback());
            Browser.init()
        }
        return ctx
    },
    destroyContext(canvas, useWebGL, setInModule) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == "undefined") Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == "undefined") Browser.resizeCanvas = false;
        var canvas = Module["canvas"];

        function fullscreenChange() {
            Browser.isFullscreen = false;
            var canvasContainer = canvas.parentNode;
            if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
                canvas.exitFullscreen = Browser.exitFullscreen;
                if (Browser.lockPointer) canvas.requestPointerLock();
                Browser.isFullscreen = true;
                if (Browser.resizeCanvas) {
                    Browser.setFullscreenCanvasSize()
                } else {
                    Browser.updateCanvasDimensions(canvas)
                }
            } else {
                canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
                canvasContainer.parentNode.removeChild(canvasContainer);
                if (Browser.resizeCanvas) {
                    Browser.setWindowedCanvasSize()
                } else {
                    Browser.updateCanvasDimensions(canvas)
                }
            }
            if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);
            if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen)
        }
        if (!Browser.fullscreenHandlersInstalled) {
            Browser.fullscreenHandlersInstalled = true;
            document.addEventListener("fullscreenchange", fullscreenChange, false);
            document.addEventListener("mozfullscreenchange", fullscreenChange, false);
            document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
            document.addEventListener("MSFullscreenChange", fullscreenChange, false)
        }
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
        canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? () => canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null) || (canvasContainer["webkitRequestFullScreen"] ? () => canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null);
        canvasContainer.requestFullscreen()
    },
    exitFullscreen() {
        if (!Browser.isFullscreen) {
            return false
        }
        var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || (() => {});
        CFS.apply(document, []);
        return true
    },
    nextRAF: 0,
    fakeRequestAnimationFrame(func) {
        var now = Date.now();
        if (Browser.nextRAF === 0) {
            Browser.nextRAF = now + 1e3 / 60
        } else {
            while (now + 2 >= Browser.nextRAF) {
                Browser.nextRAF += 1e3 / 60
            }
        }
        var delay = Math.max(Browser.nextRAF - now, 0);
        setTimeout(func, delay)
    },
    requestAnimationFrame(func) {
        if (typeof requestAnimationFrame == "function") {
            requestAnimationFrame(func);
            return
        }
        var RAF = Browser.fakeRequestAnimationFrame;
        RAF(func)
    },
    safeSetTimeout(func, timeout) {
        return safeSetTimeout(func, timeout)
    },
    safeRequestAnimationFrame(func) {
        return Browser.requestAnimationFrame(() => {
            callUserCallback(func)
        })
    },
    getMimetype(name) {
        return {
            "jpg": "image/jpeg",
            "jpeg": "image/jpeg",
            "png": "image/png",
            "bmp": "image/bmp",
            "ogg": "audio/ogg",
            "wav": "audio/wav",
            "mp3": "audio/mpeg"
        }[name.substr(name.lastIndexOf(".") + 1)]
    },
    getUserMedia(func) {
        if (!window.getUserMedia) {
            window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"]
        }
        window.getUserMedia(func)
    },
    getMovementX(event) {
        return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0
    },
    getMovementY(event) {
        return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0
    },
    getMouseWheelDelta(event) {
        var delta = 0;
        switch (event.type) {
            case "DOMMouseScroll":
                delta = event.detail / 3;
                break;
            case "mousewheel":
                delta = event.wheelDelta / 120;
                break;
            case "wheel":
                delta = event.deltaY;
                switch (event.deltaMode) {
                    case 0:
                        delta /= 100;
                        break;
                    case 1:
                        delta /= 3;
                        break;
                    case 2:
                        delta *= 80;
                        break;
                    default:
                        throw "unrecognized mouse wheel delta mode: " + event.deltaMode
                }
                break;
            default:
                throw "unrecognized mouse wheel event: " + event.type
        }
        return delta
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent(event) {
        if (Browser.pointerLock) {
            if (event.type != "mousemove" && "mozMovementX" in event) {
                Browser.mouseMovementX = Browser.mouseMovementY = 0
            } else {
                Browser.mouseMovementX = Browser.getMovementX(event);
                Browser.mouseMovementY = Browser.getMovementY(event)
            }
            if (typeof SDL != "undefined") {
                Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
                Browser.mouseY = SDL.mouseY + Browser.mouseMovementY
            } else {
                Browser.mouseX += Browser.mouseMovementX;
                Browser.mouseY += Browser.mouseMovementY
            }
        } else {
            var rect = Module["canvas"].getBoundingClientRect();
            var cw = Module["canvas"].width;
            var ch = Module["canvas"].height;
            var scrollX = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
            var scrollY = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
            if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
                var touch = event.touch;
                if (touch === undefined) {
                    return
                }
                var adjustedX = touch.pageX - (scrollX + rect.left);
                var adjustedY = touch.pageY - (scrollY + rect.top);
                adjustedX = adjustedX * (cw / rect.width);
                adjustedY = adjustedY * (ch / rect.height);
                var coords = {
                    x: adjustedX,
                    y: adjustedY
                };
                if (event.type === "touchstart") {
                    Browser.lastTouches[touch.identifier] = coords;
                    Browser.touches[touch.identifier] = coords
                } else if (event.type === "touchend" || event.type === "touchmove") {
                    var last = Browser.touches[touch.identifier];
                    if (!last) last = coords;
                    Browser.lastTouches[touch.identifier] = last;
                    Browser.touches[touch.identifier] = coords
                }
                return
            }
            var x = event.pageX - (scrollX + rect.left);
            var y = event.pageY - (scrollY + rect.top);
            x = x * (cw / rect.width);
            y = y * (ch / rect.height);
            Browser.mouseMovementX = x - Browser.mouseX;
            Browser.mouseMovementY = y - Browser.mouseY;
            Browser.mouseX = x;
            Browser.mouseY = y
        }
    },
    resizeListeners: [],
    updateResizeListeners() {
        var canvas = Module["canvas"];
        Browser.resizeListeners.forEach(listener => listener(canvas.width, canvas.height))
    },
    setCanvasSize(width, height, noUpdates) {
        var canvas = Module["canvas"];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners()
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize() {
        if (typeof SDL != "undefined") {
            var flags = HEAPU32[SDL.screen >> 2];
            flags = flags | 8388608;
            HEAP32[SDL.screen >> 2] = flags
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners()
    },
    setWindowedCanvasSize() {
        if (typeof SDL != "undefined") {
            var flags = HEAPU32[SDL.screen >> 2];
            flags = flags & ~8388608;
            HEAP32[SDL.screen >> 2] = flags
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners()
    },
    updateCanvasDimensions(canvas, wNative, hNative) {
        if (wNative && hNative) {
            canvas.widthNative = wNative;
            canvas.heightNative = hNative
        } else {
            wNative = canvas.widthNative;
            hNative = canvas.heightNative
        }
        var w = wNative;
        var h = hNative;
        if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
            if (w / h < Module["forcedAspectRatio"]) {
                w = Math.round(h * Module["forcedAspectRatio"])
            } else {
                h = Math.round(w / Module["forcedAspectRatio"])
            }
        }
        if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
            var factor = Math.min(screen.width / w, screen.height / h);
            w = Math.round(w * factor);
            h = Math.round(h * factor)
        }
        if (Browser.resizeCanvas) {
            if (canvas.width != w) canvas.width = w;
            if (canvas.height != h) canvas.height = h;
            if (typeof canvas.style != "undefined") {
                canvas.style.removeProperty("width");
                canvas.style.removeProperty("height")
            }
        } else {
            if (canvas.width != wNative) canvas.width = wNative;
            if (canvas.height != hNative) canvas.height = hNative;
            if (typeof canvas.style != "undefined") {
                if (w != wNative || h != hNative) {
                    canvas.style.setProperty("width", w + "px", "important");
                    canvas.style.setProperty("height", h + "px", "important")
                } else {
                    canvas.style.removeProperty("width");
                    canvas.style.removeProperty("height")
                }
            }
        }
    }
};
var _emscripten_cancel_main_loop = () => {
    Browser.mainLoop.pause();
    Browser.mainLoop.func = null
};
var _emscripten_date_now = () => Date.now();
var _emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);
var withStackSave = f => {
    var stack = stackSave();
    var ret = f();
    stackRestore(stack);
    return ret
};
var JSEvents = {
    inEventHandler: 0,
    removeAllEventListeners() {
        for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
            JSEvents._removeHandler(i)
        }
        JSEvents.eventHandlers = [];
        JSEvents.deferredCalls = []
    },
    registerRemoveEventListeners() {
        if (!JSEvents.removeEventListenersRegistered) {
            __ATEXIT__.push(JSEvents.removeAllEventListeners);
            JSEvents.removeEventListenersRegistered = true
        }
    },
    deferredCalls: [],
    deferCall(targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
            if (arrA.length != arrB.length) return false;
            for (var i in arrA) {
                if (arrA[i] != arrB[i]) return false
            }
            return true
        }
        for (var i in JSEvents.deferredCalls) {
            var call = JSEvents.deferredCalls[i];
            if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
                return
            }
        }
        JSEvents.deferredCalls.push({
            targetFunction: targetFunction,
            precedence: precedence,
            argsList: argsList
        });
        JSEvents.deferredCalls.sort((x, y) => x.precedence < y.precedence)
    },
    removeDeferredCalls(targetFunction) {
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
                JSEvents.deferredCalls.splice(i, 1);
                --i
            }
        }
    },
    canPerformEventHandlerRequests() {
        if (navigator.userActivation) {
            return navigator.userActivation.isActive
        }
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls
    },
    runDeferredCalls() {
        if (!JSEvents.canPerformEventHandlerRequests()) {
            return
        }
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            var call = JSEvents.deferredCalls[i];
            JSEvents.deferredCalls.splice(i, 1);
            --i;
            call.targetFunction.apply(null, call.argsList)
        }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: (target, eventTypeString) => {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
                JSEvents._removeHandler(i--)
            }
        }
    },
    _removeHandler(i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1)
    },
    registerOrRemoveHandler(eventHandler) {
        if (!eventHandler.target) {
            return -4
        }
        var jsEventHandler = function jsEventHandler(event) {
            ++JSEvents.inEventHandler;
            JSEvents.currentEventHandler = eventHandler;
            JSEvents.runDeferredCalls();
            eventHandler.handlerFunc(event);
            JSEvents.runDeferredCalls();
            --JSEvents.inEventHandler
        };
        if (eventHandler.callbackfunc) {
            eventHandler.eventListenerFunc = jsEventHandler;
            eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
            JSEvents.eventHandlers.push(eventHandler);
            JSEvents.registerRemoveEventListeners()
        } else {
            for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
                if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
                    JSEvents._removeHandler(i--)
                }
            }
        }
        return 0
    },
    getNodeNameForTarget(target) {
        if (!target) return "";
        if (target == window) return "#window";
        if (target == screen) return "#screen";
        return target && target.nodeName ? target.nodeName : ""
    },
    fullscreenEnabled() {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled
    }
};
var setLetterbox = (element, topBottom, leftRight) => {
    element.style.paddingLeft = element.style.paddingRight = leftRight + "px";
    element.style.paddingTop = element.style.paddingBottom = topBottom + "px"
};
var maybeCStringToJsString = cString => cString > 2 ? UTF8ToString(cString) : cString;
var specialHTMLTargets = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];
var findEventTarget = target => {
    target = maybeCStringToJsString(target);
    var domElement = specialHTMLTargets[target] || (typeof document != "undefined" ? document.querySelector(target) : undefined);
    return domElement
};
var findCanvasEventTarget = target => findEventTarget(target);
var _emscripten_set_canvas_element_size = (target, width, height) => {
    var canvas = findCanvasEventTarget(target);
    if (!canvas) return -4;
    canvas.width = width;
    canvas.height = height;
    return 0
};
var _emscripten_get_canvas_element_size = (target, width, height) => {
    var canvas = findCanvasEventTarget(target);
    if (!canvas) return -4;
    HEAP32[width >> 2] = canvas.width;
    HEAP32[height >> 2] = canvas.height
};
var stringToUTF8OnStack = str => {
    var size = lengthBytesUTF8(str) + 1;
    var ret = stackAlloc(size);
    stringToUTF8(str, ret, size);
    return ret
};
var getCanvasElementSize = target => withStackSave(() => {
    var w = stackAlloc(8);
    var h = w + 4;
    var targetInt = stringToUTF8OnStack(target.id);
    var ret = _emscripten_get_canvas_element_size(targetInt, w, h);
    var size = [HEAP32[w >> 2], HEAP32[h >> 2]];
    return size
});
var setCanvasElementSize = (target, width, height) => {
    if (!target.controlTransferredOffscreen) {
        target.width = width;
        target.height = height
    } else {
        withStackSave(() => {
            var targetInt = stringToUTF8OnStack(target.id);
            _emscripten_set_canvas_element_size(targetInt, width, height)
        })
    }
};
var wasmTableMirror = [];
var wasmTable;
var getWasmTableEntry = funcPtr => {
    var func = wasmTableMirror[funcPtr];
    if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr)
    }
    return func
};
var registerRestoreOldStyle = canvas => {
    var canvasSize = getCanvasElementSize(canvas);
    var oldWidth = canvasSize[0];
    var oldHeight = canvasSize[1];
    var oldCssWidth = canvas.style.width;
    var oldCssHeight = canvas.style.height;
    var oldBackgroundColor = canvas.style.backgroundColor;
    var oldDocumentBackgroundColor = document.body.style.backgroundColor;
    var oldPaddingLeft = canvas.style.paddingLeft;
    var oldPaddingRight = canvas.style.paddingRight;
    var oldPaddingTop = canvas.style.paddingTop;
    var oldPaddingBottom = canvas.style.paddingBottom;
    var oldMarginLeft = canvas.style.marginLeft;
    var oldMarginRight = canvas.style.marginRight;
    var oldMarginTop = canvas.style.marginTop;
    var oldMarginBottom = canvas.style.marginBottom;
    var oldDocumentBodyMargin = document.body.style.margin;
    var oldDocumentOverflow = document.documentElement.style.overflow;
    var oldDocumentScroll = document.body.scroll;
    var oldImageRendering = canvas.style.imageRendering;

    function restoreOldStyle() {
        var fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
        if (!fullscreenElement) {
            document.removeEventListener("fullscreenchange", restoreOldStyle);
            document.removeEventListener("webkitfullscreenchange", restoreOldStyle);
            setCanvasElementSize(canvas, oldWidth, oldHeight);
            canvas.style.width = oldCssWidth;
            canvas.style.height = oldCssHeight;
            canvas.style.backgroundColor = oldBackgroundColor;
            if (!oldDocumentBackgroundColor) document.body.style.backgroundColor = "white";
            document.body.style.backgroundColor = oldDocumentBackgroundColor;
            canvas.style.paddingLeft = oldPaddingLeft;
            canvas.style.paddingRight = oldPaddingRight;
            canvas.style.paddingTop = oldPaddingTop;
            canvas.style.paddingBottom = oldPaddingBottom;
            canvas.style.marginLeft = oldMarginLeft;
            canvas.style.marginRight = oldMarginRight;
            canvas.style.marginTop = oldMarginTop;
            canvas.style.marginBottom = oldMarginBottom;
            document.body.style.margin = oldDocumentBodyMargin;
            document.documentElement.style.overflow = oldDocumentOverflow;
            document.body.scroll = oldDocumentScroll;
            canvas.style.imageRendering = oldImageRendering;
            if (canvas.GLctxObject) canvas.GLctxObject.GLctx.viewport(0, 0, oldWidth, oldHeight);
            if (currentFullscreenStrategy.canvasResizedCallback) {
                getWasmTableEntry(currentFullscreenStrategy.canvasResizedCallback)(37, 0, currentFullscreenStrategy.canvasResizedCallbackUserData)
            }
        }
    }
    document.addEventListener("fullscreenchange", restoreOldStyle);
    document.addEventListener("webkitfullscreenchange", restoreOldStyle);
    return restoreOldStyle
};
var getBoundingClientRect = e => specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {
    "left": 0,
    "top": 0
};
var JSEvents_resizeCanvasForFullscreen = (target, strategy) => {
    var restoreOldStyle = registerRestoreOldStyle(target);
    var cssWidth = strategy.softFullscreen ? innerWidth : screen.width;
    var cssHeight = strategy.softFullscreen ? innerHeight : screen.height;
    var rect = getBoundingClientRect(target);
    var windowedCssWidth = rect.width;
    var windowedCssHeight = rect.height;
    var canvasSize = getCanvasElementSize(target);
    var windowedRttWidth = canvasSize[0];
    var windowedRttHeight = canvasSize[1];
    if (strategy.scaleMode == 3) {
        setLetterbox(target, (cssHeight - windowedCssHeight) / 2, (cssWidth - windowedCssWidth) / 2);
        cssWidth = windowedCssWidth;
        cssHeight = windowedCssHeight
    } else if (strategy.scaleMode == 2) {
        if (cssWidth * windowedRttHeight < windowedRttWidth * cssHeight) {
            var desiredCssHeight = windowedRttHeight * cssWidth / windowedRttWidth;
            setLetterbox(target, (cssHeight - desiredCssHeight) / 2, 0);
            cssHeight = desiredCssHeight
        } else {
            var desiredCssWidth = windowedRttWidth * cssHeight / windowedRttHeight;
            setLetterbox(target, 0, (cssWidth - desiredCssWidth) / 2);
            cssWidth = desiredCssWidth
        }
    }
    if (!target.style.backgroundColor) target.style.backgroundColor = "black";
    if (!document.body.style.backgroundColor) document.body.style.backgroundColor = "black";
    target.style.width = cssWidth + "px";
    target.style.height = cssHeight + "px";
    if (strategy.filteringMode == 1) {
        target.style.imageRendering = "optimizeSpeed";
        target.style.imageRendering = "-moz-crisp-edges";
        target.style.imageRendering = "-o-crisp-edges";
        target.style.imageRendering = "-webkit-optimize-contrast";
        target.style.imageRendering = "optimize-contrast";
        target.style.imageRendering = "crisp-edges";
        target.style.imageRendering = "pixelated"
    }
    var dpiScale = strategy.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (strategy.canvasResolutionScaleMode != 0) {
        var newWidth = cssWidth * dpiScale | 0;
        var newHeight = cssHeight * dpiScale | 0;
        setCanvasElementSize(target, newWidth, newHeight);
        if (target.GLctxObject) target.GLctxObject.GLctx.viewport(0, 0, newWidth, newHeight)
    }
    return restoreOldStyle
};
var JSEvents_requestFullscreen = (target, strategy) => {
    if (strategy.scaleMode != 0 || strategy.canvasResolutionScaleMode != 0) {
        JSEvents_resizeCanvasForFullscreen(target, strategy)
    }
    if (target.requestFullscreen) {
        target.requestFullscreen()
    } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    } else {
        return JSEvents.fullscreenEnabled() ? -3 : -1
    }
    currentFullscreenStrategy = strategy;
    if (strategy.canvasResizedCallback) {
        getWasmTableEntry(strategy.canvasResizedCallback)(37, 0, strategy.canvasResizedCallbackUserData)
    }
    return 0
};
var doRequestFullscreen = (target, strategy) => {
    if (!JSEvents.fullscreenEnabled()) return -1;
    target = findEventTarget(target);
    if (!target) return -4;
    if (!target.requestFullscreen && !target.webkitRequestFullscreen) {
        return -3
    }
    var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
    if (!canPerformRequests) {
        if (strategy.deferUntilInEventHandler) {
            JSEvents.deferCall(JSEvents_requestFullscreen, 1, [target, strategy]);
            return 1
        }
        return -2
    }
    return JSEvents_requestFullscreen(target, strategy)
};
var currentFullscreenStrategy = {};
var _emscripten_request_fullscreen_strategy = (target, deferUntilInEventHandler, fullscreenStrategy) => {
    var strategy = {
        scaleMode: HEAP32[fullscreenStrategy >> 2],
        canvasResolutionScaleMode: HEAP32[fullscreenStrategy + 4 >> 2],
        filteringMode: HEAP32[fullscreenStrategy + 8 >> 2],
        deferUntilInEventHandler: deferUntilInEventHandler,
        canvasResizedCallback: HEAP32[fullscreenStrategy + 12 >> 2],
        canvasResizedCallbackUserData: HEAP32[fullscreenStrategy + 16 >> 2]
    };
    return doRequestFullscreen(target, strategy)
};
var getHeapMax = () => 2147483648;
var growMemory = size => {
    var b = wasmMemory.buffer;
    var pages = (size - b.byteLength + 65535) / 65536;
    try {
        wasmMemory.grow(pages);
        updateMemoryViews();
        return 1
    } catch (e) {}
};
var _emscripten_resize_heap = requestedSize => {
    var oldSize = HEAPU8.length;
    requestedSize >>>= 0;
    var maxHeapSize = getHeapMax();
    if (requestedSize > maxHeapSize) {
        return false
    }
    var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
    for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = growMemory(newSize);
        if (replacement) {
            return true
        }
    }
    return false
};
var _emscripten_set_main_loop = (func, fps, simulateInfiniteLoop) => {
    var browserIterationFunc = getWasmTableEntry(func);
    setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop)
};
var fillMouseEventData = (eventStruct, e, target) => {
    HEAPF64[eventStruct >> 3] = e.timeStamp;
    var idx = eventStruct >> 2;
    HEAP32[idx + 2] = e.screenX;
    HEAP32[idx + 3] = e.screenY;
    HEAP32[idx + 4] = e.clientX;
    HEAP32[idx + 5] = e.clientY;
    HEAP32[idx + 6] = e.ctrlKey;
    HEAP32[idx + 7] = e.shiftKey;
    HEAP32[idx + 8] = e.altKey;
    HEAP32[idx + 9] = e.metaKey;
    HEAP16[idx * 2 + 20] = e.button;
    HEAP16[idx * 2 + 21] = e.buttons;
    HEAP32[idx + 11] = e["movementX"];
    HEAP32[idx + 12] = e["movementY"];
    var rect = getBoundingClientRect(target);
    HEAP32[idx + 13] = e.clientX - rect.left;
    HEAP32[idx + 14] = e.clientY - rect.top
};
var registerMouseEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
    if (!JSEvents.mouseEvent) JSEvents.mouseEvent = _malloc(72);
    target = findEventTarget(target);
    var mouseEventHandlerFunc = (e = event) => {
        fillMouseEventData(JSEvents.mouseEvent, e, target);
        if (getWasmTableEntry(callbackfunc)(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString != "mousemove" && eventTypeString != "mouseenter" && eventTypeString != "mouseleave",
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: mouseEventHandlerFunc,
        useCapture: useCapture
    };
    return JSEvents.registerOrRemoveHandler(eventHandler)
};
var _emscripten_set_mousedown_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerMouseEventCallback(target, userData, useCapture, callbackfunc, 5, "mousedown", targetThread);
var _emscripten_set_mousemove_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);
var _emscripten_set_mouseup_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerMouseEventCallback(target, userData, useCapture, callbackfunc, 6, "mouseup", targetThread);
var registerTouchEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
    if (!JSEvents.touchEvent) JSEvents.touchEvent = _malloc(1696);
    target = findEventTarget(target);
    var touchEventHandlerFunc = e => {
        var t, touches = {},
            et = e.touches;
        for (var i = 0; i < et.length; ++i) {
            t = et[i];
            t.isChanged = t.onTarget = 0;
            touches[t.identifier] = t
        }
        for (var i = 0; i < e.changedTouches.length; ++i) {
            t = e.changedTouches[i];
            t.isChanged = 1;
            touches[t.identifier] = t
        }
        for (var i = 0; i < e.targetTouches.length; ++i) {
            touches[e.targetTouches[i].identifier].onTarget = 1
        }
        var touchEvent = JSEvents.touchEvent;
        HEAPF64[touchEvent >> 3] = e.timeStamp;
        var idx = touchEvent >> 2;
        HEAP32[idx + 3] = e.ctrlKey;
        HEAP32[idx + 4] = e.shiftKey;
        HEAP32[idx + 5] = e.altKey;
        HEAP32[idx + 6] = e.metaKey;
        idx += 7;
        var targetRect = getBoundingClientRect(target);
        var numTouches = 0;
        for (var i in touches) {
            t = touches[i];
            HEAP32[idx + 0] = t.identifier;
            HEAP32[idx + 1] = t.screenX;
            HEAP32[idx + 2] = t.screenY;
            HEAP32[idx + 3] = t.clientX;
            HEAP32[idx + 4] = t.clientY;
            HEAP32[idx + 5] = t.pageX;
            HEAP32[idx + 6] = t.pageY;
            HEAP32[idx + 7] = t.isChanged;
            HEAP32[idx + 8] = t.onTarget;
            HEAP32[idx + 9] = t.clientX - targetRect.left;
            HEAP32[idx + 10] = t.clientY - targetRect.top;
            idx += 13;
            if (++numTouches > 31) {
                break
            }
        }
        HEAP32[touchEvent + 8 >> 2] = numTouches;
        if (getWasmTableEntry(callbackfunc)(eventTypeId, touchEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString == "touchstart" || eventTypeString == "touchend",
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: touchEventHandlerFunc,
        useCapture: useCapture
    };
    return JSEvents.registerOrRemoveHandler(eventHandler)
};
var _emscripten_set_touchcancel_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, "touchcancel", targetThread);
var _emscripten_set_touchend_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, "touchend", targetThread);
var _emscripten_set_touchmove_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, "touchmove", targetThread);
var _emscripten_set_touchstart_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, "touchstart", targetThread);

function _fd_close(fd) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno
    }
}
var doReadv = (stream, iov, iovcnt, offset) => {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break;
        if (typeof offset !== "undefined") {
            offset += curr
        }
    }
    return ret
};

function _fd_read(fd, iov, iovcnt, pnum) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doReadv(stream, iov, iovcnt);
        HEAPU32[pnum >> 2] = num;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno
    }
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    var offset = convertI32PairToI53Checked(offset_low, offset_high);
    try {
        if (isNaN(offset)) return 61;
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.llseek(stream, offset, whence);
        tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
        if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno
    }
}
var doWritev = (stream, iov, iovcnt, offset) => {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (typeof offset !== "undefined") {
            offset += curr
        }
    }
    return ret
};

function _fd_write(fd, iov, iovcnt, pnum) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doWritev(stream, iov, iovcnt);
        HEAPU32[pnum >> 2] = num;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno
    }
}
var webgl_enable_ANGLE_instanced_arrays = ctx => {
    var ext = ctx.getExtension("ANGLE_instanced_arrays");
    if (ext) {
        ctx["vertexAttribDivisor"] = (index, divisor) => ext["vertexAttribDivisorANGLE"](index, divisor);
        ctx["drawArraysInstanced"] = (mode, first, count, primcount) => ext["drawArraysInstancedANGLE"](mode, first, count, primcount);
        ctx["drawElementsInstanced"] = (mode, count, type, indices, primcount) => ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount);
        return 1
    }
};
var webgl_enable_OES_vertex_array_object = ctx => {
    var ext = ctx.getExtension("OES_vertex_array_object");
    if (ext) {
        ctx["createVertexArray"] = () => ext["createVertexArrayOES"]();
        ctx["deleteVertexArray"] = vao => ext["deleteVertexArrayOES"](vao);
        ctx["bindVertexArray"] = vao => ext["bindVertexArrayOES"](vao);
        ctx["isVertexArray"] = vao => ext["isVertexArrayOES"](vao);
        return 1
    }
};
var webgl_enable_WEBGL_draw_buffers = ctx => {
    var ext = ctx.getExtension("WEBGL_draw_buffers");
    if (ext) {
        ctx["drawBuffers"] = (n, bufs) => ext["drawBuffersWEBGL"](n, bufs);
        return 1
    }
};
var webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance = ctx => !!(ctx.dibvbi = ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
var webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance = ctx => !!(ctx.mdibvbi = ctx.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
var webgl_enable_WEBGL_multi_draw = ctx => !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"));
var GL = {
    counter: 1,
    buffers: [],
    programs: [],
    framebuffers: [],
    renderbuffers: [],
    textures: [],
    shaders: [],
    vaos: [],
    contexts: [],
    offscreenCanvases: {},
    queries: [],
    samplers: [],
    transformFeedbacks: [],
    syncs: [],
    stringCache: {},
    stringiCache: {},
    unpackAlignment: 4,
    recordError: function recordError(errorCode) {
        if (!GL.lastError) {
            GL.lastError = errorCode
        }
    },
    getNewId: table => {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
            table[i] = null
        }
        return ret
    },
    getSource: (shader, count, string, length) => {
        var source = "";
        for (var i = 0; i < count; ++i) {
            var len = length ? HEAP32[length + i * 4 >> 2] : -1;
            source += UTF8ToString(HEAP32[string + i * 4 >> 2], len < 0 ? undefined : len)
        }
        return source
    },
    createContext: (canvas, webGLContextAttributes) => {
        if (!canvas.getContextSafariWebGL2Fixed) {
            canvas.getContextSafariWebGL2Fixed = canvas.getContext;

            function fixedGetContext(ver, attrs) {
                var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
                return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null
            }
            canvas.getContext = fixedGetContext
        }
        var ctx = webGLContextAttributes.majorVersion > 1 ? canvas.getContext("webgl2", webGLContextAttributes) : canvas.getContext("webgl", webGLContextAttributes);
        if (!ctx) return 0;
        var handle = GL.registerContext(ctx, webGLContextAttributes);
        return handle
    },
    registerContext: (ctx, webGLContextAttributes) => {
        var handle = GL.getNewId(GL.contexts);
        var context = {
            handle: handle,
            attributes: webGLContextAttributes,
            version: webGLContextAttributes.majorVersion,
            GLctx: ctx
        };
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault == "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
            GL.initExtensions(context)
        }
        return handle
    },
    makeContextCurrent: contextHandle => {
        GL.currentContext = GL.contexts[contextHandle];
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
        return !(contextHandle && !GLctx)
    },
    getContext: contextHandle => GL.contexts[contextHandle],
    deleteContext: contextHandle => {
        if (GL.currentContext === GL.contexts[contextHandle]) {
            GL.currentContext = null
        }
        if (typeof JSEvents == "object") {
            JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas)
        }
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) {
            GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined
        }
        GL.contexts[contextHandle] = null
    },
    initExtensions: context => {
        if (!context) context = GL.currentContext;
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
        var GLctx = context.GLctx;
        webgl_enable_ANGLE_instanced_arrays(GLctx);
        webgl_enable_OES_vertex_array_object(GLctx);
        webgl_enable_WEBGL_draw_buffers(GLctx);
        webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
        webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
        if (context.version >= 2) {
            GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2")
        }
        if (context.version < 2 || !GLctx.disjointTimerQueryExt) {
            GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query")
        }
        webgl_enable_WEBGL_multi_draw(GLctx);
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach(ext => {
            if (!ext.includes("lose_context") && !ext.includes("debug")) {
                GLctx.getExtension(ext)
            }
        })
    },
    getExtensions() {
        var exts = GLctx.getSupportedExtensions() || [];
        exts = exts.concat(exts.map(e => "GL_" + e));
        return exts
    }
};

function _glActiveTexture(x0) {
    GLctx.activeTexture(x0)
}
var _glAttachShader = (program, shader) => {
    GLctx.attachShader(GL.programs[program], GL.shaders[shader])
};
var _glBindBuffer = (target, buffer) => {
    if (target == 35051) {
        GLctx.currentPixelPackBufferBinding = buffer
    } else if (target == 35052) {
        GLctx.currentPixelUnpackBufferBinding = buffer
    }
    GLctx.bindBuffer(target, GL.buffers[buffer])
};
var _glBindFramebuffer = (target, framebuffer) => {
    GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer])
};
var _glBindRenderbuffer = (target, renderbuffer) => {
    GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer])
};
var _glBindTexture = (target, texture) => {
    GLctx.bindTexture(target, GL.textures[texture])
};

function _glBlendFunc(x0, x1) {
    GLctx.blendFunc(x0, x1)
}
var _glBufferData = (target, size, data, usage) => {
    if (GL.currentContext.version >= 2) {
        if (data && size) {
            GLctx.bufferData(target, HEAPU8, usage, data, size)
        } else {
            GLctx.bufferData(target, size, usage)
        }
    } else {
        GLctx.bufferData(target, data ? HEAPU8.subarray(data, data + size) : size, usage)
    }
};

function _glCheckFramebufferStatus(x0) {
    return GLctx.checkFramebufferStatus(x0)
}

function _glClear(x0) {
    GLctx.clear(x0)
}

function _glClearColor(x0, x1, x2, x3) {
    GLctx.clearColor(x0, x1, x2, x3)
}
var _glCompileShader = shader => {
    GLctx.compileShader(GL.shaders[shader])
};
var _glCreateProgram = () => {
    var id = GL.getNewId(GL.programs);
    var program = GLctx.createProgram();
    program.name = id;
    program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
    program.uniformIdCounter = 1;
    GL.programs[id] = program;
    return id
};
var _glCreateShader = shaderType => {
    var id = GL.getNewId(GL.shaders);
    GL.shaders[id] = GLctx.createShader(shaderType);
    return id
};
var _glDeleteBuffers = (n, buffers) => {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[buffers + i * 4 >> 2];
        var buffer = GL.buffers[id];
        if (!buffer) continue;
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
        if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
        if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0
    }
};
var _glDeleteFramebuffers = (n, framebuffers) => {
    for (var i = 0; i < n; ++i) {
        var id = HEAP32[framebuffers + i * 4 >> 2];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue;
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null
    }
};
var _glDeleteRenderbuffers = (n, renderbuffers) => {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[renderbuffers + i * 4 >> 2];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue;
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null
    }
};
var _glDeleteTextures = (n, textures) => {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[textures + i * 4 >> 2];
        var texture = GL.textures[id];
        if (!texture) continue;
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null
    }
};

function _glDepthFunc(x0) {
    GLctx.depthFunc(x0)
}
var _glDepthMask = flag => {
    GLctx.depthMask(!!flag)
};

function _glDisable(x0) {
    GLctx.disable(x0)
}
var _glDisableVertexAttribArray = index => {
    GLctx.disableVertexAttribArray(index)
};
var _glDrawArrays = (mode, first, count) => {
    GLctx.drawArrays(mode, first, count)
};

function _glEnable(x0) {
    GLctx.enable(x0)
}
var _glEnableVertexAttribArray = index => {
    GLctx.enableVertexAttribArray(index)
};
var _glFramebufferRenderbuffer = (target, attachment, renderbuffertarget, renderbuffer) => {
    GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer])
};
var _glFramebufferTexture2D = (target, attachment, textarget, texture, level) => {
    GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level)
};
var __glGenObject = (n, buffers, createFunction, objectTable) => {
    for (var i = 0; i < n; i++) {
        var buffer = GLctx[createFunction]();
        var id = buffer && GL.getNewId(objectTable);
        if (buffer) {
            buffer.name = id;
            objectTable[id] = buffer
        } else {
            GL.recordError(1282)
        }
        HEAP32[buffers + i * 4 >> 2] = id
    }
};
var _glGenBuffers = (n, buffers) => {
    __glGenObject(n, buffers, "createBuffer", GL.buffers)
};
var _glGenFramebuffers = (n, ids) => {
    __glGenObject(n, ids, "createFramebuffer", GL.framebuffers)
};
var _glGenRenderbuffers = (n, renderbuffers) => {
    __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers)
};
var _glGenTextures = (n, textures) => {
    __glGenObject(n, textures, "createTexture", GL.textures)
};
var _glGetAttribLocation = (program, name) => GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));
var writeI53ToI64 = (ptr, num) => {
    HEAPU32[ptr >> 2] = num;
    var lower = HEAPU32[ptr >> 2];
    HEAPU32[ptr + 4 >> 2] = (num - lower) / 4294967296
};
var emscriptenWebGLGet = (name_, p, type) => {
    if (!p) {
        GL.recordError(1281);
        return
    }
    var ret = undefined;
    switch (name_) {
        case 36346:
            ret = 1;
            break;
        case 36344:
            if (type != 0 && type != 1) {
                GL.recordError(1280)
            }
            return;
        case 34814:
        case 36345:
            ret = 0;
            break;
        case 34466:
            var formats = GLctx.getParameter(34467);
            ret = formats ? formats.length : 0;
            break;
        case 33309:
            if (GL.currentContext.version < 2) {
                GL.recordError(1282);
                return
            }
            var exts = GLctx.getSupportedExtensions() || [];
            ret = 2 * exts.length;
            break;
        case 33307:
        case 33308:
            if (GL.currentContext.version < 2) {
                GL.recordError(1280);
                return
            }
            ret = name_ == 33307 ? 3 : 0;
            break
    }
    if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof result) {
            case "number":
                ret = result;
                break;
            case "boolean":
                ret = result ? 1 : 0;
                break;
            case "string":
                GL.recordError(1280);
                return;
            case "object":
                if (result === null) {
                    switch (name_) {
                        case 34964:
                        case 35725:
                        case 34965:
                        case 36006:
                        case 36007:
                        case 32873:
                        case 34229:
                        case 36662:
                        case 36663:
                        case 35053:
                        case 35055:
                        case 36010:
                        case 35097:
                        case 35869:
                        case 32874:
                        case 36389:
                        case 35983:
                        case 35368:
                        case 34068:
                            {
                                ret = 0;
                                break
                            }
                        default:
                            {
                                GL.recordError(1280);
                                return
                            }
                    }
                } else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
                    for (var i = 0; i < result.length; ++i) {
                        switch (type) {
                            case 0:
                                HEAP32[p + i * 4 >> 2] = result[i];
                                break;
                            case 2:
                                HEAPF32[p + i * 4 >> 2] = result[i];
                                break;
                            case 4:
                                HEAP8[p + i >> 0] = result[i] ? 1 : 0;
                                break
                        }
                    }
                    return
                } else {
                    try {
                        ret = result.name | 0
                    } catch (e) {
                        GL.recordError(1280);
                        err(`GL_INVALID_ENUM in glGet${type}v: Unknown object returned from WebGL getParameter(${name_})! (error: ${e})`);
                        return
                    }
                }
                break;
            default:
                GL.recordError(1280);
                err(`GL_INVALID_ENUM in glGet${type}v: Native code calling glGet${type}v(${name_}) and it returns ${result} of type ${typeof result}!`);
                return
        }
    }
    switch (type) {
        case 1:
            writeI53ToI64(p, ret);
            break;
        case 0:
            HEAP32[p >> 2] = ret;
            break;
        case 2:
            HEAPF32[p >> 2] = ret;
            break;
        case 4:
            HEAP8[p >> 0] = ret ? 1 : 0;
            break
    }
};
var _glGetIntegerv = (name_, p) => emscriptenWebGLGet(name_, p, 0);
var _glGetProgramInfoLog = (program, maxLength, length, infoLog) => {
    var log = GLctx.getProgramInfoLog(GL.programs[program]);
    if (log === null) log = "(unknown error)";
    var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
};
var _glGetProgramiv = (program, pname, p) => {
    if (!p) {
        GL.recordError(1281);
        return
    }
    if (program >= GL.counter) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    if (pname == 35716) {
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = "(unknown error)";
        HEAP32[p >> 2] = log.length + 1
    } else if (pname == 35719) {
        if (!program.maxUniformLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
                program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length + 1)
            }
        }
        HEAP32[p >> 2] = program.maxUniformLength
    } else if (pname == 35722) {
        if (!program.maxAttributeLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35721); ++i) {
                program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length + 1)
            }
        }
        HEAP32[p >> 2] = program.maxAttributeLength
    } else if (pname == 35381) {
        if (!program.maxUniformBlockNameLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35382); ++i) {
                program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length + 1)
            }
        }
        HEAP32[p >> 2] = program.maxUniformBlockNameLength
    } else {
        HEAP32[p >> 2] = GLctx.getProgramParameter(program, pname)
    }
};
var _glGetShaderInfoLog = (shader, maxLength, length, infoLog) => {
    var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
    if (log === null) log = "(unknown error)";
    var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
};
var _glGetShaderiv = (shader, pname, p) => {
    if (!p) {
        GL.recordError(1281);
        return
    }
    if (pname == 35716) {
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = "(unknown error)";
        var logLength = log ? log.length + 1 : 0;
        HEAP32[p >> 2] = logLength
    } else if (pname == 35720) {
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        var sourceLength = source ? source.length + 1 : 0;
        HEAP32[p >> 2] = sourceLength
    } else {
        HEAP32[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname)
    }
};
var jstoi_q = str => parseInt(str);
var webglGetLeftBracePos = name => name.slice(-1) == "]" && name.lastIndexOf("[");
var webglPrepareUniformLocationsBeforeFirstUse = program => {
    var uniformLocsById = program.uniformLocsById,
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName,
        i, j;
    if (!uniformLocsById) {
        program.uniformLocsById = uniformLocsById = {};
        program.uniformArrayNamesById = {};
        for (i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
            var u = GLctx.getActiveUniform(program, i);
            var nm = u.name;
            var sz = u.size;
            var lb = webglGetLeftBracePos(nm);
            var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
            var id = program.uniformIdCounter;
            program.uniformIdCounter += sz;
            uniformSizeAndIdsByName[arrayName] = [sz, id];
            for (j = 0; j < sz; ++j) {
                uniformLocsById[id] = j;
                program.uniformArrayNamesById[id++] = arrayName
            }
        }
    }
};
var _glGetUniformLocation = (program, name) => {
    name = UTF8ToString(name);
    if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById;
        var arrayIndex = 0;
        var uniformBaseName = name;
        var leftBrace = webglGetLeftBracePos(name);
        if (leftBrace > 0) {
            arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
            uniformBaseName = name.slice(0, leftBrace)
        }
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
            arrayIndex += sizeAndId[1];
            if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name)) {
                return arrayIndex
            }
        }
    } else {
        GL.recordError(1281)
    }
    return -1
};
var _glLinkProgram = program => {
    program = GL.programs[program];
    GLctx.linkProgram(program);
    program.uniformLocsById = 0;
    program.uniformSizeAndIdsByName = {}
};
var computeUnpackAlignedImageSize = (width, height, sizePerPixel, alignment) => {
    function roundedToNextMultipleOf(x, y) {
        return x + y - 1 & -y
    }
    var plainRowSize = width * sizePerPixel;
    var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
    return height * alignedRowSize
};
var colorChannelsInGlTextureFormat = format => {
    var colorChannels = {
        5: 3,
        6: 4,
        8: 2,
        29502: 3,
        29504: 4,
        26917: 2,
        26918: 2,
        29846: 3,
        29847: 4
    };
    return colorChannels[format - 6402] || 1
};
var heapObjectForWebGLType = type => {
    type -= 5120;
    if (type == 0) return HEAP8;
    if (type == 1) return HEAPU8;
    if (type == 2) return HEAP16;
    if (type == 4) return HEAP32;
    if (type == 6) return HEAPF32;
    if (type == 5 || type == 28922 || type == 28520 || type == 30779 || type == 30782) return HEAPU32;
    return HEAPU16
};
var heapAccessShiftForWebGLHeap = heap => 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
var emscriptenWebGLGetTexPixelData = (type, format, width, height, pixels, internalFormat) => {
    var heap = heapObjectForWebGLType(type);
    var shift = heapAccessShiftForWebGLHeap(heap);
    var byteSize = 1 << shift;
    var sizePerPixel = colorChannelsInGlTextureFormat(format) * byteSize;
    var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
    return heap.subarray(pixels >> shift, pixels + bytes >> shift)
};
var _glReadPixels = (x, y, width, height, format, type, pixels) => {
    if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelPackBufferBinding) {
            GLctx.readPixels(x, y, width, height, format, type, pixels)
        } else {
            var heap = heapObjectForWebGLType(type);
            GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        }
        return
    }
    var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
    if (!pixelData) {
        GL.recordError(1280);
        return
    }
    GLctx.readPixels(x, y, width, height, format, type, pixelData)
};

function _glRenderbufferStorage(x0, x1, x2, x3) {
    GLctx.renderbufferStorage(x0, x1, x2, x3)
}
var _glShaderSource = (shader, count, string, length) => {
    var source = GL.getSource(shader, count, string, length);
    GLctx.shaderSource(GL.shaders[shader], source)
};
var _glTexImage2D = (target, level, internalFormat, width, height, border, format, type, pixels) => {
    if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels)
        } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        } else {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null)
        }
        return
    }
    GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null)
};

function _glTexParameterf(x0, x1, x2) {
    GLctx.texParameterf(x0, x1, x2)
}

function _glTexParameteri(x0, x1, x2) {
    GLctx.texParameteri(x0, x1, x2)
}
var _glTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, type, pixels) => {
    if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels)
        } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        } else {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null)
        }
        return
    }
    var pixelData = null;
    if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
    GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData)
};
var webglGetUniformLocation = location => {
    var p = GLctx.currentProgram;
    if (p) {
        var webglLoc = p.uniformLocsById[location];
        if (typeof webglLoc == "number") {
            p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? `[${webglLoc}]` : ""))
        }
        return webglLoc
    } else {
        GL.recordError(1282)
    }
};
var _glUniform1f = (location, v0) => {
    GLctx.uniform1f(webglGetUniformLocation(location), v0)
};
var _glUniform1i = (location, v0) => {
    GLctx.uniform1i(webglGetUniformLocation(location), v0)
};
var _glUniform2f = (location, v0, v1) => {
    GLctx.uniform2f(webglGetUniformLocation(location), v0, v1)
};
var miniTempWebGLFloatBuffers = [];
var _glUniform3fv = (location, count, value) => {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniform3fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 3);
        return
    }
    if (count <= 96) {
        var view = miniTempWebGLFloatBuffers[3 * count - 1];
        for (var i = 0; i < 3 * count; i += 3) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 12 >> 2)
    }
    GLctx.uniform3fv(webglGetUniformLocation(location), view)
};
var _glUniformMatrix4fv = (location, count, transpose, value) => {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 16);
        return
    }
    if (count <= 18) {
        var view = miniTempWebGLFloatBuffers[16 * count - 1];
        var heap = HEAPF32;
        value >>= 2;
        for (var i = 0; i < 16 * count; i += 16) {
            var dst = value + i;
            view[i] = heap[dst];
            view[i + 1] = heap[dst + 1];
            view[i + 2] = heap[dst + 2];
            view[i + 3] = heap[dst + 3];
            view[i + 4] = heap[dst + 4];
            view[i + 5] = heap[dst + 5];
            view[i + 6] = heap[dst + 6];
            view[i + 7] = heap[dst + 7];
            view[i + 8] = heap[dst + 8];
            view[i + 9] = heap[dst + 9];
            view[i + 10] = heap[dst + 10];
            view[i + 11] = heap[dst + 11];
            view[i + 12] = heap[dst + 12];
            view[i + 13] = heap[dst + 13];
            view[i + 14] = heap[dst + 14];
            view[i + 15] = heap[dst + 15]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 64 >> 2)
    }
    GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view)
};
var _glUseProgram = program => {
    program = GL.programs[program];
    GLctx.useProgram(program);
    GLctx.currentProgram = program
};
var _glVertexAttribPointer = (index, size, type, normalized, stride, ptr) => {
    GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr)
};

function _glViewport(x0, x1, x2, x3) {
    GLctx.viewport(x0, x1, x2, x3)
}

function GLFW_Window(id, width, height, title, monitor, share) {
    this.id = id;
    this.x = 0;
    this.y = 0;
    this.fullscreen = false;
    this.storedX = 0;
    this.storedY = 0;
    this.width = width;
    this.height = height;
    this.storedWidth = width;
    this.storedHeight = height;
    this.title = title;
    this.monitor = monitor;
    this.share = share;
    this.attributes = GLFW.hints;
    this.inputModes = {
        208897: 212993,
        208898: 0,
        208899: 0
    };
    this.buttons = 0;
    this.keys = new Array;
    this.domKeys = new Array;
    this.shouldClose = 0;
    this.title = null;
    this.windowPosFunc = 0;
    this.windowSizeFunc = 0;
    this.windowCloseFunc = 0;
    this.windowRefreshFunc = 0;
    this.windowFocusFunc = 0;
    this.windowIconifyFunc = 0;
    this.windowMaximizeFunc = 0;
    this.framebufferSizeFunc = 0;
    this.windowContentScaleFunc = 0;
    this.mouseButtonFunc = 0;
    this.cursorPosFunc = 0;
    this.cursorEnterFunc = 0;
    this.scrollFunc = 0;
    this.dropFunc = 0;
    this.keyFunc = 0;
    this.charFunc = 0;
    this.userptr = 0
}
var _emscripten_set_window_title = title => document.title = UTF8ToString(title);
var GLFW = {
    WindowFromId: id => {
        if (id <= 0 || !GLFW.windows) return null;
        return GLFW.windows[id - 1]
    },
    joystickFunc: 0,
    errorFunc: 0,
    monitorFunc: 0,
    active: null,
    scale: null,
    windows: null,
    monitors: null,
    monitorString: null,
    versionString: null,
    initialTime: null,
    extensions: null,
    hints: null,
    defaultHints: {
        131073: 0,
        131074: 0,
        131075: 1,
        131076: 1,
        131077: 1,
        131082: 0,
        135169: 8,
        135170: 8,
        135171: 8,
        135172: 8,
        135173: 24,
        135174: 8,
        135175: 0,
        135176: 0,
        135177: 0,
        135178: 0,
        135179: 0,
        135180: 0,
        135181: 0,
        135182: 0,
        135183: 0,
        139265: 196609,
        139266: 1,
        139267: 0,
        139268: 0,
        139269: 0,
        139270: 0,
        139271: 0,
        139272: 0,
        139276: 0
    },
    DOMToGLFWKeyCode: keycode => {
        switch (keycode) {
            case 32:
                return 32;
            case 222:
                return 39;
            case 188:
                return 44;
            case 173:
                return 45;
            case 189:
                return 45;
            case 190:
                return 46;
            case 191:
                return 47;
            case 48:
                return 48;
            case 49:
                return 49;
            case 50:
                return 50;
            case 51:
                return 51;
            case 52:
                return 52;
            case 53:
                return 53;
            case 54:
                return 54;
            case 55:
                return 55;
            case 56:
                return 56;
            case 57:
                return 57;
            case 59:
                return 59;
            case 61:
                return 61;
            case 187:
                return 61;
            case 65:
                return 65;
            case 66:
                return 66;
            case 67:
                return 67;
            case 68:
                return 68;
            case 69:
                return 69;
            case 70:
                return 70;
            case 71:
                return 71;
            case 72:
                return 72;
            case 73:
                return 73;
            case 74:
                return 74;
            case 75:
                return 75;
            case 76:
                return 76;
            case 77:
                return 77;
            case 78:
                return 78;
            case 79:
                return 79;
            case 80:
                return 80;
            case 81:
                return 81;
            case 82:
                return 82;
            case 83:
                return 83;
            case 84:
                return 84;
            case 85:
                return 85;
            case 86:
                return 86;
            case 87:
                return 87;
            case 88:
                return 88;
            case 89:
                return 89;
            case 90:
                return 90;
            case 219:
                return 91;
            case 220:
                return 92;
            case 221:
                return 93;
            case 192:
                return 96;
            case 27:
                return 256;
            case 13:
                return 257;
            case 9:
                return 258;
            case 8:
                return 259;
            case 45:
                return 260;
            case 46:
                return 261;
            case 39:
                return 262;
            case 37:
                return 263;
            case 40:
                return 264;
            case 38:
                return 265;
            case 33:
                return 266;
            case 34:
                return 267;
            case 36:
                return 268;
            case 35:
                return 269;
            case 20:
                return 280;
            case 145:
                return 281;
            case 144:
                return 282;
            case 44:
                return 283;
            case 19:
                return 284;
            case 112:
                return 290;
            case 113:
                return 291;
            case 114:
                return 292;
            case 115:
                return 293;
            case 116:
                return 294;
            case 117:
                return 295;
            case 118:
                return 296;
            case 119:
                return 297;
            case 120:
                return 298;
            case 121:
                return 299;
            case 122:
                return 300;
            case 123:
                return 301;
            case 124:
                return 302;
            case 125:
                return 303;
            case 126:
                return 304;
            case 127:
                return 305;
            case 128:
                return 306;
            case 129:
                return 307;
            case 130:
                return 308;
            case 131:
                return 309;
            case 132:
                return 310;
            case 133:
                return 311;
            case 134:
                return 312;
            case 135:
                return 313;
            case 136:
                return 314;
            case 96:
                return 320;
            case 97:
                return 321;
            case 98:
                return 322;
            case 99:
                return 323;
            case 100:
                return 324;
            case 101:
                return 325;
            case 102:
                return 326;
            case 103:
                return 327;
            case 104:
                return 328;
            case 105:
                return 329;
            case 110:
                return 330;
            case 111:
                return 331;
            case 106:
                return 332;
            case 109:
                return 333;
            case 107:
                return 334;
            case 16:
                return 340;
            case 17:
                return 341;
            case 18:
                return 342;
            case 91:
                return 343;
            case 93:
                return 348;
            default:
                return -1
        }
    },
    getModBits: win => {
        var mod = 0;
        if (win.keys[340]) mod |= 1;
        if (win.keys[341]) mod |= 2;
        if (win.keys[342]) mod |= 4;
        if (win.keys[343]) mod |= 8;
        return mod
    },
    onKeyPress: event => {
        if (!GLFW.active || !GLFW.active.charFunc) return;
        if (event.ctrlKey || event.metaKey) return;
        var charCode = event.charCode;
        if (charCode == 0 || charCode >= 0 && charCode <= 31) return;
        getWasmTableEntry(GLFW.active.charFunc)(GLFW.active.id, charCode)
    },
    onKeyChanged: (keyCode, status) => {
        if (!GLFW.active) return;
        var key = GLFW.DOMToGLFWKeyCode(keyCode);
        if (key == -1) return;
        var repeat = status && GLFW.active.keys[key];
        GLFW.active.keys[key] = status;
        GLFW.active.domKeys[keyCode] = status;
        if (GLFW.active.keyFunc) {
            if (repeat) status = 2;
            getWasmTableEntry(GLFW.active.keyFunc)(GLFW.active.id, key, keyCode, status, GLFW.getModBits(GLFW.active))
        }
    },
    onGamepadConnected: event => {
        GLFW.refreshJoysticks()
    },
    onGamepadDisconnected: event => {
        GLFW.refreshJoysticks()
    },
    onKeydown: event => {
        GLFW.onKeyChanged(event.keyCode, 1);
        if (event.keyCode === 8 || event.keyCode === 9) {
            event.preventDefault()
        }
    },
    onKeyup: event => {
        GLFW.onKeyChanged(event.keyCode, 0)
    },
    onBlur: event => {
        if (!GLFW.active) return;
        for (var i = 0; i < GLFW.active.domKeys.length; ++i) {
            if (GLFW.active.domKeys[i]) {
                GLFW.onKeyChanged(i, 0)
            }
        }
    },
    onMousemove: event => {
        if (!GLFW.active) return;
        Browser.calculateMouseEvent(event);
        if (event.target != Module["canvas"] || !GLFW.active.cursorPosFunc) return;
        if (GLFW.active.cursorPosFunc) {
            getWasmTableEntry(GLFW.active.cursorPosFunc)(GLFW.active.id, Browser.mouseX, Browser.mouseY)
        }
    },
    DOMToGLFWMouseButton: event => {
        var eventButton = event["button"];
        if (eventButton > 0) {
            if (eventButton == 1) {
                eventButton = 2
            } else {
                eventButton = 1
            }
        }
        return eventButton
    },
    onMouseenter: event => {
        if (!GLFW.active) return;
        if (event.target != Module["canvas"]) return;
        if (GLFW.active.cursorEnterFunc) {
            getWasmTableEntry(GLFW.active.cursorEnterFunc)(GLFW.active.id, 1)
        }
    },
    onMouseleave: event => {
        if (!GLFW.active) return;
        if (event.target != Module["canvas"]) return;
        if (GLFW.active.cursorEnterFunc) {
            getWasmTableEntry(GLFW.active.cursorEnterFunc)(GLFW.active.id, 0)
        }
    },
    onMouseButtonChanged: (event, status) => {
        if (!GLFW.active) return;
        Browser.calculateMouseEvent(event);
        if (event.target != Module["canvas"]) return;
        var eventButton = GLFW.DOMToGLFWMouseButton(event);
        if (status == 1) {
            GLFW.active.buttons |= 1 << eventButton;
            try {
                event.target.setCapture()
            } catch (e) {}
        } else {
            GLFW.active.buttons &= ~(1 << eventButton)
        }
        if (GLFW.active.mouseButtonFunc) {
            getWasmTableEntry(GLFW.active.mouseButtonFunc)(GLFW.active.id, eventButton, status, GLFW.getModBits(GLFW.active))
        }
    },
    onMouseButtonDown: event => {
        if (!GLFW.active) return;
        GLFW.onMouseButtonChanged(event, 1)
    },
    onMouseButtonUp: event => {
        if (!GLFW.active) return;
        GLFW.onMouseButtonChanged(event, 0)
    },
    onMouseWheel: event => {
        var delta = -Browser.getMouseWheelDelta(event);
        delta = delta == 0 ? 0 : delta > 0 ? Math.max(delta, 1) : Math.min(delta, -1);
        GLFW.wheelPos += delta;
        if (!GLFW.active || !GLFW.active.scrollFunc || event.target != Module["canvas"]) return;
        var sx = 0;
        var sy = delta;
        if (event.type == "mousewheel") {
            sx = event.wheelDeltaX
        } else {
            sx = event.deltaX
        }
        getWasmTableEntry(GLFW.active.scrollFunc)(GLFW.active.id, sx, sy);
        event.preventDefault()
    },
    onCanvasResize: (width, height) => {
        if (!GLFW.active) return;
        var resizeNeeded = true;
        if (document["fullscreen"] || document["fullScreen"] || document["mozFullScreen"] || document["webkitIsFullScreen"]) {
            GLFW.active.storedX = GLFW.active.x;
            GLFW.active.storedY = GLFW.active.y;
            GLFW.active.storedWidth = GLFW.active.width;
            GLFW.active.storedHeight = GLFW.active.height;
            GLFW.active.x = GLFW.active.y = 0;
            GLFW.active.width = screen.width;
            GLFW.active.height = screen.height;
            GLFW.active.fullscreen = true
        } else if (GLFW.active.fullscreen == true) {
            GLFW.active.x = GLFW.active.storedX;
            GLFW.active.y = GLFW.active.storedY;
            GLFW.active.width = GLFW.active.storedWidth;
            GLFW.active.height = GLFW.active.storedHeight;
            GLFW.active.fullscreen = false
        } else if (GLFW.active.width != width || GLFW.active.height != height) {
            GLFW.active.width = width;
            GLFW.active.height = height
        } else {
            resizeNeeded = false
        }
        if (resizeNeeded) {
            Browser.setCanvasSize(GLFW.active.width, GLFW.active.height, true);
            GLFW.onWindowSizeChanged();
            GLFW.onFramebufferSizeChanged()
        }
    },
    onWindowSizeChanged: () => {
        if (!GLFW.active) return;
        if (GLFW.active.windowSizeFunc) {
            getWasmTableEntry(GLFW.active.windowSizeFunc)(GLFW.active.id, GLFW.active.width, GLFW.active.height)
        }
    },
    onFramebufferSizeChanged: () => {
        if (!GLFW.active) return;
        if (GLFW.active.framebufferSizeFunc) {
            getWasmTableEntry(GLFW.active.framebufferSizeFunc)(GLFW.active.id, GLFW.active.width, GLFW.active.height)
        }
    },
    onWindowContentScaleChanged: scale => {
        GLFW.scale = scale;
        if (!GLFW.active) return;
        if (GLFW.active.windowContentScaleFunc) {
            getWasmTableEntry(GLFW.active.windowContentScaleFunc)(GLFW.active.id, GLFW.scale, GLFW.scale)
        }
    },
    getTime: () => _emscripten_get_now() / 1e3,
    setWindowTitle: (winid, title) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        win.title = title;
        if (GLFW.active.id == win.id) {
            _emscripten_set_window_title(title)
        }
    },
    setJoystickCallback: cbfun => {
        var prevcbfun = GLFW.joystickFunc;
        GLFW.joystickFunc = cbfun;
        GLFW.refreshJoysticks();
        return prevcbfun
    },
    joys: {},
    lastGamepadState: [],
    lastGamepadStateFrame: null,
    refreshJoysticks: () => {
        if (Browser.mainLoop.currentFrameNumber !== GLFW.lastGamepadStateFrame || !Browser.mainLoop.currentFrameNumber) {
            GLFW.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [];
            GLFW.lastGamepadStateFrame = Browser.mainLoop.currentFrameNumber;
            for (var joy = 0; joy < GLFW.lastGamepadState.length; ++joy) {
                var gamepad = GLFW.lastGamepadState[joy];
                if (gamepad) {
                    if (!GLFW.joys[joy]) {
                        out("glfw joystick connected:", joy);
                        GLFW.joys[joy] = {
                            id: stringToNewUTF8(gamepad.id),
                            buttonsCount: gamepad.buttons.length,
                            axesCount: gamepad.axes.length,
                            buttons: _malloc(gamepad.buttons.length),
                            axes: _malloc(gamepad.axes.length * 4)
                        };
                        if (GLFW.joystickFunc) {
                            getWasmTableEntry(GLFW.joystickFunc)(joy, 262145)
                        }
                    }
                    var data = GLFW.joys[joy];
                    for (var i = 0; i < gamepad.buttons.length; ++i) {
                        HEAP8[data.buttons + i >> 0] = gamepad.buttons[i].pressed
                    }
                    for (var i = 0; i < gamepad.axes.length; ++i) {
                        HEAPF32[data.axes + i * 4 >> 2] = gamepad.axes[i]
                    }
                } else {
                    if (GLFW.joys[joy]) {
                        out("glfw joystick disconnected", joy);
                        if (GLFW.joystickFunc) {
                            getWasmTableEntry(GLFW.joystickFunc)(joy, 262146)
                        }
                        _free(GLFW.joys[joy].id);
                        _free(GLFW.joys[joy].buttons);
                        _free(GLFW.joys[joy].axes);
                        delete GLFW.joys[joy]
                    }
                }
            }
        }
    },
    setKeyCallback: (winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.keyFunc;
        win.keyFunc = cbfun;
        return prevcbfun
    },
    setCharCallback: (winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.charFunc;
        win.charFunc = cbfun;
        return prevcbfun
    },
    setMouseButtonCallback: (winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.mouseButtonFunc;
        win.mouseButtonFunc = cbfun;
        return prevcbfun
    },
    setCursorPosCallback: (winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.cursorPosFunc;
        win.cursorPosFunc = cbfun;
        return prevcbfun
    },
    setScrollCallback: (winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.scrollFunc;
        win.scrollFunc = cbfun;
        return prevcbfun
    },
    setDropCallback: (winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.dropFunc;
        win.dropFunc = cbfun;
        return prevcbfun
    },
    onDrop: event => {
        if (!GLFW.active || !GLFW.active.dropFunc) return;
        if (!event.dataTransfer || !event.dataTransfer.files || event.dataTransfer.files.length == 0) return;
        event.preventDefault();
        var filenames = _malloc(event.dataTransfer.files.length * 4);
        var filenamesArray = [];
        var count = event.dataTransfer.files.length;
        var written = 0;
        var drop_dir = ".glfw_dropped_files";
        FS.createPath("/", drop_dir);

        function save(file) {
            var path = "/" + drop_dir + "/" + file.name.replace(/\//g, "_");
            var reader = new FileReader;
            reader.onloadend = e => {
                if (reader.readyState != 2) {
                    ++written;
                    out("failed to read dropped file: " + file.name + ": " + reader.error);
                    return
                }
                var data = e.target.result;
                FS.writeFile(path, new Uint8Array(data));
                if (++written === count) {
                    getWasmTableEntry(GLFW.active.dropFunc)(GLFW.active.id, count, filenames);
                    for (var i = 0; i < filenamesArray.length; ++i) {
                        _free(filenamesArray[i])
                    }
                    _free(filenames)
                }
            };
            reader.readAsArrayBuffer(file);
            var filename = stringToNewUTF8(path);
            filenamesArray.push(filename);
            HEAPU32[filenames + i * 4 >> 2] = filename
        }
        for (var i = 0; i < count; ++i) {
            save(event.dataTransfer.files[i])
        }
        return false
    },
    onDragover: event => {
        if (!GLFW.active || !GLFW.active.dropFunc) return;
        event.preventDefault();
        return false
    },
    setWindowSizeCallback: (winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowSizeFunc;
        win.windowSizeFunc = cbfun;
        return prevcbfun
    },
    setWindowCloseCallback: (winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowCloseFunc;
        win.windowCloseFunc = cbfun;
        return prevcbfun
    },
    setWindowRefreshCallback: (winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowRefreshFunc;
        win.windowRefreshFunc = cbfun;
        return prevcbfun
    },
    onClickRequestPointerLock: e => {
        if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
            Module["canvas"].requestPointerLock();
            e.preventDefault()
        }
    },
    setInputMode: (winid, mode, value) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        switch (mode) {
            case 208897:
                {
                    switch (value) {
                        case 212993:
                            {
                                win.inputModes[mode] = value;Module["canvas"].removeEventListener("click", GLFW.onClickRequestPointerLock, true);Module["canvas"].exitPointerLock();
                                break
                            }
                        case 212994:
                            {
                                err("glfwSetInputMode called with GLFW_CURSOR_HIDDEN value not implemented");
                                break
                            }
                        case 212995:
                            {
                                win.inputModes[mode] = value;Module["canvas"].addEventListener("click", GLFW.onClickRequestPointerLock, true);Module["canvas"].requestPointerLock();
                                break
                            }
                        default:
                            {
                                err(`glfwSetInputMode called with unknown value parameter value: ${value}`);
                                break
                            }
                    }
                    break
                }
            case 208898:
                {
                    err("glfwSetInputMode called with GLFW_STICKY_KEYS mode not implemented");
                    break
                }
            case 208899:
                {
                    err("glfwSetInputMode called with GLFW_STICKY_MOUSE_BUTTONS mode not implemented");
                    break
                }
            case 208900:
                {
                    err("glfwSetInputMode called with GLFW_LOCK_KEY_MODS mode not implemented");
                    break
                }
            case 3342341:
                {
                    err("glfwSetInputMode called with GLFW_RAW_MOUSE_MOTION mode not implemented");
                    break
                }
            default:
                {
                    err(`glfwSetInputMode called with unknown mode parameter value: ${mode}`);
                    break
                }
        }
    },
    getKey: (winid, key) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return 0;
        return win.keys[key]
    },
    getMouseButton: (winid, button) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return 0;
        return (win.buttons & 1 << button) > 0
    },
    getCursorPos: (winid, x, y) => {
        HEAPF64[x >> 3] = Browser.mouseX;
        HEAPF64[y >> 3] = Browser.mouseY
    },
    getMousePos: (winid, x, y) => {
        HEAP32[x >> 2] = Browser.mouseX;
        HEAP32[y >> 2] = Browser.mouseY
    },
    setCursorPos: (winid, x, y) => {},
    getWindowPos: (winid, x, y) => {
        var wx = 0;
        var wy = 0;
        var win = GLFW.WindowFromId(winid);
        if (win) {
            wx = win.x;
            wy = win.y
        }
        if (x) {
            HEAP32[x >> 2] = wx
        }
        if (y) {
            HEAP32[y >> 2] = wy
        }
    },
    setWindowPos: (winid, x, y) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        win.x = x;
        win.y = y
    },
    getWindowSize: (winid, width, height) => {
        var ww = 0;
        var wh = 0;
        var win = GLFW.WindowFromId(winid);
        if (win) {
            ww = win.width;
            wh = win.height
        }
        if (width) {
            HEAP32[width >> 2] = ww
        }
        if (height) {
            HEAP32[height >> 2] = wh
        }
    },
    setWindowSize: (winid, width, height) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        if (GLFW.active.id == win.id) {
            Browser.setCanvasSize(width, height);
            win.width = width;
            win.height = height
        }
        if (win.windowSizeFunc) {
            getWasmTableEntry(win.windowSizeFunc)(win.id, width, height)
        }
    },
    createWindow: (width, height, title, monitor, share) => {
        var i, id;
        for (i = 0; i < GLFW.windows.length && GLFW.windows[i] !== null; i++) {}
        if (i > 0) throw "glfwCreateWindow only supports one window at time currently";
        id = i + 1;
        if (width <= 0 || height <= 0) return 0;
        if (monitor) {
            Browser.requestFullscreen()
        } else {
            Browser.setCanvasSize(width, height)
        }
        for (i = 0; i < GLFW.windows.length && GLFW.windows[i] == null; i++) {}
        var useWebGL = GLFW.hints[139265] > 0;
        if (i == GLFW.windows.length) {
            if (useWebGL) {
                var contextAttributes = {
                    antialias: GLFW.hints[135181] > 1,
                    depth: GLFW.hints[135173] > 0,
                    stencil: GLFW.hints[135174] > 0,
                    alpha: GLFW.hints[135172] > 0
                };
                Module.ctx = Browser.createContext(Module["canvas"], true, true, contextAttributes)
            } else {
                Browser.init()
            }
        }
        if (!Module.ctx && useWebGL) return 0;
        var win = new GLFW_Window(id, width, height, title, monitor, share);
        if (id - 1 == GLFW.windows.length) {
            GLFW.windows.push(win)
        } else {
            GLFW.windows[id - 1] = win
        }
        GLFW.active = win;
        return win.id
    },
    destroyWindow: winid => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        if (win.windowCloseFunc) {
            getWasmTableEntry(win.windowCloseFunc)(win.id)
        }
        GLFW.windows[win.id - 1] = null;
        if (GLFW.active.id == win.id) GLFW.active = null;
        for (var i = 0; i < GLFW.windows.length; i++)
            if (GLFW.windows[i] !== null) return;
        Module.ctx = Browser.destroyContext(Module["canvas"], true, true)
    },
    swapBuffers: winid => {},
    GLFW2ParamToGLFW3Param: param => {
        var table = {
            196609: 0,
            196610: 0,
            196611: 0,
            196612: 0,
            196613: 0,
            196614: 0,
            131073: 0,
            131074: 0,
            131075: 0,
            131076: 0,
            131077: 135169,
            131078: 135170,
            131079: 135171,
            131080: 135172,
            131081: 135173,
            131082: 135174,
            131083: 135183,
            131084: 135175,
            131085: 135176,
            131086: 135177,
            131087: 135178,
            131088: 135179,
            131089: 135180,
            131090: 0,
            131091: 135181,
            131092: 139266,
            131093: 139267,
            131094: 139270,
            131095: 139271,
            131096: 139272
        };
        return table[param]
    }
};
var _glfwCreateWindow = (width, height, title, monitor, share) => GLFW.createWindow(width, height, title, monitor, share);
var _glfwGetPrimaryMonitor = () => 1;
var _glfwGetVideoMode = monitor => 0;
var _emscripten_get_device_pixel_ratio = () => typeof devicePixelRatio == "number" && devicePixelRatio || 1;
var _glfwInit = () => {
    if (GLFW.windows) return 1;
    GLFW.initialTime = GLFW.getTime();
    GLFW.hints = GLFW.defaultHints;
    GLFW.windows = new Array;
    GLFW.active = null;
    GLFW.scale = _emscripten_get_device_pixel_ratio();
    window.addEventListener("gamepadconnected", GLFW.onGamepadConnected, true);
    window.addEventListener("gamepaddisconnected", GLFW.onGamepadDisconnected, true);
    window.addEventListener("keydown", GLFW.onKeydown, true);
    window.addEventListener("keypress", GLFW.onKeyPress, true);
    window.addEventListener("keyup", GLFW.onKeyup, true);
    window.addEventListener("blur", GLFW.onBlur, true);
    (function updatePixelRatio() {
        window.matchMedia("(resolution: " + window.devicePixelRatio + "dppx)").addEventListener("change", updatePixelRatio, {
            once: true
        });
        GLFW.onWindowContentScaleChanged(_emscripten_get_device_pixel_ratio())
    })();
    Module["canvas"].addEventListener("touchmove", GLFW.onMousemove, true);
    Module["canvas"].addEventListener("touchstart", GLFW.onMouseButtonDown, true);
    Module["canvas"].addEventListener("touchcancel", GLFW.onMouseButtonUp, true);
    Module["canvas"].addEventListener("touchend", GLFW.onMouseButtonUp, true);
    Module["canvas"].addEventListener("mousemove", GLFW.onMousemove, true);
    Module["canvas"].addEventListener("mousedown", GLFW.onMouseButtonDown, true);
    Module["canvas"].addEventListener("mouseup", GLFW.onMouseButtonUp, true);
    Module["canvas"].addEventListener("wheel", GLFW.onMouseWheel, true);
    Module["canvas"].addEventListener("mousewheel", GLFW.onMouseWheel, true);
    Module["canvas"].addEventListener("mouseenter", GLFW.onMouseenter, true);
    Module["canvas"].addEventListener("mouseleave", GLFW.onMouseleave, true);
    Module["canvas"].addEventListener("drop", GLFW.onDrop, true);
    Module["canvas"].addEventListener("dragover", GLFW.onDragover, true);
    Browser.resizeListeners.push((width, height) => {
        GLFW.onCanvasResize(width, height)
    });
    return 1
};
var _glfwMakeContextCurrent = winid => {};
var _glfwPollEvents = () => {};
var _glfwSetClipboardString = (win, string) => {};
var _glfwSetDropCallback = (winid, cbfun) => GLFW.setDropCallback(winid, cbfun);
var _glfwSetErrorCallback = cbfun => {
    var prevcbfun = GLFW.errorFunc;
    GLFW.errorFunc = cbfun;
    return prevcbfun
};
var _glfwSetKeyCallback = (winid, cbfun) => GLFW.setKeyCallback(winid, cbfun);
var _glfwSetScrollCallback = (winid, cbfun) => GLFW.setScrollCallback(winid, cbfun);
var _glfwSetWindowSizeCallback = (winid, cbfun) => GLFW.setWindowSizeCallback(winid, cbfun);
var _glfwSwapBuffers = winid => GLFW.swapBuffers(winid);
var _glfwSwapInterval = interval => {
    interval = Math.abs(interval);
    if (interval == 0) _emscripten_set_main_loop_timing(0, 0);
    else _emscripten_set_main_loop_timing(1, interval)
};
var _glfwTerminate = () => {
    window.removeEventListener("gamepadconnected", GLFW.onGamepadConnected, true);
    window.removeEventListener("gamepaddisconnected", GLFW.onGamepadDisconnected, true);
    window.removeEventListener("keydown", GLFW.onKeydown, true);
    window.removeEventListener("keypress", GLFW.onKeyPress, true);
    window.removeEventListener("keyup", GLFW.onKeyup, true);
    window.removeEventListener("blur", GLFW.onBlur, true);
    Module["canvas"].removeEventListener("touchmove", GLFW.onMousemove, true);
    Module["canvas"].removeEventListener("touchstart", GLFW.onMouseButtonDown, true);
    Module["canvas"].removeEventListener("touchcancel", GLFW.onMouseButtonUp, true);
    Module["canvas"].removeEventListener("touchend", GLFW.onMouseButtonUp, true);
    Module["canvas"].removeEventListener("mousemove", GLFW.onMousemove, true);
    Module["canvas"].removeEventListener("mousedown", GLFW.onMouseButtonDown, true);
    Module["canvas"].removeEventListener("mouseup", GLFW.onMouseButtonUp, true);
    Module["canvas"].removeEventListener("wheel", GLFW.onMouseWheel, true);
    Module["canvas"].removeEventListener("mousewheel", GLFW.onMouseWheel, true);
    Module["canvas"].removeEventListener("mouseenter", GLFW.onMouseenter, true);
    Module["canvas"].removeEventListener("mouseleave", GLFW.onMouseleave, true);
    Module["canvas"].removeEventListener("drop", GLFW.onDrop, true);
    Module["canvas"].removeEventListener("dragover", GLFW.onDragover, true);
    Module["canvas"].width = Module["canvas"].height = 1;
    GLFW.windows = null;
    GLFW.active = null
};
var _glfwWindowHint = (target, hint) => {
    GLFW.hints[target] = hint
};
var arraySum = (array, index) => {
    var sum = 0;
    for (var i = 0; i <= index; sum += array[i++]) {}
    return sum
};
var MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var addDays = (date, days) => {
    var newDate = new Date(date.getTime());
    while (days > 0) {
        var leap = isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
            days -= daysInCurrentMonth - newDate.getDate() + 1;
            newDate.setDate(1);
            if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1)
            } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1)
            }
        } else {
            newDate.setDate(newDate.getDate() + days);
            return newDate
        }
    }
    return newDate
};
var writeArrayToMemory = (array, buffer) => {
    HEAP8.set(array, buffer)
};
var _strftime = (s, maxsize, format, tm) => {
    var tm_zone = HEAPU32[tm + 40 >> 2];
    var date = {
        tm_sec: HEAP32[tm >> 2],
        tm_min: HEAP32[tm + 4 >> 2],
        tm_hour: HEAP32[tm + 8 >> 2],
        tm_mday: HEAP32[tm + 12 >> 2],
        tm_mon: HEAP32[tm + 16 >> 2],
        tm_year: HEAP32[tm + 20 >> 2],
        tm_wday: HEAP32[tm + 24 >> 2],
        tm_yday: HEAP32[tm + 28 >> 2],
        tm_isdst: HEAP32[tm + 32 >> 2],
        tm_gmtoff: HEAP32[tm + 36 >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
    };
    var pattern = UTF8ToString(format);
    var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
    };
    for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule])
    }
    var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function leadingSomething(value, digits, character) {
        var str = typeof value == "number" ? value.toString() : value || "";
        while (str.length < digits) {
            str = character[0] + str
        }
        return str
    }

    function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0")
    }

    function compareByDay(date1, date2) {
        function sgn(value) {
            return value < 0 ? -1 : value > 0 ? 1 : 0
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
            if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                compare = sgn(date1.getDate() - date2.getDate())
            }
        }
        return compare
    }

    function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
            case 0:
                return new Date(janFourth.getFullYear() - 1, 11, 29);
            case 1:
                return janFourth;
            case 2:
                return new Date(janFourth.getFullYear(), 0, 3);
            case 3:
                return new Date(janFourth.getFullYear(), 0, 2);
            case 4:
                return new Date(janFourth.getFullYear(), 0, 1);
            case 5:
                return new Date(janFourth.getFullYear() - 1, 11, 31);
            case 6:
                return new Date(janFourth.getFullYear() - 1, 11, 30)
        }
    }

    function getWeekBasedYear(date) {
        var thisDate = addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear() + 1
            }
            return thisDate.getFullYear()
        }
        return thisDate.getFullYear() - 1
    }
    var EXPANSION_RULES_2 = {
        "%a": date => WEEKDAYS[date.tm_wday].substring(0, 3),
        "%A": date => WEEKDAYS[date.tm_wday],
        "%b": date => MONTHS[date.tm_mon].substring(0, 3),
        "%B": date => MONTHS[date.tm_mon],
        "%C": date => {
            var year = date.tm_year + 1900;
            return leadingNulls(year / 100 | 0, 2)
        },
        "%d": date => leadingNulls(date.tm_mday, 2),
        "%e": date => leadingSomething(date.tm_mday, 2, " "),
        "%g": date => getWeekBasedYear(date).toString().substring(2),
        "%G": date => getWeekBasedYear(date),
        "%H": date => leadingNulls(date.tm_hour, 2),
        "%I": date => {
            var twelveHour = date.tm_hour;
            if (twelveHour == 0) twelveHour = 12;
            else if (twelveHour > 12) twelveHour -= 12;
            return leadingNulls(twelveHour, 2)
        },
        "%j": date => leadingNulls(date.tm_mday + arraySum(isLeapYear(date.tm_year + 1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date.tm_mon - 1), 3),
        "%m": date => leadingNulls(date.tm_mon + 1, 2),
        "%M": date => leadingNulls(date.tm_min, 2),
        "%n": () => "\n",
        "%p": date => {
            if (date.tm_hour >= 0 && date.tm_hour < 12) {
                return "AM"
            }
            return "PM"
        },
        "%S": date => leadingNulls(date.tm_sec, 2),
        "%t": () => "\t",
        "%u": date => date.tm_wday || 7,
        "%U": date => {
            var days = date.tm_yday + 7 - date.tm_wday;
            return leadingNulls(Math.floor(days / 7), 2)
        },
        "%V": date => {
            var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7) / 7);
            if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
                val++
            }
            if (!val) {
                val = 52;
                var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
                if (dec31 == 4 || dec31 == 5 && isLeapYear(date.tm_year % 400 - 1)) {
                    val++
                }
            } else if (val == 53) {
                var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
                if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date.tm_year))) val = 1
            }
            return leadingNulls(val, 2)
        },
        "%w": date => date.tm_wday,
        "%W": date => {
            var days = date.tm_yday + 7 - (date.tm_wday + 6) % 7;
            return leadingNulls(Math.floor(days / 7), 2)
        },
        "%y": date => (date.tm_year + 1900).toString().substring(2),
        "%Y": date => date.tm_year + 1900,
        "%z": date => {
            var off = date.tm_gmtoff;
            var ahead = off >= 0;
            off = Math.abs(off) / 60;
            off = off / 60 * 100 + off % 60;
            return (ahead ? "+" : "-") + String("0000" + off).slice(-4)
        },
        "%Z": date => date.tm_zone,
        "%%": () => "%"
    };
    pattern = pattern.replace(/%%/g, "\0\0");
    for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
            pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date))
        }
    }
    pattern = pattern.replace(/\0\0/g, "%");
    var bytes = intArrayFromString(pattern, false);
    if (bytes.length > maxsize) {
        return 0
    }
    writeArrayToMemory(bytes, s);
    return bytes.length - 1
};
var _strptime = (buf, format, tm) => {
    var pattern = UTF8ToString(format);
    var SPECIAL_CHARS = "\\!@#$^&*()+=-[]/{}|:<>?,.";
    for (var i = 0, ii = SPECIAL_CHARS.length; i < ii; ++i) {
        pattern = pattern.replace(new RegExp("\\" + SPECIAL_CHARS[i], "g"), "\\" + SPECIAL_CHARS[i])
    }
    var EQUIVALENT_MATCHERS = {
        "A": "%a",
        "B": "%b",
        "c": "%a %b %d %H:%M:%S %Y",
        "D": "%m\\/%d\\/%y",
        "e": "%d",
        "F": "%Y-%m-%d",
        "h": "%b",
        "R": "%H\\:%M",
        "r": "%I\\:%M\\:%S\\s%p",
        "T": "%H\\:%M\\:%S",
        "x": "%m\\/%d\\/(?:%y|%Y)",
        "X": "%H\\:%M\\:%S"
    };
    var DATE_PATTERNS = {
        "a": "(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)",
        "b": "(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)",
        "C": "\\d\\d",
        "d": "0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31",
        "H": "\\d(?!\\d)|[0,1]\\d|20|21|22|23",
        "I": "\\d(?!\\d)|0\\d|10|11|12",
        "j": "00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d",
        "m": "0[1-9]|[1-9](?!\\d)|10|11|12",
        "M": "0\\d|\\d(?!\\d)|[1-5]\\d",
        "n": " ",
        "p": "AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.",
        "S": "0\\d|\\d(?!\\d)|[1-5]\\d|60",
        "U": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
        "W": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
        "w": "[0-6]",
        "y": "\\d\\d",
        "Y": "\\d\\d\\d\\d",
        "t": " ",
        "z": "Z|(?:[\\+\\-]\\d\\d:?(?:\\d\\d)?)"
    };
    var MONTH_NUMBERS = {
        JAN: 0,
        FEB: 1,
        MAR: 2,
        APR: 3,
        MAY: 4,
        JUN: 5,
        JUL: 6,
        AUG: 7,
        SEP: 8,
        OCT: 9,
        NOV: 10,
        DEC: 11
    };
    var DAY_NUMBERS_SUN_FIRST = {
        SUN: 0,
        MON: 1,
        TUE: 2,
        WED: 3,
        THU: 4,
        FRI: 5,
        SAT: 6
    };
    var DAY_NUMBERS_MON_FIRST = {
        MON: 0,
        TUE: 1,
        WED: 2,
        THU: 3,
        FRI: 4,
        SAT: 5,
        SUN: 6
    };
    var capture = [];
    var pattern_out = pattern.replace(/%(.)/g, (m, c) => EQUIVALENT_MATCHERS[c] || m).replace(/%(.)/g, (_, c) => {
        let pat = DATE_PATTERNS[c];
        if (pat) {
            capture.push(c);
            return `(${pat})`
        } else {
            return c
        }
    }).replace(/\s+/g, "\\s*");
    var matches = new RegExp("^" + pattern_out, "i").exec(UTF8ToString(buf));

    function initDate() {
        function fixup(value, min, max) {
            return typeof value != "number" || isNaN(value) ? min : value >= min ? value <= max ? value : max : min
        }
        return {
            year: fixup(HEAP32[tm + 20 >> 2] + 1900, 1970, 9999),
            month: fixup(HEAP32[tm + 16 >> 2], 0, 11),
            day: fixup(HEAP32[tm + 12 >> 2], 1, 31),
            hour: fixup(HEAP32[tm + 8 >> 2], 0, 23),
            min: fixup(HEAP32[tm + 4 >> 2], 0, 59),
            sec: fixup(HEAP32[tm >> 2], 0, 59),
            gmtoff: 0
        }
    }
    if (matches) {
        var date = initDate();
        var value;
        var getMatch = symbol => {
            var pos = capture.indexOf(symbol);
            if (pos >= 0) {
                return matches[pos + 1]
            }
            return
        };
        if (value = getMatch("S")) {
            date.sec = jstoi_q(value)
        }
        if (value = getMatch("M")) {
            date.min = jstoi_q(value)
        }
        if (value = getMatch("H")) {
            date.hour = jstoi_q(value)
        } else if (value = getMatch("I")) {
            var hour = jstoi_q(value);
            if (value = getMatch("p")) {
                hour += value.toUpperCase()[0] === "P" ? 12 : 0
            }
            date.hour = hour
        }
        if (value = getMatch("Y")) {
            date.year = jstoi_q(value)
        } else if (value = getMatch("y")) {
            var year = jstoi_q(value);
            if (value = getMatch("C")) {
                year += jstoi_q(value) * 100
            } else {
                year += year < 69 ? 2e3 : 1900
            }
            date.year = year
        }
        if (value = getMatch("m")) {
            date.month = jstoi_q(value) - 1
        } else if (value = getMatch("b")) {
            date.month = MONTH_NUMBERS[value.substring(0, 3).toUpperCase()] || 0
        }
        if (value = getMatch("d")) {
            date.day = jstoi_q(value)
        } else if (value = getMatch("j")) {
            var day = jstoi_q(value);
            var leapYear = isLeapYear(date.year);
            for (var month = 0; month < 12; ++month) {
                var daysUntilMonth = arraySum(leapYear ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, month - 1);
                if (day <= daysUntilMonth + (leapYear ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[month]) {
                    date.day = day - daysUntilMonth
                }
            }
        } else if (value = getMatch("a")) {
            var weekDay = value.substring(0, 3).toUpperCase();
            if (value = getMatch("U")) {
                var weekDayNumber = DAY_NUMBERS_SUN_FIRST[weekDay];
                var weekNumber = jstoi_q(value);
                var janFirst = new Date(date.year, 0, 1);
                var endDate;
                if (janFirst.getDay() === 0) {
                    endDate = addDays(janFirst, weekDayNumber + 7 * (weekNumber - 1))
                } else {
                    endDate = addDays(janFirst, 7 - janFirst.getDay() + weekDayNumber + 7 * (weekNumber - 1))
                }
                date.day = endDate.getDate();
                date.month = endDate.getMonth()
            } else if (value = getMatch("W")) {
                var weekDayNumber = DAY_NUMBERS_MON_FIRST[weekDay];
                var weekNumber = jstoi_q(value);
                var janFirst = new Date(date.year, 0, 1);
                var endDate;
                if (janFirst.getDay() === 1) {
                    endDate = addDays(janFirst, weekDayNumber + 7 * (weekNumber - 1))
                } else {
                    endDate = addDays(janFirst, 7 - janFirst.getDay() + 1 + weekDayNumber + 7 * (weekNumber - 1))
                }
                date.day = endDate.getDate();
                date.month = endDate.getMonth()
            }
        }
        if (value = getMatch("z")) {
            if (value.toLowerCase() === "z") {
                date.gmtoff = 0
            } else {
                var match = value.match(/^((?:\-|\+)\d\d):?(\d\d)?/);
                date.gmtoff = match[1] * 3600;
                if (match[2]) {
                    date.gmtoff += date.gmtoff > 0 ? match[2] * 60 : -match[2] * 60
                }
            }
        }
        var fullDate = new Date(date.year, date.month, date.day, date.hour, date.min, date.sec, 0);
        HEAP32[tm >> 2] = fullDate.getSeconds();
        HEAP32[tm + 4 >> 2] = fullDate.getMinutes();
        HEAP32[tm + 8 >> 2] = fullDate.getHours();
        HEAP32[tm + 12 >> 2] = fullDate.getDate();
        HEAP32[tm + 16 >> 2] = fullDate.getMonth();
        HEAP32[tm + 20 >> 2] = fullDate.getFullYear() - 1900;
        HEAP32[tm + 24 >> 2] = fullDate.getDay();
        HEAP32[tm + 28 >> 2] = arraySum(isLeapYear(fullDate.getFullYear()) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, fullDate.getMonth() - 1) + fullDate.getDate() - 1;
        HEAP32[tm + 32 >> 2] = 0;
        HEAP32[tm + 36 >> 2] = date.gmtoff;
        return buf + intArrayFromString(matches[0]).length - 1
    }
    return 0
};
var getCFunc = ident => {
    var func = Module["_" + ident];
    return func
};
var ccall = (ident, returnType, argTypes, args, opts) => {
    var toC = {
        "string": str => {
            var ret = 0;
            if (str !== null && str !== undefined && str !== 0) {
                ret = stringToUTF8OnStack(str)
            }
            return ret
        },
        "array": arr => {
            var ret = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret);
            return ret
        }
    };

    function convertReturnValue(ret) {
        if (returnType === "string") {
            return UTF8ToString(ret)
        }
        if (returnType === "boolean") return Boolean(ret);
        return ret
    }
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    if (args) {
        for (var i = 0; i < args.length; i++) {
            var converter = toC[argTypes[i]];
            if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i])
            } else {
                cArgs[i] = args[i]
            }
        }
    }
    var ret = func.apply(null, cArgs);

    function onDone(ret) {
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret)
    }
    ret = onDone(ret);
    return ret
};
var cwrap = (ident, returnType, argTypes, opts) => {
    var numericArgs = !argTypes || argTypes.every(type => type === "number" || type === "boolean");
    var numericRet = returnType !== "string";
    if (numericRet && numericArgs && !opts) {
        return getCFunc(ident)
    }
    return function() {
        return ccall(ident, returnType, argTypes, arguments, opts)
    }
};
var FSNode = function(parent, name, mode, rdev) {
    if (!parent) {
        parent = this
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev
};
var readMode = 292 | 73;
var writeMode = 146;
Object.defineProperties(FSNode.prototype, {
    read: {
        get: function() {
            return (this.mode & readMode) === readMode
        },
        set: function(val) {
            val ? this.mode |= readMode : this.mode &= ~readMode
        }
    },
    write: {
        get: function() {
            return (this.mode & writeMode) === writeMode
        },
        set: function(val) {
            val ? this.mode |= writeMode : this.mode &= ~writeMode
        }
    },
    isFolder: {
        get: function() {
            return FS.isDir(this.mode)
        }
    },
    isDevice: {
        get: function() {
            return FS.isChrdev(this.mode)
        }
    }
});
FS.FSNode = FSNode;
FS.createPreloadedFile = FS_createPreloadedFile;
FS.staticInit();
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_unlink"] = FS.unlink;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
Module["requestFullscreen"] = Browser.requestFullscreen;
Module["requestAnimationFrame"] = Browser.requestAnimationFrame;
Module["setCanvasSize"] = Browser.setCanvasSize;
Module["pauseMainLoop"] = Browser.mainLoop.pause;
Module["resumeMainLoop"] = Browser.mainLoop.resume;
Module["getUserMedia"] = Browser.getUserMedia;
Module["createContext"] = Browser.createContext;
var preloadedImages = {};
var preloadedAudios = {};
var GLctx;
var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
for (var i = 0; i < 288; ++i) {
    miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i + 1)
}
var wasmImports = {
    a: ___assert_fail,
    pb: ___syscall_faccessat,
    da: ___syscall_fcntl64,
    ib: ___syscall_getdents64,
    mb: ___syscall_ioctl,
    jb: ___syscall_mkdirat,
    ea: ___syscall_openat,
    fb: ___syscall_renameat,
    gb: ___syscall_rmdir,
    eb: ___syscall_stat64,
    hb: ___syscall_unlinkat,
    cb: ___syscall_utimensat,
    ab: __emscripten_throw_longjmp,
    Xa: __gmtime_js,
    Ya: __localtime_js,
    Za: __mktime_js,
    db: __tzset_js,
    V: _abort,
    b: _emscripten_asm_const_int,
    na: _emscripten_cancel_main_loop,
    nb: _emscripten_date_now,
    ob: _emscripten_memcpy_js,
    Fa: _emscripten_request_fullscreen_strategy,
    bb: _emscripten_resize_heap,
    ma: _emscripten_set_main_loop,
    Da: _emscripten_set_mousedown_callback_on_thread,
    Ea: _emscripten_set_mousemove_callback_on_thread,
    Ca: _emscripten_set_mouseup_callback_on_thread,
    ya: _emscripten_set_touchcancel_callback_on_thread,
    Aa: _emscripten_set_touchend_callback_on_thread,
    za: _emscripten_set_touchmove_callback_on_thread,
    Ba: _emscripten_set_touchstart_callback_on_thread,
    X: _exit,
    N: _fd_close,
    lb: _fd_read,
    _a: _fd_seek,
    ca: _fd_write,
    Z: get_device_pixel_ratio,
    P: get_hostname,
    kb: get_single_game_link_guid,
    $a: get_start_in_edit_mode,
    Ja: get_url_level_index,
    B: _glActiveTexture,
    aa: _glAttachShader,
    m: _glBindBuffer,
    t: _glBindFramebuffer,
    s: _glBindRenderbuffer,
    e: _glBindTexture,
    Ka: _glBlendFunc,
    v: _glBufferData,
    Ma: _glCheckFramebufferStatus,
    w: _glClear,
    H: _glClearColor,
    Ta: _glCompileShader,
    Ra: _glCreateProgram,
    Va: _glCreateShader,
    R: _glDeleteBuffers,
    L: _glDeleteFramebuffers,
    G: _glDeleteRenderbuffers,
    S: _glDeleteTextures,
    La: _glDepthFunc,
    p: _glDepthMask,
    d: _glDisable,
    j: _glDisableVertexAttribArray,
    r: _glDrawArrays,
    c: _glEnable,
    l: _glEnableVertexAttribArray,
    C: _glFramebufferRenderbuffer,
    Na: _glFramebufferTexture2D,
    I: _glGenBuffers,
    M: _glGenFramebuffers,
    E: _glGenRenderbuffers,
    A: _glGenTextures,
    k: _glGetAttribLocation,
    u: _glGetIntegerv,
    Pa: _glGetProgramInfoLog,
    $: _glGetProgramiv,
    Sa: _glGetShaderInfoLog,
    ba: _glGetShaderiv,
    o: _glGetUniformLocation,
    Qa: _glLinkProgram,
    T: _glReadPixels,
    D: _glRenderbufferStorage,
    Ua: _glShaderSource,
    z: _glTexImage2D,
    g: _glTexParameterf,
    J: _glTexParameteri,
    Oa: _glTexSubImage2D,
    _: _glUniform1f,
    K: _glUniform1i,
    F: _glUniform2f,
    x: _glUniform3fv,
    i: _glUniformMatrix4fv,
    y: _glUseProgram,
    f: _glVertexAttribPointer,
    q: _glViewport,
    ta: _glfwCreateWindow,
    va: _glfwGetPrimaryMonitor,
    ua: _glfwGetVideoMode,
    wa: _glfwInit,
    sa: _glfwMakeContextCurrent,
    Ha: _glfwPollEvents,
    Ga: _glfwSetClipboardString,
    pa: _glfwSetDropCallback,
    xa: _glfwSetErrorCallback,
    ra: _glfwSetKeyCallback,
    qa: _glfwSetScrollCallback,
    oa: _glfwSetWindowSizeCallback,
    Ia: _glfwSwapBuffers,
    la: _glfwSwapInterval,
    ja: _glfwTerminate,
    Q: _glfwWindowHint,
    ia: invoke_iii,
    fa: invoke_iiii,
    n: invoke_vi,
    h: invoke_vii,
    O: invoke_viii,
    W: invoke_viiii,
    ha: invoke_viiiii,
    ka: is_daily_reward_possible,
    U: is_latest_browser_tab,
    Wa: set_latest_browser_tab,
    Y: _strftime,
    ga: _strptime
};
var wasmExports = createWasm();
var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports["rb"])();
var _app_webview_message = Module["_app_webview_message"] = a0 => (_app_webview_message = Module["_app_webview_message"] = wasmExports["sb"])(a0);
var _free = a0 => (_free = wasmExports["tb"])(a0);
var _malloc = a0 => (_malloc = wasmExports["ub"])(a0);
var _app_error = Module["_app_error"] = (a0, a1) => (_app_error = Module["_app_error"] = wasmExports["vb"])(a0, a1);
var _app_pause = Module["_app_pause"] = () => (_app_pause = Module["_app_pause"] = wasmExports["wb"])();
var _app_resume = Module["_app_resume"] = () => (_app_resume = Module["_app_resume"] = wasmExports["xb"])();
var _app_on_signin = Module["_app_on_signin"] = (a0, a1, a2, a3, a4, a5) => (_app_on_signin = Module["_app_on_signin"] = wasmExports["yb"])(a0, a1, a2, a3, a4, a5);
var _app_on_signout = Module["_app_on_signout"] = () => (_app_on_signout = Module["_app_on_signout"] = wasmExports["zb"])();
var _notification_show_inapp = Module["_notification_show_inapp"] = (a0, a1) => (_notification_show_inapp = Module["_notification_show_inapp"] = wasmExports["Ab"])(a0, a1);
var _app_set_opengl_context_lost = Module["_app_set_opengl_context_lost"] = a0 => (_app_set_opengl_context_lost = Module["_app_set_opengl_context_lost"] = wasmExports["Bb"])(a0);
var _opengl_resume = Module["_opengl_resume"] = () => (_opengl_resume = Module["_opengl_resume"] = wasmExports["Cb"])();
var _app_init = Module["_app_init"] = () => (_app_init = Module["_app_init"] = wasmExports["Db"])();
var _menu_query_games_add_result = Module["_menu_query_games_add_result"] = (a0, a1, a2, a3) => (_menu_query_games_add_result = Module["_menu_query_games_add_result"] = wasmExports["Fb"])(a0, a1, a2, a3);
var _menu_query_games_finished = Module["_menu_query_games_finished"] = () => (_menu_query_games_finished = Module["_menu_query_games_finished"] = wasmExports["Gb"])();
var _menu_read_game_finished = Module["_menu_read_game_finished"] = (a0, a1, a2, a3, a4, a5) => (_menu_read_game_finished = Module["_menu_read_game_finished"] = wasmExports["Hb"])(a0, a1, a2, a3, a4, a5);
var _menu_read_counts_finished = Module["_menu_read_counts_finished"] = (a0, a1, a2, a3) => (_menu_read_counts_finished = Module["_menu_read_counts_finished"] = wasmExports["Ib"])(a0, a1, a2, a3);
var _menu_read_ledger_finished = Module["_menu_read_ledger_finished"] = (a0, a1, a2, a3, a4, a5) => (_menu_read_ledger_finished = Module["_menu_read_ledger_finished"] = wasmExports["Jb"])(a0, a1, a2, a3, a4, a5);
var _menu_write_ledger_finished = Module["_menu_write_ledger_finished"] = (a0, a1, a2) => (_menu_write_ledger_finished = Module["_menu_write_ledger_finished"] = wasmExports["Kb"])(a0, a1, a2);
var _menu_read_gems_finished = Module["_menu_read_gems_finished"] = a0 => (_menu_read_gems_finished = Module["_menu_read_gems_finished"] = wasmExports["Lb"])(a0);
var _state_menu_deeplink_stop = Module["_state_menu_deeplink_stop"] = (a0, a1) => (_state_menu_deeplink_stop = Module["_state_menu_deeplink_stop"] = wasmExports["Mb"])(a0, a1);
var _menu_file_upload_finished = Module["_menu_file_upload_finished"] = a0 => (_menu_file_upload_finished = Module["_menu_file_upload_finished"] = wasmExports["Nb"])(a0);
var _share_file_finished = Module["_share_file_finished"] = a0 => (_share_file_finished = Module["_share_file_finished"] = wasmExports["Ob"])(a0);
var _iap_cancelled = Module["_iap_cancelled"] = () => (_iap_cancelled = Module["_iap_cancelled"] = wasmExports["Pb"])();
var _state_menu_payout_add = Module["_state_menu_payout_add"] = (a0, a1, a2) => (_state_menu_payout_add = Module["_state_menu_payout_add"] = wasmExports["Qb"])(a0, a1, a2);
var _state_menu_payout_stop = Module["_state_menu_payout_stop"] = a0 => (_state_menu_payout_stop = Module["_state_menu_payout_stop"] = wasmExports["Rb"])(a0);
var _menu_on_password_reset_email_sent = Module["_menu_on_password_reset_email_sent"] = () => (_menu_on_password_reset_email_sent = Module["_menu_on_password_reset_email_sent"] = wasmExports["Sb"])();
var _menu_sync_upload_finished = Module["_menu_sync_upload_finished"] = () => (_menu_sync_upload_finished = Module["_menu_sync_upload_finished"] = wasmExports["Tb"])();
var _menu_sync_download_finished = Module["_menu_sync_download_finished"] = () => (_menu_sync_download_finished = Module["_menu_sync_download_finished"] = wasmExports["Ub"])();
var _ad_on_inited = Module["_ad_on_inited"] = () => (_ad_on_inited = Module["_ad_on_inited"] = wasmExports["Vb"])();
var _ad_interstitial_on_showed = Module["_ad_interstitial_on_showed"] = a0 => (_ad_interstitial_on_showed = Module["_ad_interstitial_on_showed"] = wasmExports["Wb"])(a0);
var _ad_rewarded_on_rewarded = Module["_ad_rewarded_on_rewarded"] = () => (_ad_rewarded_on_rewarded = Module["_ad_rewarded_on_rewarded"] = wasmExports["Xb"])();
var _ad_rewarded_on_showed = Module["_ad_rewarded_on_showed"] = a0 => (_ad_rewarded_on_showed = Module["_ad_rewarded_on_showed"] = wasmExports["Yb"])(a0);
var _webaudio_fill = Module["_webaudio_fill"] = () => (_webaudio_fill = Module["_webaudio_fill"] = wasmExports["Zb"])();
var _get_app_version = Module["_get_app_version"] = () => (_get_app_version = Module["_get_app_version"] = wasmExports["_b"])();
var _use_test_api_server = Module["_use_test_api_server"] = () => (_use_test_api_server = Module["_use_test_api_server"] = wasmExports["$b"])();
var _level_select_menu_start_level = Module["_level_select_menu_start_level"] = a0 => (_level_select_menu_start_level = Module["_level_select_menu_start_level"] = wasmExports["ac"])(a0);
var _set_game_focus = Module["_set_game_focus"] = a0 => (_set_game_focus = Module["_set_game_focus"] = wasmExports["bc"])(a0);
var _set_ad_freq = Module["_set_ad_freq"] = a0 => (_set_ad_freq = Module["_set_ad_freq"] = wasmExports["cc"])(a0);
var _set_ad_duration_offline = Module["_set_ad_duration_offline"] = a0 => (_set_ad_duration_offline = Module["_set_ad_duration_offline"] = wasmExports["dc"])(a0);
var _set_abtest_in_game_get = Module["_set_abtest_in_game_get"] = a0 => (_set_abtest_in_game_get = Module["_set_abtest_in_game_get"] = wasmExports["ec"])(a0);
var _set_user_premium_ends = Module["_set_user_premium_ends"] = a0 => (_set_user_premium_ends = Module["_set_user_premium_ends"] = wasmExports["fc"])(a0);
var _get_user_premium_ends = Module["_get_user_premium_ends"] = () => (_get_user_premium_ends = Module["_get_user_premium_ends"] = wasmExports["gc"])();
var _set_user_banned = Module["_set_user_banned"] = a0 => (_set_user_banned = Module["_set_user_banned"] = wasmExports["hc"])(a0);
var _set_user_gems = Module["_set_user_gems"] = a0 => (_set_user_gems = Module["_set_user_gems"] = wasmExports["ic"])(a0);
var _set_user_nick = Module["_set_user_nick"] = a0 => (_set_user_nick = Module["_set_user_nick"] = wasmExports["jc"])(a0);
var _set_user_state = Module["_set_user_state"] = a0 => (_set_user_state = Module["_set_user_state"] = wasmExports["kc"])(a0);
var _set_user_uid = Module["_set_user_uid"] = a0 => (_set_user_uid = Module["_set_user_uid"] = wasmExports["lc"])(a0);
var _set_user_adfree_ends = Module["_set_user_adfree_ends"] = a0 => (_set_user_adfree_ends = Module["_set_user_adfree_ends"] = wasmExports["mc"])(a0);
var _get_app_inited = Module["_get_app_inited"] = () => (_get_app_inited = Module["_get_app_inited"] = wasmExports["nc"])();
var _log_simple = Module["_log_simple"] = a0 => (_log_simple = Module["_log_simple"] = wasmExports["oc"])(a0);
var _app_terminate_if_necessary = Module["_app_terminate_if_necessary"] = () => (_app_terminate_if_necessary = Module["_app_terminate_if_necessary"] = wasmExports["pc"])();
var _score_set_top_nicks_and_scores = Module["_score_set_top_nicks_and_scores"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (_score_set_top_nicks_and_scores = Module["_score_set_top_nicks_and_scores"] = wasmExports["qc"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
var _score_set_above_nicks_and_scores = Module["_score_set_above_nicks_and_scores"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (_score_set_above_nicks_and_scores = Module["_score_set_above_nicks_and_scores"] = wasmExports["rc"])(a0, a1, a2, a3, a4, a5, a6, a7);
var _score_set_below_nicks_and_scores = Module["_score_set_below_nicks_and_scores"] = (a0, a1, a2, a3) => (_score_set_below_nicks_and_scores = Module["_score_set_below_nicks_and_scores"] = wasmExports["sc"])(a0, a1, a2, a3);
var _score_read_finished_em = Module["_score_read_finished_em"] = (a0, a1, a2, a3, a4, a5) => (_score_read_finished_em = Module["_score_read_finished_em"] = wasmExports["tc"])(a0, a1, a2, a3, a4, a5);
var _keydown_browser = Module["_keydown_browser"] = a0 => (_keydown_browser = Module["_keydown_browser"] = wasmExports["uc"])(a0);
var _update_screen_size = Module["_update_screen_size"] = (a0, a1, a2) => (_update_screen_size = Module["_update_screen_size"] = wasmExports["vc"])(a0, a1, a2);
var _request_fullscreen = Module["_request_fullscreen"] = () => (_request_fullscreen = Module["_request_fullscreen"] = wasmExports["wc"])();
var _user_accepted_and_clicked = Module["_user_accepted_and_clicked"] = () => (_user_accepted_and_clicked = Module["_user_accepted_and_clicked"] = wasmExports["xc"])();
var _main = Module["_main"] = (a0, a1) => (_main = Module["_main"] = wasmExports["yc"])(a0, a1);
var _play_counter_falloff = Module["_play_counter_falloff"] = a0 => (_play_counter_falloff = Module["_play_counter_falloff"] = wasmExports["zc"])(a0);
var _game_download_finished = Module["_game_download_finished"] = (a0, a1, a2) => (_game_download_finished = Module["_game_download_finished"] = wasmExports["Ac"])(a0, a1, a2);
var _web_command_fetch_url_done = Module["_web_command_fetch_url_done"] = (a0, a1) => (_web_command_fetch_url_done = Module["_web_command_fetch_url_done"] = wasmExports["Bc"])(a0, a1);
var _ntp_set_server_time = Module["_ntp_set_server_time"] = a0 => (_ntp_set_server_time = Module["_ntp_set_server_time"] = wasmExports["Cc"])(a0);
var _news_create = Module["_news_create"] = a0 => (_news_create = Module["_news_create"] = wasmExports["Dc"])(a0);
var _news_update_started = Module["_news_update_started"] = () => (_news_update_started = Module["_news_update_started"] = wasmExports["Ec"])();
var _news_update_finished = Module["_news_update_finished"] = () => (_news_update_finished = Module["_news_update_finished"] = wasmExports["Fc"])();
var _moderation_publish_perform = Module["_moderation_publish_perform"] = () => (_moderation_publish_perform = Module["_moderation_publish_perform"] = wasmExports["Gc"])();
var setTempRet0 = a0 => (setTempRet0 = wasmExports["Hc"])(a0);
var ___errno_location = () => (___errno_location = wasmExports["Ic"])();
var _setThrew = (a0, a1) => (_setThrew = wasmExports["Jc"])(a0, a1);
var stackSave = () => (stackSave = wasmExports["Kc"])();
var stackRestore = a0 => (stackRestore = wasmExports["Lc"])(a0);
var stackAlloc = a0 => (stackAlloc = wasmExports["Mc"])(a0);
var ___start_em_js = Module["___start_em_js"] = 608822;
var ___stop_em_js = Module["___stop_em_js"] = 609273;

function invoke_vi(index, a1) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iii(index, a1, a2) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vii(index, a1, a2) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiii(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return getWasmTableEntry(index)(a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
Module["FS_createPath"] = FS.createPath;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;
Module["getValue"] = getValue;
Module["stringToNewUTF8"] = stringToNewUTF8;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_unlink"] = FS.unlink;
var calledRun;
dependenciesFulfilled = function runCaller() {
    if (!calledRun) run();
    if (!calledRun) dependenciesFulfilled = runCaller
};

function callMain(args = []) {
    var entryFunction = _main;
    args.unshift(thisProgram);
    var argc = args.length;
    var argv = stackAlloc((argc + 1) * 4);
    var argv_ptr = argv;
    args.forEach(arg => {
        HEAPU32[argv_ptr >> 2] = stringToUTF8OnStack(arg);
        argv_ptr += 4
    });
    HEAPU32[argv_ptr >> 2] = 0;
    try {
        var ret = entryFunction(argc, argv);
        exitJS(ret, true);
        return ret
    } catch (e) {
        return handleException(e)
    }
}

function run(args = arguments_) {
    if (runDependencies > 0) {
        return
    }
    preRun();
    if (runDependencies > 0) {
        return
    }

    function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        preMain();
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        if (shouldRunNow) callMain(args);
        postRun()
    }
    if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
            setTimeout(function() {
                Module["setStatus"]("")
            }, 1);
            doRun()
        }, 1)
    } else {
        doRun()
    }
}
if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
    while (Module["preInit"].length > 0) {
        Module["preInit"].pop()()
    }
}
var shouldRunNow = true;
if (Module["noInitialRun"]) shouldRunNow = false;
run();