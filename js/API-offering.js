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
  .then(res => {
      if (!res.ok) {
          throw new Error('Failed to submit email. Email has already been sent previously.');
      }
      return res.json();
  })
  .then(data => {
      console.log(data);
      form.reset();
      Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: data.msg,
      });
  })
  .catch(error => {
      console.error(error.message);
      Swal.fire({
          icon: 'error',
          title: 'Sorry :(',
          text: error.message,
      });
  });
}

document.querySelector('.discount-content form').addEventListener('submit', postOffering);
