emailjs.sendForm('service_crw22mn', 'template_k0ur2yl', '#contact-form')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });