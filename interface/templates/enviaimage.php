<?php

    if(isset($_POST['enviar']) && $_POST['enviar'] == send){
        $uploaddir = '../imagens/';
        $uploadfile = $uploaddir.basename($_FILE['foto']['name']);

            if(move_uploaded_file($_FILE['foto']['tmp_name'],$uploadfile))
            {
                echo "imagem enviada"
            }


        
    }

?>