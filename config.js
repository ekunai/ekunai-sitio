// Configuración del sitio EKUNAI Rector. Este es el único archivo que hay que editar a mano.
window.EKUNAI = {
  // Texto del precio que se muestra en Kits y en la solicitud. Déjelo así mientras el precio no esté definido.
  precio: "El precio se lo enviamos con la cotización.",
  // Enlace de pago de Wompi (Comercios Wompi › Links de pago › Crear link, con el precio de la licencia).
  // Vacío = no se ofrece «Pago en línea» en la solicitud.
  enlacePago: "",
  // URL de la aplicación web de Google Apps Script que guarda los pedidos en la hoja «Pedidos EKUNAI Rector».
  // Vacío = el formulario abre un correo ya escrito para enviarlo a mano.
  urlPedidos: "",
  // Correo de ventas y de soporte.
  correoContacto: "papajosemental@gmail.com",
  correoSoporte: "papajosemental@gmail.com",
  // Versión vigente de EKUNAI Rector (la que se muestra en Actualizaciones).
  version: "0.5.1",
  fechaVersion: "17 de noviembre de 2026"
};
document.querySelectorAll(".js-correo-contacto").forEach(a => { a.href = "mailto:" + EKUNAI.correoContacto; });
document.querySelectorAll(".js-precio").forEach(e => { e.textContent = EKUNAI.precio; });
document.querySelectorAll(".js-version").forEach(e => { e.textContent = "v" + EKUNAI.version + " · " + EKUNAI.fechaVersion; });
document.querySelectorAll(".js-correo-soporte").forEach(a => { a.href = "mailto:" + EKUNAI.correoSoporte; a.textContent = EKUNAI.correoSoporte; });
