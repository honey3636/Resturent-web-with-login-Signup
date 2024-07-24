<template>
    <HeaderCom/>
    
    <h1 id="name"> {{name}} ,</h1>
    <h2>Welcom on Add Resturent page</h2>
    <div class="container">
        <input type="text" placeholder="Enter Name" name="name" v-model="resturant.name">
        <input type="text" placeholder="Enter Address" name="address" v-model="resturant.address">
        <input type="text" placeholder="Enter Contact No" name="contact" v-model="resturant.contact">
        <button v-on:click="addResturant">Add Resturant</button>
    </div>

</template>


<script>
import axios from "axios";
import HeaderCom from "./Header.vue";
    export default {
        name:"AddRest",
        components:{
            HeaderCom,
        },
        data(){
            return{
                name:'',
                resturant:{
                    name:"",
                    address:"",
                    contact:""
                },
            }
        },
        methods:{
            async addResturant(){
                console.log(this.resturant.name,this.resturant.address,this.resturant.contact);
                let result= await axios.post("http://localhost:3000/resturant",{
                name:this.resturant.name,
                address:this.resturant.address,
                contact:this.resturant.contact,
                 
            })
            // console.log(result);
            if(result.status===201)
            {
                this.$router.push({name:"HomeCom"});
            }
            },
        },
        
        mounted(){
        let user=localStorage.getItem("user-info");
            this.name=JSON.parse(user).name;
            if(!user){
                //redirect the SignUp page if logout 
                this.$router.push({name:"SignUp"});
            }
        },

    }
</script>

<style>
#name{
    margin-top: 10px;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 30px;
}
.container input{
    height: 50px;
    padding-left: 10px;
    width: 300px;
    border: 1px solid yellowgreen;
    font-size: 15px;
}
button{
    height:50px ;
    width: 150px;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: large;
    cursor: pointer;
    background-color: yellowgreen ;

}
</style>