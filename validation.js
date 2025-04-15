// Simulate form submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("contactConfirmation").classList.remove("d-none");
    this.reset();
  });

// validation
document.getElementById("summary-btn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const time = document.getElementById("time").value;
  const notes = document.getElementById("notes").value.trim();

  const nameRegex = /^[A-Za-z\\s]{2,}$/;
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  let errorMessages = [];

  if (!nameRegex.test(name)) {
      errorMessages.push("Please enter a valid name.");
  }

  if (!emailRegex.test(email)) {
      errorMessages.push("Please enter a valid email address.");
  }

  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));  
    return;
}


  let summary = `📋 Booking Summary:\\n`;
  summary += `Name: ${name}\\n`;
  summary += `Email: ${email}\\n`;
  summary += `Preferred Time: ${time ? time : 'Not selected'}\\n`;
  summary += `Notes: ${notes || 'None'}`;

  alert(summary);
});