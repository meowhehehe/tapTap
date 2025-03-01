let upgToXP = false;
let upgTo7 = false;
let upgTo8 = false;
let upgTo10 = false;
let upgMeow = false;

const btnUpd = document.getElementById('upd');
const btnClk = document.getElementById('clk');
const img = document.getElementById('exp');
const style = document.getElementById('style');
const title = document.getElementById('title__txt');
const version = document.getElementById('version');

let win = document.getElementById('place');
let suhariki = document.getElementById('suhariki');

suhariki.textContent = '5';

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
    price = 5;
    if(k>=price && !upgToXP){
        upgToXP = true;
        
        suhariki.textContent = '10';

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
        
        suhariki.textContent = '20';
       
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

        suhariki.textContent = '40';
        
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

        suhariki.textContent = '100';
        
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

btnUpd.addEventListener('click', meow);

function meow(){
    const price = 100;
    if(k>=price && !upgMeow){
        upgMeow = true;

        const woof = document.getElementById('win');
        woof.style.display = 'none';

        style.href = 'meow.css';

        const cocacola = document.getElementById('chipsi');
        const kitty = document.createElement('img');
        
        const pepsi = document.createElement('p');
        pepsi.textContent = '??????????';
        cocacola.appendChild(pepsi);
        pepsi.id = 'pepsi';
        
        kitty.src = 'https://68.media.tumblr.com/c0df6288f72fa72b32fa9712584afcf2/tumblr_oq1wi00ac51vbdodoo1_500.gif';
        kitty.id = 'kitty';
        document.body.appendChild(kitty);
    }   
}