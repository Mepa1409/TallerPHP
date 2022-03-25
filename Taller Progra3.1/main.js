
$('#Enviar').click(function () {
    var code = document.getElementById('code').value;
    var nombre = document.getElementById('nombre').value;
    var deporte = document.getElementById('deporte').value;
    var actividad = document.getElementById('actividad').value;

    var ruta = "cod=" + code + "&nom=" + nombre + "&depor=" + deporte + "&acti=" + actividad;

    $.ajax({
        url: 'Student.php',
        type: 'POST',
        data: ruta
    })
    alert("Elemento Agregado")
    document.getElementById("form2").reset();
})
$('#Buscar').click(function () {
    var result = document.getElementById("info");
    var xmlhttp;
    codeI = document.getElementById('codeSearch').value;


    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = ActiveXObject("Microsoft.XMLHTTP");
    }

    if (codeI === 0) {
        result.innerHTML = "";
    } else {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                var datos = JSON.parse(xmlhttp.responseText);
                mostrarPersona(datos, codeI);



            }

        }
        xmlhttp.open("GET", "info.json", true);
        xmlhttp.send();
        /*var code=document.getElementById('code').value;
        var ruta = "cod="+code;
        $.ajax({
            url: 'Student.php',
            type: 'GET',
            data: ruta
        })*/
    }

})
function shearchData(codeI) {
    var result = document.getElementById("info");
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = ActiveXObject("Microsoft.XMLHTTP");
    }

    if (codeI === 0) {
        result.innerHTML = "";
    } else {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                var datos = JSON.parse(xmlhttp.responseText);
                var x = encontarPersona(datos, codeI);
                var mjs = (x === true) ? "<span class = 'econtrado' >Si fue encontrado </span>" :
                    "<span class = 'noEcontrado'>No fue encontrado</span>:"
                result.innerHTML = mjs;


            }

        }
        xmlhttp.open("GET", "info.json", true);
        xmlhttp.send();
        /*var code=document.getElementById('code').value;
        var ruta = "cod="+code;
        $.ajax({
            url: 'Student.php',
            type: 'GET',
            data: ruta
        })*/
    }
}
function encontarPersona(objectJSON, nombreIngresado) {
    var arr = [];
    for (var i in objectJSON) {
        var persona = objectJSON[i];
        arr.push(persona.code);//objectJSON[i].code
    }
    return arr.indexOf(nombreIngresado) > -1;
}
function mostrarPersona(objectJSON, nombreIngresado) {
    var arr = [];
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var nombre = '"' + nombreIngresado + '"'

    for (let z = 0; z < objectJSON.length; z++) {
        var code = JSON.stringify(objectJSON[z].code);
        if (nombre == code) {
            var code1 = (objectJSON[z].code)
            var nombre1 = (objectJSON[z].name)
            var sport1 = (objectJSON[z].sport)
            var actividad1 = (objectJSON[z].activity)
        }
    }

    for (let i = 0; i < 2; i++) {
        var hilera = document.createElement('tr');
        for (let j = 0; j < 4; j++) {

            var celda = document.createElement("td");
            if (i == 0 && j == 0) {
                var textoCelda = document.createTextNode("Codigo ");
            }
            if (i == 0 && j == 1) {
                var textoCelda = document.createTextNode("Nombre ");
            }
            if (i == 0 && j == 2) {
                var textoCelda = document.createTextNode("Sport");
            } if (i == 0 && j == 3) {
                var textoCelda = document.createTextNode("Activity ");
            }

            if (i == 1 && j == 0) {
                var textoCelda = document.createTextNode(code1);
            }
            if (i == 1 && j == 1) {
                var textoCelda = document.createTextNode(nombre1);
            }
            if (i == 1 && j == 2) {
                var textoCelda = document.createTextNode(sport1);
            } if (i == 1 && j == 3) {
                var textoCelda = document.createTextNode(actividad1);
            }

            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);

    body.appendChild(tabla);

    tabla.setAttribute("border", "2");
    return arr[i];
}



$('#Eliminar').click(function () {
    var result = document.getElementById("info1");
    var xmlhttp;
    codeI = document.getElementById('codeSearch1').value;


    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = ActiveXObject("Microsoft.XMLHTTP");
    }

    if (codeI === 0) {
        result.innerHTML = "";
    } else {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                var datos = JSON.parse(xmlhttp.responseText);
                shearchData2(codeI)                
                encontarPersona2(datos, codeI)
                //alert("Estudiante eliminado")
            }

        }
        xmlhttp.open("GET", "info.json", true);
        xmlhttp.send();
        /*var code=document.getElementById('code').value;
        var ruta = "cod="+code;
        $.ajax({
            url: 'Student.php',
            type: 'GET',
            data: ruta
        })*/
    }



})
function shearchData2(codeI) {
    var result = document.getElementById("info1");
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = ActiveXObject("Microsoft.XMLHTTP");
    }

    if (codeI === 0) {
        result.innerHTML = "";
    } else {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                var datos = JSON.parse(xmlhttp.responseText);
                var x = encontarPersona(datos, codeI);
                var mjs = (x === true) ? "<span class = 'econtrado' >Si fue encontrado </span>" :
                    "<span class = 'noEcontrado'>No fue encontrado</span>:"
                result.innerHTML = mjs;


            }

        }
        xmlhttp.open("GET", "info.json", true);
        xmlhttp.send();
        /*var code=document.getElementById('code').value;
        var ruta = "cod="+code;
        $.ajax({
            url: 'Student.php',
            type: 'GET',
            data: ruta
        })*/
    }
}

function encontarPersona2(objectJSON, nombreIngresado) {
    var nombre = '"' + nombreIngresado + '"'
    for (let z = 0; z < objectJSON.length; z++) {
        var code = JSON.stringify(objectJSON[z].code);
        if (nombre == code) {
            //delete objectJSON[z]
            //objectJSON.splice(z,1);
            
            alert("Estudiante eliminado")
        }

    }
    //alert(JSON.stringify(objectJSON[z]))

}