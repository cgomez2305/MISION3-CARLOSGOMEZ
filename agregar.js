const volver=document.getElementById('volver')
const nombre=document.getElementById('nombre')
const apellido=document.getElementById('apellido')
const area=document.getElementById('area')
const usuario=document.getElementById('usuario')
const edad=document.getElementById('edad')
const direccion=document.getElementById('direccion')
const email=document.getElementById('email')
const enviar=document.getElementById('enviar')
let personas=[]
let newArray=[]
let cont=0;
let bandera=true

class Person{
    constructor(area,nombre,usuario,email,edad){
        this.area=area;
        this.nombre=nombre;
        this.usuario=usuario;
        this.email=email;
        this.edad=edad;
    }
}   

volver.addEventListener('click',()=>{
    location.href="./index.html"
})

enviar.addEventListener('click',()=>{
    if(nombre.value==''||apellido.value=='' ||usuario.value==''||direccion.value=='' || email.value=='' || edad.value=='' || area.value=='' ){
        console.log('no pasa')
    }
    else{
        let resultado=personas.filter(element=> element.usuario==usuario.value)
        if(resultado==''){
            send(personas)
            let nuevo=new Person(area.value,nombre.value,usuario.value,email.value,edad.value)
            personas=JSON.parse(localStorage.getItem('personas'))
            personas.push(nuevo);
            send(personas)
            console.log('enviado')
        }else{
            alert('El ususario ya existe')
        }
        
    }
})

function send(objeto){
    localStorage.clear()
    let seVa=localStorage.setItem('personas',JSON.stringify(objeto))
    return seVa
}

window.addEventListener('load',()=>{
    const traemos=JSON.parse(localStorage.getItem('personas'))
    traemos.forEach(element => {
        personas.push(element)
    });
})