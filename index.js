"use strict";

exports.sanitize = function(str, with) {
  return str.replace(/[^a-zA-Z0-9]/g, with || "");
};

exports.sanitize.keepUnicode = function(str, with) {
  return str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, with || "");
};

exports.sanitize.keepSpace = function(str, with) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, with || "");
  return str2.replace(/ /g, " ");
};

exports.sanitize.addFullstop = function(str, with) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, with || "");
  return str2.replace(/ /g, ".");
};

exports.sanitize.addUnderscore = function(str, with) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, with || "");
  return str2.replace(/ /g, "_");
};

exports.sanitize.addDash = function(str, with) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, with || "");
  return str2.replace(/ /g, "-");
};

exports.sanitize.removeNumber = function(str, with) {
  return str.replace(/[^a-zA-Z]/g, with || "");
};

exports.sanitize.keepNumber = function(str, with) {
  return str.replace(/[^a-zA-Z0-9]/g, with || "");
};

// Add Fullstop, Underscore & Dash without sanitizing

exports.addFullstop = function(str, with) {
  return str.replace(/ /g, with || ".");
};
exports.addUnderscore = function(str, with) {
  return str.replace(/ /g, with || "_");
};

exports.addDash = function(str, with) {
  return str.replace(/ /g, with || "-");
};

// Remove Space without sanitizing
exports.removeSpace = function(str, with) {
  return str.replace(/\s+/g, with || "");
};
