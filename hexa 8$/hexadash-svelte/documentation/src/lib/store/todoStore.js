import { writable } from "svelte/store";

export function createTodos(initialValue = []){
    const { subscribe, update } = writable(initialValue);

    return{
        subscribe,
        add(input, id){
            const todo = {
                id,
                title: input.value,
                description: input.value,
                trash: false,
                completed: false,
            };
            update((prev) =>{
                return [todo, ...prev];
            })
        },

        remove(todo){
            update((prev)=>{
                return prev.filter(item => item !== todo);
            })
        },

        toggle(todo){
            todo.completed = !todo.completed;
            setTimeout(() => {
                update((prev)=>{
                    return prev.filter(item => item.completed !== item)
                })
            }, 0);
        },

        trash(todo){
            todo.trash = !todo.trash;
            setTimeout(() => {
                update((prev)=>{
                    return prev.filter(item => item.trash !== item)
                })
            }, 0);
        }
    }

}