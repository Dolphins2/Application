
    $(document).ready(function() {

        $(function(){
            $('form.msg').submit(function(){
                

                $.ajax({
                    type:'POST',
                    url:'http://localhost:3000/cadastro',
                    data:{
                        usuario: $("#user").val(),
                        nome: $("#fname").val(),
                        unome: lastname = $("#lname").val(),
                        email: $("#email").val(),
                        senha: $("#password").val(),
                        nascimento: "24/01/1994",
                        cidade: "Belém",
                        Estado: "Paraiba",
                        foto: "ref",
                        instituição: "privada",
                        declaração: "ref",
                        perfil: 1,
                    }
                }).done(function(e){
                    alert('Cadastro feito com Sicesso!')
                })
                return false
            })
        })

    });