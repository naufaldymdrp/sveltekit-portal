<div class="navbar">
    <!-- Navbar Logo / Title -->
    <div class="logo">
        <h1>My Portal</h1>
    </div>
    <!-- For Navigation control inside navbar -->
    <button on:click={handleToggle} class="navbar-button" id="navbar-button">
        <label for="navbar-button">
            <span></span>
        </label>
    </button>
    <nav class:nav-toggle={toggle}>
        <ul>
            <li><a href="/" on:click={handleToggle}>Home</a></li>
            <li><a href="/portal" on:click={handleToggle}>Portal</a></li>
            <li><a href="/about" on:click={handleToggle}>About</a></li>
            <li><a href="/learning" on:click={handleToggle}>Learning</a></li>
        </ul>
    </nav>
</div>

<script lang="ts">
    let toggle = true;

    function handleToggle() {
        toggle = !toggle;
    }
</script>

<style>
    .navbar {
        background-color: darkred;
        height: 50px;
        position: fixed;
        width: 100%;
        z-index: 999;
    }

    .logo {
        height: 100%;
        display: flex;
        align-items: center;
        text-align: center;
    }

    h1 {
        width: 100%;
        font-style: italic;
        text-align: center;
        color: white;
    }

    .navbar-button {
        position: absolute;
        z-index: 1000;
        top: 0;
        left: 0;
        background: none;
        background-color: inherit;
        border: none;
        height: 100%;
        margin-left: 1em;
    }

    .navbar-button label {
        display: flex;
        height: 100%;
        align-items: center;
    }

    .navbar-button span, 
    .navbar-button span::before, 
    .navbar-button span::after {
        position: relative;
        display: block;
        height: 2px;
        width: 2em;
        background-color: white;
        border-radius: 2px;
    }

    .navbar-button span::before, 
    .navbar-button span::after {
        content: '';
        position: absolute;
    }

    .navbar-button span::after {
        top: 7px;
    }

    .navbar-button span::before {
        bottom: 7px;
    }

    nav {
        position: absolute;
        top: 100%;
        width: 100%;
        /* display: none; */
    }

    .nav-toggle {
        display: none;
    }

    ul {
        padding: 0;
        /* display: none; */
    }

    ul li {
        list-style-type: none;
    }

    ul li a {
        background-color: darkred;
        display: block;
        height: 100%;
        padding: 10px 0;
        text-align: center;
        color: white;
        text-decoration: none;
    }

    ul li a:hover {
        background-color: green;
    }
</style>