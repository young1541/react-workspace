import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import ModifyCom from "../components/ModifyCom";
import { useEffect } from "react";
import { changeInput, setModifyData } from "../redux/inputSlice";
import { memberModifyThunk } from "../service/authThunk";
import {useNavigate} from "react-router-dom"
const ModifyCon = () => {
    const dispatch = useDispatch();
    //이전 페이지에 저장되어 있는 state 개인 정보
    const dataOne = useSelector( state => state.memberData.dataOne )
    const modifyData = useSelector( state => state.input.modify )
    useEffect( ()=>{ //input modifyData 초기화 작업
        dispatch( setModifyData(dataOne) );
    },[dispatch, dataOne])
    const onChange = ( e ) => {
        const {value, name} = e.target
        dispatch( changeInput({name, value, form:"modify"}) )
    }
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("modify : ", e.target );
        // form 형식으로 html form태그 변환
        const formData = new FormData(e.target);
        // form안에 있는 데이터 키 : 값 형식으로 변환
        const userData = Object.fromEntries( formData.entries() )
        console.log("form data : ", userData)
        dispatch( memberModifyThunk(userData) );
        navigate("/info/"+userData.username);
    }
    return (<>
        <HeaderCom />
        <ModifyCom onSubmit={onSubmit} modifyData={modifyData} onChange={onChange}/>
    </>)
}
export default ModifyCon;