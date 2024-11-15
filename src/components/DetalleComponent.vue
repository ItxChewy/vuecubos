<template>
  <div class="p-5">
    <div class="card" style="width: 18rem;" v-if="cubo">
        <h1>{{cubo.nombre}}</h1>
        <img :src="cubo.imagen" class="card-img-top" style="width: 150px; height: 150px;">
        <div class="card-body">
            <p class="card-text">Marca y Modelo : {{cubo.marca}} {{cubo.modelo}}</p>
            <p class="card-text">Valoracion: {{cubo.valoracion}}</p>
            <p class="card-text">Precio: {{cubo.precio}} $</p>
            <router-link to="/" class="btn btn-primary">Volver</router-link>
        </div>
    </div>
    <br>
    <h2>Comentarios</h2>
    <hr>
       <ul v-for="comentario in comentarios" :key="comentario">
            <li>Usuario {{comentario.idUsuario}} : {{comentario.comentario}}</li>
       </ul> 
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServicioCubos";
const service = new ServiceCubos();
export default {
  name: "DetalleComponent",
  data() {
    return {
      cubo: [],
      comentarios:[]
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.loadCubo(id);
  },
  methods: {
    loadCubo(id) {
      service.getCuboId(id).then((result) => {
        this.cubo = result.data;
        let idCubo = this.cubo.idCubo
        this.loadComentarios(idCubo)
      });
    },
    loadComentarios(id){
        service.getCuboComentario(id).then(result =>{
            this.comentarios = result.data
        })
    }
  },
};
</script>

<style>
</style>