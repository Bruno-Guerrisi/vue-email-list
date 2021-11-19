const app = new Vue({

    el: '#app',

    data:{
        arrEmail: [],

        length: 20,
    },

    computed: {

        createdOk(){

            return (this.arrEmail.length == this.length) ? true : false;
        }
    },

    created(){


        this.createEmail();
    },

    methods: {

        createEmail(){

            for (let i = 0; i < this.length; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                
                .then( result =>{
        
                    this.arrEmail.push(result.data.response);

                })
                .catch( error =>{

                    this.arrEmail.push('errore durante la creazione');
                })

            }

        },

    },
})

// https://flynn.boolean.careers/exercises/api/random/mail