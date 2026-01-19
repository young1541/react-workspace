import StyledButton from "./common/StyleButton";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductTitle } from "./common/StyleProduct";
import styled from "styled-components"
const InfoWrap = styled.div`
    width : 30%;
    margin : auto;
    border : 1px solid gray;
    border-radius : 5px;
    font-size : 24px;
    padding : 20px;
`;

const InfoCom = ({data, onDelete, onModifyForm}) => {
    console.log("InfoCom data => ", data)
    return (<>
        <StyleContentBlock>
        <StyleContentWrap>
            <ProductTitle>개 인 정 보</ProductTitle>
            <InfoWrap>
                {data && <>
                    username<br />
                    - {data.username}<hr />
                    password<br />
                    - {data.password}<hr />
                    role<br />
                    - {data.role}<hr />
                </>}
                <StyledButton onClick={onDelete}>삭제</StyledButton>
                &nbsp; <StyledButton onClick={onModifyForm}>수정</StyledButton>

            </InfoWrap>
        </StyleContentWrap>
        </StyleContentBlock></>)
}

export default InfoCom;