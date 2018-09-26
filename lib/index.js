'use strict';
const profanityList = require('./profanity.js');
function list() {
  return profanityList.profanity();
}

exports.list = list;
