<template>
  <div class="key">
    <h1>Want a free copy?</h1>
    <p>
      If you're a gaming related content creator or reviewer of any form, with
      over 1,500 views on your respective platform, you are eligible for a free
      or discounted copy of YourShot.
    </p>
    <div id="request-form" class="form-request">
      <form action="https://formspree.io/f/xwkwbrwp" method="POST">
        <div class="message box-padding">
          <label>
            <input
              type="email"
              placeholder="Your Email"
              name="_replyto"
              style="text-align:center"
              autocomplete="off"
              required
            />
          </label>
        </div>
        <div class="platform-url box-padding">
          <input
            type="url"
            placeholder="Social platform URL"
            id="social-url"
            class="social-url"
            name="url"
            style="text-align:center"
            autocomplete="off"
            required
          />
        </div>
        <div class="submit">
          <button type="submit" class="send-request">Send Request</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.key {
  display: flex;
  align-items: center;
  line-height: 300%;
  flex-direction: column;
  color: white;
  text-align: center;
}
.key h1 {
  margin: 100px 0;
}
.key p {
  width: 50%;
  line-height: 35px;
}
.form-request {
  margin-top: 100px;
}
.form-request input {
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  outline: none;
  border: none;
  background: #333333;
  transition: 0.3s linear;
  border: transparent 3px solid;
  color: #73ff00;
}
.form-request input:focus {
  color: white;
  border: #73ff00 3px solid;
}
.send-request {
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
  margin-bottom: 140%;
}
.send-request:hover {
  cursor: pointer;
  background: #8fdd4f;
}
@media (max-width: 500px) {
  .key p {
    width: 90%;
    line-height: 35px;
  }
}
@media (max-width: 400px) {
  .form-request input {
    width: 80%;
  }
}
</style>
