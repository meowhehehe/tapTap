const btnUpd = document.getElementById('upd');
const btnClk = document.getElementById('clk');

function clickUpd(){
    btnUpd.classList.toggle('active');
    setTimeout(function(){
        btnUpd.classList.remove('active')}, 50);
};

function click(){
    btnClk.classList.toggle('active');
    setTimeout(function(){
        btnClk.classList.remove('active')}, 50);
}

btnUpd.addEventListener('click', clickUpd);
btnClk.addEventListener('click', click);

let k = 0; 
const p = document.getElementById('count');

btnClk.addEventListener('click', function() {
    k++; 
    p.textContent =  k; 
});

btnUpd.addEventListener('click', updPrice)

function updPrice(){
    const price = 10;
    if(k>=price){
        k = k - price;
        p.textContent = k;
        const style = document.getElementById('style');
        style.href = 'wXp.css';
        const version = document.getElementById('version');
        version.textContent = "Microsoft Windows XP"
        const img = document.getElementById('exp');
        img.src = 'https://static.wikia.nocookie.net/logopedia/images/7/7b/Internet_Explorer_6.05_SP1_Logo.png';
    };
}
