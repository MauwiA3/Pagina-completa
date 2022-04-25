(function () {
    'use strict'


    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

//verificacion de contraseñas 
function verificarPasswords() {

    pass1 = document.getElementById('pass1');
    pass2 = document.getElementById('pass2');

    if (pass1.value != pass2.value) {

        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
        return false;
    }

    else {
        document.getElementById("error").classList.remove("mostrar");
        document.getElementById("ok").classList.remove("ocultar");

        document.getElementById("registro").disabled = true;

        setTimeout(function () {
            location.reload();
        }, 3000);
        return true;
    }
}

$(document).ready(function(){
    $("$registro_for").validate({
        rules:{
            nombre:{
                required: true,
                minlenght: 10
            },
            contraseña:{
                required: true,
                minlenght: 10
            },

            contraseña2:{
                required: true,
                minlenght: 10
            },
            
            correo:{
                required: true,
                email:true
            }
        },
        messages:{
            nombre:{
                required:"El nombre de ususario es obligatorio",
                minlenght: "es necesario 10 caracteres"
            },

            contraseña:{
                required:"Contraseña requerida",
                minlenght:"Minimo 6 caracteres"
            },
            correo:{
                required:"El correo es resquerido",
                minlenght:"El correo no es valido"
            }
        }
    });

});
