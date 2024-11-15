<template>
  <div class="p-5">
    <h1>Home</h1>
        <div class="card" style="width: 18rem;" v-for="cubo in cubos" :key=cubo>
            <img :src=cubo.imagen class="card-img-top" style="width: 150px; height: 150px;">
            <div class="card-body">
              <h5 class="card-title">{{cubo.nombre}}</h5>
              <p class="card-text">{{cubo.precio}} $</p>
              <router-link  :to="'/detalle/' + cubo.idCubo" class="btn btn-primary">Detalle</router-link>
            </div>
          </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServicioCubos'
const service = new ServiceCubos()
export default {
name:"HomeComponent",
data(){
    return{
        cubos:[]
    }
},mounted(){
this.loadCubos()
},
methods:{
    loadCubos(){
        service.getCubos().then(result =>{
            this.cubos = result.data
        })
    }
}
}
</script>

<style>

</style>