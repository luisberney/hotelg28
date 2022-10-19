///GET, POST, PUT Y DELETE

function getCliente(){
    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarCliente(respuesta);
        }

    });

}

function postCliente(){
    let cajas = {
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    };
    $.ajax({
        url:"http://localhost:8080/api/Client/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente la Cliente");
            window.location.reload();
        }
    });
}

function putCliente(){

}

function deleteCliente(){

}

/////////////////////////////////////////////////
function pintarCliente(respuesta){
    let myTable='<div class="table-responsive"><table class="table table-striped table-hover table-bordered table-sm table-success">';
    myTable+='<thead><tr><th scope="col">Correo electrónico</th><th scope="col">Contraseña</th><th scope="col">Nombre completo</th><th scope="col">Edad</th>';
    myTable+='<th scope="col">Acción</th><th scope="col">Acción</th></tr></thead>';
    for(i=0;i<respuesta.length;i++){
        myTable+='<tr>';
        myTable+='<td>'+respuesta[i].email+'</td>';
        myTable+='<td>'+respuesta[i].password+'</td>';
        myTable+='<td>'+respuesta[i].name+'</td>';
        myTable+='<td>'+respuesta[i].age+'</td>';
        myTable+='<td> <button class="btn btn-success" onclick="putCategoria('+respuesta[i].id+')">Actualizar</button>';
        myTable+='<td> <button class="btn btn-danger" onclick="deleteCategoria('+respuesta[i].id+')">Borrar</button>';
        
        myTable+='</tr>';
    }
    myTable+='</table></div>';
    $("#resultado1").html(myTable);
}