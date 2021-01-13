<template>
  <div class="beta">
    <h1>Beta is coming soon...</h1>
    <h2>I have no idea when soon is.</h2>
    <p>
      (but in the mean time you can stay up to touch on the
      <a href="https://ibrahim.thedev.id/" draggable="false" target="_blank"
        >blog</a
      >)
    </p>
  </div>
</template>

<style>
.beta {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  line-height: 300%;
}
.beta h1 {
  margin-top: 100px;
}
.beta h2 {
  margin-top: 70%;
  margin-bottom: 30px;
}
.beta p {
  font-size: 12px;
}
.beta p a {
  text-decoration: none;
  color: #8fdd4f;
}
@media (max-width: 500px) {
  .beta h2 {
    margin-top: 110%;
    margin-bottom: 30px;
  }
}
</style>
