<script lang="ts">
    import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<div class="body-wrapper">
    <slot></slot>
</div>

<style>
    .body-wrapper {
        padding-top: 60px;
    }
</style>