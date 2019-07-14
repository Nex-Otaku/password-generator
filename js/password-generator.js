(function (root, factory) {
    var pluginName = 'PasswordGenerator';

    if (typeof define === 'function' && define.amd) {
        define([], factory(pluginName));
    } else if (typeof exports === 'object') {
        module.exports = factory(pluginName);
    } else {
        root[pluginName] = factory(pluginName);
    }
}(this, function (pluginName) {

    'use strict';

    var defaults = {
        passwordListSelector: null,
        generateButtonSelector: null,
    };

    /**
     * Merge defaults with user options
     * @param {Object} target Default settings
     * @param {Object} options User options
     */
    var extend = function (target, options) {
        var prop, extended = {};
        for (prop in target) {
            if (Object.prototype.hasOwnProperty.call(target, prop)) {
                extended[prop] = target[prop];
            }
        }
        for (prop in options) {
            if (Object.prototype.hasOwnProperty.call(options, prop)) {
                extended[prop] = options[prop];
            }
        }
        return extended;
    };

    /**
     * Helper Functions
     @private
     */
    var privateFunction = function () {
        // Helper function, not directly acessible by instance object
    };

    var attachEventListeners = function () {
        // Helper function, not directly acessible by instance object
    };

    var detachEventListeners = function () {
        // Helper function, not directly acessible by instance object
    };

    var fillPasswordList = function () {
        if (this.options.passwordListSelector === null) {
            return;
        }
        console.log(options);
    };

    /**
     * Plugin Object
     * @param {Object} options User options
     * @constructor
     */
    function Plugin(options) {
        this.options = extend(defaults, options);
        this.init(); // Initialization Code Here
    }

    /**
     * Plugin prototype
     * @public
     * @constructor
     */
    Plugin.prototype = {
        init: function () {
            attachEventListeners();
            // find all matching DOM elements.
            // makes `.selectors` object available to instance.
            this.selectors = document.querySelectorAll(this.options.selector)
            for (var i = 0; i < this.selectors.length; i++) {
                var selector = this.selectors[i]
                // Do something w/ each matched selector node.
                selector.classList.add(this.options.classToAdd)
                // do something
            }
        }, // #! init
        destroy: function () {
            // Remove any event listeners and undo any "init" actions here...
            detachEventListeners();
        },
        // doSomething: function (someData) {
        //     console.log(someData)
        // }, // #! doSomething
        generate: function () {
            fillPasswordList();
        } // #! doSomething
    };
    return Plugin;
}));


/**************
 EXAMPLE:
 **************/

//// create new Plugin instance
// var pluginInstance = new PluginNameHere({
//     selector: ".box",
//     someDefaultOption: 'foo2',
//     classToAdd: "custom-new-class-name",
// })

//// access public plugin methods
// pluginInstance.doSomething("Doing Something Else")