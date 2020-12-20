function validTime(str) {
    timeSplit = str.split(":");
    if (parseInt(timeSplit[0]) < 24) {
        if (parseInt(timeSplit[1]) < 60) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}