<template>



    <div>
        <div class="col s6 m1 l1 config-caja-celda card-panel"><a class="btn-large config-celdas  dropdown-trigger" :class="color" data-target='c1'>{{ nameCelda }}</a></div> 
       
    </div>
   
</template>

<script>
    
    export default {
       props: ['color', 'nameCelda'],
       
         
    }


</script>
