const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
  code.addEventListener('input', (e) => {
    const nextInput = codes[idx + 1];
    if (e.target.value && nextInput) {
      nextInput.focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (!e.target.value && idx > 0) {
        const prevInput = codes[idx - 1];
        prevInput.focus();
      }
    }
  });

  // Automatically focus on the first input field when the page loads
  if (idx === 0) {
    code.focus();
  }
});
