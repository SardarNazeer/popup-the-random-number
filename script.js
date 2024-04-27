// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  // Function to display the random number in the HTML
  function displayRandomNumber() {
    var randomNumberDiv = document.getElementById('randomNumber');
    var randomNumber = generateRandomNumber();
    randomNumberDiv.textContent = randomNumber;
  }
  
  // Add event listener for any key press
  document.addEventListener('keydown', function() {
    displayRandomNumber();
  });
  