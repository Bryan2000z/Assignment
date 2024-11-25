
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function changeSlide(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.className = dot.className.replace(' active', ''));
    
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }

  function validateEmail(event) {
    event.preventDefault(); 
  
    const emailField = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const email = emailField.value;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailField.style.borderColor = "red";
    } else {
      emailError.textContent = ""; 
      emailField.style.borderColor = "green";
  
    
      alert("Thank you! We have received your inquiry.");
      document.getElementById("contactForm").reset(); 
    }
  }