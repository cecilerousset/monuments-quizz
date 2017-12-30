//<body onLoad="js_function_1()>


//-------------NOMBRES ALEATOIRES POUR IMAGES--------------
var randomnumber1 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
var randomnumber2 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
var randomnumber3 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

//------------------LISTE DES MONUMENTS--------------------
var JSONdata = {
	"0" : "img/angkor-vat1.jpg",
    "1" : "img/big-ben.jpg",
    "2" : "img/colisée-rome.jpg",
    "3" : "img/empire-state-building.jpg",
    "4" : "img/grande-muraille-chine.jpg",
    "5" : "img/Machu-Picchu.jpg",
    "6" : "img/opera-sydney.jpg",
    "7" : "img/pyramide-gizeh.jpg",
    "8" : "img/taj-mahal.jpg",
    "9" : "img/tour-eiffel.jpg",
};

//-----------------AVOIR MONUMENTS DIFFERENTS---------------
while(randomnumber2==randomnumber1){
    randomnumber2 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
}

while(randomnumber3==randomnumber2 || randomnumber3==randomnumber1){
    randomnumber3 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
}

var img1 = JSONdata[randomnumber1];
var img2 = JSONdata[randomnumber2];
var img3 = JSONdata[randomnumber3];

//-------------REMPLACE LES IMAGES DANS HTML----------------
var test1 = document.querySelector('#monuments .picture0');
test1.src = img1;
var test1 = document.querySelector('#monuments .picture1');
test1.src = img2;
var test1 = document.querySelector('#monuments .picture2');
test1.src = img3;

//------------------------TITRE-----------------------------
var JSONtitle = {
    "0" : "Angkor",
    "1" : "Big Ben",
    "2" : "Colisée",
    "3" : "Empire State Building",
    "4" : "Grande Muraille",
    "5" : "Machu Picchu",
    "6" : "Opera Sydney",
    "7" : "Pyramide Gizeh",
    "8" : "Taj Mahal",
    "9" : "Tour Eiffel",
};

var randomnumber4 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

var question;

if (randomnumber4 == 1){
    question = JSONtitle[randomnumber1];
}
if (randomnumber4 == 2){
    question = JSONtitle[randomnumber2];
}
if (randomnumber4 == 3){
    question = JSONtitle[randomnumber3];
}


console.log(randomnumber1);
console.log(randomnumber2);
console.log(randomnumber3);

console.log(randomnumber4);

console.log(question)


//-----------------------QUESTION---------------------------

document.querySelector('#name').innerHTML = question;

//-----------------------CLIQUER----------------------------
var modal = document.querySelector('.modal-content');
var num1 = document.querySelector('.picture0');
var num2 = document.querySelector('.picture1');
var num3 = document.querySelector('.picture2');


num1.addEventListener('click', function(e){
    if(randomnumber4 == 1){
	    modal.classList.add("modal-content-visible");
    };
});

num2.addEventListener('click', function(e){
    if(randomnumber4 == 2){
        modal.classList.add("modal-content-visible");
    };
});

num3.addEventListener('click', function(e){
    if(randomnumber4 == 3){
        modal.classList.add("modal-content-visible");
    };
});
