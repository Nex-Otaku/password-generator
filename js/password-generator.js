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
        count: 10,
        lengthInCharacters: 20,
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

    var attachEventListeners = function () {
        // Helper function, not directly acessible by instance object
    };

    var detachEventListeners = function () {
        // Helper function, not directly acessible by instance object
    };

    var generatePassword = function () {
        // STUB
        return 'ABCDEFG';
    };

    var createListItem = function (text) {
        var listItem = document.createElement('div');
        listItem.textContent = text;
        return listItem;
    };

    var getElementBySelector = function (selector) {
        var element = document.querySelector(selector);
        if (element === null) {
            throw new Error('Не найден элемент по селектору ' + selector);
        }
        return element;
    };

    var clearContent = function (element) {
        element.innerHtml = '';
    };

    var fillPasswordList = function () {
        var passwordListSelector = this.options.passwordListSelector;
        if (passwordListSelector === null) {
            console.error('Не задан параметр "passwordListSelector" - контейнер списка паролей');
            return;
        }
        var passwordList = getElementBySelector(passwordListSelector);
        clearContent(passwordList);
        var count = this.options.count;
        for (var i = 0; i < count; i++) {
            var password = generatePassword();
            var listItem = createListItem(password);
            passwordList.appendChild(listItem);
        }
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
            attachEventListeners.call(this);
            // // find all matching DOM elements.
            // // makes `.selectors` object available to instance.
            // this.selectors = document.querySelectorAll(this.options.selector)
            // for (var i = 0; i < this.selectors.length; i++) {
            //     var selector = this.selectors[i]
            //     // Do something w/ each matched selector node.
            //     selector.classList.add(this.options.classToAdd)
            //     // do something
            // }
        },
        destroy: function () {
            // Remove any event listeners and undo any "init" actions here...
            detachEventListeners.call(this);
        },
        generate: function () {
            fillPasswordList.call(this);
        },
    };
    return Plugin;
}));


/**************
 EXAMPLE:
 **************/

//// create new Plugin instance
// var pluginInstance = new PasswordGenerator({
//     selector: ".box",
//     someDefaultOption: 'foo2',
//     classToAdd: "custom-new-class-name",
// })

//// access public plugin methods
// pluginInstance.generate();