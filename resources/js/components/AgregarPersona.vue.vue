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
                <md-input v-model="number" type="number"></md-input>
            </md-field>

            <md-field>
                <label>Nombre</label>
                <md-input v-model="number"</md-input>
            </md-field>

            <md-field>
                <label>Apellido</label>
                <md-input v-model="number"</md-input>
            </md-field>

            <md-field>
                <label for="sexo">Sexo</label>
                <md-select v-model="movie" name="movie" id="movie">
                    <md-option v-for="sexo in sexos" :value="sexo.id" :key="sexo.id">{{sexo.valor}}</md-option>
                </md-select>
            </md-field>
    
    </md-card-content>

       

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Guardar</md-button>
          <md-button type="submit" class="md-primary" :disabled="sending" @click="showDialog=false">Cerrar</md-button>
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
        sexos:[{
            id:1,
            valor:"Masculino"
        },
        {
            id:2,
            valor:"Femenino"
        }
        ]
      }),mounted(){
        EventBus.$on('activar-ventana-agregar',data =>{
            this.showDialog=true;
            
        })
    }
  }
</script>