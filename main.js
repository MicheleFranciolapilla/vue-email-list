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
            // this.mails_array = local_array;
            // console.log(this.mails_array);
        }
    }
}).mount('#vue_app')