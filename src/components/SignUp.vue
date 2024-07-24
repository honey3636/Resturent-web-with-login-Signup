<template>
    <img class="logo" src="@/assets/logo1.jpg" alt="restorent logo">
    <H1>SignUp</H1>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="name" ref="name">
        <input type="email" placeholder="Enter Email" v-model="email" ref="email">
        <input type="password" placeholder="Enter Password" v-model="password" ref="password">
        <button class="signUpbtn height" @click="signUp()">Sign Up</button><br>
        <router-link to="/login">Login</router-link>

    </div>
</template>

<script>
import axios from "axios";

export default{
    name:"SignUpCom", 
    data(){
        return{
            name:"",
            email:"",
            password:"",
        }
    },
  
    methods:{
       async signUp(){
            console.warn(`SignUp  Your Name is:${this.name}  Your Email is:${this.email} Your Password is:${this.password}` );
            let result= await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                password:this.password,
            })
            // console.log("Your values are ",result);  
            if(result.status==201)
            {
                alert("SignUp done");
                this.$refs.name.value="";
                this.$refs.email.value="";
                this.$refs.password.value="";
                // store user data into local storage (in string form)
                localStorage.setItem("user-info",JSON.stringify(result.data));

                //show HomeCom Page
                this.$router.push({name:"HomeCom"});
            }
            
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

<style >
.logo{
    width: 35vh;
}
.register input{
    width: 300px;
    height: 40px;
    display: block;
    border: 1px solid yellowgreen;
    margin-bottom: 15px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;
}
.signUpbtn{
    height: 40px;
    width: 100px;
    background-color: yellowgreen ;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: large;
    cursor: pointer;
    margin-bottom: 5px;
}
.height{
    margin-bottom: 10px;
}
</style>