<template>    
    <div class="main-content">
        <router-link class="small-link" to="/">Back</router-link>
        <content-template :name="name"></content-template>
    </div>
</template>

<script>
import ContentTemplate from './ContentTemplate';

export default {
    data () {
        return {
                name: 'Legion'
        }
    },
    components: {
        ContentTemplate
    }
}
</script>