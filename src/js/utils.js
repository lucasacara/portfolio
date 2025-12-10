export default function strMatchesRegex(pStr, aRegex) {
  for (let x = 0; x < aRegex.length; x++) {
    console.log("pStr", pStr);
    console.log("aRegex", aRegex);
    console.log("x", x);

    if (aRegex[x].test(pStr)) {
      return true;
    }
  }
  return false;
}