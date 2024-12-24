
const expoForm = document.querySelector("#registration-form-element");


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

expoForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();

    const form = evt.target
    const formData = new FormData(form)
    const submitBtn = document.querySelector("#submit-expo");

    submitBtn.disabled = "true"
    submitBtn.innerHTML = "Submitting..."
    
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
            alert("Registration successful.");

        } else {
            console.error('Error submitting form:', response.status, response.statusText);
            alert("Error submitting the form")
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

})

// const footerForm = document.querySelector("#footerForm")


//   footerForm.addEventListener("submit", async(evt)=>{

//     evt.preventDefault();
//     try{
//         response = await 
//         fetch("https://server.ecellnitb.in/email", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               email: document.getElementById("emailcu").value,
//               name: document.getElementById("namecu").value,
//               message: document.getElementById("messagecu").value

//             }),
//           })

//           if(response.ok){
//             console.log("submitted form successfully");
//           }
//     }
//     catch(err){
//         console.log("error occoured while submitting the form.", err);
//     }

//   })