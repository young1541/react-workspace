import LoginCom from "../components/LoginCom"
import HeaderCom from "../components/common/HeaderCom"
import {useSelector, useDispatch} from "react-redux"
import inputSlice from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";

const LoginCon = () => {
    const dispatch = useDispatch(); //action호출 기능
    const { username, password } = useSelector( state => state.input.login )
    const onChange = (e) => {
        const { value, name } = e.target
        dispatch(inputSlice.actions.changeInput( {name, value,form:"login"} ) )
    }
    const navigate = useNavigate();
    const onSubmit = async ( e ) => {
        e.preventDefault();
        dispatch( loginThunk({username, password}) )
    }
    const {isLoggedIn, result} = useSelector( state => {
        console.log("state : ", state)
        return state.auth
    })
    if(isLoggedIn){
        navigate("/")
    }
    
    return (<><HeaderCom />
	<LoginCom  result={result} username={username} password={password} 
                onChange={onChange} onSubmit={onSubmit} />
	</>)
}
export default LoginCon;