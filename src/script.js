function menuHamburguesa() {
  var x = document.getElementById("navbar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

// Funcionalidad botones - segundo carrousel (muestra N a la vez) con wrap-around
(function(){
  const slider = document.querySelector('.segundo-carrousel ul');
  const items = slider ? Array.from(slider.children) : [];
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const VISIBLE = 1; // cambia a 3 si quieres mostrar 3 a la vez
  let index = 0;

  if (!slider || items.length === 0 || !prevBtn || !nextBtn) return;

  function getGap(){
    const g = getComputedStyle(slider).gap;
    return g ? parseFloat(g) : 20;
  }

  

  function update(){
    const gap = getGap();
    const itemWidth = items[0].offsetWidth;
    const move = index * (itemWidth + gap);
    slider.style.transform = `translateX(-${move}px)`;
    slider.style.transition = 'transform 300ms ease';
    updateButtons();
  }

  nextBtn.addEventListener('click', () => {
    const maxIndex = Math.max(0, items.length - VISIBLE);
    if (items.length <= VISIBLE) {
      index = 0;
    } else {
      index = (index < maxIndex) ? index + 1 : 0; // si llega al final, vuelve al inicio
    }
    update();
  });

  prevBtn.addEventListener('click', () => {
    const maxIndex = Math.max(0, items.length - VISIBLE);
    if (items.length <= VISIBLE) {
      index = 0;
    } else {
      index = (index > 0) ? index - 1 : maxIndex; // si está en el inicio, va a la última posición posible
    }
    update();
  });

  index = 0;
  const parent = document.querySelector('.segundo-carrousel');
  if (parent) parent.style.overflow = 'hidden';
  update();
})();
