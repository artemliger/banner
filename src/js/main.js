
window.onload = function(){

    // нужная дата в формате гггг-мм-дд чч:мм:сс
    var deadline='2019-05-12 00:00:00';

    $('.countdown').downCount({
            date: deadline,
        },
        function(){
            /* действие после завершения таймера */
            alert("Не расстраивайся, мы готовим новую акцию, не пропусти!");
        });
















};