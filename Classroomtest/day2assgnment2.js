// function runTest(testType){
//     switch(testType){
//     case "sanity":
//     console.log("running sanity test")
//     break;
//     case "smoke":
//     console.log("running smoke test")
//     break;
//     case "regression":
//     console.log("running regression test")
//     break;
//     default:
//     console.log("running smoke test")
//     }

// }
// runTest("smoke")
// runTest("sanity")
// runTest("regression")
// runTest("functional")

function checkdayType(daytype){
    switch(daytype){
        case "Monday":
        console.log("weekday")
        break;
        case "Tuesday":
        console.log("weekday")
        break;
        case "Wednesday":
        console.log("weekday")
        break;
        case "Thursday":
        console.log("weekday")
        break;
        case "Friday":
        console.log("weekday")
        break;
        case "Saturday":
        console.log("weekend")
        break;
        case "Monday":
        console.log("weekend")
        break;
        default:
            console.log("invalid day")

    }
}
checkdayType("Monday")
checkdayType("Saturday")
checkdayType("ggg")
