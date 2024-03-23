    var horizontalX1 = 0;
    var horizontalX2 = 0;
    var horizontalX3 = 0;
    var horizontalX4 = 0;
    var horizontalX5 = 0;
    var pixels = "px";
    const pararTrafego = 0;
    var carro1 = window.document.getElementById("carro1");
    var carro2 = window.document.getElementById("carro2");
    var carro3 = window.document.getElementById("carro3");
    var carro4 = window.document.getElementById("carro4");
    var carro5 = window.document.getElementById("carro5");
    var text = window.document.getElementById("text");
    var saldo = window.document.getElementById("saldo");
    var selecionarCarro = window.document.getElementById("carros");

    function iniciarCorrida(){

        if(text.value >= 5){
            horizontalX1 += 6;
            horizontalX2 += 5;
            horizontalX3 += 4;
            horizontalX4 += 3;
            horizontalX5 += 2;
            carro1.style.left = horizontalX1 + pixels;
            carro2.style.left = horizontalX2 + pixels;
            carro3.style.left = horizontalX3 + pixels;
            carro4.style.left = horizontalX4 + pixels;
            carro5.style.left = horizontalX5 + pixels;
            
            var id = setTimeout(iniciarCorrida, 50)
    
            var pixel = carro1.style.left;
    
            if(pixel == "1758px")
            {
                alert('Lewis Hamilton ganhou');
                clearTimeout(id);
                if(selecionarCarro.value == "Lewis"){
                    var saldoApostador = parseInt(saldo.value) + parseInt(text.value * 2);
                    saldo.value = saldoApostador;
                }
                else{
                    var saldoTotal = saldo.value - text.value;
                    saldo.value = saldoTotal;
                }   
                text.focus();
        
            }
        }
        else{
            alert('Digite outro valor para apostar')
        }

    
        
        

    }



