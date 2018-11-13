import Vue from 'vue'
import axios from 'axios'
import toastr from 'toastr'

const enlace = new Vue()




var dropdown = function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {hover: true, constrainWidth: false});
  }

Vue.component('panel', {
    created: function (){
        // this.contador() 

        dropdown()

        this.getCeldas()

        enlace.$on('formulario-entrada:submit', (placa, marca) => {
            this.placa = placa
            this.marca = marca
            //console.log('Recibiendo mensaje del formulario-entrada')
            this.nuevaCelda(this.placa, this.marca)
        })


        enlace.$on('confirmado:click', (saliendo) => {
            console.log('confirmando y ejecutando la accion')
           
            this.confirmado = saliendo

            this.ejecutarSalida(this.confirmado)

        })

    },
    template:`  
        <section>
            <div class="col s12 m12 l12">
                <div class="row">
                    <celda-superior v-for="celdasuperior in celdasarriba" :celdasuperior="celdasuperior" ></celda-superior>
                </div>

                <div class="row">
                    <celda-inferior v-for="celdainferior in celdasabajo"  :celdainferior="celdainferior" ></celda-inferior>
                </div>
            </div>
            <div class="divider"></div>

            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="section"></div>
                    <div class="row">
                        <div class="col s12 m12 l6 center"><a href="#entrada"  class="col s12 m12 l12 btn btn-large indigo accent-4 modal-trigger">Entrada</a></div>
                        
                    </div>
                </div>
            </div>
                            <formulario-entrada></formulario-entrada>
                            <salida></salida>
        </section>
    `,
    data(){
        return {
            celdasarriba: [],
            celdasabajo: [],
            placa: null,
            marca: null,
            duracion: 0,
            
        }
    },
    methods: {
        getCeldas: function () {
            var urlceldas = 'entradas'
            axios.get(urlceldas).then( response => {
                console.log(response.data)
                this.celdasarriba = response.data[0]
                this.celdasabajo = response.data[1]
            })
        },
        nuevaCelda: function (marca, placa){
            
            if (this.celdaAsinada === 0){
                toastr.error('No hay puesto disponibles por el momento')
            }else{
                this.celdaAsinada.marca = marca
                this.celdaAsinada.placa = placa
                console.log(this.celdaAsinada) 
                let celda = this.celdaAsinada
                celda.estado = 'ocupado'
                var url = 'entradas/'+ celda.id
                axios.put(url, celda).then(response => {
                //console.log(response)
                this.getCeldas()
                dropdown()
                this.errors = []
                toastr.success('Puesto: ' + celda.celda + 'placa: ' + celda.placa )
                }).catch(error =>{
                this.errors = 'hubo un mal entendido'
                })
            }
            
        },
        ejecutarSalida: function (){
            
            
                let id = this.confirmado.id
                console.log('la propiedad cofirmado')
                console.log(this.confirmado)
                console.log(id)
                    console.log('antes viene id confirmado')
                  let celdaopcupada = this.celdasabajo.filter(celda => celda.id === id)
                  console.log('hola')
                  console.log(celdaopcupada[0])
                  


            if(this.confirmado.panel === 'superior' && celdaopcupada[0].estado === 'ocupado'){
                
                this.ejecutarMultpliePetecionAxios()
                 
            }else{
                this.confirmado.marca = null
                this.confirmado.placa = null
                this.confirmado.estado = 'disponible'
                this.confirmado.celdafinal = null,
                this.confirmado.duracion = null
                this.confirmado.updated_at = null

                var url = 'entradas/'+ this.confirmado.id
                axios.put(url, this.confirmado).then(response => {
                //console.log(response)
                this.getCeldas()
                dropdown()
                this.errors = []
                toastr.success('Vehículo retirado con Exito EPA')
                }).catch(error =>{
                this.errors = 'hubo un mal entendido'
            })
            }
           
        },
        reasignar: function (){
                
                let id = this.confirmado.id
                let celdaopcupada = this.celdasabajo.filter(celda => celda.id === id)
                let  celda = this.celdaAsinada
                celda.marca = celdaopcupada[0].marca
                celda.placa = celdaopcupada[0].placa
                celda.celdainicial = celdaopcupada[0].celda
                celda.duracion = celdaopcupada[0].duracion
                celda.estado = 'ocupado'

                var url = 'entradas/'+ celda.id

               return axios.put(url, celda)


        },
        restablecerCelda: function (){
            let id = this.confirmado.id
                let celdaopcupada = this.celdasabajo.filter(celda => celda.id === id)
            celdaopcupada[0].marca = null
            celdaopcupada[0].placa = null
           celdaopcupada[0].estado = 'disponible'
           celdaopcupada[0].celdafinal = null,
           celdaopcupada[0].duracion = null
           celdaopcupada[0].updated_at = null

           var url = 'entradas/'+ celdaopcupada[0].id
            return axios.put(url, celdaopcupada[0])
        },
        liberarCelda: function(){
            this.confirmado.marca = null
            this.confirmado.placa = null
            this.confirmado.estado = 'disponible'
            this.confirmado.celdafinal = null,
            this.confirmado.duracion = null
            this.confirmado.updated_at = null
           
            var url = 'entradas/'+ this.confirmado.id
            return axios.put(url, this.confirmado)
        },
        refreshPanel: function (){
            return this.getCeldas()
        },
        ejecutarMultpliePetecionAxios: function (){
                axios.all([this.reasignar(),this.restablecerCelda(), this.liberarCelda()]).then(axios.spread(function (reasig, rest, libel, refrh){
                    dropdown()
                    toastr.success('La operación concluyó de manera exitosa!')
                    toastr.success('restableciendo celda inferior y superior')
                     toastr.success('reasignando celda inferior')
                })).catch( (error) => {
                    toastr.error('exploto')
                    console.log(error)
                })
        }
        // iniciar(){
        //     setInterval(() =>{
        //         switch (this.activated) {
        //             case true:
        //                 this.contador = this.contador +1;
        //             break;
        //             case false:
        //                 this.contador = 0;
        //                 localStorage.setItem(this.id, this.fincontador);
        //             break;
        //         }
        //     },1000);

        // }    
        


    },
    computed: {
        inferioresDisponibles(){
            return this.inferioresDisp = this.celdasabajo.filter(celda => celda.estado === 'disponible')
        },
        celdaAsinada(){
            var celdasDips = []
            var celdasarri = []
            var finalarray =[]

            this.celdasarriba.forEach(element => {celdasarri.push(element)})

            this.inferioresDisponibles.forEach(element => {celdasDips.push(element)})

            this.inferioresDisponibles.forEach((e1) => celdasarri.forEach((e2) => {if( e1.id === e2.id){ finalarray.push(e2) }}))

            let numeroCeldas = celdasDips.length
            let iteracion = Math.floor(Math.random() * numeroCeldas)
            // console.log(' iteracion '+iteracion)
            let celda = celdasDips[iteracion]
            let celda2 = finalarray[iteracion]
            
            // console.log(celda.celda)
            // console.log(celda2.celda)
            if (!celda2 && !celda){
                var alerta = 0
                return alerta
            }else if (celda2.estado === 'ocupado' && celda.estado === 'disponible'){
                 return celda  
            }else{
                return celda2
             }


    
        
        
        }
    },
   
})


Vue.component('celda-superior', {
    props: ['celdasuperior', 'duracion'],
    data(){
        return {
            disponible: 'green',
            ocupado: 'red',
            subpanel: 'dropdown-trigger',
            config: []
        }
    },
    template: `<div>
                    <div class="col s6 m1 l1 config-caja-celda ">
                       <a class="btn-large config-celdas dropdown-trigger red"  :data-target='celdasuperior.celda' v-if="celdasuperior.estado === 'ocupado'">{{ celdasuperior.celda }}</a>
                       <a class="btn-large config-celdas green"  :data-target='celdasuperior.celda' v-else>{{ celdasuperior.celda }}</a>
                    </div>
                       <ul :id='celdasuperior.celda' class='dropdown-content' >
                           <li><a  class="indigo-text text-accent-4">Placa -  {{ celdasuperior.placa }}</a></li>
                           <li><a  class="indigo-text text-accent-4">Marca -  {{ celdasuperior.marca }}</a></li>
                           <li class="divider" tabindex="-1"></li>
                           <li><a class="new small indigo-text text-accent-4 " > {{ duracion }}</a></li>
                           <li><a href="#salida" class="new small indigo-text text-accent-4 modal-trigger" v-if="celdasuperior.estado === 'ocupado'" @click="preFactura">Retirar Vehículo</a></li>
                       </ul>
                    
                </div>`,
    methods: {
            preFactura: function () {
                this.celda = this.celdasuperior
                enlace.$emit('preFactura:click', this.celda)
            },
            cambioEstado: function (){
                dropdown()
                    if(this.celdasuperior.estado === 'disponible')
                {   
                    //console.log(this.celdasuperior.estado)
                    this.config = this.disponible
                }else{
                    //console.log('falso')
                    this.config += this.ocupado 
                    this.config += ' '
                    this.config += this.subpanel
                    
                }
            }
           
        },
        created () { 
            dropdown()
            this.cambioEstado()
        },
        mounted: function () {
            dropdown()
            this.cambioEstado()
        },
        
          
})

Vue.component('celda-inferior', {
    props: ['celdainferior', 'duracion'],
    data(){
        return {
            disponible: 'green',
            ocupado: 'red',
            subpanel: 'dropdown-trigger',
            config: [],
            celda: []
        }
    },
    template: `<div>
                    <div class="col s6 m1 l1 config-caja-celda ">
                        <a class="btn-large dropdown-trigger red"  :data-target='celdainferior.celda'  v-if="celdainferior.estado === 'ocupado'">{{ celdainferior.celda }}</a>
                        <a class="btn-large green"  v-else>{{ celdainferior.celda }}</a>
                    </div> 
                    <ul :id='celdainferior.celda' class='dropdown-content' >
                           <li><a  class="indigo-text text-accent-4">Placa -  {{ celdainferior.placa }}</a></li>
                           <li><a  class="indigo-text text-accent-4">Marca -  {{ celdainferior.marca }}</a></li>
                           <li class="divider" tabindex="-1"></li>
                           <li><a class="new small indigo-text text-accent-4 " > {{ duracion }}</a></li>
                           <li><a href="#salida" class="new small indigo-text text-accent-4 modal-trigger" v-if="celdainferior.estado === 'ocupado'" @click="preFactura">Retirar Vehículo</a></li>
                       </ul>
                </div>`,
    methods: {
        preFactura: function () {
            this.celda = this.celdainferior
            enlace.$emit('preFactura:click', this.celda)
        
        },
        cambioEstado: function (){
            dropdown()
            if(this.celdainferior.estado === 'disponible')
        {   
            //console.log(this.celdasuperior.estado)
            this.config = this.disponible
            
        }else{
            //console.log('falso')
            this.config += this.ocupado 
            this.config += ' '
            this.config += this.subpanel
            
            
        }
    }
    },
    created () { 
        dropdown()
        this.cambioEstado()
    },
    mounted: function () {
        dropdown()
        this.cambioEstado()
    },
    
})

Vue.component('formulario-entrada', {
    data(){
        return {
            placa: null,
            marca: null,
        }
    },
    template: `
                <div id="entrada" class="modal modal-fixed-footer">
                    <form action="POST" @submit.prevent="nuevaEntrada">
                        <div class="modal-content">
                            <div class="row">
                                <div class="input-field col s12 m12 l6 offset-l3">
                                    <input type="text" v-model.lazy="placa" id="placa" class="validate">
                                    <label for="placa">Placa del Vehículo</label>
                                </div>
                            </div>

                            <div class="row center">
                                <div class="input-field col s12 m12 l6 offset-l3">
                                        <input type="text" v-model.lazy="marca" id="marca" class="validate">
                                        <label for="marca">Marca del Vehículo</label>
                                </div>
                            </div>

                            <div class="row">
                                <button type='submit' name='btn_login' class='modal-close col s12 m12 l6 offset-l3 btn btn-large waves-effect waves-light indigo accent-4'>
                                    Asignar <i class="material-icons prefix right">chevron_right</i>
                                </button> 
                            </div>
                        </div>
                    </form> 
                    <div class="modal-footer">
                    
                        <button  class="modal-close waves-effect waves-green btn-flat">Cancelar</button>
                    </div>  
                </div> `,
    methods: {
        nuevaEntrada: function () {
            enlace.$emit('formulario-entrada:submit', this.marca, this.placa)
            this.marca = ''
            this.placa = ''
        }
    }
})


Vue.component('salida', {
    created: function (){
        enlace.$on('preFactura:click', (celda) => {
            console.log('pre-confirmacion')
            console.log(celda)
            this.saliendo = celda
            this.saliendo.celdafinal = celda.celda

        })
    },
    data(){
        return {
            monto: 0,
            duracion: 120,
            tarifa: 30,
            saliendo: []
        }
    },
    template: `
                <div id="salida" class="modal modal-fixed-footer">
                        <div class="modal-content">
                            <h4>Factura</h4>
                           

                            <div class="collection">
                                <a class="collection-item"><span class="badge">{{ this.saliendo.celda }}</span>celda</a>
                                <a class="collection-item"><span class="badge">{{ this.saliendo.placa }}</span>Vehículo</a>
                                <a class="collection-item"><span class="badge">{{  this.saliendo.marca }}</span>marca</a>
                                <a class="collection-item"><span class="badge">{{  this.saliendo.celdainicial  }}</span>Celda Inicial</a>
                                <a class="collection-item"><span class="badge">{{   this.saliendo.celda }}</span>Celda Final</a>
                                <a class="collection-item"><span class="badge">{{  this.total }}</span>monto</a>
                                <a class="collection-item"><span class="badge">{{ this.duracion }}</span>duración</a>
                                
                            </div>
                        </div>
                   
                    <div class="modal-footer">
                        <button  class="modal-close waves-effect waves-green btn-flat" @click="salidaVehiculo">Confirmar</button>
                        <button  class="modal-close waves-effect waves-green btn-flat">Cancelar</button>
                    </div>  
                </div> `,
    methods: {
        salidaVehiculo: function () {
            enlace.$emit('confirmado:click', this.saliendo)
            this.saliendo.celda
            this.saliendo.placa
            this.saliendo.marca
            this.saliendo.celdafinal

        },

        
    },
    computed: {
        total: function (){
            this.monto = this.saliendo.duracion * this.tarifa
            return this.monto
        }
    }
    
})



 new Vue({
    el: '#app',
});
