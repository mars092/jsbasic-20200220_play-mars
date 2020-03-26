/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  return (
    str.toLowerCase().indexOf("1xbet") >= 0 ||
    str.toLowerCase().indexOf("xxx") >= 0
  );
}
