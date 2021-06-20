var string = require('./index');

// string.sanitize("a.bc@d efg#h") =  abcdefgh
// string.sanitize.keepSpace("a.bc@d efg#h") =  abcd efgh
// string.sanitize.keepUnicode("a.bc@d efg#hক") =  abcd efghক
// string.sanitize.addFullstop("a.bc@d efg#h") =  abcd.efgh
// string.sanitize.addUnderscore("a.bc@d efg#h") =  abcd_efgh
// string.sanitize.addDash("a.bc@d efg#h") =  abcd-efgh
// string.sanitize.removeNumber("@abcd efgh123") =  abcdefgh
// string.sanitize.keepNumber("@abcd efgh123") =  abcdefgh123
// string.addFullstop("abcd efgh") =  abcd.efgh
// string.addUnderscore("@abcd efgh") =  @abcd_efgh
// string.addDash("@abcd efgh") =  @abcd-efgh
// string.removeSpace("@abcd efgh") =  @abcdefgh

console.log(
  `string.sanitize("a.bc@d efg#h") = `,
  string.sanitize('a.bc@d efg#h')
); // abcdefgh

console.log(
  `string.sanitize.keepSpace("a.bc@d efg#h") = `,
  string.sanitize.keepSpace('a.bc@d efg#h')
); // abcd efgh

console.log(
  `string.sanitize.keepUnicode("a.bc@d efg#hক") = `,
  string.sanitize.keepSpace('a.bc@d efg#hক')
); // abcd efghক

console.log(
  `string.sanitize.addFullstop("a.bc@d efg#h") = `,
  string.sanitize.addFullstop('a.bc@d efg#h')
); // abcd.efgh

console.log(
  `string.sanitize.addUnderscore("a.bc@d efg#h") = `,
  string.sanitize.addUnderscore('a.bc@d efg#h')
); // abcd_efgh

console.log(
  `string.sanitize.addDash("a.bc@d efg#h") = `,
  string.sanitize.addDash('a.bc@d efg#h')
); // abcd-efgh

console.log(
  `string.sanitize.removeNumber("@abcd efgh123") = `,
  string.sanitize.removeNumber('@abcd efgh123')
); // abcdefgh

console.log(
  `string.sanitize.removeText("@abcd efgh123") = `,
  string.sanitize.removeText('@abcd efgh123')
); // 123

console.log(
  `string.sanitize.keepNumber("@abcd efgh123") = `,
  string.sanitize.keepNumber('@abcd efgh123')
); // abcdefgh123

console.log(
  `string.addFullstop("abcd efgh") = `,
  string.addFullstop('abcd efgh')
); // abcd.efgh

console.log(
  `string.addUnderscore("@abcd efgh") = `,
  string.addUnderscore('@abcd efgh')
); // @abcd_efgh

console.log(`string.addDash("@abcd efgh") = `, string.addDash('@abcd efgh')); // @abcd-efgh

console.log(
  `string.removeSpace("@abcd efgh") = `,
  string.removeSpace('@abcd efgh')
); //  @abcdefgh

console.log(
  `string.removeUnderscore("@ab__cd ef_gh_") = `,
  string.removeUnderscore('@ab__cd ef_gh_')
); //  @abcd efgh

console.log(
  `string.validate.isEmail("fazlulkarimrocky@gmail.com") = `,
  string.validate.isEmail('fazlulkarimrocky@gmail.com')
); //  true

console.log(
  `string.validate.isEmail("fazlulkarimrockygmail.com") = `,
  string.validate.isEmail('fazlulkarimrockygmail.com')
); //  false

console.log(
  `string.validate.isEmail("fazlulkarimrocky@gmailcom") = `,
  string.validate.isEmail('fazlulkarimrocky@gmailcom')
); //  false

console.log(
  `string.validate.isEmail("fazlulkarimrocky@@gmail.com") = `,
  string.validate.isEmail('fazlulkarimrocky@@gmail.com')
); //  false

console.log(
  `string.validate.isUsername("fazlulka") = `,
  string.validate.isUsername('fazlulka')
); //  True

console.log(
  `string.validate.isUsername("f") = `,
  string.validate.isUsername('f')
); //  False

console.log(
  `string.validate.isUsername("123") = `,
  string.validate.isUsername('123')
); //  False

console.log(
  `string.validate.isUsername("Fazlulka") = `,
  string.validate.isUsername('Fazlulka')
); //  false

console.log(
  `string.validate.isUsername("fazlulka@") = `,
  string.validate.isUsername('fazlulka@')
); //  false

console.log(
  `string.validate.isUsername("fazlulka_") = `,
  string.validate.isUsername('fazlulka_')
); //  false

//Password
// 6 to 15
console.log(
  `string.validate.isPassword6to15("password1@_") = `,
  string.validate.isPassword6to15('password1@_')
); //  password1@

console.log(
  `string.validate.isPassword6to15("password1@") = `,
  string.validate.isPassword6to15('password1@')
); //  false

// isPassword7to20
console.log(
  `string.validate.isPassword7to20("password1@_") = `,
  string.validate.isPassword7to20('password1@_')
); //  password1@

console.log(
  `string.validate.isPassword7to20("password1") = `,
  string.validate.isPassword7to20('password1')
); //  false

// isPassword6to20
console.log(
  `string.validate.isPassword6to20("password1Aa") = `,
  string.validate.isPassword6to20('password1Aa')
); //  password1Aa_

console.log(
  `string.validate.isPassword6to20("password1") = `,
  string.validate.isPassword6to20('password1')
); //  false

// isPassword8to20
console.log(
  `string.validate.isPassword8to15("password1Aa_") = `,
  string.validate.isPassword8to15('password1Aa_')
); //  password1Aa_

console.log(
  `string.validate.isPassword8to15("password1") = `,
  string.validate.isPassword8to15('password1')
); //  false
