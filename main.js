const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let nome = document.getElementById('nome').value;
	let email = document.getElementById('email').value;
	let data = {
		nome,
		email
	}
	
	let convertData = JSON.stringify(data);

	localStorage.setItem('lead', convertData)

	let content = document.getElementById('content')

	let carregando = '<p>Carregando...</p>'

	let sucesso = '<h2 style="color: #4f38b9">Obrigado por cadastrar!</h2>'

	content.innerHTML = carregando

	setTimeout(() => {
		content.innerHTML = sucesso
	}, 1000)

})

/*function salvarEmail(){
  var textEmail = document.getElementById("email");
  var email = textEmail.value;

  localStorage.setItem("email",email);

  alert("Tudo pronto para você ficar por dentro das melhores ofertas")
}


/* ScrollReveal: Mostrar elementos quando der scroll na página */
/*const scrollReveal = ScrollReveal({
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

