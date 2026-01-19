import ListCom from "../components/ListCom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HeaderCom from "../components/common/HeaderCom";
import { memberThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";
const ListCon = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth );
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch( memberThunk() )
    },[dispatch] )
    const stateList = useSelector( state => {
        return state.memberData.data
    })
    const onInfo = (username) => {
        if(isLoggedIn)
            navigate("/info/"+username)
        else
            navigate("/login")
    }
    return (<><HeaderCom /><ListCom onInfo={onInfo} data={ stateList }/></>)
}
export default ListCon
