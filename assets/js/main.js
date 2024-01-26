//https://wordsapiv1.p.mashape.com/words/${word}/synonyms

const meaning = document.querySelector("#meaning");
const search = document.querySelector("#search");
const button = document.querySelector("#button");
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`

button.addEventListener('click', () => {
window.location.href = "/"
})


async function getWord() {
try {
    const getUrl = await fetch(url + `${search.value}`);
    // console.log(getUrl);
    const jsonUrl = await getUrl.json();
    // console.log(jsonUrl);
    return jsonUrl
} catch (error) {
    alert("Please enter the write word")
}
}
 
const word = await getWord();
console.log(word[0].meanings[1].synonyms);
