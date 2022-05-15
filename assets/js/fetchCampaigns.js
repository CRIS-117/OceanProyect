const container = document.getElementById("campaings");

fetch("https://api.fondeaeloceano.xyz/v1/projects")
  .then(response => response.json())
  .then(data => {
	let content = `<div class="uk-flex uk-flex-center uk-text-center uk-grid-match uk-grid-collapse" uk-grid>`;
	let modals = "";
	let delay = 0;
	data.forEach(item => {
		const element = `
		<div class="uk-width-1-2@s uk-width-1-3@m">
			<div uk-scrollspy="cls: uk-animation-fade; delay: ${delay}">
				<div class="uk-card uk-card-default uk-card-body">
					<a href="#project-${item.id}" uk-toggle>
						<div class="uk-inline">
							<img src="${item.image}" width="" height="" alt="">
							<div class="uk-overlay uk-overlay-primary uk-position-bottom">
								<h3>${item.name}</h3>
								<p>${truncate(item.description, 50, true)}</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		`;
		content += element;
		const modal = `
		<div id="project-${item.id}" class="uk-modal-full" uk-modal>
			<div class="uk-modal-dialog">
				<button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
				<div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
					<div class="uk-background-cover" style="background-image: url('${item.image}');" uk-height-viewport></div>
					<div class="uk-padding-large">
						<h1>${item.name}</h1>
						<b>Full description:</b>
						<div uk-overflow-auto>${item.description}</div>
						<div class="uk-margin-small-top"><b>Amount to request:</b> ${item.amount} USD</div>
						<div class="uk-margin-small-top"><b>Responsible:</b> ${item.responsible}</div>
						<div class="uk-margin-small-top"><b>Email:</b> ${item.email}</div>
						<div class="uk-margin-small-top"><b>Asociation:</b> ${item.association_name}</div>
						<div class="uk-margin-small-top"><b>Address:</b> ${item.association_address}</div>
						<div class="uk-margin-small-top"><b>Phone:</b> ${item.association_phone}</div>
						<div class="uk-margin-small-top"><b>Category:</b> ${item.category}</div>
						<div class="uk-margin-small-top"><b>Country:</b> ${item.country}</div>
						<div class="uk-margin-small-top"><b>City:</b> ${item.city}</div>
					</div>
				</div>
			</div>
		</div>
		`;
		modals += modal;
		delay += 300;
	});
	content += `</div>`;
	container.innerHTML = content + modals;
});

function truncate( str, n, useWordBoundary ){
  if (str.length <= n) { return str; }
  const subString = str.substr(0, n-1); // the original check
  return (useWordBoundary 
    ? subString.substr(0, subString.lastIndexOf(" ")) 
    : subString) + "&hellip;";
};