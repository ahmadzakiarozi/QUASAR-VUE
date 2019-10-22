import { getApiNoAuth } from "../utils"

export default {
    getemployee(window){
        return getApiNoAuth()
        .get('employees')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    postEmployee(window, Nama, JenisKelamin,
        TanggalLahir, NoTelepon, Email){
return getApiNoAuth()
.post('/employees/' ,{
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

    deleteemploye(window, id){
        return getApiNoAuth()
        .delete('/employees/'.concat(id))
            .then (function(response) {
                console.log(response)
                return response.data
            })
            .catch (function(err){
                console.log(err)
            })
        
    },
    putEmployee(window,id,Nama, JenisKelamin,TanggalLahir,NoTelepon,Email){
        return getApiNoAuth()
        .put('/employees/'+id,{
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