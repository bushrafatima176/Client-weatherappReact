import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        socketID: '',
        email: '',
        username: '',
        password: '',
        city: []
    },
    isLoggedIn: false,
    loader: false,
    isError: false,
}

export const addUser = createAsyncThunk('weatherSlice/create', async (data, thunkApi) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    const response = await fetch('http://localhost:3001/adduser', requestOptions);
    return response.json();

});

export const readUser = createAsyncThunk('weatherSlice/get', async (data, thunkApi) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    const response = await fetch('http://localhost:3001/readuser', requestOptions);
    return response.json();

});

export const addCity = createAsyncThunk('weatherSlice/addcity', async (data, thunkApi) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    const response = await fetch('http://localhost:3001/addcity', requestOptions);
    return response.json();

});

const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {
        loggingIn: (state, action) => {
            state.isLoggedIn = action.payload
        },

        currentuser: (state, action) => {
            console.log('executed');
            state.currentUser = action.payload;
        }
    },
    extraReducers: {
        [addUser.pending]: () => {
            console.log('pending');
        },
        [addUser.fulfilled]: (state, action) => {
            alert(action.payload.message);
        },
        [addUser.rejected]: () => {
            console.log('rejected');
        },
        [readUser.pending]: (state, action) => {
            console.log('pending');
            state.loader = true;
        },
        [readUser.fulfilled]: (state, action) => {
            state.loader = false;
            if (action.payload.error !== undefined) {
                state.isError = true;
                alert(action.payload.error);
            }
            else {
                
                state.isError = false;
                state.currentUser = action.payload.data;
                state.isLoggedIn = true;
                alert('successfully logged in');
            }
        },
        [readUser.rejected]: () => {
            console.log('rejected');
        },
        [addCity.pending]: () => {
            console.log('pending');
        },
        [addCity.fulfilled]: (state, action) => {
            if (action.payload.message !== undefined) {
                alert(action.payload.message);
            }
            else {
                state.currentUser = action.payload.data
            }
        },
        [addCity.rejected]: () => {
            console.log('rejected');
        }

    }
});

export const { loggingIn, currentuser } = weatherSlice.actions;
export default weatherSlice.reducer;