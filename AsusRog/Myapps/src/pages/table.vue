<template>
  <div class="q-pa-md">
    <q-table
      title="DATA KARYAWAN"
      :data="employees"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>
<script>
import tabele from '../api/employee/index'
export default {
  data () {
    return {
      columns: [
        {
          name: 'Nama',
          required: true,
          label: 'Nama',
          align: 'left',
          field: row => row.Nama,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        
        {
          name: 'JenisKelamin',
          required: true,
          label: 'Jenis Kelamin',
          align: 'left',
          field: row => row.JenisKelamin,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'TanggalLahir',
          required: true,
          label: 'Tanggal Lahir',
          align: 'left',
          field: row => row.TanggalLahir,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'NoTelpon',
          required: true,
          label: 'Telp',
          align: 'left',
          field: row => row.NoTelepon,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'Email',
          required: true,
          label: 'Email',
          align: 'left',
          field: row => row.Email,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'id',
          required: true,
          label: 'aidi',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        }
         ],
      employees: [ ]
    }
  },
  beforeCreate()
  {
    let self=this;
    tabele.getemployee(window).then(function(result)
    {
      self.employees = result
    })
  },
  // async mounted(){
  //   const response = await axios.get('http://localhost:3000/api/employees')
  //   this.employees=response.data
  

  onDelete(id) {
            if (confirm('Apakah anda yakin akan menghapus data ini ?')) {
                tabele.deleteemploye(window, id)
                    .then((res) => {
                        tabele.getemployee(window)
                            .then((res) => {
                                this.employees = res.data
                                this.$router.go('/employee')
                            })
                            .catch(() => {
                                alert('Error load data');
                            })
                    })
                    .catch(() => {
                        alert('Error load data');
                    })
                console.log("delete called");
            }
            
}
}
</script>