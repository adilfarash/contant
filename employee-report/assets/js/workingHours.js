// *|| Date and Time Function Implementation
let dateTime = () => {
  let dateTimeHeader = document.querySelector('.workingHour--header__dateTime');

  let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dateFormat = new Date();

  let dateString = dateFormat.toDateString().split(" ")
  let time = dateFormat.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  dateTimeHeader.innerHTML = `
    <p class="workingHour--header__date">${daysList[dateFormat.getDay()]}, ${dateString[2]} ${dateString[1]}</p>
    <p class="workingHour--header__time">${time}</p>`
}

dateTime();