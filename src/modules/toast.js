const showToast = (message) => {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = '';
  }, 3000);
}

module.exports = showToast;
