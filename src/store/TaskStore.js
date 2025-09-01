import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: 'Task One', isFav: false },
            { id: 2, title: 'Task Two', isFav: true },
        ],
        name: 'Steve'
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        }
    }
})