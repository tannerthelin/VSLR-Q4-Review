<template>
    <div class="menu-container">
        <div>
            <router-link to="/new-england">New England</router-link>
            <router-link to="/grit">Grit</router-link>
            <router-link to="/legion">Legion</router-link>
            <router-link to="/republic">Republic</router-link>
            <router-link to="/core">Core</router-link>
            <router-link to="/atomic">Atomic</router-link>
            <router-link to="/originals">Originals</router-link>
            <router-link to="/rhythm">Rhythm</router-link>
            <router-link to="/flow">Flow</router-link>
            <router-link to="/southwest">Southwest</router-link>
            <router-link to="/hawaii">Hawaii</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    a {
        color: #49494A;
        text-transform: uppercase;
        font-size: 30px;
        display: block;
        text-decoration: none;
        margin-bottom: 20px;
    }

    a:hover {
        text-decoration: underline;
    }

    .menu-container {
        padding-top: 80px;
    }
</style>