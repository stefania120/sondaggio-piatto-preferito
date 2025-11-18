const sondaggio = {
    domanda: "Qual è il tuo piatto preferito?",
    piatti: ["Pizza", "Zuppa", "Hamburger", "Lasagne"],
    risposte: [0, 0, 0, 0],


    registraRispostaSondaggio : function () {
        let messaggio = `${this.domanda}\n`;
        this.piatti.forEach((p,i) =>  { messaggio += `${i}: ${p}\n`;});
        messaggio += "(Scrivi il numero della scelta)";

        const scelta = Number(prompt(messaggio));
        if([0,1,2,3].includes(scelta)){
            this.risposte[scelta]++;
        }else{
            alert("Scelta non valida");
        }
    },

    mostraRisultati: function() {
        const lista = document.getElementById("risutati");
        lista.innerHTML = "";
        this.piatti.forEach((p,i) => {
            const li = document.createElement("li");
            li.textContent = `${p}: voti ${this.risposte[i]}`;
            lista.appendChild(li);
        });
    }
};

document.getElementById("rispondi-btn").addEventListener("click", function(){
    sondaggio.registraRispostaSondaggio();
    sondaggio.mostraRisultati();

});