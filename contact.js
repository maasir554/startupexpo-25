console.log("clicked");
document.getElementById('footer-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    const submitButton = document.getElementById('submit-footer');
    const originalText = submitButton.textContent; // Save the original button text
    submitButton.disabled = true; // Disable the button
    submitButton.textContent = 'Wait...'; // Change button text to "Wait..."

    const formData = {
        name: document.getElementById('namecu').value,
        email: document.getElementById('emailcu').value,
        message: document.getElementById('messagecu').value,
    };

    console.log(JSON.stringify(formData));

    try {
        const response = await fetch('https://server.ecellnitb.in/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message recorded successfully!');
            document.getElementById('footer-form').reset();
            
        } else {
            document.getElementById('footer-form').reset();
            alert('Error submitting form. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('footer-form').reset();
        alert('An error occurred. Please try again.');
    } finally {
        submitButton.disabled = false; // Re-enable the button
        submitButton.textContent = originalText; // Restore the original button text
    }
});