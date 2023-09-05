const convertTimeToMinutes = function (time) {
    const arrTime = time.split(':');
    return Number(arrTime[0]) * 60 + Number(arrTime[1]);
}

module.exports = {convertTimeToMinutes};