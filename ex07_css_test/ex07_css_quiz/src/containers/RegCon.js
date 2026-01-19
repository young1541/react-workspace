import HeaderCom from "../components/common/HeaderCom";
import RegCom from "../components/RegCom"
import {useSelector, useDispatch} from "react-redux"
import { changeInput } from "../redux/inputSlice";
import { registerThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";
const RegCon = () => {
    const dispatch = useDispatch(); 
    const {username, password, role } = useSelector( state => state.input.register )
    const onChange = (e) => {
        const { value, name } = e.target
        dispatch(changeInput( {name, value,form:"register"} ) )
    }
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        const {payload} = await dispatch(registerThunk({username, password, role }) )
        if(payload.result === 0 ){
            navigate("/login")
        }
    }
    return (<><HeaderCom /><RegCom username={username} password={password} 
                role={role} onChange={onChange} onSubmit={onSubmit}/></>)
}
export default RegCon
