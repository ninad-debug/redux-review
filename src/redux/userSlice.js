import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload)
        },
        deleteUser(state, action) {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
        updateUser(state, action) {
            const {id, updatedUser} = action.payload;
            const index = state.users.findIndex(user => user.id == id);
            if(index !== -1){
                state.users[index] = updatedUser
            }
        }
    }
})

export const {addUser, deleteUser, updateUser} = userSlice.actions
export default userSlice.reducer