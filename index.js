let search = document.getElementById("search").value;
let button = document.getElementById("buton");

switch (String(search).toLowerCase) {
    case "a":
        button.addEventListener("click", function () {
            window.location.href("my.html");
        })
        break;

    default:
        break;
}
