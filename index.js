'use strict';

exports.sanitize = function (str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
};

exports.sanitize.keepUnicode = function (str) {
  return str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
};

exports.sanitize.keepSpace = function (str) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  return str2.replace(/ /g, ' ');
};

exports.sanitize.addFullstop = function (str) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  return str2.replace(/ /g, '.');
};

exports.sanitize.addUnderscore = function (str) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  return str2.replace(/ /g, '_');
};

exports.sanitize.addDash = function (str) {
  var str2 = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  return str2.replace(/ /g, '-');
};

exports.sanitize.removeNumber = function (str) {
  return str.replace(/[^a-zA-Z]/g, '');
};

exports.sanitize.removeText = function (str) {
  return str.replace(/[^0-9]/g, '');
};

exports.sanitize.keepNumber = function (str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
};

exports.addFullstop = function (str) {
  return str.replace(/ /g, '.');
};
exports.addUnderscore = function (str) {
  return str.replace(/ /g, '_');
};

exports.addDash = function (str) {
  return str.replace(/ /g, '-');
};

// Remove Space without sanitizing
exports.removeSpace = function (str) {
  return str.replace(/\s+/g, '');
};

exports.removeUnderscore = function (str) {
  return str.replace(/_+/g, '');
};

exports.validate = function (str) {
  console.log(
    `Use validate.isEmail or validate.isUsername for further validation`
  );
  return 'Use validate.isEmail or validate.isUsername for further validation';
};

//Username & Email
exports.validate.isEmail = function (str) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(str)) {
    return str;
  } else {
    return false;
  }
};

exports.validate.isUsername = function (str) {
  const regex = /^[a-z][a-z]+\d*$|^[a-z]\d{2,}$/i;
  if (regex.test(str)) {
    return str.toLowerCase();
  } else {
    return false;
  }
};

// To check a password between 6 to 15 characters which contain at least one numeric digit and a special character
exports.validate.isPassword6to15 = function (str) {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
  if (regex.test(str)) {
    return str;
  } else {
    return false;
  }
};

// 7 to 20 characters which contain only characters, numeric digits, underscore and first character must be a letter
exports.validate.isPassword7to20 = function (str) {
  const regex = /^[A-Za-z]\w{7,20}$/;
  if (regex.test(str)) {
    return str;
  } else {
    return false;
  }
};

// 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
exports.validate.isPassword6to20 = function (str) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (regex.test(str)) {
    return str;
  } else {
    return false;
  }
};

// To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
exports.validate.isPassword8to15 = function (str) {
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (regex.test(str)) {
    return str;
  } else {
    return false;
  }
};
