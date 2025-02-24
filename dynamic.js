function showContent(contentType) {
  // Hide both content sections by default
  document.getElementById("industriesContent").style.display = 'none';
  document.getElementById("servicesContent").style.display = 'none';

  // Show the content based on the clicked section
  if (contentType === 'industries') {
    document.getElementById("industriesContent").style.display = 'block';
  } else if (contentType === 'services') {
    document.getElementById("servicesContent").style.display = 'block';
  }
}
