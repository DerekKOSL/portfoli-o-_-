function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`; // Removed seconds here
    document.getElementById('current-time').textContent = timeString;
}

// Update the time every minute (60000 milliseconds)
setInterval(updateTime, 1000);

// Initial call to display the time immediately when the page loads
updateTime();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.offsetTop;
        const distance = targetPosition - startPosition;
        const duration = 1500; // Adjust this value (in milliseconds) for the desired speed
        let start = null;
  
        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
          if (progress < duration) window.requestAnimationFrame(step);
        }
  
        window.requestAnimationFrame(step);
      }
    });
  });
  
  // Easing function (Cubic Bezier) for a smoother start and end
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;

  }
  function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById('current-date').textContent = dateString;
}

// Update the time every minute
setInterval(updateTime, 60000);

// Update the date once when the page loads
updateDate();



