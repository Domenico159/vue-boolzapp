

const main = new Vue({

    el:'#main',
    data:{

        // Elenco contatti
    yourPropNameHere: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            colorePreferito:'Azzurro',
            eta:25,
            ultimoAccesso:'9.00 am',
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            eta:20,
            ultimoAccesso:'10.15 am',
            colorePreferito:'Verde',
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            colorePreferito:'Rosso',
            visible: true,
            eta:28,
            ultimoAccesso:'7.40 pm',
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            eta:21,
            ultimoAccesso:'9.00 pm',
            colorePreferito:'Rosa',
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Francesco',
            avatar: '_5',
            visible: true,
            eta:30,
            ultimoAccesso:'12.00 am',
            colorePreferito:'Giallo',
            messages: [
                {
                    date: '11/01/2020 16:00:55',
                    message: 'Ciao come stai ?',
                    status: 'sent'
                },
                {
                    date: '11/01/2020 16:05:00',
                    message: 'Ehy , ciao bene , tu ?',
                    status: 'received'
                },
                {
                    date: '11/01/2020 16:10:00',
                    message: 'Tutto bene , non ci sentivamo da 1 anno ',
                    status: 'sent'
                },
            ],
        },
        {
            name: 'Marco',
            avatar: '_6',
            visible: true,
            eta:29,
            ultimoAccesso:'1.30 pm',
            colorePreferito:'Nero',
            messages: [
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ciao Domenico , apposto il corso Boolean?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Marco , si tutto apposto , sta andando alla grande',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Sono contento ',
                    status: 'received'
                },
            ],
        },
        {
            name: 'Matteo',
            avatar: '_7',
            visible: true,
            eta:19,
            ultimoAccesso:'7.00 am',
            colorePreferito:'Verde',
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ehy Matteo , domani ci vediamo?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ciao Bro , si domani ci vediamo alle 16:00',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Lorenzo',
            avatar: '_8',
            visible: true,
            eta:21,
            ultimoAccesso:'3.00 am',
            colorePreferito:'Binaco',
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che siamo in zona rossa?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, purtroppo ho sentito',
                    status: 'received'
                }
            ],
        },
    ],
    indexActive:0,
    newMess:'',
    clickEmojiStatus:false,
    statusUltimoAccesso:true,
    darkModeStatus:false,
    search:'',

    },
    created(){

        // this.risposta()

    },
    methods:{

        activeIndex(index){

            this.indexActive = index;
            this.$refs.newMessage.focus()
        },
        sendNewMess(){
            if(this.newMess !== ''){
                this.yourPropNameHere[this.indexActive].messages.push(
                    {
                        message:this.newMess,
                        status:'sent'
                    }
                )
            }
            // Possibili risposte
            switch (this.newMess.toLowerCase()) {
                case 'ciao':
                    this.risposta('Ciao')
                    break;
                case 'come stai?':
                     this.risposta('Molto bene grazie')
                    break;
                    case 'ti piace la pizza?':
                    this.risposta('si')
                    break;
                case 'il tuo colore preferito?':
                     this.risposta(`tutti i colori mi piacciono , ma preferisco ${this.yourPropNameHere[this.indexActive].colorePreferito}`)
                    break;
                    case 'come ti chiami?':
                    this.risposta(`Il mio nome è ${this.yourPropNameHere[this.indexActive].name}`)
                    break;
                case 'quanti anni hai?':
                     this.risposta(`Ho ${this.yourPropNameHere[this.indexActive].eta} anni`)
                    break;
                default:
                    this.risposta(`Scusa non ho capito`)
        
            }

            setTimeout(() =>{
                this.statusUltimoAccesso = false
                
            },500)

            this.newMess = '';
            this.$refs.newMessage.focus()

            
            
        },
        risposta(element){
            setTimeout(() =>{
                this.yourPropNameHere[this.indexActive].messages.push(
                    {
                        message:element,
                        status:'received'
                    }
                )
                this.statusUltimoAccesso = true
            },3000)
        },
        activeEmoji(){

            this.clickEmojiStatus = !this.clickEmojiStatus ;
            // console.log(this.clickEmojiStatus);

        },
        darkMode(){
            this.darkModeStatus = ! this.darkModeStatus;
        },
        filtered(){

             this.yourPropNameHere.forEach((element) => {

                let x = element.name.toLowerCase().includes((this.search).toLowerCase())
                
                if(this.search !== ''){
                    if(!x){
                        element.visible = false;
                    }else{
                        element.visible = true;
                    }
                }else {
                    element.visible = true;
                }

             })

        },

    }

         });