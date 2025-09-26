document.getElementById('start-btn').addEventListener('click', function() {
  const circle = document.getElementById('breathing-circle');
  const text = document.getElementById('breathing-text');
  let inhale = true;

  // Reset
  circle.style.transform = 'scale(1)';
  text.textContent = 'Breathe in...';

  const interval = setInterval(() => {
    if (inhale) {
      circle.style.transform = 'scale(1.5)';
      text.textContent = 'Breathe out...';
    } else {
      circle.style.transform = 'scale(1)';
      text.textContent = 'Breathe in...';
    }
    inhale = !inhale;
  }, 4000);

  // Stop after 60 seconds (15 cycles)
  setTimeout(() => {
    clearInterval(interval);
    circle.style.transform = 'scale(1)';
    text.textContent = 'Practice complete. Carry this calm with you.';
  }, 60000);
});