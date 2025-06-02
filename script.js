function minDate(dates) {
  const datesCopy = [...dates]; // avoid modifying the original array
  return datesCopy.reduce((min, curr) => curr < min ? curr : min);
}

function findMinDate() {
  const input = document.getElementById("dateInput").value;
  const dateArray = input
    .split(",")
    .map(date => date.trim())
    .filter(date => /^\d{4}\/\d{2}\/\d{2}$/.test(date)); // validate format

  const resultElement = document.getElementById("result");

  if (dateArray.length === 0) {
    resultElement.textContent = "Please enter valid dates in YYYY/MM/DD format.";
    return;
  }

  const min = minDate(dateArray);
  resultElement.textContent = `Earliest Date: ${min}`;
}
