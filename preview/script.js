'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');


// const width = box.clientWidth; // bez CSS stylow 
// const height = box.clientHeight; 

// const width = box.offsetWidth;// znaczenia ktore byly zadane w CSS 
// const height = box.offsetHeight; 

const width = box.scrollWidth; 
const height = box.scrollHeight; // bierze znaczenie scrolla  
console.log(width, height);

btn.addEventListener('click', ()=>{
    // box.style.height = box.scrollHeight + 'px'; //dodajemy cala wysokosc pod wzledem scrolla 
    console.log(box.scrollTop); // ile tekstu juz przeczytane, niwidoczne 
})

//scrollTop i scrollLeft mogabyc modyfikowane 
console.log(box.getBoundingClientRect())// otzymujemy kordynaty elementa, w js kordynaty zaczynaja sie w gornej lewej cesci ekranu. getBoundingClientRect()- metoda
console.log(box.getBoundingClientRect().top); // moznapisac y  

const style  = window.getComputedStyle(box); // wszystkie computed style ktore zostaly zastosowane do elementa 
console.log(style);// getComputedStyle pozwala pracowac z pseufoelementami na stronie HTML 
console.log(style.display);// jezeli interesuje jaks konkretna wlasiwosc, my ja dopisujemy po kropce

// Inline style sa uzyte w piewszej kolejnosci niz style zadane w CSS pliku 

console.log(document.documentElement.clientWidth); // ile elementow zostalo przeczytanych, tylko dla czytania 
console.log(document.documentElement.scrollTop); // mozna modyfikowac 

window.scrollBy(0, 400); // przyjmuje dwa argumenty x i y, kordynaty dokad przerzuci strone, dziala od bierzacej pozycji 
window.scrollTo(0, 400);// 400 px od gornej czesci strony 