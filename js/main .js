// function to open side bar
$(".closeBar").click(function () {
  $(".side-bar").animate({ width: "-250px" }, 300);
  $(".menu").animate({ left: "0" }, 300);
});
$(".menu").click(function () {
  $(".side-bar").animate({ width: "250px" }, 300);
  $(".menu").animate({ left: "250px" }, 300);
});
// function smooth scroll
$(".side-bar ul li a").click(function () {
  let section = $(this).attr("href");
  let sectionHeight = $(section).offset().top;
  $("html ,body").animate({ scrollTop: sectionHeight }, 2000);
});
//function to slide singer
$(".details .singer h3").click(function () {
  $(this).next().slideToggle(500);
  $(".details .singer h3").not(this).next().slideUp(500);
});
//count down function
$(window).ready(function () {
  let countDownDate = new Date("October 30, 2024 10:30:00").getTime();
  let countdown = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds = seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    } else {
      minutes = minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    } else {
      hours = hours;
    }
    if (days < 10) {
      days = "0" + days;
    } else {
      days = days;
    }
    $("#days").html(`${days} D`);
    $("#hours").html(`${hours} H`);
    $("#minutes").html(`${minutes} M`);
    $("#seconds").html(`${seconds} S`);
    if (distance < 0) {
      clearInterval(countdown);
      $("#day").html(`00`);
      $("#hours").html(`00`);
      $("#minutes").html(`00`);
      $("#seconds").html(`00`);
    }
  }, 1000);
});
// function to check length
$("textarea").keyup(function () { 
    let textvalue = $("textarea").val();
    let mainLength = 100;
    let availiable = mainLength - (textvalue.length);
    if (textvalue.length > 100) {
        $('.alertMessage').html('"your available character finished"')
    }
    else {
        $("#senstive").html(availiable)
    }
});