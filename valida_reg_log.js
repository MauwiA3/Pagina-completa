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
