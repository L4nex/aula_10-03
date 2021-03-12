$(function () {
    $(".coordenadas").mouseenter(function () {
        console.log("entrou");
        $(".valores").fadeIn();
    });
    $(".coordenadas").mousemove(function (e) {
        console.log(e.clientX, e.clientY);
        var posicoes = $(this).offset();
        var x = e.clientX - posicoes.left;
        var y = e.clientY - posicoes.top;
        $(".valores").html(`coordenadas x: ${Math.trunc(x)} e y: ${Math.trunc(x)}`);
    });
    $(".coordenadas").mouseout(function () {
        console.log("saiu");
        $(".valores").fadeOut();    
    });
});