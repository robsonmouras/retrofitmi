// Animações GSAP — entradas do hero e revelação das seções ao rolar
(function () {
  if (typeof gsap === "undefined") return;
  // Respeita usuários que preferem menos movimento
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.registerPlugin(ScrollTrigger);

  var ease = "power3.out";

  // ---- Entrada do topo (nav + hero) ----
  gsap.from("nav", { y: -30, opacity: 0, duration: 0.8, ease: ease });

  gsap.from("header h1", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: ease,
  });

  gsap.from("header .mt-8 a", {
    y: 24,
    opacity: 0,
    duration: 0.6,
    delay: 0.6,
    stagger: 0.15,
    ease: ease,
  });

  gsap.from("header img", {
    x: 60,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: ease,
  });

  // Botão flutuante do WhatsApp
  gsap.from('a[href^="https://wa.me"].fixed', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    delay: 1.2,
    ease: "back.out(1.7)",
  });

  // Helper: revela elementos quando entram na viewport
  function revealOnScroll(targets, trigger, vars) {
    gsap.from(targets, Object.assign({
      scrollTrigger: { trigger: trigger, start: "top 82%" },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: ease,
    }, vars || {}));
  }

  // ---- Serviços: cards em cascata ----
  revealOnScroll("#nosso-servicos .grid > div", "#nosso-servicos", { stagger: 0.12 });
  revealOnScroll("#nosso-servicos h2", "#nosso-servicos", { y: 20 });

  // ---- Formulário de contato ----
  revealOnScroll("#contact-form-link .text-white > *", "#contact-form-link", {
    x: 40,
    y: 0,
    stagger: 0.1,
  });

  // ---- Diferenciais: números deslizam da esquerda ----
  revealOnScroll("#diferenciais > div:first-child", "#diferenciais", { y: 30 });
  gsap.from("#diferenciais .flex.gap-6", {
    scrollTrigger: { trigger: "#diferenciais .grid-cols-2", start: "top 80%" },
    x: -50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    ease: ease,
  });

  // ---- Logos de clientes ----
  gsap.from("#clientes > div", {
    scrollTrigger: { trigger: "#clientes", start: "top 88%" },
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: ease,
  });

  // ---- Sobre nós ----
  revealOnScroll("#sobre-nos > *", "#sobre-nos", { y: 30, stagger: 0.15 });

  // ---- Missão / Visão / Valores: alterna lados ----
  gsap.utils.toArray("#missao-visao-valores > div").forEach(function (row, i) {
    gsap.from(row, {
      scrollTrigger: { trigger: row, start: "top 85%" },
      x: i % 2 === 0 ? -60 : 60,
      opacity: 0,
      duration: 0.9,
      ease: ease,
    });
  });

  // ---- CTA de suporte ----
  revealOnScroll("#suporte > div", "#suporte", { stagger: 0.15 });
})();
