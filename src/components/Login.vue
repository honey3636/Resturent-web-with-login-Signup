<template>
    <img class="logo" src="@/assets/logo1.jpg" alt="restorent logo">

    <h1>Login page</h1>

    <div class="register">

        <input type="email" placeholder="Enter Email" v-model="email" ref="email">
        <input type="password" placeholder="Enter Password" v-model="password" ref="password">
        <button class="signUpbtn" v-on:click="login">Login</button>
        <br>
        <router-link to="/SignUp">SignUp</router-link>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "LoginCom",

    data() {
        return {
            email: '',
            password: "",
        }
    },

    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);


            if (result.status == 200 && result.data.length > 0) {
                alert("Login done");
               
                // store user data into local storage (in string form)
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));

                //show HomeCom Page
                this.$router.push({ name: "HomeCom" });
            }
            console.log(result);
        },
    },
      //LifeCycle Method
      mounted(){
        let user=localStorage.getItem("user-info");
        if(user){
            //redirect the HOme page if SignUp 
            this.$router.push({name:"HomeCom"});
        }
    },
}
</script>