$(function() {
    $('#test1').html("Canvas drawing to scale.");  
    setinputs();
    drawTriangle(60, 60 * Math.sqrt(3), 120, 30, 60, 90);
    $('#input1').val(30);
    $('#input2').val(120);
    $('#input3').val(60);
    var sides = $('#choice').val();
    //$('#test1').html(getVal(1));
 
    switch (sides) {
 
 
 
        case "ASA":
            $('#test1').html("Canvas drawing to scale.");
            changespan(1,"Angle A: ");
            changespan(2,"Side c: ");
            changespan(3,"Angle B: ");
            changespan(4,"Angle C:");
            changespan(5,"Side b:");
            changespan(6,"Side a:");
            ASA();
            break;
 
        case "SAS":
            $('#test1').html("Canvas drawing to scale.");
            changespan(3,"Side c: ");
            changespan(1,"Side b: ");
            changespan(2,"Angle A: ");
            changespan(4,"Side a:");
            changespan(5,"Angle B:");
            changespan(6,"Angle C:");
            SAS();
            break;
 
        case "SSS":
            $('#test1').html("Canvas drawing to scale.");
            changespan(1,"Side a: ");
            changespan(2,"Side b: ");
            changespan(3,"Side c: ");
            changespan(4,"Angle A:");
            changespan(5,"Angle B:");
            changespan(6,"Angle C:");
            SSS();
            break;
        case "SSA":
            $('#test1').html("Canvas drawing to scale.");
            changespan(1,"Side a: ");
            changespan(2,"Side b: ");
            changespan(3,"Angle A: ");
            changespan(4,"Side c:");
            changespan(5,"Angle B:");
            changespan(6,"Angle C:");
            SSA();
            break;
 
    }
});
 
$('#choice').change(function(){
    alert("hi");
});
 
 
function setinputs()
{
 
 
    //$('#test').html($('#choice').val());
    var sides = $('#choice').val();
    //$('#test1').html(getVal(1));
 
 
   
    switch (sides) {
 
 
 
        case "ASA":
            changespan(1,"Angle A: ");
            changespan(2,"Side c: ");
            changespan(3,"Angle B: ");
            changespan(4,"Angle C:");
            changespan(5,"Side b:");
            changespan(6,"Side a:");
            ASA();
            break;
 
        case "SAS":
            changespan(3,"Side c: ");
            changespan(1,"Side b: ");
            changespan(2,"Angle A: ");
            changespan(4,"Side a:");
            changespan(5,"Angle B:");
            changespan(6,"Angle C:");
            SAS();
            break;
 
        case "SSS":
            changespan(1,"Side a: ");
            changespan(2,"Side b: ");
            changespan(3,"Side c: ");
            changespan(4,"Angle A:");
            changespan(5,"Angle B:");
            changespan(6,"Angle C:");
            SSS();
            break;
        case "SSA":
            changespan(1,"Side a: ");
            changespan(2,"Side b: ");
            changespan(3,"Angle A: ");
            changespan(4,"Side c:");
            changespan(5,"Angle B:");
            changespan(6,"Angle C:");
            SSA();
            break;
 
    }
 
 
 
}
 
function ASA(){
    var ma = getVal(1) % 180;
    var mb = getVal(3) % 180;
    var mc = (180 - (ma + mb));
    setVal(1,ma);
    setVal(3,mb);
 
 
    var c = getVal(2);
    var ratio = c / Math.sin((mc * Math.PI)/180);
 
    var a = Math.abs(ratio * Math.sin((ma*Math.PI)/180));
    var b = Math.abs(ratio * Math.sin((mb*Math.PI)/180));
    drawTriangle(a,b,c,ma,mb,mc);
    getArea(b,c,ma);
    a = Math.round(a * 1000)/1000;
    b = Math.round(b * 1000)/1000;
    mc = Math.round(mc * 1000)/1000;
    changespan(4,"Angle C: " + mc +"&deg");
    changespan(5,"Side b: " + b);
    changespan(6,"Side a: " + a);
 
 
}
 
 
 
 
function SAS(){
    var ma = getVal(2) % 180;
    // var mb = getVal(3);
    // var mc = 180 - (ma + mb);
    var c = getVal(3);
    var b = getVal(1);
    setVal(2,ma);
 
    var a = Math.sqrt(((c*c) + (b*b) - (2 * c * b * Math.cos((ma * Math.PI)/180))));
 
    var ratio = Math.sin((ma * Math.PI)/180) / a;
    var mc = Math.abs(Math.asin(ratio * c));
    var mb = Math.abs(Math.asin(ratio * b));
 
    var mc = mc * 180 / Math.PI;
    var mb = mb * 180 / Math.PI;
 
 
    // var a = Math.abs(ratio * Math.sin((ma*Math.PI)/180));
    // var b = Math.abs(ratio * Math.sin((mb*Math.PI)/180));
    drawTriangle(a,b,c,ma,mb,mc);
    getArea(b,c,ma);
    c = Math.round(c * 1000)/1000;
    mb = Math.round(mb * 1000)/1000;
    mc = Math.round(mc * 1000)/1000;
    changespan(4,"Side a: " + a);
    changespan(5,"Angle B: " + mb + "&deg");
    changespan(6,"Angle C: " + mc + "&deg");
 
}
 
 
function SSS(){
    var a = getVal(1);
    // var mb = getVal(3);
    // var mc = 180 - (ma + mb);
    var b = getVal(2);
    var c = getVal(3);
 
 
    var ma = Math.abs(Math.acos((b * b + c * c - a * a)/(2 * b * c)) * 180 / Math.PI);
    var mb = Math.abs(Math.acos((a * a + c * c - b * b)/(2 * a * c)) * 180 / Math.PI);
    var mc = Math.abs(Math.acos((a * a + b * b - c * c)/(2 * a * b)) * 180 / Math.PI);
 
 
 
    drawTriangle(a,b,c,ma,mb,mc);
    getArea(b,c,ma);
    ma = Math.round(ma * 1000)/1000;
    mb = Math.round(mb * 1000)/1000;
    mc = Math.round(mc * 1000)/1000;
    changespan(4,"Angle A: " + ma +"&deg");
    changespan(5,"Angle B: " + mb +"&deg");
    changespan(6,"Angle C: " + mc +"&deg");
 
}
 
function SSA(){
 
    var a = getVal(1);
    var b = getVal(2);
    var ma = getVal(3) % 180;
    setVal(3,ma);
    var triangles = 0;
 
 
    if(ma > 90)
    {
        if(a <= b){
            $('#test1').html("No possible triangle.");
            return;
        }
        else
            $('#test1').html("Canvas drawing to scale.");
        triangles = 1;
 
    }
    else
    {
 
        if(b * Math.sin(ma * Math.PI / 180) > a){
            triangles = 0;
            $('#test1').html("No possible triangle.");  
            changespan(4,"Side c: NaN" );
            changespan(5,"Angle B: NaN&deg");
            changespan(6,"Angle C: NaN&deg");  
            clear();                       
            return;
        }
 
        else if(b * Math.sin(ma * Math.PI / 180) == a || a > b){
               
            triangles = 1;
            $('#test1').html("Canvas drawing to scale.");          
        }
        else if(b * Math.sin(ma * Math.PI / 180) < a && a < b){
            triangles = 2;
            $('#test1').html("Canvas drawing to scale.");          
        }
        else {
            triangles = 0;
            $('#test1').html("No possible triangle.");  
            changespan(4,"Side c: NaN" );
            changespan(5,"Angle B: NaN&deg");
            changespan(6,"Angle C: NaN&deg");  
            clear();
                               
       
            return;  
        }
 
 
 
 
    }
 
    if(triangles == 0)
        getArea(0,0,0);
    if(triangles == 1)
    {
 
        var ratio = Math.sin(ma * Math.PI / 180.0) / a;    
        var mb = Math.asin(ratio * b) * 180 / Math.PI;
        var mc = 180 - (ma + mb);
        ratio = a / Math.sin((ma * Math.PI)/180.0);    
        var c = ratio * Math.sin(mc / 180.0 * Math.PI);
        drawTriangle(a,b,c,ma,mb,mc);      
        getArea(b,c,ma);
        mb = Math.round(mb * 1000)/1000;
        c = Math.round(c * 1000)/1000;
        mc = Math.round(mc * 1000)/1000;    
 
        changespan(4,"Side c: " + c);
        changespan(5,"Angle B: " + mb + "&deg");
        changespan(6,"Angle C: " + mc + "&deg");  
 
    }
 
    else if(triangles == 2)
    {
 
        var ratio = Math.sin((ma * Math.PI)/180) / a;    
        var mb1 = Math.asin(ratio * b) * 180 / Math.PI;
        var mb2 =180 - mb1;    
        var mc1 = 180 - (ma + mb1);
        var mc2 = 180 - (ma + mb2);    
        var ratio = a / Math.sin((ma * Math.PI)/180);    
        var c1 = ratio * Math.sin(mc1 / 180 * Math.PI);
        var c2 = ratio * Math.sin(mc2 / 180 * Math.PI);  
       
        drawTwo(a,b,c1,ma,mb1,mc1,a,b,c2,ma,mb2,mc2);    
        getATwo(b,c1,ma,c2);
       
                 
        mb1 = Math.round(mb1 * 1000)/1000;
        c1 = Math.round(c1 * 1000)/1000;
        mc1 = Math.round(mc1 * 1000)/1000;    
 
        mb2 = Math.round(mb2 * 1000)/1000;
        c2 = Math.round(c2 * 1000)/1000;
        mc2 = Math.round(mc2 * 1000)/1000;        
 
        changespan(4,"Side c : " + c1 + " OR | " + c2);
        changespan(5,"Angle B : " + mb1 + "&deg OR | " + mb2 + "&deg");
        changespan(6,"Angle C : " + mc1 + "&deg OR | " + mc2 + "&deg");
 
 
    }
 
 
}
 
function getX(f,mf)
{
    return f * Math.cos(mf);
 
}
 
 
function getY(f,mf)
{
    return f * Math.sin(mf);    
 
}
 
function getArea(b, c, ma){
    var ar = 0.5 * b * c * Math.sin(ma * Math.PI / 180);
    ar = Math.round(ar * 1000) / 1000.0;
    $('#area').html(ar + " units squared.");
}
 
function getATwo(b, c, ma, c2){
    var ar = 0.5 * b * c * Math.sin(ma * Math.PI / 180);
    var art = 0.5 * b * c2 * Math.sin(ma * Math.PI / 180);
    ar = Math.round(ar * 1000) / 1000.0;
    art = Math.round(art * 1000) / 1000.0;         
    $('#area').html(ar + " OR | " + art + " units squared.");
}
function drawTriangle(a,b,c,ma,mb,mc){
    $('#test1').html("Canvas drawing to scale.");
 
 
    ma = ma * Math.PI / 180;
    mb = mb * Math.PI / 180;
    mc = mc * Math.PI / 180;
 
    while(a + b + c < 180) {
        a = a * 10;
        b = b * 10;
        c = c * 10;
    }

    while(a + b + c > 400) {
        a = a /5;
        b = b /5;
        c = c /5;
    }

    var hp = 0.5 * Math.PI;
 
 
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    context.clearRect ( 0 , 0 , 400 , 300 );
 
    context.beginPath();
    context.moveTo(0,b);
    context.lineTo(0,b + c);
    context.stroke();
   
    context.lineTo(getX(a,mb - hp),getY(a,mb - hp) + c + b);      
    context.stroke();
 
    context.lineTo(0,b);      
 
    context.stroke();
 
 
    context.closePath();
 
}
 
 
function drawTwo(a,b,c,ma,mb,mc,a2,b2,c2,ma2,mb2,mc2){
    $('#test1').html("Canvas drawing to scale.");
 
 
    ma = ma * Math.PI / 180;
    mb = mb * Math.PI / 180;
    mc = mc * Math.PI / 180;
    ma2 = ma2 * Math.PI / 180;
    mb2 = mb2 * Math.PI / 180;
    mc2 = mc2 * Math.PI / 180;

       
    while (a + b + c < 180) {
        a = a * 10;
        b = b * 10;
        c = c * 10;
        a2 = a2 * 10;
        b2 = b2 * 10;
        c2 = c2 * 10;
    }

    while (a + b + c > 400) {
        a = a / 5;
        b = b / 5;
        c = c / 5;
        a2 = a2 / 5;
        b2 = b2 / 5;
        c2 = c2 / 5;
    }
 
 
 
    var hp = 0.5 * Math.PI;
 
 
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    context.clearRect ( 0 , 0 , 400 , 300 );
 
    context.beginPath();
    context.moveTo(0,b);
    context.lineTo(0,b + c);
    context.stroke();
   
    context.lineTo(getX(a,mb - hp),getY(a,mb - hp) + c + b);      
    context.stroke();
 
    context.lineTo(0,b);      
 
    context.stroke();
 
 
 
    context.moveTo(0,b2);
    context.lineTo(0,b2 + c2);
    context.stroke();
   
    context.lineTo(getX(a2,mb2 - hp),getY(a2,mb2 - hp) + c2 + b);      
    context.stroke();
 
    context.lineTo(0,b);      
 
    context.stroke();
 
 
    context.closePath();
         
 
}
 
function clear(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    context.clearRect ( 0 , 0 , 400 , 300 );       
}
 
function getVal(x){
    var q = $('#input' + x).val();
    var q = parseInt(q);
    return q;
}
 
function setVal(x, nv){
    $('#input' + x).val(nv);
}
 
 
 
function changespan(num, str)
{
    $('#span' + num).html(str);
 
}