<template>
    <section>
       <div class="row">
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>          
       </div>

       <div class="row">
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda>
            <celda></celda> 
       </div>
    </section>
</template>
<script>
import celda from './Celda.vue'

export default {
    data(){
        return{
            celdas: {
                c1: {estado: 'no disponible' },
            }
        }
    },
    components: {celda},

}

</script>

