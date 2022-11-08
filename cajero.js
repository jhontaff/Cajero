var dinero = document.getElementById("cash");
var boton = document.getElementById("btn");
var div;
var pal;
class Billetes
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

boton.addEventListener("click", entrega)

var billete = [];
billete.push(new Billetes (50, 7));
billete.push(new Billetes (20, 5));
billete.push(new Billetes (10, 8));

var entregado = [];

function entrega ()
{   var d = dinero.value ;
    console.log(d);
    for (var x of billete)
    {   if (d > 530)
        { alert ("NO PUEDO DARTE ESA CANTIDAD")
          return
        }
        else
        {   if (d > 0)
        {   div = Math.floor(d/x.valor);
            if ( div > x.cantidad)
            {  
                pal = x.cantidad; 
            } 
            else
            {   
                pal = div;
            }
            entregado.push(new Billetes (x.valor, pal));
            d = d - (pal * x.valor);
        } 
        }
    }   

    document.write("DINERO ENTREGADO")
    for (var a of entregado)
    {
        if (a.cantidad == 1)
        {
        document.write("<p>");
        document.write(a.cantidad + " BILLETE DE " + a.valor + "</br>");
        document.write("</p>");
        } else 
        {
            document.write("<p>");
            document.write(a.cantidad + " BILLETES DE " + a.valor + "</br>");
            document.write("</p>");
        }
    }
}
