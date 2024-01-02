function highlight() {
  const boldElements = document.querySelectorAll('strong');

  boldElements.forEach(boldElement => {
    boldElement.style.color = 'green';
  });
}

function return_normal() {
  const boldElements = document.querySelectorAll('strong');

  boldElements.forEach(boldElement => {
    boldElement.style.color = 'black';
  });
}
