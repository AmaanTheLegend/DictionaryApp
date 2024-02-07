const input = document.querySelector('input');
const div = document.querySelector('div.infodiv');
const form = document.querySelector('form');
console.log(div)
const button = document.querySelector('.find-button');
const h2 =  document.querySelector('h2')
let newObject = {};

const putOnPage = (object) =>{
    if((object).hasOwnProperty("results")){
        console.log(true);
    }else{
        div.innerHTML=`<h2 class="headingError">Couldn't Find The Word</h2>`;
    }

    console.log(object);
    div.innerHTML = 
    
    `
    <h2 class="heading2">${object.word}</h2>
    <p class = "adjective"><i>${object.results[0].partOfSpeech} / "${object.pronunciation.all}"</i></p>
    <p><b>Definition:</b> ${object.results[0].definition}</p>
    `;

    if((object.results[0]).hasOwnProperty("examples")){
        div.innerHTML = 
        
        `
            <h2 class="heading2">${object.word}</h2>
            <p  class = "adjective"><i>${object.results[0].partOfSpeech} / "${object.pronunciation.all}"</i></p>
            <p><b>Definition:</b> ${object.results[0].definition}</p>
            <hr></hr>
            
            <p class="sentence">${object.results[0].examples}</p>
        `;
    }else{
        console.log(false);
    }

    
}

button.addEventListener('click', e=>{
    e.preventDefault();
    const wordValue = form.word.value.trim();
    form.reset();
    console.log(wordValue);

    const getWord = (word)=>{

        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                const str = this.responseText;
                const newObject = JSON.parse(str);
                console.log(newObject);
                putOnPage(newObject);
            }
        });



        xhr.open('GET', `https://wordsapiv1.p.rapidapi.com/words/${word}`);
        xhr.setRequestHeader('X-RapidAPI-Key', '6a992e48d3msh47221e96add7495p157eb3jsnbd3fc8773f28');
        xhr.setRequestHeader('X-RapidAPI-Host', 'wordsapiv1.p.rapidapi.com');

        xhr.send(data);
    }

    getWord(wordValue);

    
    
    
    // console.log(someObject);
    // putOnPage(getWord(word));
    // putOnPage();
});


form.addEventListener('submit', e=>{
    e.preventDefault();
    const wordValue = form.word.value.trim();
    form.reset();
    console.log(wordValue);

    const getWord = (word)=>{

        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                const str = this.responseText;
                const newObject = JSON.parse(str);
                console.log(newObject);
                putOnPage(newObject);
            }
        });



        xhr.open('GET', `https://wordsapiv1.p.rapidapi.com/words/${word}`);
        xhr.setRequestHeader('X-RapidAPI-Key', '6a992e48d3msh47221e96add7495p157eb3jsnbd3fc8773f28');
        xhr.setRequestHeader('X-RapidAPI-Host', 'wordsapiv1.p.rapidapi.com');

        xhr.send(data);
    }

    getWord(wordValue);

    
    
    
    // console.log(someObject);
    // putOnPage(getWord(word));
    // putOnPage();
});

