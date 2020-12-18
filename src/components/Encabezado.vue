<template>
    <div class= 'encabezado'>
      <header>
          <h1>{{titulo}}</h1>
          <nav>
            <button v-on:click="basedata">BASE DE DATOS</button>
            <button v-on:click="pronosticos">PRONOSTICOS</button>
            <button v-on:click="graficas">GRAFICAS</button>
            <button v-on:click="informe">INFORME</button>
          </nav>
      </header>
    </div>
</template>


<script>
export default {
    name: 'Encabezado',
    data: function(){
    return{
      titulo : 'APLICATIVO PRONOSTICO DE HOTELES',
    }
  },
  methods:{
    basedata: function(){
      this.$router.push({name:"basedatos"})
    },
    pronosticos: function(){
      this.$router.push({name:"pronosticos"})
    },
    graficas: function(){
      this.$router.push({name:"graficas"})
    },
    informe: function(){
      this.$router.push({name:"informe"})
    }
  }
}
</script>

<style scoped>

.enacbezado{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.encabezado h1 {
    font-family: "Homer Simpson UI";
    color: #000000;
    border: rgba(52, 152, 219, 0.384) 2px solid;
    margin: 1%;
    background-color: #3498DB;
    text-align: center;
}

.encabezado nav {
    display: flex;
    align-items: center;
    margin:auto;
    font-size: 20px;
    margin-inline: 24%;
    justify-content: space-between;
}
.encabezado nav button{
    color: #E5E7E9;
    background: #1179e9;
    font-size: 14px;
    font-weight:600;
    border: 1px solid #1179e9;
    border-radius: 5px;
    padding: 10px 20px;
    display: inline-block;
    cursor: pointer;

}
.encabezado nav button:hover{
    color: #000000;
    background: #85C1E9;
    border: 1px solid #85C1E9;
    cursor: pointer;

}

</style>