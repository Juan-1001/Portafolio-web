<?php
    $destino = "juandavidherreracubides@gmail.com";
    $nombre = $_POST["nombre"];
    $numero = $_POST["numero"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];
    $pedido = $_POST["pedido"];
    $contenido = "Nombre: " . $nombre "\nCorreo: " . $correo . "\nNúmero: " . $numero   . "\nMensaje" . $mensaje . "\nPedido" . $pedido;
    mail($destino, "Contacto", $contenido);
?>