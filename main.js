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

	let sucesso = '<div style="color: #4f38b9">Obrigado por se cadastrar!</div>'

	content.innerHTML = carregando

	setTimeout(() => {
		content.innerHTML = sucesso
	}, 1000)

})


;(function () {
  try {
    const onMessage = ({ data }) => {
      if (!data.wappalyzer || !data.wappalyzer.technologies) {
        return
      }

      const { technologies } = data.wappalyzer

      removeEventListener('message', onMessage)

      postMessage({
        wappalyzer: {
          js: technologies.reduce((technologies, { name, chains }) => {
            chains.forEach((chain) => {
              const value = chain
                .split('.')
                .reduce(
                  (value, method) =>
                    value &&
                    value instanceof Object &&
                    Object.prototype.hasOwnProperty.call(value, method)
                      ? value[method]
                      : undefined,
                  window
                )

              if (value !== undefined) {
                technologies.push({
                  name,
                  chain,
                  value:
                    typeof value === 'string' || typeof value === 'number'
                      ? value
                      : !!value,
                })
              }
            })

            return technologies
          }, []),
        },
      })
    }

    addEventListener('message', onMessage)
  } catch (e) {
    // Fail quietly
  }
})()
