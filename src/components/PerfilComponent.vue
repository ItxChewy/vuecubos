<template>
  <div class="p-5">
      <h1>Mi Perfil</h1>
    <hr>
    <ul>
        <li>Nombre : {{usuario.nombre}}</li>
        <li>Email : {{usuario.email}}</li>
    </ul>
    <router-link to="/compras" class="btn btn-primary" >Mostar Compras</router-link>
  </div>
</template>

<script>
import ServiceSeguridad from '@/services/ServicioSeguridad'
const service = new ServiceSeguridad()
export default {
name:"PerfilComponent",
data(){
    return{
        usuario:""
    }
},mounted(){
    this.loadUsuario()
},
methods:{
    loadUsuario(){
        service.perfilUsuario().then(result =>{
            this.usuario = result.data
        })
    }
}
}
</script>

<style>

</style>