// const mark = 78;
// switch (true) {
    
//     case mark >= 80:
//         console.log("grade = A+");
//         break;
//     case mark >= 70:
//         console.log("grade = A");
//         break;
//     case mark >= 60:
//         console.log("grade = B");
//         break;
//     case mark >= 50:
//         console.log("grade = C");
//         break;
//     case mark >= 40:
//         console.log("grade = D");
//         break;
//     default:
//         console.log("Your are filled");
//         break;
// }

function getGrade(mark) {
    switch (true) {
    
        case mark >= 80:
            return "grade = A+";
            break;
        case mark >= 70:
            return "grade = A";
            break;
        case mark >= 60:
            return "grade = B";
            break;
        case mark >= 50:
            return "grade = C";
            break;
        case mark >= 40:
            return "grade = D";
            break;
        default:
            return" You are filled";
            break;
    }
}

const yourGrade = getGrade(78);
console.log(yourGrade);