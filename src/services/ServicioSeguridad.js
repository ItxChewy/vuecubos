import axios from "axios"
import Global from "@/Global"


export default class ServiceSeguridad {

    login(user, password) {
        return new Promise(function (resolve) {
            let usuario = {
                email: user,
                password: password
            }
            let request = "api/manage/login"
            let url = Global.urlApi + request
            axios.post(url, usuario).then(response => {
                resolve(response)
            })
        })

    }

    perfilUsuario() {
        return new Promise(function (resolve) {
            let request = "api/manage/perfilusuario"
            let url = Global.urlApi + request
            let token = localStorage.getItem('token')
            const headers = { "Authorization": "bearer " + token }
            axios.get(url, { headers }).then(response => {
                resolve(response)
            })
        })


    }

    verCompras() {
        return new Promise(function (resolve) {
            let request = "api/compra/comprasusuario"
            let url = Global.urlApi + request
            let token = localStorage.getItem('token')
            const headers = { "Authorization": "bearer " + token }
            axios.get(url, { headers }).then(response => {
                resolve(response)
            })
        })

    }
    comprarCubo(id, cubo) {
        return new Promise(function (resolve) {
            let request = "api/compra/insertarpedido/" + id
            let url = Global.urlApi + request;
            let token = localStorage.getItem('token')
            const headers = { "Authorization": "bearer " + token }
            axios.post(url, cubo, { headers }).then(response => {
                resolve(response)
            })
        })


    }
}