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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/img/icon-128.png
const icon_128_namespaceObject = __webpack_require__.p + "icon-128.png";
;// CONCATENATED MODULE: ./src/img/icon-64.png
const icon_64_namespaceObject = __webpack_require__.p + "icon-64.png";
;// CONCATENATED MODULE: ./src/img/icon-32.png
const icon_32_namespaceObject = __webpack_require__.p + "icon-32.png";
// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(150);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);
// EXTERNAL MODULE: ./node_modules/serialize-error/index.js
var serialize_error = __webpack_require__(710);
;// CONCATENATED MODULE: ./src/js/util.js


function util_getExtensionVersion() {
  return browser.runtime.getManifest().version;
}
async function storageGet(key) {
  return browser_polyfill_default().storage.local.get(key);
}
async function util_storageSet(data) {
  return browser_polyfill_default().storage.local.set(data);
}
async function storageRemove(data) {
  return browser_polyfill_default().storage.local.remove(data);
}
async function util_storageGetSync(key) {
  return browser_polyfill_default().storage.sync.get(key);
}
async function util_storageSetSync(data) {
  return browser_polyfill_default().storage.sync.set(data);
}
function util_getMessage(msg) {
  return browser.i18n.getMessage(msg);
}
function localizeHtmlPage() {
  //Localize by replacing __MSG_***__ meta tags
  var objects = document.getElementsByTagName('html');
  for (var j = 0; j < objects.length; j++) {
    var obj = objects[j];
    var valStrH = obj.innerHTML.toString();
    var valNewH = valStrH.replace(/__MSG_(\w+)__/g, function (match, v1) {
      return v1 ? util_getMessage(v1) : '';
    });
    if (valNewH != valStrH) {
      obj.innerHTML = valNewH;
    }
  }
}
function util_reportError(desc, errorData) {
  const strError = errorData instanceof Error ? (0,serialize_error.serializeError)(errorData) : errorData;
  return browser_polyfill_default().runtime.sendMessage({
    type: 'content',
    subtype: 'MsgReportError',
    desc: desc,
    errorData: strError
  });
}

// Factory settings
let util_FEATURES = {"CONTENT":true,"NOTIFICATIONS":true,"ACHIEVEMENTS":true,"ACHIEVEMENTS_DISPLAY":true,"GOOGLE_REWRITE":true,"GOOGLE_REWRITE_AUTOCOMPLETE":true,"CT_FACEBOOK":false,"CT_GOOGLE_MYACCOUNT":false,"CT_GOOGLE_SEARCH":true,"CT_WIKIPEDIA":true,"CT_LINKEDIN":false,"CT_YOUTUBE":false};
async function updateRuntimeFeatures() {
  return browser_polyfill_default().storage.local.get('features').then(features => {
    if (features && Object.keys(features).length > 0) {
      util_FEATURES = features;
    }
    return util_FEATURES;
  });
}
updateRuntimeFeatures();
;// CONCATENATED MODULE: ./src/js/content/default.js
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



const promptsFrequency = {
  slow: 7 * 60 * 60 * 1000,
  gentle: 1 * 60 * 60 * 1000,
  fast: 1 * 60 * 1000,
  immediately: 1 * 60 * 1000
};
class handler {
  constructor(location, document, moreLanguages, lessLanguages) {
    _defineProperty(this, "handlerName", 'default');
    _defineProperty(this, "NOOP", 'Nothing to do');
    // default handler doesn't cache page config,
    // as retrieving it is a cheap operation
    _defineProperty(this, "targetLanguagesConfigExpiresAfter", 0);
    this.location = location;
    this.document = document;
    this.moreLanguages = moreLanguages;
    this.lessLanguages = lessLanguages;
  }
  SUPPORTED_LANGUAGES() {
    return [];
  }
  get cacheKey() {
    return `handler.${this.handlerName}`;
  }
  get isEnabled() {
    const featureName = 'CT_' + this.handlerName.toUpperCase().replace(/-/g, '_');
    return util_FEATURES[featureName];
  }
  async needToTweakLanguages() {
    const $self = this;
    return Promise.all([util_storageGetSync(['userSettings', 'lastPromptTs']), storageGet($self._achievementKey())]).then(async ([userData, expectAchievementData]) => {
      const expectAchievement = expectAchievementData[$self._achievementKey()];
      if (util_FEATURES.ACHIEVEMENTS && expectAchievement) {
        storageRemove($self._achievementKey());
        return true;
      }

      // Check if it's too early for any prompts
      const userSettings = userData.userSettings || {};
      const speed = userSettings.speed || 'gentle';
      const lastPromptTs = userData.lastPromptTs || 0;
      const timeSinceUserPrompted = Math.floor(Date.now() / 1000) - lastPromptTs;

      // Caching is disabled in dev environment to ease debugging
      if (false) {}

      // Too early for any prompts
      if (promptsFrequency[speed] >= timeSinceUserPrompted) {
        return Promise.reject($self.NOOP);
      }

      // Regular config check, no achievements expected
      return false;
    }).then(async expectAchievement => {
      const config = await $self.targetLanguagesConfig();
      if (util_FEATURES.ACHIEVEMENTS && expectAchievement) {
        if (!config) {
          browser_polyfill_default().runtime.sendMessage({
            type: 'content',
            subtype: 'MsgAchievementUnlocked',
            acKey: $self._achievementKey(),
            options: $self._getAchievementVariables()
          });
        } else {
          console.error(`Expected achievement, but targetLanguagesConfig still present at ${$self.handlerName}`);
        }
        return Promise.reject($self.NOOP);
      }
      if (config == null) {
        return Promise.reject($self.NOOP);
      }
      return config;
    });
  }
  removeUI() {
    const oldElements = this.document.getElementsByClassName('lahidnaUkrainizatsiya');
    for (let el of oldElements) {
      el.remove();
    }
  }
  async tweakLanguages() {
    const $self = this;
    return $self.suggestToChangeLanguages().then(language => $self.changeLanguageTo(language)).then(() => $self._expectAchievement()).then(() => $self._reloadPageOnceLanguagesChanged());
  }
  async _expectAchievement() {
    if (!util_FEATURES.ACHIEVEMENTS) return true;
    // NOTE: the same key is used in two different namespaces.
    //
    // content/default.js is using storage.local to mark that achievement
    //   is expected and should be visualised;
    //
    // achievements.js is using storage.sync to permanently track the goals achieved
    util_storageSet({
      [this._achievementKey()]: 1
    });
    return true;
  }
  _reloadPageOnceLanguagesChanged() {
    this.location.reload();
  }
  _achievementKey() {
    return `CT_${this.handlerName}`;
  }
  _tweakLanguagesCTA(languageConfig) {
    return 'Ресурс підтримує Українську. Налаштувати?';
  }
  async suggestToChangeLanguages() {
    const $self = this;
    return $self.targetLanguagesConfig().then(languageConfig => new Promise(async (resolve, reject) => {
      $self.removeUI();
      const callToAction = $self._tweakLanguagesCTA(languageConfig);
      const floaterHTML = `
<div style="z-index:5000; width:100%; position: fixed; top: 0;" class="lahidnaUkrainizatsiya" translate="no">
  <div style="margin: 20px; padding: 10px; border: 1px solid rgba(0,0,0,.09); box-shadow: 15px -4px 17px 1px rgba(19, 19, 22, 0.28); border-radius: 3px; background: #f3f1f1;">
    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCA1OCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4LjYwNTMgMTMuOTg0NUM0Ny44NTM5IDkuMTc0OTUgNDMuNjg0MyA1LjQ4MzQ5IDM4LjY2NjkgNS40ODM0OUMzNi43Nzk0IDUuNDgzNDkgMzQuOTY1NiA2LjAwNTcyIDMzLjM5MjQgNi45Nzk3N0MzMC45OTkxIDIuOTU3NTIgMjYuNjkwNCAwLjQ1NDU1OSAyMS45MDM4IDAuNDU0NTU5QzE0LjUwOTQgMC40NTQ1NTkgOC40OTMzMSA2LjQ3MDYxIDguNDkzMzEgMTMuODY1QzguNDkzMzEgMTMuOTEwOSA4LjQ5MzMxIDEzLjk1ODQgOC40OTQ5OCAxNC4wMDQyQzMuNzQyNjQgMTQuODA0NyAwIDE4Ljk0OCAwIDIzLjkyMjlDMCAyOS40NjkxIDQuNjIzMzggMzMuOTgwOCAxMC4xNjk2IDMzLjk4MDhINDcuMDQ4NUM1Mi41OTQ3IDMzLjk4MDggNTcuMjE4MSAyOS40NjkxIDU3LjIxODEgMjMuOTIyOUM1Ny4yMTgxIDE4LjkwNTUgNTMuNDE0OSAxNC43MzU5IDQ4LjYwNTMgMTMuOTg0NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" style="width: 25px; height: 25px; border-radius: 50%; background-color: #009393; padding: 5px; box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.3); margin-right: 1em; vertical-align:middle;">
    <span>${callToAction}</span>
    <div style="float: right">
      <input type='button' value='Так' style='padding: 4px; margin-top: 4px;' class='yes-btn' />
      <input type='button' value='Пізніше' style='padding: 4px; margin-top: 4px;' class='no-btn' />
    </div>
  </div>
</div>
<style>
  /* Make sure inner elements don't inhering any CSS, but browser defaults */
  :host {
    all: initial !important;
  }
</style>
`;
      const floaterHost = $self.document.createElement('div');
      $self.document.body.appendChild(floaterHost);
      const dom = floaterHost.attachShadow({
        mode: 'open'
      });
      dom.innerHTML = floaterHTML.trim();
      const floater = dom.firstChild;
      const observer = new MutationObserver(function (mutations) {
        // check for removed target
        mutations.forEach(function (mutation) {
          var nodes = Array.from(mutation.removedNodes);
          if (nodes.indexOf(floater) <= -1) return;
          if (reject) {
            reject('node removed');
          }
          observer.disconnect();
        });
      });
      observer.observe(dom, {
        childList: true
      });

      // Create ui in DOM
      // Bind 'Yes' function
      dom.querySelector('.lahidnaUkrainizatsiya .yes-btn').addEventListener('click', function (e) {
        resolve(languageConfig);
        reject = undefined;
        floater.remove();
      });

      // Bind 'No' function
      dom.querySelector('.lahidnaUkrainizatsiya .no-btn').addEventListener('click', function (e) {
        const options = JSON.stringify(languageConfig);
        reject(`user answered no to options ${options}`);
        reject = undefined;
        floater.remove();
      });
    }));
  }
  async changeLanguageTo(languages) {
    return this._changeLanguageTo(languages).then(() => this._targetLanguagesConfigDropCache());
  }
  async targetLanguagesConfig() {
    return this._targetLanguagesConfigCached().then(cachedConfig => {
      if (cachedConfig && cachedConfig.data) {
        return cachedConfig.data;
      }
      return this._targetLanguagesConfig().then(config => this._targetLanguagesConfigUpdateCache(config));
    });
  }
  async _targetLanguagesConfig() {
    const moreLanguages = this.moreLanguages;
    const supportedWantedLanguages = this.SUPPORTED_LANGUAGES().filter(value => moreLanguages.includes(value));
    if (supportedWantedLanguages.length == 0) return Promise.reject(this.NOOP);
    const uiLanguage = this.document.documentElement.lang.replace(/-.*/, '').toLowerCase();
    if (supportedWantedLanguages.indexOf(uiLanguage) === 0) return Promise.reject(this.NOOP);
    const config = supportedWantedLanguages.filter(value => value !== uiLanguage);
    if (!config.length) {
      return Promise.reject(this.NOOP);
    }
    return config;
  }
  _targetLanguagesConfigCached() {
    return storageGet(this.cacheKey).then(items => {
      const cache = items[this.cacheKey];
      if (!cache || !cache.ts) {
        return;
      }
      const targetLanguagesConfigAge = Math.round((new Date().getTime() - cache.ts) / 1000);
      if (targetLanguagesConfigAge > this.targetLanguagesConfigExpiresAfter) {
        return;
      }
      return cache;
    });
  }
  async _targetLanguagesConfigUpdateCache(config) {
    const cacheKey = this.cacheKey;
    util_storageSet({
      cacheKey: {
        data: config,
        ts: new Date().getTime()
      }
    });
    return config;
  }
  async _targetLanguagesConfigDropCache() {
    return storageRemove(this.cacheKey);
  }

  /* _generateNewLanguagesConfig() takes the current service config
   * in the form of an array of language codes
   * Returns the new suggested configuration, according to the user preferences.
   *
   * _generateNewLanguagesConfig() will return null if user preferences trigger
   * no changes to the service configuration or the initial service configuration was null or an empty array
   */

  _generateNewLanguagesConfig(currentConfig) {
    if (!currentConfig) return null;
    const $self = this;
    const moreLanguages = this.moreLanguages;
    const lessLanguages = this.lessLanguages;
    const supportedWantedLanguages = $self.SUPPORTED_LANGUAGES().filter(value => moreLanguages.includes(value));
    const newLangs = currentConfig.filter(lang_lang => {
      // the 'replace' part will have to evolve, as we add support for various dialects
      const lang = lang_lang.toLowerCase().replace(/-.*/, '');
      return lessLanguages.indexOf(lang) < 0;
    });
    newLangs.unshift(...supportedWantedLanguages.filter(lang_lang => {
      const lang = lang_lang.toLowerCase().replace(/-.*/, '');
      return newLangs.indexOf(lang) < 0;
    }));
    if (newLangs.length === 0) {
      return null;
    }

    // No changes needed
    if (newLangs.concat().sort().join(',') === currentConfig.concat().sort().join(',')) {
      return null;
    }

    // Suggest new config
    return newLangs;
  }
  _getAchievementVariables() {
    const dict = {};

    // Don't show languages unsupported by the handler
    const supportedWantedLanguages = this.SUPPORTED_LANGUAGES().filter(value => this.moreLanguages.includes(value));
    dict.lessLanguages = this.lessLanguages.map(l => `__MSG_lang_${l.replace(/-/g, '_')}_genetivus__`).join(', ').replace(/, ([^,]+)$/, ' та $1');
    dict.moreLanguages = supportedWantedLanguages.map(l => `__MSG_lang_${l.replace(/-/g, '_')}_nominativus__`).join(', ').replace(/, ([^,]+)$/, ' та $1');
    if (supportedWantedLanguages.length) {
      dict.firstLanguage = `__MSG_lang_${supportedWantedLanguages[0].replace(/-/g, '_')}_instrumentalis__`;
    } else {
      // For now this is known to happen with gs_rewrite,
      // which only requires 'lessLanguages'
      util_reportError('Goal reached, none of wanted languages supported', new Error('stack'));
      dict.firstLanguage = '';
    }
    return dict;
  }
}
;// CONCATENATED MODULE: ./src/js/content/facebook.js
function facebook_defineProperty(obj, key, value) { key = facebook_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function facebook_toPropertyKey(t) { var i = facebook_toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function facebook_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// In Firefox fetch is executed in the context of extension,
// content.fetch - in the content of the page. Hence this hack
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
const contextFetch = typeof variable !== 'undefined' ? content.fetch : fetch;
class facebookHandler extends handler {
  constructor(...args) {
    super(...args);
    facebook_defineProperty(this, "handlerName", 'facebook');
    // fb page config requires three requests to fb backend,
    // so cache results for six hours
    facebook_defineProperty(this, "targetLanguagesConfigExpiresAfter", 5 * 60);
  }
  // 6 * 60 * 60;

  SUPPORTED_LANGUAGES() {
    return ['uk', 'en'];
  }

  // All FB locales for future use
  // {"uk":"uk_UA","en":"en_UD","so":"so_SO","af":"af_ZA","az":"az_AZ","id":"id_ID","ms":"ms_MY","jv":"jv_ID","cx":"cx_PH","bs":"bs_BA","br":"br_FR","ca":"ca_ES","cs":"cs_CZ","co":"co_FR","cy":"cy_GB","da":"da_DK","de":"de_DE","et":"et_EE","es":"es_ES","eo":"eo_EO","eu":"eu_ES","tl":"tl_PH","fo":"fo_FO","fr":"fr_FR","fy":"fy_NL","ff":"ff_NG","fn":"fn_IT","ga":"ga_IE","gl":"gl_ES","gn":"gn_PY","ha":"ha_NG","hr":"hr_HR","rw":"rw_RW","iu":"iu_CA","ik":"ik_US","is":"is_IS","it":"it_IT","sw":"sw_KE","ht":"ht_HT","ku":"ku_TR","lv":"lv_LV","lt":"lt_LT","hu":"hu_HU","mg":"mg_MG","mt":"mt_MT","nl":"nl_BE","nb":"nb_NO","nn":"nn_NO","uz":"uz_UZ","pl":"pl_PL","pt":"pt_PT","ro":"ro_RO","sc":"sc_IT","sn":"sn_ZW","sq":"sq_AL","sz":"sz_PL","sk":"sk_SK","sl":"sl_SI","fi":"fi_FI","sv":"sv_SE","vi":"vi_VN","tr":"tr_TR","zz":"zz_TR","el":"el_GR","be":"be_BY","bg":"bg_BG","ky":"ky_KG","kk":"kk_KZ","mk":"mk_MK","mn":"mn_MN","ru":"ru_RU","sr":"sr_RS","tt":"tt_RU","tg":"tg_TJ","ka":"ka_GE","hy":"hy_AM","he":"he_IL","ur":"ur_PK","ar":"ar_AR","ps":"ps_AF","fa":"fa_IR","cb":"cb_IQ","sy":"sy_SY","tz":"tz_MA","am":"am_ET","ne":"ne_NP","mr":"mr_IN","hi":"hi_IN","as":"as_IN","bn":"bn_IN","pa":"pa_IN","gu":"gu_IN","or":"or_IN","ta":"ta_IN","te":"te_IN","kn":"kn_IN","ml":"ml_IN","si":"si_LK","th":"th_TH","lo":"lo_LA","my":"my_MM","km":"km_KH","ko":"ko_KR","zh":"zh_HK","ja":"ja_KS","uk_UA":"uk","en_GB":"en","so_SO":"so","af_ZA":"af","az_AZ":"az","id_ID":"id","ms_MY":"ms","jv_ID":"jv","cx_PH":"cx","bs_BA":"bs","br_FR":"br","ca_ES":"ca","cs_CZ":"cs","co_FR":"co","cy_GB":"cy","da_DK":"da","de_DE":"de","et_EE":"et","en_US":"en","en_UD":"en","es_LA":"es","es_ES":"es","eo_EO":"eo","eu_ES":"eu","tl_PH":"tl","fo_FO":"fo","fr_CA":"fr","fr_FR":"fr","fy_NL":"fy","ff_NG":"ff","fn_IT":"fn","ga_IE":"ga","gl_ES":"gl","gn_PY":"gn","ha_NG":"ha","hr_HR":"hr","rw_RW":"rw","iu_CA":"iu","ik_US":"ik","is_IS":"is","it_IT":"it","sw_KE":"sw","ht_HT":"ht","ku_TR":"ku","lv_LV":"lv","lt_LT":"lt","hu_HU":"hu","mg_MG":"mg","mt_MT":"mt","nl_NL":"nl","nb_NO":"nb","nn_NO":"nn","uz_UZ":"uz","pl_PL":"pl","pt_BR":"pt","pt_PT":"pt","ro_RO":"ro","sc_IT":"sc","sn_ZW":"sn","sq_AL":"sq","sz_PL":"sz","sk_SK":"sk","sl_SI":"sl","fi_FI":"fi","sv_SE":"sv","vi_VN":"vi","tr_TR":"tr","nl_BE":"nl","zz_TR":"zz","el_GR":"el","be_BY":"be","bg_BG":"bg","ky_KG":"ky","kk_KZ":"kk","mk_MK":"mk","mn_MN":"mn","ru_RU":"ru","sr_RS":"sr","tt_RU":"tt","tg_TJ":"tg","ka_GE":"ka","hy_AM":"hy","he_IL":"he","ur_PK":"ur","ar_AR":"ar","ps_AF":"ps","fa_IR":"fa","cb_IQ":"cb","sy_SY":"sy","tz_MA":"tz","am_ET":"am","ne_NP":"ne","mr_IN":"mr","hi_IN":"hi","as_IN":"as","bn_IN":"bn","pa_IN":"pa","gu_IN":"gu","or_IN":"or","ta_IN":"ta","te_IN":"te","kn_IN":"kn","ml_IN":"ml","si_LK":"si","th_TH":"th","lo_LA":"lo","my_MM":"my","km_KH":"km","ko_KR":"ko","zh_TW":"zh","zh_CN":"zh","zh_HK":"zh","ja_JP":"ja","ja_KS":"ja"}

  _tweakLanguagesCTA(languageConfig) {
    return 'Facebook підтримує Українську. Налаштувати?';
  }
  async _getTargetNoTranslateLangs() {
    /*
     * Fetches the "Languages for which you don't
     * want to be offered translations" part of Profile
     */
    const {
      fb_dtsg_match_async,
      user_id_match
    } = this._get_fb_tstg_and_user_id();
    const $self = this;
    return fetch('https://www.facebook.com/ajax/settings/language/secondary.php' + `?fb_dtsg_ag=${fb_dtsg_match_async}&__user=${user_id_match}&__a=1`).then(response => response.text()).then(html => $self._parseNotranslateLanguages(html)).catch(e => {
      util_reportError('fb _getTargetNoTranslateLangs() failed', e);
      return e;
    });
  }
  async _getTargetTranslateLang() {
    /*
     * Fetches the "Language into which you'd
     * like to have posts translated"
     */
    const {
      fb_dtsg_match,
      fb_dtsg_match_async,
      user_id_match
    } = this._get_fb_tstg_and_user_id();
    return fetch('https://www.facebook.com/ajax/settings/language/primary.php' + `?fb_dtsg_ag=${fb_dtsg_match_async}&__user=${user_id_match}&__a=1&__dyn=${fb_dtsg_match_async}`).then(response => response.text()).then(html => {
      const result = [];
      const re = /value=\\*"([^"]+?)\\*" selected=\\*"1\\*"/;
      const translate_to_match = html.match(re);
      if (!translate_to_match || translate_to_match[1] != facebookHandler.LANG_MAP[this.moreLanguages[0]]) {
        return this.moreLanguages[0];
      }
      return null;
    }).catch(e => {
      util_reportError('fb _getTargetTranslateLang() failed', e);
      return e;
    });
  }
  async _getTargetDisableAutotranslateLangs() {
    /*
     * Fetches the "Language into which you'd
     * like to have posts translated"
     */
    const {
      fb_dtsg_match,
      fb_dtsg_match_async,
      user_id_match
    } = this._get_fb_tstg_and_user_id();
    const $self = this;
    return fetch('https://www.facebook.com/ajax/settings/language/disable_autotranslate.php' + `?fb_dtsg_ag=${fb_dtsg_match_async}&__user=${user_id_match}&__a=1`).then(response => response.text()).then(html => $self._parseNotranslateLanguages(html)).catch(e => {
      util_reportError('fb _getTargetDisableAutotranslateLangs() failed', e);
      return e;
    });
  }
  async _targetLanguagesConfig() {
    const $self = this;
    const logoutForm = this.document.querySelector('form[action^="/logout"]');
    if (!logoutForm) {
      // Not logged in, nothing to do
      return null;
    }
    return Promise.all([super._targetLanguagesConfig(), this._getTargetTranslateLang(), this._getTargetNoTranslateLangs(), this._getTargetDisableAutotranslateLangs()]).then(results => {
      if (results.filter(r => r != null).length == 0) {
        return;
      }
      const [uiLangs, translateLang, noTranslateLangs, disableAutotranslateLangs] = results;
      return {
        uiLangs,
        translateLang,
        noTranslateLangs,
        disableAutotranslateLangs
      };
    });
  }
  async _changeLanguageTo(languages) {
    try {
      return Promise.all([this._changeUILanguageTo(languages.uiLangs), this._changeNoTranslateLanguagesTo(languages.noTranslateLangs), this._changeTranslateLanguageTo(languages.translateLang), this._changeDisableAutotranslateLanguagesTo(languages.disableAutotranslateLangs)]).then(results => {
        if (results.filter(r => r != true).length == 0) {
          return;
        }
        const [UILangChangedOK, noTranslateLanguagesChangedOk, translationsChangedOk, disableAutotranslateLanguagesOk] = results;
        return Promise.reject('One of changeLanguageTo() subcomponents failed', results);
      }).catch(e => {
        return e;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }
  _get_fb_tstg_and_user_id() {
    if (this['_cached_fb_dtsg']) {
      return this['_cached_fb_dtsg'];
    }
    const doc = new XMLSerializer().serializeToString(this.document);
    // fb_dtsg_match[1] contains fb_dtsg
    const fb_dtsg_match = doc.match(/"token":"([^"]+?)","async_get_token":"([^"]+?)"/);
    // user_id_match[1] contains user id
    const user_id_match = doc.match(/__user=(\d+)&/);
    this['_cached_fb_dtsg'] = {
      fb_dtsg_match: fb_dtsg_match[1],
      fb_dtsg_match_async: fb_dtsg_match[2],
      user_id_match: user_id_match[1]
    };
    return this['_cached_fb_dtsg'];
  }
  _changeUILanguageTo(uiLanguages) {
    if (!uiLanguages || uiLanguages.length <= 0) {
      return Promise.resolve(true);
    }
    const {
      fb_dtsg_match,
      user_id_match
    } = this._get_fb_tstg_and_user_id();
    const langValue = facebookHandler.LANG_MAP[uiLanguages[0]];
    if (!langValue) {
      throw new Error(`Language ${uiLanguages[0]} is not supported.`);
    }
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `fb_dtsg=${fb_dtsg_match}&new_language=${langValue}&new_fallback_language=&__user=${user_id_match}`
    };
    return contextFetch('https://www.facebook.com/ajax/settings/language/account.php', requestOptions).then(response => {
      return true;
    });
  }
  _changeNoTranslateLanguagesTo(dontTranslateLangs) {
    if (!dontTranslateLangs || dontTranslateLangs.length == 0) {
      return Promise.resolve(true);
    }
    const requestOptions = this._tokenizedDialectsToRequestOptions(dontTranslateLangs);
    return contextFetch('https://www.facebook.com/ajax/settings/language/secondary.php', requestOptions).then(response => {
      return true;
    });
  }
  _changeDisableAutotranslateLanguagesTo(disableAuthtranslateLangs) {
    if (!disableAuthtranslateLangs || disableAuthtranslateLangs.length == 0) {
      return Promise.resolve(true);
    }
    const requestOptions = this._tokenizedDialectsToRequestOptions(disableAuthtranslateLangs);
    return contextFetch('https://www.facebook.com/ajax/settings/language/disable_autotranslate.php', requestOptions).then(response => {
      return true;
    });
  }
  _changeTranslateLanguageTo(translateLang) {
    if (!translateLang) {
      return Promise.resolve(true);
    }
    const langValue = facebookHandler.LANG_MAP[translateLang];
    if (!langValue) {
      throw new Error(`Language ${translateLang} is not supported.`);
    }
    const {
      fb_dtsg_match_async,
      user_id_match,
      fb_dtsg_match
    } = this._get_fb_tstg_and_user_id();
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `fb_dtsg=${fb_dtsg_match}&primary_dialect=${langValue}&__user=${user_id_match}&__a=1`
    };
    return contextFetch('https://www.facebook.com/ajax/settings/language/primary.php', requestOptions).then(response => {
      return true;
    });
  }
  _parseNotranslateLanguages(html) {
    const result = [];
    const re = /"uniqueID":"(.+?)"/g;
    const lessLanguages = this.lessLanguages.map(l => facebookHandler.LANG_MAP[l]).filter(l => l != null);
    const moreLanguages = this.moreLanguages.map(l => facebookHandler.LANG_MAP[l]).filter(l => l != null);
    let match;
    do {
      match = re.exec(html);
      if (match) {
        result.push(match[1]);
      }
    } while (match);
    const excludeLangs = result.filter(l => lessLanguages.includes(l));
    const addLangs = moreLanguages.filter(l => !result.includes(l));
    if (excludeLangs.length > 0) {
      const newConfig = result.filter(l => !lessLanguages.includes(l));
      newConfig.push(...addLangs);
      return newConfig;
    }
    return null;
  }
  _tokenizedDialectsToRequestOptions(dialects) {
    const {
      fb_dtsg_match_async,
      user_id_match,
      fb_dtsg_match
    } = this._get_fb_tstg_and_user_id();
    const tokenizedDialects = dialects.map(l => `%20${l}`).join('');
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `fb_dtsg=${fb_dtsg_match}&tokenized_dialects=${tokenizedDialects}&__user=${user_id_match}&__a=1`
    };
    return requestOptions;
  }
}
facebook_defineProperty(facebookHandler, "LANG_MAP", {
  uk: 'uk_UA',
  en: 'en_GB',
  ru: 'ru_RU'
});
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





let API_BASE = (/* unused pure expression or super */ null && ("https://lm.hmara.info"));
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

util_storageGetSync('userId').then(items => {
  if (items.userId) {
    userId = items.userId;
  } else {
    userId = esm_browser_v4();
    util_storageSetSync({
      userId: userId
    }, function () {
      browser_polyfill_default().runtime.openOptionsPage();
    });
  }
});
function networking_sendEvent(type, data) {
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
  const strError = errorData instanceof Error ? serializeError(errorData) : errorData;
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
        eventId: uuidv4(),
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
    reportError(`Attempted to track unknown achievement '${acKey}'`, new Error('stack'));
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
    browser.notifications.create('AchievementUnlocked' + acKey, {
      title: `🏆 ${title}`,
      message: description,
      iconUrl: '/icon-128.png',
      type: 'basic',
      buttons: [{
        title: 'Всі досягнення'
      }]
    });
    browser.notifications.onButtonClicked.addListener(function (notifId, btnIdx) {
      if (notifId.startsWith('AchievementUnlocked') && btnIdx === 0) {
        browser.tabs.create({
          url: 'https://lu.hmara.info/achievements'
        });
      }
    });
  } catch (e) {
    reportError('Failed to create achievement notification', e);
  }
}
;// CONCATENATED MODULE: ./src/js/content/google-search.js
function google_search_defineProperty(obj, key, value) { key = google_search_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function google_search_toPropertyKey(t) { var i = google_search_toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function google_search_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




class googleSearchHandler extends handler {
  constructor(...args) {
    super(...args);
    google_search_defineProperty(this, "handlerName", 'google-search');
    // google page config requires one requests to google backend,
    // so cache results for three hours
    google_search_defineProperty(this, "targetLanguagesConfigExpiresAfter", 3 * 60 * 60);
  }
  SUPPORTED_LANGUAGES() {
    return ['uk'];
  }
  _tweakLanguagesCTA(languageConfig) {
    return 'Пошук Google підтримує Українську. Налаштувати?';
  }
  async needToTweakLanguages() {
    try {
      if (util_FEATURES.ACHIEVEMENTS && this.lessLanguages && this.lessLanguages.length) {
        const url = new URL(location.href);
        const lr = url.searchParams.get('lr');
        if (lr && lr.match('-lang_')) {
          browser_polyfill_default().runtime.sendMessage({
            type: 'content',
            subtype: 'MsgAchievementUnlocked',
            acKey: 'gs_rewrite',
            options: this._getAchievementVariables()
          });
        }
      }
    } catch (e) {
      util_reportError('Failed to process gs_rewrite achievement', e);
    }
    return super.needToTweakLanguages();
  }
  async _targetLanguagesConfig() {
    return null;

    /*
     * Fetches the "Languages for which you don't
     * want to be offered translations" part of Profile
     */
    const preferencesUrl = this.location.origin + '/preferences#languages';
    return fetch(preferencesUrl, {
      credentials: 'same-origin'
    }).then(r => r.text()).then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const googleSearchLangs = [...doc.querySelectorAll('#tsuid_1 input[name="lr"][checked="1"]')].map(x => x.value);
      let googleDisplayLang = doc.querySelector('#tsuid_1 .URIeEf input[name="lang"][checked="1"]').value;
      const sig = doc.querySelector('input[name="sig"]').value;
      const moreLanguages = this.moreLanguages;
      const lessLanguages = this.lessLanguages;
      const supportedWantedLanguages = this.SUPPORTED_LANGUAGES().filter(value => moreLanguages.includes(value));
      if (supportedWantedLanguages.length == 0 || supportedWantedLanguages.indexOf(googleDisplayLang) === 0) {
        googleDisplayLang = null;
      } else {
        googleDisplayLang = supportedWantedLanguages[0];
      }
      const newGoogleSearchLangs = googleSearchLangs.filter(lang_lang => {
        const lang = lang_lang.replace(/^lang_/, '').toLowerCase();
        return lessLanguages.indexOf(lang) < 0 && supportedWantedLanguages.indexOf(lang) < 0;
      });
      newGoogleSearchLangs.unshift(...supportedWantedLanguages.map(l => `lang_${l}`));

      // No changes needed
      if (newGoogleSearchLangs.sort().join(',') === googleSearchLangs.sort().join(',') && !googleDisplayLang) {
        return null;
      }
      return {
        googleSearchLangs: newGoogleSearchLangs,
        googleDisplayLang,
        sig
      };
    }).catch(e => {
      util_reportError('Failed to parse Google Search preferences page', e);
      return Promise.reject(this.NOOP);
    });
  }
  async _changeLanguageTo(languages) {
    try {
      // e.g. https://www.google.com/setprefs?sig=0_53_.....&hl=uk&lang=uk&lr=lang_uk

      const url = new URL(this.location.origin + '/setprefs');
      url.searchParams.append('sig', languages.sig);
      if (languages.googleDisplayLang) {
        url.searchParams.append('hl', languages.googleDisplayLang);
        url.searchParams.append('lang', languages.googleDisplayLang);
      }
      if (languages.googleSearchLangs) {
        for (let lang of languages.googleSearchLangs) {
          url.searchParams.append('lr', lang);
        }
      }
      return fetch(url, {
        credentials: 'same-origin'
      }).then(r => r.text()).then(html => {
        return true;
      });
    } catch (e) {
      util_reportError('GSearch changeLanguageTo', err);
      return Promise.reject(e);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/content/wikipedia.js
function wikipedia_defineProperty(obj, key, value) { key = wikipedia_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function wikipedia_toPropertyKey(t) { var i = wikipedia_toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function wikipedia_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

class wikipediaHandler extends handler {
  constructor(...args) {
    super(...args);
    wikipedia_defineProperty(this, "handlerName", 'wikipedia');
  }
  SUPPORTED_LANGUAGES() {
    return ['uk', 'crh', 'hy', 'af', 'be', 'bg', 'de', 'en', 'tl', 'id', 'sw', 'nl', 'vi', 'tr', 'ca', 'da', 'et', 'es', 'eo', 'fr', 'hr', 'it', 'lv', 'lt', 'hu', 'no', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'fi', 'sv', 'is', 'cs', 'el', 'sr', 'iw', 'ar', 'fa', 'hi', 'th', 'zh-CN', 'zh-TW', 'ja', 'ko'];
  }
  async _targetLanguagesConfigCached() {
    return null;
  }
  _tweakLanguagesCTA(languageConfig) {
    return 'Ця сторінка є Українською. Переглянути?';
  }
  async _targetLanguagesConfig() {
    const currentLang = document.querySelector('html').getAttribute('lang');
    if (this.moreLanguages.includes(currentLang)) {
      return null;
    }
    const langs = {};
    document.querySelectorAll('#p-lang .vector-menu-content a.interlanguage-link-target').forEach(a => langs[a.getAttribute('lang')] = a.getAttribute('href'));

    // Wiki layout changed, we support both
    if (!Object.keys(langs).length) {
      document.querySelectorAll('li.interlanguage-link a.interlanguage-link-target').forEach(a => langs[a.getAttribute('lang')] = a.getAttribute('href'));
    }

    // Wiki layout changed again, different wikis maintain different layout
    if (!Object.keys(langs).length) {
      document.querySelectorAll('#p-lang-btn li.interlanguage-link > a').forEach(a => langs[a.getAttribute('lang')] = a.getAttribute('href'));
    }
    for (var lng of this.moreLanguages) {
      if (!langs[lng]) continue;
      return [lng, langs[lng]];
    }
    return null;
  }
  async _changeLanguageTo(language) {
    window.location.replace(language[1]);
  }
  _reloadPageOnceLanguagesChanged() {
    // do nothing, override base class
  }
}
;// CONCATENATED MODULE: ./src/js/content/linkedin.js
var _class;
function linkedin_defineProperty(obj, key, value) { key = linkedin_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function linkedin_toPropertyKey(t) { var i = linkedin_toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function linkedin_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// In Firefox fetch is executed in the context of extension,
// content.fetch - in the content of the page. Hence this hack
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
const linkedin_contextFetch = typeof variable !== 'undefined' ? content.fetch : fetch;
class linkedinHandler extends handler {
  constructor(...args) {
    super(...args);
    linkedin_defineProperty(this, "handlerName", 'linkedin');
  }
  SUPPORTED_LANGUAGES() {
    return ['uk'];
  }

  // scraped from https://www.linkedin.com/mypreferences/d/language

  _tweakLanguagesCTA(languageConfig) {
    return 'LinkedIn підтримує Українську. Налаштувати?';
  }
  async _targetLanguagesConfig() {
    const $self = this;
    return fetch('https://www.linkedin.com/psettings/select-language-for-translation?li_theme=light&openInMobileMode=true').then(response => response.text()).then(html => $self._parseNotranslateLanguages(html));
  }
  _parseNotranslateLanguages(html) {
    const result = {};
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const uiLanguage = doc.documentElement.lang.replace(/-.*/, '').toLowerCase();
    const languageTranslateTo = doc.querySelector('input[name="primaryLanguageSetting"]:checked').value.replace(/_.*/, '');
    if (!languageTranslateTo) {
      throw new Error('Failed to match languageTranslateTo language on LinkedIn prefereces page');
    }
    let dontTranslateLanguagesElements = [];
    doc.querySelectorAll('span.label-secondary-langauge-item').forEach(x => {
      const text = x.innerText.replace(/\s*\(.*/, '');
      dontTranslateLanguagesElements.push(text);
    });
    const oldCfg = {};
    result['oldConfig'] = oldCfg;
    oldCfg['uiLanguage'] = uiLanguage;
    oldCfg['languageTranslateTo'] = languageTranslateTo;
    oldCfg['dontTranslateLanguagesElements'] = dontTranslateLanguagesElements;

    /*
      {
        "uiLanguage": "uk",
        "languageTranslateTo": "uk",
        "dontTranslateLanguagesElements": [
            "Українська",
            "English"
        ]
      }
    */

    const newConfig = {};
    result['newConfig'] = newConfig;
    if (oldCfg['uiLanguage'] !== this.moreLanguages[0]) newConfig['uiLanguage'] = this.moreLanguages[0];
    if (oldCfg['languageTranslateTo'] !== this.moreLanguages[0]) newConfig['languageTranslateTo'] = this.moreLanguages[0];
    const moreLanguages = this.moreLanguages;
    const lessLanguages = this.lessLanguages;
    const newDontTranslateLanguagesElements = dontTranslateLanguagesElements.filter(value => !lessLanguages.includes(linkedinHandler.SECONDARY_NAME_TO_LANG[value]));
    this.moreLanguages.forEach(lang => {
      const langMapped = linkedinHandler.LANG_TO_SECONDARY_NAME[lang];
      if (!newDontTranslateLanguagesElements.includes(langMapped)) {
        newDontTranslateLanguagesElements.push(langMapped);
      }
    });
    if (JSON.stringify(dontTranslateLanguagesElements) !== JSON.stringify(newDontTranslateLanguagesElements)) {
      newConfig['dontTranslateLanguagesElements'] = newDontTranslateLanguagesElements;
    }
    if (Object.keys(newConfig).length === 0) {
      return null;
    }
    return result;
  }
  async _changeTranslateLanguageTo(config) {
    if (!config['newConfig']['languageTranslateTo']) return;
    const CSRF = await this._getCSRF();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: `locale=${encodeURIComponent(config.newConfig.languageTranslateTo)}&csrfToken=${encodeURIComponent(CSRF)}`
    };

    // Translate to https://www.linkedin.com/psettings/select-language-for-translation
    // POST
    // locale=de_DE&csrfToken=ajax%3A1275605328103358844

    return linkedin_contextFetch('https://www.linkedin.com/psettings/select-language-for-translation', requestOptions).then(response => {
      return true;
    });
  }
  async _changeUILanguageTo(config) {
    if (!config['newConfig']['uiLanguage']) return;
    const locale = linkedinHandler.LANG_TO_LOCALE[config.newConfig.uiLanguage];
    const CSRF = await this._getCSRF();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: `locale=${encodeURIComponent(locale)}&csrfToken=${encodeURIComponent(CSRF)}`
    };
    return linkedin_contextFetch('https://www.linkedin.com/psettings/select-language', requestOptions).then(response => {
      return true;
    });
  }
  async _changeNoTranslateLanguagesTo(config) {
    const languages = config['newConfig']['dontTranslateLanguagesElements'];
    if (!languages) return;
    const CSRF = await this._getCSRF();
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: `locales=${encodeURIComponent(languages.join(','))}&csrfToken=${encodeURIComponent(CSRF)}`
    };

    // Translate to
    // POST
    // locales=%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%2CEnglish&csrfToken=ajax%3A1275605328103358844
    // locales: Українська,English

    return linkedin_contextFetch('https://www.linkedin.com/psettings/select-language-for-translation/secondary-languages', requestOptions).then(response => {
      return true;
    });
  }
  async _changeLanguageTo(config) {
    return this._changeUILanguageTo(config).then(() => this._changeTranslateLanguageTo(config)).then(() => this._changeNoTranslateLanguagesTo(config)).catch(e => {
      return e;
    });
  }
  async _getCSRF() {
    return fetch('https://www.linkedin.com/psettings/select-language-for-translation?li_theme=light&openInMobileMode=true').then(response => response.text()).then(html => this._parseCSRF(html));
  }
  _parseCSRF(html) {
    const CSRF_matched = html.match(/"csrfToken":"(.*?)"/);
    if (!CSRF_matched || !CSRF_matched[1]) {
      throw new Error('Failed to match CSRF LinkedIn prefereces page');
    }
    return CSRF_matched[1];
  }
}
_class = linkedinHandler;
linkedin_defineProperty(linkedinHandler, "LANG_TO_LOCALE", {
  ar: 'ar_AE',
  cs: 'cs_CZ',
  da: 'da_DK',
  de: 'de_DE',
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  hi: 'hi_IN',
  in: 'in_ID',
  it: 'it_IT',
  ja: 'ja_JP',
  ko: 'ko_KR',
  ms: 'ms_MY',
  nl: 'nl_NL',
  no: 'no_NO',
  pl: 'pl_PL',
  pt: 'pt_BR',
  ro: 'ro_RO',
  ru: 'ru_RU',
  sv: 'sv_SE',
  th: 'th_TH',
  tl: 'tl_PH',
  tr: 'tr_TR',
  uk: 'uk_UA',
  zh: 'zh_CN',
  zh: 'zh_TW'
});
/* scraped via script from https://www.linkedin.com/mypreferences/d/language-for-translation
   let langs = {};
   document
      .querySelectorAll('input[name="secondaryLanguageSetting"]')
      .forEach((x) => {
        const locale = x.id.replace(/^secondary_language_(.+?)(_.*)?$/, '$1');
        const value = x.value;
        langs[locale] = value;
      });
   console.log(JSON.stringify(langs));
   */
linkedin_defineProperty(linkedinHandler, "LANG_TO_SECONDARY_NAME", {
  af: 'Afrikaans',
  in: 'Bahasa Indonesia',
  ms: 'Bahasa Malaysia',
  bs: 'Bosanski',
  ca: 'Català',
  cs: 'Čeština',
  cy: 'Cymraeg',
  da: 'Dansk',
  de: 'Deutsch',
  et: 'Eesti keel',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  hr: 'Hrvatski',
  it: 'Italiano',
  sw: 'Kiswahili',
  lv: 'Latviešu valoda',
  lt: 'Lietuvių kalba',
  hu: 'Magyar',
  mt: 'Malti',
  nl: 'Nederlands',
  no: 'Norsk',
  pl: 'Polski',
  pt: 'Português',
  ro: 'Română',
  sk: 'Slovenčina',
  sl: 'Slovenščina',
  sr: 'Cрпски',
  fi: 'Suomi',
  sv: 'Svenska',
  tl: 'Tagalog',
  vi: 'Tiếng việt',
  tr: 'Türkçe',
  zh: '正體中文',
  ja: '日本語',
  ko: '한국어',
  ar: 'العربية',
  fa: 'فارسى',
  he: 'עברית',
  ur: 'اردو',
  hi: 'हिन्दी',
  th: 'ภาษาไทย',
  el: 'ελληνικά',
  bg: 'български',
  ru: 'Русский',
  uk: 'Українська'
});
// Reverse SECONDARY_NAME_TO_LANG
linkedin_defineProperty(linkedinHandler, "SECONDARY_NAME_TO_LANG", Object.entries(_class.LANG_TO_SECONDARY_NAME).reduce((acc, [key, value]) => (acc[value] = key, acc), {}));
;// CONCATENATED MODULE: ./src/js/content/shared/google-ui-languages.js


// This set of functions is to be called from a content process
// with the goal to prepare HTTP requests,
// send to the background process for execution,
// process the response and return relevant results

async function getGoogleUILangugages(cachedHtml) {
  // Use the cached html when provided
  const fetchDom = cachedHtml ? Promise.resolve(cachedHtml) : browser_polyfill_default().runtime.sendMessage({
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
  return browser_polyfill_default().runtime.sendMessage({
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
;// CONCATENATED MODULE: ./src/js/content/youtube.js
function youtube_defineProperty(obj, key, value) { key = youtube_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function youtube_toPropertyKey(t) { var i = youtube_toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function youtube_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



class youtubeHandler extends handler {
  constructor(...args) {
    super(...args);
    youtube_defineProperty(this, "handlerName", 'youtube');
  }
  SUPPORTED_LANGUAGES() {
    return ['uk'];
  }
  _tweakLanguagesCTA(languageConfig) {
    return 'Інтерфейс Youtube підтримує Українську. Налаштувати?';
  }
  async _targetLanguagesConfig() {
    const $self = this;
    return Promise.all([super._targetLanguagesConfig(), getGoogleUILangugages()]).then(([YTLangs, GoogleUILangsConfig]) => {
      const YTLang = YTLangs ? YTLangs[0] : null;
      if (GoogleUILangsConfig) {
        GoogleUILangsConfig.googleLangs = $self._generateNewLanguagesConfig(GoogleUILangsConfig.googleLangs);
      }
      if (!YTLangs && !GoogleUILangsConfig.googleLangs) {
        return Promise.reject($this.NOOP);
      }
      return {
        YTLang,
        GoogleUILangsConfig
      };
    });
  }
  async _changeLanguageTo({
    YTLang,
    GoogleUILangsConfig
  }) {
    // YT has an odd way of managing UI language preferences by storing those in cookie in PERF cookie, e.g.:
    // PREF=volume=100&tz=Europe.Amsterdam&al=uk%2Ben-GB%2Ben&f4=4000000&f5=20030&f6=40000000&hl=af&gl=UA&f7=100
    // hl and al define the UI, both paramters can be absent
    let prefValue = document.cookie.split('; ').find(row => row.startsWith('PREF='));
    if (prefValue && prefValue.match(/hl=/)) {
      prefValue = prefValue.replace(/hl=.*?(\&|$)/, 'hl=' + YTLang + '$1');
    } else {
      prefValue += '&hl=' + YTLang;
    }
    if (prefValue.match(/al=/)) {
      prefValue = prefValue.replace(/al=.*?(\&|$)/, 'al=' + YTLang + '$1');
    } else {
      prefValue += '&al=' + YTLang;
    }
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = 'PREF=' + prefValue + expires + '; domain=.youtube.com; path=/';
    return setGoogleUILangugages(GoogleUILangsConfig);
  }
}
youtube_defineProperty(youtubeHandler, "HTML_LANG_MAP", {
  uk: 'uk-UA'
});
youtube_defineProperty(youtubeHandler, "COOKIE_LANG_MAP", {
  uk: 'uk'
});
;// CONCATENATED MODULE: ./src/js/content/google-myaccount.js
function google_myaccount_defineProperty(obj, key, value) { key = google_myaccount_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function google_myaccount_toPropertyKey(t) { var i = google_myaccount_toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function google_myaccount_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



class googleMyaccountHandler extends handler {
  constructor(...args) {
    super(...args);
    google_myaccount_defineProperty(this, "handlerName", 'google-myaccount');
    google_myaccount_defineProperty(this, "preferencesUrl", 'https://myaccount.google.com/language');
    google_myaccount_defineProperty(this, "HTML_LANG_MAP", {
      uk: 'uk',
      en: 'en-GB'
    });
    google_myaccount_defineProperty(this, "COOKIE_LANG_MAP", {
      uk: 'uk'
    });
  }
  SUPPORTED_LANGUAGES() {
    return ['uk', 'en'];
  }
  _tweakLanguagesCTA(languageConfig) {
    return 'Інтерфейси Google підтримують Українську. Налаштувати?';
  }
  async _targetLanguagesConfig() {
    const $self = this;
    const html = $self.location.href === $self.preferencesUrl ? $self.document.documentElement.innerHTML : null;
    return getGoogleUILangugages(html).then(GoogleUILangsConfig => {
      if (!GoogleUILangsConfig || !GoogleUILangsConfig.googleLangs) {
        util_reportError('Failed to parse Google Account preferences page', e);
        return;
      }
      GoogleUILangsConfig.googleLangs = $self._generateNewLanguagesConfig(GoogleUILangsConfig.googleLangs);
      if (!GoogleUILangsConfig.googleLangs) {
        return Promise.reject($self.NOOP);
      }
      return GoogleUILangsConfig.googleLangs;
    }).catch(e => {
      if (e === $self.NOOP) return e;
      util_reportError('Failed to parse Google Account preferences page', e);
      return Promise.reject($self.NOOP);
    });
  }
  async _changeLanguageTo(GoogleUILangsConfig) {
    return setGoogleUILangugages(GoogleUILangsConfig);
  }
}
;// CONCATENATED MODULE: ./src/js/routing.js







function dispatch(location, document, moreLanguages, lessLanguages) {
  if (location.hostname.match(/\.facebook.com$/i)) {
    return new facebookHandler(...arguments);
  } else if (location.hostname.match(/myaccount\.google\.com$/i)) {
    return new googleMyaccountHandler(...arguments);
  } else if (location.hostname.match(/(^|\.)google\.(\w\w|co\.(\w\w)|com|com\.(\w\w)|\w\w)$/i)) {
    return new googleSearchHandler(...arguments);
  } else if (location.hostname.match(/\.wikipedia.org$/i)) {
    return new wikipediaHandler(...arguments);
  } else if (location.hostname.match(/www\.linkedin.com$/i)) {
    return new linkedinHandler(...arguments);
  } else if (location.hostname.match(/www\.youtube\.com$/i)) {
    return new youtubeHandler(...arguments);
  } else {
    //return new defaultHandler(...arguments);
  }
}
;// CONCATENATED MODULE: ./src/js/content.js





util_storageGetSync('userSettings').then(settings => {
  if (!util_FEATURES.CONTENT) return;
  let userSettings = settings.userSettings || {};
  let moreLanguages = userSettings.moreLanguages || [];
  let lessLanguages = userSettings.lessLanguages || [];
  if (!util_FEATURES.CONTENT) {
    return;
  }
  if (moreLanguages.length === 0) {
    return;
  }
  const handler = dispatch(window.location, document, moreLanguages, lessLanguages);
  if (!handler.isEnabled) return;
  try {
    handler.needToTweakLanguages().then(config => handler.tweakLanguages()).catch(e => {
      if (e === handler.NOOP) {
        return;
      }
      util_reportError(`Error in ${handler.handlerName} content flow`, e);
    });
  } catch (e) {
    util_reportError(`content.js: fatal error in ${handler.handlerName} flow`, e);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=content.bundle.js.map