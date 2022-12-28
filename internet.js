let title = document.getElementById('title');
let ul = document.getElementById('ul');
let btn = document.getElementById('btn');


window.onload = ()=>{
    if(window.navigator.onLine){
        Online();
    }else{
        Offline();
    }
}
window.addEventListener('online',()=>{
    Online();
})
window.addEventListener('offline',()=>{
    Offline();
})


function Offline(){
title.innerHTML = `Offline`
title.style.color = 'black'
ul.style.display = 'block'
btn.style.display='block'
}
function Online(){
title.innerHTML = `Online`
title.style.color='green'
ul.style.display = 'none'
btn.style.display='none'
}
