function countDown(){
    //let countDownDate = new Date(Date.UTC(2022, 4, 16, (14 - 2), 0, 0)).getTime();
    let countDownDate = new Date().getTime();
            
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
            document.getElementById("buyContainer").style.display = "flex";
        }
    }, 1000);
}


function buyNow(){
    document.getElementById("buyContainer").style.display = "none";
    document.getElementById("ambitionBtn").style.display = "block";
    document.getElementById("ambitionBtn").classList.add("ambitionButton");
}


countDown();