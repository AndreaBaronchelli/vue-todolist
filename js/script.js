const app = new Vue({
    el: "#app",
    data: {
        todos: [
            {
                text: "Change Light Saber",
                completed: false,
            },
            {
                text: "Murder Padawans",
                completed: false,
            },
            {
                text: "Call Mom (Nevermind, She's Dead)",
                completed: true,
            },
            {
                text: "Palpatine's B-Day",
                completed: false,
            },
            {
                text: "Change Tie Fighter Oil",
                completed: false,
            },
            {
                text: "Polish Helmet",
                completed: false,
            },
            {
                text: "Destroy Alderaan",
                completed: false,
            },
        ],
        newTodo: "",
    },
    methods: {
        addTodo() {
            if (this.newTodo != "") {
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                })
            }
            this.newTodo = ""
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        },
        completed(index) {
            this.todos[index].completed = ! this.todos[index].completed;
        }
    }
});