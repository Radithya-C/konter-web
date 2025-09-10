// script.js
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 20px #5D3FD3';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '0 0 10px #5D3FD3';
  });
});