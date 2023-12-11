// POST EMAIL
function postOffering(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.querySelector('[name="email"]').value;

  const data = {
    email: email
  };

  fetch('https://be-2-medan-24.up.railway.app/offering', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    form.reset();
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: data.msg,
    });
  });
}

document.querySelector('.discount-content form').addEventListener('submit', postOffering);
