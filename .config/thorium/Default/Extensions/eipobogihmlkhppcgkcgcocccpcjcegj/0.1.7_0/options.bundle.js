/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 755:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var version = "3.7.1",

	rhtmlSuffix = /HTML$/i,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		}
		if ( nodeType === 1 || nodeType === 11 ) {
			return elem.textContent;
		}
		if ( nodeType === 9 ) {
			return elem.documentElement.textContent;
		}
		if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




// Note: an element does not contain itself
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		a.contains ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if ( asCodePoint ) {

		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
		if ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when
					// strict-comparing two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( newContext != context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties
		// (see https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors
	// (see trac-13936).
	// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
	// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
	if ( documentElement.msMatchesSelector &&

		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	if ( val !== undefined ) {
		return val;
	}

	return elem.getAttribute( name );
};

find.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
jQuery.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	//
	// Support: Android <=4.0+
	// Testing for detecting duplicates is unpredictable so instead assume we can't
	// depend on duplicate detection in all browsers without a stable sort.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( results, sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			splice.call( results, duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		ATTR: function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		CHILD: function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		button: function( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "button" );
		},

		text: function( elem ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear
				// with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		first: createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		last: createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		even: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if ( argument < 0 ) {
				i = argument + length;
			} else if ( argument > length ) {
				i = length;
			} else {
				i = argument;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed ||
				multipleContexts( selector || "*",
					context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems;

		if ( matcher ) {

			// If we have a postFinder, or filtered seed, or non-seed postFilter
			// or preexisting results,
			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results;

			// Find primary matches
			matcher( matcherIn, matcherOut, context, xml );
		} else {
			matcherOut = matcherIn;
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element
			// (see https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find.TAG( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: iOS <=7 - 9 only
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
			// elements by id. (see trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							push.call( results, elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
}

// One-time assignments

// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialize against the default document
setDocument();

// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = find;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
find.compile = compile;
find.select = select;
find.setDocument = setDocument;
find.tokenize = tokenize;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is `display: block`
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 110:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(755);
 /*
 * # Semantic UI - 2.5.0
 * https://github.com/Semantic-Org/Semantic-UI
 * http://www.semantic-ui.com/
 *
 * Copyright 2022 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(p,h,v,b){p.site=p.fn.site=function(e){var s,i=(new Date).getTime(),o=[],t=e,n="string"==typeof t,l=[].slice.call(arguments,1),c=p.isPlainObject(e)?p.extend(!0,{},p.site.settings,e):p.extend({},p.site.settings),a=c.namespace,u=c.error,r="module-"+a,d=p(v),f=this,m=d.data(r),g={initialize:function(){g.instantiate()},instantiate:function(){g.verbose("Storing instance of site",g),m=g,d.data(r,g)},normalize:function(){g.fix.console(),g.fix.requestAnimationFrame()},fix:{console:function(){g.debug("Normalizing window.console"),console!==b&&console.log!==b||(g.verbose("Console not available, normalizing events"),g.disable.console()),void 0!==console.group&&void 0!==console.groupEnd&&void 0!==console.groupCollapsed||(g.verbose("Console group not available, normalizing events"),h.console.group=function(){},h.console.groupEnd=function(){},h.console.groupCollapsed=function(){}),void 0===console.markTimeline&&(g.verbose("Mark timeline not available, normalizing events"),h.console.markTimeline=function(){})},consoleClear:function(){g.debug("Disabling programmatic console clearing"),h.console.clear=function(){}},requestAnimationFrame:function(){g.debug("Normalizing requestAnimationFrame"),h.requestAnimationFrame===b&&(g.debug("RequestAnimationFrame not available, normalizing event"),h.requestAnimationFrame=h.requestAnimationFrame||h.mozRequestAnimationFrame||h.webkitRequestAnimationFrame||h.msRequestAnimationFrame||function(e){setTimeout(e,0)})}},moduleExists:function(e){return p.fn[e]!==b&&p.fn[e].settings!==b},enabled:{modules:function(e){var n=[];return e=e||c.modules,p.each(e,function(e,t){g.moduleExists(t)&&n.push(t)}),n}},disabled:{modules:function(e){var n=[];return e=e||c.modules,p.each(e,function(e,t){g.moduleExists(t)||n.push(t)}),n}},change:{setting:function(o,a,e,r){e="string"==typeof e?"all"===e?c.modules:[e]:e||c.modules,r=r===b||r,p.each(e,function(e,t){var n,i=!g.moduleExists(t)||(p.fn[t].settings.namespace||!1);g.moduleExists(t)&&(g.verbose("Changing default setting",o,a,t),p.fn[t].settings[o]=a,r&&i&&0<(n=p(":data(module-"+i+")")).length&&(g.verbose("Modifying existing settings",n),n[t]("setting",o,a)))})},settings:function(i,e,o){e="string"==typeof e?[e]:e||c.modules,o=o===b||o,p.each(e,function(e,t){var n;g.moduleExists(t)&&(g.verbose("Changing default setting",i,t),p.extend(!0,p.fn[t].settings,i),o&&a&&0<(n=p(":data(module-"+a+")")).length&&(g.verbose("Modifying existing settings",n),n[t]("setting",i)))})}},enable:{console:function(){g.console(!0)},debug:function(e,t){e=e||c.modules,g.debug("Enabling debug for modules",e),g.change.setting("debug",!0,e,t)},verbose:function(e,t){e=e||c.modules,g.debug("Enabling verbose debug for modules",e),g.change.setting("verbose",!0,e,t)}},disable:{console:function(){g.console(!1)},debug:function(e,t){e=e||c.modules,g.debug("Disabling debug for modules",e),g.change.setting("debug",!1,e,t)},verbose:function(e,t){e=e||c.modules,g.debug("Disabling verbose debug for modules",e),g.change.setting("verbose",!1,e,t)}},console:function(e){if(e){if(m.cache.console===b)return void g.error(u.console);g.debug("Restoring console function"),h.console=m.cache.console}else g.debug("Disabling console function"),m.cache.console=h.console,h.console={clear:function(){},error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},info:function(){},log:function(){},markTimeline:function(){},warn:function(){}}},destroy:function(){g.verbose("Destroying previous site for",d),d.removeData(r)},cache:{},setting:function(e,t){if(p.isPlainObject(e))p.extend(!0,c,e);else{if(t===b)return c[e];c[e]=t}},internal:function(e,t){if(p.isPlainObject(e))p.extend(!0,g,e);else{if(t===b)return g[e];g[e]=t}},debug:function(){c.debug&&(c.performance?g.performance.log(arguments):(g.debug=Function.prototype.bind.call(console.info,console,c.name+":"),g.debug.apply(console,arguments)))},verbose:function(){c.verbose&&c.debug&&(c.performance?g.performance.log(arguments):(g.verbose=Function.prototype.bind.call(console.info,console,c.name+":"),g.verbose.apply(console,arguments)))},error:function(){g.error=Function.prototype.bind.call(console.error,console,c.name+":"),g.error.apply(console,arguments)},performance:{log:function(e){var t,n;c.performance&&(n=(t=(new Date).getTime())-(i||t),i=t,o.push({Element:f,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(g.performance.timer),g.performance.timer=setTimeout(g.performance.display,500)},display:function(){var e=c.name+":",n=0;i=!1,clearTimeout(g.performance.timer),p.each(o,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",(console.group!==b||console.table!==b)&&0<o.length&&(console.groupCollapsed(e),console.table?console.table(o):p.each(o,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),o=[]}},invoke:function(i,e,t){var o,a,n,r=m;return e=e||l,t=f||t,"string"==typeof i&&r!==b&&(i=i.split(/[\. ]/),o=i.length-1,p.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(p.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==b)return a=r[n],!1;if(!p.isPlainObject(r[t])||e==o)return r[t]!==b?a=r[t]:g.error(u.method,i),!1;r=r[t]}})),p.isFunction(a)?n=a.apply(t,e):a!==b&&(n=a),p.isArray(s)?s.push(n):s!==b?s=[s,n]:n!==b&&(s=n),a}};return n?(m===b&&g.initialize(),g.invoke(t)):(m!==b&&g.destroy(),g.initialize()),s!==b?s:this},p.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","rating","shape","sidebar","state","sticky","tab","transition","visit","visibility"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},p.extend(p.expr[":"],{data:p.expr.createPseudo?p.expr.createPseudo(function(t){return function(e){return!!p.data(e,t)}}):function(e,t,n){return!!p.data(e,n[3])}})}(jQuery,window,document),function(F,e,O,D){"use strict";e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),F.fn.form=function(x){var C,w=F(this),S=w.selector||"",k=(new Date).getTime(),T=[],A=x,R=arguments[1],P="string"==typeof A,E=[].slice.call(arguments,1);return w.each(function(){var n,l,t,e,d,c,u,f,m,i,s,o,a,g,p,r=F(this),h=this,v=[],b=!1,y={initialize:function(){y.get.settings(),P?(p===D&&y.instantiate(),y.invoke(A)):(p!==D&&p.invoke("destroy"),y.verbose("Initializing form validation",r,d),y.bindEvents(),y.set.defaults(),y.instantiate())},instantiate:function(){y.verbose("Storing instance of module",y),p=y,r.data(a,y)},destroy:function(){y.verbose("Destroying previous module",p),y.removeEvents(),r.removeData(a)},refresh:function(){y.verbose("Refreshing selector cache"),n=r.find(f.field),l=r.find(f.group),t=r.find(f.message),r.find(f.prompt),e=r.find(f.submit),r.find(f.clear),r.find(f.reset)},submit:function(){y.verbose("Submitting form",r),r.submit()},attachEvents:function(e,t){t=t||"submit",F(e).on("click"+g,function(e){y[t](),e.preventDefault()})},bindEvents:function(){y.verbose("Attaching form events"),r.on("submit"+g,y.validate.form).on("blur"+g,f.field,y.event.field.blur).on("click"+g,f.submit,y.submit).on("click"+g,f.reset,y.reset).on("click"+g,f.clear,y.clear),d.keyboardShortcuts&&r.on("keydown"+g,f.field,y.event.field.keydown),n.each(function(){var e=F(this),t=e.prop("type"),n=y.get.changeEvent(t,e);F(this).on(n+g,y.event.field.change)})},clear:function(){n.each(function(){var e=F(this),t=e.parent(),n=e.closest(l),i=n.find(f.prompt),o=e.data(u.defaultValue)||"",a=t.is(f.uiCheckbox),r=t.is(f.uiDropdown);n.hasClass(m.error)&&(y.verbose("Resetting error on field",n),n.removeClass(m.error),i.remove()),r?(y.verbose("Resetting dropdown value",t,o),t.dropdown("clear")):a?e.prop("checked",!1):(y.verbose("Resetting field value",e,o),e.val(""))})},reset:function(){n.each(function(){var e=F(this),t=e.parent(),n=e.closest(l),i=n.find(f.prompt),o=e.data(u.defaultValue),a=t.is(f.uiCheckbox),r=t.is(f.uiDropdown),s=n.hasClass(m.error);o!==D&&(s&&(y.verbose("Resetting error on field",n),n.removeClass(m.error),i.remove()),r?(y.verbose("Resetting dropdown value",t,o),t.dropdown("restore defaults")):a?(y.verbose("Resetting checkbox value",t,o),e.prop("checked",o)):(y.verbose("Resetting field value",e,o),e.val(o)))})},determine:{isValid:function(){var n=!0;return F.each(c,function(e,t){y.validate.field(t,e,!0)||(n=!1)}),n}},is:{bracketedRule:function(e){return e.type&&e.type.match(d.regExp.bracket)},shorthandFields:function(e){var t=e[Object.keys(e)[0]];return y.is.shorthandRules(t)},shorthandRules:function(e){return"string"==typeof e||F.isArray(e)},empty:function(e){return!e||0===e.length||(e.is('input[type="checkbox"]')?!e.is(":checked"):y.is.blank(e))},blank:function(e){return""===F.trim(e.val())},valid:function(e){var n=!0;return e?(y.verbose("Checking if field is valid",e),y.validate.field(c[e],e,!1)):(y.verbose("Checking if form is valid"),F.each(c,function(e,t){y.is.valid(e)||(n=!1)}),n)}},removeEvents:function(){r.off(g),n.off(g),e.off(g),n.off(g)},event:{field:{keydown:function(e){var t=F(this),n=e.which,i=t.is(f.input),o=t.is(f.checkbox),a=0<t.closest(f.uiDropdown).length,r=13;n==27&&(y.verbose("Escape key pressed blurring field"),t.blur()),e.ctrlKey||n!=r||!i||a||o||(b||(t.one("keyup"+g,y.event.field.keyup),y.submit(),y.debug("Enter pressed on input submitting form")),b=!0)},keyup:function(){b=!1},blur:function(e){var t=F(this),n=t.closest(l),i=y.get.validation(t);n.hasClass(m.error)?(y.debug("Revalidating field",t,i),i&&y.validate.field(i)):"blur"==d.on&&i&&y.validate.field(i)},change:function(e){var t=F(this),n=t.closest(l),i=y.get.validation(t);i&&("change"==d.on||n.hasClass(m.error)&&d.revalidate)&&(clearTimeout(y.timer),y.timer=setTimeout(function(){y.debug("Revalidating field",t,y.get.validation(t)),y.validate.field(i)},d.delay))}}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!y.is.bracketedRule(e))&&(e.value!==D?e.value:e.type.match(d.regExp.bracket)[1]+"")},ruleName:function(e){return y.is.bracketedRule(e)?e.type.replace(e.type.match(d.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":y.get.inputEvent()},inputEvent:function(){return O.createElement("input").oninput!==D?"input":O.createElement("input").onpropertychange!==D?"propertychange":"keyup"},fieldsFromShorthand:function(e){var i={};return F.each(e,function(n,e){"string"==typeof e&&(e=[e]),i[n]={rules:[]},F.each(e,function(e,t){i[n].rules.push({type:t})})}),i},prompt:function(e,t){var n,i,o=y.get.ruleName(e),a=y.get.ancillaryValue(e),r=y.get.field(t.identifier),s=r.val(),l=F.isFunction(e.prompt)?e.prompt(s):e.prompt||d.prompt[o]||d.text.unspecifiedRule,c=-1!==l.search("{value}"),u=-1!==l.search("{name}");return c&&(l=l.replace("{value}",r.val())),u&&(i=1==(n=r.closest(f.group).find("label").eq(0)).length?n.text():r.prop("placeholder")||d.text.unspecifiedField,l=l.replace("{name}",i)),l=(l=l.replace("{identifier}",t.identifier)).replace("{ruleValue}",a),e.prompt||y.verbose("Using default validation prompt for type",l,o),l},settings:function(){var e;F.isPlainObject(x)?0<(e=Object.keys(x)).length&&(x[e[0]].identifier!==D&&x[e[0]].rules!==D)?(d=F.extend(!0,{},F.fn.form.settings,R),c=F.extend({},F.fn.form.settings.defaults,x),y.error(d.error.oldSyntax,h),y.verbose("Extending settings from legacy parameters",c,d)):(x.fields&&y.is.shorthandFields(x.fields)&&(x.fields=y.get.fieldsFromShorthand(x.fields)),d=F.extend(!0,{},F.fn.form.settings,x),c=F.extend({},F.fn.form.settings.defaults,d.fields),y.verbose("Extending settings",c,d)):(d=F.fn.form.settings,c=F.fn.form.settings.defaults,y.verbose("Using default form validation",c,d)),o=d.namespace,u=d.metadata,f=d.selector,m=d.className,i=d.regExp,s=d.error,a="module-"+o,g="."+o,p=r.data(a),y.refresh()},field:function(e){return y.verbose("Finding field with identifier",e),e=y.escape.string(e),0<n.filter("#"+e).length?n.filter("#"+e):0<n.filter('[name="'+e+'"]').length?n.filter('[name="'+e+'"]'):0<n.filter('[name="'+e+'[]"]').length?n.filter('[name="'+e+'[]"]'):0<n.filter("[data-"+u.validate+'="'+e+'"]').length?n.filter("[data-"+u.validate+'="'+e+'"]'):F("<input/>")},fields:function(e){var n=F();return F.each(e,function(e,t){n=n.add(y.get.field(t))}),n},validation:function(n){var i,o;return!!c&&(F.each(c,function(e,t){o=t.identifier||e,y.get.field(o)[0]==n[0]&&(t.identifier=o,i=t)}),i||!1)},value:function(e){var t=[];return t.push(e),y.get.values.call(h,t)[e]},values:function(e){var t=F.isArray(e)?y.get.fields(e):n,c={};return t.each(function(e,t){var n=F(t),i=(n.prop("type"),n.prop("name")),o=n.val(),a=n.is(f.checkbox),r=n.is(f.radio),s=-1!==i.indexOf("[]"),l=!!a&&n.is(":checked");i&&(s?(i=i.replace("[]",""),c[i]||(c[i]=[]),a?l?c[i].push(o||!0):c[i].push(!1):c[i].push(o)):r?c[i]!==D&&0!=c[i]||(c[i]=!!l&&(o||!0)):c[i]=a?!!l&&(o||!0):o)}),c}},has:{field:function(e){return y.verbose("Checking for existence of a field with identifier",e),"string"!=typeof(e=y.escape.string(e))&&y.error(s.identifier,e),0<n.filter("#"+e).length||(0<n.filter('[name="'+e+'"]').length||0<n.filter("[data-"+u.validate+'="'+e+'"]').length)}},escape:{string:function(e){return(e=String(e)).replace(i.escape,"\\$&")}},add:{rule:function(e,t){y.add.field(e,t)},field:function(n,e){var i={};y.is.shorthandRules(e)?(e=F.isArray(e)?e:[e],i[n]={rules:[]},F.each(e,function(e,t){i[n].rules.push({type:t})})):i[n]=e,c=F.extend({},c,i),y.debug("Adding rules",i,c)},fields:function(e){var t=e&&y.is.shorthandFields(e)?y.get.fieldsFromShorthand(e):e;c=F.extend({},c,t)},prompt:function(e,t){var n=y.get.field(e).closest(l),i=n.children(f.prompt),o=0!==i.length;t="string"==typeof t?[t]:t,y.verbose("Adding field error state",e),n.addClass(m.error),d.inline&&(o||(i=d.templates.prompt(t)).appendTo(n),i.html(t[0]),o?y.verbose("Inline errors are disabled, no inline error added",e):d.transition&&F.fn.transition!==D&&r.transition("is supported")?(y.verbose("Displaying error with css transition",d.transition),i.transition(d.transition+" in",d.duration)):(y.verbose("Displaying error with fallback javascript animation"),i.fadeIn(d.duration)))},errors:function(e){y.debug("Adding form error messages",e),y.set.error(),t.html(d.templates.error(e))}},remove:{rule:function(n,e){var i=F.isArray(e)?e:[e];if(e==D)return y.debug("Removed all rules"),void(c[n].rules=[]);c[n]!=D&&F.isArray(c[n].rules)&&F.each(c[n].rules,function(e,t){-1!==i.indexOf(t.type)&&(y.debug("Removed rule",t.type),c[n].rules.splice(e,1))})},field:function(e){var t=F.isArray(e)?e:[e];F.each(t,function(e,t){y.remove.rule(t)})},rules:function(e,n){F.isArray(e)?F.each(fields,function(e,t){y.remove.rule(t,n)}):y.remove.rule(e,n)},fields:function(e){y.remove.field(e)},prompt:function(e){var t=y.get.field(e).closest(l),n=t.children(f.prompt);t.removeClass(m.error),d.inline&&n.is(":visible")&&(y.verbose("Removing prompt for field",e),d.transition&&F.fn.transition!==D&&r.transition("is supported")?n.transition(d.transition+" out",d.duration,function(){n.remove()}):n.fadeOut(d.duration,function(){n.remove()}))}},set:{success:function(){r.removeClass(m.error).addClass(m.success)},defaults:function(){n.each(function(){var e=F(this),t=0<e.filter(f.checkbox).length?e.is(":checked"):e.val();e.data(u.defaultValue,t)})},error:function(){r.removeClass(m.success).addClass(m.error)},value:function(e,t){var n={};return n[e]=t,y.set.values.call(h,n)},values:function(e){F.isEmptyObject(e)||F.each(e,function(e,t){var n,i=y.get.field(e),o=i.parent(),a=F.isArray(t),r=o.is(f.uiCheckbox),s=o.is(f.uiDropdown),l=i.is(f.radio)&&r;0<i.length&&(a&&r?(y.verbose("Selecting multiple",t,i),o.checkbox("uncheck"),F.each(t,function(e,t){n=i.filter('[value="'+t+'"]'),o=n.parent(),0<n.length&&o.checkbox("check")})):l?(y.verbose("Selecting radio value",t,i),i.filter('[value="'+t+'"]').parent(f.uiCheckbox).checkbox("check")):r?(y.verbose("Setting checkbox value",t,o),!0===t?o.checkbox("check"):o.checkbox("uncheck")):s?(y.verbose("Setting dropdown value",t,o),o.dropdown("set selected",t)):(y.verbose("Setting field value",t,i),i.val(t)))})}},validate:{form:function(e,t){var n=y.get.values();if(b)return!1;if(v=[],y.determine.isValid()){if(y.debug("Form has no validation errors, submitting"),y.set.success(),!0!==t)return d.onSuccess.call(h,e,n)}else if(y.debug("Form has errors"),y.set.error(),d.inline||y.add.errors(v),r.data("moduleApi")!==D&&e.stopImmediatePropagation(),!0!==t)return d.onFailure.call(h,v,n)},field:function(n,e,t){t=t===D||t,"string"==typeof n&&(y.verbose("Validating field",n),n=c[e=n]);var i=n.identifier||e,o=y.get.field(i),a=!!n.depends&&y.get.field(n.depends),r=!0,s=[];return n.identifier||(y.debug("Using field name as identifier",i),n.identifier=i),o.prop("disabled")?(y.debug("Field is disabled. Skipping",i),r=!0):n.optional&&y.is.blank(o)?(y.debug("Field is optional and blank. Skipping",i),r=!0):n.depends&&y.is.empty(a)?(y.debug("Field depends on another value that is not present or empty. Skipping",a),r=!0):n.rules!==D&&F.each(n.rules,function(e,t){y.has.field(i)&&!y.validate.rule(n,t)&&(y.debug("Field is invalid",i,t.type),s.push(y.get.prompt(t,n)),r=!1)}),r?(t&&(y.remove.prompt(i,s),d.onValid.call(o)),!0):(t&&(v=v.concat(s),y.add.prompt(i,s),d.onInvalid.call(o,s)),!1)},rule:function(e,t){var n=y.get.field(e.identifier),i=(t.type,n.val()),o=y.get.ancillaryValue(t),a=y.get.ruleName(t),r=d.rules[a];if(F.isFunction(r))return i=i===D||""===i||null===i?"":F.trim(i+""),r.call(n,i,o);y.error(s.noRule,a)}},setting:function(e,t){if(F.isPlainObject(e))F.extend(!0,d,e);else{if(t===D)return d[e];d[e]=t}},internal:function(e,t){if(F.isPlainObject(e))F.extend(!0,y,e);else{if(t===D)return y[e];y[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?y.performance.log(arguments):(y.debug=Function.prototype.bind.call(console.info,console,d.name+":"),y.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?y.performance.log(arguments):(y.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),y.verbose.apply(console,arguments)))},error:function(){d.silent||(y.error=Function.prototype.bind.call(console.error,console,d.name+":"),y.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(k||t),k=t,T.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:h,"Execution Time":n})),clearTimeout(y.performance.timer),y.performance.timer=setTimeout(y.performance.display,500)},display:function(){var e=d.name+":",n=0;k=!1,clearTimeout(y.performance.timer),F.each(T,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",S&&(e+=" '"+S+"'"),1<w.length&&(e+=" ("+w.length+")"),(console.group!==D||console.table!==D)&&0<T.length&&(console.groupCollapsed(e),console.table?console.table(T):F.each(T,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),T=[]}},invoke:function(i,e,t){var o,a,n,r=p;return e=e||E,t=h||t,"string"==typeof i&&r!==D&&(i=i.split(/[\. ]/),o=i.length-1,F.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(F.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==D)return a=r[n],!1;if(!F.isPlainObject(r[t])||e==o)return r[t]!==D&&(a=r[t]),!1;r=r[t]}})),F.isFunction(a)?n=a.apply(t,e):a!==D&&(n=a),F.isArray(C)?C.push(n):C!==D?C=[C,n]:n!==D&&(C=n),a}};y.initialize()}),C!==D?C:this},F.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},metadata:{defaultValue:"default",validate:"validate"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field"},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} must contain "{ruleValue}"',containExactly:'{name} must contain exactly "{ruleValue}"',doesntContain:'{name} cannot contain  "{ruleValue}"',doesntContainExactly:'{name} cannot contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."},templates:{error:function(e){var n='<ul class="list">';return F.each(e,function(e,t){n+="<li>"+t+"</li>"}),F(n+="</ul>")},prompt:function(e){return F("<div/>").addClass("ui basic red pointing prompt label").html(e[0])}},rules:{empty:function(e){return!(e===D||""===e||F.isArray(e)&&0===e.length)},checked:function(){return 0<F(this).filter(":checked").length},email:function(e){return F.fn.form.settings.regExp.email.test(e)},url:function(e){return F.fn.form.settings.regExp.url.test(e)},regExp:function(e,t){if(t instanceof RegExp)return e.match(t);var n,i=t.match(F.fn.form.settings.regExp.flags);return i&&(t=2<=i.length?i[1]:t,n=3<=i.length?i[2]:""),e.match(new RegExp(t,n))},integer:function(e,t){var n,i,o,a=F.fn.form.settings.regExp.integer;return t&&-1===["",".."].indexOf(t)&&(-1==t.indexOf("..")?a.test(t)&&(n=i=+t):(o=t.split("..",2),a.test(o[0])&&(n=+o[0]),a.test(o[1])&&(i=+o[1]))),a.test(e)&&(n===D||n<=e)&&(i===D||e<=i)},decimal:function(e){return F.fn.form.settings.regExp.decimal.test(e)},number:function(e){return F.fn.form.settings.regExp.number.test(e)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return(e="string"==typeof e?e.toLowerCase():e)!=(t="string"==typeof t?t.toLowerCase():t)},notExactly:function(e,t){return e!=t},contains:function(e,t){return t=t.replace(F.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t,"i"))},containsExactly:function(e,t){return t=t.replace(F.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t))},doesntContain:function(e,t){return t=t.replace(F.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t,"i"))},doesntContainExactly:function(e,t){return t=t.replace(F.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t))},minLength:function(e,t){return e!==D&&e.length>=t},length:function(e,t){return e!==D&&e.length>=t},exactLength:function(e,t){return e!==D&&e.length==t},maxLength:function(e,t){return e!==D&&e.length<=t},match:function(e,t){var n;F(this);return 0<F('[data-validate="'+t+'"]').length?n=F('[data-validate="'+t+'"]').val():0<F("#"+t).length?n=F("#"+t).val():0<F('[name="'+t+'"]').length?n=F('[name="'+t+'"]').val():0<F('[name="'+t+'[]"]').length&&(n=F('[name="'+t+'[]"]')),n!==D&&e.toString()==n.toString()},different:function(e,t){var n;F(this);return 0<F('[data-validate="'+t+'"]').length?n=F('[data-validate="'+t+'"]').val():0<F("#"+t).length?n=F("#"+t).val():0<F('[name="'+t+'"]').length?n=F('[name="'+t+'"]').val():0<F('[name="'+t+'[]"]').length&&(n=F('[name="'+t+'[]"]')),n!==D&&e.toString()!==n.toString()},creditCard:function(n,e){var t,i,o={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},a={},r=!1,s="string"==typeof e&&e.split(",");if("string"==typeof n&&0!==n.length){if(n=n.replace(/[\-]/g,""),s&&(F.each(s,function(e,t){(i=o[t])&&(a={length:-1!==F.inArray(n.length,i.length),pattern:-1!==n.search(i.pattern)}).length&&a.pattern&&(r=!0)}),!r))return!1;if((t={number:-1!==F.inArray(n.length,o.unionPay.length),pattern:-1!==n.search(o.unionPay.pattern)}).number&&t.pattern)return!0;for(var l=n.length,c=0,u=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],d=0;l--;)d+=u[c][parseInt(n.charAt(l),10)],c^=1;return d%10==0&&0<d}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document),function(S,k,T){"use strict";k=void 0!==k&&k.Math==Math?k:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.accordion=function(a){var v,r=S(this),b=(new Date).getTime(),y=[],x=a,C="string"==typeof x,w=[].slice.call(arguments,1);k.requestAnimationFrame||k.mozRequestAnimationFrame||k.webkitRequestAnimationFrame||k.msRequestAnimationFrame;return r.each(function(){var e,c=S.isPlainObject(a)?S.extend(!0,{},S.fn.accordion.settings,a):S.extend({},S.fn.accordion.settings),u=c.className,t=c.namespace,d=c.selector,s=c.error,n="."+t,i="module-"+t,o=r.selector||"",f=S(this),m=f.find(d.title),g=f.find(d.content),l=this,p=f.data(i),h={initialize:function(){h.debug("Initializing",f),h.bind.events(),c.observeChanges&&h.observeChanges(),h.instantiate()},instantiate:function(){p=h,f.data(i,h)},destroy:function(){h.debug("Destroying previous instance",f),f.off(n).removeData(i)},refresh:function(){m=f.find(d.title),g=f.find(d.content)},observeChanges:function(){"MutationObserver"in k&&((e=new MutationObserver(function(e){h.debug("DOM tree modified, updating selector cache"),h.refresh()})).observe(l,{childList:!0,subtree:!0}),h.debug("Setting up mutation observer",e))},bind:{events:function(){h.debug("Binding delegated events"),f.on(c.on+n,d.trigger,h.event.click)}},event:{click:function(){h.toggle.call(this)}},toggle:function(e){var t=e!==T?"number"==typeof e?m.eq(e):S(e).closest(d.title):S(this).closest(d.title),n=t.next(g),i=n.hasClass(u.animating),o=n.hasClass(u.active),a=o&&!i,r=!o&&i;h.debug("Toggling visibility of content",t),a||r?c.collapsible?h.close.call(t):h.debug("Cannot close accordion content collapsing is disabled"):h.open.call(t)},open:function(e){var t=e!==T?"number"==typeof e?m.eq(e):S(e).closest(d.title):S(this).closest(d.title),n=t.next(g),i=n.hasClass(u.animating);n.hasClass(u.active)||i?h.debug("Accordion already open, skipping",n):(h.debug("Opening accordion content",t),c.onOpening.call(n),c.onChanging.call(n),c.exclusive&&h.closeOthers.call(t),t.addClass(u.active),n.stop(!0,!0).addClass(u.animating),c.animateChildren&&(S.fn.transition!==T&&f.transition("is supported")?n.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:c.debug,verbose:c.verbose,duration:c.duration}):n.children().stop(!0,!0).animate({opacity:1},c.duration,h.resetOpacity)),n.slideDown(c.duration,c.easing,function(){n.removeClass(u.animating).addClass(u.active),h.reset.display.call(this),c.onOpen.call(this),c.onChange.call(this)}))},close:function(e){var t=e!==T?"number"==typeof e?m.eq(e):S(e).closest(d.title):S(this).closest(d.title),n=t.next(g),i=n.hasClass(u.animating),o=n.hasClass(u.active);!o&&!(!o&&i)||o&&i||(h.debug("Closing accordion content",n),c.onClosing.call(n),c.onChanging.call(n),t.removeClass(u.active),n.stop(!0,!0).addClass(u.animating),c.animateChildren&&(S.fn.transition!==T&&f.transition("is supported")?n.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:c.debug,verbose:c.verbose,duration:c.duration}):n.children().stop(!0,!0).animate({opacity:0},c.duration,h.resetOpacity)),n.slideUp(c.duration,c.easing,function(){n.removeClass(u.animating).removeClass(u.active),h.reset.display.call(this),c.onClose.call(this),c.onChange.call(this)}))},closeOthers:function(e){var t,n,i=e!==T?m.eq(e):S(this).closest(d.title),o=i.parents(d.content).prev(d.title),a=i.closest(d.accordion),r=d.title+"."+u.active+":visible",s=d.content+"."+u.active+":visible",l=c.closeNested?(t=a.find(r).not(o)).next(g):(t=a.find(r).not(o),n=a.find(s).find(r).not(o),(t=t.not(n)).next(g));0<t.length&&(h.debug("Exclusive enabled, closing other content",t),t.removeClass(u.active),l.removeClass(u.animating).stop(!0,!0),c.animateChildren&&(S.fn.transition!==T&&f.transition("is supported")?l.children().transition({animation:"fade out",useFailSafe:!0,debug:c.debug,verbose:c.verbose,duration:c.duration}):l.children().stop(!0,!0).animate({opacity:0},c.duration,h.resetOpacity)),l.slideUp(c.duration,c.easing,function(){S(this).removeClass(u.active),h.reset.display.call(this)}))},reset:{display:function(){h.verbose("Removing inline display from element",this),S(this).css("display",""),""===S(this).attr("style")&&S(this).attr("style","").removeAttr("style")},opacity:function(){h.verbose("Removing inline opacity from element",this),S(this).css("opacity",""),""===S(this).attr("style")&&S(this).attr("style","").removeAttr("style")}},setting:function(e,t){if(h.debug("Changing setting",e,t),S.isPlainObject(e))S.extend(!0,c,e);else{if(t===T)return c[e];S.isPlainObject(c[e])?S.extend(!0,c[e],t):c[e]=t}},internal:function(e,t){if(h.debug("Changing internal",e,t),t===T)return h[e];S.isPlainObject(e)?S.extend(!0,h,e):h[e]=t},debug:function(){!c.silent&&c.debug&&(c.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,c.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!c.silent&&c.verbose&&c.debug&&(c.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,c.name+":"),h.verbose.apply(console,arguments)))},error:function(){c.silent||(h.error=Function.prototype.bind.call(console.error,console,c.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var t,n;c.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var e=c.name+":",n=0;b=!1,clearTimeout(h.performance.timer),S.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",o&&(e+=" '"+o+"'"),(console.group!==T||console.table!==T)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):S.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=p;return e=e||w,t=l||t,"string"==typeof i&&r!==T&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==T)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==T?a=r[t]:h.error(s.method,i),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==T&&(n=a),S.isArray(v)?v.push(n):v!==T?v=[v,n]:n!==T&&(v=n),a}};C?(p===T&&h.initialize(),h.invoke(x)):(p!==T&&p.invoke("destroy"),h.initialize())}),v!==T?v:this},S.fn.accordion.settings={name:"Accordion",namespace:"accordion",silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function(){},onClosing:function(){},onChanging:function(){},onOpen:function(){},onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},S.extend(S.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,void document),function(T,A,R,P){"use strict";A=void 0!==A&&A.Math==Math?A:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.checkbox=function(v){var b,e=T(this),y=e.selector||"",x=(new Date).getTime(),C=[],w=v,S="string"==typeof w,k=[].slice.call(arguments,1);return e.each(function(){var e,i=T.extend(!0,{},T.fn.checkbox.settings,v),t=i.className,n=i.namespace,o=i.selector,s=i.error,a="."+n,r="module-"+n,l=T(this),c=T(this).children(o.label),u=T(this).children(o.input),d=u[0],f=!1,m=!1,g=l.data(r),p=this,h={initialize:function(){h.verbose("Initializing checkbox",i),h.create.label(),h.bind.events(),h.set.tabbable(),h.hide.input(),h.observeChanges(),h.instantiate(),h.setup()},instantiate:function(){h.verbose("Storing instance of module",h),g=h,l.data(r,h)},destroy:function(){h.verbose("Destroying module"),h.unbind.events(),h.show.input(),l.removeData(r)},fix:{reference:function(){l.is(o.input)&&(h.debug("Behavior called on <input> adjusting invoked element"),l=l.closest(o.checkbox),h.refresh())}},setup:function(){h.set.initialLoad(),h.is.indeterminate()?(h.debug("Initial value is indeterminate"),h.indeterminate()):h.is.checked()?(h.debug("Initial value is checked"),h.check()):(h.debug("Initial value is unchecked"),h.uncheck()),h.remove.initialLoad()},refresh:function(){c=l.children(o.label),u=l.children(o.input),d=u[0]},hide:{input:function(){h.verbose("Modifying <input> z-index to be unselectable"),u.addClass(t.hidden)}},show:{input:function(){h.verbose("Modifying <input> z-index to be selectable"),u.removeClass(t.hidden)}},observeChanges:function(){"MutationObserver"in A&&((e=new MutationObserver(function(e){h.debug("DOM tree modified, updating selector cache"),h.refresh()})).observe(p,{childList:!0,subtree:!0}),h.debug("Setting up mutation observer",e))},attachEvents:function(e,t){var n=T(e);t=T.isFunction(h[t])?h[t]:h.toggle,0<n.length?(h.debug("Attaching checkbox events to element",e,t),n.on("click"+a,t)):h.error(s.notFound)},event:{click:function(e){var t=T(e.target);t.is(o.input)?h.verbose("Using default check action on initialized checkbox"):t.is(o.link)?h.debug("Clicking link inside checkbox, skipping toggle"):(h.toggle(),u.focus(),e.preventDefault())},keydown:function(e){var t=e.which,n=13,i=32;m=t==27?(h.verbose("Escape key pressed blurring field"),u.blur(),!0):!(e.ctrlKey||t!=i&&t!=n)&&(h.verbose("Enter/space key pressed, toggling checkbox"),h.toggle(),!0)},keyup:function(e){m&&e.preventDefault()}},check:function(){h.should.allowCheck()&&(h.debug("Checking checkbox",u),h.set.checked(),h.should.ignoreCallbacks()||(i.onChecked.call(d),i.onChange.call(d)))},uncheck:function(){h.should.allowUncheck()&&(h.debug("Unchecking checkbox"),h.set.unchecked(),h.should.ignoreCallbacks()||(i.onUnchecked.call(d),i.onChange.call(d)))},indeterminate:function(){h.should.allowIndeterminate()?h.debug("Checkbox is already indeterminate"):(h.debug("Making checkbox indeterminate"),h.set.indeterminate(),h.should.ignoreCallbacks()||(i.onIndeterminate.call(d),i.onChange.call(d)))},determinate:function(){h.should.allowDeterminate()?h.debug("Checkbox is already determinate"):(h.debug("Making checkbox determinate"),h.set.determinate(),h.should.ignoreCallbacks()||(i.onDeterminate.call(d),i.onChange.call(d)))},enable:function(){h.is.enabled()?h.debug("Checkbox is already enabled"):(h.debug("Enabling checkbox"),h.set.enabled(),i.onEnable.call(d),i.onEnabled.call(d))},disable:function(){h.is.disabled()?h.debug("Checkbox is already disabled"):(h.debug("Disabling checkbox"),h.set.disabled(),i.onDisable.call(d),i.onDisabled.call(d))},get:{radios:function(){var e=h.get.name();return T('input[name="'+e+'"]').closest(o.checkbox)},otherRadios:function(){return h.get.radios().not(l)},name:function(){return u.attr("name")}},is:{initialLoad:function(){return f},radio:function(){return u.hasClass(t.radio)||"radio"==u.attr("type")},indeterminate:function(){return u.prop("indeterminate")!==P&&u.prop("indeterminate")},checked:function(){return u.prop("checked")!==P&&u.prop("checked")},disabled:function(){return u.prop("disabled")!==P&&u.prop("disabled")},enabled:function(){return!h.is.disabled()},determinate:function(){return!h.is.indeterminate()},unchecked:function(){return!h.is.checked()}},should:{allowCheck:function(){return h.is.determinate()&&h.is.checked()&&!h.should.forceCallbacks()?(h.debug("Should not allow check, checkbox is already checked"),!1):!1!==i.beforeChecked.apply(d)||(h.debug("Should not allow check, beforeChecked cancelled"),!1)},allowUncheck:function(){return h.is.determinate()&&h.is.unchecked()&&!h.should.forceCallbacks()?(h.debug("Should not allow uncheck, checkbox is already unchecked"),!1):!1!==i.beforeUnchecked.apply(d)||(h.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1)},allowIndeterminate:function(){return h.is.indeterminate()&&!h.should.forceCallbacks()?(h.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):!1!==i.beforeIndeterminate.apply(d)||(h.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1)},allowDeterminate:function(){return h.is.determinate()&&!h.should.forceCallbacks()?(h.debug("Should not allow determinate, checkbox is already determinate"),!1):!1!==i.beforeDeterminate.apply(d)||(h.debug("Should not allow determinate, beforeDeterminate cancelled"),!1)},forceCallbacks:function(){return h.is.initialLoad()&&i.fireOnInit},ignoreCallbacks:function(){return f&&!i.fireOnInit}},can:{change:function(){return!(l.hasClass(t.disabled)||l.hasClass(t.readOnly)||u.prop("disabled")||u.prop("readonly"))},uncheck:function(){return"boolean"==typeof i.uncheckable?i.uncheckable:!h.is.radio()}},set:{initialLoad:function(){f=!0},checked:function(){h.verbose("Setting class to checked"),l.removeClass(t.indeterminate).addClass(t.checked),h.is.radio()&&h.uncheckOthers(),h.is.indeterminate()||!h.is.checked()?(h.verbose("Setting state to checked",d),u.prop("indeterminate",!1).prop("checked",!0),h.trigger.change()):h.debug("Input is already checked, skipping input property change")},unchecked:function(){h.verbose("Removing checked class"),l.removeClass(t.indeterminate).removeClass(t.checked),h.is.indeterminate()||!h.is.unchecked()?(h.debug("Setting state to unchecked"),u.prop("indeterminate",!1).prop("checked",!1),h.trigger.change()):h.debug("Input is already unchecked")},indeterminate:function(){h.verbose("Setting class to indeterminate"),l.addClass(t.indeterminate),h.is.indeterminate()?h.debug("Input is already indeterminate, skipping input property change"):(h.debug("Setting state to indeterminate"),u.prop("indeterminate",!0),h.trigger.change())},determinate:function(){h.verbose("Removing indeterminate class"),l.removeClass(t.indeterminate),h.is.determinate()?h.debug("Input is already determinate, skipping input property change"):(h.debug("Setting state to determinate"),u.prop("indeterminate",!1))},disabled:function(){h.verbose("Setting class to disabled"),l.addClass(t.disabled),h.is.disabled()?h.debug("Input is already disabled, skipping input property change"):(h.debug("Setting state to disabled"),u.prop("disabled","disabled"),h.trigger.change())},enabled:function(){h.verbose("Removing disabled class"),l.removeClass(t.disabled),h.is.enabled()?h.debug("Input is already enabled, skipping input property change"):(h.debug("Setting state to enabled"),u.prop("disabled",!1),h.trigger.change())},tabbable:function(){h.verbose("Adding tabindex to checkbox"),u.attr("tabindex")===P&&u.attr("tabindex",0)}},remove:{initialLoad:function(){f=!1}},trigger:{change:function(){var e=R.createEvent("HTMLEvents"),t=u[0];t&&(h.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},create:{label:function(){0<u.prevAll(o.label).length?(u.prev(o.label).detach().insertAfter(u),h.debug("Moving existing label",c)):h.has.label()||(c=T("<label>").insertAfter(u),h.debug("Creating label",c))}},has:{label:function(){return 0<c.length}},bind:{events:function(){h.verbose("Attaching checkbox events"),l.on("click"+a,h.event.click).on("keydown"+a,o.input,h.event.keydown).on("keyup"+a,o.input,h.event.keyup)}},unbind:{events:function(){h.debug("Removing events"),l.off(a)}},uncheckOthers:function(){var e=h.get.otherRadios();h.debug("Unchecking other radios",e),e.removeClass(t.checked)},toggle:function(){h.can.change()?h.is.indeterminate()||h.is.unchecked()?(h.debug("Currently unchecked"),h.check()):h.is.checked()&&h.can.uncheck()&&(h.debug("Currently checked"),h.uncheck()):h.is.radio()||h.debug("Checkbox is read-only or disabled, ignoring toggle")},setting:function(e,t){if(h.debug("Changing setting",e,t),T.isPlainObject(e))T.extend(!0,i,e);else{if(t===P)return i[e];T.isPlainObject(i[e])?T.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,h,e);else{if(t===P)return h[e];h[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,i.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),h.verbose.apply(console,arguments)))},error:function(){i.silent||(h.error=Function.prototype.bind.call(console.error,console,i.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:p,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var e=i.name+":",n=0;x=!1,clearTimeout(h.performance.timer),T.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",y&&(e+=" '"+y+"'"),(console.group!==P||console.table!==P)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):T.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||k,t=p||t,"string"==typeof i&&r!==P&&(i=i.split(/[\. ]/),o=i.length-1,T.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(T.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==P)return a=r[n],!1;if(!T.isPlainObject(r[t])||e==o)return r[t]!==P?a=r[t]:h.error(s.method,i),!1;r=r[t]}})),T.isFunction(a)?n=a.apply(t,e):a!==P&&(n=a),T.isArray(b)?b.push(n):b!==P?b=[b,n]:n!==P&&(b=n),a}};S?(g===P&&h.initialize(),h.invoke(w)):(g!==P&&g.invoke("destroy"),h.initialize())}),b!==P?b:this},T.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnable:function(){},onDisable:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document),function(S,e,k,T){"use strict";e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.dimmer=function(p){var h,v=S(this),b=(new Date).getTime(),y=[],x=p,C="string"==typeof x,w=[].slice.call(arguments,1);return v.each(function(){var a,t,r=S.isPlainObject(p)?S.extend(!0,{},S.fn.dimmer.settings,p):S.extend({},S.fn.dimmer.settings),n=r.selector,e=r.namespace,i=r.className,s=r.error,o="."+e,l="module-"+e,c=v.selector||"",u="ontouchstart"in k.documentElement?"touchstart":"click",d=S(this),f=this,m=d.data(l),g={preinitialize:function(){a=g.is.dimmer()?(t=d.parent(),d):(t=d,g.has.dimmer()?r.dimmerName?t.find(n.dimmer).filter("."+r.dimmerName):t.find(n.dimmer):g.create())},initialize:function(){g.debug("Initializing dimmer",r),g.bind.events(),g.set.dimmable(),g.instantiate()},instantiate:function(){g.verbose("Storing instance of module",g),m=g,d.data(l,m)},destroy:function(){g.verbose("Destroying previous module",a),g.unbind.events(),g.remove.variation(),t.off(o)},bind:{events:function(){"hover"==r.on?t.on("mouseenter"+o,g.show).on("mouseleave"+o,g.hide):"click"==r.on&&t.on(u+o,g.toggle),g.is.page()&&(g.debug("Setting as a page dimmer",t),g.set.pageDimmer()),g.is.closable()&&(g.verbose("Adding dimmer close event",a),t.on(u+o,n.dimmer,g.event.click))}},unbind:{events:function(){d.removeData(l),t.off(o)}},event:{click:function(e){g.verbose("Determining if event occurred on dimmer",e),0!==a.find(e.target).length&&!S(e.target).is(n.content)||(g.hide(),e.stopImmediatePropagation())}},addContent:function(e){var t=S(e);g.debug("Add content to dimmer",t),t.parent()[0]!==a[0]&&t.detach().appendTo(a)},create:function(){var e=S(r.template.dimmer());return r.dimmerName&&(g.debug("Creating named dimmer",r.dimmerName),e.addClass(r.dimmerName)),e.appendTo(t),e},show:function(e){e=S.isFunction(e)?e:function(){},g.debug("Showing dimmer",a,r),g.set.variation(),g.is.dimmed()&&!g.is.animating()||!g.is.enabled()?g.debug("Dimmer is already shown or disabled"):(g.animate.show(e),r.onShow.call(f),r.onChange.call(f))},hide:function(e){e=S.isFunction(e)?e:function(){},g.is.dimmed()||g.is.animating()?(g.debug("Hiding dimmer",a),g.animate.hide(e),r.onHide.call(f),r.onChange.call(f)):g.debug("Dimmer is not visible")},toggle:function(){g.verbose("Toggling dimmer visibility",a),g.is.dimmed()?g.hide():g.show()},animate:{show:function(e){e=S.isFunction(e)?e:function(){},r.useCSS&&S.fn.transition!==T&&a.transition("is supported")?(r.useFlex?(g.debug("Using flex dimmer"),g.remove.legacy()):(g.debug("Using legacy non-flex dimmer"),g.set.legacy()),"auto"!==r.opacity&&g.set.opacity(),a.transition({displayType:r.useFlex?"flex":"block",animation:r.transition+" in",queue:!1,duration:g.get.duration(),useFailSafe:!0,onStart:function(){g.set.dimmed()},onComplete:function(){g.set.active(),e()}})):(g.verbose("Showing dimmer animation with javascript"),g.set.dimmed(),"auto"==r.opacity&&(r.opacity=.8),a.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(g.get.duration(),r.opacity,function(){a.removeAttr("style"),g.set.active(),e()}))},hide:function(e){e=S.isFunction(e)?e:function(){},r.useCSS&&S.fn.transition!==T&&a.transition("is supported")?(g.verbose("Hiding dimmer with css"),a.transition({displayType:r.useFlex?"flex":"block",animation:r.transition+" out",queue:!1,duration:g.get.duration(),useFailSafe:!0,onStart:function(){g.remove.dimmed()},onComplete:function(){g.remove.variation(),g.remove.active(),e()}})):(g.verbose("Hiding dimmer with javascript"),g.remove.dimmed(),a.stop().fadeOut(g.get.duration(),function(){g.remove.active(),a.removeAttr("style"),e()}))}},get:{dimmer:function(){return a},duration:function(){return"object"==typeof r.duration?g.is.active()?r.duration.hide:r.duration.show:r.duration}},has:{dimmer:function(){return r.dimmerName?0<d.find(n.dimmer).filter("."+r.dimmerName).length:0<d.find(n.dimmer).length}},is:{active:function(){return a.hasClass(i.active)},animating:function(){return a.is(":animated")||a.hasClass(i.animating)},closable:function(){return"auto"==r.closable?"hover"!=r.on:r.closable},dimmer:function(){return d.hasClass(i.dimmer)},dimmable:function(){return d.hasClass(i.dimmable)},dimmed:function(){return t.hasClass(i.dimmed)},disabled:function(){return t.hasClass(i.disabled)},enabled:function(){return!g.is.disabled()},page:function(){return t.is("body")},pageDimmer:function(){return a.hasClass(i.pageDimmer)}},can:{show:function(){return!a.hasClass(i.disabled)}},set:{opacity:function(e){var t=a.css("background-color"),n=t.split(","),i=n&&3==n.length,o=n&&4==n.length;e=0===r.opacity?0:r.opacity||e,t=i||o?(n[3]=e+")",n.join(",")):"rgba(0, 0, 0, "+e+")",g.debug("Setting opacity to",e),a.css("background-color",t)},legacy:function(){a.addClass(i.legacy)},active:function(){a.addClass(i.active)},dimmable:function(){t.addClass(i.dimmable)},dimmed:function(){t.addClass(i.dimmed)},pageDimmer:function(){a.addClass(i.pageDimmer)},disabled:function(){a.addClass(i.disabled)},variation:function(e){(e=e||r.variation)&&a.addClass(e)}},remove:{active:function(){a.removeClass(i.active)},legacy:function(){a.removeClass(i.legacy)},dimmed:function(){t.removeClass(i.dimmed)},disabled:function(){a.removeClass(i.disabled)},variation:function(e){(e=e||r.variation)&&a.removeClass(e)}},setting:function(e,t){if(g.debug("Changing setting",e,t),S.isPlainObject(e))S.extend(!0,r,e);else{if(t===T)return r[e];S.isPlainObject(r[e])?S.extend(!0,r[e],t):r[e]=t}},internal:function(e,t){if(S.isPlainObject(e))S.extend(!0,g,e);else{if(t===T)return g[e];g[e]=t}},debug:function(){!r.silent&&r.debug&&(r.performance?g.performance.log(arguments):(g.debug=Function.prototype.bind.call(console.info,console,r.name+":"),g.debug.apply(console,arguments)))},verbose:function(){!r.silent&&r.verbose&&r.debug&&(r.performance?g.performance.log(arguments):(g.verbose=Function.prototype.bind.call(console.info,console,r.name+":"),g.verbose.apply(console,arguments)))},error:function(){r.silent||(g.error=Function.prototype.bind.call(console.error,console,r.name+":"),g.error.apply(console,arguments))},performance:{log:function(e){var t,n;r.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:f,"Execution Time":n})),clearTimeout(g.performance.timer),g.performance.timer=setTimeout(g.performance.display,500)},display:function(){var e=r.name+":",n=0;b=!1,clearTimeout(g.performance.timer),S.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",c&&(e+=" '"+c+"'"),1<v.length&&(e+=" ("+v.length+")"),(console.group!==T||console.table!==T)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):S.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=m;return e=e||w,t=f||t,"string"==typeof i&&r!==T&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==T)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==T?a=r[t]:g.error(s.method,i),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==T&&(n=a),S.isArray(h)?h.push(n):h!==T?h=[h,n]:n!==T&&(h=n),a}};g.preinitialize(),C?(m===T&&g.initialize(),g.invoke(x)):(m!==T&&m.invoke("destroy"),g.initialize())}),h!==T?h:this},S.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,useFlex:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",legacy:"legacy",pageDimmer:"page",show:"show"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(){return S("<div />").attr("class","ui dimmer")}}}}(jQuery,window,document),function(Y,Z,K,J){"use strict";Z=void 0!==Z&&Z.Math==Math?Z:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),Y.fn.dropdown=function(M){var L,V=Y(this),N=Y(K),H=V.selector||"",U="ontouchstart"in K.documentElement,W=(new Date).getTime(),B=[],Q=M,X="string"==typeof Q,$=[].slice.call(arguments,1);return V.each(function(n){var e,t,i,o,a,r,s,g=Y.isPlainObject(M)?Y.extend(!0,{},Y.fn.dropdown.settings,M):Y.extend({},Y.fn.dropdown.settings),p=g.className,c=g.message,l=g.fields,h=g.keys,v=g.metadata,u=g.namespace,d=g.regExp,b=g.selector,f=g.error,m=g.templates,y="."+u,x="module-"+u,C=Y(this),w=Y(g.context),S=C.find(b.text),k=C.find(b.search),T=C.find(b.sizer),A=C.find(b.input),R=C.find(b.icon),P=0<C.prev().find(b.text).length?C.prev().find(b.text):C.prev(),E=C.children(b.menu),F=E.find(b.item),O=!1,D=!1,q=!1,j=this,z=C.data(x),I={initialize:function(){I.debug("Initializing dropdown",g),I.is.alreadySetup()?I.setup.reference():(I.setup.layout(),g.values&&I.change.values(g.values),I.refreshData(),I.save.defaults(),I.restore.selected(),I.create.id(),I.bind.events(),I.observeChanges(),I.instantiate())},instantiate:function(){I.verbose("Storing instance of dropdown",I),z=I,C.data(x,I)},destroy:function(){I.verbose("Destroying previous dropdown",C),I.remove.tabbable(),C.off(y).removeData(x),E.off(y),N.off(o),I.disconnect.menuObserver(),I.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in Z&&(r=new MutationObserver(I.event.select.mutation),s=new MutationObserver(I.event.menu.mutation),I.debug("Setting up mutation observer",r,s),I.observe.select(),I.observe.menu())},disconnect:{menuObserver:function(){s&&s.disconnect()},selectObserver:function(){r&&r.disconnect()}},observe:{select:function(){I.has.input()&&r.observe(C[0],{childList:!0,subtree:!0})},menu:function(){I.has.menu()&&s.observe(E[0],{childList:!0,subtree:!0})}},create:{id:function(){a=(Math.random().toString(16)+"000000000").substr(2,8),o="."+a,I.verbose("Creating unique id for element",a)},userChoice:function(e){var n,i,o;return!!(e=e||I.get.userValues())&&(e=Y.isArray(e)?e:[e],Y.each(e,function(e,t){!1===I.get.item(t)&&(o=g.templates.addition(I.add.variables(c.addResult,t)),i=Y("<div />").html(o).attr("data-"+v.value,t).attr("data-"+v.text,t).addClass(p.addition).addClass(p.item),g.hideAdditions&&i.addClass(p.hidden),n=n===J?i:n.add(i),I.verbose("Creating user choices for value",t,i))}),n)},userLabels:function(e){var t=I.get.userValues();t&&(I.debug("Adding user labels",t),Y.each(t,function(e,t){I.verbose("Adding custom user value"),I.add.label(t,t)}))},menu:function(){E=Y("<div />").addClass(p.menu).appendTo(C)},sizer:function(){T=Y("<span />").addClass(p.sizer).insertAfter(k)}},search:function(e){e=e!==J?e:I.get.query(),I.verbose("Searching for query",e),I.has.minCharacters(e)?I.filter(e):I.hide()},select:{firstUnfiltered:function(){I.verbose("Selecting first non-filtered element"),I.remove.selectedItem(),F.not(b.unselectable).not(b.addition+b.hidden).eq(0).addClass(p.selected)},nextAvailable:function(e){var t=(e=e.eq(0)).nextAll(b.item).not(b.unselectable).eq(0),n=e.prevAll(b.item).not(b.unselectable).eq(0);0<t.length?(I.verbose("Moving selection to",t),t.addClass(p.selected)):(I.verbose("Moving selection to",n),n.addClass(p.selected))}},setup:{api:function(){var e={debug:g.debug,urlData:{value:I.get.value(),query:I.get.query()},on:!1};I.verbose("First request, initializing API"),C.api(e)},layout:function(){C.is("select")&&(I.setup.select(),I.setup.returnedObject()),I.has.menu()||I.create.menu(),I.is.search()&&!I.has.search()&&(I.verbose("Adding search input"),k=Y("<input />").addClass(p.search).prop("autocomplete","off").insertBefore(S)),I.is.multiple()&&I.is.searchSelection()&&!I.has.sizer()&&I.create.sizer(),g.allowTab&&I.set.tabbable()},select:function(){var e=I.get.selectValues();I.debug("Dropdown initialized on a select",e),C.is("select")&&(A=C),0<A.parent(b.dropdown).length?(I.debug("UI dropdown already exists. Creating dropdown menu only"),C=A.closest(b.dropdown),I.has.menu()||I.create.menu(),E=C.children(b.menu),I.setup.menu(e)):(I.debug("Creating entire dropdown from select"),C=Y("<div />").attr("class",A.attr("class")).addClass(p.selection).addClass(p.dropdown).html(m.dropdown(e)).insertBefore(A),A.hasClass(p.multiple)&&!1===A.prop("multiple")&&(I.error(f.missingMultiple),A.prop("multiple",!0)),A.is("[multiple]")&&I.set.multiple(),A.prop("disabled")&&(I.debug("Disabling dropdown"),C.addClass(p.disabled)),A.removeAttr("class").detach().prependTo(C)),I.refresh()},menu:function(e){E.html(m.menu(e,l)),F=E.find(b.item)},reference:function(){I.debug("Dropdown behavior was called on select, replacing with closest dropdown"),C=C.parent(b.dropdown),z=C.data(x),j=C.get(0),I.refresh(),I.setup.returnedObject()},returnedObject:function(){var e=V.slice(0,n),t=V.slice(n+1);V=e.add(C).add(t)}},refresh:function(){I.refreshSelectors(),I.refreshData()},refreshItems:function(){F=E.find(b.item)},refreshSelectors:function(){I.verbose("Refreshing selector cache"),S=C.find(b.text),k=C.find(b.search),A=C.find(b.input),R=C.find(b.icon),P=0<C.prev().find(b.text).length?C.prev().find(b.text):C.prev(),E=C.children(b.menu),F=E.find(b.item)},refreshData:function(){I.verbose("Refreshing cached metadata"),F.removeData(v.text).removeData(v.value)},clearData:function(){I.verbose("Clearing metadata"),F.removeData(v.text).removeData(v.value),C.removeData(v.defaultText).removeData(v.defaultValue).removeData(v.placeholderText)},toggle:function(){I.verbose("Toggling menu visibility"),I.is.active()?I.hide():I.show()},show:function(e){if(e=Y.isFunction(e)?e:function(){},!I.can.show()&&I.is.remote()&&(I.debug("No API results retrieved, searching before show"),I.queryRemote(I.get.query(),I.show)),I.can.show()&&!I.is.active()){if(I.debug("Showing dropdown"),!I.has.message()||I.has.maxSelections()||I.has.allResultsFiltered()||I.remove.message(),I.is.allFiltered())return!0;!1!==g.onShow.call(j)&&I.animate.show(function(){I.can.click()&&I.bind.intent(),I.has.menuSearch()&&I.focusSearch(),I.set.visible(),e.call(j)})}},hide:function(e){e=Y.isFunction(e)?e:function(){},I.is.active()&&!I.is.animatingOutward()&&(I.debug("Hiding dropdown"),!1!==g.onHide.call(j)&&I.animate.hide(function(){I.remove.visible(),e.call(j)}))},hideOthers:function(){I.verbose("Finding other dropdowns to hide"),V.not(C).has(b.menu+"."+p.visible).dropdown("hide")},hideMenu:function(){I.verbose("Hiding menu  instantaneously"),I.remove.active(),I.remove.visible(),E.transition("hide")},hideSubMenus:function(){var e=E.children(b.item).find(b.menu);I.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){U&&I.bind.touchEvents(),I.bind.keyboardEvents(),I.bind.inputEvents(),I.bind.mouseEvents()},touchEvents:function(){I.debug("Touch device detected binding additional touch events"),I.is.searchSelection()||I.is.single()&&C.on("touchstart"+y,I.event.test.toggle),E.on("touchstart"+y,b.item,I.event.item.mouseenter)},keyboardEvents:function(){I.verbose("Binding keyboard events"),C.on("keydown"+y,I.event.keydown),I.has.search()&&C.on(I.get.inputEvent()+y,b.search,I.event.input),I.is.multiple()&&N.on("keydown"+o,I.event.document.keydown)},inputEvents:function(){I.verbose("Binding input change events"),C.on("change"+y,b.input,I.event.change)},mouseEvents:function(){I.verbose("Binding mouse events"),I.is.multiple()&&C.on("click"+y,b.label,I.event.label.click).on("click"+y,b.remove,I.event.remove.click),I.is.searchSelection()?(C.on("mousedown"+y,I.event.mousedown).on("mouseup"+y,I.event.mouseup).on("mousedown"+y,b.menu,I.event.menu.mousedown).on("mouseup"+y,b.menu,I.event.menu.mouseup).on("click"+y,b.icon,I.event.icon.click).on("focus"+y,b.search,I.event.search.focus).on("click"+y,b.search,I.event.search.focus).on("blur"+y,b.search,I.event.search.blur).on("click"+y,b.text,I.event.text.focus),I.is.multiple()&&C.on("click"+y,I.event.click)):("click"==g.on?C.on("click"+y,I.event.test.toggle):"hover"==g.on?C.on("mouseenter"+y,I.delay.show).on("mouseleave"+y,I.delay.hide):C.on(g.on+y,I.toggle),C.on("click"+y,b.icon,I.event.icon.click).on("mousedown"+y,I.event.mousedown).on("mouseup"+y,I.event.mouseup).on("focus"+y,I.event.focus),I.has.menuSearch()?C.on("blur"+y,b.search,I.event.search.blur):C.on("blur"+y,I.event.blur)),E.on("mouseenter"+y,b.item,I.event.item.mouseenter).on("mouseleave"+y,b.item,I.event.item.mouseleave).on("click"+y,b.item,I.event.item.click)},intent:function(){I.verbose("Binding hide intent event to document"),U&&N.on("touchstart"+o,I.event.test.touch).on("touchmove"+o,I.event.test.touch),N.on("click"+o,I.event.test.hide)}},unbind:{intent:function(){I.verbose("Removing hide intent event from document"),U&&N.off("touchstart"+o).off("touchmove"+o),N.off("click"+o)}},filter:function(e){function t(){I.is.multiple()&&I.filterActive(),(e||!e&&0==I.get.activeItem().length)&&I.select.firstUnfiltered(),I.has.allResultsFiltered()?g.onNoResults.call(j,n)?g.allowAdditions?g.hideAdditions&&(I.verbose("User addition with no menu, setting empty style"),I.set.empty(),I.hideMenu()):(I.verbose("All items filtered, showing message",n),I.add.message(c.noResults)):(I.verbose("All items filtered, hiding dropdown",n),I.hideMenu()):(I.remove.empty(),I.remove.message()),g.allowAdditions&&I.add.userSuggestion(e),I.is.searchSelection()&&I.can.show()&&I.is.focusedOnSearch()&&I.show()}var n=e!==J?e:I.get.query();g.useLabels&&I.has.maxSelections()||(g.apiSettings?I.can.useAPI()?I.queryRemote(n,function(){g.filterRemoteData&&I.filterItems(n),t()}):I.error(f.noAPI):(I.filterItems(n),t()))},queryRemote:function(e,n){var t={errorDuration:!1,cache:"local",throttle:g.throttle,urlData:{query:e},onError:function(){I.add.message(c.serverError),n()},onFailure:function(){I.add.message(c.serverError),n()},onSuccess:function(e){var t=e[l.remoteValues];Y.isArray(t)&&0<t.length?(I.remove.message(),I.setup.menu({values:e[l.remoteValues]})):I.add.message(c.noResults),n()}};C.api("get request")||I.setup.api(),t=Y.extend(!0,{},t,g.apiSettings),C.api("setting",t).api("query")},filterItems:function(e){var i=e!==J?e:I.get.query(),o=null,t=I.escape.string(i),a=new RegExp("^"+t,"igm");I.has.query()&&(o=[],I.verbose("Searching for matching values",i),F.each(function(){var e,t,n=Y(this);if("both"==g.match||"text"==g.match){if(-1!==(e=String(I.get.choiceText(n,!1))).search(a))return o.push(this),!0;if("exact"===g.fullTextSearch&&I.exactSearch(i,e))return o.push(this),!0;if(!0===g.fullTextSearch&&I.fuzzySearch(i,e))return o.push(this),!0}if("both"==g.match||"value"==g.match){if(-1!==(t=String(I.get.choiceValue(n,e))).search(a))return o.push(this),!0;if("exact"===g.fullTextSearch&&I.exactSearch(i,t))return o.push(this),!0;if(!0===g.fullTextSearch&&I.fuzzySearch(i,t))return o.push(this),!0}})),I.debug("Showing only matched items",i),I.remove.filteredItem(),o&&F.not(o).addClass(p.filtered)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),n<i)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},exactSearch:function(e,t){return e=e.toLowerCase(),-1<(t=t.toLowerCase()).indexOf(e)},filterActive:function(){g.useLabels&&F.filter("."+p.active).addClass(p.filtered)},focusSearch:function(e){I.has.search()&&!I.is.focusedOnSearch()&&(e?(C.off("focus"+y,b.search),k.focus(),C.on("focus"+y,b.search,I.event.search.focus)):k.focus())},forceSelection:function(){var e=F.not(p.filtered).filter("."+p.selected).eq(0),t=F.not(p.filtered).filter("."+p.active).eq(0),n=0<e.length?e:t;if(0<n.length&&!I.is.multiple())return I.debug("Forcing partial selection to selected item",n),void I.event.item.click.call(n,{},!0);g.allowAdditions&&I.set.selected(I.get.query()),I.remove.searchTerm()},change:{values:function(e){g.allowAdditions||I.clear(),I.debug("Creating dropdown with specified values",e),I.setup.menu({values:e}),Y.each(e,function(e,t){if(1==t.selected)return I.debug("Setting initial selection to",t.value),I.set.selected(t.value),!0})}},event:{change:function(){q||(I.debug("Input changed, updating selection"),I.set.selected())},focus:function(){g.showOnFocus&&!O&&I.is.hidden()&&!t&&I.show()},blur:function(e){t=K.activeElement===this,O||t||(I.remove.activeLabel(),I.hide())},mousedown:function(){I.is.searchSelection()?i=!0:O=!0},mouseup:function(){I.is.searchSelection()?i=!1:O=!1},click:function(e){Y(e.target).is(C)&&(I.is.focusedOnSearch()?I.show():I.focusSearch())},search:{focus:function(){O=!0,I.is.multiple()&&I.remove.activeLabel(),g.showOnFocus&&I.search()},blur:function(e){t=K.activeElement===this,I.is.searchSelection()&&!i&&(D||t||(g.forceSelection&&I.forceSelection(),I.hide())),i=!1}},icon:{click:function(e){R.hasClass(p.clear)?I.clear():I.can.click()&&I.toggle()}},text:{focus:function(e){O=!0,I.focusSearch()}},input:function(e){(I.is.multiple()||I.is.searchSelection())&&I.set.filtered(),clearTimeout(I.timer),I.timer=setTimeout(I.search,g.delay.search)},label:{click:function(e){var t=Y(this),n=C.find(b.label),i=n.filter("."+p.active),o=t.nextAll("."+p.active),a=t.prevAll("."+p.active),r=0<o.length?t.nextUntil(o).add(i).add(t):t.prevUntil(a).add(i).add(t);e.shiftKey?(i.removeClass(p.active),r.addClass(p.active)):e.ctrlKey?t.toggleClass(p.active):(i.removeClass(p.active),t.addClass(p.active)),g.onLabelSelect.apply(this,n.filter("."+p.active))}},remove:{click:function(){var e=Y(this).parent();e.hasClass(p.active)?I.remove.activeLabels():I.remove.activeLabels(e)}},test:{toggle:function(e){var t=I.is.multiple()?I.show:I.toggle;I.is.bubbledLabelClick(e)||I.is.bubbledIconClick(e)||I.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){I.determine.eventOnElement(e,function(){"touchstart"==e.type?I.timer=setTimeout(function(){I.hide()},g.delay.touch):"touchmove"==e.type&&clearTimeout(I.timer)}),e.stopPropagation()},hide:function(e){I.determine.eventInModule(e,I.hide)}},select:{mutation:function(e){I.debug("<select> modified, recreating menu");var n=!1;Y.each(e,function(e,t){if(Y(t.target).is("select")||Y(t.addedNodes).is("select"))return n=!0}),n&&(I.disconnect.selectObserver(),I.refresh(),I.setup.select(),I.set.selected(),I.observe.select())}},menu:{mutation:function(e){var t=e[0],n=t.addedNodes?Y(t.addedNodes[0]):Y(!1),i=t.removedNodes?Y(t.removedNodes[0]):Y(!1),o=n.add(i),a=o.is(b.addition)||0<o.closest(b.addition).length,r=o.is(b.message)||0<o.closest(b.message).length;a||r?(I.debug("Updating item selector cache"),I.refreshItems()):(I.debug("Menu modified, updating selector cache"),I.refresh())},mousedown:function(){D=!0},mouseup:function(){D=!1}},item:{mouseenter:function(e){var t=Y(e.target),n=Y(this),i=n.children(b.menu),o=n.siblings(b.item).children(b.menu),a=0<i.length;0<i.find(t).length||!a||(clearTimeout(I.itemTimer),I.itemTimer=setTimeout(function(){I.verbose("Showing sub-menu",i),Y.each(o,function(){I.animate.hide(!1,Y(this))}),I.animate.show(!1,i)},g.delay.show),e.preventDefault())},mouseleave:function(e){var t=Y(this).children(b.menu);0<t.length&&(clearTimeout(I.itemTimer),I.itemTimer=setTimeout(function(){I.verbose("Hiding sub-menu",t),I.animate.hide(!1,t)},g.delay.hide))},click:function(e,t){var n=Y(this),i=Y(e?e.target:""),o=n.find(b.menu),a=I.get.choiceText(n),r=I.get.choiceValue(n,a),s=0<o.length,l=0<o.find(i).length;I.has.menuSearch()&&Y(K.activeElement).blur(),l||s&&!g.allowCategorySelection||(I.is.searchSelection()&&(g.allowAdditions&&I.remove.userAddition(),I.remove.searchTerm(),I.is.focusedOnSearch()||1==t||I.focusSearch(!0)),g.useLabels||(I.remove.filteredItem(),I.set.scrollPosition(n)),I.determine.selectAction.call(this,a,r))}},document:{keydown:function(e){var t=e.which;if(I.is.inObject(t,h)){var n=C.find(b.label),i=n.filter("."+p.active),o=(i.data(v.value),n.index(i)),a=n.length,r=0<i.length,s=1<i.length,l=0===o,c=o+1==a,u=I.is.searchSelection(),d=I.is.focusedOnSearch(),f=I.is.focused(),m=d&&0===I.get.caretPosition();if(u&&!r&&!d)return;t==h.leftArrow?!f&&!m||r?r&&(e.shiftKey?I.verbose("Adding previous label to selection"):(I.verbose("Selecting previous label"),n.removeClass(p.active)),l&&!s?i.addClass(p.active):i.prev(b.siblingLabel).addClass(p.active).end(),e.preventDefault()):(I.verbose("Selecting previous label"),n.last().addClass(p.active)):t==h.rightArrow?(f&&!r&&n.first().addClass(p.active),r&&(e.shiftKey?I.verbose("Adding next label to selection"):(I.verbose("Selecting next label"),n.removeClass(p.active)),c?u?d?n.removeClass(p.active):I.focusSearch():s?i.next(b.siblingLabel).addClass(p.active):i.addClass(p.active):i.next(b.siblingLabel).addClass(p.active),e.preventDefault())):t==h.deleteKey||t==h.backspace?r?(I.verbose("Removing active labels"),c&&u&&!d&&I.focusSearch(),i.last().next(b.siblingLabel).addClass(p.active),I.remove.activeLabels(i),e.preventDefault()):m&&!r&&t==h.backspace&&(I.verbose("Removing last label on input backspace"),i=n.last().addClass(p.active),I.remove.activeLabels(i)):i.removeClass(p.active)}}},keydown:function(e){var t=e.which;if(I.is.inObject(t,h)){var n,i=F.not(b.unselectable).filter("."+p.selected).eq(0),o=E.children("."+p.active).eq(0),a=0<i.length?i:o,r=0<a.length?a.siblings(":not(."+p.filtered+")").addBack():E.children(":not(."+p.filtered+")"),s=a.children(b.menu),l=a.closest(b.menu),c=l.hasClass(p.visible)||l.hasClass(p.animating)||0<l.parent(b.menu).length,u=0<s.length,d=0<a.length,f=0<a.not(b.unselectable).length,m=t==h.delimiter&&g.allowAdditions&&I.is.multiple();if(g.allowAdditions&&g.hideAdditions&&(t==h.enter||m)&&f&&(I.verbose("Selecting item from keyboard shortcut",a),I.event.item.click.call(a,e),I.is.searchSelection()&&I.remove.searchTerm()),I.is.visible()){if(t!=h.enter&&!m||(t==h.enter&&d&&u&&!g.allowCategorySelection?(I.verbose("Pressed enter on unselectable category, opening sub menu"),t=h.rightArrow):f&&(I.verbose("Selecting item from keyboard shortcut",a),I.event.item.click.call(a,e),I.is.searchSelection()&&I.remove.searchTerm()),e.preventDefault()),d&&(t==h.leftArrow&&l[0]!==E[0]&&(I.verbose("Left key pressed, closing sub-menu"),I.animate.hide(!1,l),a.removeClass(p.selected),l.closest(b.item).addClass(p.selected),e.preventDefault()),t==h.rightArrow&&u&&(I.verbose("Right key pressed, opening sub-menu"),I.animate.show(!1,s),a.removeClass(p.selected),s.find(b.item).eq(0).addClass(p.selected),e.preventDefault())),t==h.upArrow){if(n=d&&c?a.prevAll(b.item+":not("+b.unselectable+")").eq(0):F.eq(0),r.index(n)<0)return I.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();I.verbose("Up key pressed, changing active item"),a.removeClass(p.selected),n.addClass(p.selected),I.set.scrollPosition(n),g.selectOnKeydown&&I.is.single()&&I.set.selectedItem(n),e.preventDefault()}if(t==h.downArrow){if(0===(n=d&&c?n=a.nextAll(b.item+":not("+b.unselectable+")").eq(0):F.eq(0)).length)return I.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();I.verbose("Down key pressed, changing active item"),F.removeClass(p.selected),n.addClass(p.selected),I.set.scrollPosition(n),g.selectOnKeydown&&I.is.single()&&I.set.selectedItem(n),e.preventDefault()}t==h.pageUp&&(I.scrollPage("up"),e.preventDefault()),t==h.pageDown&&(I.scrollPage("down"),e.preventDefault()),t==h.escape&&(I.verbose("Escape key pressed, closing dropdown"),I.hide())}else m&&e.preventDefault(),t!=h.downArrow||I.is.visible()||(I.verbose("Down key pressed, showing dropdown"),I.show(),e.preventDefault())}else I.has.search()||I.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=K.createEvent("HTMLEvents"),t=A[0];t&&(I.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(e,t){I.verbose("Determining action",g.action),Y.isFunction(I.action[g.action])?(I.verbose("Triggering preset action",g.action,e,t),I.action[g.action].call(j,e,t,this)):Y.isFunction(g.action)?(I.verbose("Triggering user action",g.action,e,t),g.action.call(j,e,t,this)):I.error(f.action,g.action)},eventInModule:function(e,t){var n=Y(e.target),i=0<n.closest(K.documentElement).length,o=0<n.closest(C).length;return t=Y.isFunction(t)?t:function(){},i&&!o?(I.verbose("Triggering event",t),t(),!0):(I.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(e,t){var n=Y(e.target),i=n.closest(b.siblingLabel),o=K.body.contains(e.target),a=0===C.find(i).length,r=0===n.closest(E).length;return t=Y.isFunction(t)?t:function(){},o&&a&&r?(I.verbose("Triggering event",t),t(),!0):(I.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(e,t,n){if(t=t!==J?t:e,I.can.activate(Y(n))){if(I.set.selected(t,Y(n)),I.is.multiple()&&!I.is.allFiltered())return;I.hideAndClear()}},select:function(e,t,n){if(t=t!==J?t:e,I.can.activate(Y(n))){if(I.set.value(t,e,Y(n)),I.is.multiple()&&!I.is.allFiltered())return;I.hideAndClear()}},combo:function(e,t,n){t=t!==J?t:e,I.set.selected(t,Y(n)),I.hideAndClear()},hide:function(e,t,n){I.set.value(t,e,Y(n)),I.hideAndClear()}},get:{id:function(){return a},defaultText:function(){return C.data(v.defaultText)},defaultValue:function(){return C.data(v.defaultValue)},placeholderText:function(){return"auto"!=g.placeholder&&"string"==typeof g.placeholder?g.placeholder:C.data(v.placeholderText)||""},text:function(){return S.text()},query:function(){return Y.trim(k.val())},searchWidth:function(e){return e=e!==J?e:k.val(),T.text(e),Math.ceil(T.width()+1)},selectionCount:function(){var e=I.get.values();return I.is.multiple()?Y.isArray(e)?e.length:0:""!==I.get.value()?1:0},transition:function(e){return"auto"==g.transition?I.is.upward(e)?"slide up":"slide down":g.transition},userValues:function(){var e=I.get.values();return!!e&&(e=Y.isArray(e)?e:[e],Y.grep(e,function(e){return!1===I.get.item(e)}))},uniqueArray:function(n){return Y.grep(n,function(e,t){return Y.inArray(e,n)===t})},caretPosition:function(){var e,t,n=k.get(0);return"selectionStart"in n?n.selectionStart:K.selection?(n.focus(),t=(e=K.selection.createRange()).text.length,e.moveStart("character",-n.value.length),e.text.length-t):void 0},value:function(){var e=0<A.length?A.val():C.data(v.value),t=Y.isArray(e)&&1===e.length&&""===e[0];return e===J||t?"":e},values:function(){var e=I.get.value();return""===e?"":!I.has.selectInput()&&I.is.multiple()?"string"==typeof e?e.split(g.delimiter):"":e},remoteValues:function(){var e=I.get.values(),i=!1;return e&&("string"==typeof e&&(e=[e]),Y.each(e,function(e,t){var n=I.read.remoteData(t);I.verbose("Restoring value from session data",n,t),n&&((i=i||{})[t]=n)})),i},choiceText:function(e,t){if(t=t!==J?t:g.preserveHTML,e)return 0<e.find(b.menu).length&&(I.verbose("Retrieving text of element with sub-menu"),(e=e.clone()).find(b.menu).remove(),e.find(b.menuIcon).remove()),e.data(v.text)!==J?e.data(v.text):t?Y.trim(e.html()):Y.trim(e.text())},choiceValue:function(e,t){return t=t||I.get.choiceText(e),!!e&&(e.data(v.value)!==J?String(e.data(v.value)):"string"==typeof t?Y.trim(t.toLowerCase()):String(t))},inputEvent:function(){var e=k[0];return!!e&&(e.oninput!==J?"input":e.onpropertychange!==J?"propertychange":"keyup")},selectValues:function(){var o={values:[]};return C.find("option").each(function(){var e=Y(this),t=e.html(),n=e.attr("disabled"),i=e.attr("value")!==J?e.attr("value"):t;"auto"===g.placeholder&&""===i?o.placeholder=t:o.values.push({name:t,value:i,disabled:n})}),g.placeholder&&"auto"!==g.placeholder&&(I.debug("Setting placeholder value to",g.placeholder),o.placeholder=g.placeholder),g.sortSelect?(o.values.sort(function(e,t){return e.name>t.name?1:-1}),I.debug("Retrieved and sorted values from select",o)):I.debug("Retrieved values from select",o),o},activeItem:function(){return F.filter("."+p.active)},selectedItem:function(){var e=F.not(b.unselectable).filter("."+p.selected);return 0<e.length?e:F.eq(0)},itemWithAdditions:function(e){var t=I.get.item(e),n=I.create.userChoice(e);return n&&0<n.length&&(t=0<t.length?t.add(n):n),t},item:function(i,o){var e,a,r=!1;return i=i!==J?i:I.get.values()!==J?I.get.values():I.get.text(),e=a?0<i.length:i!==J&&null!==i,a=I.is.multiple()&&Y.isArray(i),o=""===i||0===i||(o||!1),e&&F.each(function(){var e=Y(this),t=I.get.choiceText(e),n=I.get.choiceValue(e,t);if(null!==n&&n!==J)if(a)-1===Y.inArray(String(n),i)&&-1===Y.inArray(t,i)||(r=r?r.add(e):e);else if(o){if(I.verbose("Ambiguous dropdown value using strict type check",e,i),n===i||t===i)return r=e,!0}else if(String(n)==String(i)||t==i)return I.verbose("Found select item by value",n,i),r=e,!0}),r}},check:{maxSelections:function(e){return!g.maxSelections||((e=e!==J?e:I.get.selectionCount())>=g.maxSelections?(I.debug("Maximum selection count reached"),g.useLabels&&(F.addClass(p.filtered),I.add.message(c.maxSelections)),!0):(I.verbose("No longer at maximum selection count"),I.remove.message(),I.remove.filteredItem(),I.is.searchSelection()&&I.filterItems(),!1))}},restore:{defaults:function(){I.clear(),I.restore.defaultText(),I.restore.defaultValue()},defaultText:function(){var e=I.get.defaultText();e===I.get.placeholderText?(I.debug("Restoring default placeholder text",e),I.set.placeholderText(e)):(I.debug("Restoring default text",e),I.set.text(e))},placeholderText:function(){I.set.placeholderText()},defaultValue:function(){var e=I.get.defaultValue();e!==J&&(I.debug("Restoring default value",e),""!==e?(I.set.value(e),I.set.selected()):(I.remove.activeItem(),I.remove.selectedItem()))},labels:function(){g.allowAdditions&&(g.useLabels||(I.error(f.labels),g.useLabels=!0),I.debug("Restoring selected values"),I.create.userLabels()),I.check.maxSelections()},selected:function(){I.restore.values(),I.is.multiple()?(I.debug("Restoring previously selected values and labels"),I.restore.labels()):I.debug("Restoring previously selected values")},values:function(){I.set.initialLoad(),g.apiSettings&&g.saveRemoteData&&I.get.remoteValues()?I.restore.remoteValues():I.set.selected(),I.remove.initialLoad()},remoteValues:function(){var e=I.get.remoteValues();I.debug("Recreating selected from session data",e),e&&(I.is.single()?Y.each(e,function(e,t){I.set.text(t)}):Y.each(e,function(e,t){I.add.label(e,t)}))}},read:{remoteData:function(e){var t;if(Z.Storage!==J)return(t=sessionStorage.getItem(e))!==J&&t;I.error(f.noStorage)}},save:{defaults:function(){I.save.defaultText(),I.save.placeholderText(),I.save.defaultValue()},defaultValue:function(){var e=I.get.value();I.verbose("Saving default value as",e),C.data(v.defaultValue,e)},defaultText:function(){var e=I.get.text();I.verbose("Saving default text as",e),C.data(v.defaultText,e)},placeholderText:function(){var e;!1!==g.placeholder&&S.hasClass(p.placeholder)&&(e=I.get.text(),I.verbose("Saving placeholder text as",e),C.data(v.placeholderText,e))},remoteData:function(e,t){Z.Storage!==J?(I.verbose("Saving remote data to session storage",t,e),sessionStorage.setItem(t,e)):I.error(f.noStorage)}},clear:function(){I.is.multiple()&&g.useLabels?I.remove.labels():(I.remove.activeItem(),I.remove.selectedItem()),I.set.placeholderText(),I.clearValue()},clearValue:function(){I.set.value("")},scrollPage:function(e,t){var n=t||I.get.selectedItem(),i=n.closest(b.menu),o=i.outerHeight(),a=i.scrollTop(),r=F.eq(0).outerHeight(),s=Math.floor(o/r),l=(i.prop("scrollHeight"),"up"==e?a-r*s:a+r*s),c=F.not(b.unselectable),u="up"==e?c.index(n)-s:c.index(n)+s,d=("up"==e?0<=u:u<c.length)?c.eq(u):"up"==e?c.first():c.last();0<d.length&&(I.debug("Scrolling page",e,d),n.removeClass(p.selected),d.addClass(p.selected),g.selectOnKeydown&&I.is.single()&&I.set.selectedItem(d),i.scrollTop(l))},set:{filtered:function(){var e=I.is.multiple(),t=I.is.searchSelection(),n=e&&t,i=t?I.get.query():"",o="string"==typeof i&&0<i.length,a=I.get.searchWidth(),r=""!==i;e&&o&&(I.verbose("Adjusting input width",a,g.glyphWidth),k.css("width",a)),o||n&&r?(I.verbose("Hiding placeholder text"),S.addClass(p.filtered)):e&&(!n||r)||(I.verbose("Showing placeholder text"),S.removeClass(p.filtered))},empty:function(){C.addClass(p.empty)},loading:function(){C.addClass(p.loading)},placeholderText:function(e){e=e||I.get.placeholderText(),I.debug("Setting placeholder text",e),I.set.text(e),S.addClass(p.placeholder)},tabbable:function(){I.is.searchSelection()?(I.debug("Added tabindex to searchable dropdown"),k.val("").attr("tabindex",0),E.attr("tabindex",-1)):(I.debug("Added tabindex to dropdown"),C.attr("tabindex")===J&&(C.attr("tabindex",0),E.attr("tabindex",-1)))},initialLoad:function(){I.verbose("Setting initial load"),e=!0},activeItem:function(e){g.allowAdditions&&0<e.filter(b.addition).length?e.addClass(p.filtered):e.addClass(p.active)},partialSearch:function(e){var t=I.get.query().length;k.val(e.substr(0,t))},scrollPosition:function(e,t){var n,i,o,a,r=(e=e||I.get.selectedItem()).closest(b.menu),s=e&&0<e.length;t=t!==J&&t,e&&0<r.length&&s&&(e.position().top,r.addClass(p.loading),n=(i=r.scrollTop())-r.offset().top+e.offset().top,t||(a=i+r.height()<n+5,o=n-5<i),I.debug("Scrolling to active item",n),(t||o||a)&&r.scrollTop(n),r.removeClass(p.loading))},text:function(e){"select"!==g.action&&("combo"==g.action?(I.debug("Changing combo button text",e,P),g.preserveHTML?P.html(e):P.text(e)):(e!==I.get.placeholderText()&&S.removeClass(p.placeholder),I.debug("Changing text",e,S),S.removeClass(p.filtered),g.preserveHTML?S.html(e):S.text(e)))},selectedItem:function(e){var t=I.get.choiceValue(e),n=I.get.choiceText(e,!1),i=I.get.choiceText(e,!0);I.debug("Setting user selection to item",e),I.remove.activeItem(),I.set.partialSearch(n),I.set.activeItem(e),I.set.selected(t,e),I.set.text(i)},selectedLetter:function(e){var t,n=F.filter("."+p.selected),i=0<n.length&&I.has.firstLetter(n,e),o=!1;i&&(t=n.nextAll(F).eq(0),I.has.firstLetter(t,e)&&(o=t)),o||F.each(function(){if(I.has.firstLetter(Y(this),e))return o=Y(this),!1}),o&&(I.verbose("Scrolling to next value with letter",e),I.set.scrollPosition(o),n.removeClass(p.selected),o.addClass(p.selected),g.selectOnKeydown&&I.is.single()&&I.set.selectedItem(o))},direction:function(e){"auto"==g.direction?(I.remove.upward(),I.can.openDownward(e)?I.remove.upward(e):I.set.upward(e),I.is.leftward(e)||I.can.openRightward(e)||I.set.leftward(e)):"upward"==g.direction&&I.set.upward(e)},upward:function(e){(e||C).addClass(p.upward)},leftward:function(e){(e||E).addClass(p.leftward)},value:function(e,t,n){var i=I.escape.value(e),o=0<A.length,a=I.get.values(),r=e!==J?String(e):e;if(o){if(!g.allowReselection&&r==a&&(I.verbose("Skipping value update already same value",e,a),!I.is.initialLoad()))return;I.is.single()&&I.has.selectInput()&&I.can.extendSelect()&&(I.debug("Adding user option",e),I.add.optionValue(e)),I.debug("Updating input value",i,a),q=!0,A.val(i),!1===g.fireOnInit&&I.is.initialLoad()?I.debug("Input native change event ignored on initial load"):I.trigger.change(),q=!1}else I.verbose("Storing value in metadata",i,A),i!==a&&C.data(v.value,r);I.is.single()&&g.clearable&&(i?I.set.clearable():I.remove.clearable()),!1===g.fireOnInit&&I.is.initialLoad()?I.verbose("No callback on initial load",g.onChange):g.onChange.call(j,e,t,n)},active:function(){C.addClass(p.active)},multiple:function(){C.addClass(p.multiple)},visible:function(){C.addClass(p.visible)},exactly:function(e,t){I.debug("Setting selected to exact values"),I.clear(),I.set.selected(e,t)},selected:function(e,s){var l=I.is.multiple();(s=g.allowAdditions?s||I.get.itemWithAdditions(e):s||I.get.item(e))&&(I.debug("Setting selected menu item to",s),I.is.multiple()&&I.remove.searchWidth(),I.is.single()?(I.remove.activeItem(),I.remove.selectedItem()):g.useLabels&&I.remove.selectedItem(),s.each(function(){var e=Y(this),t=I.get.choiceText(e),n=I.get.choiceValue(e,t),i=e.hasClass(p.filtered),o=e.hasClass(p.active),a=e.hasClass(p.addition),r=l&&1==s.length;l?!o||a?(g.apiSettings&&g.saveRemoteData&&I.save.remoteData(t,n),g.useLabels?(I.add.label(n,t,r),I.add.value(n,t,e),I.set.activeItem(e),I.filterActive(),I.select.nextAvailable(s)):(I.add.value(n,t,e),I.set.text(I.add.variables(c.count)),I.set.activeItem(e))):i||(I.debug("Selected active value, removing label"),I.remove.selected(n)):(g.apiSettings&&g.saveRemoteData&&I.save.remoteData(t,n),I.set.text(t),I.set.value(n,t,e),e.addClass(p.active).addClass(p.selected))}))},clearable:function(){R.addClass(p.clear)}},add:{label:function(e,t,n){var i,o=I.is.searchSelection()?k:S,a=I.escape.value(e);g.ignoreCase&&(a=a.toLowerCase()),i=Y("<a />").addClass(p.label).attr("data-"+v.value,a).html(m.label(a,t)),i=g.onLabelCreate.call(i,a,t),I.has.label(e)?I.debug("User selection already exists, skipping",a):(g.label.variation&&i.addClass(g.label.variation),!0===n?(I.debug("Animating in label",i),i.addClass(p.hidden).insertBefore(o).transition(g.label.transition,g.label.duration)):(I.debug("Adding selection label",i),i.insertBefore(o)))},message:function(e){var t=E.children(b.message),n=g.templates.message(I.add.variables(e));0<t.length?t.html(n):t=Y("<div/>").html(n).addClass(p.message).appendTo(E)},optionValue:function(e){var t=I.escape.value(e);0<A.find('option[value="'+I.escape.string(t)+'"]').length||(I.disconnect.selectObserver(),I.is.single()&&(I.verbose("Removing previous user addition"),A.find("option."+p.addition).remove()),Y("<option/>").prop("value",t).addClass(p.addition).html(e).appendTo(A),I.verbose("Adding user addition as an <option>",e),I.observe.select())},userSuggestion:function(e){var t,n=E.children(b.addition),i=I.get.item(e),o=i&&i.not(b.addition).length,a=0<n.length;g.useLabels&&I.has.maxSelections()||(""===e||o?n.remove():(a?(n.data(v.value,e).data(v.text,e).attr("data-"+v.value,e).attr("data-"+v.text,e).removeClass(p.filtered),g.hideAdditions||(t=g.templates.addition(I.add.variables(c.addResult,e)),n.html(t)),I.verbose("Replacing user suggestion with new value",n)):((n=I.create.userChoice(e)).prependTo(E),I.verbose("Adding item choice to menu corresponding with user choice addition",n)),g.hideAdditions&&!I.is.allFiltered()||n.addClass(p.selected).siblings().removeClass(p.selected),I.refreshItems()))},variables:function(e,t){var n,i,o=-1!==e.search("{count}"),a=-1!==e.search("{maxCount}"),r=-1!==e.search("{term}");return I.verbose("Adding templated variables to message",e),o&&(n=I.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=I.get.selectionCount(),e=e.replace("{maxCount}",g.maxSelections)),r&&(i=t||I.get.query(),e=e.replace("{term}",i)),e},value:function(e,t,n){var i,o=I.get.values();I.has.value(e)?I.debug("Value already selected"):""!==e?(i=Y.isArray(o)?(i=o.concat([e]),I.get.uniqueArray(i)):[e],I.has.selectInput()?I.can.extendSelect()&&(I.debug("Adding value to select",e,i,A),I.add.optionValue(e)):(i=i.join(g.delimiter),I.debug("Setting hidden input to delimited value",i,A)),!1===g.fireOnInit&&I.is.initialLoad()?I.verbose("Skipping onadd callback on initial load",g.onAdd):g.onAdd.call(j,e,t,n),I.set.value(i,e,t,n),I.check.maxSelections()):I.debug("Cannot select blank values from multiselect")}},remove:{active:function(){C.removeClass(p.active)},activeLabel:function(){C.find(b.label).removeClass(p.active)},empty:function(){C.removeClass(p.empty)},loading:function(){C.removeClass(p.loading)},initialLoad:function(){e=!1},upward:function(e){(e||C).removeClass(p.upward)},leftward:function(e){(e||E).removeClass(p.leftward)},visible:function(){C.removeClass(p.visible)},activeItem:function(){F.removeClass(p.active)},filteredItem:function(){g.useLabels&&I.has.maxSelections()||(g.useLabels&&I.is.multiple()?F.not("."+p.active).removeClass(p.filtered):F.removeClass(p.filtered),I.remove.empty())},optionValue:function(e){var t=I.escape.value(e),n=A.find('option[value="'+I.escape.string(t)+'"]');0<n.length&&n.hasClass(p.addition)&&(r&&(r.disconnect(),I.verbose("Temporarily disconnecting mutation observer")),n.remove(),I.verbose("Removing user addition as an <option>",t),r&&r.observe(A[0],{childList:!0,subtree:!0}))},message:function(){E.children(b.message).remove()},searchWidth:function(){k.css("width","")},searchTerm:function(){I.verbose("Cleared search term"),k.val(""),I.set.filtered()},userAddition:function(){F.filter(b.addition).remove()},selected:function(e,t){if(!(t=g.allowAdditions?t||I.get.itemWithAdditions(e):t||I.get.item(e)))return!1;t.each(function(){var e=Y(this),t=I.get.choiceText(e),n=I.get.choiceValue(e,t);I.is.multiple()?g.useLabels?(I.remove.value(n,t,e),I.remove.label(n)):(I.remove.value(n,t,e),0===I.get.selectionCount()?I.set.placeholderText():I.set.text(I.add.variables(c.count))):I.remove.value(n,t,e),e.removeClass(p.filtered).removeClass(p.active),g.useLabels&&e.removeClass(p.selected)})},selectedItem:function(){F.removeClass(p.selected)},value:function(e,t,n){var i,o=I.get.values();I.has.selectInput()?(I.verbose("Input is <select> removing selected option",e),i=I.remove.arrayValue(e,o),I.remove.optionValue(e)):(I.verbose("Removing from delimited values",e),i=(i=I.remove.arrayValue(e,o)).join(g.delimiter)),!1===g.fireOnInit&&I.is.initialLoad()?I.verbose("No callback on initial load",g.onRemove):g.onRemove.call(j,e,t,n),I.set.value(i,t,n),I.check.maxSelections()},arrayValue:function(t,e){return Y.isArray(e)||(e=[e]),e=Y.grep(e,function(e){return t!=e}),I.verbose("Removed value from delimited string",t,e),e},label:function(e,t){var n=C.find(b.label).filter("[data-"+v.value+'="'+I.escape.string(e)+'"]');I.verbose("Removing label",n),n.remove()},activeLabels:function(e){e=e||C.find(b.label).filter("."+p.active),I.verbose("Removing active label selections",e),I.remove.labels(e)},labels:function(e){e=e||C.find(b.label),I.verbose("Removing labels",e),e.each(function(){var e=Y(this),t=e.data(v.value),n=t!==J?String(t):t,i=I.is.userValue(n);!1!==g.onLabelRemove.call(e,t)?(I.remove.message(),i?(I.remove.value(n),I.remove.label(n)):I.remove.selected(n)):I.debug("Label remove callback cancelled removal")})},tabbable:function(){I.is.searchSelection()?(I.debug("Searchable dropdown initialized"),k.removeAttr("tabindex")):(I.debug("Simple selection dropdown initialized"),C.removeAttr("tabindex")),E.removeAttr("tabindex")},clearable:function(){R.removeClass(p.clear)}},has:{menuSearch:function(){return I.has.search()&&0<k.closest(E).length},search:function(){return 0<k.length},sizer:function(){return 0<T.length},selectInput:function(){return A.is("select")},minCharacters:function(e){return!g.minCharacters||(e=e!==J?String(e):String(I.get.query())).length>=g.minCharacters},firstLetter:function(e,t){var n;return!(!e||0===e.length||"string"!=typeof t)&&(n=I.get.choiceText(e,!1),(t=t.toLowerCase())==String(n).charAt(0).toLowerCase())},input:function(){return 0<A.length},items:function(){return 0<F.length},menu:function(){return 0<E.length},message:function(){return 0!==E.children(b.message).length},label:function(e){var t=I.escape.value(e),n=C.find(b.label);return g.ignoreCase&&(t=t.toLowerCase()),0<n.filter("[data-"+v.value+'="'+I.escape.string(t)+'"]').length},maxSelections:function(){return g.maxSelections&&I.get.selectionCount()>=g.maxSelections},allResultsFiltered:function(){var e=F.not(b.addition);return e.filter(b.unselectable).length===e.length},userSuggestion:function(){return 0<E.children(b.addition).length},query:function(){return""!==I.get.query()},value:function(e){return g.ignoreCase?I.has.valueIgnoringCase(e):I.has.valueMatchingCase(e)},valueMatchingCase:function(e){var t=I.get.values();return!!(Y.isArray(t)?t&&-1!==Y.inArray(e,t):t==e)},valueIgnoringCase:function(n){var e=I.get.values(),i=!1;return Y.isArray(e)||(e=[e]),Y.each(e,function(e,t){if(String(n).toLowerCase()==String(t).toLowerCase())return!(i=!0)}),i}},is:{active:function(){return C.hasClass(p.active)},animatingInward:function(){return E.transition("is inward")},animatingOutward:function(){return E.transition("is outward")},bubbledLabelClick:function(e){return Y(e.target).is("select, input")&&0<C.closest("label").length},bubbledIconClick:function(e){return 0<Y(e.target).closest(R).length},alreadySetup:function(){return C.is("select")&&C.parent(b.dropdown).data(x)!==J&&0===C.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):E.transition&&E.transition("is animating")},leftward:function(e){return(e||E).hasClass(p.leftward)},disabled:function(){return C.hasClass(p.disabled)},focused:function(){return K.activeElement===C[0]},focusedOnSearch:function(){return K.activeElement===k[0]},allFiltered:function(){return(I.is.multiple()||I.has.search())&&!(0==g.hideAdditions&&I.has.userSuggestion())&&!I.has.message()&&I.has.allResultsFiltered()},hidden:function(e){return!I.is.visible(e)},initialLoad:function(){return e},inObject:function(n,e){var i=!1;return Y.each(e,function(e,t){if(t==n)return i=!0}),i},multiple:function(){return C.hasClass(p.multiple)},remote:function(){return g.apiSettings&&I.can.useAPI()},single:function(){return!I.is.multiple()},selectMutation:function(e){var n=!1;return Y.each(e,function(e,t){if(t.target&&Y(t.target).is("select"))return n=!0}),n},search:function(){return C.hasClass(p.search)},searchSelection:function(){return I.has.search()&&1===k.parent(b.dropdown).length},selection:function(){return C.hasClass(p.selection)},userValue:function(e){return-1!==Y.inArray(e,I.get.userValues())},upward:function(e){return(e||C).hasClass(p.upward)},visible:function(e){return e?e.hasClass(p.visible):E.hasClass(p.visible)},verticallyScrollableContext:function(){var e=w.get(0)!==Z&&w.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=w.get(0)!==Z&&w.css("overflow-X");return"auto"==e||"scroll"==e}},can:{activate:function(e){return!!g.useLabels||(!I.has.maxSelections()||!(!I.has.maxSelections()||!e.hasClass(p.active)))},openDownward:function(e){var t,n,i=e||E,o=!0;return i.addClass(p.loading),n={context:{offset:w.get(0)===Z?{top:0,left:0}:w.offset(),scrollTop:w.scrollTop(),height:w.outerHeight()},menu:{offset:i.offset(),height:i.outerHeight()}},I.is.verticallyScrollableContext()&&(n.menu.offset.top+=n.context.scrollTop),o=(t={above:n.context.scrollTop<=n.menu.offset.top-n.context.offset.top-n.menu.height,below:n.context.scrollTop+n.context.height>=n.menu.offset.top-n.context.offset.top+n.menu.height}).below?(I.verbose("Dropdown can fit in context downward",t),!0):t.below||t.above?(I.verbose("Dropdown cannot fit below, opening upward",t),!1):(I.verbose("Dropdown cannot fit in either direction, favoring downward",t),!0),i.removeClass(p.loading),o},openRightward:function(e){var t,n,i=e||E,o=!0;return i.addClass(p.loading),n={context:{offset:w.get(0)===Z?{top:0,left:0}:w.offset(),scrollLeft:w.scrollLeft(),width:w.outerWidth()},menu:{offset:i.offset(),width:i.outerWidth()}},I.is.horizontallyScrollableContext()&&(n.menu.offset.left+=n.context.scrollLeft),(t=n.menu.offset.left-n.context.offset.left+n.menu.width>=n.context.scrollLeft+n.context.width)&&(I.verbose("Dropdown cannot fit in context rightward",t),o=!1),i.removeClass(p.loading),o},click:function(){return U||"click"==g.on},extendSelect:function(){return g.allowAdditions||g.apiSettings},show:function(){return!I.is.disabled()&&(I.has.items()||I.has.message())},useAPI:function(){return Y.fn.api!==J}},animate:{show:function(e,t){var n,i=t||E,o=t?function(){}:function(){I.hideSubMenus(),I.hideOthers(),I.set.active()};e=Y.isFunction(e)?e:function(){},I.verbose("Doing menu show animation",i),I.set.direction(t),n=I.get.transition(t),I.is.selection()&&I.set.scrollPosition(I.get.selectedItem(),!0),(I.is.hidden(i)||I.is.animating(i))&&("none"==n?(o(),i.transition("show"),e.call(j)):Y.fn.transition!==J&&C.transition("is supported")?i.transition({animation:n+" in",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0,onStart:o,onComplete:function(){e.call(j)}}):I.error(f.noTransition,n))},hide:function(e,t){var n=t||E,i=(t?g.duration:g.duration,t?function(){}:function(){I.can.click()&&I.unbind.intent(),I.remove.active()}),o=I.get.transition(t);e=Y.isFunction(e)?e:function(){},(I.is.visible(n)||I.is.animating(n))&&(I.verbose("Doing menu hide animation",n),"none"==o?(i(),n.transition("hide"),e.call(j)):Y.fn.transition!==J&&C.transition("is supported")?n.transition({animation:o+" out",duration:g.duration,debug:g.debug,verbose:g.verbose,queue:!1,onStart:i,onComplete:function(){e.call(j)}}):I.error(f.transition))}},hideAndClear:function(){I.remove.searchTerm(),I.has.maxSelections()||(I.has.search()?I.hide(function(){I.remove.filteredItem()}):I.hide())},delay:{show:function(){I.verbose("Delaying show event to ensure user intent"),clearTimeout(I.timer),I.timer=setTimeout(I.show,g.delay.show)},hide:function(){I.verbose("Delaying hide event to ensure user intent"),clearTimeout(I.timer),I.timer=setTimeout(I.hide,g.delay.hide)}},escape:{value:function(e){var t=Y.isArray(e),n="string"==typeof e,i=!n&&!t,o=n&&-1!==e.search(d.quote),a=[];return i||!o?e:(I.debug("Encoding quote values for use in select",e),t?(Y.each(e,function(e,t){a.push(t.replace(d.quote,"&quot;"))}),a):e.replace(d.quote,"&quot;"))},string:function(e){return(e=String(e)).replace(d.escape,"\\$&")}},setting:function(e,t){if(I.debug("Changing setting",e,t),Y.isPlainObject(e))Y.extend(!0,g,e);else{if(t===J)return g[e];Y.isPlainObject(g[e])?Y.extend(!0,g[e],t):g[e]=t}},internal:function(e,t){if(Y.isPlainObject(e))Y.extend(!0,I,e);else{if(t===J)return I[e];I[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?I.performance.log(arguments):(I.debug=Function.prototype.bind.call(console.info,console,g.name+":"),I.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?I.performance.log(arguments):(I.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),I.verbose.apply(console,arguments)))},error:function(){g.silent||(I.error=Function.prototype.bind.call(console.error,console,g.name+":"),I.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(W||t),W=t,B.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:j,"Execution Time":n})),clearTimeout(I.performance.timer),I.performance.timer=setTimeout(I.performance.display,500)},display:function(){var e=g.name+":",n=0;W=!1,clearTimeout(I.performance.timer),Y.each(B,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",H&&(e+=" '"+H+"'"),(console.group!==J||console.table!==J)&&0<B.length&&(console.groupCollapsed(e),console.table?console.table(B):Y.each(B,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),B=[]}},invoke:function(i,e,t){var o,a,n,r=z;return e=e||$,t=j||t,"string"==typeof i&&r!==J&&(i=i.split(/[\. ]/),o=i.length-1,Y.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(Y.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==J)return a=r[n],!1;if(!Y.isPlainObject(r[t])||e==o)return r[t]!==J?a=r[t]:I.error(f.method,i),!1;r=r[t]}})),Y.isFunction(a)?n=a.apply(t,e):a!==J&&(n=a),Y.isArray(L)?L.push(n):L!==J?L=[L,n]:n!==J&&(L=n),a}};X?(z===J&&I.initialize(),I.invoke(Q)):(z!==J&&z.invoke("destroy"),I.initialize())}),L!==J?L:V},Y.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",values:!1,clearable:!1,apiSettings:!1,selectOnKeydown:!0,minCharacters:0,filterRemoteData:!1,saveRemoteData:!0,throttle:200,context:Z,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,ignoreCase:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(e,t){return Y(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered"},className:{active:"active",addition:"addition",animating:"animating",clear:"clear",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",leftward:"left",visible:"visible"}},Y.fn.dropdown.settings.templates={dropdown:function(e){var t=e.placeholder||!1,n=(e.values,"");return n+='<i class="dropdown icon"></i>',e.placeholder?n+='<div class="default text">'+t+"</div>":n+='<div class="text"></div>',n+='<div class="menu">',Y.each(e.values,function(e,t){n+=t.disabled?'<div class="disabled item" data-value="'+t.value+'">'+t.name+"</div>":'<div class="item" data-value="'+t.value+'">'+t.name+"</div>"}),n+="</div>"},menu:function(e,o){var t=e[o.values]||{},a="";return Y.each(t,function(e,t){var n=t[o.text]?'data-text="'+t[o.text]+'"':"",i=t[o.disabled]?"disabled ":"";a+='<div class="'+i+'item" data-value="'+t[o.value]+'"'+n+">",a+=t[o.name],a+="</div>"}),a},label:function(e,t){return t+'<i class="delete icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document),function(k,T,A){"use strict";T=void 0!==T&&T.Math==Math?T:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.embed=function(p){var h,v=k(this),b=v.selector||"",y=(new Date).getTime(),x=[],C=p,w="string"==typeof C,S=[].slice.call(arguments,1);return v.each(function(){var i=k.isPlainObject(p)?k.extend(!0,{},k.fn.embed.settings,p):k.extend({},k.fn.embed.settings),e=i.selector,t=i.className,o=i.sources,s=i.error,a=i.metadata,n=i.namespace,r=i.templates,l="."+n,c="module-"+n,u=(k(T),k(this)),d=(u.find(e.placeholder),u.find(e.icon),u.find(e.embed)),f=this,m=u.data(c),g={initialize:function(){g.debug("Initializing embed"),g.determine.autoplay(),g.create(),g.bind.events(),g.instantiate()},instantiate:function(){g.verbose("Storing instance of module",g),m=g,u.data(c,g)},destroy:function(){g.verbose("Destroying previous instance of embed"),g.reset(),u.removeData(c).off(l)},refresh:function(){g.verbose("Refreshing selector cache"),u.find(e.placeholder),u.find(e.icon),d=u.find(e.embed)},bind:{events:function(){g.has.placeholder()&&(g.debug("Adding placeholder events"),u.on("click"+l,e.placeholder,g.createAndShow).on("click"+l,e.icon,g.createAndShow))}},create:function(){g.get.placeholder()?g.createPlaceholder():g.createAndShow()},createPlaceholder:function(e){var t=g.get.icon(),n=g.get.url();g.generate.embed(n);e=e||g.get.placeholder(),u.html(r.placeholder(e,t)),g.debug("Creating placeholder for embed",e,t)},createEmbed:function(e){g.refresh(),e=e||g.get.url(),d=k("<div/>").addClass(t.embed).html(g.generate.embed(e)).appendTo(u),i.onCreate.call(f,e),g.debug("Creating embed object",d)},changeEmbed:function(e){d.html(g.generate.embed(e))},createAndShow:function(){g.createEmbed(),g.show()},change:function(e,t,n){g.debug("Changing video to ",e,t,n),u.data(a.source,e).data(a.id,t),n?u.data(a.url,n):u.removeData(a.url),g.has.embed()?g.changeEmbed():g.create()},reset:function(){g.debug("Clearing embed and showing placeholder"),g.remove.data(),g.remove.active(),g.remove.embed(),g.showPlaceholder(),i.onReset.call(f)},show:function(){g.debug("Showing embed"),g.set.active(),i.onDisplay.call(f)},hide:function(){g.debug("Hiding embed"),g.showPlaceholder()},showPlaceholder:function(){g.debug("Showing placeholder image"),g.remove.active(),i.onPlaceholderDisplay.call(f)},get:{id:function(){return i.id||u.data(a.id)},placeholder:function(){return i.placeholder||u.data(a.placeholder)},icon:function(){return i.icon?i.icon:u.data(a.icon)!==A?u.data(a.icon):g.determine.icon()},source:function(e){return i.source?i.source:u.data(a.source)!==A?u.data(a.source):g.determine.source()},type:function(){var e=g.get.source();return o[e]!==A&&o[e].type},url:function(){return i.url?i.url:u.data(a.url)!==A?u.data(a.url):g.determine.url()}},determine:{autoplay:function(){g.should.autoplay()&&(i.autoplay=!0)},source:function(n){var i=!1;return(n=n||g.get.url())&&k.each(o,function(e,t){if(-1!==n.search(t.domain))return i=e,!1}),i},icon:function(){var e=g.get.source();return o[e]!==A&&o[e].icon},url:function(){var e=i.id||u.data(a.id),t=i.source||u.data(a.source),n=o[t]!==A&&o[t].url.replace("{id}",e);return n&&u.data(a.url,n),n}},set:{active:function(){u.addClass(t.active)}},remove:{data:function(){u.removeData(a.id).removeData(a.icon).removeData(a.placeholder).removeData(a.source).removeData(a.url)},active:function(){u.removeClass(t.active)},embed:function(){d.empty()}},encode:{parameters:function(e){var t,n=[];for(t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&amp;")}},generate:{embed:function(e){g.debug("Generating embed html");var t,n,i=g.get.source();return(e=g.get.url(e))?(n=g.generate.parameters(i),t=r.iframe(e,n)):g.error(s.noURL,u),t},parameters:function(e,t){var n=o[e]&&o[e].parameters!==A?o[e].parameters(i):{};return(t=t||i.parameters)&&(n=k.extend({},n,t)),n=i.onEmbed(n),g.encode.parameters(n)}},has:{embed:function(){return 0<d.length},placeholder:function(){return i.placeholder||u.data(a.placeholder)}},should:{autoplay:function(){return"auto"===i.autoplay?i.placeholder||u.data(a.placeholder)!==A:i.autoplay}},is:{video:function(){return"video"==g.get.type()}},setting:function(e,t){if(g.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,i,e);else{if(t===A)return i[e];k.isPlainObject(i[e])?k.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(k.isPlainObject(e))k.extend(!0,g,e);else{if(t===A)return g[e];g[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?g.performance.log(arguments):(g.debug=Function.prototype.bind.call(console.info,console,i.name+":"),g.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?g.performance.log(arguments):(g.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),g.verbose.apply(console,arguments)))},error:function(){i.silent||(g.error=Function.prototype.bind.call(console.error,console,i.name+":"),g.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:f,"Execution Time":n})),clearTimeout(g.performance.timer),g.performance.timer=setTimeout(g.performance.display,500)},display:function(){var e=i.name+":",n=0;y=!1,clearTimeout(g.performance.timer),k.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),1<v.length&&(e+=" ("+v.length+")"),(console.group!==A||console.table!==A)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):k.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=m;return e=e||S,t=f||t,"string"==typeof i&&r!==A&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==A)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==A?a=r[t]:g.error(s.method,i),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==A&&(n=a),k.isArray(h)?h.push(n):h!==A?h=[h,n]:n!==A&&(h=n),a}};w?(m===A&&g.initialize(),g.invoke(C)):(m!==A&&m.invoke("destroy"),g.initialize())}),h!==A?h:this},k.fn.embed.settings={name:"Embed",namespace:"embed",silent:!1,debug:!1,verbose:!1,performance:!0,icon:!1,source:!1,url:!1,id:!1,autoplay:"auto",color:"#444444",hd:!0,brandedUI:!1,parameters:!1,onDisplay:function(){},onPlaceholderDisplay:function(){},onReset:function(){},onCreate:function(e){},onEmbed:function(e){return e},metadata:{id:"id",icon:"icon",placeholder:"placeholder",source:"source",url:"url"},error:{noURL:"No URL specified",method:"The method you called is not defined"},className:{active:"active",embed:"embed"},selector:{embed:".embed",placeholder:".placeholder",icon:".icon"},sources:{youtube:{name:"youtube",type:"video",icon:"video play",domain:"youtube.com",url:"//www.youtube.com/embed/{id}",parameters:function(e){return{autohide:!e.brandedUI,autoplay:e.autoplay,color:e.color||A,hq:e.hd,jsapi:e.api,modestbranding:!e.brandedUI}}},vimeo:{name:"vimeo",type:"video",icon:"video play",domain:"vimeo.com",url:"//player.vimeo.com/video/{id}",parameters:function(e){return{api:e.api,autoplay:e.autoplay,byline:e.brandedUI,color:e.color||A,portrait:e.brandedUI,title:e.brandedUI}}}},templates:{iframe:function(e,t){var n=e;return t&&(n+="?"+t),'<iframe src="'+n+'" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'},placeholder:function(e,t){var n="";return t&&(n+='<i class="'+t+' icon"></i>'),e&&(n+='<img class="placeholder" src="'+e+'">'),n}},api:!1,onPause:function(){},onPlay:function(){},onStop:function(){}}}(jQuery,window,void document),function(j,z,I,M){"use strict";z=void 0!==z&&z.Math==Math?z:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),j.fn.modal=function(w){var S,e=j(this),k=j(z),T=j(I),A=j("body"),R=e.selector||"",P=(new Date).getTime(),E=[],F=w,O="string"==typeof F,D=[].slice.call(arguments,1),q=z.requestAnimationFrame||z.mozRequestAnimationFrame||z.webkitRequestAnimationFrame||z.msRequestAnimationFrame||function(e){setTimeout(e,0)};return e.each(function(){var n,i,e,o,a,t,r,s,l=j.isPlainObject(w)?j.extend(!0,{},j.fn.modal.settings,w):j.extend({},j.fn.modal.settings),c=l.selector,u=l.className,d=l.namespace,f=l.error,m="."+d,g="module-"+d,p=j(this),h=j(l.context),v=p.find(c.close),b=this,y=p.data(g),x=!1,C={initialize:function(){C.verbose("Initializing dimmer",h),C.create.id(),C.create.dimmer(),C.refreshModals(),C.bind.events(),l.observeChanges&&C.observeChanges(),C.instantiate()},instantiate:function(){C.verbose("Storing instance of modal"),y=C,p.data(g,y)},create:{dimmer:function(){var e={debug:l.debug,variation:!l.centered&&"top aligned",dimmerName:"modals"},t=j.extend(!0,e,l.dimmerSettings);j.fn.dimmer!==M?(C.debug("Creating dimmer"),o=h.dimmer(t),l.detachable?(C.verbose("Modal is detachable, moving content into dimmer"),o.dimmer("add content",p)):C.set.undetached(),a=o.dimmer("get dimmer")):C.error(f.dimmer)},id:function(){r=(Math.random().toString(16)+"000000000").substr(2,8),t="."+r,C.verbose("Creating unique id for element",r)}},destroy:function(){s&&s.disconnect(),C.verbose("Destroying previous modal"),p.removeData(g).off(m),k.off(t),a.off(t),v.off(m),h.dimmer("destroy")},observeChanges:function(){"MutationObserver"in z&&((s=new MutationObserver(function(e){C.debug("DOM tree modified, refreshing"),C.refresh()})).observe(b,{childList:!0,subtree:!0}),C.debug("Setting up mutation observer",s))},refresh:function(){C.remove.scrolling(),C.cacheSizes(),C.can.useFlex()||C.set.modalOffset(),C.set.screenHeight(),C.set.type()},refreshModals:function(){i=p.siblings(c.modal),n=i.add(p)},attachEvents:function(e,t){var n=j(e);t=j.isFunction(C[t])?C[t]:C.toggle,0<n.length?(C.debug("Attaching modal events to element",e,t),n.off(m).on("click"+m,t)):C.error(f.notFound,e)},bind:{events:function(){C.verbose("Attaching events"),p.on("click"+m,c.close,C.event.close).on("click"+m,c.approve,C.event.approve).on("click"+m,c.deny,C.event.deny),k.on("resize"+t,C.event.resize)},scrollLock:function(){o.get(0).addEventListener("touchmove",C.event.preventScroll,{passive:!1})}},unbind:{scrollLock:function(){o.get(0).removeEventListener("touchmove",C.event.preventScroll,{passive:!1})}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){x||!1===l.onApprove.call(b,j(this))?C.verbose("Approve callback returned false cancelling hide"):(x=!0,C.hide(function(){x=!1}))},preventScroll:function(e){e.preventDefault()},deny:function(){x||!1===l.onDeny.call(b,j(this))?C.verbose("Deny callback returned false cancelling hide"):(x=!0,C.hide(function(){x=!1}))},close:function(){C.hide()},click:function(e){var t,n;l.closable?(t=0<j(e.target).closest(c.modal).length,n=j.contains(I.documentElement,e.target),!t&&n&&C.is.active()&&(C.debug("Dimmer clicked, hiding all modals"),C.remove.clickaway(),l.allowMultiple?C.hide():C.hideAll())):C.verbose("Dimmer clicked but closable setting is disabled")},debounce:function(e,t){clearTimeout(C.timer),C.timer=setTimeout(e,t)},keyboard:function(e){27==e.which&&(l.closable?(C.debug("Escape key pressed hiding modal"),C.hide()):C.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){o.dimmer("is active")&&(C.is.animating()||C.is.active())&&q(C.refresh)}},toggle:function(){C.is.active()||C.is.animating()?C.hide():C.show()},show:function(e){e=j.isFunction(e)?e:function(){},C.refreshModals(),C.set.dimmerSettings(),C.set.dimmerStyles(),C.showModal(e)},hide:function(e){e=j.isFunction(e)?e:function(){},C.refreshModals(),C.hideModal(e)},showModal:function(e){e=j.isFunction(e)?e:function(){},C.is.animating()||!C.is.active()?(C.showDimmer(),C.cacheSizes(),C.can.useFlex()?C.remove.legacy():(C.set.legacy(),C.set.modalOffset(),C.debug("Using non-flex legacy modal positioning.")),C.set.screenHeight(),C.set.type(),C.set.clickaway(),!l.allowMultiple&&C.others.active()?C.hideOthers(C.showModal):(l.allowMultiple&&l.detachable&&p.detach().appendTo(a),l.onShow.call(b),l.transition&&j.fn.transition!==M&&p.transition("is supported")?(C.debug("Showing modal with css animations"),p.transition({debug:l.debug,animation:l.transition+" in",queue:l.queue,duration:l.duration,useFailSafe:!0,onComplete:function(){l.onVisible.apply(b),l.keyboardShortcuts&&C.add.keyboardShortcuts(),C.save.focus(),C.set.active(),l.autofocus&&C.set.autofocus(),e()}})):C.error(f.noTransition))):C.debug("Modal is already visible")},hideModal:function(e,t){e=j.isFunction(e)?e:function(){},C.debug("Hiding modal"),!1!==l.onHide.call(b,j(this))?(C.is.animating()||C.is.active())&&(l.transition&&j.fn.transition!==M&&p.transition("is supported")?(C.remove.active(),p.transition({debug:l.debug,animation:l.transition+" out",queue:l.queue,duration:l.duration,useFailSafe:!0,onStart:function(){C.others.active()||t||C.hideDimmer(),l.keyboardShortcuts&&C.remove.keyboardShortcuts()},onComplete:function(){l.onHidden.call(b),C.remove.dimmerStyles(),C.restore.focus(),e()}})):C.error(f.noTransition)):C.verbose("Hide callback returned false cancelling hide")},showDimmer:function(){o.dimmer("is animating")||!o.dimmer("is active")?(C.debug("Showing dimmer"),o.dimmer("show")):C.debug("Dimmer already visible")},hideDimmer:function(){o.dimmer("is animating")||o.dimmer("is active")?(C.unbind.scrollLock(),o.dimmer("hide",function(){C.remove.clickaway(),C.remove.screenHeight()})):C.debug("Dimmer is not visible cannot hide")},hideAll:function(e){var t=n.filter("."+u.active+", ."+u.animating);e=j.isFunction(e)?e:function(){},0<t.length&&(C.debug("Hiding all visible modals"),C.hideDimmer(),t.modal("hide modal",e))},hideOthers:function(e){var t=i.filter("."+u.active+", ."+u.animating);e=j.isFunction(e)?e:function(){},0<t.length&&(C.debug("Hiding other modals",i),t.modal("hide modal",e,!0))},others:{active:function(){return 0<i.filter("."+u.active).length},animating:function(){return 0<i.filter("."+u.animating).length}},add:{keyboardShortcuts:function(){C.verbose("Adding keyboard shortcuts"),T.on("keyup"+m,C.event.keyboard)}},save:{focus:function(){0<j(I.activeElement).closest(p).length||(e=j(I.activeElement).blur())}},restore:{focus:function(){e&&0<e.length&&e.focus()}},remove:{active:function(){p.removeClass(u.active)},legacy:function(){p.removeClass(u.legacy)},clickaway:function(){a.off("click"+t)},dimmerStyles:function(){a.removeClass(u.inverted),o.removeClass(u.blurring)},bodyStyle:function(){""===A.attr("style")&&(C.verbose("Removing style attribute"),A.removeAttr("style"))},screenHeight:function(){C.debug("Removing page height"),A.css("height","")},keyboardShortcuts:function(){C.verbose("Removing keyboard shortcuts"),T.off("keyup"+m)},scrolling:function(){o.removeClass(u.scrolling),p.removeClass(u.scrolling)}},cacheSizes:function(){p.addClass(u.loading);var e=p.prop("scrollHeight"),t=p.outerWidth(),n=p.outerHeight();C.cache!==M&&0===n||(C.cache={pageHeight:j(I).outerHeight(),width:t,height:n+l.offset,scrollHeight:e+l.offset,contextHeight:"body"==l.context?j(z).height():o.height()},C.cache.topOffset=-C.cache.height/2),p.removeClass(u.loading),C.debug("Caching modal and container sizes",C.cache)},can:{useFlex:function(){return"auto"==l.useFlex?l.detachable&&!C.is.ie():l.useFlex},fit:function(){var e=C.cache.contextHeight,t=C.cache.contextHeight/2,n=C.cache.topOffset,i=C.cache.scrollHeight,o=C.cache.height,a=l.padding;return o<i?t+n+i+a<e:o+2*a<e}},is:{active:function(){return p.hasClass(u.active)},ie:function(){return!z.ActiveXObject&&"ActiveXObject"in z||"ActiveXObject"in z},animating:function(){return p.transition("is supported")?p.transition("is animating"):p.is(":visible")},scrolling:function(){return o.hasClass(u.scrolling)},modernBrowser:function(){return!(z.ActiveXObject||"ActiveXObject"in z)}},set:{autofocus:function(){var e=p.find("[tabindex], :input").filter(":visible"),t=e.filter("[autofocus]"),n=0<t.length?t.first():e.first();0<n.length&&n.focus()},clickaway:function(){a.on("click"+t,C.event.click)},dimmerSettings:function(){var e,t;j.fn.dimmer!==M?(e={debug:l.debug,dimmerName:"modals",closable:"auto",useFlex:C.can.useFlex(),variation:!l.centered&&"top aligned",duration:{show:l.duration,hide:l.duration}},t=j.extend(!0,e,l.dimmerSettings),l.inverted&&(t.variation=t.variation!==M?t.variation+" inverted":"inverted"),h.dimmer("setting",t)):C.error(f.dimmer)},dimmerStyles:function(){l.inverted?a.addClass(u.inverted):a.removeClass(u.inverted),l.blurring?o.addClass(u.blurring):o.removeClass(u.blurring)},modalOffset:function(){var e=C.cache.width,t=C.cache.height;p.css({marginTop:l.centered&&C.can.fit()?-t/2:0,marginLeft:-e/2}),C.verbose("Setting modal offset for legacy mode")},screenHeight:function(){C.can.fit()?A.css("height",""):(C.debug("Modal is taller than page content, resizing page height"),A.css("height",C.cache.height+2*l.padding))},active:function(){p.addClass(u.active)},scrolling:function(){o.addClass(u.scrolling),p.addClass(u.scrolling),C.unbind.scrollLock()},legacy:function(){p.addClass(u.legacy)},type:function(){C.can.fit()?(C.verbose("Modal fits on screen"),C.others.active()||C.others.animating()||(C.remove.scrolling(),C.bind.scrollLock())):(C.verbose("Modal cannot fit on screen setting to scrolling"),C.set.scrolling())},undetached:function(){o.addClass(u.undetached)}},setting:function(e,t){if(C.debug("Changing setting",e,t),j.isPlainObject(e))j.extend(!0,l,e);else{if(t===M)return l[e];j.isPlainObject(l[e])?j.extend(!0,l[e],t):l[e]=t}},internal:function(e,t){if(j.isPlainObject(e))j.extend(!0,C,e);else{if(t===M)return C[e];C[e]=t}},debug:function(){!l.silent&&l.debug&&(l.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,l.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!l.silent&&l.verbose&&l.debug&&(l.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,l.name+":"),C.verbose.apply(console,arguments)))},error:function(){l.silent||(C.error=Function.prototype.bind.call(console.error,console,l.name+":"),C.error.apply(console,arguments))},performance:{log:function(e){var t,n;l.performance&&(n=(t=(new Date).getTime())-(P||t),P=t,E.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:b,"Execution Time":n})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var e=l.name+":",n=0;P=!1,clearTimeout(C.performance.timer),j.each(E,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",R&&(e+=" '"+R+"'"),(console.group!==M||console.table!==M)&&0<E.length&&(console.groupCollapsed(e),console.table?console.table(E):j.each(E,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),E=[]}},invoke:function(i,e,t){var o,a,n,r=y;return e=e||D,t=b||t,"string"==typeof i&&r!==M&&(i=i.split(/[\. ]/),o=i.length-1,j.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(j.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==M)return a=r[n],!1;if(!j.isPlainObject(r[t])||e==o)return r[t]!==M&&(a=r[t]),!1;r=r[t]}})),j.isFunction(a)?n=a.apply(t,e):a!==M&&(n=a),j.isArray(S)?S.push(n):S!==M?S=[S,n]:n!==M&&(S=n),a}};O?(y===M&&C.initialize(),C.invoke(F)):(y!==M&&y.invoke("destroy"),C.initialize())}),S!==M?S:this},j.fn.modal.settings={name:"Modal",namespace:"modal",useFlex:"auto",offset:0,silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,inverted:!1,blurring:!1,centered:!0,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,transition:"scale",padding:50,onShow:function(){},onVisible:function(){},onHide:function(){return!0},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",inverted:"inverted",legacy:"legacy",loading:"loading",scrolling:"scrolling",undetached:"undetached"}}}(jQuery,window,document),function(y,x,C){"use strict";x=void 0!==x&&x.Math==Math?x:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),y.fn.nag=function(d){var f,e=y(this),m=e.selector||"",g=(new Date).getTime(),p=[],h=d,v="string"==typeof h,b=[].slice.call(arguments,1);return e.each(function(){var i=y.isPlainObject(d)?y.extend(!0,{},y.fn.nag.settings,d):y.extend({},y.fn.nag.settings),e=(i.className,i.selector),s=i.error,t=i.namespace,n="."+t,o=t+"-module",a=y(this),r=(a.find(e.close),i.context?y(i.context):y("body")),l=this,c=a.data(o),u=(x.requestAnimationFrame||x.mozRequestAnimationFrame||x.webkitRequestAnimationFrame||x.msRequestAnimationFrame,{initialize:function(){u.verbose("Initializing element"),a.on("click"+n,e.close,u.dismiss).data(o,u),i.detachable&&a.parent()[0]!==r[0]&&a.detach().prependTo(r),0<i.displayTime&&setTimeout(u.hide,i.displayTime),u.show()},destroy:function(){u.verbose("Destroying instance"),a.removeData(o).off(n)},show:function(){u.should.show()&&!a.is(":visible")&&(u.debug("Showing nag",i.animation.show),"fade"==i.animation.show?a.fadeIn(i.duration,i.easing):a.slideDown(i.duration,i.easing))},hide:function(){u.debug("Showing nag",i.animation.hide),"fade"==i.animation.show?a.fadeIn(i.duration,i.easing):a.slideUp(i.duration,i.easing)},onHide:function(){u.debug("Removing nag",i.animation.hide),a.remove(),i.onHide&&i.onHide()},dismiss:function(e){i.storageMethod&&u.storage.set(i.key,i.value),u.hide(),e.stopImmediatePropagation(),e.preventDefault()},should:{show:function(){return i.persist?(u.debug("Persistent nag is set, can show nag"),!0):u.storage.get(i.key)!=i.value.toString()?(u.debug("Stored value is not set, can show nag",u.storage.get(i.key)),!0):(u.debug("Stored value is set, cannot show nag",u.storage.get(i.key)),!1)}},get:{storageOptions:function(){var e={};return i.expires&&(e.expires=i.expires),i.domain&&(e.domain=i.domain),i.path&&(e.path=i.path),e}},clear:function(){u.storage.remove(i.key)},storage:{set:function(e,t){var n=u.get.storageOptions();if("localstorage"==i.storageMethod&&x.localStorage!==C)x.localStorage.setItem(e,t),u.debug("Value stored using local storage",e,t);else if("sessionstorage"==i.storageMethod&&x.sessionStorage!==C)x.sessionStorage.setItem(e,t),u.debug("Value stored using session storage",e,t);else{if(y.cookie===C)return void u.error(s.noCookieStorage);y.cookie(e,t,n),u.debug("Value stored using cookie",e,t,n)}},get:function(e,t){var n;return"localstorage"==i.storageMethod&&x.localStorage!==C?n=x.localStorage.getItem(e):"sessionstorage"==i.storageMethod&&x.sessionStorage!==C?n=x.sessionStorage.getItem(e):y.cookie!==C?n=y.cookie(e):u.error(s.noCookieStorage),"undefined"!=n&&"null"!=n&&n!==C&&null!==n||(n=C),n},remove:function(e){var t=u.get.storageOptions();"localstorage"==i.storageMethod&&x.localStorage!==C?x.localStorage.removeItem(e):"sessionstorage"==i.storageMethod&&x.sessionStorage!==C?x.sessionStorage.removeItem(e):y.cookie!==C?y.removeCookie(e,t):u.error(s.noStorage)}},setting:function(e,t){if(u.debug("Changing setting",e,t),y.isPlainObject(e))y.extend(!0,i,e);else{if(t===C)return i[e];y.isPlainObject(i[e])?y.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(y.isPlainObject(e))y.extend(!0,u,e);else{if(t===C)return u[e];u[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?u.performance.log(arguments):(u.debug=Function.prototype.bind.call(console.info,console,i.name+":"),u.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?u.performance.log(arguments):(u.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),u.verbose.apply(console,arguments)))},error:function(){i.silent||(u.error=Function.prototype.bind.call(console.error,console,i.name+":"),u.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(g||t),g=t,p.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(u.performance.timer),u.performance.timer=setTimeout(u.performance.display,500)},display:function(){var e=i.name+":",n=0;g=!1,clearTimeout(u.performance.timer),y.each(p,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",m&&(e+=" '"+m+"'"),(console.group!==C||console.table!==C)&&0<p.length&&(console.groupCollapsed(e),console.table?console.table(p):y.each(p,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),p=[]}},invoke:function(i,e,t){var o,a,n,r=c;return e=e||b,t=l||t,"string"==typeof i&&r!==C&&(i=i.split(/[\. ]/),o=i.length-1,y.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(y.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==C)return a=r[n],!1;if(!y.isPlainObject(r[t])||e==o)return r[t]!==C?a=r[t]:u.error(s.method,i),!1;r=r[t]}})),y.isFunction(a)?n=a.apply(t,e):a!==C&&(n=a),y.isArray(f)?f.push(n):f!==C?f=[f,n]:n!==C&&(f=n),a}});v?(c===C&&u.initialize(),u.invoke(h)):(c!==C&&c.invoke("destroy"),u.initialize())}),f!==C?f:this},y.fn.nag.settings={name:"Nag",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"Nag",persist:!1,displayTime:0,animation:{show:"slide",hide:"slide"},context:!1,detachable:!1,expires:30,domain:!1,path:"/",storageMethod:"cookie",key:"nag",value:"dismiss",error:{noCookieStorage:"$.cookie is not included. A storage solution is required.",noStorage:"Neither $.cookie or store is defined. A storage solution is required for storing state",method:"The method you called is not defined."},className:{bottom:"bottom",fixed:"fixed"},selector:{close:".close.icon"},speed:500,easing:"easeOutQuad",onHide:function(){}},y.extend(y.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,void document),function(z,I,M,L){"use strict";I=void 0!==I&&I.Math==Math?I:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),z.fn.popup=function(k){var T,e=z(this),A=z(M),R=z(I),P=z("body"),E=e.selector||"",F=(new Date).getTime(),O=[],D=k,q="string"==typeof D,j=[].slice.call(arguments,1);return e.each(function(){var u,c,e,t,n,d=z.isPlainObject(k)?z.extend(!0,{},z.fn.popup.settings,k):z.extend({},z.fn.popup.settings),o=d.selector,f=d.className,m=d.error,g=d.metadata,i=d.namespace,a="."+d.namespace,r="module-"+i,p=z(this),s=z(d.context),l=z(d.scrollContext),h=z(d.boundary),v=d.target?z(d.target):p,b=0,y=!1,x=!1,C=this,w=p.data(r),S={initialize:function(){S.debug("Initializing",p),S.createID(),S.bind.events(),!S.exists()&&d.preserve&&S.create(),d.observeChanges&&S.observeChanges(),S.instantiate()},instantiate:function(){S.verbose("Storing instance",S),w=S,p.data(r,w)},observeChanges:function(){"MutationObserver"in I&&((e=new MutationObserver(S.event.documentChanged)).observe(M,{childList:!0,subtree:!0}),S.debug("Setting up mutation observer",e))},refresh:function(){d.popup?u=z(d.popup).eq(0):d.inline&&(u=v.nextAll(o.popup).eq(0),d.popup=u),d.popup?(u.addClass(f.loading),c=S.get.offsetParent(),u.removeClass(f.loading),d.movePopup&&S.has.popup()&&S.get.offsetParent(u)[0]!==c[0]&&(S.debug("Moving popup to the same offset parent as target"),u.detach().appendTo(c))):c=d.inline?S.get.offsetParent(v):S.has.popup()?S.get.offsetParent(u):P,c.is("html")&&c[0]!==P[0]&&(S.debug("Setting page as offset parent"),c=P),S.get.variation()&&S.set.variation()},reposition:function(){S.refresh(),S.set.position()},destroy:function(){S.debug("Destroying previous module"),e&&e.disconnect(),u&&!d.preserve&&S.removePopup(),clearTimeout(S.hideTimer),clearTimeout(S.showTimer),S.unbind.close(),S.unbind.events(),p.removeData(r)},event:{start:function(e){var t=z.isPlainObject(d.delay)?d.delay.show:d.delay;clearTimeout(S.hideTimer),x||(S.showTimer=setTimeout(S.show,t))},end:function(){var e=z.isPlainObject(d.delay)?d.delay.hide:d.delay;clearTimeout(S.showTimer),S.hideTimer=setTimeout(S.hide,e)},touchstart:function(e){x=!0,S.show()},resize:function(){S.is.visible()&&S.set.position()},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==C||0<z(e).find(C).length)&&(S.debug("Element removed from DOM, tearing down events"),S.destroy())})})},hideGracefully:function(e){var t=z(e.target),n=z.contains(M.documentElement,e.target),i=0<t.closest(o.popup).length;e&&!i&&n?(S.debug("Click occurred outside popup hiding popup"),S.hide()):S.debug("Click was inside popup, keeping popup open")}},create:function(){var e=S.get.html(),t=S.get.title(),n=S.get.content();e||n||t?(S.debug("Creating pop-up html"),e=e||d.templates.popup({title:t,content:n}),u=z("<div/>").addClass(f.popup).data(g.activator,p).html(e),d.inline?(S.verbose("Inserting popup element inline",u),u.insertAfter(p)):(S.verbose("Appending popup element to body",u),u.appendTo(s)),S.refresh(),S.set.variation(),d.hoverable&&S.bind.popup(),d.onCreate.call(u,C)):0!==v.next(o.popup).length?(S.verbose("Pre-existing popup found"),d.inline=!0,d.popup=v.next(o.popup).data(g.activator,p),S.refresh(),d.hoverable&&S.bind.popup()):d.popup?(z(d.popup).data(g.activator,p),S.verbose("Used popup specified in settings"),S.refresh(),d.hoverable&&S.bind.popup()):S.debug("No content specified skipping display",C)},createID:function(){n=(Math.random().toString(16)+"000000000").substr(2,8),t="."+n,S.verbose("Creating unique id for element",n)},toggle:function(){S.debug("Toggling pop-up"),S.is.hidden()?(S.debug("Popup is hidden, showing pop-up"),S.unbind.close(),S.show()):(S.debug("Popup is visible, hiding pop-up"),S.hide())},show:function(e){if(e=e||function(){},S.debug("Showing pop-up",d.transition),S.is.hidden()&&(!S.is.active()||!S.is.dropdown())){if(S.exists()||S.create(),!1===d.onShow.call(u,C))return void S.debug("onShow callback returned false, cancelling popup animation");d.preserve||d.popup||S.refresh(),u&&S.set.position()&&(S.save.conditions(),d.exclusive&&S.hideAll(),S.animate.show(e))}},hide:function(e){if(e=e||function(){},S.is.visible()||S.is.animating()){if(!1===d.onHide.call(u,C))return void S.debug("onHide callback returned false, cancelling popup animation");S.remove.visible(),S.unbind.close(),S.restore.conditions(),S.animate.hide(e)}},hideAll:function(){z(o.popup).filter("."+f.popupVisible).each(function(){z(this).data(g.activator).popup("hide")})},exists:function(){return!!u&&(d.inline||d.popup?S.has.popup():1<=u.closest(s).length)},removePopup:function(){S.has.popup()&&!d.popup&&(S.debug("Removing popup",u),u.remove(),u=L,d.onRemove.call(u,C))},save:{conditions:function(){S.cache={title:p.attr("title")},S.cache.title&&p.removeAttr("title"),S.verbose("Saving original attributes",S.cache.title)}},restore:{conditions:function(){return S.cache&&S.cache.title&&(p.attr("title",S.cache.title),S.verbose("Restoring original attributes",S.cache.title)),!0}},supports:{svg:function(){return"undefined"==typeof SVGGraphicsElement}},animate:{show:function(e){e=z.isFunction(e)?e:function(){},d.transition&&z.fn.transition!==L&&p.transition("is supported")?(S.set.visible(),u.transition({animation:d.transition+" in",queue:!1,debug:d.debug,verbose:d.verbose,duration:d.duration,onComplete:function(){S.bind.close(),e.call(u,C),d.onVisible.call(u,C)}})):S.error(m.noTransition)},hide:function(e){e=z.isFunction(e)?e:function(){},S.debug("Hiding pop-up"),!1!==d.onHide.call(u,C)?d.transition&&z.fn.transition!==L&&p.transition("is supported")?u.transition({animation:d.transition+" out",queue:!1,duration:d.duration,debug:d.debug,verbose:d.verbose,onComplete:function(){S.reset(),e.call(u,C),d.onHidden.call(u,C)}}):S.error(m.noTransition):S.debug("onHide callback returned false, cancelling popup animation")}},change:{content:function(e){u.html(e)}},get:{html:function(){return p.removeData(g.html),p.data(g.html)||d.html},title:function(){return p.removeData(g.title),p.data(g.title)||d.title},content:function(){return p.removeData(g.content),p.data(g.content)||d.content||p.attr("title")},variation:function(){return p.removeData(g.variation),p.data(g.variation)||d.variation},popup:function(){return u},popupOffset:function(){return u.offset()},calculations:function(){var e,t,n=S.get.offsetParent(u),i=v[0],o=h[0]==I,a=d.inline||d.popup&&d.movePopup?v.position():v.offset(),r=o?{top:0,left:0}:h.offset(),s={},l=o?{top:R.scrollTop(),left:R.scrollLeft()}:{top:0,left:0},s={target:{element:v[0],width:v.outerWidth(),height:v.outerHeight(),top:a.top,left:a.left,margin:{}},popup:{width:u.outerWidth(),height:u.outerHeight()},parent:{width:c.outerWidth(),height:c.outerHeight()},screen:{top:r.top,left:r.left,scroll:{top:l.top,left:l.left},width:h.width(),height:h.height()}};return n.get(0)!==c.get(0)&&(t=n.offset(),s.target.top-=t.top,s.target.left-=t.left,s.parent.width=n.outerWidth(),s.parent.height=n.outerHeight()),d.setFluidWidth&&S.is.fluid()&&(s.container={width:u.parent().outerWidth()},s.popup.width=s.container.width),s.target.margin.top=d.inline?parseInt(I.getComputedStyle(i).getPropertyValue("margin-top"),10):0,s.target.margin.left=d.inline?S.is.rtl()?parseInt(I.getComputedStyle(i).getPropertyValue("margin-right"),10):parseInt(I.getComputedStyle(i).getPropertyValue("margin-left"),10):0,e=s.screen,s.boundary={top:e.top+e.scroll.top,bottom:e.top+e.scroll.top+e.height,left:e.left+e.scroll.left,right:e.left+e.scroll.left+e.width},s},id:function(){return n},startEvent:function(){return"hover"==d.on?"mouseenter":"focus"==d.on&&"focus"},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==d.on?"mouseleave":"focus"==d.on&&"blur"},distanceFromBoundary:function(e,t){var n={},i=(t=t||S.get.calculations()).popup,o=t.boundary;return e&&(n={top:e.top-o.top,left:e.left-o.left,right:o.right-(e.left+i.width),bottom:o.bottom-(e.top+i.height)},S.verbose("Distance from boundaries determined",e,n)),n},offsetParent:function(e){var t=(e!==L?e[0]:v[0]).parentNode,n=z(t);if(t)for(var i="none"===n.css("transform"),o="static"===n.css("position"),a=n.is("body");t&&!a&&o&&i;)t=t.parentNode,i="none"===(n=z(t)).css("transform"),o="static"===n.css("position"),a=n.is("body");return n&&0<n.length?n:z()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(e){var t=e.split(" "),n=t[0],i=t[1],o="top"==n||"bottom"==n,a=!1,r=!1,s=!1;return y||(S.verbose("All available positions available"),y=S.get.positions()),S.debug("Recording last position tried",e),y[e]=!0,"opposite"===d.prefer&&(s=(s=[{top:"bottom",bottom:"top",left:"right",right:"left"}[n],i]).join(" "),a=!0===y[s],S.debug("Trying opposite strategy",s)),"adjacent"===d.prefer&&o&&(s=(s=[n,{left:"center",center:"right",right:"left"}[i]]).join(" "),r=!0===y[s],S.debug("Trying adjacent strategy",s)),(r||a)&&(S.debug("Using backup position",s),s={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"}[e]),s}},set:{position:function(e,t){if(0!==v.length&&0!==u.length){var n,i,o,a,r,s,l,c;if(t=t||S.get.calculations(),e=e||p.data(g.position)||d.position,n=p.data(g.offset)||d.offset,i=d.distanceAway,o=t.target,a=t.popup,r=t.parent,S.should.centerArrow(t)&&(S.verbose("Adjusting offset to center arrow on small target element"),"top left"!=e&&"bottom left"!=e||(n+=o.width/2,n-=d.arrowPixelsFromEdge),"top right"!=e&&"bottom right"!=e||(n-=o.width/2,n+=d.arrowPixelsFromEdge)),0===o.width&&0===o.height&&!S.is.svg(o.element))return S.debug("Popup target is hidden, no action taken"),!1;switch(d.inline&&(S.debug("Adding margin to calculation",o.margin),"left center"==e||"right center"==e?(n+=o.margin.top,i+=-o.margin.left):"top left"==e||"top center"==e||"top right"==e?(n+=o.margin.left,i-=o.margin.top):(n+=o.margin.left,i+=o.margin.top)),S.debug("Determining popup position from calculations",e,t),S.is.rtl()&&(e=e.replace(/left|right/g,function(e){return"left"==e?"right":"left"}),S.debug("RTL: Popup position updated",e)),b==d.maxSearchDepth&&"string"==typeof d.lastResort&&(e=d.lastResort),e){case"top left":s={top:"auto",bottom:r.height-o.top+i,left:o.left+n,right:"auto"};break;case"top center":s={bottom:r.height-o.top+i,left:o.left+o.width/2-a.width/2+n,top:"auto",right:"auto"};break;case"top right":s={bottom:r.height-o.top+i,right:r.width-o.left-o.width-n,top:"auto",left:"auto"};break;case"left center":s={top:o.top+o.height/2-a.height/2+n,right:r.width-o.left+i,left:"auto",bottom:"auto"};break;case"right center":s={top:o.top+o.height/2-a.height/2+n,left:o.left+o.width+i,bottom:"auto",right:"auto"};break;case"bottom left":s={top:o.top+o.height+i,left:o.left+n,bottom:"auto",right:"auto"};break;case"bottom center":s={top:o.top+o.height+i,left:o.left+o.width/2-a.width/2+n,bottom:"auto",right:"auto"};break;case"bottom right":s={top:o.top+o.height+i,right:r.width-o.left-o.width-n,left:"auto",bottom:"auto"}}if(s===L&&S.error(m.invalidPosition,e),S.debug("Calculated popup positioning values",s),u.css(s).removeClass(f.position).addClass(e).addClass(f.loading),l=S.get.popupOffset(),c=S.get.distanceFromBoundary(l,t),S.is.offstage(c,e)){if(S.debug("Position is outside viewport",e),b<d.maxSearchDepth)return b++,e=S.get.nextPosition(e),S.debug("Trying new position",e),!!u&&S.set.position(e,t);if(!d.lastResort)return S.debug("Popup could not find a position to display",u),S.error(m.cannotPlace,C),S.remove.attempts(),S.remove.loading(),S.reset(),d.onUnplaceable.call(u,C),!1;S.debug("No position found, showing with last position")}return S.debug("Position is on stage",e),S.remove.attempts(),S.remove.loading(),d.setFluidWidth&&S.is.fluid()&&S.set.fluidWidth(t),!0}S.error(m.notFound)},fluidWidth:function(e){e=e||S.get.calculations(),S.debug("Automatically setting element width to parent width",e.parent.width),u.css("width",e.container.width)},variation:function(e){(e=e||S.get.variation())&&S.has.popup()&&(S.verbose("Adding variation to popup",e),u.addClass(e))},visible:function(){p.addClass(f.visible)}},remove:{loading:function(){u.removeClass(f.loading)},variation:function(e){(e=e||S.get.variation())&&(S.verbose("Removing variation",e),u.removeClass(e))},visible:function(){p.removeClass(f.visible)},attempts:function(){S.verbose("Resetting all searched positions"),b=0,y=!1}},bind:{events:function(){S.debug("Binding popup events to module"),"click"==d.on&&p.on("click"+a,S.toggle),"hover"==d.on&&p.on("touchstart"+a,S.event.touchstart),S.get.startEvent()&&p.on(S.get.startEvent()+a,S.event.start).on(S.get.endEvent()+a,S.event.end),d.target&&S.debug("Target set to element",v),R.on("resize"+t,S.event.resize)},popup:function(){S.verbose("Allowing hover events on popup to prevent closing"),u&&S.has.popup()&&u.on("mouseenter"+a,S.event.start).on("mouseleave"+a,S.event.end)},close:function(){(!0===d.hideOnScroll||"auto"==d.hideOnScroll&&"click"!=d.on)&&S.bind.closeOnScroll(),S.is.closable()?S.bind.clickaway():"hover"==d.on&&x&&S.bind.touchClose()},closeOnScroll:function(){S.verbose("Binding scroll close event to document"),l.one(S.get.scrollEvent()+t,S.event.hideGracefully)},touchClose:function(){S.verbose("Binding popup touchclose event to document"),A.on("touchstart"+t,function(e){S.verbose("Touched away from popup"),S.event.hideGracefully.call(C,e)})},clickaway:function(){S.verbose("Binding popup close event to document"),A.on("click"+t,function(e){S.verbose("Clicked away from popup"),S.event.hideGracefully.call(C,e)})}},unbind:{events:function(){R.off(t),p.off(a)},close:function(){A.off(t),l.off(t)}},has:{popup:function(){return u&&0<u.length}},should:{centerArrow:function(e){return!S.is.basic()&&e.target.width<=2*d.arrowPixelsFromEdge}},is:{closable:function(){return"auto"==d.closable?"hover"!=d.on:d.closable},offstage:function(e,n){var i=[];return z.each(e,function(e,t){t<-d.jitter&&(S.debug("Position exceeds allowable distance from edge",e,t,n),i.push(e))}),0<i.length},svg:function(e){return S.supports.svg()&&e instanceof SVGGraphicsElement},basic:function(){return p.hasClass(f.basic)},active:function(){return p.hasClass(f.active)},animating:function(){return u!==L&&u.hasClass(f.animating)},fluid:function(){return u!==L&&u.hasClass(f.fluid)},visible:function(){return u!==L&&u.hasClass(f.popupVisible)},dropdown:function(){return p.hasClass(f.dropdown)},hidden:function(){return!S.is.visible()},rtl:function(){return"rtl"==p.css("direction")}},reset:function(){S.remove.visible(),d.preserve?z.fn.transition!==L&&u.transition("remove transition"):S.removePopup()},setting:function(e,t){if(z.isPlainObject(e))z.extend(!0,d,e);else{if(t===L)return d[e];d[e]=t}},internal:function(e,t){if(z.isPlainObject(e))z.extend(!0,S,e);else{if(t===L)return S[e];S[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?S.performance.log(arguments):(S.debug=Function.prototype.bind.call(console.info,console,d.name+":"),S.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?S.performance.log(arguments):(S.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),S.verbose.apply(console,arguments)))},error:function(){d.silent||(S.error=Function.prototype.bind.call(console.error,console,d.name+":"),S.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(F||t),F=t,O.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:C,"Execution Time":n})),clearTimeout(S.performance.timer),S.performance.timer=setTimeout(S.performance.display,500)},display:function(){var e=d.name+":",n=0;F=!1,clearTimeout(S.performance.timer),z.each(O,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",E&&(e+=" '"+E+"'"),(console.group!==L||console.table!==L)&&0<O.length&&(console.groupCollapsed(e),console.table?console.table(O):z.each(O,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),O=[]}},invoke:function(i,e,t){var o,a,n,r=w;return e=e||j,t=C||t,"string"==typeof i&&r!==L&&(i=i.split(/[\. ]/),o=i.length-1,z.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(z.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==L)return a=r[n],!1;if(!z.isPlainObject(r[t])||e==o)return r[t]!==L&&(a=r[t]),!1;r=r[t]}})),z.isFunction(a)?n=a.apply(t,e):a!==L&&(n=a),z.isArray(T)?T.push(n):T!==L?T=[T,n]:n!==L&&(T=n),a}};q?(w===L&&S.initialize(),S.invoke(D)):(w!==L&&w.invoke("destroy"),S.initialize())}),T!==L?T:this},z.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onUnplaceable:function(){},onHidden:function(){},on:"hover",boundary:I,addTouchEvents:!0,position:"top left",variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:I,prefer:"opposite",lastResort:!1,arrowPixelsFromEdge:20,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",basic:"basic",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible",popupVisible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?e.replace(/[&<>"'`]/g,function(e){return t[e]}):e},popup:function(e){var t="",n=z.fn.popup.settings.templates.escape;return typeof e!==L&&(typeof e.title!==L&&e.title&&(e.title=n(e.title),t+='<div class="header">'+e.title+"</div>"),typeof e.content!==L&&e.content&&(e.content=n(e.content),t+='<div class="content">'+e.content+"</div>")),t}}}}(jQuery,window,document),function(k,e,T,A){"use strict";void 0!==(e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")())&&e.Math==Math||"undefined"!=typeof self&&self.Math==Math||Function("return this")();k.fn.progress=function(h){var v,e=k(this),b=e.selector||"",y=(new Date).getTime(),x=[],C=h,w="string"==typeof C,S=[].slice.call(arguments,1);return e.each(function(){var i=k.isPlainObject(h)?k.extend(!0,{},k.fn.progress.settings,h):k.extend({},k.fn.progress.settings),t=i.className,n=i.metadata,e=i.namespace,o=i.selector,s=i.error,a="."+e,r="module-"+e,l=k(this),c=k(this).find(o.bar),u=k(this).find(o.progress),d=k(this).find(o.label),f=this,m=l.data(r),g=!1,p={initialize:function(){p.debug("Initializing progress bar",i),p.set.duration(),p.set.transitionEvent(),p.read.metadata(),p.read.settings(),p.instantiate()},instantiate:function(){p.verbose("Storing instance of progress",p),m=p,l.data(r,p)},destroy:function(){p.verbose("Destroying previous progress for",l),clearInterval(m.interval),p.remove.state(),l.removeData(r),m=A},reset:function(){p.remove.nextValue(),p.update.progress(0)},complete:function(){(p.percent===A||p.percent<100)&&(p.remove.progressPoll(),p.set.percent(100))},read:{metadata:function(){var e={percent:l.data(n.percent),total:l.data(n.total),value:l.data(n.value)};e.percent&&(p.debug("Current percent value set from metadata",e.percent),p.set.percent(e.percent)),e.total&&(p.debug("Total value set from metadata",e.total),p.set.total(e.total)),e.value&&(p.debug("Current value set from metadata",e.value),p.set.value(e.value),p.set.progress(e.value))},settings:function(){!1!==i.total&&(p.debug("Current total set in settings",i.total),p.set.total(i.total)),!1!==i.value&&(p.debug("Current value set in settings",i.value),p.set.value(i.value),p.set.progress(p.value)),!1!==i.percent&&(p.debug("Current percent set in settings",i.percent),p.set.percent(i.percent))}},bind:{transitionEnd:function(t){var e=p.get.transitionEnd();c.one(e+a,function(e){clearTimeout(p.failSafeTimer),t.call(this,e)}),p.failSafeTimer=setTimeout(function(){c.triggerHandler(e)},i.duration+i.failSafeDelay),p.verbose("Adding fail safe timer",p.timer)}},increment:function(e){var t,n;p.has.total()?n=(t=p.get.value())+(e=e||1):(n=(t=p.get.percent())+(e=e||p.get.randomValue()),p.debug("Incrementing percentage by",t,n)),n=p.get.normalizedValue(n),p.set.progress(n)},decrement:function(e){var t,n;p.get.total()?(n=(t=p.get.value())-(e=e||1),p.debug("Decrementing value by",e,t)):(n=(t=p.get.percent())-(e=e||p.get.randomValue()),p.debug("Decrementing percentage by",e,t)),n=p.get.normalizedValue(n),p.set.progress(n)},has:{progressPoll:function(){return p.progressPoll},total:function(){return!1!==p.get.total()}},get:{text:function(e){var t=p.value||0,n=p.total||0,i=g?p.get.displayPercent():p.percent||0,o=0<p.total?n-t:100-i;return e=(e=e||"").replace("{value}",t).replace("{total}",n).replace("{left}",o).replace("{percent}",i),p.verbose("Adding variables to progress bar text",e),e},normalizedValue:function(e){if(e<0)return p.debug("Value cannot decrement below 0"),0;if(p.has.total()){if(e>p.total)return p.debug("Value cannot increment above total",p.total),p.total}else if(100<e)return p.debug("Value cannot increment above 100 percent"),100;return e},updateInterval:function(){return"auto"==i.updateInterval?i.duration:i.updateInterval},randomValue:function(){return p.debug("Generating random increment percentage"),Math.floor(Math.random()*i.random.max+i.random.min)},numericValue:function(e){return"string"==typeof e?""!==e.replace(/[^\d.]/g,"")&&+e.replace(/[^\d.]/g,""):e},transitionEnd:function(){var e,t=T.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==A)return n[e]},displayPercent:function(){var e=c.width(),t=l.width(),n=parseInt(c.css("min-width"),10)<e?e/t*100:p.percent;return 0<i.precision?Math.round(n*(10*i.precision))/(10*i.precision):Math.round(n)},percent:function(){return p.percent||0},value:function(){return p.nextValue||p.value||0},total:function(){return p.total||!1}},create:{progressPoll:function(){p.progressPoll=setTimeout(function(){p.update.toNextValue(),p.remove.progressPoll()},p.get.updateInterval())}},is:{complete:function(){return p.is.success()||p.is.warning()||p.is.error()},success:function(){return l.hasClass(t.success)},warning:function(){return l.hasClass(t.warning)},error:function(){return l.hasClass(t.error)},active:function(){return l.hasClass(t.active)},visible:function(){return l.is(":visible")}},remove:{progressPoll:function(){p.verbose("Removing progress poll timer"),p.progressPoll&&(clearTimeout(p.progressPoll),delete p.progressPoll)},nextValue:function(){p.verbose("Removing progress value stored for next update"),delete p.nextValue},state:function(){p.verbose("Removing stored state"),delete p.total,delete p.percent,delete p.value},active:function(){p.verbose("Removing active state"),l.removeClass(t.active)},success:function(){p.verbose("Removing success state"),l.removeClass(t.success)},warning:function(){p.verbose("Removing warning state"),l.removeClass(t.warning)},error:function(){p.verbose("Removing error state"),l.removeClass(t.error)}},set:{barWidth:function(e){100<e?p.error(s.tooHigh,e):e<0?p.error(s.tooLow,e):(c.css("width",e+"%"),l.attr("data-percent",parseInt(e,10)))},duration:function(e){e="number"==typeof(e=e||i.duration)?e+"ms":e,p.verbose("Setting progress bar transition duration",e),c.css({"transition-duration":e})},percent:function(e){e="string"==typeof e?+e.replace("%",""):e,e=0<i.precision?Math.round(e*(10*i.precision))/(10*i.precision):Math.round(e),p.percent=e,p.has.total()||(p.value=0<i.precision?Math.round(e/100*p.total*(10*i.precision))/(10*i.precision):Math.round(e/100*p.total*10)/10,i.limitValues&&(p.value=100<p.value?100:p.value<0?0:p.value)),p.set.barWidth(e),p.set.labelInterval(),p.set.labels(),i.onChange.call(f,e,p.value,p.total)},labelInterval:function(){clearInterval(p.interval),p.bind.transitionEnd(function(){p.verbose("Bar finished animating, removing continuous label updates"),clearInterval(p.interval),g=!1,p.set.labels()}),g=!0,p.interval=setInterval(function(){k.contains(T.documentElement,f)||(clearInterval(p.interval),g=!1),p.set.labels()},i.framerate)},labels:function(){p.verbose("Setting both bar progress and outer label text"),p.set.barLabel(),p.set.state()},label:function(e){(e=e||"")&&(e=p.get.text(e),p.verbose("Setting label to text",e),d.text(e))},state:function(e){100===(e=e!==A?e:p.percent)?i.autoSuccess&&!(p.is.warning()||p.is.error()||p.is.success())?(p.set.success(),p.debug("Automatically triggering success at 100%")):(p.verbose("Reached 100% removing active state"),p.remove.active(),p.remove.progressPoll()):0<e?(p.verbose("Adjusting active progress bar label",e),p.set.active()):(p.remove.active(),p.set.label(i.text.active))},barLabel:function(e){e!==A?u.text(p.get.text(e)):"ratio"==i.label&&p.total?(p.verbose("Adding ratio to bar label"),u.text(p.get.text(i.text.ratio))):"percent"==i.label&&(p.verbose("Adding percentage to bar label"),u.text(p.get.text(i.text.percent)))},active:function(e){e=e||i.text.active,p.debug("Setting active state"),i.showActivity&&!p.is.active()&&l.addClass(t.active),p.remove.warning(),p.remove.error(),p.remove.success(),(e=i.onLabelUpdate("active",e,p.value,p.total))&&p.set.label(e),p.bind.transitionEnd(function(){i.onActive.call(f,p.value,p.total)})},success:function(e){e=e||i.text.success||i.text.active,p.debug("Setting success state"),l.addClass(t.success),p.remove.active(),p.remove.warning(),p.remove.error(),p.complete(),e=i.text.success?i.onLabelUpdate("success",e,p.value,p.total):i.onLabelUpdate("active",e,p.value,p.total),p.set.label(e),p.bind.transitionEnd(function(){i.onSuccess.call(f,p.total)})},warning:function(e){e=e||i.text.warning,p.debug("Setting warning state"),l.addClass(t.warning),p.remove.active(),p.remove.success(),p.remove.error(),p.complete(),(e=i.onLabelUpdate("warning",e,p.value,p.total))&&p.set.label(e),p.bind.transitionEnd(function(){i.onWarning.call(f,p.value,p.total)})},error:function(e){e=e||i.text.error,p.debug("Setting error state"),l.addClass(t.error),p.remove.active(),p.remove.success(),p.remove.warning(),p.complete(),(e=i.onLabelUpdate("error",e,p.value,p.total))&&p.set.label(e),p.bind.transitionEnd(function(){i.onError.call(f,p.value,p.total)})},transitionEvent:function(){p.get.transitionEnd()},total:function(e){p.total=e},value:function(e){p.value=e},progress:function(e){p.has.progressPoll()?(p.debug("Updated within interval, setting next update to use new value",e),p.set.nextValue(e)):(p.debug("First update in progress update interval, immediately updating",e),p.update.progress(e),p.create.progressPoll())},nextValue:function(e){p.nextValue=e}},update:{toNextValue:function(){var e=p.nextValue;e&&(p.debug("Update interval complete using last updated value",e),p.update.progress(e),p.remove.nextValue())},progress:function(e){var t;!1===(e=p.get.numericValue(e))&&p.error(s.nonNumeric,e),e=p.get.normalizedValue(e),p.has.total()?(p.set.value(e),t=e/p.total*100,p.debug("Calculating percent complete from total",t)):(t=e,p.debug("Setting value to exact percentage value",t)),p.set.percent(t)}},setting:function(e,t){if(p.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,i,e);else{if(t===A)return i[e];k.isPlainObject(i[e])?k.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(k.isPlainObject(e))k.extend(!0,p,e);else{if(t===A)return p[e];p[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?p.performance.log(arguments):(p.debug=Function.prototype.bind.call(console.info,console,i.name+":"),p.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?p.performance.log(arguments):(p.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),p.verbose.apply(console,arguments)))},error:function(){i.silent||(p.error=Function.prototype.bind.call(console.error,console,i.name+":"),p.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:f,"Execution Time":n})),clearTimeout(p.performance.timer),p.performance.timer=setTimeout(p.performance.display,500)},display:function(){var e=i.name+":",n=0;y=!1,clearTimeout(p.performance.timer),k.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),(console.group!==A||console.table!==A)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):k.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=m;return e=e||S,t=f||t,"string"==typeof i&&r!==A&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==A)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==A?a=r[t]:p.error(s.method,i),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==A&&(n=a),k.isArray(v)?v.push(n):v!==A?v=[v,n]:n!==A&&(v=n),a}};w?(m===A&&p.initialize(),p.invoke(C)):(m!==A&&m.invoke("destroy"),p.initialize())}),v!==A?v:this},k.fn.progress.settings={name:"Progress",namespace:"progress",silent:!1,debug:!1,verbose:!1,performance:!0,random:{min:2,max:5},duration:300,updateInterval:"auto",autoSuccess:!0,showActivity:!0,limitValues:!0,label:"percent",precision:0,framerate:1e3/30,percent:!1,total:!1,value:!1,failSafeDelay:100,onLabelUpdate:function(e,t,n,i){return t},onChange:function(e,t,n){},onSuccess:function(e){},onActive:function(e,t){},onError:function(e,t){},onWarning:function(e,t){},error:{method:"The method you called is not defined.",nonNumeric:"Progress value is non numeric",tooHigh:"Value specified is above 100%",tooLow:"Value specified is below 0%"},regExp:{variable:/\{\$*[A-z0-9]+\}/g},metadata:{percent:"percent",total:"total",value:"value"},selector:{bar:"> .bar",label:"> .label",progress:".bar > .progress"},text:{active:!1,error:!1,success:!1,warning:!1,percent:"{percent}%",ratio:"{value} of {total}"},className:{active:"active",error:"error",success:"success",warning:"warning"}}}(jQuery,window,document),function(w,e,S){"use strict";e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),w.fn.rating=function(m){var g,p=w(this),h=p.selector||"",v=(new Date).getTime(),b=[],y=m,x="string"==typeof y,C=[].slice.call(arguments,1);return p.each(function(){var e,i=w.isPlainObject(m)?w.extend(!0,{},w.fn.rating.settings,m):w.extend({},w.fn.rating.settings),t=i.namespace,o=i.className,n=i.metadata,a=i.selector,r=(i.error,"."+t),s="module-"+t,l=this,c=w(this).data(s),u=w(this),d=u.find(a.icon),f={initialize:function(){f.verbose("Initializing rating module",i),0===d.length&&f.setup.layout(),i.interactive?f.enable():f.disable(),f.set.initialLoad(),f.set.rating(f.get.initialRating()),f.remove.initialLoad(),f.instantiate()},instantiate:function(){f.verbose("Instantiating module",i),c=f,u.data(s,f)},destroy:function(){f.verbose("Destroying previous instance",c),f.remove.events(),u.removeData(s)},refresh:function(){d=u.find(a.icon)},setup:{layout:function(){var e=f.get.maxRating(),t=w.fn.rating.settings.templates.icon(e);f.debug("Generating icon html dynamically"),u.html(t),f.refresh()}},event:{mouseenter:function(){var e=w(this);e.nextAll().removeClass(o.selected),u.addClass(o.selected),e.addClass(o.selected).prevAll().addClass(o.selected)},mouseleave:function(){u.removeClass(o.selected),d.removeClass(o.selected)},click:function(){var e=w(this),t=f.get.rating(),n=d.index(e)+1;("auto"==i.clearable?1===d.length:i.clearable)&&t==n?f.clearRating():f.set.rating(n)}},clearRating:function(){f.debug("Clearing current rating"),f.set.rating(0)},bind:{events:function(){f.verbose("Binding events"),u.on("mouseenter"+r,a.icon,f.event.mouseenter).on("mouseleave"+r,a.icon,f.event.mouseleave).on("click"+r,a.icon,f.event.click)}},remove:{events:function(){f.verbose("Removing events"),u.off(r)},initialLoad:function(){e=!1}},enable:function(){f.debug("Setting rating to interactive mode"),f.bind.events(),u.removeClass(o.disabled)},disable:function(){f.debug("Setting rating to read-only mode"),f.remove.events(),u.addClass(o.disabled)},is:{initialLoad:function(){return e}},get:{initialRating:function(){return u.data(n.rating)!==S?(u.removeData(n.rating),u.data(n.rating)):i.initialRating},maxRating:function(){return u.data(n.maxRating)!==S?(u.removeData(n.maxRating),u.data(n.maxRating)):i.maxRating},rating:function(){var e=d.filter("."+o.active).length;return f.verbose("Current rating retrieved",e),e}},set:{rating:function(e){var t=0<=e-1?e-1:0,n=d.eq(t);u.removeClass(o.selected),d.removeClass(o.selected).removeClass(o.active),0<e&&(f.verbose("Setting current rating to",e),n.prevAll().addBack().addClass(o.active)),f.is.initialLoad()||i.onRate.call(l,e)},initialLoad:function(){e=!0}},setting:function(e,t){if(f.debug("Changing setting",e,t),w.isPlainObject(e))w.extend(!0,i,e);else{if(t===S)return i[e];w.isPlainObject(i[e])?w.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(w.isPlainObject(e))w.extend(!0,f,e);else{if(t===S)return f[e];f[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,i.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),f.verbose.apply(console,arguments)))},error:function(){i.silent||(f.error=Function.prototype.bind.call(console.error,console,i.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(v||t),v=t,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=i.name+":",n=0;v=!1,clearTimeout(f.performance.timer),w.each(b,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",h&&(e+=" '"+h+"'"),1<p.length&&(e+=" ("+p.length+")"),(console.group!==S||console.table!==S)&&0<b.length&&(console.groupCollapsed(e),console.table?console.table(b):w.each(b,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(i,e,t){var o,a,n,r=c;return e=e||C,t=l||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,w.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(w.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!w.isPlainObject(r[t])||e==o)return r[t]!==S&&(a=r[t]),!1;r=r[t]}})),w.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),w.isArray(g)?g.push(n):g!==S?g=[g,n]:n!==S&&(g=n),a}};x?(c===S&&f.initialize(),f.invoke(y)):(c!==S&&c.invoke("destroy"),f.initialize())}),g!==S?g:this},w.fn.rating.settings={name:"Rating",namespace:"rating",slent:!1,debug:!1,verbose:!1,performance:!0,initialRating:0,interactive:!0,maxRating:4,clearable:"auto",fireOnInit:!1,onRate:function(e){},error:{method:"The method you called is not defined",noMaximum:"No maximum rating specified. Cannot generate HTML automatically"},metadata:{rating:"rating",maxRating:"maxRating"},className:{active:"active",disabled:"disabled",selected:"selected",loading:"loading"},selector:{icon:".icon"},templates:{icon:function(e){for(var t=1,n="";t<=e;)n+='<i class="icon"></i>',t++;return n}}}}(jQuery,window,void document),function(E,F,O,D){"use strict";F=void 0!==F&&F.Math==Math?F:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),E.fn.search=function(l){var C,w=E(this),S=w.selector||"",k=(new Date).getTime(),T=[],A=l,R="string"==typeof A,P=[].slice.call(arguments,1);return E(this).each(function(){var c=E.isPlainObject(l)?E.extend(!0,{},E.fn.search.settings,l):E.extend({},E.fn.search.settings),f=c.className,u=c.metadata,d=c.regExp,a=c.fields,m=c.selector,g=c.error,e=c.namespace,i="."+e,t=e+"-module",p=E(this),h=p.find(m.prompt),n=p.find(m.searchButton),o=p.find(m.results),r=p.find(m.result),v=(p.find(m.category),this),s=p.data(t),b=!1,y=!1,x={initialize:function(){x.verbose("Initializing module"),x.get.settings(),x.determine.searchFields(),x.bind.events(),x.set.type(),x.create.results(),x.instantiate()},instantiate:function(){x.verbose("Storing instance of module",x),s=x,p.data(t,x)},destroy:function(){x.verbose("Destroying instance"),p.off(i).removeData(t)},refresh:function(){x.debug("Refreshing selector cache"),h=p.find(m.prompt),n=p.find(m.searchButton),p.find(m.category),o=p.find(m.results),r=p.find(m.result)},refreshResults:function(){o=p.find(m.results),r=p.find(m.result)},bind:{events:function(){x.verbose("Binding events to search"),c.automatic&&(p.on(x.get.inputEvent()+i,m.prompt,x.event.input),h.attr("autocomplete","off")),p.on("focus"+i,m.prompt,x.event.focus).on("blur"+i,m.prompt,x.event.blur).on("keydown"+i,m.prompt,x.handleKeyboard).on("click"+i,m.searchButton,x.query).on("mousedown"+i,m.results,x.event.result.mousedown).on("mouseup"+i,m.results,x.event.result.mouseup).on("click"+i,m.result,x.event.result.click)}},determine:{searchFields:function(){l&&l.searchFields!==D&&(c.searchFields=l.searchFields)}},event:{input:function(){c.searchDelay?(clearTimeout(x.timer),x.timer=setTimeout(function(){x.is.focused()&&x.query()},c.searchDelay)):x.query()},focus:function(){x.set.focus(),c.searchOnFocus&&x.has.minimumCharacters()&&x.query(function(){x.can.show()&&x.showResults()})},blur:function(e){function t(){x.cancel.query(),x.remove.focus(),x.timer=setTimeout(x.hideResults,c.hideDelay)}var n=O.activeElement===this;n||(y=!1,x.resultsClicked?(x.debug("Determining if user action caused search to close"),p.one("click.close"+i,m.results,function(e){x.is.inMessage(e)||b?h.focus():(b=!1,x.is.animating()||x.is.hidden()||t())})):(x.debug("Input blurred without user action, closing results"),t()))},result:{mousedown:function(){x.resultsClicked=!0},mouseup:function(){x.resultsClicked=!1},click:function(e){x.debug("Search result selected");var t=E(this),n=t.find(m.title).eq(0),i=t.is("a[href]")?t:t.find("a[href]").eq(0),o=i.attr("href")||!1,a=i.attr("target")||!1,r=(n.html(),0<n.length&&n.text()),s=x.get.results(),l=t.data(u.result)||x.get.result(r,s);if(E.isFunction(c.onSelect)&&!1===c.onSelect.call(v,l,s))return x.debug("Custom onSelect callback cancelled default select action"),void(b=!0);x.hideResults(),r&&x.set.value(r),o&&(x.verbose("Opening search link found in result",i),"_blank"==a||e.ctrlKey?F.open(o):F.location.href=o)}}},handleKeyboard:function(e){var t,n=p.find(m.result),i=p.find(m.category),o=n.filter("."+f.active),a=n.index(o),r=n.length,s=0<o.length,l=e.which,c=13,u=38,d=40;if(l==27&&(x.verbose("Escape key pressed, blurring search field"),x.hideResults(),y=!0),x.is.visible())if(l==c){if(x.verbose("Enter key pressed, selecting active result"),0<n.filter("."+f.active).length)return x.event.result.click.call(n.filter("."+f.active),e),e.preventDefault(),!1}else l==u&&s?(x.verbose("Up key pressed, changing active result"),t=a-1<0?a:a-1,i.removeClass(f.active),n.removeClass(f.active).eq(t).addClass(f.active).closest(i).addClass(f.active),e.preventDefault()):l==d&&(x.verbose("Down key pressed, changing active result"),t=r<=a+1?a:a+1,i.removeClass(f.active),n.removeClass(f.active).eq(t).addClass(f.active).closest(i).addClass(f.active),e.preventDefault());else l==c&&(x.verbose("Enter key pressed, executing query"),x.query(),x.set.buttonPressed(),h.one("keyup",x.remove.buttonFocus))},setup:{api:function(t,n){var e={debug:c.debug,on:!1,cache:c.cache,action:"search",urlData:{query:t},onSuccess:function(e){x.parse.response.call(v,e,t),n()},onFailure:function(){x.displayMessage(g.serverError),n()},onAbort:function(e){},onError:x.error};E.extend(!0,e,c.apiSettings),x.verbose("Setting up API request",e),p.api(e)}},can:{useAPI:function(){return E.fn.api!==D},show:function(){return x.is.focused()&&!x.is.visible()&&!x.is.empty()},transition:function(){return c.transition&&E.fn.transition!==D&&p.transition("is supported")}},is:{animating:function(){return o.hasClass(f.animating)},hidden:function(){return o.hasClass(f.hidden)},inMessage:function(e){if(e.target){var t=E(e.target);return E.contains(O.documentElement,e.target)&&0<t.closest(m.message).length}},empty:function(){return""===o.html()},visible:function(){return 0<o.filter(":visible").length},focused:function(){return 0<h.filter(":focus").length}},get:{settings:function(){E.isPlainObject(l)&&l.searchFullText&&(c.fullTextSearch=l.searchFullText,x.error(c.error.oldSearchSyntax,v))},inputEvent:function(){var e=h[0];return e!==D&&e.oninput!==D?"input":e!==D&&e.onpropertychange!==D?"propertychange":"keyup"},value:function(){return h.val()},results:function(){return p.data(u.results)},result:function(n,e){var i=["title","id"],o=!1;return n=n!==D?n:x.get.value(),e=e!==D?e:x.get.results(),"category"===c.type?(x.debug("Finding result that matches",n),E.each(e,function(e,t){if(E.isArray(t.results)&&(o=x.search.object(n,t.results,i)[0]))return!1})):(x.debug("Finding result in results object",n),o=x.search.object(n,e,i)[0]),o||!1}},select:{firstResult:function(){x.verbose("Selecting first result"),r.first().addClass(f.active)}},set:{focus:function(){p.addClass(f.focus)},loading:function(){p.addClass(f.loading)},value:function(e){x.verbose("Setting search input value",e),h.val(e)},type:function(e){e=e||c.type,"category"==c.type&&p.addClass(c.type)},buttonPressed:function(){n.addClass(f.pressed)}},remove:{loading:function(){p.removeClass(f.loading)},focus:function(){p.removeClass(f.focus)},buttonPressed:function(){n.removeClass(f.pressed)}},query:function(e){e=E.isFunction(e)?e:function(){};var t=x.get.value(),n=x.read.cache(t);e=e||function(){},x.has.minimumCharacters()?(n?(x.debug("Reading result from cache",t),x.save.results(n.results),x.addResults(n.html),x.inject.id(n.results),e()):(x.debug("Querying for",t),E.isPlainObject(c.source)||E.isArray(c.source)?(x.search.local(t),e()):x.can.useAPI()?x.search.remote(t,e):(x.error(g.source),e())),c.onSearchQuery.call(v,t)):x.hideResults()},search:{local:function(e){var t,n=x.search.object(e,c.content);x.set.loading(),x.save.results(n),x.debug("Returned full local search results",n),0<c.maxResults&&(x.debug("Using specified max results",n),n=n.slice(0,c.maxResults)),"category"==c.type&&(n=x.create.categoryResults(n)),t=x.generateResults({results:n}),x.remove.loading(),x.addResults(t),x.inject.id(n),x.write.cache(e,{html:t,results:n})},remote:function(e,t){t=E.isFunction(t)?t:function(){},p.api("is loading")&&p.api("abort"),x.setup.api(e,t),p.api("query")},object:function(i,t,e){function o(e,t){var n=-1==E.inArray(t,a),i=-1==E.inArray(t,s),o=-1==E.inArray(t,r);n&&i&&o&&e.push(t)}var a=[],r=[],s=[],n=i.toString().replace(d.escape,"\\$&"),l=new RegExp(d.beginsWith+n,"i");return t=t||c.source,e=e!==D?e:c.searchFields,E.isArray(e)||(e=[e]),t===D||!1===t?(x.error(g.source),[]):(E.each(e,function(e,n){E.each(t,function(e,t){"string"==typeof t[n]&&(-1!==t[n].search(l)?o(a,t):"exact"===c.fullTextSearch&&x.exactSearch(i,t[n])?o(r,t):1==c.fullTextSearch&&x.fuzzySearch(i,t[n])&&o(s,t))})}),E.merge(r,s),E.merge(a,r),a)}},exactSearch:function(e,t){return e=e.toLowerCase(),-1<(t=t.toLowerCase()).indexOf(e)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),n<i)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},parse:{response:function(e,t){var n=x.generateResults(e);x.verbose("Parsing server response",e),e!==D&&t!==D&&e[a.results]!==D&&(x.addResults(n),x.inject.id(e[a.results]),x.write.cache(t,{html:n,results:e[a.results]}),x.save.results(e[a.results]))}},cancel:{query:function(){x.can.useAPI()&&p.api("abort")}},has:{minimumCharacters:function(){return x.get.value().length>=c.minCharacters},results:function(){return 0!==o.length&&""!=o.html()}},clear:{cache:function(e){var t=p.data(u.cache);e?e&&t&&t[e]&&(x.debug("Removing value from cache",e),delete t[e],p.data(u.cache,t)):(x.debug("Clearing cache",e),p.removeData(u.cache))}},read:{cache:function(e){var t=p.data(u.cache);return!!c.cache&&(x.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==D&&t[e])}},create:{categoryResults:function(e){var n={};return E.each(e,function(e,t){t.category&&(n[t.category]===D?(x.verbose("Creating new category of results",t.category),n[t.category]={name:t.category,results:[t]}):n[t.category].results.push(t))}),n},id:function(e,t){var n,i=e+1;return t!==D?(n=String.fromCharCode(97+t)+i,x.verbose("Creating category result id",n)):(n=i,x.verbose("Creating result id",n)),n},results:function(){0===o.length&&(o=E("<div />").addClass(f.results).appendTo(p))}},inject:{result:function(e,t,n){x.verbose("Injecting result into results");var i=n!==D?o.children().eq(n).children(m.results).first().children(m.result).eq(t):o.children(m.result).eq(t);x.verbose("Injecting results metadata",i),i.data(u.result,e)},id:function(i){x.debug("Injecting unique ids into results");var o=0,a=0;return"category"===c.type?E.each(i,function(e,i){a=0,E.each(i.results,function(e,t){var n=i.results[e];n.id===D&&(n.id=x.create.id(a,o)),x.inject.result(n,a,o),a++}),o++}):E.each(i,function(e,t){var n=i[e];n.id===D&&(n.id=x.create.id(a)),x.inject.result(n,a),a++}),i}},save:{results:function(e){x.verbose("Saving current search results to metadata",e),p.data(u.results,e)}},write:{cache:function(e,t){var n=p.data(u.cache)!==D?p.data(u.cache):{};c.cache&&(x.verbose("Writing generated html to cache",e,t),n[e]=t,p.data(u.cache,n))}},addResults:function(e){if(E.isFunction(c.onResultsAdd)&&!1===c.onResultsAdd.call(o,e))return x.debug("onResultsAdd callback cancelled default action"),!1;e?(o.html(e),x.refreshResults(),c.selectFirstResult&&x.select.firstResult(),x.showResults()):x.hideResults(function(){o.empty()})},showResults:function(e){e=E.isFunction(e)?e:function(){},y||!x.is.visible()&&x.has.results()&&(x.can.transition()?(x.debug("Showing results with css animations"),o.transition({animation:c.transition+" in",debug:c.debug,verbose:c.verbose,duration:c.duration,onComplete:function(){e()},queue:!0})):(x.debug("Showing results with javascript"),o.stop().fadeIn(c.duration,c.easing)),c.onResultsOpen.call(o))},hideResults:function(e){e=E.isFunction(e)?e:function(){},x.is.visible()&&(x.can.transition()?(x.debug("Hiding results with css animations"),o.transition({animation:c.transition+" out",debug:c.debug,verbose:c.verbose,duration:c.duration,onComplete:function(){e()},queue:!0})):(x.debug("Hiding results with javascript"),o.stop().fadeOut(c.duration,c.easing)),c.onResultsClose.call(o))},generateResults:function(e){x.debug("Generating html from response",e);var t=c.templates[c.type],n=E.isPlainObject(e[a.results])&&!E.isEmptyObject(e[a.results]),i=E.isArray(e[a.results])&&0<e[a.results].length,o="";return n||i?(0<c.maxResults&&(n?"standard"==c.type&&x.error(g.maxResults):e[a.results]=e[a.results].slice(0,c.maxResults)),E.isFunction(t)?o=t(e,a):x.error(g.noTemplate,!1)):c.showNoResults&&(o=x.displayMessage(g.noResults,"empty")),c.onResults.call(v,e),o},displayMessage:function(e,t){return t=t||"standard",x.debug("Displaying message",e,t),x.addResults(c.templates.message(e,t)),c.templates.message(e,t)},setting:function(e,t){if(E.isPlainObject(e))E.extend(!0,c,e);else{if(t===D)return c[e];c[e]=t}},internal:function(e,t){if(E.isPlainObject(e))E.extend(!0,x,e);else{if(t===D)return x[e];x[e]=t}},debug:function(){!c.silent&&c.debug&&(c.performance?x.performance.log(arguments):(x.debug=Function.prototype.bind.call(console.info,console,c.name+":"),x.debug.apply(console,arguments)))},verbose:function(){!c.silent&&c.verbose&&c.debug&&(c.performance?x.performance.log(arguments):(x.verbose=Function.prototype.bind.call(console.info,console,c.name+":"),x.verbose.apply(console,arguments)))},error:function(){c.silent||(x.error=Function.prototype.bind.call(console.error,console,c.name+":"),x.error.apply(console,arguments))},performance:{log:function(e){var t,n;c.performance&&(n=(t=(new Date).getTime())-(k||t),k=t,T.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:v,"Execution Time":n})),clearTimeout(x.performance.timer),x.performance.timer=setTimeout(x.performance.display,500)},display:function(){var e=c.name+":",n=0;k=!1,clearTimeout(x.performance.timer),E.each(T,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",S&&(e+=" '"+S+"'"),1<w.length&&(e+=" ("+w.length+")"),(console.group!==D||console.table!==D)&&0<T.length&&(console.groupCollapsed(e),console.table?console.table(T):E.each(T,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),T=[]}},invoke:function(i,e,t){var o,a,n,r=s;return e=e||P,t=v||t,"string"==typeof i&&r!==D&&(i=i.split(/[\. ]/),o=i.length-1,E.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(E.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==D)return a=r[n],!1;if(!E.isPlainObject(r[t])||e==o)return r[t]!==D&&(a=r[t]),!1;r=r[t]}})),E.isFunction(a)?n=a.apply(t,e):a!==D&&(n=a),E.isArray(C)?C.push(n):C!==D?C=[C,n]:n!==D&&(C=n),a}};R?(s===D&&x.initialize(),x.invoke(A)):(s!==D&&s.invoke("destroy"),x.initialize())}),C!==D?C:this},E.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchOnFocus:!0,searchFields:["title","description"],displayField:"",fullTextSearch:"exact",automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(e){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",oldSearchSyntax:"searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined."},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?e.replace(/[&<>"'`]/g,function(e){return t[e]}):e},message:function(e,t){var n="";return e!==D&&t!==D&&(n+='<div class="message '+t+'">',n+="empty"==t?'<div class="header">No Results</div class="header"><div class="description">'+e+'</div class="description">':' <div class="description">'+e+"</div>",n+="</div>"),n},category:function(e,n){var i="";E.fn.search.settings.templates.escape;return e[n.categoryResults]!==D&&(E.each(e[n.categoryResults],function(e,t){t[n.results]!==D&&0<t.results.length&&(i+='<div class="category">',t[n.categoryName]!==D&&(i+='<div class="name">'+t[n.categoryName]+"</div>"),i+='<div class="results">',E.each(t.results,function(e,t){t[n.url]?i+='<a class="result" href="'+t[n.url]+'">':i+='<a class="result">',t[n.image]!==D&&(i+='<div class="image"> <img src="'+t[n.image]+'"></div>'),i+='<div class="content">',t[n.price]!==D&&(i+='<div class="price">'+t[n.price]+"</div>"),t[n.title]!==D&&(i+='<div class="title">'+t[n.title]+"</div>"),t[n.description]!==D&&(i+='<div class="description">'+t[n.description]+"</div>"),i+="</div>",i+="</a>"}),i+="</div>",i+="</div>")}),e[n.action]&&(i+='<a href="'+e[n.action][n.actionURL]+'" class="action">'+e[n.action][n.actionText]+"</a>"),i)},standard:function(e,n){var i="";return e[n.results]!==D&&(E.each(e[n.results],function(e,t){t[n.url]?i+='<a class="result" href="'+t[n.url]+'">':i+='<a class="result">',t[n.image]!==D&&(i+='<div class="image"> <img src="'+t[n.image]+'"></div>'),i+='<div class="content">',t[n.price]!==D&&(i+='<div class="price">'+t[n.price]+"</div>"),t[n.title]!==D&&(i+='<div class="title">'+t[n.title]+"</div>"),t[n.description]!==D&&(i+='<div class="description">'+t[n.description]+"</div>"),i+="</div>",i+="</a>"}),e[n.action]&&(i+='<a href="'+e[n.action][n.actionURL]+'" class="action">'+e[n.action][n.actionText]+"</a>"),i)}}}}(jQuery,window,document),function(A,e,R,P){"use strict";e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),A.fn.shape=function(v){var b,y=A(this),x=(A("body"),(new Date).getTime()),C=[],w=v,S="string"==typeof w,k=[].slice.call(arguments,1),T=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,0)};return y.each(function(){var i,o,t=y.selector||"",a=A.isPlainObject(v)?A.extend(!0,{},A.fn.shape.settings,v):A.extend({},A.fn.shape.settings),e=a.namespace,r=a.selector,n=a.error,s=a.className,l="."+e,c="module-"+e,u=A(this),d=u.find(r.sides),f=u.find(r.side),m=!1,g=this,p=u.data(c),h={initialize:function(){h.verbose("Initializing module for",g),h.set.defaultSide(),h.instantiate()},instantiate:function(){h.verbose("Storing instance of module",h),p=h,u.data(c,p)},destroy:function(){h.verbose("Destroying previous module for",g),u.removeData(c).off(l)},refresh:function(){h.verbose("Refreshing selector cache for",g),u=A(g),d=A(this).find(r.shape),f=A(this).find(r.side)},repaint:function(){h.verbose("Forcing repaint event");(d[0]||R.createElement("div")).offsetWidth},animate:function(e,t){h.verbose("Animating box with properties",e),t=t||function(e){h.verbose("Executing animation callback"),e!==P&&e.stopPropagation(),h.reset(),h.set.active()},a.beforeChange.call(o[0]),h.get.transitionEvent()?(h.verbose("Starting CSS animation"),u.addClass(s.animating),d.css(e).one(h.get.transitionEvent(),t),h.set.duration(a.duration),T(function(){u.addClass(s.animating),i.addClass(s.hidden)})):t()},queue:function(e){h.debug("Queueing animation of",e),d.one(h.get.transitionEvent(),function(){h.debug("Executing queued animation"),setTimeout(function(){u.shape(e)},0)})},reset:function(){h.verbose("Animating states reset"),u.removeClass(s.animating).attr("style","").removeAttr("style"),d.attr("style","").removeAttr("style"),f.attr("style","").removeAttr("style").removeClass(s.hidden),o.removeClass(s.animating).attr("style","").removeAttr("style")},is:{complete:function(){return f.filter("."+s.active)[0]==o[0]},animating:function(){return u.hasClass(s.animating)}},set:{defaultSide:function(){i=u.find("."+a.className.active),o=0<i.next(r.side).length?i.next(r.side):u.find(r.side).first(),m=!1,h.verbose("Active side set to",i),h.verbose("Next side set to",o)},duration:function(e){e="number"==typeof(e=e||a.duration)?e+"ms":e,h.verbose("Setting animation duration",e),!a.duration&&0!==a.duration||d.add(f).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=u.find("."+a.className.active),t=e.outerWidth(!0),n=e.outerHeight(!0);u.css({width:t,height:n})},stageSize:function(){var e=u.clone().addClass(s.loading),t=e.find("."+a.className.active),n=m?e.find(r.side).eq(m):0<t.next(r.side).length?t.next(r.side):e.find(r.side).first(),i="next"==a.width?n.outerWidth(!0):"initial"==a.width?u.width():a.width,o="next"==a.height?n.outerHeight(!0):"initial"==a.height?u.height():a.height;t.removeClass(s.active),n.addClass(s.active),e.insertAfter(u),e.remove(),"auto"!=a.width&&(u.css("width",i+a.jitter),h.verbose("Specifying width during animation",i)),"auto"!=a.height&&(u.css("height",o+a.jitter),h.verbose("Specifying height during animation",o))},nextSide:function(e){m=e,o=f.filter(e),m=f.index(o),0===o.length&&(h.set.defaultSide(),h.error(n.side)),h.verbose("Next side manually set to",o)},active:function(){h.verbose("Setting new side to active",o),f.removeClass(s.active),o.addClass(s.active),a.onChange.call(o[0]),h.set.defaultSide()}},flip:{up:function(){var e;!h.is.complete()||h.is.animating()||a.allowRepeats?h.is.animating()?h.queue("flip up"):(h.debug("Flipping up",o),e=h.get.transform.up(),h.set.stageSize(),h.stage.above(),h.animate(e)):h.debug("Side already visible",o)},down:function(){var e;!h.is.complete()||h.is.animating()||a.allowRepeats?h.is.animating()?h.queue("flip down"):(h.debug("Flipping down",o),e=h.get.transform.down(),h.set.stageSize(),h.stage.below(),h.animate(e)):h.debug("Side already visible",o)},left:function(){var e;!h.is.complete()||h.is.animating()||a.allowRepeats?h.is.animating()?h.queue("flip left"):(h.debug("Flipping left",o),e=h.get.transform.left(),h.set.stageSize(),h.stage.left(),h.animate(e)):h.debug("Side already visible",o)},right:function(){var e;!h.is.complete()||h.is.animating()||a.allowRepeats?h.is.animating()?h.queue("flip right"):(h.debug("Flipping right",o),e=h.get.transform.right(),h.set.stageSize(),h.stage.right(),h.animate(e)):h.debug("Side already visible",o)},over:function(){!h.is.complete()||h.is.animating()||a.allowRepeats?h.is.animating()?h.queue("flip over"):(h.debug("Flipping over",o),h.set.stageSize(),h.stage.behind(),h.animate(h.get.transform.over())):h.debug("Side already visible",o)},back:function(){!h.is.complete()||h.is.animating()||a.allowRepeats?h.is.animating()?h.queue("flip back"):(h.debug("Flipping back",o),h.set.stageSize(),h.stage.behind(),h.animate(h.get.transform.back())):h.debug("Side already visible",o)}},get:{transform:{up:function(){return{transform:"translateY("+-(i.outerHeight(!0)-o.outerHeight(!0))/2+"px) translateZ("+-i.outerHeight(!0)/2+"px) rotateX(-90deg)"}},down:function(){return{transform:"translateY("+-(i.outerHeight(!0)-o.outerHeight(!0))/2+"px) translateZ("+-i.outerHeight(!0)/2+"px) rotateX(90deg)"}},left:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) translateZ("+-i.outerWidth(!0)/2+"px) rotateY(90deg)"}},right:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) translateZ("+-i.outerWidth(!0)/2+"px) rotateY(-90deg)"}},over:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) rotateY(180deg)"}},back:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e,t=R.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==P)return n[e]},nextSide:function(){return 0<i.next(r.side).length?i.next(r.side):u.find(r.side).first()}},stage:{above:function(){var e={origin:(i.outerHeight(!0)-o.outerHeight(!0))/2,depth:{active:o.outerHeight(!0)/2,next:i.outerHeight(!0)/2}};h.verbose("Setting the initial animation position as above",o,e),d.css({transform:"translateZ(-"+e.depth.active+"px)"}),i.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),o.addClass(s.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px)"})},below:function(){var e={origin:(i.outerHeight(!0)-o.outerHeight(!0))/2,depth:{active:o.outerHeight(!0)/2,next:i.outerHeight(!0)/2}};h.verbose("Setting the initial animation position as below",o,e),d.css({transform:"translateZ(-"+e.depth.active+"px)"}),i.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),o.addClass(s.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px)"})},left:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};h.verbose("Setting the initial animation position as left",o,n),d.css({transform:"translateZ(-"+n.depth.active+"px)"}),i.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),o.addClass(s.animating).css({left:n.origin+"px",transform:"rotateY(-90deg) translateZ("+n.depth.next+"px)"})},right:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};h.verbose("Setting the initial animation position as left",o,n),d.css({transform:"translateZ(-"+n.depth.active+"px)"}),i.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),o.addClass(s.animating).css({left:n.origin+"px",transform:"rotateY(90deg) translateZ("+n.depth.next+"px)"})},behind:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};h.verbose("Setting the initial animation position as behind",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(s.animating).css({left:n.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(e,t){if(h.debug("Changing setting",e,t),A.isPlainObject(e))A.extend(!0,a,e);else{if(t===P)return a[e];A.isPlainObject(a[e])?A.extend(!0,a[e],t):a[e]=t}},internal:function(e,t){if(A.isPlainObject(e))A.extend(!0,h,e);else{if(t===P)return h[e];h[e]=t}},debug:function(){!a.silent&&a.debug&&(a.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,a.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!a.silent&&a.verbose&&a.debug&&(a.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,a.name+":"),h.verbose.apply(console,arguments)))},error:function(){a.silent||(h.error=Function.prototype.bind.call(console.error,console,a.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var t,n;a.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:g,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var e=a.name+":",n=0;x=!1,clearTimeout(h.performance.timer),A.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",t&&(e+=" '"+t+"'"),1<y.length&&(e+=" ("+y.length+")"),(console.group!==P||console.table!==P)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):A.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=p;return e=e||k,t=g||t,"string"==typeof i&&r!==P&&(i=i.split(/[\. ]/),o=i.length-1,A.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(A.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==P)return a=r[n],!1;if(!A.isPlainObject(r[t])||e==o)return r[t]!==P&&(a=r[t]),!1;r=r[t]}})),A.isFunction(a)?n=a.apply(t,e):a!==P&&(n=a),A.isArray(b)?b.push(n):b!==P?b=[b,n]:n!==P&&(b=n),a}};S?(p===P&&h.initialize(),h.invoke(w)):(p!==P&&p.invoke("destroy"),h.initialize())}),b!==P?b:this},A.fn.shape.settings={name:"Shape",silent:!1,debug:!1,verbose:!1,jitter:0,performance:!0,namespace:"shape",width:"initial",height:"initial",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document),function(q,j,z,I){"use strict";j=void 0!==j&&j.Math==Math?j:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),q.fn.sidebar=function(x){var C,e=q(this),w=q(j),S=q(z),k=q("html"),T=q("head"),A=e.selector||"",R=(new Date).getTime(),P=[],E=x,F="string"==typeof E,O=[].slice.call(arguments,1),D=j.requestAnimationFrame||j.mozRequestAnimationFrame||j.webkitRequestAnimationFrame||j.msRequestAnimationFrame||function(e){setTimeout(e,0)};return e.each(function(){var r,s,e,t,l,c=q.isPlainObject(x)?q.extend(!0,{},q.fn.sidebar.settings,x):q.extend({},q.fn.sidebar.settings),n=c.selector,a=c.className,i=c.namespace,o=c.regExp,u=c.error,d="."+i,f="module-"+i,m=q(this),g=q(c.context),p=m.children(n.sidebar),h=(g.children(n.fixed),g.children(n.pusher)),v=this,b=m.data(f),y={initialize:function(){y.debug("Initializing sidebar",x),y.create.id(),l=y.get.transitionEvent(),c.delaySetup?D(y.setup.layout):y.setup.layout(),D(function(){y.setup.cache()}),y.instantiate()},instantiate:function(){y.verbose("Storing instance of module",y),b=y,m.data(f,y)},create:{id:function(){e=(Math.random().toString(16)+"000000000").substr(2,8),s="."+e,y.verbose("Creating unique id for element",e)}},destroy:function(){y.verbose("Destroying previous module for",m),m.off(d).removeData(f),y.is.ios()&&y.remove.ios(),g.off(s),w.off(s),S.off(s)},event:{clickaway:function(e){var t=0<h.find(e.target).length||h.is(e.target),n=g.is(e.target);t&&(y.verbose("User clicked on dimmed page"),y.hide()),n&&(y.verbose("User clicked on dimmable context (scaled out page)"),y.hide())},touch:function(e){},containScroll:function(e){v.scrollTop<=0&&(v.scrollTop=1),v.scrollTop+v.offsetHeight>=v.scrollHeight&&(v.scrollTop=v.scrollHeight-v.offsetHeight-1)},scroll:function(e){0===q(e.target).closest(n.sidebar).length&&e.preventDefault()}},bind:{clickaway:function(){y.verbose("Adding clickaway events to context",g),c.closable&&g.on("click"+s,y.event.clickaway).on("touchend"+s,y.event.clickaway)},scrollLock:function(){c.scrollLock&&(y.debug("Disabling page scroll"),w.on("DOMMouseScroll"+s,y.event.scroll)),y.verbose("Adding events to contain sidebar scroll"),S.on("touchmove"+s,y.event.touch),m.on("scroll"+d,y.event.containScroll)}},unbind:{clickaway:function(){y.verbose("Removing clickaway events from context",g),g.off(s)},scrollLock:function(){y.verbose("Removing scroll lock from page"),S.off(s),w.off(s),m.off("scroll"+d)}},add:{inlineCSS:function(){var e,t=y.cache.width||m.outerWidth(),n=y.cache.height||m.outerHeight(),i=y.is.rtl(),o=y.get.direction(),a={left:t,right:-t,top:n,bottom:-n};i&&(y.verbose("RTL detected, flipping widths"),a.left=-t,a.right=t),e="<style>","left"===o||"right"===o?(y.debug("Adding CSS rules for animation distance",t),e+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d("+a[o]+"px, 0, 0);           transform: translate3d("+a[o]+"px, 0, 0); }"):"top"!==o&&"bottom"!=o||(e+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+a[o]+"px, 0);           transform: translate3d(0, "+a[o]+"px, 0); }"),y.is.ie()&&("left"===o||"right"===o?(y.debug("Adding CSS rules for animation distance",t),e+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+a[o]+"px, 0, 0);           transform: translate3d("+a[o]+"px, 0, 0); }"):"top"!==o&&"bottom"!=o||(e+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+a[o]+"px, 0);           transform: translate3d(0, "+a[o]+"px, 0); }"),e+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"),r=q(e+="</style>").appendTo(T),y.debug("Adding sizing css to head",r)}},refresh:function(){y.verbose("Refreshing selector cache"),g=q(c.context),p=g.children(n.sidebar),h=g.children(n.pusher),g.children(n.fixed),y.clear.cache()},refreshSidebars:function(){y.verbose("Refreshing other sidebars"),p=g.children(n.sidebar)},repaint:function(){y.verbose("Forcing repaint event"),v.style.display="none";v.offsetHeight;v.scrollTop=v.scrollTop,v.style.display=""},setup:{cache:function(){y.cache={width:m.outerWidth(),height:m.outerHeight(),rtl:"rtl"==m.css("direction")}},layout:function(){0===g.children(n.pusher).length&&(y.debug("Adding wrapper element for sidebar"),y.error(u.pusher),h=q('<div class="pusher" />'),g.children().not(n.omitted).not(p).wrapAll(h),y.refresh()),0!==m.nextAll(n.pusher).length&&m.nextAll(n.pusher)[0]===h[0]||(y.debug("Moved sidebar to correct parent element"),y.error(u.movedSidebar,v),m.detach().prependTo(g),y.refresh()),y.clear.cache(),y.set.pushable(),y.set.direction()}},attachEvents:function(e,t){var n=q(e);t=q.isFunction(y[t])?y[t]:y.toggle,0<n.length?(y.debug("Attaching sidebar events to element",e,t),n.on("click"+d,t)):y.error(u.notFound,e)},show:function(e){if(e=q.isFunction(e)?e:function(){},y.is.hidden()){if(y.refreshSidebars(),c.overlay&&(y.error(u.overlay),c.transition="overlay"),y.refresh(),y.othersActive())if(y.debug("Other sidebars currently visible"),c.exclusive){if("overlay"!=c.transition)return void y.hideOthers(y.show);y.hideOthers()}else c.transition="overlay";y.pushPage(function(){e.call(v),c.onShow.call(v)}),c.onChange.call(v),c.onVisible.call(v)}else y.debug("Sidebar is already visible")},hide:function(e){e=q.isFunction(e)?e:function(){},(y.is.visible()||y.is.animating())&&(y.debug("Hiding sidebar",e),y.refreshSidebars(),y.pullPage(function(){e.call(v),c.onHidden.call(v)}),c.onChange.call(v),c.onHide.call(v))},othersAnimating:function(){return 0<p.not(m).filter("."+a.animating).length},othersVisible:function(){return 0<p.not(m).filter("."+a.visible).length},othersActive:function(){return y.othersVisible()||y.othersAnimating()},hideOthers:function(e){var t=p.not(m).filter("."+a.visible),n=t.length,i=0;e=e||function(){},t.sidebar("hide",function(){++i==n&&e()})},toggle:function(){y.verbose("Determining toggled direction"),y.is.hidden()?y.show():y.hide()},pushPage:function(t){var e,n,i,o=y.get.transition(),a="overlay"===o||y.othersActive()?m:h;t=q.isFunction(t)?t:function(){},"scale down"==c.transition&&y.scrollToTop(),y.set.transition(o),y.repaint(),e=function(){y.bind.clickaway(),y.add.inlineCSS(),y.set.animating(),y.set.visible()},n=function(){y.set.dimmed()},i=function(e){e.target==a[0]&&(a.off(l+s,i),y.remove.animating(),y.bind.scrollLock(),t.call(v))},a.off(l+s),a.on(l+s,i),D(e),c.dimPage&&!y.othersVisible()&&D(n)},pullPage:function(t){var e,n,i=y.get.transition(),o="overlay"==i||y.othersActive()?m:h;t=q.isFunction(t)?t:function(){},y.verbose("Removing context push state",y.get.direction()),y.unbind.clickaway(),y.unbind.scrollLock(),e=function(){y.set.transition(i),y.set.animating(),y.remove.visible(),c.dimPage&&!y.othersVisible()&&h.removeClass(a.dimmed)},n=function(e){e.target==o[0]&&(o.off(l+s,n),y.remove.animating(),y.remove.transition(),y.remove.inlineCSS(),("scale down"==i||c.returnScroll&&y.is.mobile())&&y.scrollBack(),t.call(v))},o.off(l+s),o.on(l+s,n),D(e)},scrollToTop:function(){y.verbose("Scrolling to top of page to avoid animation issues"),t=q(j).scrollTop(),m.scrollTop(0),j.scrollTo(0,0)},scrollBack:function(){y.verbose("Scrolling back to original page position"),j.scrollTo(0,t)},clear:{cache:function(){y.verbose("Clearing cached dimensions"),y.cache={}}},set:{ios:function(){k.addClass(a.ios)},pushed:function(){g.addClass(a.pushed)},pushable:function(){g.addClass(a.pushable)},dimmed:function(){h.addClass(a.dimmed)},active:function(){m.addClass(a.active)},animating:function(){m.addClass(a.animating)},transition:function(e){e=e||y.get.transition(),m.addClass(e)},direction:function(e){e=e||y.get.direction(),m.addClass(a[e])},visible:function(){m.addClass(a.visible)},overlay:function(){m.addClass(a.overlay)}},remove:{inlineCSS:function(){y.debug("Removing inline css styles",r),r&&0<r.length&&r.remove()},ios:function(){k.removeClass(a.ios)},pushed:function(){g.removeClass(a.pushed)},pushable:function(){g.removeClass(a.pushable)},active:function(){m.removeClass(a.active)},animating:function(){m.removeClass(a.animating)},transition:function(e){e=e||y.get.transition(),m.removeClass(e)},direction:function(e){e=e||y.get.direction(),m.removeClass(a[e])},visible:function(){m.removeClass(a.visible)},overlay:function(){m.removeClass(a.overlay)}},get:{direction:function(){return m.hasClass(a.top)?a.top:m.hasClass(a.right)?a.right:m.hasClass(a.bottom)?a.bottom:a.left},transition:function(){var e=y.get.direction(),t=y.is.mobile()?"auto"==c.mobileTransition?c.defaultTransition.mobile[e]:c.mobileTransition:"auto"==c.transition?c.defaultTransition.computer[e]:c.transition;return y.verbose("Determined transition",t),t},transitionEvent:function(){var e,t=z.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==I)return n[e]}},is:{ie:function(){return!j.ActiveXObject&&"ActiveXObject"in j||"ActiveXObject"in j},ios:function(){var e=navigator.userAgent,t=e.match(o.ios),n=e.match(o.mobileChrome);return!(!t||n)&&(y.verbose("Browser was found to be iOS",e),!0)},mobile:function(){var e=navigator.userAgent;return e.match(o.mobile)?(y.verbose("Browser was found to be mobile",e),!0):(y.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!y.is.visible()},visible:function(){return m.hasClass(a.visible)},open:function(){return y.is.visible()},closed:function(){return y.is.hidden()},vertical:function(){return m.hasClass(a.top)},animating:function(){return g.hasClass(a.animating)},rtl:function(){return y.cache.rtl===I&&(y.cache.rtl="rtl"==m.css("direction")),y.cache.rtl}},setting:function(e,t){if(y.debug("Changing setting",e,t),q.isPlainObject(e))q.extend(!0,c,e);else{if(t===I)return c[e];q.isPlainObject(c[e])?q.extend(!0,c[e],t):c[e]=t}},internal:function(e,t){if(q.isPlainObject(e))q.extend(!0,y,e);else{if(t===I)return y[e];y[e]=t}},debug:function(){!c.silent&&c.debug&&(c.performance?y.performance.log(arguments):(y.debug=Function.prototype.bind.call(console.info,console,c.name+":"),y.debug.apply(console,arguments)))},verbose:function(){!c.silent&&c.verbose&&c.debug&&(c.performance?y.performance.log(arguments):(y.verbose=Function.prototype.bind.call(console.info,console,c.name+":"),y.verbose.apply(console,arguments)))},error:function(){c.silent||(y.error=Function.prototype.bind.call(console.error,console,c.name+":"),y.error.apply(console,arguments))},performance:{log:function(e){var t,n;c.performance&&(n=(t=(new Date).getTime())-(R||t),R=t,P.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:v,"Execution Time":n})),clearTimeout(y.performance.timer),y.performance.timer=setTimeout(y.performance.display,500)},display:function(){var e=c.name+":",n=0;R=!1,clearTimeout(y.performance.timer),q.each(P,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",A&&(e+=" '"+A+"'"),(console.group!==I||console.table!==I)&&0<P.length&&(console.groupCollapsed(e),console.table?console.table(P):q.each(P,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),P=[]}},invoke:function(i,e,t){var o,a,n,r=b;return e=e||O,t=v||t,"string"==typeof i&&r!==I&&(i=i.split(/[\. ]/),o=i.length-1,q.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(q.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==I)return a=r[n],!1;if(!q.isPlainObject(r[t])||e==o)return r[t]!==I?a=r[t]:y.error(u.method,i),!1;r=r[t]}})),q.isFunction(a)?n=a.apply(t,e):a!==I&&(n=a),q.isArray(C)?C.push(n):C!==I?C=[C,n]:n!==I&&(C=n),a}};F?(b===I&&y.initialize(),y.invoke(E)):(b!==I&&y.invoke("destroy"),y.initialize())}),C!==I?C:this},q.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",silent:!1,debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document),function(T,A,R,P){"use strict";A=void 0!==A&&A.Math==Math?A:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.sticky=function(v){var b,e=T(this),y=e.selector||"",x=(new Date).getTime(),C=[],w=v,S="string"==typeof w,k=[].slice.call(arguments,1);return e.each(function(){var i,o,e,t,d=T.isPlainObject(v)?T.extend(!0,{},T.fn.sticky.settings,v):T.extend({},T.fn.sticky.settings),n=d.className,a=d.namespace,r=d.error,s="."+a,l="module-"+a,c=T(this),u=T(A),f=T(d.scrollContext),m=(c.selector,c.data(l)),g=A.requestAnimationFrame||A.mozRequestAnimationFrame||A.webkitRequestAnimationFrame||A.msRequestAnimationFrame||function(e){setTimeout(e,0)},p=this,h={initialize:function(){h.determineContainer(),h.determineContext(),h.verbose("Initializing sticky",d,i),h.save.positions(),h.checkErrors(),h.bind.events(),d.observeChanges&&h.observeChanges(),h.instantiate()},instantiate:function(){h.verbose("Storing instance of module",h),m=h,c.data(l,h)},destroy:function(){h.verbose("Destroying previous instance"),h.reset(),e&&e.disconnect(),t&&t.disconnect(),u.off("load"+s,h.event.load).off("resize"+s,h.event.resize),f.off("scrollchange"+s,h.event.scrollchange),c.removeData(l)},observeChanges:function(){"MutationObserver"in A&&(e=new MutationObserver(h.event.documentChanged),t=new MutationObserver(h.event.changed),e.observe(R,{childList:!0,subtree:!0}),t.observe(p,{childList:!0,subtree:!0}),t.observe(o[0],{childList:!0,subtree:!0}),h.debug("Setting up mutation observer",t))},determineContainer:function(){i=d.container?T(d.container):c.offsetParent()},determineContext:function(){0!==(o=d.context?T(d.context):i).length||h.error(r.invalidContext,d.context,c)},checkErrors:function(){if(h.is.hidden()&&h.error(r.visible,c),h.cache.element.height>h.cache.context.height)return h.reset(),void h.error(r.elementSize,c)},bind:{events:function(){u.on("load"+s,h.event.load).on("resize"+s,h.event.resize),f.off("scroll"+s).on("scroll"+s,h.event.scroll).on("scrollchange"+s,h.event.scrollchange)}},event:{changed:function(e){clearTimeout(h.timer),h.timer=setTimeout(function(){h.verbose("DOM tree modified, updating sticky menu",e),h.refresh()},100)},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==p||0<T(e).find(p).length)&&(h.debug("Element removed from DOM, tearing down events"),h.destroy())})})},load:function(){h.verbose("Page contents finished loading"),g(h.refresh)},resize:function(){h.verbose("Window resized"),g(h.refresh)},scroll:function(){g(function(){f.triggerHandler("scrollchange"+s,f.scrollTop())})},scrollchange:function(e,t){h.stick(t),d.onScroll.call(p)}},refresh:function(e){h.reset(),d.context||h.determineContext(),e&&h.determineContainer(),h.save.positions(),h.stick(),d.onReposition.call(p)},supports:{sticky:function(){var e=T("<div/>");e[0];return e.addClass(n.supported),e.css("position").match("sticky")}},save:{lastScroll:function(e){h.lastScroll=e},elementScroll:function(e){h.elementScroll=e},positions:function(){var e={height:f.height()},t={margin:{top:parseInt(c.css("margin-top"),10),bottom:parseInt(c.css("margin-bottom"),10)},offset:c.offset(),width:c.outerWidth(),height:c.outerHeight()},n={offset:o.offset(),height:o.outerHeight()};i.outerHeight();h.is.standardScroll()||(h.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=f.scrollTop(),e.left=f.scrollLeft(),t.offset.top+=e.top,n.offset.top+=e.top,t.offset.left+=e.left,n.offset.left+=e.left),h.cache={fits:t.height+d.offset<=e.height,sameHeight:t.height==n.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:n.offset.top,height:n.height,bottom:n.offset.top+n.height}},h.set.containerSize(),h.stick(),h.debug("Caching element positions",h.cache)}},get:{direction:function(e){var t="down";return e=e||f.scrollTop(),h.lastScroll!==P&&(h.lastScroll<e?t="down":h.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||f.scrollTop(),h.lastScroll?e-h.lastScroll:0},currentElementScroll:function(){return h.elementScroll?h.elementScroll:h.is.top()?Math.abs(parseInt(c.css("top"),10))||0:Math.abs(parseInt(c.css("bottom"),10))||0},elementScroll:function(e){e=e||f.scrollTop();var t=h.cache.element,n=h.cache.scrollContext,i=h.get.scrollChange(e),o=t.height-n.height+d.offset,a=h.get.currentElementScroll(),r=a+i;return a=h.cache.fits||r<0?0:o<r?o:r}},remove:{lastScroll:function(){delete h.lastScroll},elementScroll:function(e){delete h.elementScroll},minimumSize:function(){i.css("min-height","")},offset:function(){c.css("margin-top","")}},set:{offset:function(){h.verbose("Setting offset on element",d.offset),c.css("margin-top",d.offset)},containerSize:function(){var e,t=i.get(0).tagName;"HTML"===t||"body"==t?h.determineContainer():((e=Math.max(h.cache.context.height,h.cache.element.height))-i.outerHeight()>d.jitter?(h.debug("Context is taller than container. Specifying exact height for container",h.cache.context.height),i.css({height:e})):i.css({height:""}),Math.abs(i.outerHeight()-h.cache.context.height)>d.jitter&&(h.debug("Context has padding, specifying exact height for container",h.cache.context.height),i.css({height:h.cache.context.height})))},minimumSize:function(){var e=h.cache.element;i.css("min-height",e.height)},scroll:function(e){h.debug("Setting scroll on element",e),h.elementScroll!=e&&(h.is.top()&&c.css("bottom","").css("top",-e),h.is.bottom()&&c.css("top","").css("bottom",e))},size:function(){0!==h.cache.element.height&&0!==h.cache.element.width&&(p.style.setProperty("width",h.cache.element.width+"px","important"),p.style.setProperty("height",h.cache.element.height+"px","important"))}},is:{standardScroll:function(){return f[0]==A},top:function(){return c.hasClass(n.top)},bottom:function(){return c.hasClass(n.bottom)},initialPosition:function(){return!h.is.fixed()&&!h.is.bound()},hidden:function(){return!c.is(":visible")},bound:function(){return c.hasClass(n.bound)},fixed:function(){return c.hasClass(n.fixed)}},stick:function(e){var t=e||f.scrollTop(),n=h.cache,i=n.fits,o=n.sameHeight,a=n.element,r=n.scrollContext,s=n.context,l=h.is.bottom()&&d.pushing?d.bottomOffset:d.offset,e={top:t+l,bottom:t+l+r.height},c=(h.get.direction(e.top),i?0:h.get.elementScroll(e.top)),u=!i;0===a.height||o||(h.is.initialPosition()?e.top>=s.bottom?(h.debug("Initial element position is bottom of container"),h.bindBottom()):e.top>a.top&&(a.height+e.top-c>=s.bottom&&a.height<s.height?(h.debug("Initial element position is bottom of container"),h.bindBottom()):(h.debug("Initial element position is fixed"),h.fixTop())):h.is.fixed()?h.is.top()?e.top<=a.top?(h.debug("Fixed element reached top of container"),h.setInitialPosition()):a.height+e.top-c>=s.bottom?(h.debug("Fixed element reached bottom of container"),h.bindBottom()):u&&(h.set.scroll(c),h.save.lastScroll(e.top),h.save.elementScroll(c)):h.is.bottom()&&(e.bottom-a.height<=a.top?(h.debug("Bottom fixed rail has reached top of container"),h.setInitialPosition()):e.bottom>=s.bottom?(h.debug("Bottom fixed rail has reached bottom of container"),h.bindBottom()):u&&(h.set.scroll(c),h.save.lastScroll(e.top),h.save.elementScroll(c))):h.is.bottom()&&(e.top<=a.top?(h.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),h.setInitialPosition()):d.pushing?h.is.bound()&&e.bottom<=s.bottom&&(h.debug("Fixing bottom attached element to bottom of browser."),h.fixBottom()):h.is.bound()&&e.top<=s.bottom-a.height&&(h.debug("Fixing bottom attached element to top of browser."),h.fixTop())))},bindTop:function(){h.debug("Binding element to top of parent container"),h.remove.offset(),d.setSize&&h.set.size(),c.css({left:"",top:"",marginBottom:""}).removeClass(n.fixed).removeClass(n.bottom).addClass(n.bound).addClass(n.top),d.onTop.call(p),d.onUnstick.call(p)},bindBottom:function(){h.debug("Binding element to bottom of parent container"),h.remove.offset(),d.setSize&&h.set.size(),c.css({left:"",top:""}).removeClass(n.fixed).removeClass(n.top).addClass(n.bound).addClass(n.bottom),d.onBottom.call(p),d.onUnstick.call(p)},setInitialPosition:function(){h.debug("Returning to initial position"),h.unfix(),h.unbind()},fixTop:function(){h.debug("Fixing element to top of page"),d.setSize&&h.set.size(),h.set.minimumSize(),h.set.offset(),c.css({left:h.cache.element.left,bottom:"",marginBottom:""}).removeClass(n.bound).removeClass(n.bottom).addClass(n.fixed).addClass(n.top),d.onStick.call(p)},fixBottom:function(){h.debug("Sticking element to bottom of page"),d.setSize&&h.set.size(),h.set.minimumSize(),h.set.offset(),c.css({left:h.cache.element.left,bottom:"",marginBottom:""}).removeClass(n.bound).removeClass(n.top).addClass(n.fixed).addClass(n.bottom),d.onStick.call(p)},unbind:function(){h.is.bound()&&(h.debug("Removing container bound position on element"),h.remove.offset(),c.removeClass(n.bound).removeClass(n.top).removeClass(n.bottom))},unfix:function(){h.is.fixed()&&(h.debug("Removing fixed position on element"),h.remove.minimumSize(),h.remove.offset(),c.removeClass(n.fixed).removeClass(n.top).removeClass(n.bottom),d.onUnstick.call(p))},reset:function(){h.debug("Resetting elements position"),h.unbind(),h.unfix(),h.resetCSS(),h.remove.offset(),h.remove.lastScroll()},resetCSS:function(){c.css({width:"",height:""}),i.css({height:""})},setting:function(e,t){if(T.isPlainObject(e))T.extend(!0,d,e);else{if(t===P)return d[e];d[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,h,e);else{if(t===P)return h[e];h[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,d.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),h.verbose.apply(console,arguments)))},error:function(){d.silent||(h.error=Function.prototype.bind.call(console.error,console,d.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:p,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,0)},display:function(){var e=d.name+":",n=0;x=!1,clearTimeout(h.performance.timer),T.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",y&&(e+=" '"+y+"'"),(console.group!==P||console.table!==P)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):T.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=m;return e=e||k,t=p||t,"string"==typeof i&&r!==P&&(i=i.split(/[\. ]/),o=i.length-1,T.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(T.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==P)return a=r[n],!1;if(!T.isPlainObject(r[t])||e==o)return r[t]!==P&&(a=r[t]),!1;r=r[t]}})),T.isFunction(a)?n=a.apply(t,e):a!==P&&(n=a),T.isArray(b)?b.push(n):b!==P?b=[b,n]:n!==P&&(b=n),a}};S?(m===P&&h.initialize(),h.invoke(w)):(m!==P&&m.invoke("destroy"),h.initialize())}),b!==P?b:this},T.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:A,offset:0,bottomOffset:0,jitter:5,setSize:!0,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document),function(E,F,O,D){"use strict";F=void 0!==F&&F.Math==Math?F:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),E.fn.tab=function(r){var c,u=E.isFunction(this)?E(F):E(this),d=u.selector||"",f=(new Date).getTime(),m=[],g=r,A="string"==typeof g,R=[].slice.call(arguments,1),P=!1;return u.each(function(){var p,a,h,v,b,y=E.isPlainObject(r)?E.extend(!0,{},E.fn.tab.settings,r):E.extend({},E.fn.tab.settings),x=y.className,C=y.metadata,t=y.selector,w=y.error,e="."+y.namespace,n="module-"+y.namespace,S=E(this),i={},k=!0,o=0,s=this,l=S.data(n),T={initialize:function(){T.debug("Initializing tab menu item",S),T.fix.callbacks(),T.determineTabs(),T.debug("Determining tabs",y.context,a),y.auto&&T.set.auto(),T.bind.events(),y.history&&!P&&(T.initializeHistory(),P=!0),T.instantiate()},instantiate:function(){T.verbose("Storing instance of module",T),l=T,S.data(n,T)},destroy:function(){T.debug("Destroying tabs",S),S.removeData(n).off(e)},bind:{events:function(){E.isWindow(s)||(T.debug("Attaching tab activation events to element",S),S.on("click"+e,T.event.click))}},determineTabs:function(){var e;"parent"===y.context?(0<S.closest(t.ui).length?(e=S.closest(t.ui),T.verbose("Using closest UI element as parent",e)):e=S,p=e.parent(),T.verbose("Determined parent element for creating context",p)):y.context?(p=E(y.context),T.verbose("Using selector for tab context",y.context,p)):p=E("body"),y.childrenOnly?(a=p.children(t.tabs),T.debug("Searching tab context children for tabs",p,a)):(a=p.find(t.tabs),T.debug("Searching tab context for tabs",p,a))},fix:{callbacks:function(){E.isPlainObject(r)&&(r.onTabLoad||r.onTabInit)&&(r.onTabLoad&&(r.onLoad=r.onTabLoad,delete r.onTabLoad,T.error(w.legacyLoad,r.onLoad)),r.onTabInit&&(r.onFirstLoad=r.onTabInit,delete r.onTabInit,T.error(w.legacyInit,r.onFirstLoad)),y=E.extend(!0,{},E.fn.tab.settings,r))}},initializeHistory:function(){if(T.debug("Initializing page state"),E.address===D)return T.error(w.state),!1;if("state"==y.historyType){if(T.debug("Using HTML5 to manage state"),!1===y.path)return T.error(w.path),!1;E.address.history(!0).state(y.path)}E.address.bind("change",T.event.history.change)},event:{click:function(e){var t=E(this).data(C.tab);t!==D?(y.history?(T.verbose("Updating page state",e),E.address.value(t)):(T.verbose("Changing tab",e),T.changeTab(t)),e.preventDefault()):T.debug("No tab specified")},history:{change:function(e){var t=e.pathNames.join("/")||T.get.initialPath(),n=y.templates.determineTitle(t)||!1;T.performance.display(),T.debug("History change event",t,e),b=e,t!==D&&T.changeTab(t),n&&E.address.title(n)}}},refresh:function(){h&&(T.debug("Refreshing tab",h),T.changeTab(h))},cache:{read:function(e){return e!==D&&i[e]},add:function(e,t){e=e||h,T.debug("Adding cached content for",e),i[e]=t},remove:function(e){e=e||h,T.debug("Removing cached content for",e),delete i[e]}},set:{auto:function(){var e="string"==typeof y.path?y.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";T.verbose("Setting up automatic tab retrieval from server",e),E.isPlainObject(y.apiSettings)?y.apiSettings.url=e:y.apiSettings={url:e}},loading:function(e){var t=T.get.tabElement(e);t.hasClass(x.loading)||(T.verbose("Setting loading state for",t),t.addClass(x.loading).siblings(a).removeClass(x.active+" "+x.loading),0<t.length&&y.onRequest.call(t[0],e))},state:function(e){E.address.value(e)}},changeTab:function(d){var f=F.history&&F.history.pushState&&y.ignoreFirstLoad&&k,m=y.auto||E.isPlainObject(y.apiSettings),g=m&&!f?T.utilities.pathToArray(d):T.get.defaultPathArray(d);d=T.utilities.arrayToPath(g),E.each(g,function(e,t){var n,i,o,a,r=g.slice(0,e+1),s=T.utilities.arrayToPath(r),l=T.is.tab(s),c=e+1==g.length,u=T.get.tabElement(s);if(T.verbose("Looking for tab",t),l){if(T.verbose("Tab was found",t),h=s,v=T.utilities.filterArray(g,r),c?a=!0:(i=g.slice(0,e+2),o=T.utilities.arrayToPath(i),(a=!T.is.tab(o))&&T.verbose("Tab parameters found",i)),a&&m)return f?(T.debug("Ignoring remote content on first tab load",s),k=!1,T.cache.add(d,u.html()),T.activate.all(s),y.onFirstLoad.call(u[0],s,v,b),y.onLoad.call(u[0],s,v,b)):(T.activate.navigation(s),T.fetch.content(s,d)),!1;T.debug("Opened local tab",s),T.activate.all(s),T.cache.read(s)||(T.cache.add(s,!0),T.debug("First time tab loaded calling tab init"),y.onFirstLoad.call(u[0],s,v,b)),y.onLoad.call(u[0],s,v,b)}else{if(-1!=d.search("/")||""===d)return T.error(w.missingTab,S,p,s),!1;if(s=(n=E("#"+d+', a[name="'+d+'"]')).closest("[data-tab]").data(C.tab),u=T.get.tabElement(s),n&&0<n.length&&s)return T.debug("Anchor link used, opening parent tab",u,n),u.hasClass(x.active)||setTimeout(function(){T.scrollTo(n)},0),T.activate.all(s),T.cache.read(s)||(T.cache.add(s,!0),T.debug("First time tab loaded calling tab init"),y.onFirstLoad.call(u[0],s,v,b)),y.onLoad.call(u[0],s,v,b),!1}})},scrollTo:function(e){var t=!!(e&&0<e.length)&&e.offset().top;!1!==t&&(T.debug("Forcing scroll to an in-page link in a hidden tab",t,e),E(O).scrollTop(t))},update:{content:function(e,t,n){var i=T.get.tabElement(e),o=i[0];n=n!==D?n:y.evaluateScripts,"string"==typeof y.cacheType&&"dom"==y.cacheType.toLowerCase()&&"string"!=typeof t?i.empty().append(E(t).clone(!0)):n?(T.debug("Updating HTML and evaluating inline scripts",e,t),i.html(t)):(T.debug("Updating HTML",e,t),o.innerHTML=t)}},fetch:{content:function(t,n){var e,i,o=T.get.tabElement(t),a={dataType:"html",encodeParameters:!1,on:"now",cache:y.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){"response"==y.cacheType&&T.cache.add(n,e),T.update.content(t,e),t==h?(T.debug("Content loaded",t),T.activate.tab(t)):T.debug("Content loaded in background",t),y.onFirstLoad.call(o[0],t,v,b),y.onLoad.call(o[0],t,v,b),y.loadOnce?T.cache.add(n,!0):"string"==typeof y.cacheType&&"dom"==y.cacheType.toLowerCase()&&0<o.children().length?setTimeout(function(){var e=(e=o.children().clone(!0)).not("script");T.cache.add(n,e)},0):T.cache.add(n,o.html())},urlData:{tab:n}},r=o.api("get request")||!1,s=r&&"pending"===r.state();n=n||t,i=T.cache.read(n),y.cache&&i?(T.activate.tab(t),T.debug("Adding cached content",n),y.loadOnce||("once"==y.evaluateScripts?T.update.content(t,i,!1):T.update.content(t,i)),y.onLoad.call(o[0],t,v,b)):s?(T.set.loading(t),T.debug("Content is already loading",n)):E.api!==D?(e=E.extend(!0,{},y.apiSettings,a),T.debug("Retrieving remote content",n,e),T.set.loading(t),o.api(e)):T.error(w.api)}},activate:{all:function(e){T.activate.tab(e),T.activate.navigation(e)},tab:function(e){var t=T.get.tabElement(e),n="siblings"==y.deactivate?t.siblings(a):a.not(t),i=t.hasClass(x.active);T.verbose("Showing tab content for",t),i||(t.addClass(x.active),n.removeClass(x.active+" "+x.loading),0<t.length&&y.onVisible.call(t[0],e))},navigation:function(e){var t=T.get.navElement(e),n="siblings"==y.deactivate?t.siblings(u):u.not(t),i=t.hasClass(x.active);T.verbose("Activating tab navigation for",t,e),i||(t.addClass(x.active),n.removeClass(x.active+" "+x.loading))}},deactivate:{all:function(){T.deactivate.navigation(),T.deactivate.tabs()},navigation:function(){u.removeClass(x.active)},tabs:function(){a.removeClass(x.active+" "+x.loading)}},is:{tab:function(e){return e!==D&&0<T.get.tabElement(e).length}},get:{initialPath:function(){return u.eq(0).data(C.tab)||a.eq(0).data(C.tab)},path:function(){return E.address.value()},defaultPathArray:function(e){return T.utilities.pathToArray(T.get.defaultPath(e))},defaultPath:function(e){var t=u.filter("[data-"+C.tab+'^="'+e+'/"]').eq(0).data(C.tab)||!1;if(t){if(T.debug("Found default tab",t),o<y.maxDepth)return o++,T.get.defaultPath(t);T.error(w.recursion)}else T.debug("No default tabs found for",e,a);return o=0,e},navElement:function(e){return e=e||h,u.filter("[data-"+C.tab+'="'+e+'"]')},tabElement:function(e){var t,n,i,o;return e=e||h,i=T.utilities.pathToArray(e),o=T.utilities.last(i),t=a.filter("[data-"+C.tab+'="'+e+'"]'),n=a.filter("[data-"+C.tab+'="'+o+'"]'),0<t.length?t:n},tab:function(){return h}},utilities:{filterArray:function(e,t){return E.grep(e,function(e){return-1==E.inArray(e,t)})},last:function(e){return!!E.isArray(e)&&e[e.length-1]},pathToArray:function(e){return e===D&&(e=h),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(e){return!!E.isArray(e)&&e.join("/")}},setting:function(e,t){if(T.debug("Changing setting",e,t),E.isPlainObject(e))E.extend(!0,y,e);else{if(t===D)return y[e];E.isPlainObject(y[e])?E.extend(!0,y[e],t):y[e]=t}},internal:function(e,t){if(E.isPlainObject(e))E.extend(!0,T,e);else{if(t===D)return T[e];T[e]=t}},debug:function(){!y.silent&&y.debug&&(y.performance?T.performance.log(arguments):(T.debug=Function.prototype.bind.call(console.info,console,y.name+":"),T.debug.apply(console,arguments)))},verbose:function(){!y.silent&&y.verbose&&y.debug&&(y.performance?T.performance.log(arguments):(T.verbose=Function.prototype.bind.call(console.info,console,y.name+":"),T.verbose.apply(console,arguments)))},error:function(){y.silent||(T.error=Function.prototype.bind.call(console.error,console,y.name+":"),T.error.apply(console,arguments))},performance:{log:function(e){var t,n;y.performance&&(n=(t=(new Date).getTime())-(f||t),f=t,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:s,"Execution Time":n})),clearTimeout(T.performance.timer),T.performance.timer=setTimeout(T.performance.display,500)},display:function(){var e=y.name+":",n=0;f=!1,clearTimeout(T.performance.timer),E.each(m,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",d&&(e+=" '"+d+"'"),(console.group!==D||console.table!==D)&&0<m.length&&(console.groupCollapsed(e),console.table?console.table(m):E.each(m,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),m=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||R,t=s||t,"string"==typeof i&&r!==D&&(i=i.split(/[\. ]/),o=i.length-1,E.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(E.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==D)return a=r[n],!1;if(!E.isPlainObject(r[t])||e==o)return r[t]!==D?a=r[t]:T.error(w.method,i),!1;r=r[t]}})),E.isFunction(a)?n=a.apply(t,e):a!==D&&(n=a),E.isArray(c)?c.push(n):c!==D?c=[c,n]:n!==D&&(c=n),a}};A?(l===D&&T.initialize(),T.invoke(g)):(l!==D&&l.invoke("destroy"),T.initialize())}),c!==D?c:this},E.tab=function(){E(F).tab.apply(this,arguments)},E.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,loadOnce:!1,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",onFirstLoad:function(e,t,n){},onLoad:function(e,t,n){},onVisible:function(e,t,n){},onRequest:function(e,t,n){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document),function(C,e,w,S){"use strict";e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),C.fn.transition=function(){var c,r=C(this),g=r.selector||"",p=(new Date).getTime(),h=[],v=arguments,b=v[0],y=[].slice.call(arguments,1),x="string"==typeof b;e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame;return r.each(function(i){var u,s,t,d,n,o,e,a,f=C(this),l=this,m={initialize:function(){u=m.get.settings.apply(l,v),d=u.className,t=u.error,n=u.metadata,a="."+u.namespace,e="module-"+u.namespace,s=f.data(e)||m,o=m.get.animationEndEvent(),!1===(x=x&&m.invoke(b))&&(m.verbose("Converted arguments into settings object",u),u.interval?m.delay(u.animate):m.animate(),m.instantiate())},instantiate:function(){m.verbose("Storing instance of module",m),s=m,f.data(e,s)},destroy:function(){m.verbose("Destroying previous module for",l),f.removeData(e)},refresh:function(){m.verbose("Refreshing display type on next animation"),delete m.displayType},forceRepaint:function(){m.verbose("Forcing element repaint");var e=f.parent(),t=f.next();0===t.length?f.detach().appendTo(e):f.detach().insertBefore(t)},repaint:function(){m.verbose("Repainting element");l.offsetWidth},delay:function(e){var t,n=(n=m.get.animationDirection())||(m.can.transition()?m.get.direction():"static");e=e!==S?e:u.interval,t="auto"==u.reverse&&n==d.outward||1==u.reverse?(r.length-i)*u.interval:i*u.interval,m.debug("Delaying animation by",t),setTimeout(m.animate,t)},animate:function(e){if(u=e||u,!m.is.supported())return m.error(t.support),!1;if(m.debug("Preparing animation",u.animation),m.is.animating()){if(u.queue)return!u.allowRepeats&&m.has.direction()&&m.is.occurring()&&!0!==m.queuing?m.debug("Animation is currently occurring, preventing queueing same animation",u.animation):m.queue(u.animation),!1;if(!u.allowRepeats&&m.is.occurring())return m.debug("Animation is already occurring, will not execute repeated animation",u.animation),!1;m.debug("New animation started, completing previous early",u.animation),s.complete()}m.can.animate()?m.set.animating(u.animation):m.error(t.noAnimation,u.animation,l)},reset:function(){m.debug("Resetting animation to beginning conditions"),m.remove.animationCallbacks(),m.restore.conditions(),m.remove.animating()},queue:function(e){m.debug("Queueing animation of",e),m.queuing=!0,f.one(o+".queue"+a,function(){m.queuing=!1,m.repaint(),m.animate.apply(this,u)})},complete:function(e){m.debug("Animation complete",u.animation),m.remove.completeCallback(),m.remove.failSafe(),m.is.looping()||(m.is.outward()?(m.verbose("Animation is outward, hiding element"),m.restore.conditions(),m.hide()):m.is.inward()?(m.verbose("Animation is outward, showing element"),m.restore.conditions(),m.show()):(m.verbose("Static animation completed"),m.restore.conditions(),u.onComplete.call(l)))},force:{visible:function(){var e=f.attr("style"),t=m.get.userStyle(),n=m.get.displayType(),i=t+"display: "+n+" !important;",o=f.css("display"),a=e===S||""===e;o!==n?(m.verbose("Overriding default display to show element",n),f.attr("style",i)):a&&f.removeAttr("style")},hidden:function(){var e=f.attr("style"),t=f.css("display"),n=e===S||""===e;"none"===t||m.is.hidden()?n&&f.removeAttr("style"):(m.verbose("Overriding default display to hide element"),f.css("display","none"))}},has:{direction:function(e){var n=!1;return"string"==typeof(e=e||u.animation)&&(e=e.split(" "),C.each(e,function(e,t){t!==d.inward&&t!==d.outward||(n=!0)})),n},inlineDisplay:function(){var e=f.attr("style")||"";return C.isArray(e.match(/display.*?;/,""))}},set:{animating:function(e){var t;m.remove.completeCallback(),e=e||u.animation,t=m.get.animationClass(e),m.save.animation(t),m.force.visible(),m.remove.hidden(),m.remove.direction(),m.start.animation(t)},duration:function(e,t){!(t="number"==typeof(t=t||u.duration)?t+"ms":t)&&0!==t||(m.verbose("Setting animation duration",t),f.css({"animation-duration":t}))},direction:function(e){(e=e||m.get.direction())==d.inward?m.set.inward():m.set.outward()},looping:function(){m.debug("Transition set to loop"),f.addClass(d.looping)},hidden:function(){f.addClass(d.transition).addClass(d.hidden)},inward:function(){m.debug("Setting direction to inward"),f.removeClass(d.outward).addClass(d.inward)},outward:function(){m.debug("Setting direction to outward"),f.removeClass(d.inward).addClass(d.outward)},visible:function(){f.addClass(d.transition).addClass(d.visible)}},start:{animation:function(e){e=e||m.get.animationClass(),m.debug("Starting tween",e),f.addClass(e).one(o+".complete"+a,m.complete),u.useFailSafe&&m.add.failSafe(),m.set.duration(u.duration),u.onStart.call(l)}},save:{animation:function(e){m.cache||(m.cache={}),m.cache.animation=e},displayType:function(e){"none"!==e&&f.data(n.displayType,e)},transitionExists:function(e,t){C.fn.transition.exists[e]=t,m.verbose("Saving existence of transition",e,t)}},restore:{conditions:function(){var e=m.get.currentAnimation();e&&(f.removeClass(e),m.verbose("Removing animation class",m.cache)),m.remove.duration()}},add:{failSafe:function(){var e=m.get.duration();m.timer=setTimeout(function(){f.triggerHandler(o)},e+u.failSafeDelay),m.verbose("Adding fail safe timer",m.timer)}},remove:{animating:function(){f.removeClass(d.animating)},animationCallbacks:function(){m.remove.queueCallback(),m.remove.completeCallback()},queueCallback:function(){f.off(".queue"+a)},completeCallback:function(){f.off(".complete"+a)},display:function(){f.css("display","")},direction:function(){f.removeClass(d.inward).removeClass(d.outward)},duration:function(){f.css("animation-duration","")},failSafe:function(){m.verbose("Removing fail safe timer",m.timer),m.timer&&clearTimeout(m.timer)},hidden:function(){f.removeClass(d.hidden)},visible:function(){f.removeClass(d.visible)},looping:function(){m.debug("Transitions are no longer looping"),m.is.looping()&&(m.reset(),f.removeClass(d.looping))},transition:function(){f.removeClass(d.visible).removeClass(d.hidden)}},get:{settings:function(e,t,n){return"object"==typeof e?C.extend(!0,{},C.fn.transition.settings,e):"function"==typeof n?C.extend({},C.fn.transition.settings,{animation:e,onComplete:n,duration:t}):"string"==typeof t||"number"==typeof t?C.extend({},C.fn.transition.settings,{animation:e,duration:t}):"object"==typeof t?C.extend({},C.fn.transition.settings,t,{animation:e}):"function"==typeof t?C.extend({},C.fn.transition.settings,{animation:e,onComplete:t}):C.extend({},C.fn.transition.settings,{animation:e})},animationClass:function(e){var t=e||u.animation,n=m.can.transition()&&!m.has.direction()?m.get.direction()+" ":"";return d.animating+" "+d.transition+" "+n+t},currentAnimation:function(){return!(!m.cache||m.cache.animation===S)&&m.cache.animation},currentDirection:function(){return m.is.inward()?d.inward:d.outward},direction:function(){return m.is.hidden()||!m.is.visible()?d.inward:d.outward},animationDirection:function(e){var n;return"string"==typeof(e=e||u.animation)&&(e=e.split(" "),C.each(e,function(e,t){t===d.inward?n=d.inward:t===d.outward&&(n=d.outward)})),n||!1},duration:function(e){return!1===(e=e||u.duration)&&(e=f.css("animation-duration")||0),"string"==typeof e?-1<e.indexOf("ms")?parseFloat(e):1e3*parseFloat(e):e},displayType:function(e){return e=e===S||e,u.displayType?u.displayType:(e&&f.data(n.displayType)===S&&m.can.transition(!0),f.data(n.displayType))},userStyle:function(e){return(e=e||f.attr("style")||"").replace(/display.*?;/,"")},transitionExists:function(e){return C.fn.transition.exists[e]},animationStartEvent:function(){var e,t=w.createElement("div"),n={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(e in n)if(t.style[e]!==S)return n[e];return!1},animationEndEvent:function(){var e,t=w.createElement("div"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(e in n)if(t.style[e]!==S)return n[e];return!1}},can:{transition:function(e){var t,n,i,o,a,r,s=u.animation,l=m.get.transitionExists(s),c=m.get.displayType(!1);if(l===S||e){if(m.verbose("Determining whether animation exists"),t=f.attr("class"),n=f.prop("tagName"),o=(i=C("<"+n+" />").addClass(t).insertAfter(f)).addClass(s).removeClass(d.inward).removeClass(d.outward).addClass(d.animating).addClass(d.transition).css("animationName"),a=i.addClass(d.inward).css("animationName"),c||(c=i.attr("class",t).removeAttr("style").removeClass(d.hidden).removeClass(d.visible).show().css("display"),m.verbose("Determining final display state",c),m.save.displayType(c)),i.remove(),o!=a)m.debug("Direction exists for animation",s),r=!0;else{if("none"==o||!o)return void m.debug("No animation defined in css",s);m.debug("Static animation found",s,c),r=!1}m.save.transitionExists(s,r)}return l!==S?l:r},animate:function(){return m.can.transition()!==S}},is:{animating:function(){return f.hasClass(d.animating)},inward:function(){return f.hasClass(d.inward)},outward:function(){return f.hasClass(d.outward)},looping:function(){return f.hasClass(d.looping)},occurring:function(e){return e="."+(e=e||u.animation).replace(" ","."),0<f.filter(e).length},visible:function(){return f.is(":visible")},hidden:function(){return"hidden"===f.css("visibility")},supported:function(){return!1!==o}},hide:function(){m.verbose("Hiding element"),m.is.animating()&&m.reset(),l.blur(),m.remove.display(),m.remove.visible(),m.set.hidden(),m.force.hidden(),u.onHide.call(l),u.onComplete.call(l)},show:function(e){m.verbose("Showing element",e),m.remove.hidden(),m.set.visible(),m.force.visible(),u.onShow.call(l),u.onComplete.call(l)},toggle:function(){m.is.visible()?m.hide():m.show()},stop:function(){m.debug("Stopping current animation"),f.triggerHandler(o)},stopAll:function(){m.debug("Stopping all animation"),m.remove.queueCallback(),f.triggerHandler(o)},clear:{queue:function(){m.debug("Clearing animation queue"),m.remove.queueCallback()}},enable:function(){m.verbose("Starting animation"),f.removeClass(d.disabled)},disable:function(){m.debug("Stopping animation"),f.addClass(d.disabled)},setting:function(e,t){if(m.debug("Changing setting",e,t),C.isPlainObject(e))C.extend(!0,u,e);else{if(t===S)return u[e];C.isPlainObject(u[e])?C.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(C.isPlainObject(e))C.extend(!0,m,e);else{if(t===S)return m[e];m[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,u.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),m.verbose.apply(console,arguments)))},error:function(){u.silent||(m.error=Function.prototype.bind.call(console.error,console,u.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(p||t),p=t,h.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var e=u.name+":",n=0;p=!1,clearTimeout(m.performance.timer),C.each(h,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",g&&(e+=" '"+g+"'"),1<r.length&&(e+=" ("+r.length+")"),(console.group!==S||console.table!==S)&&0<h.length&&(console.groupCollapsed(e),console.table?console.table(h):C.each(h,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),h=[]}},invoke:function(i,e,t){var o,a,n,r=s;return e=e||y,t=l||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,C.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(C.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!C.isPlainObject(r[t])||e==o)return r[t]!==S&&(a=r[t]),!1;r=r[t]}})),C.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),C.isArray(c)?c.push(n):c!==S?c=[c,n]:n!==S&&(c=n),a!==S&&a}};m.initialize()}),c!==S?c:this},C.fn.transition.exists={},C.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document),function(P,E,F){"use strict";E=void 0!==E&&E.Math==Math?E:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();P.api=P.fn.api=function(x){var C,e=P.isFunction(this)?P(E):P(this),w=e.selector||"",S=(new Date).getTime(),k=[],T=x,A="string"==typeof T,R=[].slice.call(arguments,1);return e.each(function(){var a,r,n,e,s,l=P.isPlainObject(x)?P.extend(!0,{},P.fn.api.settings,x):P.extend({},P.fn.api.settings),t=l.namespace,i=l.metadata,o=l.selector,c=l.error,u=l.className,d="."+t,f="module-"+t,m=P(this),g=m.closest(o.form),p=l.stateContext?P(l.stateContext):m,h=this,v=p[0],b=m.data(f),y={initialize:function(){A||y.bind.events(),y.instantiate()},instantiate:function(){y.verbose("Storing instance of module",y),b=y,m.data(f,b)},destroy:function(){y.verbose("Destroying previous module for",h),m.removeData(f).off(d)},bind:{events:function(){var e=y.get.event();e?(y.verbose("Attaching API events to element",e),m.on(e+d,y.event.trigger)):"now"==l.on&&(y.debug("Querying API endpoint immediately"),y.query())}},decode:{json:function(e){if(e!==F&&"string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}},read:{cachedResponse:function(e){var t;if(E.Storage!==F)return t=sessionStorage.getItem(e),y.debug("Using cached response",e,t),t=y.decode.json(t);y.error(c.noStorage)}},write:{cachedResponse:function(e,t){t&&""===t?y.debug("Response empty, not caching",t):E.Storage!==F?(P.isPlainObject(t)&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t),y.verbose("Storing cached response for url",e,t)):y.error(c.noStorage)}},query:function(){if(y.is.disabled())y.debug("Element is disabled API request aborted");else{if(y.is.loading()){if(!l.interruptRequests)return void y.debug("Cancelling request, previous request is still pending");y.debug("Interrupting previous request"),y.abort()}if(l.defaultData&&P.extend(!0,l.urlData,y.get.defaultData()),l.serializeForm&&(l.data=y.add.formData(l.data)),!1===(r=y.get.settings()))return y.cancelled=!0,void y.error(c.beforeSend);if(y.cancelled=!1,(n=y.get.templatedURL())||y.is.mocked()){if((n=y.add.urlData(n))||y.is.mocked()){if(r.url=l.base+n,a=P.extend(!0,{},l,{type:l.method||l.type,data:e,url:l.base+n,beforeSend:l.beforeXHR,success:function(){},failure:function(){},complete:function(){}}),y.debug("Querying URL",a.url),y.verbose("Using AJAX settings",a),"local"===l.cache&&y.read.cachedResponse(n))return y.debug("Response returned from local cache"),y.request=y.create.request(),void y.request.resolveWith(v,[y.read.cachedResponse(n)]);l.throttle?l.throttleFirstRequest||y.timer?(y.debug("Throttling request",l.throttle),clearTimeout(y.timer),y.timer=setTimeout(function(){y.timer&&delete y.timer,y.debug("Sending throttled request",e,a.method),y.send.request()},l.throttle)):(y.debug("Sending request",e,a.method),y.send.request(),y.timer=setTimeout(function(){},l.throttle)):(y.debug("Sending request",e,a.method),y.send.request())}}else y.error(c.missingURL)}},should:{removeError:function(){return!0===l.hideError||"auto"===l.hideError&&!y.is.form()}},is:{disabled:function(){return 0<m.filter(o.disabled).length},expectingJSON:function(){return"json"===l.dataType||"jsonp"===l.dataType},form:function(){return m.is("form")||p.is("form")},mocked:function(){return l.mockResponse||l.mockResponseAsync||l.response||l.responseAsync},input:function(){return m.is("input")},loading:function(){return!!y.request&&"pending"==y.request.state()},abortedRequest:function(e){return e&&e.readyState!==F&&0===e.readyState?(y.verbose("XHR request determined to be aborted"),!0):(y.verbose("XHR request was not aborted"),!1)},validResponse:function(e){return y.is.expectingJSON()&&P.isFunction(l.successTest)?(y.debug("Checking JSON returned success",l.successTest,e),l.successTest(e)?(y.debug("Response passed success test",e),!0):(y.debug("Response failed success test",e),!1)):(y.verbose("Response is not JSON, skipping validation",l.successTest,e),!0)}},was:{cancelled:function(){return y.cancelled||!1},succesful:function(){return y.request&&"resolved"==y.request.state()},failure:function(){return y.request&&"rejected"==y.request.state()},complete:function(){return y.request&&("resolved"==y.request.state()||"rejected"==y.request.state())}},add:{urlData:function(o,a){var e,t;return o&&(e=o.match(l.regExp.required),t=o.match(l.regExp.optional),a=a||l.urlData,e&&(y.debug("Looking for required URL variables",e),P.each(e,function(e,t){var n=-1!==t.indexOf("$")?t.substr(2,t.length-3):t.substr(1,t.length-2),i=P.isPlainObject(a)&&a[n]!==F?a[n]:m.data(n)!==F?m.data(n):p.data(n)!==F?p.data(n):a[n];if(i===F)return y.error(c.requiredParameter,n,o),o=!1;y.verbose("Found required variable",n,i),i=l.encodeParameters?y.get.urlEncodedValue(i):i,o=o.replace(t,i)})),t&&(y.debug("Looking for optional URL variables",e),P.each(t,function(e,t){var n=-1!==t.indexOf("$")?t.substr(3,t.length-4):t.substr(2,t.length-3),i=P.isPlainObject(a)&&a[n]!==F?a[n]:m.data(n)!==F?m.data(n):p.data(n)!==F?p.data(n):a[n];o=i!==F?(y.verbose("Optional variable Found",n,i),o.replace(t,i)):(y.verbose("Optional variable not found",n),-1!==o.indexOf("/"+t)?o.replace("/"+t,""):o.replace(t,""))}))),o},formData:function(e){var t=P.fn.serializeObject!==F,n=t?g.serializeObject():g.serialize();return e=e||l.data,e=P.isPlainObject(e)?t?(y.debug("Extending existing data with form data",e,n),P.extend(!0,{},e,n)):(y.error(c.missingSerialize),y.debug("Cant extend data. Replacing data with form data",e,n),n):(y.debug("Adding form data",n),n)}},send:{request:function(){y.set.loading(),y.request=y.create.request(),y.is.mocked()?y.mockedXHR=y.create.mockedXHR():y.xhr=y.create.xhr(),l.onRequest.call(v,y.request,y.xhr)}},event:{trigger:function(e){y.query(),"submit"!=e.type&&"click"!=e.type||e.preventDefault()},xhr:{always:function(){},done:function(e,t,n){var i=this,o=(new Date).getTime()-s,a=l.loadingDuration-o,r=!!P.isFunction(l.onResponse)&&(y.is.expectingJSON()?l.onResponse.call(i,P.extend(!0,{},e)):l.onResponse.call(i,e)),a=0<a?a:0;r&&(y.debug("Modified API response in onResponse callback",l.onResponse,r,e),e=r),0<a&&y.debug("Response completed early delaying state change by",a),setTimeout(function(){y.is.validResponse(e)?y.request.resolveWith(i,[e,n]):y.request.rejectWith(i,[n,"invalid"])},a)},fail:function(e,t,n){var i=this,o=(new Date).getTime()-s,a=l.loadingDuration-o;0<(a=0<a?a:0)&&y.debug("Response completed early delaying state change by",a),setTimeout(function(){y.is.abortedRequest(e)?y.request.rejectWith(i,[e,"aborted",n]):y.request.rejectWith(i,[e,"error",t,n])},a)}},request:{done:function(e,t){y.debug("Successful API Response",e),"local"===l.cache&&n&&(y.write.cachedResponse(n,e),y.debug("Saving server response locally",y.cache)),l.onSuccess.call(v,e,m,t)},complete:function(e,t){var n,i;y.was.succesful()?(i=e,n=t):(n=e,i=y.get.responseFromXHR(n)),y.remove.loading(),l.onComplete.call(v,i,m,n)},fail:function(e,t,n){var i=y.get.responseFromXHR(e),o=y.get.errorFromRequest(i,t,n);if("aborted"==t)return y.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)",t,n),l.onAbort.call(v,t,m,e),!0;"invalid"==t?y.debug("JSON did not pass success test. A server-side error has most likely occurred",i):"error"==t&&e!==F&&(y.debug("XHR produced a server error",t,n),200!=e.status&&n!==F&&""!==n&&y.error(c.statusMessage+n,a.url),l.onError.call(v,o,m,e)),l.errorDuration&&"aborted"!==t&&(y.debug("Adding error state"),y.set.error(),y.should.removeError()&&setTimeout(y.remove.error,l.errorDuration)),y.debug("API Request failed",o,e),l.onFailure.call(v,i,m,e)}}},create:{request:function(){return P.Deferred().always(y.event.request.complete).done(y.event.request.done).fail(y.event.request.fail)},mockedXHR:function(){var e,t,n=l.mockResponse||l.response,i=l.mockResponseAsync||l.responseAsync,o=P.Deferred().always(y.event.xhr.complete).done(y.event.xhr.done).fail(y.event.xhr.fail);return n?(t=P.isFunction(n)?(y.debug("Using specified synchronous callback",n),n.call(v,r)):(y.debug("Using settings specified response",n),n),o.resolveWith(v,[t,!1,{responseText:t}])):P.isFunction(i)&&(e=function(e){y.debug("Async callback returned response",e),e?o.resolveWith(v,[e,!1,{responseText:e}]):o.rejectWith(v,[{responseText:e},!1,!1])},y.debug("Using specified async response callback",i),i.call(v,r,e)),o},xhr:function(){var e=P.ajax(a).always(y.event.xhr.always).done(y.event.xhr.done).fail(y.event.xhr.fail);return y.verbose("Created server request",e,a),e}},set:{error:function(){y.verbose("Adding error state to element",p),p.addClass(u.error)},loading:function(){y.verbose("Adding loading state to element",p),p.addClass(u.loading),s=(new Date).getTime()}},remove:{error:function(){y.verbose("Removing error state from element",p),p.removeClass(u.error)},loading:function(){y.verbose("Removing loading state from element",p),p.removeClass(u.loading)}},get:{responseFromXHR:function(e){return!!P.isPlainObject(e)&&(y.is.expectingJSON()?y.decode.json(e.responseText):e.responseText)},errorFromRequest:function(e,t,n){return P.isPlainObject(e)&&e.error!==F?e.error:l.error[t]!==F?l.error[t]:n},request:function(){return y.request||!1},xhr:function(){return y.xhr||!1},settings:function(){var e=l.beforeSend.call(v,l);return e&&(e.success!==F&&(y.debug("Legacy success callback detected",e),y.error(c.legacyParameters,e.success),e.onSuccess=e.success),e.failure!==F&&(y.debug("Legacy failure callback detected",e),y.error(c.legacyParameters,e.failure),e.onFailure=e.failure),e.complete!==F&&(y.debug("Legacy complete callback detected",e),y.error(c.legacyParameters,e.complete),e.onComplete=e.complete)),e===F&&y.error(c.noReturnedValue),!1===e?e:e!==F?P.extend(!0,{},e):P.extend(!0,{},l)},urlEncodedValue:function(e){var t=E.decodeURIComponent(e),n=E.encodeURIComponent(e);return t!==e?(y.debug("URL value is already encoded, avoiding double encoding",e),e):(y.verbose("Encoding value using encodeURIComponent",e,n),n)},defaultData:function(){var e={};return P.isWindow(h)||(y.is.input()?e.value=m.val():y.is.form()||(e.text=m.text())),e},event:function(){return P.isWindow(h)||"now"==l.on?(y.debug("API called without element, no events attached"),!1):"auto"==l.on?m.is("input")?h.oninput!==F?"input":h.onpropertychange!==F?"propertychange":"keyup":m.is("form")?"submit":"click":l.on},templatedURL:function(e){if(e=e||m.data(i.action)||l.action||!1,n=m.data(i.url)||l.url||!1)return y.debug("Using specified url",n),n;if(e){if(y.debug("Looking up url for action",e,l.api),l.api[e]===F&&!y.is.mocked())return void y.error(c.missingAction,l.action,l.api);n=l.api[e]}else y.is.form()&&(n=m.attr("action")||p.attr("action")||!1,y.debug("No url or action specified, defaulting to form action",n));return n}},abort:function(){var e=y.get.xhr();e&&"resolved"!==e.state()&&(y.debug("Cancelling API request"),e.abort())},reset:function(){y.remove.error(),y.remove.loading()},setting:function(e,t){if(y.debug("Changing setting",e,t),P.isPlainObject(e))P.extend(!0,l,e);else{if(t===F)return l[e];P.isPlainObject(l[e])?P.extend(!0,l[e],t):l[e]=t}},internal:function(e,t){if(P.isPlainObject(e))P.extend(!0,y,e);else{if(t===F)return y[e];y[e]=t}},debug:function(){!l.silent&&l.debug&&(l.performance?y.performance.log(arguments):(y.debug=Function.prototype.bind.call(console.info,console,l.name+":"),y.debug.apply(console,arguments)))},verbose:function(){!l.silent&&l.verbose&&l.debug&&(l.performance?y.performance.log(arguments):(y.verbose=Function.prototype.bind.call(console.info,console,l.name+":"),y.verbose.apply(console,arguments)))},error:function(){l.silent||(y.error=Function.prototype.bind.call(console.error,console,l.name+":"),y.error.apply(console,arguments))},performance:{log:function(e){var t,n;l.performance&&(n=(t=(new Date).getTime())-(S||t),S=t,k.push({Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(y.performance.timer),y.performance.timer=setTimeout(y.performance.display,500)},display:function(){var e=l.name+":",n=0;S=!1,clearTimeout(y.performance.timer),P.each(k,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",w&&(e+=" '"+w+"'"),(console.group!==F||console.table!==F)&&0<k.length&&(console.groupCollapsed(e),console.table?console.table(k):P.each(k,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),k=[]}},invoke:function(i,e,t){var o,a,n,r=b;return e=e||R,t=h||t,"string"==typeof i&&r!==F&&(i=i.split(/[\. ]/),o=i.length-1,P.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(P.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==F)return a=r[n],!1;if(!P.isPlainObject(r[t])||e==o)return r[t]!==F?a=r[t]:y.error(c.method,i),!1;r=r[t]}})),P.isFunction(a)?n=a.apply(t,e):a!==F&&(n=a),P.isArray(C)?C.push(n):C!==F?C=[C,n]:n!==F&&(C=n),a}};A?(b===F&&y.initialize(),y.invoke(T)):(b!==F&&b.invoke("destroy"),y.initialize())}),C!==F?C:this},P.api.settings={name:"API",namespace:"api",debug:!1,verbose:!1,performance:!0,api:{},cache:!0,interruptRequests:!0,on:"auto",stateContext:!1,loadingDuration:0,hideError:"auto",errorDuration:2e3,encodeParameters:!0,action:!1,url:!1,base:"",urlData:{},defaultData:!0,serializeForm:!1,throttle:0,throttleFirstRequest:!0,method:"get",data:{},dataType:"json",mockResponse:!1,mockResponseAsync:!1,response:!1,responseAsync:!1,beforeSend:function(e){return e},beforeXHR:function(e){},onRequest:function(e,t){},onResponse:!1,onSuccess:function(e,t){},onComplete:function(e,t){},onFailure:function(e,t){},onError:function(e,t){},onAbort:function(e,t){},successTest:!1,error:{beforeSend:"The before send function has aborted the request",error:"There was an error with your request",exitConditions:"API Request Aborted. Exit conditions met",JSONParse:"JSON could not be parsed during error handling",legacyParameters:"You are using legacy API success callback names",method:"The method you called is not defined",missingAction:"API action used but no url was defined",missingSerialize:"jquery-serialize-object is required to add form data to an existing data object",missingURL:"No URL specified for api event",noReturnedValue:"The beforeSend callback must return a settings object, beforeSend ignored.",noStorage:"Caching responses locally requires session storage",parseError:"There was an error parsing your request",requiredParameter:"Missing a required URL parameter: ",statusMessage:"Server gave an error: ",timeout:"Your request timed out"},regExp:{required:/\{\$*[A-z0-9]+\}/g,optional:/\{\/\$*[A-z0-9]+\}/g},className:{loading:"loading",error:"error"},selector:{disabled:".disabled",form:"form"},metadata:{action:"action",url:"url"}}}(jQuery,window,void document),function(P,E,F,O){"use strict";E=void 0!==E&&E.Math==Math?E:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),P.fn.visibility=function(b){var y,e=P(this),x=e.selector||"",C=(new Date).getTime(),w=[],S=b,k="string"==typeof S,T=[].slice.call(arguments,1),A=e.length,R=0;return e.each(function(){var e,t,n,o=P.isPlainObject(b)?P.extend(!0,{},P.fn.visibility.settings,b):P.extend({},P.fn.visibility.settings),i=o.className,a=o.namespace,s=o.error,r=o.metadata,l="."+a,c="module-"+a,u=P(E),d=P(this),f=P(o.context),m=(d.selector,d.data(c)),g=E.requestAnimationFrame||E.mozRequestAnimationFrame||E.webkitRequestAnimationFrame||E.msRequestAnimationFrame||function(e){setTimeout(e,0)},p=this,h=!1,v={initialize:function(){v.debug("Initializing",o),v.setup.cache(),v.should.trackChanges()&&("image"==o.type&&v.setup.image(),"fixed"==o.type&&v.setup.fixed(),o.observeChanges&&v.observeChanges(),v.bind.events()),v.save.position(),v.is.visible()||v.error(s.visible,d),o.initialCheck&&v.checkVisibility(),v.instantiate()},instantiate:function(){v.debug("Storing instance",v),d.data(c,v),m=v},destroy:function(){v.verbose("Destroying previous module"),n&&n.disconnect(),t&&t.disconnect(),u.off("load"+l,v.event.load).off("resize"+l,v.event.resize),f.off("scroll"+l,v.event.scroll).off("scrollchange"+l,v.event.scrollchange),"fixed"==o.type&&(v.resetFixed(),v.remove.placeholder()),d.off(l).removeData(c)},observeChanges:function(){"MutationObserver"in E&&(t=new MutationObserver(v.event.contextChanged),n=new MutationObserver(v.event.changed),t.observe(F,{childList:!0,subtree:!0}),n.observe(p,{childList:!0,subtree:!0}),v.debug("Setting up mutation observer",n))},bind:{events:function(){v.verbose("Binding visibility events to scroll and resize"),o.refreshOnLoad&&u.on("load"+l,v.event.load),u.on("resize"+l,v.event.resize),f.off("scroll"+l).on("scroll"+l,v.event.scroll).on("scrollchange"+l,v.event.scrollchange)}},event:{changed:function(e){v.verbose("DOM tree modified, updating visibility calculations"),v.timer=setTimeout(function(){v.verbose("DOM tree modified, updating sticky menu"),v.refresh()},100)},contextChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==p||0<P(e).find(p).length)&&(v.debug("Element removed from DOM, tearing down events"),v.destroy())})})},resize:function(){v.debug("Window resized"),o.refreshOnResize&&g(v.refresh)},load:function(){v.debug("Page finished loading"),g(v.refresh)},scroll:function(){o.throttle?(clearTimeout(v.timer),v.timer=setTimeout(function(){f.triggerHandler("scrollchange"+l,[f.scrollTop()])},o.throttle)):g(function(){f.triggerHandler("scrollchange"+l,[f.scrollTop()])})},scrollchange:function(e,t){v.checkVisibility(t)}},precache:function(e,t){e instanceof Array||(e=[e]);for(var n=e.length,i=0,o=[],a=F.createElement("img"),r=function(){++i>=e.length&&P.isFunction(t)&&t()};n--;)(a=F.createElement("img")).onload=r,a.onerror=r,a.src=e[n],o.push(a)},enableCallbacks:function(){v.debug("Allowing callbacks to occur"),h=!1},disableCallbacks:function(){v.debug("Disabling all callbacks temporarily"),h=!0},should:{trackChanges:function(){return k?(v.debug("One time query, no need to bind events"),!1):(v.debug("Callbacks being attached"),!0)}},setup:{cache:function(){v.cache={occurred:{},screen:{},element:{}}},image:function(){var e=d.data(r.src);e&&(v.verbose("Lazy loading image",e),o.once=!0,o.observeChanges=!1,o.onOnScreen=function(){v.debug("Image on screen",p),v.precache(e,function(){v.set.image(e,function(){++R==A&&o.onAllLoaded.call(this),o.onLoad.call(this)})})})},fixed:function(){v.debug("Setting up fixed"),o.once=!1,o.observeChanges=!1,o.initialCheck=!0,o.refreshOnLoad=!0,b.transition||(o.transition=!1),v.create.placeholder(),v.debug("Added placeholder",e),o.onTopPassed=function(){v.debug("Element passed, adding fixed position",d),v.show.placeholder(),v.set.fixed(),o.transition&&P.fn.transition!==O&&d.transition(o.transition,o.duration)},o.onTopPassedReverse=function(){v.debug("Element returned to position, removing fixed",d),v.hide.placeholder(),v.remove.fixed()}}},create:{placeholder:function(){v.verbose("Creating fixed position placeholder"),e=d.clone(!1).css("display","none").addClass(i.placeholder).insertAfter(d)}},show:{placeholder:function(){v.verbose("Showing placeholder"),e.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){v.verbose("Hiding placeholder"),e.css("display","none").css("visibility","")}},set:{fixed:function(){v.verbose("Setting element to fixed position"),d.addClass(i.fixed).css({position:"fixed",top:o.offset+"px",left:"auto",zIndex:o.zIndex}),o.onFixed.call(p)},image:function(e,t){if(d.attr("src",e),o.transition)if(P.fn.transition!==O){if(d.hasClass(i.visible))return void v.debug("Transition already occurred on this image, skipping animation");d.transition(o.transition,o.duration,t)}else d.fadeIn(o.duration,t);else d.show()}},is:{onScreen:function(){return v.get.elementCalculations().onScreen},offScreen:function(){return v.get.elementCalculations().offScreen},visible:function(){return!(!v.cache||!v.cache.element)&&!(0===v.cache.element.width&&0===v.cache.element.offset.top)},verticallyScrollableContext:function(){var e=f.get(0)!==E&&f.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=f.get(0)!==E&&f.css("overflow-x");return"auto"==e||"scroll"==e}},refresh:function(){v.debug("Refreshing constants (width/height)"),"fixed"==o.type&&v.resetFixed(),v.reset(),v.save.position(),o.checkOnRefresh&&v.checkVisibility(),o.onRefresh.call(p)},resetFixed:function(){v.remove.fixed(),v.remove.occurred()},reset:function(){v.verbose("Resetting all cached values"),P.isPlainObject(v.cache)&&(v.cache.screen={},v.cache.element={})},checkVisibility:function(e){v.verbose("Checking visibility of element",v.cache.element),!h&&v.is.visible()&&(v.save.scroll(e),v.save.calculations(),v.passed(),v.passingReverse(),v.topVisibleReverse(),v.bottomVisibleReverse(),v.topPassedReverse(),v.bottomPassedReverse(),v.onScreen(),v.offScreen(),v.passing(),v.topVisible(),v.bottomVisible(),v.topPassed(),v.bottomPassed(),o.onUpdate&&o.onUpdate.call(p,v.get.elementCalculations()))},passed:function(e,t){var n=v.get.elementCalculations();if(e&&t)o.onPassed[e]=t;else{if(e!==O)return v.get.pixelsPassed(e)>n.pixelsPassed;n.passing&&P.each(o.onPassed,function(e,t){n.bottomVisible||n.pixelsPassed>v.get.pixelsPassed(e)?v.execute(t,e):o.once||v.remove.occurred(t)})}},onScreen:function(e){var t=v.get.elementCalculations(),n=e||o.onOnScreen,i="onScreen";if(e&&(v.debug("Adding callback for onScreen",e),o.onOnScreen=e),t.onScreen?v.execute(n,i):o.once||v.remove.occurred(i),e!==O)return t.onOnScreen},offScreen:function(e){var t=v.get.elementCalculations(),n=e||o.onOffScreen,i="offScreen";if(e&&(v.debug("Adding callback for offScreen",e),o.onOffScreen=e),t.offScreen?v.execute(n,i):o.once||v.remove.occurred(i),e!==O)return t.onOffScreen},passing:function(e){var t=v.get.elementCalculations(),n=e||o.onPassing,i="passing";if(e&&(v.debug("Adding callback for passing",e),o.onPassing=e),t.passing?v.execute(n,i):o.once||v.remove.occurred(i),e!==O)return t.passing},topVisible:function(e){var t=v.get.elementCalculations(),n=e||o.onTopVisible,i="topVisible";if(e&&(v.debug("Adding callback for top visible",e),o.onTopVisible=e),t.topVisible?v.execute(n,i):o.once||v.remove.occurred(i),e===O)return t.topVisible},bottomVisible:function(e){var t=v.get.elementCalculations(),n=e||o.onBottomVisible,i="bottomVisible";if(e&&(v.debug("Adding callback for bottom visible",e),o.onBottomVisible=e),t.bottomVisible?v.execute(n,i):o.once||v.remove.occurred(i),e===O)return t.bottomVisible},topPassed:function(e){var t=v.get.elementCalculations(),n=e||o.onTopPassed,i="topPassed";if(e&&(v.debug("Adding callback for top passed",e),o.onTopPassed=e),t.topPassed?v.execute(n,i):o.once||v.remove.occurred(i),e===O)return t.topPassed},bottomPassed:function(e){var t=v.get.elementCalculations(),n=e||o.onBottomPassed,i="bottomPassed";if(e&&(v.debug("Adding callback for bottom passed",e),o.onBottomPassed=e),t.bottomPassed?v.execute(n,i):o.once||v.remove.occurred(i),e===O)return t.bottomPassed},passingReverse:function(e){var t=v.get.elementCalculations(),n=e||o.onPassingReverse,i="passingReverse";if(e&&(v.debug("Adding callback for passing reverse",e),o.onPassingReverse=e),t.passing?o.once||v.remove.occurred(i):v.get.occurred("passing")&&v.execute(n,i),e!==O)return!t.passing},topVisibleReverse:function(e){var t=v.get.elementCalculations(),n=e||o.onTopVisibleReverse,i="topVisibleReverse";if(e&&(v.debug("Adding callback for top visible reverse",e),o.onTopVisibleReverse=e),t.topVisible?o.once||v.remove.occurred(i):v.get.occurred("topVisible")&&v.execute(n,i),e===O)return!t.topVisible},bottomVisibleReverse:function(e){var t=v.get.elementCalculations(),n=e||o.onBottomVisibleReverse,i="bottomVisibleReverse";if(e&&(v.debug("Adding callback for bottom visible reverse",e),o.onBottomVisibleReverse=e),t.bottomVisible?o.once||v.remove.occurred(i):v.get.occurred("bottomVisible")&&v.execute(n,i),e===O)return!t.bottomVisible},topPassedReverse:function(e){var t=v.get.elementCalculations(),n=e||o.onTopPassedReverse,i="topPassedReverse";if(e&&(v.debug("Adding callback for top passed reverse",e),o.onTopPassedReverse=e),t.topPassed?o.once||v.remove.occurred(i):v.get.occurred("topPassed")&&v.execute(n,i),e===O)return!t.onTopPassed},bottomPassedReverse:function(e){var t=v.get.elementCalculations(),n=e||o.onBottomPassedReverse,i="bottomPassedReverse";if(e&&(v.debug("Adding callback for bottom passed reverse",e),o.onBottomPassedReverse=e),t.bottomPassed?o.once||v.remove.occurred(i):v.get.occurred("bottomPassed")&&v.execute(n,i),e===O)return!t.bottomPassed},execute:function(e,t){var n=v.get.elementCalculations(),i=v.get.screenCalculations();(e=e||!1)&&(o.continuous?(v.debug("Callback being called continuously",t,n),e.call(p,n,i)):v.get.occurred(t)||(v.debug("Conditions met",t,n),e.call(p,n,i))),v.save.occurred(t)},remove:{fixed:function(){v.debug("Removing fixed position"),d.removeClass(i.fixed).css({position:"",top:"",left:"",zIndex:""}),o.onUnfixed.call(p)},placeholder:function(){v.debug("Removing placeholder content"),e&&e.remove()},occurred:function(e){var t;e?(t=v.cache.occurred)[e]!==O&&!0===t[e]&&(v.debug("Callback can now be called again",e),v.cache.occurred[e]=!1):v.cache.occurred={}}},save:{calculations:function(){v.verbose("Saving all calculations necessary to determine positioning"),v.save.direction(),v.save.screenCalculations(),v.save.elementCalculations()},occurred:function(e){e&&(v.cache.occurred[e]!==O&&!0===v.cache.occurred[e]||(v.verbose("Saving callback occurred",e),v.cache.occurred[e]=!0))},scroll:function(e){e=e+o.offset||f.scrollTop()+o.offset,v.cache.scroll=e},direction:function(){var e=v.get.scroll(),t=v.get.lastScroll(),n=t<e&&t?"down":e<t&&t?"up":"static";return v.cache.direction=n,v.cache.direction},elementPosition:function(){var e=v.cache.element,t=v.get.screenSize();return v.verbose("Saving element position"),e.fits=e.height<t.height,e.offset=d.offset(),e.width=d.outerWidth(),e.height=d.outerHeight(),v.is.verticallyScrollableContext()&&(e.offset.top+=f.scrollTop()-f.offset().top),v.is.horizontallyScrollableContext()&&(e.offset.left+=f.scrollLeft-f.offset().left),v.cache.element=e},elementCalculations:function(){var e=v.get.screenCalculations(),t=v.get.elementPosition();return o.includeMargin?(t.margin={},t.margin.top=parseInt(d.css("margin-top"),10),t.margin.bottom=parseInt(d.css("margin-bottom"),10),t.top=t.offset.top-t.margin.top,t.bottom=t.offset.top+t.height+t.margin.bottom):(t.top=t.offset.top,t.bottom=t.offset.top+t.height),t.topPassed=e.top>=t.top,t.bottomPassed=e.top>=t.bottom,t.topVisible=e.bottom>=t.top&&!t.topPassed,t.bottomVisible=e.bottom>=t.bottom&&!t.bottomPassed,t.pixelsPassed=0,t.percentagePassed=0,t.onScreen=(t.topVisible||t.passing)&&!t.bottomPassed,t.passing=t.topPassed&&!t.bottomPassed,t.offScreen=!t.onScreen,t.passing&&(t.pixelsPassed=e.top-t.top,t.percentagePassed=(e.top-t.top)/t.height),v.cache.element=t,v.verbose("Updated element calculations",t),t},screenCalculations:function(){var e=v.get.scroll();return v.save.direction(),v.cache.screen.top=e,v.cache.screen.bottom=e+v.cache.screen.height,v.cache.screen},screenSize:function(){v.verbose("Saving window position"),v.cache.screen={height:f.height()}},position:function(){v.save.screenSize(),v.save.elementPosition()}},get:{pixelsPassed:function(e){var t=v.get.elementCalculations();return-1<e.search("%")?t.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return v.cache.occurred!==O&&v.cache.occurred[e]||!1},direction:function(){return v.cache.direction===O&&v.save.direction(),v.cache.direction},elementPosition:function(){return v.cache.element===O&&v.save.elementPosition(),v.cache.element},elementCalculations:function(){return v.cache.element===O&&v.save.elementCalculations(),v.cache.element},screenCalculations:function(){return v.cache.screen===O&&v.save.screenCalculations(),v.cache.screen},screenSize:function(){return v.cache.screen===O&&v.save.screenSize(),v.cache.screen},scroll:function(){return v.cache.scroll===O&&v.save.scroll(),v.cache.scroll},lastScroll:function(){return v.cache.screen===O?(v.debug("First scroll event, no last scroll could be found"),!1):v.cache.screen.top}},setting:function(e,t){if(P.isPlainObject(e))P.extend(!0,o,e);else{if(t===O)return o[e];o[e]=t}},internal:function(e,t){if(P.isPlainObject(e))P.extend(!0,v,e);else{if(t===O)return v[e];v[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,o.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),v.verbose.apply(console,arguments)))},error:function(){o.silent||(v.error=Function.prototype.bind.call(console.error,console,o.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(C||t),C=t,w.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:p,"Execution Time":n})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500)},display:function(){var e=o.name+":",n=0;C=!1,clearTimeout(v.performance.timer),P.each(w,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",x&&(e+=" '"+x+"'"),(console.group!==O||console.table!==O)&&0<w.length&&(console.groupCollapsed(e),console.table?console.table(w):P.each(w,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),w=[]}},invoke:function(i,e,t){var o,a,n,r=m;return e=e||T,t=p||t,"string"==typeof i&&r!==O&&(i=i.split(/[\. ]/),o=i.length-1,P.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(P.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==O)return a=r[n],!1;if(!P.isPlainObject(r[t])||e==o)return r[t]!==O?a=r[t]:v.error(s.method,i),!1;r=r[t]}})),P.isFunction(a)?n=a.apply(t,e):a!==O&&(n=a),P.isArray(y)?y.push(n):y!==O?y=[y,n]:n!==O&&(y=n),a}};k?(m===O&&v.initialize(),m.save.scroll(),m.save.calculations(),v.invoke(S)):(m!==O&&m.invoke("destroy"),v.initialize())}),y!==O?y:this},P.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:E,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function(){},onAllLoaded:function(){},onFixed:function(){},onUnfixed:function(){},onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"placeholder",visible:"visible"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);

/***/ }),

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

;// CONCATENATED MODULE: ./src/css/options.css
const options_namespaceObject = __webpack_require__.p + "options.css";
// EXTERNAL MODULE: ./node_modules/semantic-ui-css/semantic.min.js
var semantic_min = __webpack_require__(110);
// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(150);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);
// EXTERNAL MODULE: ./node_modules/serialize-error/index.js
var serialize_error = __webpack_require__(710);
;// CONCATENATED MODULE: ./src/js/util.js


function util_getExtensionVersion() {
  return browser_polyfill_default().runtime.getManifest().version;
}
async function storageGet(key) {
  return browser.storage.local.get(key);
}
async function util_storageSet(data) {
  return browser.storage.local.set(data);
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
  const strError = errorData instanceof Error ? serializeError(errorData) : errorData;
  return browser.runtime.sendMessage({
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
        version: util_getExtensionVersion(),
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
  if (!util_FEATURES.ACHIEVEMENTS) return true;
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
  if (!util_FEATURES.ACHIEVEMENTS_DISPLAY) return;
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
;// CONCATENATED MODULE: ./src/js/options.js
/* provided dependency */ var $ = __webpack_require__(755);






let onboarding = true;

// Getters
const getMoreLanguagesPreference = () => document.querySelector('input#moreLanguages').value.split(/,/).filter(lang => lang.length > 0);
const getLessLanguagesPreference = () => document.querySelector('input#lessLanguages').value.split(/,/).filter(lang => lang.length > 0);
localizeHtmlPage();
$('#selectMoreLanguagesForm .ui.dropdown').dropdown({
  maxSelections: 3,
  direction: 'upward',
  message: {
    addResult: getMessage('semantic_ui_add_term'),
    count: getMessage('semantic_ui_selected_count'),
    maxSelections: getMessage('semantic_ui_no_more_than_tree'),
    noResults: getMessage('semantic_ui_not_found')
  },
  onChange: function () {
    // document.getElementById('savePrefs').disabled = false;
  }
});
$('#selectLessLanguagesForm .ui.dropdown').dropdown({
  maxSelections: 3,
  direction: 'upward',
  message: {
    addResult: getMessage('semantic_ui_add_term'),
    count: getMessage('semantic_ui_selected_count'),
    maxSelections: getMessage('semantic_ui_no_more_than_tree'),
    noResults: getMessage('semantic_ui_not_found')
  },
  onChange: function () {
    //    document.getElementById('savePrefs').disabled = false;
  }
});
document.querySelectorAll('#userSpeed .ui.menu > .item').forEach(element => element.addEventListener('click', event => {
  storageGetSync('userSettings').then(data => {
    const userSettings = data.userSettings;
    userSettings.speed = element.getAttribute('data');
    storageSetSync({
      userSettings: userSettings
    });
  });
  if (element.getAttribute('data') === 'fast') {
    var clicks = element.getAttribute('clicks') || 0;
    if (clicks > 3) {
      clicks = 0;
      element.style.display = 'none';
      element = element.parentElement.querySelector('.item[data="immediately"]');
      element.style.display = 'flex';
    }
    element.style.borderWidth = clicks + 'px';
    clicks++;
    element.setAttribute('clicks', clicks);
  } else {
    const fast = element.parentElement.querySelector('.ui.menu > .item[data="fast"]');
    fast.setAttribute('clicks', 0);
    fast.style.borderWidth = clicks + 'px';
  }
  element.parentElement.querySelectorAll('.ui.menu > .item').forEach(item => item.classList.remove('active'));
  element.classList.add('active');
}));

////////////////////////////
document.body.style.minWidth = '620px';
//////////

storageGetSync('userSettings').then(settings => {
  let userSettings = settings.userSettings || {};
  if (!userSettings.moreLanguages) {
    // This is user's first pass through the config.
    // Reveal settings step by step
    document.querySelectorAll('#saveMoreLangPrefs, #saveLessLangPrefs, #saveUserSpeed').forEach(e => e.classList.remove('hidden'));
    return;
  }

  // User been here before. Load the config and let them tweak it
  onboarding = false;
  $('#selectMoreLanguagesForm .ui.dropdown').dropdown('set exactly', userSettings.moreLanguages);
  $('#wantLessLanguages .ui.dropdown').dropdown('set exactly', userSettings.lessLanguages);
  document.querySelectorAll('#grantRightsToCollectStats, #wantLessLanguages, #userSpeed, #saveAllPrefs').forEach(e => e.classList.remove('hidden'));
  if (userSettings.is_18) {
    document.querySelector('#permissions_form input[name="user_is_18_plus"]').checked = true;
  }
  if (userSettings.is_18 && userSettings.collectStats) {
    document.querySelector('#permissions_form input[name="collect_stats"]').checked = true;
  }

  // Set speed menu to the preconfigured value
  const speed = userSettings.speed || 'gentle';
  document.querySelectorAll('#userSpeed .ui.menu > .item').forEach(element => element.classList.remove('active'));
  document.querySelector('#userSpeed .ui.menu > .item[data="' + speed + '"]').classList.add('active');
  if (speed === 'immediately') {
    document.querySelector('#userSpeed .ui.menu > .item[data="fast"]').style.display = 'none';
    document.querySelector('#userSpeed .ui.menu > .item[data="immediately"]').style.display = 'flex';
  }
  updatePermissionsState();
});

// Bind events
document.querySelector('#permissions_form').addEventListener('change', updatePermissionsState);
document.getElementById('selectMoreLanguagesForm').addEventListener('submit', saveMoreLangPrefs);
document.getElementById('selectLessLanguagesForm').addEventListener('submit', saveLessLangPrefs);
document.getElementById('selectUserSpeed').addEventListener('submit', saveUserSpeed);
document.getElementById('permissions_form').addEventListener('submit', saveAllLangPrefs);
document.getElementById('learnMore').addEventListener('click', function () {
  window.open('http://hmara.info/', '_blank');
});

// A little extra in development,
// so engineers don't have to reinstall extension every time

if (false) {}

// Functions

function updatePermissionsState() {
  let is_18 = document.querySelector('#permissions_form input[name="user_is_18_plus"]').checked;
  document.querySelector('#permissions_form input[name="collect_stats"]').disabled = is_18 ? false : true;
}
function saveMoreLangPrefs(e) {
  e.preventDefault();
  const moreLanguagesPreference = getMoreLanguagesPreference();
  saveLangChoice().then(() => {
    document.getElementById('wantLessLanguages').classList.remove('hidden');
    document.getElementById('saveMoreLangPrefs').classList.add('hidden');
    document.getElementById('wantLessLanguages').scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  });
}
function saveLessLangPrefs(e) {
  e.preventDefault();
  saveLangChoice().then(() => {
    document.getElementById('saveLessLangPrefs').classList.add('hidden');
    document.getElementById('userSpeed').classList.remove('hidden');
    document.getElementById('saveUserSpeed').scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  });
}
function saveUserSpeed(e) {
  e.preventDefault();
  saveLangChoice().then(() => {
    document.getElementById('saveUserSpeed').classList.add('hidden');
    document.getElementById('grantRightsToCollectStats').classList.remove('hidden');
    document.getElementById('saveAllPrefs').classList.remove('hidden');
    document.getElementById('saveAllPrefs').scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  });
}
function saveAllLangPrefs(e) {
  e.preventDefault();
  saveLangChoice().then(() => {
    // First successful save. Congratulate the user
    if (onboarding) {
      const thankYouElement = document.getElementById('onboardingPermissionFormSuccess');
      thankYouElement.classList.remove('hidden');
      thankYouElement.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
      });
    } else {
      const btn = document.getElementById('saveAllPrefs');
      btn.value = 'Зміни збережено 👍';
      setTimeout(() => {
        btn.value = 'Зберегти';
      }, 2500);
    }
  });
}
async function saveLangChoice(e) {
  const moreLanguagesPreference = getMoreLanguagesPreference();
  const lessLanguagesPreference = getLessLanguagesPreference();
  const is_18 = document.querySelector('#permissions_form input[name="user_is_18_plus"]').checked ? true : false;
  const collect_stats = is_18 && document.querySelector('#permissions_form input[name="collect_stats"]').checked ? true : false;
  if (!moreLanguagesPreference.length) {
    alert(getMessage('no_language_selected_err'));
    return Promise.reject();
  }
  return storageGetSync('userSettings').then(data => {
    const firstConfigSave = data.userSettings ? false : true;
    let isFullSave = false;
    try {
      isFullSave = document.querySelector('#saveUserSpeed').classList.contains('hidden');
    } catch (e) {
      networking_reportError('Could not define isFullSave', e);
    }
    const userSettings = data.userSettings || {};
    userSettings.moreLanguages = moreLanguagesPreference;
    userSettings.lessLanguages = lessLanguagesPreference;
    userSettings.is_18 = is_18;
    userSettings.collectStats = collect_stats;
    storageSetSync({
      userSettings: userSettings
    }).then(() => {
      // The user completed language setup first time
      if (isFullSave) {
        // Always track a full save as an achievement,
        // but only display the badge during the onboarding
        const silent = !onboarding;
        trackAchievement('lng_choice', {
          silent
        });
      }
      sendEvent('savedLanguageChoice', firstConfigSave ? {
        firstSave: true
      } : {});
    });
  }).catch(e => {});
}
})();

/******/ })()
;
//# sourceMappingURL=options.bundle.js.map