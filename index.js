function countDown(){
    let countDownDate = new Date(Date.UTC(2022, 4, 16, (14 - 2), 0, 0)).getTime();
    //let countDownDate = new Date().getTime();
            
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").style.display = "none";
            document.getElementById("buyNow").style.display = "block";
        }
    }, 1000);
}


function buyNow(){
    window.location.href = "https://solarare.com/grainers";
}


countDown();