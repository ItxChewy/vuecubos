<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-success" aria-label="Third navbar example">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample03">
                <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                    <li class="nav-item">
                         <router-link class="navbar-brand nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">Iniciar Sesion</router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">Marcas</a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item" v-for="marca in marcas" :key="marca">
                                <router-link :to="'/marcas/' + marca" class="dropdown-item"> {{marca}}</router-link>
                            </li>
                        </ul>
                    </li>
                  
                    <li class="nav-item">
                        <button class="nav-link" @click="cerrarSesion()">Cerrar Sesion</button>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">Usuario</a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">
                                <router-link to="/perfil" class="dropdown-item">Perfil</router-link>
                            </li>
                            <li class="dropdown-item">
                                <router-link to="/compras" class="dropdown-item">Compras</router-link>
                            </li>
                            <li class="dropdown-item">
                                <router-link to="/pedido" class="dropdown-item">Realizar Pedido</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import ServiceCubos from '@/services/ServicioCubos'
const service = new ServiceCubos()
export default {
name:"MenuComponent",
data(){
    return{
        marcas:[],
    }
},mounted(){
    this.loadMarcas()
},
methods:{
    loadMarcas(){
        service.getMarcas().then(response =>{
            this.marcas = response.data
        })
    },
    cerrarSesion(){
        localStorage.removeItem('token')
        this.$router.push("/")
    }
}
}
</script>

<style>

</style>