////////////////// CONSULTAR PERSONAL //////////////////
fetch('http://localhost:3000/personal')
    .then((data) => {
        console.log(data);
        obtenerPersonal(data);
    })
    .catch((error) => {
        console.log(error);
    });

////////////////// AGREGAR PERSONAL //////////////////    
const obtenerPersonal = (data) => {
    const contenido = document.getElementById('contenido');
    data.forEach((persona) => {
        contenido.innerHTML += `
     <tr>
         <td>${persona.name}</td>
         <td>${persona.lastname}</td>
         <td>${persona.salary}</td>
         <td>${persona.birthday}</td>
         <td>${persona.description}</td>
         <td>
             <a href="" class="btn btn-outline-primary btn-sm">Editar</a>
             <a href="" class="btn btn-outline-danger btn-sm">Eliminar</a>
         </td>
     `
    });
}


////////////////// VALIDACION BOOTSTRAP //////////////////
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

////////////////// CONVERTIR FORM A JSON //////////////////
const form = document.getElementById('registerPerson');

const getFormJson = (form) => {
    const formData = new FormData(form);
    return Array.from(formData.keys()).reduce((result, key) => {
        result[key] = formData.get(key);
        return result;
    }, {});
};

const handler = (event) => {
    event.preventDefault();
    const valid = form.reportValidity();
    if (valid) {
        const data = getFormJson(form);
        console.log(data);

        // MANDAR EL JSON POR POST

        fetch('http://localhost:3000/personal', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

form.addEventListener('submit', handler);

////////////////// MANDAR POR POST //////////////////
