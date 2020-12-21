<template>
    <div id="inicio">
        <h2>¡BIENVENIDO!<br/><br/>
        Presentamos nuestro modelo de aplicación para Proyectar los Precios de las Habitaciones de su Hotel.<br/><br/>
        Estado de la red: {{mensaje}}</h2>
    </div>    
</template>

<script>
import axios from 'axios'; 
export default {
    name: "inicio",
    data:function(){
        return{
            mensaje : ""
        }
    },
    created:function(){
        let self = this
        axios.get("https://pronosticohoteles-api-v2.herokuapp.com/test/")
        //axios.get("http://127.0.0.1:8000/test/")
            .then((result) =>{
                self.mensaje = result.data
            })
            .catch((error)=> {
                self.mensaje = "[NO ES POSIBLE LA CONEXION CON EL SERVIDOR]"
            });
    }
}
</script>

<style>
    #inicio{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

    }
    #inicio h2{
        
        padding: 0.8vh;
        font-family: "Homer Simpson UI";
        color: #000000;
        text-align: center;
        font-size: 6vh;
        font-weight: 200%;
    }
    #inicio h3{
        padding: 5px;
        font-family: "Homer Simpson UI";
        color: #000000;
        text-align: center;
        font-size: 4.5vh;
        font-weight: 200%;
    }
</style>