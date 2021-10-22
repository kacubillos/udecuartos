const app = new Vue({
    el: "#app",
    data: function () {
        return {
            correo: '',
            clave: ''
        }

    },
    methods: {
        login() {
            axios({

                method: 'post',
                url: 'https://localhost:49153/api/login',
                data: {
                    'correo': this.correo,
                    'clave': this.clave
                }
            }).then(
                (res) => {
                    console.log(res.data);
                    localStorage.setItem('user_token', res.data.token);
                    localStorage.setItem('user_id', res.data.userData.id);
                    location.href ="./todos.html";
                }
            ).catch((err => console.log(err)));

        }
    }

}).$mount('#app')



