<template>
    
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/addResturant">Add Resturent</router-link>
        <!-- <router-link to="/updateResturant">Update Resturent</router-link> -->
        <!-- <a href="#">Home</a> -->
        <!-- <a  href="#">Add Resturent</a>
        <a  href="#">Update Resturent</a> -->
        <a v-on:click="logOut()" href="#">Logout</a>
    </div>
</template>

<script>
export default{
    name:"HeaderCom",
    
    methods:{
        logOut(){
           // clearing the local storage
           localStorage.clear();
           this.$router.push({name:"LoginCom"});
        },
        addRest()
        {
            this.$router.push({name:"AddRest"});
        },
    }

}
</script>

<style>
.nav{
    background-color: #333;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    
}
.nav a{
    color: white;
    text-decoration: none;
    padding: 15px 20px;
    font-size: 20px;
}
.nav a:hover{
    background-color: #ddd;
    color:#222;
}
</style>  