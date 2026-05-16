// src/store/index.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    // для страницы пользователей
    users: [],      // список пользователей
    loading: false, // крутилка во время загрузки
    // для формы
    form: {
      name: '',
      email: '',
      message: ''
    },
    serverResponse: null // ответ сервера после отправки
  }),

  actions: {
    // загружаем пользователей с jsonplaceholder
    async fetchUsers() {
      this.loading = true
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        this.users = await res.json()
      } catch (err) {
        console.error('Ошибка загрузки', err)
      } finally {
        this.loading = false
      }
    },

    // отправляем данные формы (POST)
    async submitForm() {
      const newPost = {
        title: this.form.name,
        body: this.form.message,
        userId: 1,
        email: this.form.email
      }

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPost)
        })
        this.serverResponse = await res.json()
        this.form = { name: '', email: '', message: '' }
      } catch (err) {
        console.error('Ошибка отправки', err)
      }
    }
  }
})