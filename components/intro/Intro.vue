<template>
  <div class="intro-main">
    <a href="/" draggable="false">
      <img
        src="https://media.discordapp.net/attachments/750240410944798760/797211156883701860/ystransmall.png"
        alt="yourshot"
        draggable="false"
    /></a>
    <h4 class="typed">Coming to Steam soon...</h4>
    <NuxtLink to="/key" draggable="false"><button>Get Key</button></NuxtLink>
  </div>
</template>

<style>
.intro-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
.intro-main > a > img {
  width: 700px;
  animation: float2 3s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(-7px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes float2 {
  0% {
    transform: translateY(-7px);
  }
  60% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-7px);
  }
}
.intro-main > h4 {
  display: flex;
  color: white;
  animation: float 3s ease-in-out infinite;
}
.intro-main > a > button {
  margin-top: 50px;
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  background: #7bbe44;
  outline: none;
  box-shadow: 0px 0px 50px 5px #71fc002c;
  border: none;
  transition: 0.3s linear;
  color: white;
}
.intro-main > a > button:hover {
  cursor: pointer;
  background: #8fdd4f;
}
@media (max-width: 700px) {
  .intro-main > a > img {
    width: 400px;
  }
}
@media (max-width: 400px) {
  .intro-main > a > img {
    width: 300px;
  }
  .intro-main > h4 {
    line-height: 30px;
  }
}
</style>
