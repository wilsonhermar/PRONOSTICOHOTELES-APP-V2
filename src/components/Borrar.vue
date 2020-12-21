<template>
    <div id= "borrar">
        <header>
            <h2>{{informacion}}</h2>
        </header>
        <input type="text" name="nombreHotel"/>
        <button v-on:click="created">EJECUTAR</button>
        <h3>{{mensaje}}</h3>
    </div> 
</template>

<script>
import axios from 'axios';
export default {
    name: "borrar",
    data:function(){
        return{
            informacion : "En este componte se borra toda la informacion de un  hotel!",
            mensaje : ""
        }
    }, 
    methods:{ 
        created:function(){
            let self = this
            let nombre_hotel = null
            let aux = "https://pronosticohoteles-api-v2.herokuapp.com/hotel/delete/"
            //let aux = "http://127.0.0.1:8000/hotel/delete/"
            nombre_hotel = document.getElementsByName("nombreHotel")[0].value
            let url = aux+nombre_hotel
            axios.delete(url)
            .then((result) =>{
                self.mensaje = result.data
            })
            .catch((error)=> {
                self.mensaje = "[NO ES POSIBLE BORRAR EL REGISTRO , NO EXISTE EN LA BASE DE DATOS]"
            });
        }
    }
}
</script>

<style>
    #borrar input{
        display:block;
        display: flex;
        padding: 0%;
        font-size: 3vh;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    #borrar button{
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

    #borrar button:hover{
        color: #000000;
        background: #85C1E9;
        border: 1px solid #85C1E9;
        cursor: pointer;
    }

    #borrar h2{
        padding: 5px;
        font-family: "Homer Simpson UI";
        color: #000000;
        text-align: center;
        font-size: 6.1vh;
        margin-top: 0;
    }

    #borrar h3{
        text-align:center;
        font-family: "Homer Simpson UI";
        color: #db0c0cbe;
        font-size: 4.5vh;
        margin-top: 1%;
    }


</style>