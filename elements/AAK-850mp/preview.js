function(instance, properties) {
  function getUniqueStr(a) {
    for (var t = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", d = r.length, i = 0; i < a; i++) t += r.charAt(Math.floor(Math.random() * d));
    return t;
  }

  const id = getUniqueStr(8);
  const { text, fontSize, color } = properties;

  const style = `
  <style>
    .wrapper-type-${id} {
      font-family: monospace;
      font-weight: 700;
      font-size: ${fontSize}px;
      padding: 20px;
    }

    .type-${id} {
      color: #0000;
      background: linear-gradient(-90deg, ${color} 5px, #0000 0) 10px 0, linear-gradient(${color} 0 0) 0 0;
      background-size: calc(var(--n) * 1ch) 200%;
      -webkit-background-clip: padding-box, text;
      background-clip: padding-box, text;
      background-repeat: no-repeat;
    }
  </style>
  `;
  document.head.insertAdjacentHTML("beforeend", style);

    const textElement = $(`<div class="wrapper-type-${id}"><span class="type-${id}" style="--n: ${text.length}">${text.replaceAll("\n", "<br />")}</span></div>`);

    instance.canvas.empty();
    instance.canvas.append(textElement);

}
