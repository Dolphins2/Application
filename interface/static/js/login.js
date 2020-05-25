$(document).ready(function(){
    $("form#envialog").submit(function(event){
        event.preventDefault(); 

        let log = $("input#emaillo").val();
        console.log(log);

        if(($("input#emaillo").val()) && ($("input#senhalo").val())){
            alert("funfo")
        }
        else{
            alert("Os campos com * devem ser obrigatoriamente preenchidos")
        }
    })
})