const url="https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey="859f70063d72f54314ecb1e7e2e8dbc1";

const keyPress=(e)=>{
    if(e.keyCode == '13')
    {
       var query = `${url}${sehirAdi.value}&appid=${apiKey}&units=metric&lang=tr`;

       fetch(query)
       .then(hava=>{
            return hava.json();
       })
       .then(sonuclariGoster);

    }
}

const sonuclariGoster=(sonuc)=>{

    var sehir = document.querySelector('.city');
    sehir.innerText = sonuc.name;

    var derece = document.querySelector('.temp');
    derece.innerText = sonuc.main.temp;
}

const sehirAdi=document.getElementById("searchBar");
sehirAdi.addEventListener('keypress',keyPress);
