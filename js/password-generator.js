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

    var generateButtonClicked = function () {
        console.log('clicked!');
    };

    var getGenerateButtonElement = function () {
        var generateButtonSelector = this.options.generateButtonSelector;
        if (generateButtonSelector === null) {
            throw new Error('Не задан параметр "generateButtonSelector" - кнопка для обновления списка паролей');
        }
        var generateButton = getElementBySelector.call(this, generateButtonSelector);
        return generateButton;
    };

    var attachEventListeners = function () {
        var button = getGenerateButtonElement.call(this);
        button.addEventListener('click', generateButtonClicked);
    };

    var detachEventListeners = function () {
        var button = getGenerateButtonElement.call(this);
        button.removeEventListener('click', generateButtonClicked);
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
    
    var getPasswordListElement = function () {
        var passwordListSelector = this.options.passwordListSelector;
        if (passwordListSelector === null) {
            throw new Error('Не задан параметр "passwordListSelector" - контейнер списка паролей');
        }
        var passwordList = getElementBySelector.call(this, passwordListSelector);
        return passwordList;
    };

    var fillPasswordList = function () {
        var passwordList = getPasswordListElement.call(this);
        clearContent.call(this, passwordList);
        var count = this.options.count;
        for (var i = 0; i < count; i++) {
            var password = generatePassword.call(this);
            var listItem = createListItem.call(this, password);
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
        },
        destroy: function () {
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
//     passwordListSelector: '.password-list',
//     generateButtonSelector: '.generate-password-button'
// })

//// access public plugin methods
// pluginInstance.generate();