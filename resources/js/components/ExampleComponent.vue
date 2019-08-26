<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{inicial}}</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
            data(){
                return {
                inicial:"Hola Mundo"
                }
            },
        mounted() {
            console.log('Component mounted.');
            
        }
    }
</script>