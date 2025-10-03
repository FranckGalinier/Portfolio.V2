// Enregistrement des plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Animation du loader/progress-bar
gsap.to("#progress-bar", {
  width: "100%", 
  duration: 2,
  ease: "power1.inOut",
  onComplete: () => {
    // Transition du loader
    gsap.to("#loader", {
      opacity: 0, 
      duration: 0.3, 
      onComplete: () => {
        document.getElementById("loader").style.display = "none";
        showMainContent();
      }
    });
  }
});

// Affichage progressif du header après le loader
function showMainContent() {
  const tl = gsap.timeline();

  tl.to("#content", { opacity: 1, duration: 0.2, pointerEvents: "auto" });
  
  // Titre, texte, bouton avec 100ms d'écart
  tl.from("#content header h1", { opacity: 0, y: -20, duration: 0.2 }, "+=0.1")
  .from("#content header .socials", { opacity: 0, y: -20, duration: 0.2 }, "+=0.1")
    .from("#content header p", { opacity: 0, y: -20, duration: 0.3 }, "+=0.1");
}

// Animations de scroll sur sections
gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top 60%",
    end: "bottom 30%",
    toggleActions: "play reverse play reverse"
  }
}).from("#about h2, #about p", {
  opacity: 0,
  y: 20,
  duration: 0.3,
  ease: "power1.inOut",
  stagger: 0.3
}).to("#about h2", {
  duration: 0.1,
  repeat: 5,
  yoyo: false,
  ease: "power1.inOut",
    textShadow: `
    0 0 12px #64FFDA,
    0 0 24px #64FFDA,
    0 0 36px #40E0D0,
    0 0 48px #40E0D0
  `,
  opacity: 0.9,
});



const circles = document.querySelectorAll('.neon-circle');
const containerWindowWidth = window.innerWidth;
const containerWindowHeight = window.innerHeight;

// Initialise chaque bulle avec position et vitesse aléatoires
const balls = Array.from(circles).map(circle => {
  const size = circle.offsetWidth;
  return {
    el: circle,
    x: Math.random() * (containerWindowWidth - size),
    y: Math.random() * (containerWindowHeight - size),
    vx: (Math.random() - 0.5) * 2, // vitesse x entre -1 et 1px/frame
    vy: (Math.random() - 0.5) * 2, // vitesse y
    size
  };
});

// Position initiale
balls.forEach(ball => {
  ball.el.style.left = ball.x + 'px';
  ball.el.style.top = ball.y + 'px';
});

// Fonction animation boucle
function animate() {
  balls.forEach(ball => {
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Rebond bord gauche/droite
    if(ball.x <= 0) {
      ball.x = 0;
      ball.vx *= -1;
    } else if(ball.x + ball.size >= containerWindowWidth) {
      ball.x = containerWindowWidth - ball.size;
      ball.vx *= -1;
    }

    // Rebond bord haut/bas
    if(ball.y <= 0) {
      ball.y = 0;
      ball.vy *= -1;
    } else if(ball.y + ball.size >= containerWindowHeight) {
      ball.y = containerWindowHeight - ball.size;
      ball.vy *= -1;
    }

    ball.el.style.left = ball.x + 'px';
    ball.el.style.top = ball.y + 'px';
  });

  requestAnimationFrame(animate);
}

animate();



const projectsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    start: "top 60%",
    end: "bottom 30%",
    toggleActions: "play reverse play reverse"
  }
}).from("#projects h2, #projects .projects-list ", {
  opacity: 0,
  y: 20,
  duration: 0.3,
  ease: "power1.inOut",
  stagger: 0.3
});


projectsTimeline.to("#projects h2", {
  duration: 0.1,
  repeat: 5,
  yoyo: false,
  ease: "power1.inOut",

    textShadow: `
    0 0 12px #64FFDA,
    0 0 24px #64FFDA,
    0 0 36px #40E0D0,
    0 0 48px #40E0D0
  `,
  opacity: 0.9,
});

// Stabilisation finale du néon
projectsTimeline.to("#projects h2", {
  duration: 0.5,
  ease: "power1.inOut",
  textShadow: `
    0 0 8px #64FFDA,
    0 0 16px #40E0D0,
    0 0 24px #40E0D0
  `,
  color: "#64FFDA",
  opacity: 1
});

const skillsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    start: "top 60%",
    end: "bottom 30%",
    toggleActions: "play reverse play reverse"
  }
}).from("#skills h2, #skills .bubble-container, #skills .badge-bubble", {
  opacity: 0,
  y: 20,
  duration: 0.3,
  ease: "power1.inOut",
  stagger: 0.1
});

skillsTimeline.to("#skills h2", {
  duration: 0.1,
  repeat: 5,
  yoyo: false,
  ease: "power1.inOut",
    textShadow: `
    0 0 12px #64FFDA,
    0 0 24px #64FFDA,
    0 0 36px #40E0D0,
    0 0 48px #40E0D0
  `,
  opacity: 0.9,
});

// Stabilisation finale du néon
skillsTimeline.to("#skills h2", {
  duration: 0.5,
  ease: "power1.inOut",
  textShadow: `
    0 0 8px #64FFDA,
    0 0 16px #40E0D0,
    0 0 24px #40E0D0
  `,
  color: "#64FFDA",
  opacity: 1
});




// Positionnement initial aléatoire pour chaque bulle
const container = document.querySelector('.bubble-container');
const bubbles = document.querySelectorAll('.badge-bubble');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

bubbles.forEach(ball => {
  // Placement initial aléatoire
  ball.style.left = Math.random() * (containerWidth - ball.offsetWidth) + 'px';
  ball.style.top = Math.random() * (containerHeight - ball.offsetHeight) + 'px';

  // Animation flottante aléatoire infinie GSAP
  moveBubble(ball);
  
  // Stoppe l’animation sur hover
  ball.addEventListener('mouseenter', () => {
    gsap.killTweensOf(ball);
  });
  // Relance sur sortie
  ball.addEventListener('mouseleave', () => {
    moveBubble(ball);
  });
});

function moveBubble(ball) {
  // Nouvelle destination aléatoire
  const x = Math.random() * (containerWidth - ball.offsetWidth);
  const y = Math.random() * (containerHeight - ball.offsetHeight);
  gsap.to(ball, {
    left: x,
    top: y,
    duration: 2.5 + Math.random() * 2.5,
    ease: "power1.inOut",
    onComplete: () => moveBubble(ball) // reboucle
  });
}

const contactTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact h2",
    start: "top 60%",
    toggleActions: "play reverse play reverse"
  }
}).from("#contact h2, #contact .card, #contact .linkedin, #contact .cv, #contact .mail, #contact .github, #contact p, #contact .socials, #contact .up, #contact .down, .copyright", {
  opacity: 0,
  y: 20,
  duration: 0.1,
  ease: "power1.inOut",
  stagger: 0.1
});


contactTimeline.to("#contact h2", {
  duration: 0.1,
  repeat: 5,
  yoyo: false,
  ease: "power1.inOut",
    textShadow: `
    0 0 12px #64FFDA,
    0 0 24px #64FFDA,
    0 0 36px #40E0D0,
    0 0 48px #40E0D0
  `,
  opacity: 0.9,
});

// Stabilisation finale du néon
contactTimeline.to("#contact h2", {
  duration: 0.5,
  ease: "power1.inOut",
  textShadow: `
    0 0 8px #64FFDA,
    0 0 16px #40E0D0,
    0 0 24px #40E0D0
  `,
  color: "#64FFDA",
  opacity: 1
});



// Effet suivi du curseur mouseBlur
const mouseBlur = document.getElementById('mouseBlur');
window.addEventListener('mousemove', e => {
  mouseBlur.style.top = e.clientY + 'px';
  mouseBlur.style.left = e.clientX + 'px';
});

// Scroll bouton

