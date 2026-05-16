<template>
  <div>
    <h2>Пользователи с JSONPlaceholder</h2>
    <button @click="load" :disabled="store.loading">
      {{ store.loading ? 'Загружаю...' : 'Загрузить пользователей' }}
    </button>

    <ul v-if="store.users.length">
      <li v-for="user in store.users" :key="user.id">
        <strong>{{ user.name }}</strong> — {{ user.email }}
      </li>
    </ul>
    <p v-else-if="!store.loading">Нажми кнопку, чтобы загрузить.</p>
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
    load() {
      this.store.fetchUsers()
    }
  },
  mounted() {
    // если хотим грузить сразу при входе – раскомментировать
    // if (!this.store.users.length) this.load()
  }
}
</script>