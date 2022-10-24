<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text"
            class="form-control"
            placeholder="Buscar Entradas"
            v-model="term"
            >
        </div>
    <div class="entry-scrollarea">

        <div class="mt-2 d-flex felx-column">
            <button class="btn vtn-primary mx-3"
            @click="$router.push({name:'entry',params:{id:'new'}  })">
                <i class="fa fa-plus-circle"> </i>
                Nueva entrada
            </button>
        </div>
        <Entry v-for="entry in entriesbyTerm"
        :key="entry.id"
        :entry="entry"
        />
    </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import {mapGetters} from 'vuex'
export default {
    components:{
        Entry:defineAsyncComponent(() =>import('../components/Entry.vue'))
    },
    computed:{
        ...mapGetters('journal',['getEntriesByTerm']),
        entriesbyTerm(){
            return this.getEntriesByTerm(this.term)
        }
    },
    data(){
        return{
            term:''
        }
            
        
        
    }
}
</script>

<style lang="scss" socped>

.entry-list-container{
    border-right:1px solid #2c3e50;
    height:calc(100vh - 56px);
}

.entry-scrollarea{
    height:calc(100vh - 115px);
    overflow:scroll;
}
</style>