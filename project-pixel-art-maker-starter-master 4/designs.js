// When size is submitted by the user, call makeGrid()

function makeGrid(numWidth, numHeight) {
    let tr = "";
    let td = "";
    for (let x = 1; x <= numWidth; x++) {td += "<td></td>";}
    for (let y = 1; y <= numHeight; y++) {tr += "<tr>" + td + "</tr>";}
    return tr;
}

$("[type='submit']").click(function(e){
    e.preventDefault();
    table=$("#pixelCanvas");
    tr = table.find('tr');
    tr.remove();
    var widthX, heightY, piexl;
    widthX= Number($("#inputWeight").val());
    heightY = Number($("#inputHeight").val());
    piexl = makeGrid(widthX,heightY);
    $("#pixelCanvas").append(piexl);
});

$('table').on('click','td',function(){
    var rgbcolor = $("#colorPicker").val();
	$(this).css('background-color',rgbcolor);
})









