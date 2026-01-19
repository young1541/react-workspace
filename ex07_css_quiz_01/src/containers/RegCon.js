import { useDispatch, useSelector } from "react-redux";
import RegCom from "../components/RegCom";
import HeaderCom from "../components/common/HeaderCom";
import {changeInput} from "../redux/inputSlice"
import { registerThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";
const RegCon = () => {
    const {username, password, role} = 
                        useSelector(state => state.input.register);
    const dispatch = useDispatch();
    const onChange = (e) => {
        const {name, value} = e.target
        dispatch( changeInput({name, value, form:"register"}) )
    }
    const navigate = useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const userData = Object.fromEntries( formData.entries() )
        const {payload} = await dispatch( registerThunk(userData) )
        // payload = { result : 0 }
        console.log( payload )
        if( payload.result === 0 )
            navigate("/login")
    }
    return (<>
        <RegCom onChange={onChange} onSubmit={onSubmit}
            username={username} password={password} role={role} />
    </>)    
}
export default RegCon;