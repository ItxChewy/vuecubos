import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import MarcasComponent from './components/MarcasComponent.vue'
import DetalleComponent from './components/DetalleComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import PerfilComponent from './components/PerfilComponent.vue'
import ComprasComponent from './components/ComprasComponent.vue'
import PedidoComponent from './components/PedidoComponent.vue'

var myRoutes = [
{
    path:"/",component:HomeComponent
},
{
    path:"/marcas/:id", component:MarcasComponent
},
{
    path:"/detalle/:id", component:DetalleComponent
},
{
    path:"/login", component:LoginComponent
},
{
path:"/perfil", component:PerfilComponent
},
{
    path:"/compras", component:ComprasComponent
},
{
    path:"/pedido", component:PedidoComponent
}
]
var router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router