# Site — Luana Evaristo Gomes (Advocacia Criminal)

Rascunho da Home para apresentação na 2ª reunião com a cliente. Site estático
(HTML/CSS/JS, sem backend) — ver decisões em
`../.claude/sdd/features/DESIGN_SITE_ADV.md`.

## Como abrir

Em navegador normal (não sandboxed/Flatpak), duplo clique em `index.html` funciona direto.

Se abrir sem estilo nenhum (CSS/imagem quebrados), o navegador provavelmente abriu via
portal sandboxed (comum em Flatpak — o endereço fica algo como `/run/user/1000/doc/...`).
Nesse caso, sirva por HTTP local em vez de abrir o arquivo direto:

```bash
cd "site adv" && python3 -m http.server 8080
```

E abra `http://localhost:8080/` no navegador. Isso é só para pré-visualização local — não
tem nada a ver com a hospedagem real do site depois (site estático hospedado funciona como
qualquer site normal, sem servidor nenhum para o visitante ou para a cliente rodar).

## O que é placeholder (ainda não é real)

Marcado no código com `<!-- TODO -->` e visualmente com o texto em itálico cinza:

- Foto: avatar ilustrado (`assets/img/avatar-placeholder.svg`), não é uma foto real —
  ver justificativa em `DESIGN_SITE_ADV.md`, Decision 2
- Número da OAB: `000.000` — aguardando a cliente confirmar
- Biografia ("Sobre"): texto de exemplo — a Dra. Luana escreve o texto final
- Respostas do FAQ: em branco, marcadas para ela escrever
- Links de WhatsApp e Instagram: `wa.me/5500000000000` e `#instagram-pendente` —
  placeholders óbvios, não são os contatos reais
- Formulário de contato: aparece completo, mas o botão "Enviar" só mostra um aviso —
  não envia dado nenhum ainda (sem backend nesta fase)
- Rodapé (links legais, texto): provisório, aguardando alinhamento na próxima reunião

## Créditos de imagem

Ambas de Unsplash (Unsplash License: uso comercial livre, sem atribuição obrigatória),
exibidas sempre com overlay de cor por cima (nunca "puras") — propositalmente duas fotos
diferentes, para não repetir a mesma imagem recolorida entre o hero e as seções claras:

- `assets/img/fundo-justica.jpg` — estátua da Justiça + martelo — fundo do hero
- `assets/img/fundo-secoes-claras.jpg` — martelo + livro aberto — fundo de Sobre/Área de
  Atuação (aplicada uma vez só, ver `.zona-clara` no CSS)
- `assets/img/fundo-secoes-claras-2.jpg` — martelo + livro fechado, fundo escuro/minimalista —
  fundo de Artigos/FAQ/Contato (`.zona-clara--2`)

## Depois da aprovação do rascunho

1. Substituir os placeholders acima pelos dados reais da cliente
2. Conectar o formulário a um envio real, com validação server-side
   (`../.claude/kb/desenvolvimento-web/patterns/validacao-e-sanitizacao-de-formularios.md`)
3. Rodar o checklist de lançamento
   (`../.claude/kb/design-de-sites/patterns/checklist-de-lancamento.md`)
