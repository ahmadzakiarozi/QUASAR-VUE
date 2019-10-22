import { getApiNoAuth } from "../utils"

export default {
    getowner(window){
        return getApiNoAuth()
        .get('owners')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    postowner(window, Nama, JenisKelamin,
        TanggalLahir, NoTelepon, Email){
return getApiNoAuth()
.post('/owners/' ,{
Nama : Nama,
JenisKelamin : JenisKelamin,
TanggalLahir : TanggalLahir,
NoTelepon : NoTelepon,
Email : Email
})
.then(function(response){
console.log(response)
return response.data
}).catch(function(err){
console.log(err)
})
},

deleteowner(window, id){
return getApiNoAuth()
.delete('/owners/'.concat(id))
.then (function(response) {
console.log(response)
return response.data
})
.catch (function(err){
console.log(err)
 })
        
    },
    putowner(window,id,Nama, JenisKelamin,TanggalLahir,NoTelepon,Email){
        return getApiNoAuth()
        .put('/owners/'+id,{
            Nama: Nama,
            JenisKelamin: JenisKelamin,
            TanggalLahir : TanggalLahir,
            NoTelepon : NoTelepon,
            Email : Email

        })
        .then (function(response){
            console.log(response);
            
        })
        .catch (function(err){
            console.log(err);
            
        })
    }
}