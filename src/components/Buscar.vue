<template>
    <div id= "buscar">
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
    name: "buscar",
    data:function(){
        return{
            informacion : "En este componte se devuelve toda la informacion del hotel!",
            mensaje : ""
        }
    },
    methods:{ 
        created:function(){
            let self = this
            let nombre_hotel = null
            let aux = "https://pronosticoshoteles-api-v2.herokuapp.com/hotel/search/{nombre}?name="
            //let aux = "http://127.0.0.1:8000/hotel/search/{nombre}?name="
            nombre_hotel = document.getElementsByName("nombreHotel")[0].value
            let url = aux+nombre_hotel
            axios.get(url)
            .then((result) =>{
                self.mensaje = ("El "+result.data.nombre +" Esta ubicado en "+ result.data.ubicacion +
                                " , tiene "+ result.data.estrellas + " estrellas. El numero total de habitaciones son: "+
                                result.data.totalHabitaciones + ". La cantidad de habitaciones sencillas son: "
                                + result.data.sencilla + ", el valor promedio de cada habitacion sencilla es : " + result.data.precioMinSenc 
                                + " . La cantidad de habitaciones dobles son : " + result.data.doble + " , el valor promedio de cada habitacion doble es : "
                                + result.data.precioMinDob + " . La cantidad de habitaciones tripes son : " + result.data.triple 
                                + " , el valor promedio de cada habitacion triple es : " + result.data.precioMinTrip +
                                " . La cantidad de Suits son : " + result.data.suite + " , El costo de cada suit es : " + result.data.precioMinSuite 
                                )
            })
            .catch((error)=> {
                self.mensaje = "[NO ES POSIBLE BUSCAR EL REGISTRO , NO EXISTE EN LA BASE DE DATOS]"
            });
        }
    }
}
</script>

<style>
    #buscar input{
        display:block;
        display: flex;
        padding: 0;
        font-size: 3vh;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    #buscar button{
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

    #buscar button:hover{
        color: #000000;
        background: #85C1E9;
        border: 1px solid #85C1E9;
        cursor: pointer;
    }

    #buscar h2{
        padding: 5px;
        font-family: "Homer Simpson UI";
        color: #000000;
        text-align: center;
        font-size: 6.1vh;
        margin-top: 0;
    }

    #buscar h3{
        text-align:center;
        font-family: "Homer Simpson UI";
        color: #000000;
        font-size: 4.5vh;
        margin-top: 1%;
    }


</style>