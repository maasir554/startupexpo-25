
const myForm = document.querySelector("#registration-form-element");


function parseFormData(formData) {
    const parsedData = {};
    for (const [key, value] of formData.entries()) {
        if (!isNaN(value) && value.trim() !== "" && key != "contact" && key!= "revenue" && key!="valuation") {
            // Convert numeric strings to numbers
            parsedData[key] = Number(value);
        } else if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
            // Convert "true"/"false" strings to booleans
            parsedData[key] = value.toLowerCase() === "true";
        } else {
            // Keep as string
            parsedData[key] = value;
        }
    }
    return parsedData;
}

myForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    const form = evt.target
    const formData = new FormData(form)
    // let data = Object.fromEntries(formData.entries());
    const data = parseFormData(formData);
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
