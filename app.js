//giphy key: 51m0wO8gYEdB7dx7kJBzsdzMs79X5WFp
const submitBtn = document.getElementById('submitbtn');
const removeBtn = document.getElementById('removebtn');
const inputText = document.getElementById('inputtext');
const gifDiv = document.getElementById('gifdiv');

async function getData () {
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { 
        q: inputText.value,
        api_key: '51m0wO8gYEdB7dx7kJBzsdzMs79X5WFp' 
    }});

    let newDiv = document.createElement('div');
    newDiv.classList.add('gifs');
    
    newDiv.setAttribute.style.backgroundImage = `url(${response.data.data[0].url})`;


    
    console.log(response.data.data[0].url);
    console.log(`url(${response.data.data[0].url})`);







    gifDiv.append(newDiv);
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    getData();
    inputText.value = '';
});

// removeBtn.addEventListener('click', function() {

// })