const agregar=document.getElementById("agregar");
const tabla=document.getElementById("agregamos");
const filtro=document.getElementById("search");
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



filtro.addEventListener('keyup', function() {
    let valor = filtro.value.toLowerCase();
    for (let i = 0; i < tabla.rows.length; i++) {
        let contenido = tabla.rows[i].cells[2].textContent.toLowerCase();
        if (contenido.indexOf(valor) > -1) {
            tabla.rows[0].style.display='';
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
});
