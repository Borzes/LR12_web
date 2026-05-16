<template>
  <div>
    <h2>Отправить сообщение</h2>
    <form @submit.prevent="send">
      <div>
        <label>Ваше имя:</label>
        <input type="text" v-model="store.form.name" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="store.form.email" required />
      </div>
      <div>
        <label>Сообщение:</label>
        <textarea v-model="store.form.message" rows="3" required></textarea>
      </div>
      <button type="submit">Отправить</button>
    </form>

    <div v-if="store.serverResponse">
      <h3>Сервер ответил:</h3>
      <pre>{{ store.serverResponse }}</pre>
    </div>
  </div>
</template>

<script>
import { useMainStore } from '@/store/store'

export default {
  setup() {
    const store = useMainStore()
    return { store }
  },
  methods: {
    send() {
      this.store.submitForm()
    }
  }
}
</script>