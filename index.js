const h = document.getElementById('h');
const m = document.getElementById('m');
const s = document.getElementById('s');
const btn = document.querySelector('button');



btn.addEventListener('click', ()=>{
  let r = Number(document.querySelector('input').value);
  
  let time = setInterval(()=>{
    r -= 1

    h.innerText = Math.floor((r / 60) / 60) < 10 ? '0' + Math.floor((r / 60) / 60) : Math.floor((r / 60) / 60);
    m.innerText = (Math.floor(r / 60) > 60 ? Math.floor(r / 60) - 60 : Math.floor(r / 60)) < 10 ? '0' + (Math.floor(r / 60) > 60 ? Math.floor(r / 60) - 60 : Math.floor(r / 60)) : (Math.floor(r / 60) > 60 ? Math.floor(r / 60) - 60 : Math.floor(r / 60));
    s.innerText = (r % 60) < 10 ? '0' + (r % 60) : (r % 60);
    
    if(r <= 0){
      clearInterval(time)
    } 
  },1000)
}) 


