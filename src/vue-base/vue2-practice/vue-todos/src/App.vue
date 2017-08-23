<template>
  <div id="app">
    <img src="assets/logo.png">
    <h1>{{ title }}</h1>

    <ul>
      <li v-for="todo in todos">
        <label>{{ todo.value }}</label>
      </li>
    </ul>

    <ul>
      <li v-for="(todo, index) in todos" id="index">
        <label>{{ index + 1}}.{{ todo.value }}</label>
      </li>
    </ul>

    <ul>
      <li v-for="value in object">
        {{ value }}
      </li>
    </ul>

    <ul>
      <li v-for="(todo, index) in todos"
          :class="{'checked': todo.done}">
        <label>{{ index + 1}}.{{ todo.value }}</label>
      </li>
    </ul>

    <ul>
      <li v-for="(todo, index) in todos"
          v-bind:class="{'checked': todo.done}">
        <label>{{ index + 1}}.{{ todo.value }}</label>
      </li>
    </ul>

    <ul>
      <li v-for="(todo, index) in todos"
          v-bind:style="{color: 'red'}">
        <label>{{ index + 1 }}.{{ todo.value }}</label>
      </li>
    </ul>

  </div>
</template>

<script>
import './assets/todos.less'
export default {
  name: 'app',
  data () {
      return {
          title: "vue-todos - mm",
          todos: [
              {value: "阅读一本关于前端的书", done: false},
              {value: "补充范例代码", done: true},
              {value: "写心得", done: false}
          ],
          object: {
              first_name: "Ray",
              last_name: "Liang"
          }
      }
  }
}
</script>

<style>
</style>
