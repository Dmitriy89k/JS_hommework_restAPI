

  axios.get('http://localhost:8080/countries')
  .then(response => {
    for (country of response.data) {
      addCountrytoDOM(country);
      fillCountrySelect(country);
    }
  })

  axios.get('http://localhost:8080/authors')
  .then(response => {
    for (author of response.data) {
      addAuthortoDOM(author);
    }
  })

document.getElementById('submit_form').onclick = () => {
  let name = document.getElementById('country_name');

  if (name.value) {
    axios.post('http://localhost:8080/countries' , {
      name: name.value
    })
    .then(response => addCountrytoDOM(response.data))
  } else {
    name.placeholder = "CANNOT BE EMPTY"
  }
}

let addCountrytoDOM = (country) => {
  let ul = document.getElementById('countries');

  let li = document.createElement('li');
  li.innerText = country.name;

  ul.appendChild(li);
}

let fillCountrySelect = (country) => {
  let countrySelect = document.getElementById('country-select');
  let option = document.createElement('option');
  option.innerText = country.name;
  option.value = country.id;
  countrySelect.appendChild(option);
}


document.getElementById('button-authors').onclick = () => {
  let name = document.getElementById('author');
  let bio = document.getElementById('author-bio');
  let country = document.getElementById('country-select');
  let id = country[country.selectedIndex].value;
  console.log(id);
  id = parseInt(id);
  console.log(id);
    if (name.value && bio.value) {
    axios.post('http://localhost:8080/authors' , {
      name: name.value,
      bio: bio.value,
      country_id: id
    })
      .then(response => addAuthortoDOM(response.data))
  } else {
    name.placeholder = "CANNOT BE EMPTY"
  }
}

let addAuthortoDOM = (author) => {
  let ul = document.getElementById('authors');

  let li = document.createElement('li');
  let bio = document.createElement('p');
  li.innerText = author.name;
  bio.innerText = author.bio;


  ul.appendChild(li);
  ul.appendChild(bio);
}
