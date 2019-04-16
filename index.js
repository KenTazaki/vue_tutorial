var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      { text: 'Learn JavaScript'},
      { text: 'Learn Vue'},
      { text: 'Build something awesome'}
    ]
  }
})

var app5 = new Vue({
  el: '#app5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6  = new Vue({
  el: '#app6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables'},
      { id: 1, text: 'Cheese'},
      { id: 2, text: 'Whatever else humans are supposed to set'}
    ]
  }
})

var obj = { 
  foo: 'bar'
}

Object.freeze(obj)

new  Vue({
  el: '#app8',
  data: obj
})

var data = { a: 1 }
var vm = new Vue({
  el: '#app9',
  data: data
})

vm.$watch('a', function( newValue, oldValue){
  console.log(oldValue + ' is changed to ' + newValue)
})

var app10 = new Vue({
  el: '#app10',
  data: {
    msg: 'message',
    rawHtml: '<span style="color: red">This should be red.</span>',
    dynamicId: 'app10-dynamical',
    isButtonDisabled: true,
    seen: true,
    url: 'https://www.ruby-lang.org/ja/', 
    attributeName: 'href',
    eventName: 'focus'
  },
  methods: {
    reverseMsg: function() {
      this.msg = this.msg.split('').reverse().join('')
    },
    doSomething: function() {
      alert(this.url)
    },
    onSubmit: function() {
      alert(this.textPrevent)
    }
  }
})