import journalApi from "@/api/journalApi"

export const loadEntries = async ({commit})=>{
   const {data} = await journalApi.get('/entries.json')
   const entries = []
   for(let id of Object.keys(data)){
    entries.push({
        id,
        ...data[id]
    })
   }
   commit('setEntries',entries)
}

export const updateEntries = async ({commit},entry)=>{
    //extraer data sin id
    const {date,picture,text} = entry
    const dataToSave = {date,picture,text} 

   const resp = await journalApi.put(`/entries/${entry.id}.json`,dataToSave)
   console.log(resp)

   //commit de la mutación
   commit('updateEntry',{...entry})
}



export const createEntry = async ({commit},entry)=>{
    //data to save
    const {date,picture,text} = entry
    const datToSave = {date,picture,text}

    const {data} = await journalApi.post(`/entries.json`,datToSave)

    // data= {"name": "-NF6R1qG-o898ZwoR2q2"}
    datToSave.id = data.name

    // commit -> addEntry
    commit('addEntry',datToSave)
    return data.name
}

export const deleteEntry = async ({commit},id) =>{
    // await journalAPI.delete(oath)
    await journalApi.delete(`/entries/${id}.json`)
    //commit => deleteEntry
    commit('deleteEntry',id)
    return id
}
