// Menu mobile — ver .claude/kb/desenvolvimento-web/concepts/javascript-moderno.md
const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu-mobile");

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", String(aberto));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("aberto");
      botaoMenu.setAttribute("aria-expanded", "false");
    });
  });
}

// Revelacao suave dos cards ao rolar — so ativa se o navegador suporta
// IntersectionObserver E o usuario nao pediu menos movimento. Sem isso,
// os cards ficam visiveis normalmente desde o inicio (progressive enhancement,
// ver .claude/kb/desenvolvimento-web/concepts/javascript-moderno.md).
const prefereReduzirMovimento = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefereReduzirMovimento && "IntersectionObserver" in window) {
  const cartoes = document.querySelectorAll(".cartao");
  cartoes.forEach((cartao) => cartao.classList.add("cartao--animavel"));

  const observadorRevelacao = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("revelado");
          observadorRevelacao.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cartoes.forEach((cartao) => observadorRevelacao.observe(cartao));
}

// Formulario de contato — feedback visual client-side apenas (UX).
// TODO: revalidar no servidor antes de qualquer envio real — ver
// .claude/kb/desenvolvimento-web/patterns/validacao-e-sanitizacao-de-formularios.md
const formulario = document.querySelector(".formulario");

if (formulario) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }
    window.alert(
      "Rascunho: este formulário ainda não envia dados de verdade. " +
        "O envio real será conectado após a aprovação do modelo."
    );
  });
}
