// Function to handle form submission
const getFormvalue = () => {
  // Get values of the first name and last name inputs
  const firstName = document.getElementById('code-1').value;
  const lastName = document.getElementById('code-2').value;

  // Display the full name in an alert
  alert(`${firstName} ${lastName}`);
};

// Add event listener for form submission
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission
  getFormvalue(); // Call the function to handle form values
});
