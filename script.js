document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Send email using EmailJS
    emailjs.sendForm('service_uuirx11', 'template_0udnfq8', this)
        .then(response => {
            // Display success message
            document.getElementById('form-message').textContent = 'Message sent successfully!';
            document.getElementById('contact-form').reset(); // Clear the form
        })
        .catch(error => {
            // Display error message
            document.getElementById('form-message').textContent = 'Error sending message. Please try again.';
        });
});
