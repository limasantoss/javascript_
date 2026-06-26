for(let reserva = 1; reserva <=3; reserva++ ){
    switch(reserva){
        case 1 : 
            console.log("Reserva" + reserva + "Sala de reunião ");
            break;
        case 2 :
            console.log("Reserva" + reserva + "Auditorio");
            break;
        case 3:
            console.log("Reserva"+ reserva + "Laboratório");
            break; 
        default:
            console.log("Reserva invalida");           
    }
        const horarioDisponivel = reserva != 2; // true , true , false 
        const solicitanteAutorizado = reserva !=3;
        const reservaCancelada = reserva == 3;
        const reservaLiberada = horarioDisponivel && solicitanteAutorizado && !reservaCancelada ; 
        
        if(reservaLiberada){
            console.log("Reserva Liberada");
        }else if(reservaCancelada){
            console.log("Reserva cancelada");
        }else if(solicitanteAutorizado){
            console.log("Solicitante não autorizado ");
        }else{
            console.log("Solicitante não autorizado");
        }
      
}