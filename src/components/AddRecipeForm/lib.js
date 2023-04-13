export const handleKeyPress = event => {
  //   const validChars = /^[A-Za-z0-9_\-.,;:!?\s]+$/;
  const validChars = /^[0-9.,/]+$/;
  const charCode = event.which || event.keyCode;
  const char = String.fromCharCode(charCode);

  if (!validChars.test(char)) {
    event.preventDefault();
  }
};

export const fQ = str => {
  let newStr = str;
  newStr = newStr.replace(/,/g, '.');
  const [a, b] = str.split('/');
  if ((a > 0) & (b > 0)) {
    newStr = (a / b).toString();
  }
  newStr = newStr.replace(/[\s/]/g, '');
  return newStr;
};
