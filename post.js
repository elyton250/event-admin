document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#form1'); // Select the form element
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formDataObject = {
            title: form.elements['title'].value,
            eventDate: form.elements['date'].value,
            description: form.elements['description'].value
        };
        var formDataJson =  JSON.stringify(formDataObject);
        console.log('Form Data:', formDataObject);
        console.log('Form Data as JSON:', formDataJson);
        
        fetch('https://upload-form-production.up.railway.app/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: formDataJson,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Optionally, handle success response here
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, handle error here
        });
    });
});
