
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/


var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");
/*
¿Qué contienen la variable formulario ?
contiene el acceso al la etiqueta con el id "bitacora" en este caso un formulario 
*/

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if(validarFor()){
    let bitacora = { 
        cant:cont, 
        fecha: formulario[1].value, 
        descripcion: formulario[2].value, 
        cantidad: formulario[3].value 
      } 
    bitacoras.push(bitacora);
    cont++;
   mostrar();}
}); 

const validarFor = ()=>{
    let flag=0;
    if (formulario[1].value == ""){
        flag++;
        formulario[1].style="border-color: red";
    }else{
        formulario[1].style="border-color: green";
    }

    if (formulario[2].value==""){
        flag++;
        formulario[2].style="border-color: red";
    }else{
        formulario[2].style="border-color: green";
    }

    if (formulario[3].value==""){
        flag++;
        formulario[3].style="border-color: red";
    }else{
        formulario[3].style="border-color: green";
    }

    return flag==0;


}

/* 
¿Qué hace el método evt.preventDefault() ?
previene la accion por defecto del submit, es decir la recarga de pagina al momento de presinarlo o ejecutarse
*/

/*
 ¿Qué es lo que contiene formulario[x]?
 el formulario guardado esa variable es un arreglo con sus diferentes componentes... en ese caso es un elemento o hijo del formulario
 */

const crearElemento = (bitacora, tbody) =>{ 
    let tr = document.createElement("tr"); 
    Object.values(bitacora).forEach(item => { 
     let td = document.createElement("td"); 
     let content = document.createTextNode(item); 
     td.appendChild(content); 
     tr.setAttribute("class", "click"); 
     tr.appendChild(td); 
    }); /*
    let td = document.createElement("td");
    td.appendChild(document.createTextNode("X"));
    tr.appendChild(td); 
    tr.setAttribute("class","finalice");*/
   tbody.appendChild(tr); 
  } 

  /*
¿Qué contienen las variables tr y td ?
las variables contienen elementos html en este caso filas y nodos de una tabla respectivamente

¿Qué contienen la variable content ?
un elemento  que consiste en una eqtiqueta de texto html y contiene texto extraido del objeto bitacora

¿Qué valor tendra tbody al finalizar la iteración?
tendra una nueva fila(de una tabla) con sus respectivos nodos creados con el contenido de un objeto bitacora

Describa en pocas palabras lo que realizara esta función
creara una nuvba fila y la agregara a la tabla en la pagina web
  
  */

 const eliminar= (tbody)=>{
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
/* 
¿Qué es lo que hace .firstChild?
busca y retorna al primer hijo de el elemento html al que se le aplica

Después de realizar el while ¿Comó quedara el elemento tbody ?
quedara vacio(sin ningun elemento :v)
 */

const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
    eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[1].textContent; 
      document.querySelector("#descp").value = item.childNodes[2].textContent; 
      document.querySelector("#cant").value = item.childNodes[3].textContent; 
     }); 
    }) 
   } 

   /*
   ¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent;
   el nodo del elemento item en la posicion especificada
   */

  const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
   } 

   /**
¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ?
la etiqueta tbody que se encuentra en la etiqueta tabla-btc, en este caso tiene el cuerpo de la tabla mostrada en la pagina

¿Qué hace el método childElementCount?
muetra el numero total de hijos que contien el elemento

¿Qué se mostrara en pantalla cuando se ejecute la función agregar()?
llenara la caja de contenidos con lo que contiener la file a la que se le da clic en la tabla.




¿Qué se mostrara en el navegador despues de ejecutar la función mostrar?
basicamente eliminara todos los registros de la tabla(limpiara la tabla)
y luego la rellenara con todos los elementoxs contenidoe enel arreglo bitacoras
-----se actualizara la tabla----
  */
