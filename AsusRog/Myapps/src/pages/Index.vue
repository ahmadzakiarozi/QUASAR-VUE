<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md">
   
   <input v-model="message" @keyup="handleKeyup" @keydown="handlekeyDown"/>
    <h3> {{message}} </h3>
    <h4 v-if="message.length">{{message}}</h4>
    <h5 v-else>No Message </h5>
    <p> {{uppercaseMessage()}}</p>
    <p> {{lowercaseMessage()}}</p>
    <button @click="message=''">clear</button>
    <button @click="clearMessage">clear message dengan Methode</button> 
    <!-- saat dia @clickmessage maka dimethod dipanggil clearmessage (objectclearmessage) -->
    </div>
  </q-page>
</template>
<style scoped>

</style>
<script>
export default {
  data() {
    return{
  message : 'APPS VUE'
    }

  },
  
  methods:{
    uppercaseMessage(){
    return this.message.toUpperCase();
     },
     lowercaseMessage(){
       return this.message.toLowerCase();
       
     },
    clearMessage(){
      this.message=''
    },
    handleKeyup(e){
      if (e.keyCode == 27){
        this.message='ESC'
      }
    },
    handlekeyDown(e){
      if (e.keyCode==13){
        this.message='ENTER'
      }
    }
  }
  // name: 'PageIndex'
}

</script>
