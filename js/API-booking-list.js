// CONNECT TO BE
const url = 'https://be-2-medan-24.up.railway.app/users';
const tableBody = document.getElementById('bookingTableBody');


let output = '';


const renderBooking = (bookings) => {
  bookings.forEach(booking => {
    output  += `
    <tr>
      <td>${booking.table}</td>
      <td>${booking.hours}</td>
      <td>${booking.name}</td>
      <td>${booking.email}</td>
      <td>${booking.date}</td>
      <td>${booking.person}</td>
      <td>${booking.specialRequest}</td>
    </tr>
    `;
    tableBody.innerHTML = output;
  });
}

// GET METHOD
fetch(url)
.then(res => res.json())
.then(data => renderBooking(data))

// Fungsi untuk memfilter tabel berdasarkan input nama, jam, tabel, dan tanggal
function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("bookingTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        // Sesuaikan indeks kolom berdasarkan urutan di tabel
        var nameCol = tr[i].getElementsByTagName("td")[2];
        var timeCol = tr[i].getElementsByTagName("td")[1];
        var tableCol = tr[i].getElementsByTagName("td")[0];
        var dateCol = tr[i].getElementsByTagName("td")[4];

        if (nameCol || timeCol || tableCol || dateCol) {
            txtValueName = nameCol.textContent || nameCol.innerText;
            txtValueTime = timeCol.textContent || timeCol.innerText;
            txtValueTable = tableCol.textContent || tableCol.innerText;
            txtValueDate = dateCol.textContent || dateCol.innerText;

            if (
                txtValueName.toUpperCase().indexOf(filter) > -1 ||
                txtValueTime.toUpperCase().indexOf(filter) > -1 ||
                txtValueTable.toUpperCase().indexOf(filter) > -1 ||
                txtValueDate.toUpperCase().indexOf(filter) > -1
            ) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Fungsi untuk mengurutkan tabel berdasarkan pilihan pengguna
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("bookingTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[document.getElementById("sort").selectedIndex];
            y = rows[i + 1].getElementsByTagName("td")[document.getElementById("sort").selectedIndex];

            if (document.getElementById("sort").selectedIndex == 1) {
                // Khusus untuk kolom jam, bandingkan sebagai angka
                x = parseInt(x.innerHTML);
                y = parseInt(y.innerHTML);
            } else {
                // Bandingkan sebagai teks (string)
                x = x.innerHTML.toLowerCase();
                y = y.innerHTML.toLowerCase();
            }

            if (x > y) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}