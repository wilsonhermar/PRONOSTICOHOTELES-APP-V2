import vueRouter from 'vue-router'

import App from './App'
import Inicio from './components/Inicio'
import Verificacion from './components/Verificacion'
import Buscar from './components/Buscar'
import Actualizar from './components/Actualizar'
import Borrar from './components/Borrar'
import Crear from './components/Crear'
import BaseDatos from './components/BaseDatos'
import Pronosticos from './components/Pronosticos'
import Informe from './components/Informe'
import Graficas from './components/Graficas'

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
      {
        path: '/test',
        name: "test",
        component: Inicio
     },
     {
      path: '/verificacion',
      name: "verificacion",
      component: Verificacion
     },
     {
      path: '/buscar',
      name: "buscar",
      component: Buscar
     },
     {
      path: '/actualizar',
      name: "actualizar",
      component: Actualizar
     },
     {
      path: '/borrar',
      name: "borrar",
      component: Borrar
     },
     {
      path: '/crear',
      name: "crear",
      component: Crear
     },
     {
      path: '/basedatos',
      name: "basedatos",
      component: BaseDatos
     },
     {
      path: '/pronosticos',
      name: "pronosticos",
      component: Pronosticos
     },
     {
      path: '/informe',
      name: "informe",
      component: Informe
     },
     {
      path: '/graficas',
      name: "graficas",
      component: Graficas
     }
  ]
})

export default router