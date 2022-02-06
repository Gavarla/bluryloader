const text=document.querySelector('.text')
const bg=document.querySelector('.bg')
console.log(bg)
let count=0;
let int= setInterval(blurring,30)
function blurring(){
    count++
    if(count>99){
        clearInterval(int)
    }
    // console.log(count);
    text.innerText=`${count}%`
    text.style.opacity= scale(count,0,100,1,0);
    bg.style.filter = `blur(${scale(count,0, 100,30,0 )}px)`;
    
} 
 const scale=(num,in_min,in_max ,out_min,out_max)=>{
     return((num-in_min)*(out_max-out_min))/(in_max-in_min)+out_min
 }