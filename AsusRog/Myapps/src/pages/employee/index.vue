<template>
<div class="q-pa-md">
    <div class="row">
        <div class="col" style="align : center">
            <!-- Qlist awal -->
            <q-list bordered class="rounded-borders q-mx-auto bg-secondary" style="max-width: 1100px">
                <q-item-label header>
                    <q-btn color="red" icon="add_box" label="Employee" size="sm" @click="add()" />
                    <q-btn color="blue" icon="add_box" label="Contoh" size="sm" @click="contoh()"/>
                </q-item-label>

                <q-item class="bg-teal">
                    <q-item-section avatar top class="col-0 gt-xm" style="align :left">
                        <q-item-label class="q-mt-sm">No</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Nama</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-sm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Jenis Kelamin</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Tanggal Lahir</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">No Telepon</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Email</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-xm flex flex-center">
                    <q-item-label class="q-mt-sm flex flex-center">Aksi </q-item-label>
                    </q-item-section>
                </q-item>

                <!-- Tabel -->
                <q-item v-for="(employee, index) in employees" :key="employee.id" class="bg-grey-3" line="1">
                    <q-item-section avatar top class="col-0 gt-xm">
                        <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{employee.Nama}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{employee.JenisKelamin}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{employee.TanggalLahir}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{employee.NoTelepon}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{employee.Email}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-xm flex flex-center">
                        <q-item-label lines="1">

                            <q-btn size="12px" flat dense round icon="edit" @click="edit(employee)" />
                            <q-btn size="12px" flat dense round icon="delete" @click="onDelete(employee.id)" />
                            <q-btn size="12px" flat dense round icon="more_vert" />

                        </q-item-label>
                    </q-item-section>
                </q-item>
                <div class="q-pa-lg flex flex-center">
                    <q-pagination
                    v-model="current"
                    color="red"
                    :max="3"
                    :boundary-links="true">
                    </q-pagination>
                </div>
            </q-list>
            <!-- Qlist akhir -->

            <!-- Form popup awal  -->
            <q-dialog v-model="dialog" persistent>
                <q-card style="width:300px">
                    <q-card-section>
                        <div id="form" class="q-mx-auto" style="max-width: 700px">
                            <q-form @submit="onSubmit" class="q-gutter-md">
                                <q-input 
                                filled v-model="form.Nama" 
                                label="Masukkan Nama *" 
                                hint="Nama" 
                                lazy-rules 
                                :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <!-- <q-input 
                                filled v-model="form.JenisKelamin" 
                                label="Laki-Laki/Perempuan" 
                                hint="Jenis Kelamin" 
                                lazy-rules 
                                :rules="[ val => val && val.length > 0 || 'Please type something']" /> -->
                                <div class="q-gutter-sm">
                                <q-radio v-model="form.JenisKelamin" val="Laki-laki" label="Laki-laki" color="primary" />
                                <q-radio v-model="form.JenisKelamin" val="Perempuan" label="Perempuan" color="primary" />
                                </div>
                                <div class="q-px-sm q-mt-sm">
                                Your selection is: <strong>{{kelamin}}</strong>
                                </div>
                                <q-input 
                                filled type="date"
                                v-model="form.TanggalLahir" 
                                hint="Tanggal Lahir" 
                                lazy-rules 
                                :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input 
                                filled v-model="form.NoTelepon" 
                                label="Masukkan No Telepon *" 
                                hint="No Telepon" 
                                lazy-rules 
                                :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input 
                                filled v-model="form.Email" 
                                label="Masukkan Email *" 
                                hint="Email" 
                                lazy-rules 
                                :rules="[ val => val && val.length > 0 || 'Please type something']" />

                                <!-- Button awal -->
                                <div>
                                    <q-btn flat label="Add" type="submit" color="primary" v-close-popup v-show="!updateSubmit" />
                                    <q-btn flat label="Update" type="button" color="primary" v-close-popup v-show="updateSubmit" @click="update(form)" />
                                    <q-btn flat label="Cancel" color="primary" v-close-popup="cancelEnabled" @click="batal()" />

                                </div>
                                <!-- Button akhir -->

                            </q-form>
                        </div>
                    </q-card-section>
                </q-card>
            </q-dialog>
            <!-- Form popup akhir  -->
        </div>
    </div>
</div>
</template>

<style lang="sass" scoped>
    .row > div
      padding: 5px 7px
</style>

<script>
import employeee from '../../api/employee/index';

export default {
    data() {
        return {
            current: 1,
            updateSubmit: false,
            dialog: false,
            cancelEnabled: false,
            kelamin: "",
            employees: [{}],
            form: {
                id: '',
                Nama: '',
                JenisKelamin: '',
                TanggalLahir: '',
                NoTelepon:'',
                Email:''
            }
        }
    }, 

    // Get data dari Api
    async mounted() {
        const response = await
        employeee.getemployee(window) 
            {
                this.employees = response
            }
        },

    methods: {

        // Method untuk delete data By ID
        onDelete(id) {
            if (confirm('Apakah anda yakin akan menghapus data ini ?')) {
                employeee.deleteemploye(window, id)
                    .then((res) => {
                        employeee.getemployee(window)
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
        },

        // Methods add untuk mengaktifkan popup
        add() {
            this.dialog = true
            this.updateSubmit = false
          },
          contoh(){
              this.dialog=true
              this.updateSubmit=false
          },

        // method untuk Tambah data
        onSubmit() {
            const self = this
            employeee.postEmployee(window, self.form.Nama, self.form.JenisKelamin,
                                self.form.TanggalLahir, self.form.NoTelepon,
                                self.form.Email)
                .then(function (result) {
                    self.$router.go('/employee')
                })
                .catch(function (err) {
                    console.log(err);
                });
            },

        // method untuk Edit data
        edit(employee) {
            if (confirm('Anda akan di alihkan ke halaman Edit data, Tekan OK untuk lanjut atau Batal untuk kembali')) {
                try {
                    this.dialog = true
                    this.updateSubmit = true
                    this.form.id = employee.id
                    this.form.Nama = employee.Nama
                    this.form.JenisKelamin = employee.JenisKelamin
                    this.form.TanggalLahir = employee.TanggalLahir
                    this.form.NoTelepon = employee.NoTelepon
                    this.form.Email = employee.Email
                } catch (error) {
                    console.log(error.message)
                }
            }
        },

        // method Tombol batal pada popup
        batal() {
            if (confirm('Apakah Anda yakin ingin keluar proses ini !!!')) {
                this.dialog = false
            }
        },

        // method Update
        update(id) {
            const self = this
            employeee.putEmployee(window, self.form.id, self.form.Nama, 
                                self.form.JenisKelamin, self.form.TanggalLahir, 
                                self.form.NoTelepon, self.form.Email)
            .then(function (result) {
                self.$router.go('/employee')
            })
            .catch(function (err) {
                console.log(err);
            });
        }
    }
}
</script>