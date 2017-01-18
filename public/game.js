(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _boot = require('./states/boot');

var _boot2 = _interopRequireDefault(_boot);

var _preload = require('./states/preload');

var _preload2 = _interopRequireDefault(_preload);

var _intro = require('./states/intro');

var _intro2 = _interopRequireDefault(_intro);

var _mainmenu = require('./states/mainmenu');

var _mainmenu2 = _interopRequireDefault(_mainmenu);

var _level = require('./states/level');

var _level2 = _interopRequireDefault(_level);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new Phaser.Game(480, 720, Phaser.AUTO); /**
                                                    * The default entry point
                                                    */

game.state.add('Boot', _boot2.default, true);
game.state.add('Preload', _preload2.default);
game.state.add('Intro', _intro2.default);
game.state.add('MainMenu', _mainmenu2.default);
game.state.add('Level', _level2.default);

},{"./states/boot":2,"./states/intro":3,"./states/level":4,"./states/mainmenu":5,"./states/preload":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author James Florentino
 *
 t* This is where the initial game setting is set. Use the `assets-config` path
 * to define the assets
 * @class Boot
 * @extends Phaser.State
 */
var Boot = function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
  }

  _createClass(Boot, [{
    key: 'init',
    value: function init() {
      this.input.maxPointers = 1;
      //this.stage.disableVisibilityChange = true

      if (this.game.device.desktop) {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setMinMax(480, 260, 1024, 768);
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
      } else {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setMinMax(480, 260, 1024, 768);
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(true, false);
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.load.json('assets-config', './assets.json');
    }
  }, {
    key: 'create',
    value: function create() {
      this.state.start('Preload');
    }
  }]);

  return Boot;
}(Phaser.State);

exports.default = Boot;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author James Florentino
 * Intro animation for the game. Show the studio name, sponsors etc.
 * @class Intro
 * @extends Phaser.State
 */
var Intro = function (_Phaser$State) {
  _inherits(Intro, _Phaser$State);

  function Intro() {
    _classCallCheck(this, Intro);

    return _possibleConstructorReturn(this, (Intro.__proto__ || Object.getPrototypeOf(Intro)).apply(this, arguments));
  }

  _createClass(Intro, [{
    key: 'create',
    value: function create(game) {
      var logo = this.add.sprite(game.width / 2, game.height / 2, 'studio_logo');
      logo.anchor.set(0.5);
      logo.alpha = 0;
      game.add.tween(logo).to({ alpha: 1 }, 500, 'Linear').to({ alpha: 0 }, 500, 'Linear', false, 1000).start().onComplete.addOnce(this.loadMainMenu, this);
    }
  }, {
    key: 'loadMainMenu',
    value: function loadMainMenu() {
      this.state.start('MainMenu');
    }
  }]);

  return Intro;
}(Phaser.State);

exports.default = Intro;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Level = function (_Phaser$State) {
  _inherits(Level, _Phaser$State);

  function Level() {
    _classCallCheck(this, Level);

    return _possibleConstructorReturn(this, (Level.__proto__ || Object.getPrototypeOf(Level)).apply(this, arguments));
  }

  _createClass(Level, [{
    key: 'create',
    value: function create() {
      console.debug('level started');
    }
  }]);

  return Level;
}(Phaser.State);

exports.default = Level;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Main menu
 * @class MainMenu
 * @extends Phaser.State
 */
var MainMenu = function (_Phaser$State) {
  _inherits(MainMenu, _Phaser$State);

  function MainMenu() {
    _classCallCheck(this, MainMenu);

    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
  }

  _createClass(MainMenu, [{
    key: 'preload',
    value: function preload() {
      console.debug('preloading main menu');
    }
  }, {
    key: 'create',
    value: function create(game) {
      var title = this.add.sprite(game.width / 2, game.height / 2 - 50, 'game_title');
      title.anchor.set(0.5);

      var button = this.add.sprite(game.width / 2, game.height / 2 + 50, 'mainmenu_start_btn');
      button.inputEnabled = true;
      button.anchor.set(0.5);
      button.events.onInputDown.addOnce(this.startLevel, this);
      game.add.tween(title).from({ y: title.y - 100, alpha: 0 }, 750, Phaser.Easing.Bounce.Out, true);
      game.add.tween(button).from({ y: button.y + 100, alpha: 0 }, 750, Phaser.Easing.Bounce.Out, true, 100);
      console.debug('main menu loaded');
    }
  }, {
    key: 'startLevel',
    value: function startLevel() {
      this.state.start('Level');
    }
  }]);

  return MainMenu;
}(Phaser.State);

exports.default = MainMenu;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Preloads all assets here
 * @class Preload
 * @extends Phaser.State
 */

var Preload = function (_Phaser$State) {
  _inherits(Preload, _Phaser$State);

  function Preload() {
    _classCallCheck(this, Preload);

    return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
  }

  _createClass(Preload, [{
    key: 'preload',
    value: function preload(game) {
      var config = game.cache.getJSON('assets-config');
      if ('object' === (typeof config === 'undefined' ? 'undefined' : _typeof(config))) {
        if (config.images instanceof Array) {
          this.loadImages(config.images);
        }
      }
    }
  }, {
    key: 'loadImages',
    value: function loadImages(images) {
      var _this2 = this;

      images.forEach(function (r) {
        return _this2.load.image(r[0], r[1]);
      });
    }
  }, {
    key: 'create',
    value: function create(game) {
      game.state.start('Intro');
    }
  }]);

  return Preload;
}(Phaser.State);

exports.default = Preload;

},{}]},{},[1])


//# sourceMappingURL=game.js.map
