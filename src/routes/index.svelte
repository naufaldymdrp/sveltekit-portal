<svelte:head>
    <title>Hello NaufaldyMDRP</title>
</svelte:head>

<script lang="ts">
    import List from "../components/list.svelte";

    let hello = "nomad";
    console.log(hello);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<List />