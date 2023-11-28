/* // url de l'Api
const adresse = 'https://api.openweathermap.org/data/2.5/weather?q=ville&appid=6f88826d767f323ad19cd282444924e9';

// Fonction pour récupérer la méteo
const meteo = fetch(adresse).then(async response =>{
    console.log(response);
    // Récupération de json
    const json = await response.json();
    // affichage de json dans la console
    console.log(json);
    console.log(json.name);
    console.log(json.coord.lon);
    // Recupérer les données d'un tableau
    console.log(json.weather[0].id);
}); */

// Exercice 23 DOM et Fetch
const input = document.querySelector("#ville");
const bt = document.querySelector('#bt');
const image = document.querySelector("#image");
    

bt.addEventListener('click', ()=>{
    let ville = input.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=6f88826d767f323ad19cd282444924e9`;
    
    const nom = document.querySelector('#nom');
    const temps = document.querySelector('#temps');
    const temperature = document.querySelector('#temperature');
    
    
    const meteo = fetch(url).then(async response =>{
        const json = await response.json();

        if(response.status===200){
            // url de l'image météo
            let imageMeteo = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
            // ajout de l'attribut image meteo
            image.setAttribute("src", imageMeteo);
            nom.textContent = json.name;
            temps.textContent = json.weather[0].main;   
            temperature.textContent = (json.main.temp-273).toFixed(2);
        }
        else{
            nom.textContent = "La ville n'existe pas";
            temps.textContent = "";
            temperature.textContent = "";
            
        }
       
    });
    
});

