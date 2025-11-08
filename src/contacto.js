document.addEventListener("DOMContentLoaded", function () {
  const formContacto = document.getElementById("form-contacto");
  const inputNombre = document.getElementById("nombre");
  const inputEmail = document.getElementById("email");
  const inputTelefono = document.getElementById("telefono");
  const selectMotivo = document.getElementById("motivo");
  const textareaMensaje = document.getElementById("mensaje");


  function mostrarError(elementId, mensaje) {
    const errorElement = document.getElementById(`error-${elementId}`);
    if (errorElement) {
      errorElement.textContent = mensaje;
      errorElement.style.color = "red";
    }
  }

  function limpiarError(elementId) {
    const errorElement = document.getElementById(`error-${elementId}`);
    if (errorElement) {
      errorElement.textContent = "";
    }
  }

  function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  function validarTelefono(telefono) {
    const re = /^[0-9\s\-()+]{7,15}$/;
    return re.test(telefono);
  }

  function mostrarDatosEnviados(datos) {

    const modalExistente = document.querySelector(".resultado-envio");
    if (modalExistente) modalExistente.remove();

    const resultado = document.createElement("div");
    resultado.classList.add("resultado-envio");

    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    const titulo = document.createElement("h3");
    titulo.textContent = "Datos enviados correctamente";
    contenido.appendChild(titulo);

    for (const clave in datos) {
      const p = document.createElement("p");
      p.innerHTML = `<strong>${clave}:</strong> ${datos[clave]}`;
      contenido.appendChild(p);
    }

    const btn = document.createElement("button");
    btn.textContent = "Cerrar";
    btn.addEventListener("click", () => resultado.remove());
    contenido.appendChild(btn);

    resultado.appendChild(contenido);
    document.body.appendChild(resultado);

    resultado.addEventListener("click", (e) => {
      if (e.target === resultado) resultado.remove();
    });
  }
    
  function validarFormulario(event) {
    event.preventDefault();
    let esValido = true;

    limpiarError("nombre");
    limpiarError("email");
    limpiarError("telefono");
    limpiarError("motivo");
    limpiarError("mensaje");

    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const telefono = inputTelefono.value.trim();
    const motivo = selectMotivo.value;
    const mensaje = textareaMensaje.value.trim();

    if (nombre === "") {
      mostrarError("nombre", "El nombre es obligatorio.");
      esValido = false;
    } else if (nombre.length < 10 || nombre.length > 20) {
      mostrarError("nombre", "Debe tener entre 10 y 20 caracteres.");
      esValido = false;
    }

    if (email === "") {
      mostrarError("email", "El email es obligatorio.");
      esValido = false;
    } else if (!validarEmail(email)) {
      mostrarError("email", "Formato de email inválido.");
      esValido = false;
    }

    if (telefono === "") {
      mostrarError("telefono", "El teléfono es obligatorio.");
      esValido = false;
    } else if (!validarTelefono(telefono)) {
      mostrarError("telefono", "Formato de teléfono inválido.");
      esValido = false;
    }

    if (motivo === "") {
      mostrarError("motivo", "Debes seleccionar un motivo.");
      esValido = false;
    }

    if (mensaje === "") {
      mostrarError("mensaje", "El mensaje no puede estar vacío.");
      esValido = false;
    } else if (mensaje.length < 10) {
      mostrarError("mensaje", "Debe tener al menos 10 caracteres.");
      esValido = false;
    }

    if (esValido) {
      const datos = {
        Nombre: nombre,
        Email: email,
        Teléfono: telefono,
        Motivo: motivo,
        Mensaje: mensaje,
      };
      mostrarDatosEnviados(datos);
      formContacto.reset();
    }
  }

  if (formContacto) {
    formContacto.addEventListener("submit", validarFormulario);
  }
});