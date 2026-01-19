import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import InfoCom from "../components/InfoCom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { memberDeleteThunk, memberOneThunk } from "../service/authThunk";

import {useNavigate} from "react-router-dom"
const InfoCon = () => {
    const {username} = useParams()
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch( memberOneThunk({username}) )
    },[username, dispatch])
    const data = useSelector(state => state.memberData.dataOne)
    const navigate = useNavigate()
    const onDelete = async () => {
        dispatch(memberDeleteThunk({username}))
        navigate("/list")
    }
    const onModifyForm = () => {
        navigate("/modify/"+username)
    }

    return (<>
        <HeaderCom /><InfoCom onModifyForm={onModifyForm} onDelete={onDelete} data={data}/>
    </>)
}
export default InfoCon;