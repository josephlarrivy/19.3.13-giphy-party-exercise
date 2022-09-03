const submitBtn = document.getElementById('submitbtn');
const removeBtn = document.getElementById('removebtn');
const inputText = document.getElementById('inputtext');

function getSearchValue () {
    console.log(inputText.value);
}

















submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    getSearchValue();
    inputText.value = '';
});

// removeBtn.addEventListener('click', function() {

// })