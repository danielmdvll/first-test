



let boton= document.querySelector('button');

boton.onclick= function(){

alert('Au!, duele!');

}

let Image = document.querySelector('img');


Image.onclick = function(){

let MySrc= Image.getAttribute('src');


if (MySrc=== 'images/osito-bano.jpg'){

Image.setAttribute('src', 'images/osito-estudia.jpg');


}

else{
Image.setAttribute('src', 'images/osito-bano.jpg');

}
}