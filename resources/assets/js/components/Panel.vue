<template>
    <section>
        <div class="row">
			<div class="col s12 m12 l12">
                <div class="row">
                        <celda :color="ocupado" nameCelda="C1"></celda>
                        <celda :color="colorDefault" nameCelda="C2"></celda>
                        <celda :color="colorDefault" nameCelda="C3"></celda>
                        <celda :color="colorDefault" nameCelda="C4"></celda>
                        <celda :color="colorDefault" nameCelda="C5"></celda>
                        <celda :color="colorDefault" nameCelda="C6"></celda>
                        <celda :color="colorDefault" nameCelda="C7"></celda>
                        <celda :color="colorDefault" nameCelda="C8"></celda>
                        <celda :color="colorDefault" nameCelda="C9"></celda>
                        <celda :color="colorDefault" nameCelda="C10"></celda>          
                </div>

                <div class="row">
                        <celda :color="colorDefault" nameCelda="C11"></celda>
                        <celda :color="colorDefault" nameCelda="C12"></celda>
                        <celda :color="colorDefault" nameCelda="C13"></celda>
                        <celda :color="colorDefault" nameCelda="C14"></celda>
                        <celda :color="colorDefault" nameCelda="C15"></celda>
                        <celda :color="colorDefault" nameCelda="C16"></celda>
                        <celda :color="colorDefault" nameCelda="C17"></celda>
                        <celda :color="colorDefault" nameCelda="C18"></celda>
                        <celda :color="ocupado" nameCelda="C19"></celda>
                        <celda :color="colorDefault" nameCelda="C20"></celda> 
                </div>
       	    </div>
               <pre>{{ $data }}</pre>
               
		</div>

    </section>
</template>
<script>
import celda from './Celda.vue'
export default {
    
    data(){
        return{
            colorDefault: 'grey',
            ocupado: 'red lighten-1',
        }
    },
    components: {celda},
}

</script>

