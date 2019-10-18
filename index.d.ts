type TSanitizer = (s: string) => string;

interface ISanitize extends TSanitizer {
  keepUnicode: TSanitizer;
  keepSpace: TSanitizer;
  addFullstop: TSanitizer;
  addUnderscore: TSanitizer;
  addDash: TSanitizer;
  removeNumber: TSanitizer;
  keepNumber: TSanitizer;
}

const sanitize: ISanitize;
const addFullstop: TSanitizer;
const addUnderscore: TSanitizer;
const addDash: TSanitizer;
const removeSpace: TSanitizer;

export { sanitize, addFullstop, addUnderscore, addDash, removeSpace };
