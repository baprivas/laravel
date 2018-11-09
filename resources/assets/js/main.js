import Vue from 'vue';
import Axios from 'axios';

import toastr from 'toastr'
import moment from 'moment';
import panel from './components/Panel.vue';



 new Vue({
    el: '#app',
    data: {
        
        placa: null,
        marca: null,
        estado: 'ocupado',
        puesto: 'c1',
        errors: null,
    },
    components: {panel},
    methods: {
        nuevaEntrada (){
            
            var url = 'entradas'
            console.log(this.entrada)
            Axios.post( url, {
                placa: this.placa,
                marca: this.marca,
                estado: this.estado,
                puesto: this.puesto
                
            }).then(response => {
                //getEntradas para actualizar el panel
                this.formulario = {}
                this.entrada = {}
                this.errors = []
                toastr.success('Entrada Exitosa')
            }).catch(error => {
                this.errors = 'Corrija para poder crear con éxito'
            });
            
        },
        
    },

});
