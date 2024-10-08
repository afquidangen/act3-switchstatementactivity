function enterDay() {
    let day = prompt("Enter a day of the week: ");
    switch (day) {
        case "Monday":
            alert("Finish assignments.")
            break;
        case "Tuesday":
            alert("Study for midterms.")
            break;
        case "Wednesday":
            alert("Write articles.")
            break;
        case "Thursday":
            alert("Practice for dance performance.")
            break;
        case "Friday":
            alert("Hang out with friends.")
            break;
        case "Saturday":
            alert("Do the laundry.")
            break;
        case "Sunday":
            alert("Go to church.")
            break;
            default:
        alert("Invalid input.")
    }
}