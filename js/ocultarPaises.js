function cambiar(){
    debugger
    
    var opciones=document.getElementsByName("combo");
    var opciones2=document.getElementsByName("combo2");
   

    for(i in opciones){
        if(opciones[i].value=="si" && opciones[i].checked){
            document.getElementById("otrospaises").style.display="block";
        }
        if(opciones[i].value=="no" && opciones[i].checked){
            document.getElementById("otrospaises").style.display="none";
    
    }
    }


    for(i in opciones2){
        if(opciones2[i].value=="si" && opciones2[i].checked){
            document.getElementById("direccion").style.display="block";
        }
        if(opciones2[i].value=="no" && opciones2[i].checked){
            document.getElementById("direccion").style.display="none";
    
    }
    }
    }



    












    


