function(instance, properties, context) {
  const {id} = instance.data
  const {text, fontSize, delay, color, speed} = properties

  const style = `
  <style>
    .wrapper-type-${id} {
      font-family: monospace;
      font-weight: 700;
      font-size: ${fontSize}px;
      /* padding: 20px; */
      /* background:#005F6B;
      color:#00DFFC */
    }

    .type-${id} {
      color: #0000;
      /* background:
  linear-gradient(-90deg,#00DFFC 5px,#0000 0) 10px 0,
  linear-gradient(#00DFFC 0 0) 0 0; */
      background: linear-gradient(-90deg, ${color} 5px, #0000 0) 10px 0, linear-gradient(${color} 0 0) 0 0;
      background-size: calc(var(--n) * 1ch) 200%;
      -webkit-background-clip: padding-box, text;
      background-clip: padding-box, text;
      background-repeat: no-repeat;
      animation: b 0.7s infinite steps(1), t calc(var(--n) * ${speed ? speed : 0.3}s) steps(var(--n)) forwards;
    }

    @keyframes t {
      from {
        background-size: 0 200%;
      }
    }
    @keyframes b {
      50% {
        background-position: 0 -100%, 0 0;
      }
    }
  </style>
  `
  if(!instance.data.styleWasAdded) document.head.insertAdjacentHTML("beforeend", style )
  instance.data.styleWasAdded = true;
  
  if(!instance.data.prevProps) {
    addElement() 
  }
  if(instance.data.prevProps && instance.data.prevProps.text !== text) {
    addElement() 
  }
  instance.data.prevProps = {...properties}
  function addElement() {
    const textElement = $(`<div class="wrapper-type-${id}" style="user-select: none"><span class="type-${id}" style="--n: ${text.length}">${text.replaceAll("\n", "<br />")}</span></div>`)
    setTimeout(()=>{
      instance.publishState("typing_finished", false)
      instance.canvas.empty(); 
      instance.canvas.append(textElement);
      if(instance.data.timeoutID) clearTimeout(instance.data.timeoutID)

      const breakLines = countNewLines(text)
      instance.data.timeoutID = setTimeout(()=>{textElement.css({"user-select": ''}); instance.publishState("typing_finished", true)}, (text.length - (breakLines)) * speed * 1000)
    }, (delay * 1000) - (speed * 1000))


    function countNewLines(text) {
      return (text.split("\n").length - 1);
    }
    
  }
  








//   var styles =
//       `
// .typing-demo {
//   width: 100%;
//   animation: typing ` +
//       properties.delay +
//       `s steps(22), blink .5s step-end infinite alternate;
//   white-space: nowrap;
//   overflow: hidden;
//   border-right: 3px solid;
//   font-family: monospace;
//   font-size: ` +
//       properties.fontSize +
//       `px;
// }

// @keyframes typing {
//   from {
//     width: 0
//   }
// }
    
// @keyframes blink {
//   50% {
//     border-color: transparent
//   }
// }

// `,
//     styleSheet = document.createElement("style");
//   (styleSheet.innerText = styles), document.head.appendChild(styleSheet), "chart" in instance.data && instance.data.chart.destroy();
//   const pieId = instance.data.id_p,
//     ctx = document.getElementById(pieId);
//   $("#" + ctx).ready(function () {
//     instance.canvas.empty(), instance.canvas.append("<div class='wrapper'><div class='typing-demo'>" + properties.text + "</div></div>");
//   });
}
