const agregar=document.getElementById("agregar");
const agregamos=document.getElementById("agregamos");
const search=document.getElementById("search");
let array=JSON.parse(localStorage.getItem('personas'))


agregar.addEventListener("click",()=>{
    location.href="./agregar.html";
})

function agregar_persona(){
    array.forEach(element => {
        agregamos.innerHTML+=`
        <tr>
            <td>${element.area}</td>
            <td>${element.nombre}</td>
            <td>${element.usuario}</td>
            <td>${element.email}</td>
            <td>${element.edad}</td>
        </tr>
        `
    });
}

window.addEventListener('load',()=>{
    agregar_persona()
})

function search_persona(){
    let filter, tr, td, i, j, visible;
    filter = search.value.toUpperCase();
    table = agregamos;
    tr = agregamos.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        visible = false;
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
        if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
            visible = true;
        }
        }
        if (visible === true) {
        tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }
    }
}


search.addEventListener('keyup',search_persona())
