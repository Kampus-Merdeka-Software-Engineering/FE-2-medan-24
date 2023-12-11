// CONNECT TO BE
const url = 'https://be-2-medan-24.up.railway.app/users';
const tableBody = document.getElementById('bookingTableBody');


let output = '';


const renderBooking = (bookings) => {
  bookings.forEach(booking => {
    output  += `
    <div data-id=${booking.booking_id}>
    <tr>
      <td>${booking.table}</td>
      <td>${booking.hours}</td>
      <td>${booking.name}</td>
      <td>${booking.email}</td>
      <td>${booking.date}</td>
      <td>${booking.person}</td>
      <td>${booking.specialRequest}</td>
      <td class="action-buttons">
        <button id="edit-booking">Edit</button>
        <button id="delete-booking">Hapus</button>
      </td>
    </tr>
    </div>  
    `;
    tableBody.innerHTML = output;
  });
}

// GET METHOD
fetch(url)
.then(res => res.json())
.then(data => renderBooking(data))