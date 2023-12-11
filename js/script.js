// NAVBAR
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// FILTER MENU  
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length;
  i++) {
    list[i].addEventListener('click', function() {
      for (let j = 0; j< list.length; j++) {
        list[j].classList.remove('active');
      }
      this.classList.add('active');

      let dataFilter = this.getAttribute('data-filter');

      for (let k = 0; k < itemBox.length; k++) {
        itemBox[k].classList.remove('active');
        itemBox[k].classList.add('hide');

        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "menu") {
          itemBox[k].classList.remove('hide');
          itemBox[k].classList.add('active');
        }
      }

    })
  }

// CONNECT TO BE
// const url = 'http://localhost:3003/users';
// const tableBody = document.getElementById('bookingTableBody');


// let output = '';


// const renderBooking = (bookings) => {
//   bookings.forEach(booking => {
//     output  += `
//     <div data-id=${booking.booking_id}>
//     <tr>
//       <td>${booking.table}</td>
//       <td>${booking.hours}</td>
//       <td>${booking.name}</td>
//       <td>${booking.email}</td>
//       <td>${booking.date}</td>
//       <td>${booking.person}</td>
//       <td>${booking.specialRequest}</td>
//       <td class="action-buttons">
//         <button id="edit-booking">Edit</button>
//         <button id="delete-booking">Hapus</button>
//       </td>
//     </tr>
//     </div>  
//     `;
//     tableBody.innerHTML = output;
//   });
// }

// // GET METHOD
// fetch(url)
// .then(res => res.json())
// .then(data => renderBooking(data))


// // POST METHOD
// const addBookingForm = document.querySelector('.booking-form');


// addBookingForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   var tableValue = document.getElementById('table').value;
//   var hoursValue = document.getElementById('hours').value;
//   var nameValue = document.getElementById('name').value;
//   var emailValue = document.getElementById('email').value;
//   var dateValue = document.getElementById('date').value;
//   var personValue = document.getElementById('person').value;
//   var specialRequestValue = document.getElementById('specialRequest').value;

//   console.log(nameValue.value)
//   fetch(url, {
//     method: 'POST' ,
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       table: tableValue,
//       hours: hoursValue,
//       name: nameValue,
//       email: emailValue,
//       date: dateValue,
//       person: personValue,
//       specialRequest: specialRequestValue
//     })
//   })
//   .then(res => res.json())
//   .then(data => {
//     const dataArray = [];
//     dataArray.push(data);
//     console.log(data)
//     renderBooking(dataArray);
//   })
// })


// DELETE

// tableBody.addEventListener('click', (e) => {
//   e.preventDefault();
//   let delButtonIsPressed = e.target.id == 'delete-booking';
//   let editButtonIsPressed = e.target.id == 'edit-booking';

//   let id = e.target.parentElement.dataset.id;

//   // Delete Booking
//   // DELETE METHOD
//   if(delButtonIsPressed) {
//     fetch(`${url}/${id}`, {
//       method: 'DELETE',
//     })
//     .then(res => res.json())
//     .then(() => location.reload())
//   }

//   if(editButtonIsPressed) {
//     const parent = e.target.parentElement;
//     let tableContent = parent.querySelector('.table').textContent;
//     console.log(tableContent);
//   }
// });

//POST EMAIL
// function postOffering(event) {
//   event.preventDefault();

//   const form = event.target;
//   const email = form.querySelector('[name="email"]').value;

//   const data = {
//     email: email
//   };

//   fetch('http://localhost:3003/offering', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     form.reset();
//     alert(data.message)
//   });
// }

// document.querySelector('.discount-content form').addEventListener('submit', postOffering);


// const addOfferingForm = document.querySelector('.email-form')

// addOfferingForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   var emailValue = document.getElementById('email').value;

//   console.log(emailValue.value)
//   fetch('http://localhost:3003/offering', {
//     method: 'POST' ,
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email: emailValue,
//     })
//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })
// })
// // Booking FORM
// const bookedSlots = []; // Array untuk menyimpan slot yang sudah dipesan

// // Memeriksa apakah sudah ada data booking di localStorage
// const storedBookings = JSON.parse(localStorage.getItem('bookedSlots'));
// if (storedBookings) {
//   bookedSlots.push(...storedBookings);
//   displayBooking(); // Menampilkan data booking yang sudah tersimpan
// }

// function saveBooking() {
//   const table = document.getElementById('table').value;
//   const hours = document.getElementById('hours').value;

//   // Periksa apakah meja dan jam yang dipilih sudah dipesan sebelumnya
//   if (isSlotBooked(table, hours)) {
//     alert('Meja dan jam tersebut sudah dipesan. Silakan pilih meja atau jam yang lain.');
//     return;
//   }

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const date = document.getElementById('date').value;
//   const person = document.getElementById('person').value;
//   const specialRequest = document.getElementById('specialRequest').value;

//   // Simpan data booking ke localStorage
//   const newBooking = { table, hours, name, email, date, person, specialRequest };
//   bookedSlots.push(newBooking);
//   localStorage.setItem('bookedSlots', JSON.stringify(bookedSlots));

//   // Buat baris baru untuk ditambahkan ke tabel
//   const newRow = document.createElement('tr');
//   newRow.innerHTML = `
//     <td>${table}</td>
//     <td>${hours}</td>
//     <td>${name}</td>
//     <td>${email}</td>
//     <td>${date}</td>
//     <td>${person}</td>
//     <td>${specialRequest}</td>
//     <td class="action-buttons">
//       <button onclick="editBooking(this.parentNode.parentNode)">Edit</button>
//       <button onclick="deleteBooking(this.parentNode.parentNode)">Hapus</button>
//     </td>
//   `;

//   // Tambahkan baris ke tabel
//   const tableBody = document.getElementById('bookingTableBody');
//   tableBody.appendChild(newRow);

//   // Bersihkan nilai formulir setelah menyimpan
//   document.getElementById('bookingForm').reset();
// }

// function displayBooking() {
//   const tableBody = document.getElementById('bookingTableBody');
//   tableBody.innerHTML = '';

//   bookedSlots.forEach(booking => {
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//       <td>${booking.table}</td>
//       <td>${booking.hours}</td>
//       <td>${booking.name}</td>
//       <td>${booking.email}</td>
//       <td>${booking.date}</td>
//       <td>${booking.person}</td>
//       <td>${booking.specialRequest}</td>
//       <td class="action-buttons">
//         <button onclick="editBooking(this.parentNode.parentNode)">Edit</button>
//         <button onclick="deleteBooking(this.parentNode.parentNode)">Hapus</button>
//       </td>
//     `;
//     tableBody.appendChild(newRow);
//   });
// }

// function isSlotBooked(table, hours) {
//   return bookedSlots.some(booking => booking.table === table && booking.hours === hours);
// }

// function filterTable() {
//   const searchValue = document.getElementById('search').value.toLowerCase();
//   const tableBody = document.getElementById('bookingTableBody');
//   const rows = tableBody.getElementsByTagName('tr');

//   for (let row of rows) {
//     const name = row.getElementsByTagName('td')[2].innerText.toLowerCase();

//     if (name.includes(searchValue)) {
//       row.style.display = '';
//     } else {
//       row.style.display = 'none';
//     }
//   }
// }

// function sortTable() {
//   const sortBy = document.getElementById('sort').value;
//   const tableBody = document.getElementById('bookingTableBody');
//   const rows = Array.from(tableBody.getElementsByTagName('tr'));

//   rows.sort((a, b) => {
//     const aValue = a.getElementsByTagName('td')[sortBy === 'hours' ? 1 : 0].innerText;
//     const bValue = b.getElementsByTagName('td')[sortBy === 'hours' ? 1 : 0].innerText;

//     if (sortBy === 'date') {
//       return new Date(aValue) - new Date(bValue);
//     } else {
//       return aValue.localeCompare(bValue);
//     }
//   });

//   // Hapus semua baris dari tabel
//   tableBody.innerHTML = '';

//   // Tambahkan baris yang telah diurutkan kembali ke tabel
//   rows.forEach(row => tableBody.appendChild(row));
// }

// function deleteBooking(row) {
//   const table = row.getElementsByTagName('td')[0].innerText;
//   const hours = row.getElementsByTagName('td')[1].innerText;

//   // Hapus baris dari tabel
//   row.remove();

//   // Hapus slot yang sudah dipesan
//   const index = bookedSlots.findIndex(slot => slot.table === table && slot.hours === hours);
//   if (index !== -1) {
//     bookedSlots.splice(index, 1);
//   }

//   // Perbarui data di localStorage
//   localStorage.setItem('bookedSlots', JSON.stringify(bookedSlots));
// }

// function editBooking(row) {
//   // ... (Kode fungsi editBooking sebelumnya)
//   const table = row.getElementsByTagName('td')[0].innerText;
//   const hours = row.getElementsByTagName('td')[1].innerText;
//   const name = row.getElementsByTagName('td')[2].innerText;
//   const email = row.getElementsByTagName('td')[3].innerText;
//   const date = row.getElementsByTagName('td')[4].innerText;
//   const person = row.getElementsByTagName('td')[5].innerText;
//   const specialRequest = row.getElementsByTagName('td')[6].innerText;

//   // Isi formulir edit dengan data yang ada
//   document.getElementById('table').value = table;
//   document.getElementById('hours').value = hours;
//   document.getElementById('name').value = name;
//   document.getElementById('email').value = email;
//   document.getElementById('date').value = date;
//   document.getElementById('person').value = person;
//   document.getElementById('specialRequest').value = specialRequest;
  
//   // Hapus baris dari tabel
//   row.remove();

//   // Perbarui data di localStorage
//   localStorage.setItem('bookedSlots', JSON.stringify(bookedSlots));
// }

// let form = document.getElementById("bookingForm");
// let table = document.getElementById("table");
// let hours = document.getElementById("hours");
// let name = document.getElementById("name");
// let email = document.getElementById("email");
// let date = document.getElementById("date");
// let person = document.getElementById("person");
// let specialRequest = document.getElementById("specialRequest");



