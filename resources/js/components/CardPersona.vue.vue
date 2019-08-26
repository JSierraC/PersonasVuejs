<template>
 <div>
 <md-card v-for="persona in personas" :key="persona.id">
      <md-card-header>

        <md-avatar class="md-avatar-icon md-primary">{{persona.nombre.toUpperCase().charAt(0)}}</md-avatar>

        <md-card-header-text>
          <div class="md-title">{{persona.nombre+ " " +persona.apellido}}</div>
          <div class="md-subhead">{{persona.cedula}}</div>
        </md-card-header-text>

       
      </md-card-header>

      <md-card-actions>
        <md-button @click="activar_ventana_ver(persona)">Ver</md-button>
        <md-button @click="editar_ventana_ver(persona)">Editar</md-button>
        <md-button @click="eliminar=true">Eliminar</md-button>
      </md-card-actions>
</md-card>


<md-dialog-confirm
      :md-active.sync="eliminar"
      md-title="Eliminar"
      md-content="Esta seguro que desea eliminar?"
      md-confirm-text="Si"
      md-cancel-text="No"
      @md-confirm="eliminar_si" />


<ver-persona></ver-persona>
</div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 100%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: 'Media',
  data(){
    return{
      personas:[],
      eliminar:false
    }
  },mounted(){
    EventBus.$on('buscar-personas',data=>{
      this.personas = data;
      //alert(data);
    })
  },
  methods:{
    activar_ventana_ver(data){
      EventBus.$emit('activar-ventana-ver', data)
    },
    editar_ventana_ver(data){
      EventBus.$emit('activar-ventana-ver', data)
    },eliminar_si(){
      alert("Se va a eliminar");
    }
  }
}
</script>