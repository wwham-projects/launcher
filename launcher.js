// Keep the launch within the click gesture so browsers can open the projects tab.
// Reuse the current tab for Scratch, matching the original launcher behaviour.
document.querySelectorAll('[data-launch]').forEach((button) => {
  button.addEventListener('click', () => {
    window.open('https://projects.raspberrypi.org/en/technology/scratch', '_blank', 'noopener,noreferrer');
    window.location.href = 'https://scratch.mit.edu/projects/editor';
  });
});
