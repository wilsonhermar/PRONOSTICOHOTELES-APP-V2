<template>
    <div class= 'visualizacion'>
        <h1>{{titulo}}</h1>
        <img src="@/assets/AT_HOME.png" alt="" width="25%" height="25%" />
    </div>   
</template>

<script>
export default {
    name: 'Visualizacion',
    data: function(){
    return{
        titulo : 'Estamos trabajando en el desarrollo del modulo de VISUALIZACION'
    }
  },
  methods:{
  }
}
</script>

<style>
.visualizacion h1 {
    font-family: "Homer Simpson UI";
    color: #000000;
    text-align: center;
}

</style>