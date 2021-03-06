const socket = io("https://react-socketio-server-test.herokuapp.com/");
const formulario = document.querySelector("#miFormulario");
const mensajes = document.querySelector("#misMensajes");
const txtMensaje = document.querySelector("#txtMensaje");


formulario.addEventListener('submit', (ev) =>
{
    ev.preventDefault();
    const newMensaje = txtMensaje.value;
    socket.emit('msg-to-server', { msg: newMensaje });
});

socket.on('msg-from-server', (data) =>
{
    mensajes.innerHTML += `<li>${data.msg}</li>`;
})