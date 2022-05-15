const countries = document.getElementById("country");
const categories = document.getElementById("type");

fetch("https://api.fondeaeloceano.xyz/v1/countries")
  .then(response => response.json())
  .then(data => {
      let countriOption = "<option value=''>Select a country</option>";
    data.forEach(item => {
        const selected = item.selected == 1 ? "selected" : "";
        countriOption += `<option value="${item.id}" ${selected}>${item.country}</option>`;
    });
    countries.innerHTML = countriOption;
});

fetch("https://api.fondeaeloceano.xyz/v1/categories")
    .then(response => response.json())
    .then(data => {
        let catOption = "<option value=''>Select a category</option>";
        data.forEach(item => {
            catOption += `<option value="${item.id}">${item.name}</option>`;
        });
        categories.innerHTML = catOption;
});


document.forms[0].onsubmit = async function( event ) {
    event.preventDefault();
    //const formData = new URLSearchParams(new FormData(this));
    let formData = [];
    const fields = document.querySelectorAll(".uk-form *[name]");
    fields.forEach(field => {
        formData.push({
            [field.name]: field.value
        });
    });
    console.log(JSON.stringify(formData));
    fetch("https://api.fondeaeloceano.xyz/v1/projects",
        {   
            method: 'POST',
            mode : 'no-cors',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: formData
        })
        .then(response => {
            console.log(response);
            if(response.status == 200)
                response.json();
        })
        .then(data => {
            console.log(data);
        });
  };