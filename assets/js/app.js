$(document).ready(function(){
    $("#daily").click(function(){
        $("#daily").addClass("active");
        $("#weekly").removeClass("active");
        $("#monthly").removeClass("active");
        $("#hourswork").text("5 hrs");
        $("#previouswork").text("Previous - 7 hrs");
        $("#hoursplay").text("1 hr");
        $("#previousplay").text("Previous - 2 hrs");
        $("#hoursstudy").text("0 hrs");
        $("#previousstudy").text("Previous - 1 hr");
        $("#hoursexercise").text("1 hr");
        $("#previousexercise").text("Previous - 1 hr");
        $("#hourssocial").text("1 hr");
        $("#previoussocial").text("Previous - 3 hrs");
        $("#hoursself").text("0 hrs");
        $("#previousself").text("Previous - 1 hr");
    });

    $("#weekly").click(function(){
        $("#daily").removeClass("active");
        $("#weekly").addClass("active");
        $("#monthly").removeClass("active");
        $("#hourswork").text("32 hrs");
        $("#previouswork").text("Previous - 36 hrs");
        $("#hoursplay").text("10 hrs");
        $("#previousplay").text("Previous - 8 hrs");
        $("#hoursstudy").text("4 hrs");
        $("#previousstudy").text("Previous - 7 hrs");
        $("#hoursexercise").text("4 hrs");
        $("#previousexercise").text("Previous - 5 hrs");
        $("#hourssocial").text("5 hrs");
        $("#previoussocial").text("Previous - 10 hrs");
        $("#hoursself").text("2 hrs");
        $("#previousself").text("Previous - 2 hrs");
    });

    $("#monthly").click(function(){
        $("#daily").removeClass("active");
        $("#weekly").removeClass("active");
        $("#monthly").addClass("active");
        $("#hourswork").text("103 hrs");
        $("#previouswork").text("Previous - 128 hrs");
        $("#hoursplay").text("23 hrs");
        $("#previousplay").text(" Previous - 29 hrs");
        $("#hoursstudy").text("13 hrs");
        $("#previousstudy").text("Previous - 19 hrs");
        $("#hoursexercise").text("11 hrs");
        $("#previousexercise").text("Previous - 18 hrs");
        $("#hourssocial").text("21 hrs");
        $("#previoussocial").text(" Previous - 23 hrs");
        $("#hoursself").text("7 hrs");
        $("#previousself").text("Previous - 11 hrs");
    });
});