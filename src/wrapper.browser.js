// This file is the concatenation of many js files.
// See http://github.com/jimhigson/oboe.js for the raw source

// having a local undefined, window, Object etc allows slightly better minification:                    
(function  (Object, Array, Error, JSON, undefined ) {
   var window = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

   // ---contents--- //

   if ( typeof define === "function" && define.amd ) {
      define( "oboe", [], function () { return oboe; } );
   } else {
      window.oboe = oboe;
   }
})(Object, Array, Error, JSON);
