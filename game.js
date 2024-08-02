let cursor = document.querySelector('.cursor');
let holes = document.querySelectorAll('.hole');
 let scoreE1 = document.getElementById('score');
  let score = 0;
document.addEventListener('mousemove', (e)=> {
 cursor.style.left = e.pageX + 'px';
 cursor.style.top = e.pageY + 'px';
});


document.addEventListener('mousedown',()=>{
 cursor.classList.add('active');
});

document.addEventListener('mouseup',()=>{
  cursor.classList.remove('active');
 });
 
 function run(){
  let i = Math.floor(Math.random() * holes.length);
   let hole = holes[i];
   let img = document.createElement('img');
   img.src = 'mole.png';
   hole.appendChild(img);

   img.addEventListener('click',()=> {
    img.src = 'mole-whacked.png';
    score += 10;
    scoreE1.innerText = score;
    setInterval(() => {
    
      hole.removeChild(img);
       run();
     }, 500);
   });
  
   timer = setInterval(() => {
    
    hole.removeChild(img);
     run();
   }, 1500);

 }

 run();