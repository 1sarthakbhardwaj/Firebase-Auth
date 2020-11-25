<template>
  <div>
      
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" v-model="email" />
          <label for="email">Email</label>
        </div>
      </div>
      
      
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" v-model="password" />
          <label for="password">Password</label>
        </div>
      </div>
     
      <button @click="login">Login</button>
          <button @click="logout">Logout </button>

      <p>
          New user?
          <router-link to ="/signup">Signup</router-link>
      </p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
    name : "Login",
    data() {
       return {
        email : "",
        password : ""
       } 
    },
    methods: {
        login: function() {
            //log the user in
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email,this.password)
            .then(
                user =>{
                    console.log(user);
                    alert("you have signed in");
                },
                err =>{
                    alert(err);
                }

            )
        },
        


            logout: function() {
        firebase
        .auth()
        .signOut()
        .then(()=>{
            this.$router.replace('/');
        })
        .catch((err) =>{
            console.log(err);
        })
    }
    },
    
};        
</script>

<style scoped>

</style>
