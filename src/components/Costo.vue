<template>
    <div id= "costo">
        <header>
            <h2>{{informacion}}</h2>
        </header>
        <input type="text" placeholder="Nombre Hotel" name="nombreHotel"/>
        <input type="text" placeholder="Tipo Habitación" name="tipo" list="items"/>
        <datalist id="items">
        <option value="sencilla"></option>
        <option value="doble"></option>
        <option value="triple"></option>
        <option value="suite"></option>
        </datalist>
        <input type="number" placeholder="N° Mes" min="1" max="12" name="mes"/>
        <button v-on:click="created">EJECUTAR</button>
        <h3>{{mensaje}}</h3>
    </div> 
</template>

<script>
import axios from 'axios';
export default {
    name: "costo",
    data:function(){
        return{
            informacion : "En este componte se devuelve informacion del costo de la habitación del hotel!",
            mensaje : ""
        }
    },
    methods:{ 
        created:function(){
            let self = this
            let nombre_hotel = null
            let tipo_habitacion = null
            let mes_b = null
            let aux_mes = null
            let aux = "https://pronosticoshoteles-api-v2.herokuapp.com/costo/search/"
            //let aux = "http://127.0.0.1:8000/costo/search/"
            nombre_hotel = document.getElementsByName("nombreHotel")[0].value
            tipo_habitacion = document.getElementsByName("tipo")[0].value
            mes_b = document.getElementsByName("mes")[0].value
            let url = aux+nombre_hotel+","+mes_b+","+tipo_habitacion
            if (mes_b==='1'){
                aux_mes = 'enero'
            }else if(mes_b==='2'){
                aux_mes = 'febrero'
            }else if(mes_b==='3'){
                aux_mes = 'marzo'
            }else if(mes_b==='4'){
                aux_mes = 'abril'
            }else if(mes_b==='5'){
                aux_mes = 'mayo'
            }else if(mes_b==='6'){
                aux_mes = 'junio'
            }else if(mes_b==='7'){
                aux_mes = 'julio'
            }else if(mes_b==='8'){
                aux_mes = 'agosto'
            }else if(mes_b==='9'){
                aux_mes = 'septiembre'
            }else if(mes_b==='10'){
                aux_mes = 'octubre'
            }else if(mes_b==='11'){
                aux_mes = 'noviembre'
            }else{
                aux_mes = 'diciembre'
            }
            axios.get(url)
            .then((result) =>{
                self.mensaje = ("La habitación "+tipo_habitacion+" en el hotel "+nombre_hotel+" durante el mes de "+aux_mes+" tiene un costo de: $"+result.data[1])
            })
            .catch((error)=> {
                self.mensaje = "[NO ES POSIBLE BUSCAR EL REGISTRO , NO EXISTE EN LA BASE DE DATOS]"
            });
        }
    }
}
</script>

<style>
    #costo input{
        display:block;
        display: flex;
        padding: 0%;
        font-size: 3vh;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    #costo button{
        color: #E5E7E9;
        background: #1179e9;
        font-size: 2vh;
        font-weight:600;
        border: 1px solid #3498DB;
        border-radius: 5px;
        padding: 1.2vh 2vh;
        display: block;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1%;
    }

    #costo button:hover{
        color: #000000;
        background: #85C1E9;
        border: 1px solid #85C1E9;
        cursor: pointer;
    }

    #costo h2{
        padding: 5px;
        font-family: "Homer Simpson UI";
        color: #000000;
        text-align: center;
        font-size: 6.1vh;
        margin-top: 0;
    }

    #costo h3{
        text-align:center;
        font-family: "Homer Simpson UI";
        color: #000000;
        font-size: 4.5vh;
        font-weight: 200%;
        margin-top: 1%;;
    }


</style>