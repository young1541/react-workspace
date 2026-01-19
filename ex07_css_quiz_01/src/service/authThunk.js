import { createAsyncThunk } from "@reduxjs/toolkit";
let data_set = [
    {username:"aaa",password :"aaa", role : "USER"},
    {username:"bbb",password :"bbb", role : "USER"},
    {username:"ccc",password :"ccc", role : "USER"},
]
export const loginThunk = createAsyncThunk(
  "loginThunk", 
  async ( user ) => {
    const data = data_set.filter(data => data.username === user.username )[0]
    let result = 1;
    if(data?.password === user.password ){
      result = 0;
    }
    return {result, username:user.username}; //성공 0, 실패 1
  }
);
export const registerThunk = createAsyncThunk(
  "registerThunk", 
  async ( user ) => {
    data_set = data_set.concat( user )
    return { result : 0 }
  }
);

export const memberThunk = createAsyncThunk(
  "memberThunk", 
  async ( ) => {
    return data_set;
  }
);
export const memberOneThunk = createAsyncThunk(
  "memberOneThunk", 
  async ( user ) => { //{username : aaa}
    console.log("one thunk : ", user )
    const data = data_set.filter(d => d.username === user.username)[0]
    console.log("one thunk data : ", data )
    return data
  }
);
export const memberDeleteThunk = createAsyncThunk(
  "memberDeleteThunk", 
  async ( user ) => { //{username : aaa}
    data_set = data_set.filter( d => d.username !== user.username)
    return 1;
  }
);
export const memberModifyThunk = createAsyncThunk(
  "memberModifyThunk", 
  async ( user ) => { //{username : aaa}
    data_set = data_set.filter( d => d.username !== user.username)
    data_set = data_set.concat( user )
    return 1;
  }
);