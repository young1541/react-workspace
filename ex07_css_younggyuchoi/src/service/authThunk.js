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
if( data?.password === user.password )
result = 0;
return {result, username:user.username}; //성공 0, 실패 1
}
);