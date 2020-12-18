<template>
    <div class= 'pronosticos'>
        <h1>{{titulo}}</h1>
        <img src="@/assets/construccion.png" alt="" width="25%" height="25%" />
    </div>   
</template>

<script>
export default {
    name: 'Pronosticos',
    data: function(){
    return{
        titulo : 'Estamos trabajando en el desarrollo del modulo de PRONOSTICOS'
    }
  },
  methods:{
  }
}
</script>

<style>
.pronosticos h1 {
    font-family: "Homer Simpson UI";
    color: #000000;
    text-align: center;
}

</style>