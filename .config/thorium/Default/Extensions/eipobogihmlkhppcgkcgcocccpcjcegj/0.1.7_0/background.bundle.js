/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 710:
/***/ ((module) => {

"use strict";


class NonError extends Error {
	constructor(message) {
		super(NonError._prepareSuperMessage(message));
		Object.defineProperty(this, 'name', {
			value: 'NonError',
			configurable: true,
			writable: true
		});

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, NonError);
		}
	}

	static _prepareSuperMessage(message) {
		try {
			return JSON.stringify(message);
		} catch (_) {
			return String(message);
		}
	}
}

const commonProperties = [
	{property: 'name', enumerable: false},
	{property: 'message', enumerable: false},
	{property: 'stack', enumerable: false},
	{property: 'code', enumerable: true}
];

const destroyCircular = ({from, seen, to_, forceEnumerable}) => {
	const to = to_ || (Array.isArray(from) ? [] : {});

	seen.push(from);

	for (const [key, value] of Object.entries(from)) {
		if (typeof value === 'function') {
			continue;
		}

		if (!value || typeof value !== 'object') {
			to[key] = value;
			continue;
		}

		if (!seen.includes(from[key])) {
			to[key] = destroyCircular({from: from[key], seen: seen.slice(), forceEnumerable});
			continue;
		}

		to[key] = '[Circular]';
	}

	for (const {property, enumerable} of commonProperties) {
		if (typeof from[property] === 'string') {
			Object.defineProperty(to, property, {
				value: from[property],
				enumerable: forceEnumerable ? true : enumerable,
				configurable: true,
				writable: true
			});
		}
	}

	return to;
};

const serializeError = value => {
	if (typeof value === 'object' && value !== null) {
		return destroyCircular({from: value, seen: [], forceEnumerable: true});
	}

	// People sometimes throw things besides Error objects…
	if (typeof value === 'function') {
		// `JSON.stringify()` discards functions. We do too, unless a function is thrown directly.
		return `[Function: ${(value.name || 'anonymous')}]`;
	}

	return value;
};

const deserializeError = value => {
	if (value instanceof Error) {
		return value;
	}

	if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
		const newError = new Error();
		destroyCircular({from: value, seen: [], to_: newError});
		return newError;
	}

	return new NonError(value);
};

module.exports = {
	serializeError,
	deserializeError
};


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.7.0 - Tue Nov 10 2020 20:24:04 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(150);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);
// EXTERNAL MODULE: ./node_modules/serialize-error/index.js
var serialize_error = __webpack_require__(710);
;// CONCATENATED MODULE: ./src/js/util.js


function getExtensionVersion() {
  return browser_polyfill_default().runtime.getManifest().version;
}
async function storageGet(key) {
  return browser.storage.local.get(key);
}
async function storageSet(data) {
  return browser_polyfill_default().storage.local.set(data);
}
async function storageRemove(data) {
  return browser.storage.local.remove(data);
}
async function storageGetSync(key) {
  return browser_polyfill_default().storage.sync.get(key);
}
async function storageSetSync(data) {
  return browser_polyfill_default().storage.sync.set(data);
}
function getMessage(msg) {
  return browser_polyfill_default().i18n.getMessage(msg);
}
function localizeHtmlPage() {
  //Localize by replacing __MSG_***__ meta tags
  var objects = document.getElementsByTagName('html');
  for (var j = 0; j < objects.length; j++) {
    var obj = objects[j];
    var valStrH = obj.innerHTML.toString();
    var valNewH = valStrH.replace(/__MSG_(\w+)__/g, function (match, v1) {
      return v1 ? getMessage(v1) : '';
    });
    if (valNewH != valStrH) {
      obj.innerHTML = valNewH;
    }
  }
}
function reportError(desc, errorData) {
  const strError = errorData instanceof Error ? (0,serialize_error.serializeError)(errorData) : errorData;
  return browser_polyfill_default().runtime.sendMessage({
    type: 'content',
    subtype: 'MsgReportError',
    desc: desc,
    errorData: strError
  });
}

// Factory settings
let FEATURES = {"CONTENT":true,"NOTIFICATIONS":true,"ACHIEVEMENTS":true,"ACHIEVEMENTS_DISPLAY":true,"GOOGLE_REWRITE":true,"GOOGLE_REWRITE_AUTOCOMPLETE":true,"CT_FACEBOOK":false,"CT_GOOGLE_MYACCOUNT":false,"CT_GOOGLE_SEARCH":true,"CT_WIKIPEDIA":true,"CT_LINKEDIN":false,"CT_YOUTUBE":false};
async function updateRuntimeFeatures() {
  return browser_polyfill_default().storage.local.get('features').then(features => {
    if (features && Object.keys(features).length > 0) {
      FEATURES = features;
    }
    return FEATURES;
  });
}
updateRuntimeFeatures();
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_browser_validate = (validate);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = (stringify);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
;// CONCATENATED MODULE: ./src/js/networking.js





let API_BASE = "https://lm.hmara.info";
let userId;
const PLATFORM =
///////////////////////////////
////////////
//////////////////////////////
'chrome';
//////////////////////////////
///////////
/////////
////////////
//////////

storageGetSync('userId').then(items => {
  if (items.userId) {
    userId = items.userId;
  } else {
    userId = esm_browser_v4();
    storageSetSync({
      userId: userId
    }, function () {
      browser_polyfill_default().runtime.openOptionsPage();
    });
  }
});
function sendEvent(type, data) {
  if (!data) {
    data = {};
  }
  const body = {
    type,
    data
  };
  return _sendJSON('/events', body);
}
function networking_reportError(desc, errorData) {
  const strError = errorData instanceof Error ? (0,serialize_error.serializeError)(errorData) : errorData;
  _sendJSON('/error', {
    desc: desc,
    data: strError
  });
}
function _sendJSON(path, body) {
  let newUser = false;
  storageGetSync('userSettings').then(settings => {
    if (!settings || !settings.userSettings || !settings.userSettings.collectStats) {
      return Promise.reject('collectStats is disabled');
    }
    return settings;
  }).then(settings => {
    const userSettingsCp = {
      ...settings.userSettings
    };
    delete userSettingsCp['collectStats'];
    delete userSettingsCp['is_18'];
    const options = {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...body,
        userId: userId || 'unknown',
        eventId: esm_browser_v4(),
        version: getExtensionVersion(),
        platform: PLATFORM,
        userSettings: userSettingsCp
      }),
      method: 'POST'
    };
    return _sendInfo(path, options);
  }).then(response => {
    if (response.status !== 200) {
      return Promise.reject({
        error: 'Could not send JSON',
        status: response.status
      });
    }
    return 1;
  }).catch(error => {
    if (error === 'collectStats is disabled') {
      return;
    }
    if (false) {}
  });
}
function _sendInfo(path, options) {
  return fetch(API_BASE + path, options).then(r => {
    if (false) {}
    return r;
  }).catch(error => {});
}
async function updateLocalFeatures() {
  if (!navigator.onLine) return;
  const env = "production";
  const path = `/features/${getExtensionVersion()}-${PLATFORM}.json`;
  return fetch(API_BASE + path).then(r => r.json()).then(json => {
    if (!json || Object.keys(json) <= 0) {
      return;
    }
    const missingFeatures = [];
    for (const k of FEATURES) {
      if (!k in json) {
        missingFeatures.push(k);
      }
    }
    if (missingFeatures.length) {
      networking_reportError(`Incomplete featureset received from ${path}. Missing keys: ` + missingFeatures.sort().join(', '));
      return;
    }
    FEATURES = json;
    storageSet({
      features: json
    });
  });
}
;// CONCATENATED MODULE: ./src/js/google-rewrite.js



// Forced call to make sure first initialization is happening
syncLanguagesConfig({
  userSettings: {}
});
browser_polyfill_default().storage.onChanged.addListener(syncLanguagesConfig);
async function syncLanguagesConfig(changes) {
  if (!changes.features && !changes.userSettings) return;
  return updateRuntimeFeatures().then(() => storageGetSync('userSettings')).then(settings => {
    if (!settings) return;
    const userSettings = settings.userSettings;
    if (!userSettings || Object.keys(userSettings) == null) return;
    ///////////////////////////////////
    ///////////////////////////////////////////////////////////
    ////////////////

    //////////////////////////////////////////////////////////
    return chromeSetupDynamicRewriteRules(userSettings);
    ////////////////
  }).catch(e => {
    reportError('Error setting up dynamic rewrite rules', e);
  });
}

/////////////////////////////

/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////////
///

///////////////////////////////////
//////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////
///////////
///

//////////////////////////////////////////
//////////
////////////////////////////////
////

///////////////////////////////////////////////////////////
/////////////////////
///////////
///

///////////////////////////////////
/////////////////////////////////

//////////
////////////////////////////////
////

//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
/////////////////////////////////////
////

//////////////////////////////////////////////////////////
///////////////////////////////////////////
////

///////////////////////////////////////

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////

/////////////////////////////////////////////////
//////////////////////////////////////
/////
/////////////
//////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
//////////////////////////////////////////
////////
//////
////////////////
////

/////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////
///////
///////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////
////////
//////////////////
//////
///

//////////

////////////////////////////////////////////////////
async function chromeSetupDynamicRewriteRules(userSettings) {
  // Clear any existing rules first
  await browser_polyfill_default().declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2]
  });
  if (!FEATURES.GOOGLE_REWRITE) return;
  const lessLanguages = userSettings.lessLanguages;
  const moreLanguages = userSettings.moreLanguages;
  const userSpeed = userSettings.moreLanguages;
  const filterValue = lessLanguages.map(lang => `(-lang_${lang})`).join('.');
  const rulesOk = await browser_polyfill_default().declarativeNetRequest.updateDynamicRules({
    addRules: [{
      id: 1,
      priority: 1,
      action: {
        type: 'redirect',
        redirect: {
          transform: {
            queryTransform: {
              addOrReplaceParams: [{
                key: 'lr',
                value: filterValue
              }]
            }
          }
        }
      },
      condition: {
        regexFilter: '^https://(?:www\\.)?google\\.(\\w\\w|co\\.(\\w\\w)|com|com\\.(\\w\\w)|\\w\\w)/search?.*',
        resourceTypes: ['main_frame']
      }
    }],
    removeRuleIds: [1]
  }).catch(e => {
    reportError('Failed to set up chrome rewrite rules', e);
  });
  if (!lessLanguages.includes('ru') || !moreLanguages.includes('uk')) return;
  if (!FEATURES.GOOGLE_REWRITE_AUTOCOMPLETE) return;
  if ( false || userSpeed === 'immediately') {
    browser_polyfill_default().declarativeNetRequest.updateDynamicRules({
      addRules: [{
        id: 2,
        priority: 2,
        action: {
          type: 'redirect',
          redirect: {
            transform: {
              host: 'gs.hmara.info'
            }
          }
        },
        condition: {
          regexFilter: '^https://www\\.google\\.(?:\\w\\w|co\\.(?:\\w\\w)|com|com\\.(?:\\w\\w)|\\w\\w)/complete/search?.*',
          resourceTypes: ['xmlhttprequest', 'other']
        }
      }],
      removeRuleIds: [2]
    });
  }
}
//////////
;// CONCATENATED MODULE: ./src/js/content/shared/google-ui-languages.js


// This set of functions is to be called from a content process
// with the goal to prepare HTTP requests,
// send to the background process for execution,
// process the response and return relevant results

async function getGoogleUILangugages(cachedHtml) {
  // Use the cached html when provided
  const fetchDom = cachedHtml ? Promise.resolve(cachedHtml) : browser.runtime.sendMessage({
    type: 'content',
    subtype: 'MsgGetGoogleAccountLanguages'
  });
  return fetchDom.then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    // Returns "Preferred languages" in format ['uk', 'en-NL'], sorted by priority
    const googleLangs = [...doc.querySelectorAll('.GqRghe .mMsbvc > label')].map(node => node.getAttribute('lang')).filter(lang => lang);

    // Now check if Google Profile languages match
    // TODO: fetch a list of languages assumed by Google
    const match = html.match(/https:\\\/\\\/www\.google\.com\\\/settings','(.*?)'/);
    if (!match || !match[1]) {
      throw new Error('No "at" value found on Google Account page');
    }
    const settingsAt = match[1];
    return Promise.resolve({
      googleLangs,
      settingsAt
    });
  });
}

// Takes a data structure returned by getGoogleUILangugages
async function setGoogleUILangugages(settings) {
  if (!settings || !settings.settingsAt || !settings.googleLangs) {
    return;
  }

  // calls setGoogleUILangugagesRequest(body) in the background process
  return browser.runtime.sendMessage({
    type: 'content',
    subtype: 'MsgSetGoogleAccountLanguages',
    languages: settings.googleLangs
  });
}

// setGoogleUILangugagesRequest() is meant to be invoked from the background process

async function setGoogleUILangugagesRequest(newGoogleLangs) {
  if (!newGoogleLangs || !newGoogleLangs.length) {
    throw new Error('setGoogleUILangugagesRequest error: No languages provided', newGoogleLangs);
  }
  return getGoogleUILangugagesRequest().then(html => {
    const match = html.match(/https:\\\/\\\/www\.google\.com\\\/settings','(.*?)'/);
    if (!match) {
      throw new Error('No "at" value found in DOM');
    }
    return match[1];
  }).then(settingsAt => {
    // Example payload: f.req=[["uk", "en-NL"]]&at=AGM9kOYuAHoYlyx1LLunsOPC-EVj:16J1479455245&
    const setAccountLangsBody = _formEncode({
      'f.req': JSON.stringify([newGoogleLangs]),
      at: settingsAt
    });
    const disableAutodetectLangsBody = _formEncode({
      'f.req': JSON.stringify([[['NeP2w', '[2]', null, 'generic']]]),
      at: settingsAt
    });
    return Promise.all([
    // Updates google account languages according to the config
    fetch('https://myaccount.google.com/_/language_update', {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: setAccountLangsBody,
      credentials: 'include',
      method: 'POST'
    }),
    // Disables auto-suggestions of languages by Google
    // as it's known to suggest undesired languages without confirming with the user
    fetch('https://myaccount.google.com/_/AccountSettingsUi/data/batchexecute', {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: disableAutodetectLangsBody,
      credentials: 'include',
      method: 'POST'
    })]).then(responses => {
      // Only consider the response to 'update languages' request
      if (responses[0].status == 200) {
        return Promise.resolve(responses[0].status);
      } else {
        return Promise.reject({
          status: responses[0].status,
          reason: responses[0].text
        });
      }
    });
  });
}
async function getGoogleUILangugagesRequest() {
  return fetch('https://myaccount.google.com/language', {
    credentials: 'include'
  }).then(r => r.text());
}
function _formEncode(data) {
  var formBody = [];
  for (const property in data) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
}
;// CONCATENATED MODULE: ./src/js/achievements.js



const ACHIEVEMENTS = {
  lng_choice: {
    type: 'singular',
    title: 'Визначилися з мовою!',
    description: 'Ви визначилися з мовами, які хочете бачити, а яких – ні!'
  },
  gs_rewrite: {
    type: 'stack',
    milestones: [1, 100, 1000],
    title_1: 'Google 🔎 без {lessLanguages}!',
    title_100: '100 × Google 🔎 без {lessLanguages}!',
    title_1000: '100 × Google 🔎 без {lessLanguages}!!!',
    description_1: 'Ваші перші результати пошуку в Google без {lessLanguages}!\nВам подобається?',
    description_100: 'Вже сто разів шукали в Google без {lessLanguages}!\nЯк вам? 😊',
    description_1000: 'Воу! Аж 1000 (тисяча!!!) пошуків в Google, без {lessLanguages}!\nПоділіться враженнями з друзями!'
  },
  // Content-scripts achievements: 'CT_' + handlerName
  'CT_google-search': {
    type: 'singular',
    title: 'Google 🔎 з інтерфейсом {firstLanguage}!',
    description: 'Вітаємо у вашому оновленому Google!<br />Вам подобається інтерфейс {firstLanguage}?'
  },
  CT_wikipedia: {
    type: 'stack',
    milestones: [1, 10, 100],
    title_1: 'До витоків! Wiki {firstLanguage}',
    title_10: 'Глибше в інформацію {firstLanguage}!',
    title_100: 'Інформація {firstLanguage} 🤩',
    description_1: 'Ця сторінка Wikipedia є {firstLanguage}? О так!',
    description_10: 'Вже десть разів знайшли сторінки Wikipedia вашими мовами!\nВам подобається? Діліться з друзями!',
    description_100: 'Вже в соте знаходите сторінки Wikipedia вашими мовами!\nПодобається? Діліться з друзями!'
  }
};
async function trackAchievement(acKey, options = {}) {
  if (!FEATURES.ACHIEVEMENTS) return true;
  const acData = ACHIEVEMENTS[acKey] || {};
  const storageAchievementKey = `AC_${acKey}`;
  if (!acData) {
    networking_reportError(`Attempted to track unknown achievement '${acKey}'`, new Error('stack'));
    return Promise.reject('Unknown achievement');
  }
  let {
    [storageAchievementKey]: value
  } = await storageGetSync(storageAchievementKey);
  if (!value) value = 0;
  value = value + 1;

  // Singular type has a single implicit milestone
  const milestones = acData.type == 'stack' ? acData.milestones : [1];
  if (!milestones.includes(value)) return;
  const achievementData = {
    [storageAchievementKey]: value
  };
  return storageSetSync(achievementData).then(() => {
    sendEvent(`Achievement unlocked`, {
      achievementKey: storageAchievementKey,
      achievementValue: value
    });
    if (!options.silent) _displayNewAchievement(acKey, value, options);
    return true;
  });
}
async function _displayNewAchievement(acKey, value, options) {
  if (!FEATURES.ACHIEVEMENTS_DISPLAY) return;
  try {
    let titleKey = ACHIEVEMENTS[acKey].type == 'stack' ? `title_${value}` : 'title';
    let descKey = ACHIEVEMENTS[acKey].type == 'stack' ? `description_${value}` : 'description';
    let title = options.title || ACHIEVEMENTS[acKey][titleKey];
    let description = options.description || ACHIEVEMENTS[acKey][descKey];
    const pattern = new RegExp('{(' + Object.keys(options).join('|') + ')}', 'g');
    const localizeKey = (match, key) => {
      let value = options[key];
      if (!value) {
        console.error(`No value defined for ${key} in ${acKey}`);
        return key;
      }
      value = value.replace(/^__MSG_(\w+)__$/, function (match, v1) {
        return v1 ? getMessage(v1) : '';
      });
      return value ? value : key;
    };
    title = title.replace(pattern, localizeKey);
    description = description.replace(pattern, localizeKey);
    browser_polyfill_default().notifications.create('AchievementUnlocked' + acKey, {
      title: `🏆 ${title}`,
      message: description,
      iconUrl: '/icon-128.png',
      type: 'basic',
      buttons: [{
        title: 'Всі досягнення'
      }]
    });
    browser_polyfill_default().notifications.onButtonClicked.addListener(function (notifId, btnIdx) {
      if (notifId.startsWith('AchievementUnlocked') && btnIdx === 0) {
        browser_polyfill_default().tabs.create({
          url: 'https://lu.hmara.info/achievements'
        });
      }
    });
  } catch (e) {
    networking_reportError('Failed to create achievement notification', e);
  }
}
;// CONCATENATED MODULE: ./src/js/background.js






browser_polyfill_default().runtime.onInstalled.addListener(function (details) {
  // This needs to be the same for Chrome, FF and everybody else
  sendEvent(`installed: ${details.reason}`);
});
if (false) {}
updateLocalFeatures().then(() => updateRuntimeFeatures()).catch(() => {
  // On error keep the existing features in tact.
  // This will fall back to the hardcoded feature set on browser restart
}).then(() => {
  setupMessaging();
  if (FEATURES.NOTIFICATIONS) {
    setupNotifications();
    checkConfigured();
  }
}).catch(e => {
  networking_reportError('background.js', e);
});
function setupMessaging() {
  // Incoming messages
  browser_polyfill_default().runtime.onMessage.addListener((request, sender) => {
    try {
      switch (request.type) {
        case 'options':
          return handleOptionsRequest(request);
        case 'content':
          return handleContentRequest(request, sender);
        default:
          networking_reportError(`-> background messages from '${request.src}' of type '${request.type}' are not supported`);
      }
    } catch (e) {
      networking_reportError(`-> background message from ${request.src} type '${request.type}': error in handler`, e);
    }
    return false;
  });
}
function handleOptionsRequest(request) {
  switch (request.subtype) {
    case 'MsgOptionsToBackgroundOne':
      break;
    default:
      networking_reportError(`-> background messages from content '${request.type}' of subtype '${request.subtype}' are not supported`);
  }
}
function handleContentRequest(request, sender) {
  switch (request.subtype) {
    case 'MsgGetGoogleAccountLanguages':
      return getGoogleUILangugagesRequest();
    case 'MsgSetGoogleAccountLanguages':
      return setGoogleUILangugagesRequest(request.languages);
    case 'MsgReportError':
      return networking_reportError(request.desc, request.errorData);
    case 'MsgAchievementUnlocked':
      return trackAchievement(request.acKey, request.options);
    default:
      networking_reportError(`-> background messages from content '${request.type}' of subtype '${request.subtype}' are not supported`);
  }
}
function setupNotifications() {
  try {
    browser_polyfill_default().notifications.onClicked.addListener(function (notifId) {
      if (notifId === 'PleaseSetUp') {
        browser_polyfill_default().runtime.openOptionsPage();
      }
    });
    browser_polyfill_default().notifications.onButtonClicked.addListener(function (notifId, btnIdx) {
      if (notifId === 'PleaseSetUp') {
        browser_polyfill_default().runtime.openOptionsPage();
      }
    });
  } catch (e) {
    networking_reportError('Failed to set up notification events', e);
  }
}
function checkConfigured() {
  storageGetSync('userSettings').then(data => {
    if (data.userSettings) {
      return;
    }
    try {
      browser_polyfill_default().notifications.create('PleaseSetUp', {
        title: 'Лагідна Українізація',
        message: 'Вкажіть, які мови ви хочете бачити більше в Інтернет, будь ласка. Натисніть на це повідомлення',
        iconUrl: '/icon-128.png',
        type: 'basic',
        buttons: [{
          title: 'Перейти до налаштуваннь'
        }]
      });
    } catch (e) {
      networking_reportError('Failed to create notification', e);
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=background.bundle.js.map