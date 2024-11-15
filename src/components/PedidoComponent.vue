<template>
  <div class="p-5">
    <h1>Realizar pedido</h1>
    <hr />
    <form class="form" v-on:submit.prevent="comprarCubo()">
      <label class="from-control">Elige un Cubo</label>
      <select class="form-select" v-model="cuboActual">
        <option v-for="cubo in cubos" :key="cubo.idCubo" :value="cubo.idCubo">
          {{ cubo.nombre }}
        </option>
      </select>

      <br />
      <br />
      <button class="btn btn-primary">Comprar Cubo</button>
    </form>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServicioCubos";
const service = new ServiceCubos();
import ServiceSeguridad from "@/services/ServicioSeguridad";
const serviceS = new ServiceSeguridad();
export default {
  name: "PedidoComponent",
  data() {
    return {
      cubos: [],
      cuboActual: "",
    };
  },
  mounted() {
    this.loadCubos();
  },
  methods: {
    loadCubos() {
      service.getCubos().then((result) => {
        this.cubos = result.data;
      });
    },
    comprarCubo(){
        serviceS.comprarCubo(this.cuboActual,"").then(() =>{
            this.$router.push("/compras")
        })
    }
  },
};
</script>

<style>
</style>