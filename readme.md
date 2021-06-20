# String Sanitizer 

An intuitive & tiny string sanitizer to remove any special characters or convert strings to create filename or url. Validate email, password & username too. 🎉🎉


> **✅ Update:** 2.0.0 is launched with major updates. No breaking changes. Email, password and username validation is added. Everything is tested.

## Use Case

Converting or sanitizing string is easier than ever with the help of this package. You can use this utility package to sanitize even foreign languages other than English. Under the hood, regex is heavily used in this library. You can convert your string to url or filename frindly string. Besides you can validate email, passwords and username too.
🎉🎉

## Installation

You can download this package from here - [string-sanitizer npm](https://www.npmjs.com/package/string-sanitizer)

```bash
npm i string-sanitizer
```

Yarn installation

```bash
yarn add string-sanitizer
```

## Usage 👀👀👀

Just pass your string as the argument. The method will return a sanitized or converted string instantly.

```js
var string = require("string-sanitizer");
let someString = "@abcde$f$gh";
string.sanitize(someString); // abcdefgh
```

## Sanitization use cases

```js
var string = require("string-sanitizer");

string.sanitize("a.bc@d efg#h"); // abcdefgh
string.sanitize.keepSpace("a.bc@d efg#h"); // abcd efgh
string.sanitize.keepUnicode("a.bc@d efg#hক"); // abcd efghক
string.sanitize.addFullstop("a.bc@d efg#h"); // abcd.efgh
string.sanitize.addUnderscore("a.bc@d efg#h"); // abcd_efgh
string.sanitize.addDash("a.bc@d efg#h"); // abcd-efgh
string.sanitize.removeNumber("@abcd efgh123"); // abcdefgh
string.sanitize.keepNumber("@abcd efgh123"); // abcdefgh123
string.addFullstop("abcd efgh"); // abcd.efgh
string.addUnderscore("@abcd efgh"); // @abcd_efgh
string.addDash("@abcd efgh"); // @abcd-efgh
string.removeSpace("@abcd efgh"); // @abcdefgh
string.removeUnderscore("@ab__cd ef_gh_"); // @abcd efgh
```

**✅ Screenshot**

![string-sanitizer](https://i.ibb.co/y44bXBb/Screenshot-275.png)

# Validation 👀👀👀
**Added in version 2.0.0**

Most of the time we have to validate email, password and username in our codebase. So string sanitizer starts offering validation along with sanitization. You pass your user generated email, username or password in this method. If it passes the filter, it will return the string as it is. If it doesn't pass the filter, it will return false.


## Email Validation ✅

```js
var string = require("string-sanitizer");

string.validate.isEmail("jhon@gmail.com") //  jhon@gmail.com
string.validate.isEmail("jhongmail.com") // false
string.validate.isEmail("jhon@gmailcom") // false
string.validate.isEmail("jhon@@gmail.com") // false
```

## Username Validation ✅

Username must be free from any special characters. There will be no space and must be at least 2 characters long. Combination of numbers and letters is acceptable. Only numbers (i.e 123) are not acceptable. But only letters (i.e ea) wil be acceptable. 

```js
var string = require("string-sanitizer");

string.validate.isUsername("fazlulka") // fazlulka
string.validate.isUsername("Fazlulka") //  fazlulka (Automatically lowerstring method applied.)
string.validate.isUsername("f") //  false (Minimum 2 letters)
string.validate.isUsername("123") //  false (Only number is not acceptable)
string.validate.isUsername("fazlulka@") //  false (Special Character not accpeted)
string.validate.isUsername("fazlulka_") // false (Special Character not accepted)
```

Why minimum 2 letters not 3 letters?
Because some of the username like (@ea) is still most popular.

Why automatically lowerstring applied?
Because, most of the end user still don't understand the meaning of username. Sometimes they use upper letter. We just sanitized it. Nothing more.

## Password Validation ✅

> **1. Most popular:** To check a password **between 6 to 15 characters** which contain at least one numeric digit and a special character


```js
string.validate.isPassword6to15("password1@") //  password1@
string.validate.isPassword6to15("password1") //  false
```
<br/>

> **2. Most Secure:** To check a password **between 8 to 15 characters** which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character

```js
string.validate.isPassword8to15("password1Aa_"); //  password1Aa_
string.validate.isPassword8to15("password1") // false
```
<br/>


> **3. Simpler Password:** To check a password **between 6 to 20 characters** which contain at least one numeric digit, one uppercase and one lowercase letter


```js
string.validate.isPassword6to20("password1Aa"); //  password1Aa
string.validate.isPassword6to20("password1") // false
```
<br/>

> **4. Easy Password:** To check a password **between 7 to 20 characters** which contain only characters, numeric digits, underscore and first character must be a letter. No special character accepted here.
> 


```js
string.validate.isPassword7to20("password1") //  password1
string.validate.isPassword7to20("password1@_") //  false (No special character allowed)
```
<br/>

### Typescript compatitibility

Thanks to @kewitz for typescript compatibility

Thanks to @JohannesDev for removeUnderscore function


### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. 🏃‍🏃‍

### License

[MIT](https://github.com/fazlulkarimweb/string-sanitizer/blob/master/license)
