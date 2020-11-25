<template>
  <div>
      <div>
      
      <div class="row">
        <div class="input-field col s12 ">
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
     
      <button @click="signup">Sign Up </button>

      <p>
        
          <router-link to ="/login">Login</router-link>
      </p>
  </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
    name : "Signup",
    data() {
       return {
        email : "",
        password : ""
       } 
    },
    methods: {
        signup: function() {
            //log the user in
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email,this.password)
            .then(
                user =>{
                    console.log(user);
                    alert("congrats, you are a new user");
                },
                err =>{
                    alert(err);
                }

            )
        }
        }
};        
</script>

<style >
.row{
margin: 40px;
margin-right: 120px;

}
</style>
