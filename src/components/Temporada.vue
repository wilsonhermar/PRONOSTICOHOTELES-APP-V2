<template>
    <div id= "temporada">
        <header>
            <h2>{{informacion}}</h2>
        </header>
        <input type="text" placeholder="Nombre Hotel" name="nombreHotel"/>
        <input type="number" placeholder="N° Mes" min="1" max="12" name="mes"/>
        <button v-on:click="created">EJECUTAR</button>
        <h3>{{mensaje}}</h3>
    </div> 
</template>

<script>
import axios from 'axios';
export default {
    name: "temporada",
    data:function(){
        return{
            informacion : "En este componte se devuelve informacion de la temporada en el hotel!",
            mensaje : ""
        }
    },
    methods:{ 
        created:function(){
            let self = this
            let nombre_hotel = null
            let mes_b = null
            let aux = "https://pronosticoshoteles-api-v2.herokuapp.com/temp/search/"
            //let aux = "http://127.0.0.1:8000/temp/search/"
            nombre_hotel = document.getElementsByName("nombreHotel")[0].value
            mes_b = document.getElementsByName("mes")[0].value
            let url = aux+nombre_hotel+","+mes_b
            axios.get(url)
            .then((result) =>{
                self.mensaje = (result.data)
            })
            .catch((error)=> {
                self.mensaje = "[NO ES POSIBLE BUSCAR EL REGISTRO , NO EXISTE EN LA BASE DE DATOS]"
            });
        }
    }
}
</script>

<style>
    #temporada input{
        display:block;
        display: flex;
        padding: 0%;
        font-size: 3vh;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    #temporada button{
        color: #E5E7E9;
        background: #1179e9;
        font-size: 2vh;
        font-weight:600;
        border: 1px solid #1179e9;
        border-radius: 5px;
        padding: 1.2vh 2vh;
        display: block;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1%;
    }

    #temporada button:hover{
        color: #000000;
        background: #85C1E9;
        border: 1px solid #85C1E9;
        cursor: pointer;
    }

    #temporada h2{
        padding: 5px;
        font-family: "Homer Simpson UI";
        color: #000000;
        text-align: center;
        font-size: 6.1vh;
        margin-top: 0;
    }

    #temporada h3{
        text-align:center;
        font-family: "Homer Simpson UI";
        color: #000000;
        font-size: 4.5vh;
        margin-top: 1%;
    }


</style>