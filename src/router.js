import vueRouter from 'vue-router'

import App from './App'
import Inicio from './components/Inicio'
import Verificacion from './components/Verificacion'
import Buscar from './components/Buscar'
import Actualizar from './components/Actualizar'
import Borrar from './components/Borrar'
import Crear from './components/Crear'
import Informacion from './components/Informacion'
import Analisis from './components/Analisis'
import Visualizacion from './components/Visualizacion'
import Temporada from './components/Temporada'
import Costo from './components/Costo'


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
      path: '/informacion',
      name: "informacion",
      component: Informacion
     },
     {
      path: '/analisis',
      name: "analisis",
      component: Analisis
     },
     {
      path: '/visualizacion',
      name: "visualizacion",
      component: Visualizacion
     },
     {
      path: '/temporada',
      name: "temporada",
      component: Temporada
     },
     {
      path: '/costo',
      name: "costo",
      component: Costo
     }
  ]
})

export default router