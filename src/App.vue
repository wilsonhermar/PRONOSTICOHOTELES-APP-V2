<template>
  <div class="app">
    <img src="./assets/logo_isa_1.png" alt="" width="330vh" height="85vh" />
    <Encabezado></Encabezado>
    <div class ="main-component">
      <router-view></router-view>
    </div>
    <div class ="footer">
      <h2>{{piePagina}}</h2>
    </div>
  </div>
</template>

<script>
import Encabezado from "./components/Encabezado";
export default {
  name: 'App',
  components: {Encabezado},
    data: function(){
      return{
        piePagina : 'APLICATIVO PRONOSTICO DE HOTELES',
      }
    }
}
</script>

<style>

#body {
  margin-top: 0 0 0 0;
}

.app{
    height: 40vh;
    margin: 0;
    padding: 0;
    background: #D6EAF8;
}

.main-component{
    height: 95vh;
    margin: 0;
    padding: 0;
    background-image: url("./assets/imagen_fondo.jpg");
    background-repeat: repeat-y;
    background-attachment: fixed;
    background-size: 100%;
}


.footer{
    margin-top: 0;
    padding: 0;
    width: 100%;
    height: 60%;
    background-color: #1B4F72;
    color: #E5E7E9;
}

.footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

img{
display:flex;
margin:auto;
}

</style>
