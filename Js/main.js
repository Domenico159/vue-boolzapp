

const main = new Vue({

    el:'#main',
    data:{

        // Elenco contatti
    yourPropNameHere: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: false,
            colorePreferito:'Azzurro',
            eta:25,
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
            visible: false,
            eta:20,
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
            visible: false,
            eta:28,
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
            visible: false,
            eta:21,
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
            visible: false,
            eta:30,
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
            visible: false,
            eta:29,
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
            visible: false,
            eta:19,
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
            visible: false,
            eta:21,
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

    },
    created(){

        // this.risposta()

    },
    methods:{

        activeIndex(index){

            this.indexActive = index;
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
        
            }

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
            },3000)
        },
        activeEmoji(){

            this.clickEmojiStatus = !this.clickEmojiStatus ;
            console.log(this.clickEmojiStatus);

        },

    }

         });