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
      duration: 0.5, 
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
    .from("#content header p", { opacity: 0, y: -20, duration: 0.3 }, "+=0.1")
    .from(".btn-primary", { opacity: 0, y: -20, duration: 0.2 }, "+=0.1");
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
  duration: 0.5,
  ease: "power1.inOut",
  stagger: 0.3
});



gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    start: "top 60%",
    end: "bottom 30%",
    toggleActions: "play reverse play reverse"
  }
}).from("#projects h2, #projects .projects-list ", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  ease: "power1.inOut",
  stagger: 0.3
});

gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    start: "top 60%",
    end: "bottom 30%",
    toggleActions: "play reverse play reverse"
  }
}).from("#skills h2, #skills .bubble-container, #skills .badge-bubble", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power1.inOut",
  stagger: 0.3
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

gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "top 60%",
    end: "bottom 30%",
    toggleActions: "play reverse play reverse"
  }
}).from("#contact h2, #contact .card, #contact .linkedin, #contact .cv, #contact .mail, #contact .github, #contact p, #contact .socials, #contact .up, #contact .down, .copyright", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  ease: "power1.inOut",
  stagger: 0.3
});


// Effet suivi du curseur mouseBlur
const mouseBlur = document.getElementById('mouseBlur');
window.addEventListener('mousemove', e => {
  mouseBlur.style.top = e.clientY + 'px';
  mouseBlur.style.left = e.clientX + 'px';
});

// Scroll bouton

