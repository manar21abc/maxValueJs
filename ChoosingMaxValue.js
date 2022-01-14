//for refrence: https://appointment.visafg.com/appointment/confirm
let slotField = document.getElementById("slot");
let myArray = [];
for (let i = 1; i < slotField.length; i++) {
  appointmentCountPerDay = Number(
    slotField[i].innerText.slice(-2).replace(" ", "")
  );
  myArray.push(appointmentCountPerDay);

  let maxValue = Math.max.apply(Math, myArray);
  if (appointmentCountPerDay == maxValue) {
    slotField.selectedIndex = i;
  }
}
