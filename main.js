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
                    max_email_nr:   10,
                    repeated:       0,
                    counter:        0,
                    emails_array:   []
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
        get_data()
        {
            axios.get(boolean_API).then( result => {return result.data.response});
        },

        check_repeated(item)
        {
            let is_repeated = false;
            if (this.emails_array.includes(item))
            {
                this.repeated++;
                is_repeated = true;
            }
            return is_repeated;
        }
    }
}).mount('#vue_app')