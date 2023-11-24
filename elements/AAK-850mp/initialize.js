function(instance, context) {
    instance.data.id = getUniqueStr(8)


  function getUniqueStr(a) {
    for (var t = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", d = r.length, i = 0; i < a; i++) t += r.charAt(Math.floor(Math.random() * d));
    return t;
  }
//   var uuid = getUniqueStr(8);
//     uuid_parent = uuid + "_parent",
//     boxchart = $('<div id="' + uuid_parent + '"" ></div>');
//   boxchart.css("width", "100%"), boxchart.css("height", "100%"), instance.canvas.append(boxchart), (instance.data.id = uuid), (instance.data.id_p = uuid_parent), instance.canvas.empty();
}
