
$('#Enviar').click(function(){
    var code=document.getElementById('code').value;
    var nombre= document.getElementById('nombre').value;
    var deporte= document.getElementById('deporte').value;
    var actividad= document.getElementById('actividad').value;
    
    var ruta = "cod="+ code +"&nom=" + nombre +"&depor=" + deporte +"&acti=" + actividad;

    $.ajax({
        url: 'Student.php',
        type: 'POST',
        data: ruta
    })
    alert("Elemento Agregado")
    document.getElementById("form2").reset();
})
