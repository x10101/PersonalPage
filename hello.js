function showHello () {
    var name = document.getElementById ("Name");
    document.getElementById("hello").style.visibility = "visible";
    document.getElementById("unknow").innerText = name.value;
}