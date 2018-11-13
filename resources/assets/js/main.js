import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
import toastr from 'toastr'

const enlace = new Vue()

moment.locale('es')


var dropdown = function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {hover: true, constrainWidth: false});
  }




Vue.component('panel', {
    created: function (){ 
        dropdown()
        this.getCeldas()
        
        enlace.$on('formulario-entrada:submit', (placa, marca) => {

            this.placa = placa
            this.marca = marca
            
            //console.log('Recibiendo mensaje del formulario-entrada')
            this.nuevaCelda(this.placa, this.marca)
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
                        <div class="col s12 m12 l6 center"><a  class="col s12 m12 l12 btn btn-large indigo accent-4 modal-trigger">Salida</a></div>
                    </div>
                </div>
            </div>
                            <formulario-entrada></formulario-entrada>
        </section>
    `,
    data(){
        return {
            celdasarriba: [],
            celdasabajo: [],
            placa: null,
            marca: null,
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
                //this.celdaAsinada = null
                this.errors = []
                toastr.success('Puesto asignado con exito')
            }).catch(error =>{
                this.errors = 'hubo un mal entendido'
            })
            
        }
        


    },
    computed: {
        superioresDisponibles(){
            
            this.superioresDisp = this.celdasarriba.filter( celda => celda.estado === 'disponible')
            
            return this.superioresDisp
        },
        inferioresDisponibles(){
            
            this.inferioresDisp = this.celdasabajo.filter( celda => celda.estado === 'disponible')
            
            return this.inferioresDisp
        },
        celdaAsinada(){
            var celdasDips = []
           
            this.superioresDisponibles.forEach(element => {
                celdasDips.push(element)
               
            });

            this.inferioresDisponibles.forEach(element2 => {
                celdasDips.push(element2)
                
            })

            let numeroCeldas = celdasDips.length
            console.log(numeroCeldas)
            console.log(celdasDips)
            let iteracion = Math.floor(Math.random() * numeroCeldas)
            let celda = celdasDips[iteracion]
             //console.log(celda)
            //  celda.estado = 'ocupado'
             //celda.panel = 'superior'
             return celda
            
        }
    },
   
})


Vue.component('celda-superior', {
    
    props: ['celdasuperior'],
    data(){
        return {
            disponible: 'green',
            ocupado: 'red',
            subpanel: 'dropdown-trigger',
            config: []
        }
    },
    template: `<div>
                    <div class="col s6 m1 l1 config-caja-celda card-panel">
                       <a class="btn-large config-celdas dropdown-trigger red"  :data-target='celdasuperior.celda' v-if="celdasuperior.estado === 'ocupado'">{{ celdasuperior.celda }}</a>
                       <a class="btn-large config-celdas green"  :data-target='celdasuperior.celda' v-else>{{ celdasuperior.celda }}</a>
                    </div>
                       <ul :id='celdasuperior.celda' class='dropdown-content' v-if="celdasuperior.estado === 'ocupado'">
                           <li><a  class="indigo-text text-accent-4">Placa -  {{ celdasuperior.placa }}</a></li>
                           <li><a  class="indigo-text text-accent-4">Marca -  {{ celdasuperior.marca }}</a></li>
                           <li class="divider" tabindex="-1"></li>
                           <li><a class="new small indigo-text text-accent-4 " > {{ celdasuperior.estado }}</a></li>
                           <li><a class="new small indigo-text text-accent-4 " > <em>{{ since(celdasuperior.created_at) }}</em></a></li>
                       </ul>
                    
                </div>`,
    methods: {
            since: (d) =>{
                return moment(d).startOf('hour').fromNow()
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
        computed: {
            
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
    props: ['celdainferior'],
    data(){
        return {
            disponible: 'green',
            ocupado: 'red',
            subpanel: 'dropdown-trigger',
            config: []
        }
    },
    template: `<div>
                    <div class="col s6 m1 l1 config-caja-celda card-panel">
                        <a class="btn-large dropdown-trigger red"  :data-target='celdainferior.celda'  v-if="celdainferior.estado === 'ocupado'">{{ celdainferior.celda }}</a>
                        <a class="btn-large green" :data-target='celdainferior.celda' v-else>{{ celdainferior.celda }}</a>
                    </div> 
                    <ul :id='celdainferior.celda' class='dropdown-content' v-if="celdainferior.estado === 'ocupado'">
                           <li><a  class="indigo-text text-accent-4">Placa -  {{ celdainferior.placa }}</a></li>
                           <li><a  class="indigo-text text-accent-4">Marca -  {{ celdainferior.marca }}</a></li>
                           <li class="divider" tabindex="-1"></li>
                           <li><a class="new small indigo-text text-accent-4 " > {{ celdainferior.estado }}</a></li>
                           <li><a class="new small indigo-text text-accent-4 " > <em>{{ since(celdainferior.created_at) }}</em></a></li>
                       </ul>
                </div>`,
    methods: {
        since: (d) =>{
            return moment(d).fromNow()
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



 new Vue({
    el: '#app',
});
