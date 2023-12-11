// CONNECT TO BE
const url = 'https://be-2-medan-24.up.railway.app/users';


// POST METHOD
const addBookingForm = document.querySelector('.booking-form');


addBookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const form = e.target;

  var tableValue = document.getElementById('table').value;
  var hoursValue = document.getElementById('hours').value;
  var nameValue = document.getElementById('name').value;
  var emailValue = document.getElementById('email').value;
  var dateValue = document.getElementById('date').value;
  var personValue = document.getElementById('person').value;
  var specialRequestValue = document.getElementById('specialRequest').value;

  console.log(nameValue.value)
  fetch(url, {
    method: 'POST' ,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      table: tableValue,
      hours: hoursValue,
      name: nameValue,
      email: emailValue,
      date: dateValue,
      person: personValue,
      specialRequest: specialRequestValue
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    form.reset();
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: 'You have successfully booked a table',
    });
  })
})

