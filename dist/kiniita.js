//=============================================================================
// kiniita.js
//=============================================================================
//=============================================================================
// Build Date: 2020-07-04 16:18:43
//=============================================================================

//=============================================================================
//  Contact Information
//=============================================================================
/*
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Old Website Link: http://endlessillusoft.com/
* New Website Link: https://kinocreates.io/ 
* Twitter Link: https://twitter.com/EISKino
* Patreon Link: https://www.patreon.com/EISKino
*
* Hope this plugin helps, and enjoy!
* --Kino
*/

// Generated by Haxe 4.2.0-rc.1+1c018c009

/** JS Lib */
const a = 3;
;(function ($global) { "use strict";
class Main {
	static main() {
		// Build Date: 2020-07-04 16:18:42 
		
//=============================================================================
// Kiniitta
//=============================================================================
      
		/*:
     @author Kino 
    @plugindesc This plugin allows you to use Haxe in your RPGMakerMV code.
    @param haxeVersion
   */
		// This is a test of the watcher 
		let sceneTitleStart = Scene_Base.prototype.start;
		Scene_Base.prototype.start = function() {
			let self = this;
			sceneTitleStart.call(self);
			$gameVariables.setValue(1,3);
			Window.Haxe = "Version 4.2.0";
			console.log("src/Main.hx:26:","Running Console Log From Haxe Added haxe Version");
		};
	}
}
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
var $gameVariables = null;
class utils_Fn {
	static proto(obj) {
		return obj.prototype;
	}
}
{
}
Main.main();
})({});

//# sourceMappingURL=kiniita.js.map