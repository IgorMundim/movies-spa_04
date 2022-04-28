export const ADD_ITEM = "ADD_ITEM";
export const CHANGE_ITEM = "CHANGE_ITEM"
export const ADD_PLAYLIST = "ADD_PLAYLIST"
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"

export const addItem = (payload) => ({
    type: ADD_ITEM,
    payload
})

export const changeItem = (payload) => ({
    type: CHANGE_ITEM,
    payload
})

export const addPlaylist = (payload) => ({
    type: ADD_PLAYLIST,
    payload

})
export const removePlaylist = (payload) => ({
    type: REMOVE_PLAYLIST,
    payload
})