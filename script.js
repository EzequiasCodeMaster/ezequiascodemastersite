//bolhas da pagina

document.addEventListener('DOMContentLoaded', function() {
    const NUM_BUBBLES = 10;

    for (let i = 0; i < NUM_BUBBLES; i++) {
        createBubble();
    }

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.width = `${Math.random() * 20 + 10}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.left = `${Math.random() * 100}vw`; //distancia
        document.body.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
            createBubble();
        }, 6000);
    }
});


//bolhas do mouse

document.addEventListener('mousemove', function(e) {
    createStar(e.clientX, e.clientY);
});

function createStar(x, y) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${y}px`;
    star.style.left = `${x}px`;
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000);
}

   // Função para capturar eventos de mouse para arrastar horizontalmente
   let isDown = false;
   let startX;
   let scrollLeft;

 

   // Captura eventos de mouse para cada contêiner de categoria
   function enableHorizontalScroll(containerId) {
       const container = document.getElementById(containerId);
       container.addEventListener('mousedown', (e) => {
           isDown = true;
           startX = e.pageX - container.offsetLeft;
           scrollLeft = container.scrollLeft;
       });
       container.addEventListener('mouseleave', () => {
           isDown = false;
       });
       container.addEventListener('mouseup', () => {
           isDown = false;
       });
       container.addEventListener('mousemove', (e) => {
           if (!isDown) return;
           e.preventDefault();
           const x = e.pageX - container.offsetLeft;
           const walk = (x - startX) * 3; // Ajuste da sensibilidade do movimento
           container.scrollLeft = scrollLeft - walk;
       });
   }


 // Ativa a rolagem horizontal para cada contêiner de categoria
 enableHorizontalScroll('container-web');
 enableHorizontalScroll('container-mobile');
 enableHorizontalScroll('container-games');
