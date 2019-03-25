'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ratesWsConnectionProcessor = exports.httpServerListenLog = exports.ratesWsMessageProcessor = exports.mainWsRequestProcessor = exports.publishRatesData = exports.updateRatesData = exports.initializeRatesData = exports.isFirstLoad = exports.commands = exports.ratesHistory = exports.connections = exports.webSocketsServerPort = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _websocket = require('websocket');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webSocketsServerPort = exports.webSocketsServerPort = 1010;
var connections = exports.connections = [];
var ratesHistory = exports.ratesHistory = {};
var commands = exports.commands = {
  RATES_HISTORY: 'rates_history',
  RATES_UPDATE: 'rates_update'
};
var isFirstLoad = exports.isFirstLoad = true;
var initializeRatesData = exports.initializeRatesData = function initializeRatesData(rates) {
  if (!rates || !Object.keys(rates).length) {
    return false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = rates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rate = _step.value;

      ratesHistory[rate.Name] = {
        ask: rate.Ask,
        bid: rate.Bid,
        symbol: rate.Name,
        name: rate.FullName,
        market: rate.Market,
        timeStamp: rate.Timestamp
      };
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return _extends({}, ratesHistory);
};

var updateRatesData = exports.updateRatesData = function updateRatesData(rates) {
  if (!rates || !Object.keys(rates).length) {
    return false;
  }

  var dataToPublish = {};

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = rates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var rate = _step2.value;

      var dataToUpdate = {
        ask: rate.Ask,
        bid: rate.Bid
      };
      ratesHistory[rate.Name] = _extends({}, ratesHistory[rate.Name], dataToUpdate);
      dataToPublish[rate.Name] = _extends({}, dataToUpdate);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return dataToPublish;
};

var publishRatesData = exports.publishRatesData = function publishRatesData(publishData, isUpdate) {
  var cmd = isUpdate ? commands.RATES_UPDATE : commands.RATES_HISTORY;

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = connections[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var connection = _step3.value;

      connection.sendUTF(JSON.stringify({ cmd: cmd, data: publishData }));
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
};

var mainWsRequestProcessor = exports.mainWsRequestProcessor = function mainWsRequestProcessor(request) {
  console.log(new Date() + '\nConnection from origin ' + request.origin + '.');
  var connection = request.accept(null, request.origin);
  var connectionIndex = connections.push(connection) - 1;
  console.log(new Date() + ' Connection accepted.');

  if (Object.keys(ratesHistory).length > 0) {
    connection.sendUTF(JSON.stringify({ cmd: commands.RATES_HISTORY, data: ratesHistory }));
  }

  connection.on('close', function (connection) {
    connections.splice(connectionIndex, 1);
    console.log(new Date() + '\nPeer ' + connection.remoteAddress + ' disconnected.');
  });
};

var ratesWsMessageProcessor = exports.ratesWsMessageProcessor = function ratesWsMessageProcessor(message) {
  if (message.type === 'utf8') {
    console.log('Received: ' + message.utf8Data);
    var response = JSON.parse(message.utf8Data);

    if (isFirstLoad) {
      exports.isFirstLoad = isFirstLoad = !isFirstLoad;
      var publishData = initializeRatesData(response.args);
      publishData && publishRatesData(publishData, false);
    } else {
      var _publishData = updateRatesData(response.args);
      _publishData && publishRatesData(_publishData, true);
    }
  }
};

var httpServerListenLog = exports.httpServerListenLog = function httpServerListenLog() {
  console.log(new Date() + '\nServer is listening on port ' + webSocketsServerPort);
};

var ratesWsConnectionProcessor = exports.ratesWsConnectionProcessor = function ratesWsConnectionProcessor(connection) {
  return connection.on('message', ratesWsMessageProcessor);
};

var httpServer = _http2.default.createServer(function (req, res) {});
httpServer.listen(webSocketsServerPort, httpServerListenLog);

var wsServer = new _websocket.server({ httpServer: httpServer });

wsServer.on('request', mainWsRequestProcessor);

var ratesWsConnection = new _websocket.client();

ratesWsConnection.on('connect', ratesWsConnectionProcessor);

ratesWsConnection.connect('ws://wgt-srv0.finversia.ru/wss/Server.ashx?subscriber=true');