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
    document.getElementById("display").value="0";
}
function equal()
{
    var text=document.getElementById("display").value;
    var result=eval(text);
    document.getElementById("display").value=result;
}
