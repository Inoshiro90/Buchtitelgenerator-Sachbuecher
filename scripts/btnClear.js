 //Entfernt bisher generierte Resulate
 btnClear.addEventListener('click', (event) => {
    event.preventDefault();
    const container = document.getElementById('container');
    container.querySelectorAll('li').forEach((li) => li.remove());
   });
