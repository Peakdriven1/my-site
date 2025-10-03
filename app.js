// Fade-in on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.classList.add('fade-in-visible');
      observer.unobserve(entry);
    }
  });
},{ threshold:0.1 });

sections.forEach(section => observer.observe(section));
