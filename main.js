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
    
    const working_hours = parseFloat(A.value);
    const sgc = parseInt(B.value);
    const reaction_time = parseFloat(C.value);
    const pa = parseFloat(D.value);
    const game_speed = parseFloat(E.value);
    const roulette_cooperation = parseFloat(I.value);
    const button = F.value;
    const stage = G.value;
    const shift = H.value;
    let total_gross = 0;
    let total = 0;
    
    if(stage=='stage 1'){
        if(shift=='morning'){

            let anhr = 7.1;

            //stage 1 minimum
            if(working_hours>=96 && working_hours<120){ 
                if(pa>=85 && pa<91){
                   anhr = Math.round((anhr+0.6)*100)/100
                }
                if(sgc>=1000 && sgc<1500){
                   anhr = Math.round((anhr+0.6)*100)/100
                }
                if(reaction_time>=65 && reaction_time<70){
                    anhr = Math.round((anhr+0.2)*100)/100
                }
                if(game_speed>=70 && game_speed<75){
                    anhr = Math.round((anhr+0.4)*100)/100
                }
                total_gross = Math.round((anhr*working_hours)*100/100)
                total = Math.round((total_gross*0.78)*100)/100
                alert(total_gross)
                alert(total)
            }
            //stage 1 avarge
            else if(working_hours>=120 && working_hours<144){ 
                if(pa>=91 && pa<97){
                    anhr = Math.round((anhr+0.9)*100)/100
                 }
                 if(sgc>=1500 && sgc<2000){
                    anhr = Math.round((anhr+0.9)*100)/100
                 }
                 if(reaction_time>=70 && reaction_time<80){
                     anhr = Math.round((anhr+0.4)*100)/100
                 }
                 if(game_speed>=75 && game_speed<85){
                     anhr = Math.round((anhr+0.6)*100)/100
                 }

                 else if(pa>=85 && pa<91){
                    anhr = Math.round((anhr+0.6)*100)/100
                 }
                 else if(sgc>=1000 && sgc<1500){
                    anhr = Math.round((anhr+0.6)*100)/100
                 }
                 else if(reaction_time>=65 && reaction_time<70){
                     anhr = Math.round((anhr+0.2)*100)/100
                 }
                 else if(game_speed>=70 && game_speed<75){
                     anhr = Math.round((anhr+0.4)*100)/100
                 }
                total_gross = Math.round((anhr*working_hours)*100/100)
                total = Math.round((total_gross*0.78)*100)/100
                alert(total_gross)
                alert(total)
            }

            //stage 1 overachiever
             else if(working_hours>=144){
                if(pa>=97){
                    anhr = Math.round((anhr+1.2)*100)/100
                 }
                 if(sgc>=2000){
                    anhr = Math.round((anhr+1.2)*100)/100
                 }
                 if(reaction_time>=80){
                     anhr = Math.round((anhr+0.6)*100)/100
                 }
                 if(game_speed>=85){
                     anhr = Math.round((anhr+0.8)*100)/100
                 }

                 else if(pa>=91 && pa<97){
                    anhr = Math.round((anhr+0.9)*100)/100
                 }
                 else if(sgc>=1500 && sgc<2000){
                    anhr = Math.round((anhr+0.9)*100)/100
                 }
                 else if(reaction_time>=70 && reaction_time<80){
                     anhr = Math.round((anhr+0.4)*100)/100
                 }
                 else if(game_speed>=75 && game_speed<85){
                     anhr = Math.round((anhr+0.6)*100)/100
                 }

                 else if(pa>=85 && pa<91){
                    anhr = Math.round((anhr+0.6)*100)/100
                 }
                 else if(sgc>=1000 && sgc<1500){
                    anhr = Math.round((anhr+0.6)*100)/100
                 }
                 else if(reaction_time>=65 && reaction_time<70){
                     anhr = Math.round((anhr+0.2)*100)/100
                 }
                 else if(game_speed>=70 && game_speed<75){
                     anhr = Math.round((anhr+0.4)*100)/100
                 }
                total_gross = Math.round((anhr*working_hours)*100/100)
                total = Math.round((total_gross*0.78)*100)/100
                alert(total_gross)
                alert(total)
            }

        }
        
        
    }

    
})









function handlesubmit(ev){
    ev.preventDefault();
}