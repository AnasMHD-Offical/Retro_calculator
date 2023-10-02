function btClick(val)
{
    document.getElementById("display").value+=val;
}
function allClear()
{
    document.getElementById("display").value="";
}
function Clear()
{
     var current_ele= document.getElementById("display").value;
   document.getElementById("display").value = current_ele.slice(0, -1);

}
function equal()
{
    var text=document.getElementById("display").value;
    var result=eval(text);
    document.getElementById("display").value=result;
}
