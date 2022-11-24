// Set the date we're counting down to

countdown('team1-coundown',document.getElementById('timmer1').textContent)
countdown('team2-coundown',document.getElementById('timmer2').textContent)
countdown('team3-coundown',document.getElementById('timmer3').textContent)
countdown('team4-coundown',document.getElementById('timmer4').textContent)

function countdown(element,time){
    var countDownDate = time*1;
    console.log(countDownDate)

    var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(element).innerHTML = "<span>Count: </span>"+hours + ":"
    + minutes + ":" + seconds + "";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById(element).innerHTML = "Trận đấu đã diễn ra";
    }
    }, 1000);
}