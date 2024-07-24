<template>
    <HeaderCom />
    <h1 id="title">Hello {{ name }} ,Welcome on Home page</h1>
    <div id="homeTable">
        <table>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Address</td>
                <td>Contact</td>
                <td>Action</td>
                <td>Delete</td>

            </tr>
            <tr v-for="item in resturants" :key="item">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.contact }}</td>
                <!-- <td><div id="btn2"><router-link :to="'/updateResturant/'+item.id">Update</router-link></div></td> -->
                <td><button class="btn" @click="updateResturant(item.id)">Update</button></td>
                <td><button class="btn" @click="deleteResturant(item.id)">Delete</button></td>

            </tr>

        </table>
    </div>
</template>


<script>
import axios from "axios";
import HeaderCom from "./Header.vue";
export default {
    name: "HomeCom",
    data() {
        return {
            name: "",
            resturants: []
        }
    },
    components: {
        HeaderCom,
    },
    methods: {
        async deleteResturant(id) {
            let result = await axios.delete("http://localhost:3000/resturant/" + id)
            if (result.status == 200) {
                location.reload();
            }
        },
        updateResturant(id) {
            // Programmatically navigate to the updateResturant page
            this.$router.push({ path: `/updateResturant/${id}` });
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            //redirect the SignUp page if logout 
            this.$router.push({ name: "SignUp" });


        }
        
        if(user) {
            this.name = JSON.parse(user).name;
            let result = await axios.get("http://localhost:3000/resturant");
            // console.warn(result.data); 
            this.resturants = result.data;
        }


    },

}
</script>

<style scoped>
#title {
    margin: 10px;
}

#homeTable {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2%;
}

.btn {
    width: 100%;
}

table {
    border-collapse: collapse;
    border: 1px solid black;
    width: 100%;



}

table,
td,
tr {
    border: 1px solid black;
    padding: 8px;
}
</style>