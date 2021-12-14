<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{title}}</p>
    <p v-text="testNumber">перезапись всего что внутри</p>
    <p v-text="testNumber" v-once>перезапись всего что внутри</p>
    <p>{{testNumber + 2}}</p>
<!--    <p>{{title.split('').reverse().join('')}}</p> // not recommended-->
    <br>
    <p>{{testNumber % 2 ? 'even' : 'odd'}}</p>
    <a v-bind:href="link">{{link}}</a> // or
    <br>
    <a :href="link">{{link}}</a>
    <br>
<!--    <button v-bind:disabled="!(testNumber % 2)"-->
<!--            v-bind:title="title"-->
<!--    >btn</button>-->
    <br>
<!--привязка к событию-->
    <button v-on:click="funcPlaceNumber">{{testNumber}}</button>
    <p>{{funcInfoComputed}}</p>
    <br>
<!-- short version  -->
    <p v-html="funcUserView()"></p>
<!--    <p><b>User Name</b>: {{user.name}}</p>-->
<!--    <p><b>User Age</b>: {{user.age}}</p>-->
<!--    <p><b>User Email</b>: {{user.email}}</p>-->
  </div>
</template>
<script>
export default {
  name: "functional",
  data: () =>({

    message: {text: 'message data'},
    title: 'text message',
    text: 'title lorem3',
    link: 'https://google.com',
    testNumber: 10,
    user: {
      name: 'Pavel',
      age: 25,
      email: 'bekasovduet@gmail.com',
    }
  }),

  computed: {
    funcInfoComputed: function(){
      return this.title.split('').reverse().join('')
    }
  },
  methods:{
    funcPlaceNumber: function(){
      return this.testNumber++;
    },
    funcUserView: function (){
      return `<p><b>User Name:</b> ${this.user.name}</p>
              <p><b>User Age:</b> ${this.user.age}</p>
              <p><b>User Email:</b> ${this.user.age}</p>`
    }
  }
}
</script>
