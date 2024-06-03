// Add responsive design for the navbar
const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
  
      burger.classList.toggle('toggle');
    });
  }
  
  navSlide();
  
  // Add scroll button
  const scrollBtn = document.querySelector('.scroll-btn');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
  
  // Add animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  });
  
  const elements = document.querySelectorAll('.animate');
  elements.forEach(element => observer.observe(element));

  // Download PDF function
function downloadPDF() {
    // Replace with the actual URL of your PDF file
    const pdfUrl = 'https://drive.google.com/file/d/1v4VQIwtXcQ3w9iPXwIdGcAm3abDbvX8R/view?usp=sharing';
  
    // Create a new link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'project-details.pdf';
  
    // Add the link to the page and simulate a click event
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    // Show pop-up message
    showDownloadModal();
  }
  
  // Show pop-up message function
  function showDownloadModal() {
    const modal = new bootstrap.Modal(document.getElementById('downloadModal'));
    modal.show();
  }
  
  // Attach click event listener to download button
  const downloadButton = document.querySelector('.download-btn');
  downloadButton.addEventListener('click', downloadPDF);