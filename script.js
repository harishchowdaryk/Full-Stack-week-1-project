// script.js
document.getElementById('regForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('regStatus').textContent = 'Thank you for registering!';
  this.reset();
});
