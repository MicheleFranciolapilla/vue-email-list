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
                    mails_array:    [],
                    done:           false 
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
            console.log("Real-Time-Output");
            let list = document.getElementById("real_time_list");
            for (let i = 0; i < 10; i++)
            {
                axios.get(this.boolean_API).then( result =>
                    {
                        this.mails_array.push(result.data.response);
                        list.innerHTML += `
                        <tr>
                            <td>${i + 1}</td>
                            <td>${this.mails_array[i]}</td>
                        </tr>`;
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
            console.log("One-Time-Output");
            let list = document.getElementById("one_time_list");
            for (let i = 0; i < 10; i++)
            {
                await axios.get(this.boolean_API).then( result =>
                    {
                        this.mails_array.push(result.data.response);
                    });
            }
            for (let i = 0; i < 10; i++)
            {
                list.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${this.mails_array[i]}</td>
                </tr>`;
                console.log(i + 1, this.mails_array[i]);
            }
        },

        async data_output()
        {
            this.done = true;
            await this.async_get_data();
            // Svuotamento array:
            console.log("Svuotamento array");
            for (let i = 0; i < 10; i++)
            {
                console.log(this.mails_array);
                this.mails_array.pop();
            }
            console.log(this.mails_array);
            console.log("Pausa di 3 secondi");
            setTimeout(this.get_data,3000);
        }

    }
}).mount('#vue_app')