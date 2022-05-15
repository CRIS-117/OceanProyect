const container = document.getElementById("campaings");

fetch("https://api.fondeaeloceano.xyz/v1/projects")
  .then(response => response.json())
  .then(data => {
	let content = `<div class="uk-flex uk-flex-center uk-text-center uk-grid-match" uk-grid>`;
	let delay = 0;
	data.forEach(item => {
		const element = `
		<div class="uk-width-1-2@s uk-width-1-3@m">
			<div uk-scrollspy="cls: uk-animation-fade; delay: ${delay}">
				<div class="uk-card uk-card-default uk-card-body">
					<h3 class="uk-card-title">${item.name}</h3>
					<p>${item.description}</p>
				</div>
			</div>
		</div>
		`;
		content += element;
		delay += 300;
	});
	content += `</div>`;
	container.innerHTML = content;
});