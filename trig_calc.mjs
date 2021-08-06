let h1 = document.getElementById("h1");

function calc() {
    let input = parseInt(document.getElementById("input").value) * (Math.PI/180);
    document.getElementById("1").addEventListener("click",() => {
        h1.innerHTML=Math.sin(input);
    });
    document.getElementById("2").addEventListener("click",() => {
        h1.innerHTML=Math.cos(input);
    });
    document.getElementById("3").addEventListener("click",() => {
        h1.innerHTML=Math.tan(input);
    });
    document.getElementById("4").addEventListener("click",() => {
        h1.innerHTML=Math.csc(input);
    });
    document.getElementById("5").addEventListener("click",() => {
        h1.innerHTML=Math.sec(input);
    });
    document.getElementById("6").addEventListener("click",() => {
        h1.innerHTML=Math.cot(input);
    });
}
