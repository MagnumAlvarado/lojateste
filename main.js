/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
  )
  
  var btnRegistar = document.getElementById("btnRegistrar")
btnRegistar.onclick = salvarEmail;

function salvarEmail(){
    var textEmail = document.getElementById("email");
    var email = textEmail.value;

    localStorage.setItem("email",email);

    alert("Tudo pronto para você ficar por dentro das melhores ofertas")
}