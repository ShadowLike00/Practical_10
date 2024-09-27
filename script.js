// script.js
document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('review-form');
    const reviewSection = document.getElementById('review-section');
  
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const review = document.getElementById('review').value;
  
      if (username === "" || review === "") {
        alert("Please fill in all fields");
      } else {
        const newReview = document.createElement('p');
        newReview.textContent = `${username}: ${review}`;
        reviewSection.appendChild(newReview);
        alert(`Thanks for your review, ${username}!`);
        reviewForm.reset();
      }
    });
  
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
      } else {
        alert(`Thanks for reaching out, ${name}! We’ll contact you soon.`);
        contactForm.reset();
      }
    });
  });
  