const url =  'https://task.adrardev.fr/task/all';
const taches = document.querySelector('#tasks');
const tasks = fetch(url).then(async response=>{
    const json = await response.json();
    console.log(json);
    json.forEach(element =>{
        const article = document.createElement('article');
        article.setAttribute('id', element.id);
        const p = document.createElement('p');
        p.textContent = element.name;
        const statut = document.createElement('p');
        statut.textContent = element.status;
        console.log(element.name);
        article.appendChild(p);
        article.appendChild(statut);
        article.appendChild(article);
        });
});

