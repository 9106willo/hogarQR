const tareas = [
  "Barrer la sala", "Lavar los platos", "Sacar la basura",
  "Limpiar el baño", "Ordenar tu cuarto", "Lavar la ropa",
  "Limpiar la cocina", "Regar las plantas",
  "Organizar la nevera", "Limpiar las ventanas"
];
let disponibles = [...tareas];
let tareaActual = "";

function tareaAleatoria() {
  if (disponibles.length === 0) {
    disponibles = [...tareas];
    alert("Ya hiciste todas, ¡se reinicia la lista!");
  }
  const i = Math.floor(Math.random() * disponibles.length);
  tareaActual = disponibles.splice(i, 1)[0];
  document.getElementById("tareaActual").innerHTML = `<b>Tu tarea es:</b> ${tareaActual}`;
  document.getElementById("mensaje").textContent = "";
}

function aceptar() {
  if (!tareaActual) { alert("Primero dale a Tarea Aleatoria"); return; }
  document.getElementById("mensaje").textContent = "✅ Aceptaste: " + tareaActual + ". ¡Vamos, tú puedes!";
}

function terminado() {
  if (!tareaActual) { alert("Primero acepta una tarea"); return; }
  document.getElementById("mensaje").textContent = "🎉 ¡Terminaste: " + tareaActual + "! Ganaste 10 puntos.";
  tareaActual = "";
}