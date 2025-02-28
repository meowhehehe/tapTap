let upgToXP = false;
let upgTo7 = false;
let upgTo8 = false;
let upgTo10 = false;

const btnUpd = document.getElementById('upd');
const btnClk = document.getElementById('clk');
const img = document.getElementById('exp');
const style = document.getElementById('style');
const title = document.getElementById('title__txt');
const version = document.getElementById('version');


let win = document.getElementById('place');

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

btnUpd.addEventListener('click', windowsXP);

function windowsXP(){
    const price = 5;
    if(k>=price && !upgToXP){
        upgToXP = true;
        
        k = k - price;
        p.textContent = k;
        
        style.href = 'wXp.css';
        
        
        version.textContent = "Microsoft Windows XP"
        
        img.src = 'https://static.wikia.nocookie.net/logopedia/images/7/7b/Internet_Explorer_6.05_SP1_Logo.png';

        btnClk.addEventListener('click', function() {
            k = k + 1; 
            p.textContent =  k; 
        });
    }
}

btnUpd.addEventListener('click', windows7);

function windows7(){
    const price = 10;
    if(k>=price && !upgTo7){
        upgTo7 = true;
        
        k = k - price;
        p.textContent = k;
        
        style.href = 'w7.css';

        version.textContent = "Microsoft Windows 7"

        img.src = 'https://static.wikia.nocookie.net/logopedia/images/a/a9/Internet_Explorer_logo_2007.svg';

        const br = document.createElement('div');
        br.id = 'br';
        win.appendChild(br);

        title.textContent = 'Clicker';
        br.appendChild(title);

        btnClk.addEventListener('click', function() {
            k = k + 1; 
            p.textContent =  k; 
        });
    }
}

btnUpd.addEventListener('click', windows8);

function windows8(){
    const price = 20;
    if(k>=price && !upgTo8){
        upgTo8 = true;

        k = k - price;
        p.textContent = k;

        style.href = 'w8.css';
        
        version.textContent = "Microsoft Windows 8"
        
        img.src = 'https://static.wikia.nocookie.net/logopedia/images/6/6e/Internet_Explorer_9.svg';

        btnClk.addEventListener('click', function() {
            k = k + 1; 
            p.textContent =  k; 
        });
    }
    
}

btnUpd.addEventListener('click', windows10);

function windows10(){
    const price = 40;
    if(k>=price && !upgTo10){
        upgTo10 = true;

        k = k - price;
        p.textContent = k;

        style.href = 'w10.css';
        
        version.textContent = "Microsoft Windows 10"
        
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/512px-Microsoft_Edge_logo_%282019%29.svg.png?20220108180202';

        btnClk.addEventListener('click', function() {
            k = k + 1; 
            p.textContent =  k; 
        });
    }
    
}