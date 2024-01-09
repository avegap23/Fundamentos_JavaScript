let intervalID = setInterval(actualizaReloj, 1000);

function actualizaReloj() {

  const ahora = new Date();
  const horas = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  console.log(`${horas} : ${minutos} : ${segundos}`);

}