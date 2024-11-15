<template>
 <div class="p-5">
     <h1>Cubos de la marca {{this.$route.params.id}}</h1>
    
        <div class="card" style="width: 18rem;" v-for="cubo in cubos" :key="cubo">
            <img :src="cubo.imagen" class="card-img-top" style="width: 150px; height: 150px;">
            <div class="card-body">
              <h5 class="card-title">{{cubo.nombre}}</h5>
              <p class="card-text">{{cubo.precio}} $</p>
              <router-link :to="'/detalle/' + cubo.idCubo" class="btn btn-primary">Detalle</router-link>
            </div>
          </div>
</div> 
</template>

<script>
import ServiceCubos from '@/services/ServicioCubos'
const service = new ServiceCubos()
export default {
name:"MarcasComponent",
data(){
    return{
        cubos:[],
    }
},mounted(){
    let id = this.$route.params.id;
    this.loadCubos(id)

},watch:{
    '$route.params.id'(nextVal,oldVal){
        if(nextVal != oldVal){
            this.loadCubos(nextVal)
        }
    }
}
,methods:{
    loadCubos(id){
        service.getCubosPorMarca(id).then(result =>{
            this.cubos = result.data
        })
    }
}
}
</script>

<style>

</style>