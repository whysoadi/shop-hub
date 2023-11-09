import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducts', async ()=>{
   const response = await fetch ("https://fakestoreapi.com/products");
   return response.json();
})

export const createProducts = createAsyncThunk ('createProducts', async(data, {rejectWithValue})=>{
    const response = await fetch ('https://fakestoreapi.com/products',{
        method : "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }
    );

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
})

export const deleteProducts = createAsyncThunk ('deleteProducts', async(id, {rejectWithValue})=>{
    const response = await fetch (`https://fakestoreapi.com/products/${id}`,{
        method : "DELETE"
    }
    );

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
})


export const updateProducts = createAsyncThunk ('updateProducts', async(data, {rejectWithValue})=>{
    console.log("updated data", data)
    const response = await fetch (`https://fakestoreapi.com/products/${data.id}`,{
        method : "PUT",
        body: JSON.stringify(data),
       
    }
    );

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
})


export const productSlice = createSlice({
    name: 'prod',
    initialState: {
        isError: false,
        isLoading: false,
        product:[],
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.product=action.payload;
        })

        builder.addCase(fetchProducts.pending,(state, action)=>{
            state.isLoading = true
            
        })

        builder.addCase(fetchProducts.rejected,(state, action)=>{
           
            console.log("Error", action.payload);
            state.isError= true
        })

        builder.addCase(createProducts.pending, (state, action)=>{
            state.isLoading= true;

        })
        builder.addCase(createProducts.fulfilled, (state, action)=>{
            state.isLoading= false;
            state.product.push(action.payload);
        })
        builder.addCase(createProducts.rejected, (state,action)=>{
  
            console.log("Error", action.payload);
            state.isError= true
            
        })


        builder.addCase(deleteProducts.pending, (state, action)=>{
            state.isLoading= true;

        })
        builder.addCase(deleteProducts.fulfilled, (state, action)=>{
           const {id} = action.payload;
           if(id){
            state.product = state.product.filter((ele)=> ele.id!== id)
           }
        })
        builder.addCase(deleteProducts.rejected, (state,action)=>{
  
            console.log("Error", action.payload);
            state.isError= true
        })


        builder.addCase(updateProducts.pending, (state, action)=>{
            state.isLoading= true;

        })
        builder.addCase(updateProducts.fulfilled, (state, action)=>{
            state.isLoading= false;
            state.product = state.product.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
        })
        builder.addCase(updateProducts.rejected, (state,action)=>{
  
            console.log("Error", action.payload);
            state.isError= true
            
        })
    }
})

export default productSlice.reducer