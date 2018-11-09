
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
</div>

