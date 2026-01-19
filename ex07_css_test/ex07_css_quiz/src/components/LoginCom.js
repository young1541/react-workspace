import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledInput from "./common/StyleInput";
import StyleForm from "./common/StyleForm";
import StyledButton from "./common/StyleButton";
const AuthBlock = styled.div`
    position : absolute;
    left : 0; top : 0; bottom : 0; right : 0;
    background : rgba(0,0,0,0.1);
`;
const WhiteBox = styled.div`
    position : absolute;
    width : 360px; min-height : 200px;
    top : 150px; left : calc(50% - 180px);
    padding-top : 20px;
    box-shadow : 0 0 8px rgba(0,0,0,0.3);
    background :white; border-radius : 5px;
    .logo-area { 
            text-align : center; font-weight : bold;
            letter-spacing : 5px; font-size : 20px;
            border-bottom : 1px dotted olive;
            padding-bottom : 5px;
            width : 50%; margin : 0 auto;
            a {color : darkcyan; &:hover {color:cyan;} }
    }
`;
const LoginCom = ({result, username, password, onChange, onSubmit })  => {
    return (<AuthBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">탱이냥 이동</Link>
                </div>
                <StyleForm onSubmit={onSubmit}>
                    <StyledInput placeholder="input username" 
                                name="username" value={username} onChange={onChange}/>
                    <StyledInput placeholder="input password"
                                name="password" value={password} onChange={onChange}/>
                    <StyledButton width="100%" background={["178,235,244",0.5]}>LOGIN</StyledButton>
                    {result === 1 && <p>
                        아이디 또는 비밀번호가 일치하지 않습니다
                        </p>}
                </StyleForm>
            </WhiteBox>
        </AuthBlock>)
}
export default LoginCom

