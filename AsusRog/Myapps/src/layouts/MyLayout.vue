<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          
          APLIKASIKU
        </q-toolbar-title>
        </q-toolbar>
    </q-header>
    <q-drawer
      :breakpoint="767"
      :width="200"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item v-for="nav in navs" 
        :key="nav.id" 
        :to="nav.to"
        class="text-black"
        exact 
        clickable>
          <q-item-section avatar>
              <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
              <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
  @media screen and (min-width: 768px) {
    .menu {
      display: none;
    }
    
  }
  .q-drawer {
      color: white !important;
    }
</style>


<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      navs : [
        {
          label : 'Home',
          icon : 'home',
          to : '/home'
        },
        {
          label : 'Login',
          icon : 'folder',
          to : '/login'
        },
        {
          label : 'Owner',
          icon : 'folder',
          to : '/owner'
        },
        {
          label : 'Projek',
          icon : 'folder',
          to : '/projek'
        },
        {
          label : 'Employees',
          icon : 'folder',
          to : '/employee'
        }
      ]
    }
  }
}
</script>































































































<template>
  
</template>