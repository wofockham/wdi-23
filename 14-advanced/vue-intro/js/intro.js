const app = new Vue({
  el: '#app',
  data: {
    message: "Hello World"
  }
});

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
      { text: 'Buy hotdogs' }
    ]
  }
});

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: "Hello world"
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

const app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello world everything is awesome'
  }
});

// In HTML we can now write <todo-item>Kill me</todo-item>
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Tequila' }
    ]
  }
});
