import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const createUser = createAsyncThunk ('createUser', async(body, {rejectWithValue})=>{
    const response = await fetch ('https://fakestoreapi.com/users',{
        method : "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify(body)
    }
    );

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
})

export const signinUser = createAsyncThunk ('signinUser', async(body, {rejectWithValue})=>{
    console.log(body);
    const response = await fetch ('https://fakestoreapi.com/auth/login',{
        method : "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify(body)
    }
    );

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
})


export const userSlice = createSlice({
    name: 'prod',
    initialState: {
        isError: false,
        isLoading: false,
        token:"",
        user:[],
       msg:""
    },

    reducers:{
        addToken:(state, action)=>{
            state.token= localStorage.getItem("token")
        },
        addUser:(state, action)=>{
            state.user= localStorage.getItem("user")
        },
        logout:(state, action)=>{
         state.token= null
         localStorage.clear();
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending, (state, action)=>{
            state.isLoading= true;

        })
        builder.addCase(createUser.fulfilled, (state, action)=>{
            state.isLoading= false;
            if(action.error){
                state.isError= action.error;
            }else{
                state.msg= action.msg;
            }
            state.user.push(action.payload)
            alert("success");
        })
        builder.addCase(createUser.rejected, (state,action)=>{
  
            console.log("Error", action.payload);
            state.isError= true
            
        })
        builder.addCase(signinUser.pending, (state, action)=>{
            state.isLoading= true;

        })
        builder.addCase(signinUser.fulfilled, (state, action)=>{
            state.isLoading= false;
            if(action.error){
                state.isError= action.error;
            }else{
                state.msg= action.msg;
                state.token=action.token;
                state.user=action.user;

                localStorage.setItem('msg', action.msg)
                localStorage.setItem('user', JSON.stringify(action.user))
                localStorage.setItem('token', action.token)
               alert("success")
            }
           
        })
        builder.addCase(signinUser.rejected, (state,action)=>{
  
            console.log("Error", action.payload);
            state.isError= true
            alert("login failed");
            
        })
    }
})
 
export const {addToken, addUser,logout}= userSlice.actions;
export default userSlice.reducer