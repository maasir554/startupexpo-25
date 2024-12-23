
const myForm = document.querySelector("#registration-form-element");

myForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    const form = evt.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    console.log(data);
    try {
        const response = await fetch('https://server.ecellnitb.in/startup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data), 
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Form submitted successfully:', result);
        } else {
            console.error('Error submitting form:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

})
