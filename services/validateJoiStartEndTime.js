const { convertTimeToMinutes } = require("./convertTimeToMinutes")

const validateJoiStartEndTime = (obj, helpers) => {
    const { start, end } = obj;
  
    if (convertTimeToMinutes(start) >= convertTimeToMinutes(end)) {
      return helpers.error('any.invalid');
    }
}

module.exports = {validateJoiStartEndTime}