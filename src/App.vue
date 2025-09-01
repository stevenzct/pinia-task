<template>
   <main>
    <!--heading  -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All</button>
      <button @click="filter = 'favs'">Favorites</button>
    </nav>

    <!--task list  -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} task left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" /> 
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>Favorite Tasks {{ taskStore.favCount }} task left to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" /> 
      </div>
    </div>

   </main>
</template>

<script>
  import { ref } from 'vue'
  import TaskDetails from './components/TaskDetails.vue'
  import { useTaskStore } from './store/TaskStore';
  export default {
    components: { TaskDetails },
    setup () {
      const taskStore = useTaskStore()

      const filter = ref('all')

      return { taskStore, filter }
    }
  }
</script>