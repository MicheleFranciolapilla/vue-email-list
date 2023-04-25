// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

// Script Vue 3
const {createApp} = Vue 

createApp(
{
    data() 
    {
        return  {
                    boolean_API:    "https://flynn.boolean.careers/exercises/api/random/mail",
                    mails_array:    []
                }
    },
    created()
    {
    },
    mounted()
    {
    },
    methods: 
    {
        // Funzione "classica" che accumula il ritardo dovuto ai tempi di richiesta/risposta. N.B. Se si portassero gli output fuori dal ciclo e li si inserisse in un ciclo a se, successivo, avremmo solo output undefined (sempre a causa del ritardo temporale)
        get_data()
        {
            let list = document.getElementById("emails_list");
            for (let i = 0; i < 10; i++)
            {
                axios.get(this.boolean_API).then( result =>
                    {
                        this.mails_array.push(result.data.response);
                        list.innerHTML += `<li> - ${this.mails_array[i]}</li>`;
                        console.log(i + 1, this.mails_array[i]);
                    });
            }
            // Con cicli for separati: output undefined
            // for (let i = 0; i < 10; i++)
            // {
            //     list.innerHTML += `<li> - ${this.mails_array[i]}</li>`;
            //     console.log(i + 1, this.mails_array[i]);
            // }
        },

        async async_get_data()
        {
            let list = document.getElementById("emails_list");
            for (let i = 0; i < 10; i++)
            {
                await axios.get(this.boolean_API).then( result =>
                    {
                        this.mails_array.push(result.data.response);
                        // list.innerHTML += `<li> - ${this.mails_array[i]}</li>`;
                        // console.log(i + 1, this.mails_array[i]);
                    });
            }
            for (let i = 0; i < 10; i++)
            {
                list.innerHTML += `<li> - ${this.mails_array[i]}</li>`;
                console.log(i + 1, this.mails_array[i]);
            }
        }
    }
}).mount('#vue_app')