import Vue from 'vue';



 new Vue({
    el: '#app',
    data: {
       
    },
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
            
        }
    },

});
