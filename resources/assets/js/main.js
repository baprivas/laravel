import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'

moment.locale('es')


var dropdown = function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {hover: true, constrainWidth: false});
  }


Vue.component('panel', {
    created: function (){ 
        this.getCeldas()
        
    },
    template:`  <section>
                    <div class="row">
                        <div class="col s12 m12 l12">
                            <div class="row">
                                <celda-superior v-for="celdasuperior in celdasarriba" :celdasuperior="celdasuperior"></celda-superior>
                            </div>

                            <div class="row">
                                <celda-inferior v-for="celdainferior in celdasabajo"  :celdainferior="celdainferior"></celda-inferior>
                            </div>
                        </div>
                                
                    </div>
                </section>`,
    data(){
        return {
            celdasarriba: [],
            celdasabajo: [],
        }
    },
    methods: {
        getCeldas: function () {
            var urlceldas = 'home'
            axios.get(urlceldas).then( response => {
                console.log(response.data)
                this.celdasarriba = response.data[0]
                this.celdasabajo = response.data[1]
            })
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
            options: this.celdasuperior,
            config: []
        }
    },
    template: `<div>
                    <div class="col s6 m1 l1 config-caja-celda card-panel" >
                       <a class="btn-large config-celdas" :class="config" :data-target='celdasuperior.celda'>{{ celdasuperior.celda }}</a>
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
                return moment(d).fromNow()
            },
           
        },
        computed: {
            
        },
        created () { 
            dropdown()
            if(this.celdasuperior.estado === 'disponible')
            {   
                console.log(this.celdasuperior.estado)
                this.config = this.disponible
            }else{
                console.log('falso')
                this.config += this.ocupado 
                this.config += ' '
                this.config += this.subpanel
                
            }


            
        },
        updated: function() {
            //dropdown()
        },

        

        
})

Vue.component('celda-inferior', {
    props: ['celdainferior'],
    data(){
        return {
            disponible: 'green',
            ocupado: 'red',
            subpanel: 'dropdown-trigger',
            options: this.celdainferior,
            config: []
        }
    },
    template: `<div>
                    <div class="col s6 m1 l1 config-caja-celda card-panel">
                        <a class="btn-large " :class="config" :data-target='celdainferior.celda'>{{ celdainferior.celda }}</a>
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
    },
    created () { 
        dropdown()
        if(this.celdainferior.estado === 'disponible')
        {   
            console.log(this.celdainferior.estado)
            this.config = this.disponible
        }else{
            console.log('falso')
            this.config += this.ocupado 
            this.config += ' '
            this.config += this.subpanel
           
        }
    },
    updated: function() {
       // dropdown()
    }
})



Vue.component('formulario-entrada', {
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
                </div> `
})







 new Vue({
    el: '#app',
    data: {
       

    },
    methods: {
       
    },
   

});
