const validateDate = function (date) {
  const arrD = date.split("-");
  arrD[1] -= 1;
  const d = new Date(arrD[0], arrD[1], arrD[2]);
  if (
    d.getFullYear() == arrD[0] &&
    d.getMonth() == arrD[1] &&
    d.getDate() == arrD[2]
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = { validateDate };
