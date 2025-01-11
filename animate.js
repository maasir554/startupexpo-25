const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    observer.observe(element);
});

// pop up card js


 // Get elements
 const popup = document.getElementById('popup');
 const overlay = document.getElementById('overlay');
 const about = document.getElementById('about');
 const closeButton = document.getElementById('closeButton');
 
 let hasShown = false;

 // Show popup and overlay
 function showPopup() {
     popup.style.display = 'block';
     overlay.style.display = 'block';
 }

 // Hide popup and overlay
 function hidePopup() {
     popup.style.display = 'none';
     overlay.style.display = 'none';
 }

 // Show popup when scrolling to about section
 window.addEventListener('scroll', function() {
     if (!hasShown) {
         const aboutPosition = about.getBoundingClientRect();
         if (aboutPosition.top <= window.innerHeight && aboutPosition.bottom >= 0) {
             showPopup();
             hasShown = true;
         }
     }
 });

 // Close popup when clicking close button or overlay
 closeButton.addEventListener('click', hidePopup);
 overlay.addEventListener('click', hidePopup);

 // Prevent popup from being too tall on small screens
 window.addEventListener('resize', function() {
     if (popup.style.display === 'block') {
         const vh = window.innerHeight * 0.9;
         popup.style.maxHeight = `${vh}px`;
     }
 });
