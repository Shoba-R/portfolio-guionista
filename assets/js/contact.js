const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
// serviceID - templateID- #form- publicKey
    emailjs.sendForm('service_t6yosfe','template_pfrphma','#contact-form','wxUo-iVjA1Iyd4HYz')
    .then(() => {
        //mostrar mensaje enviado
        contactMessage.textContent = 'Mensaje enviado'
        //borrar mensaje despues de 5 segundos
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
        //borrar los campos
        contactForm.reset()

    }, () => {
        //mostrar mensaje de error
        contactMessage.textContent = 'Error- El mensaje no fue enviado'
    })
}
contactForm.addEventListener('submit', sendEmail)