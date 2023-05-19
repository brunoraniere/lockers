$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('#surf .ecommerce-item button').click(function(){
        const destino = $('#contato');
        const produto = $(this).parent().find('h3').text();

        $('#produto').val(produto);
        
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('#surf .ecommerce-item button').click(function(){
        const destino = $('#contato');
        const produto = $(this).parent().find('button').text();

        $('#modalidade').val(produto);
        
    })
})