<template>
  <div class="p-5">
    <h1>Inicar Sesion</h1>
    <div style="align-self: center;" class="p-5">
        <form class="form" v-on:submit.prevent="iniciarSesion()">
            <label class="from-label">Usuario</label>
            <input class="form-control"  name="cajauser" v-model="user"/>
            <label class="from-label">Contraseña</label>
            <input class="form-control" name="cajacontra" v-model="password"/>
            <br>
            <button class="btn btn-primary">Iniciar Sesión</button>
        </form>
    </div>
  </div>
</template>

<script>
import ServiceSeguridad from '@/services/ServicioSeguridad'
const service = new ServiceSeguridad()
export default {
name:"LoginComponent",
data(){
    return{
        user:"",
        password:""
    }
},methods:{
iniciarSesion(){
    service.login(this.user,this.password).then(result =>{
        localStorage.setItem('token',result.data.response)
        this.$router.push("/perfil")
    })
}
}
}
</script>

<style>

</style>