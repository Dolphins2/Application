$(document).ready(function() {
    // Exibe ou oculta o botão
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.volteaotopo').fadeIn(200);
        } else {
            $('.volteaotopo').fadeOut(200);
        }
    });

    // Faz animação para subir
    $('.volteaotopo').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    })
});

//consumindo a api

$(document).ready(function(){

    $('form.msg').submit(function( event ) {
        event.preventDefault(); 

        let ins;
        if($('#myCheckBox').is(':checked')){
            ins = $("input#instituicao").val();
        }else{
            ins = 0;
        }

        let dados = {
            usuario: $("input#user").val(),
            nome: $("input#fname").val(),
            unome: $("input#lname").val(),
            email: $("input#email").val(),
            senha: $("input#password").val(),
            cpf: $("input#cpf").val(),
            nascimento: $("input#datana").val(),
            cidade: $("input#cidade").val(),
            Estado: $("input#estado").val(),
            foto: $("input#foto").val(),
            instituição: ins,
            perfil: 1,
        }

        $.post({
            url: "http://localhost:3000/cadastro",
            data:dados,
            dataType: 'json',
        })
        .done(function( response ) {
            console.log(response)
            alert("Cadastro realizado com sucesso!!!")
        })
        .fail(function(){
            alert("erro!!!")
        });
    });
});