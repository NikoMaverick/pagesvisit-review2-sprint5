

cont = function (contadorVisitas) {
    const refresh = document.getElementById("contadorVisitas");
    refresh.addEventListener((_) => {//(_)Ausencia de parámetros
        location.reload();
        console.log(refresh)
    })
    return document.getElementById("contadorVisitas");
    if(localStorage){
        if(localStorage['visitas'] == undefined){
            localStorage ['visitas'] = 0; (_); // A falta de la direccion de la pagina de refresco
        }
        let conteo = parseInt(localStorage['visitas']);localStorage['visitas'] = 1 + conteo;
    }
    const template = {

    }
    refresh.innerHTML = `Esta página ha sido visitada ${conteo} veces`
}












/* Una posible solucion con el metodo reduce (Acumulador)
    console.log(
        count.reduce((acumulador, number) => {   //Acumulador
        return contar + number;
    },0)
);
    */



/*
if(localStorage.pagecount){
    localStorage.pagecount = Number(localStorage.pagecount)+1;
} 
    else{
        localStorage.pagecount=1;
    }
document.write(`Esta página ha sido visitada + ${localStorage.pagecount} veces`);
*/

