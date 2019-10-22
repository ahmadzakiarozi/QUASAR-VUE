
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue')
  },
{
  path:'/',
  component: () => import('layouts/MyLayout.vue'),
  children: [
    {path:'',component:()=>import('pages/admin/index.vue')},
    {path:'employee', component:()=>import('pages/employee/index.vue')},
    {path:'employee_add',component:()=>import('pages/employee/add.vue')},
    {path:'employee_add',component:()=>import('pages/employee/edit.vue')},
    { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'table', component: () => import('pages/table.vue') },
      { path: 'tambah', component: () => import('pages/admin/tambah.vue') },
      { path: 'tampil', component: () => import('pages/admin/index.vue') },
      { path: 'tabel', component: () => import('pages/tabel.vue') },
      {path: 'owner', component: () => import('pages/owner/index.vue')}
  ]
}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
