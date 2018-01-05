addEventListener(onclick time to place it){
	getElementById.innerHTML()
}

var boutonPage = document.querySelector('#changePage');
var monumentsNameMap = document.querySelector("#monument");
var monumentsNameQuizz = document.querySelector('#name');

console.log(monumentsNameMap);
console.log(monumentsNameQuizz);

boutonPage.addEventListener('click', function(e){
    e.preventDefault();
    monumentsNameQuizz.innerHTML = monumentsNameMap.innerHTML;
});