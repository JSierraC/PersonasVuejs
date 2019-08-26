<template>
  <div>
    <md-dialog :md-active.sync="showDialog" class="md-layout md-scrollbar">
     <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card>
        <md-card-header>
          <div class="md-title">Users</div>
        </md-card-header>

        <md-card-content>

            <md-field>
                <label>Cédula</label>
                <md-input v-model="cedula" type="number" readonly></md-input>
            </md-field>

            <md-field>
                <label>Nombre</label>
                <md-input v-model="nombre" readonly></md-input>
            </md-field>

            <md-field>
                <label>Apellido</label>
                <md-input v-model="apellido" readonly></md-input>
            </md-field>

            <md-field>
                <label for="movie">Sexo</label>
                <md-input v-model="sexo" readonly></md-input>
            </md-field>
    
    </md-card-content>

       

        <md-card-actions>
          <md-button class="md-primary" :disabled="sending" @click="showDialog=false">Cerrar</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved"></md-snackbar>
    </form>
</md-dialog>
  </div>
</template>

<style lang="scss" scoped>
  .md-card{
    width:100%;
    margin-top:10%;
    padding:5px;
  }
    .md-dialog {
        max-width: 768px;
    
  }
</style>


<script>
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: false,
        sexo:[{
            id:1,
            valor:"Masculino"
        },
        {
            id:2,
            valor:"Femenino"
        },
        ], cedula:"",
        nombre:"",
        apellido:"",
        sexo:"",
      }),mounted(){
        EventBus.$on('activar-ventana-ver',data =>{
            this.cedula = data.cedula;
            this.nombre = data.nombre;
            this.apellido = data.apellido;
            this.sexo = data.nombre_sexo;
            this.showDialog=true;
            
        })
    }
  }
</script>