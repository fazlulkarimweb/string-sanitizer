var string = require("./index");

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
  string.sanitize("a.bc@d efg#h")
); // abcdefgh

console.log(
  `string.sanitize.keepSpace("a.bc@d efg#h") = `,
  string.sanitize.keepSpace("a.bc@d efg#h")
); // abcd efgh

console.log(
  `string.sanitize.keepUnicode("a.bc@d efg#hক") = `,
  string.sanitize.keepSpace("a.bc@d efg#hক")
); // abcd efghক

console.log(
  `string.sanitize.addFullstop("a.bc@d efg#h") = `,
  string.sanitize.addFullstop("a.bc@d efg#h")
); // abcd.efgh

console.log(
  `string.sanitize.addUnderscore("a.bc@d efg#h") = `,
  string.sanitize.addUnderscore("a.bc@d efg#h")
); // abcd_efgh

console.log(
  `string.sanitize.addDash("a.bc@d efg#h") = `,
  string.sanitize.addDash("a.bc@d efg#h")
); // abcd-efgh

console.log(
  `string.sanitize.removeNumber("@abcd efgh123") = `,
  string.sanitize.removeNumber("@abcd efgh123")
); // abcdefgh
console.log(
  `string.sanitize.keepNumber("@abcd efgh123") = `,
  string.sanitize.keepNumber("@abcd efgh123")
); // abcdefgh123

console.log(
  `string.addFullstop("abcd efgh") = `,
  string.addFullstop("abcd efgh")
); // abcd.efgh

console.log(
  `string.addUnderscore("@abcd efgh") = `,
  string.addUnderscore("@abcd efgh")
); // @abcd_efgh

console.log(`string.addDash("@abcd efgh") = `, string.addDash("@abcd efgh")); // @abcd-efgh

console.log(
  `string.removeSpace("@abcd efgh") = `,
  string.removeSpace("@abcd efgh")
); //  @abcdefgh
