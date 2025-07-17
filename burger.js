document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');
  if (burger && nav) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('active');
      nav.classList.toggle('open');
    });
  }
}); 