//for refrence: https://appointment.visafg.com/appointment/confirm
let selected_element = document.getElementById("slot");
let myArray = [];
for (let i = 1; i < selected_element.length; i++) {
  appointmentCountPerDay = Number(
    selected_element[i].innerText.slice(-2).replace(" ", "")
  );
  myArray.push(appointmentCountPerDay);

  let maxValue = Math.max.apply(Math, myArray);
  if (appointmentCountPerDay == maxValue) {
    selected_element.selectedIndex = i;
  }
}
