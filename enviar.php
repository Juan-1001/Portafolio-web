<?php
    $destino = "juandavidherreracubides@gmail.com";
    // Correo al que se va a enviar el formulario

    $nombre = $_POST["nombre"];
    $numero = $_POST["numero"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];
    $pedido = $_POST["pedido"];

    $header = "Enviado desde Juan Herrera";
    $contenido = "Atentamente: " . $nombre "\nCorreo: " . $correo . "\nNúmero: " . $numero   . "\nMensaje" . $mensaje . "\nPedido" . $pedido;
    // Concadenación de los mensajes
    
    mail($destino, $contenido, $header);
    echo "<script>alert('Tu mensaje ha sido enviado correctamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\,1500")</script>";
?>