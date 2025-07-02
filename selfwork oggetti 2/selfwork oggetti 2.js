// creare una lista
let name =  `Alessandra`

let number = 39876543

let check = Number(prompt(`premi 1 se vuoi eliminare o aggiungere un contatto,\n premi 2 se vuoi modificare un contatto`))

let rubrica = {
      listaContatti: [
                  {name: `Luigi`, number: 1234567890},
                  {name: `Marco`, number: 4545455454},
                  {name: `Mattia`, number: 343434334}
                  ], 

             showAllContacts: function(){
                  this.listaContatti.forEach(contatto => {
                              console.log(`${contatto.name}: ${contatto.number}`);
                //stampare un singolo contatto  aggiungere o elimminare un contatto
                  
                        })            

                 
            },

            showContact: function(nome){
                  let contatto = this.listaContatti.find(contatto => contatto.name == nome)
                  if(contatto){
                        console.log(`CONTATTO TROVATO - ${contatto.name}: ${contatto.number}`);
                        
                  }else{
                        console.log(`CONTATTO NON TROVATO`);
                  }
            },

                   remuveAddContacts: function(nome, numero){
                  let contatto = this.listaContatti.find(contatto => contatto.name == nome)
                  let index = this.listaContatti.indexOf(contatto)
                        if(contatto){   
                              this.listaContatti.splice(index, 1)
                              console.log(`CONTATTO ELIMINATO`);
                        }else{ 
                          this.listaContatti.push({name:nome,number:numero})
                              console.log(`CONTATTO AGGIUNTO`);
                        //modifucare un contatto
                        }
                 },
                 editContat: function(nome, newNunber){
                        let contatto = this.listaContatti.find(contatto => contatto.name  == nome)
            if(contatto){
                        console.log(`CONTATTO MODIFICATO`);
                        contatto.number = newNunber
            }else{
                        console.log(`CONTATTO NON TROVATO`);
            
                      }
                  }

             }
                         
                 
                 rubrica.showContact(name)
            
                  // switch
                
                  switch (check) {
                        case 1:
                        name = prompt(`inserisci il nome del contatto`)
                        number = prompt(`inserisci il numero del contatto`)
                        rubrica.remuveAddContacts(name, number)
                        break;
                        case 2:    
                        name = prompt(`inserisci il nome del contatto`)
                        number = prompt(`inserisci il numero del contatto`)
                        rubrica.editContat(name, number)
                  }

                        rubrica.showAllContacts()



