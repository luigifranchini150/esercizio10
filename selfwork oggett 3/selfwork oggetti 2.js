let bowling = {
     players: [
          { name: `Luigi`, scores: [] },
          { name: `Luciano`, scores: [] },
          { name: `matteo`, scores: [] },
          { name: `Luca`, scores: [] },
     ],
     creaPunteggio: function () {
          this.players.forEach(giocatore => {
               for (let i = 1; i <= 10; i++) {
                    giocatore.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
               }
          })
     },
     //aggiungere un nuovo giocatore
     nuovoGiocatore: function (nome) {
          let newPlayer = { name: nome, scores: [] }
          for (let i = 1; i <= 10; i++) {
               newPlayer.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
          }
          this.players.push(newPlayer)
     },
     //punteggio finale
     punteggioFinale: function () {
          this.players.forEach(giocatore => {
               let tot = giocatore.scores.reduce((acc, num) => acc + num)
               giocatore.totale = tot
          })
          this.players.sort((a, b) => b.totale - a.totale)
     },//decretare il vincitore

     vincitore: function () {
          let winner = this.players[0]
          console.log(`il vincitore è ${winner.name} con ${winner.totale} punti`);
     },
     //creare una classifica
     classifica: function () {
          console.log(`CLASSIFICA FINALE:`);
          this.players.forEach(giocatore =>{
               console.log(`${giocatore.name} CON ${giocatore.totale}`);
               
          })




     }
}


bowling.creaPunteggio()
bowling.nuovoGiocatore(`Mario`)
bowling.punteggioFinale()
bowling.vincitore()
bowling.classifica()






