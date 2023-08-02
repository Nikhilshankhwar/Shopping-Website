// JavaScript

// Smooth scrolling for anchor links in the navigation
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const headerOffset = 70; // Adjust this value to account for fixed header height
  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Toggle navigation menu on mobile devices
const toggleButton = document.querySelector('.logo');
const navList = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Product cards hover effect
const productCards = document.querySelectorAll('.products .card');

productCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.small_card').style.opacity = '1';
    card.querySelector('.image img').style.transform = 'scale(1.1)';
  });

  card.addEventListener('mouseleave', () => {
    card.querySelector('.small_card').style.opacity = '0';
    card.querySelector('.image img').style.transform = 'scale(1)';
  });
});

// Review cards zoom effect
const reviewCards = document.querySelectorAll('.review_card');

reviewCards.forEach(card => {
  const profileImage = card.querySelector('.profile_image');

  profileImage.addEventListener('mouseenter', () => {
    profileImage.style.transform = 'scale(1.2)';
  });

  profileImage.addEventListener('mouseleave', () => {
    profileImage.style.transform = 'scale(1)';
  });
});
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the anchor tags
  const googleLink = document.getElementById('googleLink');
  const facebookLink = document.getElementById('facebookLink');
  const twitterLink = document.getElementById('twitterLink');

  // Define URLs for Google, Facebook, and Twitter
  const googleURL = 'https://www.google.com/';
  const facebookURL = 'https://www.facebook.com/';
  const twitterURL = 'https://twitter.com/';

  // Add event listeners to each anchor tag
  googleLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    window.open(googleURL, '_blank'); // Open Google link in a new tab or window
  });

  facebookLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    window.open(facebookURL, '_blank'); // Open Facebook link in a new tab or window
  });

  twitterLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    window.open(twitterURL, '_blank'); // Open Twitter link in a new tab or window
  });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const formData = new FormData(this);

  fetch(this.action, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.user) {
        // Login successful, do something (e.g., redirect to a dashboard page)
        console.log(data.message);
        console.log('Logged in user:', data.user);
      } else {
        // Login failed, show an error message or take appropriate action
        console.error(data.message);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

