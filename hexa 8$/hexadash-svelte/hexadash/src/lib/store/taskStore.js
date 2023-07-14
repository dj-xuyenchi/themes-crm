import { writable } from "svelte/store";

export function createTasks(initialValue = []){
    const { subscribe, update } = writable(initialValue);

    return{
        subscribe,
        add(input, id){
            const task = {
                id,
                title: input.value,
                favorite: false,
                completed: false,
            };
            update((prev) =>{
                return [task, ...prev];
            })
        },

        remove(task){
            update((prev)=>{
                return prev.filter(item => item !== task);
            })
        },

        toggle(task){
            task.completed = !task.completed;
            setTimeout(() => {
                update((prev)=>{
                    return prev.filter(item => item.completed !== item)
                })
            }, 0);
        },

        favorite(task){
            task.favorite = !task.favorite;
            setTimeout(() => {
                update((prev)=>{
                    return prev.filter(item => item.favorite !== item)
                })
            }, 0);
        }
    }

}