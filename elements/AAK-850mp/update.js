function(instance, properties, context) {
var styles=`
.typing-demo {
  width: 100%;
  animation: typing `+properties.delay+`s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: `+properties.fontSize+`px;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

`,styleSheet=document.createElement("style");styleSheet.innerText=styles,document.head.appendChild(styleSheet),"chart"in instance.data&&instance.data.chart.destroy();const pieId=instance.data.id_p,ctx=document.getElementById(pieId);$("#"+ctx).ready(function(){instance.canvas.empty(),instance.canvas.append("<div class='wrapper'><div class='typing-demo'>"+properties.text+"</div></div>")});

}