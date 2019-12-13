<template>
    <div>
        <h1>{{name}}</h1>
        <p>Here is some content for the {{name}} office.</p>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>