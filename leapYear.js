
function isLeapYear(year) {
    if ((year % 4 == 0) && ((year % 400 == 0) || (year % 100 != 0))) {
        return "this is leap year";
    } else {
        return "not leap year.";
    }
}

const check_leapYear = isLeapYear(2100);
console.log(check_leapYear);