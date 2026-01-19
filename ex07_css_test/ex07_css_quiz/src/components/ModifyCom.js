import StyledButton from "./common/StyleButton"
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent"
import StyleForm from "./common/StyleForm"
import StyledInput from "./common/StyleInput"
import { ProductTitle } from "./common/StyleProduct"

const ModifyCom = ({onSubmit, modifyData, onChange}) => {
    return (<>        
    <StyleContentBlock>
        <StyleContentWrap>
            <ProductTitle>수 정 페 이 지</ProductTitle>
            <StyleForm onSubmit={onSubmit} width="30%">
            {modifyData && <>
                <StyledInput name="username" value={modifyData.username} readOnly />
                <StyledInput name="password" value={modifyData.password} onChange={onChange} />
                <StyledInput name="role" value={modifyData.role} onChange={onChange} />
                <StyledButton>UPDATE</StyledButton>
            </>}
            </StyleForm>
        </StyleContentWrap>
        </StyleContentBlock></>)
}
export default ModifyCom
