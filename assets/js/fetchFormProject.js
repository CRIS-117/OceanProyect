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