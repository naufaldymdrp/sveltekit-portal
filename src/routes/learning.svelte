<h1>Learning of CSS Page</h1>

<div class="container">
    <div class="box">one</div>
    <div class="box">two</div>
    <div class="box">three</div>
    <div class="box">four</div>

    <img src="/sample-sky.webp" alt="Gambar Langit senja" />
</div>

<div class="container">
    <p>block level element</p>
    <a href="#">inline level element</a>&nbsp;<strong>this places besides &lt;a&gt; element</strong>
</div>

<style>
    h1 {
        color: blue;
        font-family: sans-serif;
        text-transform: uppercase;
        font-style: italic
    }

    .container {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    .container a {
        display: inline-block;
        border: 1px solid black;
        padding: 2px 3px;
    }

    .box {
        border: 1px solid black;
    }

    img {
        height: auto;
        width: 60%;
    }
</style>