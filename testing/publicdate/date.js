let myDate = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let suffix = ""
if (myDate.getDate() > 3){
  suffix = "th"
}
else if (myDate.getDate() > 2){
  suffix = "rd"
}
else if (myDate.getDate() > 1){
  suffix = "nd"
}
else {
  suffix = "st"
}

document.getElementById("date").innerText = "The date is: " + days[myDate.getDay()] + ", " + months[myDate.getMonth()] + " " + myDate.getDate() + suffix + ", " + myDate.getFullYear();