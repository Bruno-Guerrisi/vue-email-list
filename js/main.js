const app = new Vue({

    el: '#app',

    data:{
        arrEmail: [],
    },

    created(){


        this.createEmail();
    },
    methods: {

        createEmail(){

            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                
                .then( result =>{
        
                    this.arrEmail.push(result.data.response);

                    console.log(this.arrEmail);
                })

            }

        },

    },


})

// https://flynn.boolean.careers/exercises/api/random/mail