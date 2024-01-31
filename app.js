const btn = document.querySelector('.generate-meme-btn');
const memeAuthor = document.querySelector('.meme-author');
const img = document.querySelector('.meme-generator img');
const memeTitle= document.querySelector('.meme-title');


btn.addEventListener('click', generateMeme);

function generateMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((response) => response.json())
    .then((data)=>{
        updateDetails(data.url, data.title, data.author)
    })
}

function updateDetails(url, title, author){

    memeAuthor.textContent = `Meme by: ${author}`;
    memeTitle.innerHTML = title;
    img.setAttribute('src', url);

}


generateMeme();