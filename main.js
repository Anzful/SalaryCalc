const A = document.getElementById('working_hours'); //working hours
const B = document.getElementById('sgc');           //sgc
const C = document.getElementById('reaction_time'); //reaction time
const D = document.getElementById('pa');            //pa
const E = document.getElementById('game_speed');    //game speed
const F = document.getElementById('button');        //button
const G = document.getElementById('stage');         //stage
const H = document.getElementById('shift');         //shift
const I = document.getElementById('roulette_cooperation')//roulette cooperation

button.addEventListener('click', (ev)=>{
    
    working_hours = parseFloat(A.value)
    sgc = parseInt(B.value)
    reaction_time = parseFloat(C.value)
    pa = parseFloat(D.value)
    game_speed = parseFloat(E.value)
    roulette_cooperation = parseFloat(I.value)
    button = F.value
    stage = G.value
    shift = H.value
    
    if(stage='stage 1'){
        if(shift='morning'){

        }
        
        else if(shift='night'){

        }
    }


    else if(stage='stage 2'){
        if(shift='morning'){

        }

        else if(shift='night'){
            
        }
    }


    else if(stage='stage 3'){
        if(shift='morning'){

        }

        else if(shift='night'){
            
        }
    }
    
    

})









function handlesubmit(ev){
    ev.preventDefault();
}