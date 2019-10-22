<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md">
  
      <div class="col-6">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Caption
          </div>
        </q-img>
      </div>

   <input v-model="message" @keyup="handleKeyup" @keydown="handlekeyDown"/>
    <h3> {{message}} </h3>
    <h4 v-if="message.length">{{message}}</h4>
    <h5 v-else>No Message </h5>
    <p> {{uppercaseMessage()}}</p>
    <p> {{lowercaseMessage()}}</p>
    <button @click="message=''">clear</button>
    <button @click="clearMessage">clear message dengan Methode</button> 
    <!-- saat dia @clickmessage maka dimethod dipanggil clearmessage (objectclearmessage) -->

    <ul>
    <li v-for="task in tasks"
    :key ="task.name">
    <div>{{task.name}}</div>
    <small> due : {{task.due_date}} at {{task.due_time}}
    </small>
    </li>
    </ul>
    </div>
  </q-page>
</template>
<style scoped>

</style>
<script>
export default {
  data() {
    return{
  message : 'APPS VUE',
  tasks: [{
    name: "Go to Shop",
    due_date: "2019/02/12",
    due_time: "18:00"
  },
  {
    name: "Get some fruits",
    due_date:"2019/02/13",
    due_time: "17:00"
  }
  ]
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
