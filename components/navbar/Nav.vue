<template>
  <div class="nav">
    <input type="checkbox" id="nav-check" />
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links">
      <NuxtLink to="/" draggable="false">Home</NuxtLink>
      <NuxtLink to="/about" draggable="false">About</NuxtLink>
      <NuxtLink to="/beta" draggable="false">Beta</NuxtLink>
      <NuxtLink to="/key" draggable="false">Get Key</NuxtLink>
      <a href="https://ibrahim.thedev.id" target="_blank" draggable="false"
        >Blog</a
      >
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: barcade;
  src: url("~assets/fonts/Baracade.ttf");
}

* {
  font-family: barcade;
}

.nav {
  height: 50px;
  display: flex;
  width: 100%;
  background-color: #383838;
  position: relative;
  justify-content: center;
}

.nav > .nav-header {
  display: flex;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: flex;
  justify-content: center;
}

.nav > .nav-links > a {
  display: flex;
  padding: 17px 50px 17px 10px;
  font-size: 14px;
  text-decoration: none;
  color: #7f7f7f;
}

.nav > .nav-links > a:hover {
  color: white;
}

.nav > #nav-check {
  display: none;
}

@media (max-width: 700px) {
  .nav > .nav-btn {
    display: flex;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label > span {
    display: flex;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    z-index: 10;
    display: flex;
    width: 100%;
    background-color: #383838;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    flex-direction: column;
  }
  .nav > .nav-links > a {
    display: flex;
    justify-content: center;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: 400px;
    overflow-y: auto;
  }
}
</style>
