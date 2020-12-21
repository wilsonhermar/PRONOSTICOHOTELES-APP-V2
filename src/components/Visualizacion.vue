<template>
    <div class= 'visualizacion'>
        <h1>{{titulo}}</h1>
        <img src="@/assets/AT_HOME.png" alt="" width="350vh" height="200vh" />
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
    padding: 5px;
    font-family: "Homer Simpson UI";
    color: #000000;
    text-align: center;
    font-size: 40px;
    margin-top: 0;
}

</style>