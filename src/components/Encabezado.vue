<template>
    <div class= 'encabezado'>
      <header>
          <h1>{{titulo}}</h1>
          <nav>
            <button v-on:click="basedata">INFORMACIÓN</button>
            <button v-on:click="pronosticos">ANÁLISIS</button>
            <button v-on:click="graficas">VISUALIZACIÓN</button>
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
      this.$router.push({name:"informacion"})
    },
    pronosticos: function(){
      this.$router.push({name:"analisis"})
    },
    graficas: function(){
      this.$router.push({name:"visualizacion"})
    }
  }
}
</script>

<style scoped>

.enacbezado{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 15vh;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.encabezado h1 {
    font-family: "Homer Simpson UI";
    font-size: 7vh;
    color: #000000;
    border: #3498DB;
    margin: 5px;
    background-color: #3498DB;
    text-align: center;
}

.encabezado nav {
    display: flex;
    align-items: center;

    margin-inline: 7vh;
    font-size: 0px;
    justify-content: space-between;
}
.encabezado nav button{
    color: #E5E7E9;
    background: #1179e9;
    font-size: 2vh;
    font-weight:600;
    border: 1px solid #1179e9;
    border-radius: 5px;
    padding: 1.5vh 2vh;
    display: inline-block;
    cursor: pointer;
    margin: 1vh;

}
.encabezado nav button:hover{
    color: #000000;
    background: #85C1E9;
    border: 1px solid #85C1E9;
    cursor: pointer;

}

</style>