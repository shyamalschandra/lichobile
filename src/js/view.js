'use strict';

var m    = require('mithril');
var round = require('./round');

function renderHeader(){
  return m('header', [
    m('span.lichess', ["."]),
    m('h1.title', [ "lichess.org" ])
  ]);
}

function renderContent(ctrl){
  return m('div.content', [
    round.view(ctrl.round)
  ]);
}

function renderFooter(){
  return m('footer', [
    m('span.lichess', ["h"]),
    m('span.lichess', ["G"])
  ]);
}


module.exports = function(ctrl) {
  return m('div', [
    renderHeader(),
    renderContent(ctrl)
  ]);
};
