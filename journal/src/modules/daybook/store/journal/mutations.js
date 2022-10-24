    // export const myAction =  (state)=>{

    // }

    export const setEntries =  (state,entries)=>{
        state.entries = [...state.entries,...entries]
        state.isLoading = false
    }

    export const updateEntry =  (state,entry)=>{
        const idx = state.entries.map(e => e.id).indexOf(entry.id)
        state.entries[idx] = entry
    }

    export const addEmtry =  (state,entry)=>{
        //entries ->entries  -> la nueva entrada debe ser la primera
        state.entries = [entry,...state.entries]

    }

    export const deleteEntry = (state,id) =>{
        //borrar la entrada por id
        state.entries = state.entries.filter(entry => entry.id !== id)
    }