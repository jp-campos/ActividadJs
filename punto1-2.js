
//Punto 1
    function secret(mensaje, tipo, num){
        
        let retorno = []

        mensaje.forEach(x => {
            if (tipo === "encrypt"){
                
                let elem = Number(x)+ Number(num)
                console.log(elem)
                retorno.push(elem)
            }else{
                let elem = Number(x) - Number(num)
                retorno.push(elem )
            }
        });

        return retorno
    }





//Punto 2
const maxComunDiv = (a,b) => a===b ? a : a>b ? maxComunDiv(b, a-b): maxComunDiv(a, b-a)


