<template>
  <div class="p-5">
    <h1>Tus Compras</h1>
    <hr>
    <table class="table table-boredered table-dark">
        <thead>
            <tr>
                <th>Num Pedido</th>
                <th>ID Cubo</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
                <tr v-for="compra in compras" :key="compra">
                    <td>{{compra.idPedido}}</td>
                    <td>{{compra.idCubo}}</td>
                    <td>{{compra.fechaPedido}}</td>
                </tr>
        </tbody>
    </table>
    <router-link to="/perfil" class="btn btn-primary">Volver al perfil</router-link> |
    <router-link to="/pedido" class="btn btn-primary">Realizar Pedido</router-link>
  </div>
</template>

<script>
import ServiceSeguridad from "@/services/ServicioSeguridad";
const service = new ServiceSeguridad();
export default {
  name: "ComprasComponent",
  data() {
    return {
      compras: [],
    };
  },
  mounted() {
    this.loadCompras();
  },
  methods: {
    loadCompras() {
      service.verCompras().then((result) => {
        this.compras = result.data;
      });
    },
  },
};
</script>

<style>
</style>