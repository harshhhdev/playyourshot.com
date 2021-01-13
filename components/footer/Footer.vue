<template>
  <footer>
    <div class="social">
      <a href="https://discord.gg/nCerNRh" draggable="false" target="_blank">
        <font-awesome-icon :icon="['fab', 'discord']" />
      </a>
      <a href="https://twitter.com/minidevz" draggable="false" target="_blank">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a
        href="https://www.youtube.com/minidevs"
        draggable="false"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </a>
      <a
        href="https://store.steampowered.com/search/?publisher=Minidevs"
        draggable="false"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'steam']" />
      </a>
    </div>
    <h1 class="copyright">© 2021 Minidevs</h1>
  </footer>
</template>

<style>
footer {
  margin-top: 100px;
  background: #383838;
  padding: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.social {
  display: flex;
}
.social > a > svg {
  font-size: 50px;
  padding: 0 10px;
  color: #7f7f7f;
}
.social > a > svg:hover {
  color: white;
}
footer > h1 {
  color: #7f7f7f;
  font-size: 14px;
}
@media (max-width: 500px) {
  .copyright {
    display: none;
  }
  footer {
    justify-content: center;
  }
  .social > a > svg {
    font-size: 50px;
    padding: 0 10px;
    color: #7f7f7f;
  }
}
</style>
