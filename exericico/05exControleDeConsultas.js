for(let clinica = 1 ; clinica <= 3; clinica ++){
    switch(clinica){
        case 1 : 
            console.log("Consulta " + clinica + " Clinico geral"  );
            break;
        case 2 :
            console.log("Consulta   " + clinica + " Dentista");
            break;
        case 3 :
            console.log("Consulta " + clinica + " Cardiologista ");
            break;

    }
    const consultaLiberada = clinica != 2 ; 
    const consultaBloqueada = clinica != 3;
    const consultaCancelada = clinica == 3 ; 
    const prontoParaConsulta = consultaLiberada && consultaBloqueada && !consultaCancelada ; 

    if(prontoParaConsulta){
        console.log("Consulta liberada");
    }else if(consultaBloqueada){
        console.log("Consulta Bloqueada ");
    }else if(consultaCancelada){
        console.log(" consulta cancelada ");
    }else{
        console.log("ERRO");
    }

}