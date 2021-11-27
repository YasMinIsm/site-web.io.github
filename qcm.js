var rep = new Array;

var faite = new Array;

var score = 0;
 
 



rep[1] = "1";

rep[2] = "1";

rep[3] = "1";

rep[4] = "1";

rep[5] = "1";

rep[6] = "1";

rep[7] = "1";

rep[8] = "1";

rep[9] = "1";

rep[10] = "1";
 
        function Engine(question, reponse) {
        
                if (reponse != rep[question]) {
        
                        if (!faite[question]) {
        
                                faite[question] = -1;
        
                                }
        
                        else {
        
        
                                }
        
                        }
        
                else {
        
                        if (!faite[question]) {
        
                                faite[question] = -1;
        
                                score++;
        
                                }
        
                        else { 
        
                                }
        
                        }
        
        }

// le résultat final

function valider() {

        if (score == 10) {

                alert(score + "/10. " + "Parfait");

                }

        if (score < 10) {

                alert(score + "/10. " + "  Il y'a des réponses incorrectes");

                }

 
                 }


faite = new Array;

score = 0;



