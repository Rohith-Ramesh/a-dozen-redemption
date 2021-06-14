window.addEventListener('DOMContentLoaded',main)

function main(){
    let hercules = document.getElementById('hercules')
    hercules.addEventListener('mouseenter',()=>{
        document.querySelector('html').style.setProperty('--display','block');
    })
    hercules.addEventListener('mouseleave',()=>{
        document.querySelector('html').style.setProperty('--display','none');
    })
}