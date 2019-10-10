<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md">
   
   <input v-model="message" @keyup="handleKeyup" @keydown="handlekeyDown"/>
    <h3> {{message}} </h3>
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
