function searchCountry(){
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res => res.json())
    .then(data => {
        if (data.length > 0) {
            let country = data[0];
            flagImg.src = country.flags.png;
            name.innerText = `Name: ${country.name.common}`;
            officialName.innerText = `Official Name: ${country.name.official}`;
            region.innerText = `Region: ${country.region}`;
            population.innerText = `Population: ${country.population}`;
        } else {
            alert("Country not found. Please try again.");
        }
    })
    
}