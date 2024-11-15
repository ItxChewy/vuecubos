import Global from "@/Global";
import axios from "axios";


export default class ServiceCubos {
    getCubos() {
        return new Promise(function (resolve) {
            let request = "api/cubos"
            let url = Global.urlApi + request
            axios.get(url).then(response => {
                resolve(response)
            })
        })

    }
    getMarcas() {
        return new Promise(function (resolve) {
            let request = "api/cubos/marcas"
            let url = Global.urlApi + request
            axios.get(url).then(response => {
                resolve(response)
            })
        })

    }

    getCubosPorMarca(id) {
        return new Promise(function (resolve) {
            let request = "api/cubos/cubosmarca/" + id;
            let url = Global.urlApi + request
            axios.get(url).then(response => {
                resolve(response)
            })
        })

    }
    getCuboId(id) {
        return new Promise(function (resolve) {
            let request = "api/cubos/" + id
            let url = Global.urlApi + request
            axios.get(url).then(response => {
                resolve(response)
            })
        })

    }
    getCuboComentario(id) {
        return new Promise(function (resolve) {
            let request = "api/comentarioscubo/getcomentarioscubo/" + id
            let url = Global.urlApi + request;
            axios.get(url).then(response => {
                resolve(response)
            })
        })

    }
}