const emprestimosLiberado = 0;
const emprestimoNegado = 0;
for(let analise = 1; analise <= 4; analise++){
  
    switch(analise){
        case 1 :
            console.log(" livro " + analise + " Java Basico ");
            break;
        case 2 : 
            console.log(" Livro " + analise + " Algoritmos ");
            break;
        case 3:
            console.log( "Livro " + analise + " Banco de dados ");
            break;        
        case 4 : 
            console.log( "Livro " + analise + " Redes de computadores ");
            break;
        default :
            console.log("Livro infantil");       
    }
    const usuarioInativo = analise != 2;  
    const livroIndisponivel = analise != 3; 
    const multaPendente = analise == 4; 
    const emprestimoLiberado = usuarioInativo && livroIndisponivel && !multaPendente ;  // true 
    if(emprestimoLiberado){
        console.log("Emprestimo Liberado");
        emprestimosLiberado++;   
    }else if(usuarioInativo){ 
        console.log("Emprestimo negado : usuario inativo");
        emprestimoNegado++   
    }else if(livroIndisponivel){
        console.log("Emprestimo negado : Livro indisponivel");
        emprestimoNegado ++ 
    }else if(multaPendente){
        console.log("Emprestimo negado : Usuario possui multa pendente");
        emprestimoNegado ++;
    }else{
        console.log("Emprestimo negado  : Livro  indisponivel ");
        emprestimoNegado++;

        
    }
    
}
console.log("Resumo");
console.log("Liberado : " + emprestimosLiberado);
console.log("Negado : " + emprestimoNegado);