<template>
    <div class= 'informacion'>
      <header>
          <nav>
            <button v-on:click="init">INICIO</button>
            <button v-on:click="verificacion">VERIFICACION</button>
            <button v-on:click="buscar">BUSCAR</button>
            <button v-on:click="actualizar">ACTUALIZAR</button>
            <button v-on:click="crear">CREAR</button>
            <button v-on:click="borrar">BORRAR</button>
          </nav>
      </header>
    </div>
</template>

<script>
export default {
    name: 'Informacion',
    data: function(){
    return{
    }
  },
  methods:{
    init: function(){
      this.$router.push({name:"test"})
    },
    verificacion: function(){
      this.$router.push({name:"verificacion"})
    },
    buscar: function(){
      this.$router.push({name:"buscar"})
    },
    actualizar: function(){
      this.$router.push({name:"actualizar"})
    },
    borrar: function(){
      this.$router.push({name:"borrar"})
    },
    crear: function(){
      this.$router.push({name:"crear"})
    }
  }
}
</script>

<style>
.informacion{
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10%;
  }

.informacion nav {
    display: block;
    align-items: center;
    margin:1px;
    font-size: 20px;
    margin-inline: 24%;
    justify-content: space-between;
}
.informacion nav button{
    color: #E5E7E9;
    background: #1179e9;
    font-size: 14px;
    font-weight:600;
    border: 1px solid #1179e9;
    border-radius: 5px;
    padding: 10px 20px;
    display: block;
    margin-top: .5em;
    cursor: pointer;
    width: 150px;
    height: 50px;
}
.informacion nav button:hover{
    color: #000000;
    background: #85C1E9;
    border: 1px solid #85C1E9;
    cursor: pointer;

}
</style>