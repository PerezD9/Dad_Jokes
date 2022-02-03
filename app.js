
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log (jokeText)
    const newLi = document.createElement('Li');
    newLi.prepend(jokeText);
    jokes.prepend(newLi)
    
}

const getDadJoke = async () => {
    try{
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com', config)
    return res.data.joke;
    } catch (e){
        return "No jokes available"
    }
}


button.addEventListener('click',addNewJoke)


