import { writable } from "svelte/store";

export function createNotes(initialValue = []){
    const { subscribe, update } = writable(initialValue);

    return{
        subscribe,
        add(input, textarea, select, id){
            const note = {
                key: id,
                title: input.value,
                description: textarea.value,
                trash: false,
                starred: true,
                label: select.value
            };
            update((prev) =>{
                return [note, ...prev];
            })
        },

        remove(note){
            update((prev)=>{
                return prev.filter(item => item !== note);
            })
        },

        toggle(note){
            note.completed = !note.completed;
            setTimeout(() => {
                update((prev)=>{
                    return prev.filter(item => item.completed !== item)
                })
            }, 0);
        },

        trash(note){
            note.trash = !note.trash;
            setTimeout(() => {
                update((prev)=>{
                    return prev.filter(item => item.trash !== item)
                })
            }, 0);
        },

        favorite(note){
            note.starred = !note.starred;
            setTimeout(() => {
                update((prev)=>{
                    return prev.filter(item => item.starred !== item)
                })
            }, 0);
        }
    }

}