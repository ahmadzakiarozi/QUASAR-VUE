
<template>
  <div class="row">
    <div id="form" class="q-mx-auto" style="max-width: 400px">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="Nama"
          label="NAMA *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
         <q-input
          filled
          v-model="JenisKelamin"
          label="Jenis Kelamin"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please enter your Gender' ]"
        />
        <q-input
          filled
          v-model="TanggalLahir"
          label="Tanggal Lahir*"
          hint="Tanggal Lahir"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
          <q-input
          filled
          v-model="NoTelepon"
          label="No Telepon*"
          hint="No Telepon"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
          filled
          v-model="Email"
          label="Email*"
          hint="email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

       

        <div>
          <q-btn label="MASUKKAN DATA" type="submit" color="primary"/>
          
        </div>
      </q-form>
    </div>
  </div>
</template>

<style scoped>

  #form{
    margin-top: 15%; 
  }
  
</style>

<script>

import axios from 'axios'
export default {

  data(){
    return{
      Nama : "",
      JenisKelamin : "",
      TanggalLahir: "",
      NoTelepon:"",
      Email: ""
     
    }
  },

  methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:3000/api/employees', {
    Nama: self.Nama,
    JenisKelamin: self.JenisKelamin,
    TanggalLahir: self.TanggalLahir,
    NoTelepon: self.NoTelepon,
    Email: self.Email
   
    
    
    })
    .then(function (response) {
      return  self.$router.push('/tampil')
         
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>