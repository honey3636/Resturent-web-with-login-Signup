<template>
    <HeaderCom/>
    <h1 id="name"> {{name}} ,</h1>
    <h2>Welcom on Update Resturant page</h2>
    <div class="container">
        <input type="text" placeholder="Enter Name" name="name" v-model="resturant.name">
        <input type="text" placeholder="Enter Address" name="address" v-model="resturant.address">
        <input type="text" placeholder="Enter Contact No" name="contact" v-model="resturant.contact">
        <button v-on:click="UpdateResturant">Update Resturant</button>
    </div>
    
</template>


<script>
import axios from "axios";
import HeaderCom from "./Header.vue";
    export default {
        name:"UpdateRest",
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
        components:{
            HeaderCom,
        },
        methods:{
                async UpdateResturant(){
                
                let result= await axios.put("http://localhost:3000/resturant/"+this.$route.params.id,{
                address:this.resturant.address,
                name:this.resturant.name,
                contact:this.resturant.contact,
            })
             
            if(result.status==200)
            {
                //show HomeCom Page
                this.$router.push({name:"HomeCom"});
            }
            },
        },
         async mounted(){
        let user=localStorage.getItem("user-info");
        this.name=JSON.parse(user).name;
            if(!user){
                //redirect the SignUp page if logout 
                this.$router.push({name:"SignUp"});
            }
            const result= await axios.get("http://localhost:3000/resturant/"+this.$route.params.id)
            this.resturant=result.data;
            // console.log(result.data);
        },

    }
</script>