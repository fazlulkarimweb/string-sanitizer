"use strict";

exports.sanitize = function(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
};

exports.sanitize.keepUnicode = function(str) {
  return str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
};

exports.sanitize.keepSpace = function(str) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
  return str2.replace(/ /g, " ");
};

exports.sanitize.addFullstop = function(str) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
  return str2.replace(/ /g, ".");
};

exports.sanitize.addUnderscore = function(str) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
  return str2.replace(/ /g, "_");
};

exports.sanitize.addDash = function(str) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
  return str2.replace(/ /g, "-");
};

exports.sanitize.removeNumber = function(str) {
  return str.replace(/[^a-zA-Z]/g, "");
};

exports.sanitize.keepNumber = function(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
};

// Add Fullstop, Underscore & Dash without sanitizing

exports.addFullstop = function(str) {
  return str.replace(/ /g, ".");
};
exports.addUnderscore = function(str) {
  return str.replace(/ /g, "_");
};

exports.addDash = function(str) {
  return str.replace(/ /g, "-");
};

// Remove Space without sanitizing
exports.removeSpace = function(str) {
  return str.replace(/\s+/g, "");
};
