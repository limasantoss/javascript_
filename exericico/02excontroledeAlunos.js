for( let aluno = 1 ; aluno <= 3 ; aluno ++){
    switch(aluno){
        case 1 :
            console.log("Aluno" + aluno + ":Igor" );

            break;
        case 2 :
            console.log("Aluno" + aluno + ":Ana" );
            break;
        case 3 :
           console.log("Aluno" + aluno + ":Carlos" );
           break;
        default:
            console.log("Aluno invalido");    
    }
    //criar as condições  
    const matriculaAtiva = aluno != 2;//                                
    const notaInsuficiente = aluno !=3; //                           
    const alunoBloqueado = aluno ==3;//                                                         
    const alunoaprovado = matriculaAtiva && notaInsuficiente && alunoBloqueado;  // false

    if(alunoaprovado){
        console.log("Aluno aprovado");
    }else if(alunoBloqueado){
        console.log("Aluno reprovado : aluno bloqueado");
    }else if(!matriculaAtiva){ // false 
        console.log("Aluno reprovado : Matricula inativa ");
    }else{
        console.log("aluno reprovado : nota insuficiente");
    }

}
