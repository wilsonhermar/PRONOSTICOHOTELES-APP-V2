<template>
    <div class= 'analisis'>
      <header>
          <nav>
            <button v-on:click="temporada">TEMPORADA</button>
            <button v-on:click="costo">COSTO</button>
          </nav>
      </header>
    </div>
</template>

<script>
export default {
    name: 'analisis',
    data: function(){
    return{
    }
  },
  methods:{
    costo: function(){
      this.$router.push({name:"costo"})
    },
    temporada: function(){
      this.$router.push({name:"temporada"})
    },
  }
}
</script>

<style>
.analisis{
    padding-top: 5.7vh;
    width: 100%;
    height: 15vh;
    min-height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0%;
  }

.analisis nav {
    display: block;
    align-items: center;
    margin:1px;
    font-size: 3vh;
    margin-inline: 24%;
    justify-content: space-between;
}
.analisis nav button{
    color: #E5E7E9;
    background: #1179e9;
    font-size: 2vh;
    font-weight:600;
    border: 1px solid #1179e9;
    border-radius: 5px;
    padding: 1.2vh 2vh;
    display: block;
    margin-top: .5em;
    cursor: pointer;
    width: 23vh;
    height: 6.5vh;
}
.analisis nav button:hover{
    color: #000000;
    background: #85C1E9;
    border: 1px solid #85C1E9;
    cursor: pointer;

}

</style>