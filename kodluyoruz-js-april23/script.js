


function name() {
    let greeting = document.querySelector("#myName")
    greeting.innerHTML = prompt("Ad Soyad")



    var date = new Date().toLocaleString('tr-TR');

    let clock = document.getElementById("myClock");
    clock.innerHTML = date;
}

name();