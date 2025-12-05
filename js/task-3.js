const textInput = document.querySelector('#movie-input');
const output = document.querySelector('#movie-output');
textInput.addEventListener('input', event => {
  const movieName = event.currentTarget.value.trim();
  if (movieName === '') {
    output.textContent = 'No movie chosen';
  } else {
    output.textContent = movieName;
  }
});
