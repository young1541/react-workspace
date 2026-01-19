import styled from "styled-components";
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logoutAuth } from "../../redux/authSlice";

const WrapBlock = styled.div`
    position : fixed;
    width : 100%;
    border-bottom : 1px solid rgba(0,0,0,0.1);
    z-index : 1;
    background : white;
`;
//align-items : 나중에 nav의 글자를 위,아래 중앙에 놓기 위해 설정
const StyledHeader = styled.header`
    margin : 0 auto; display : flex; width:1100px;
    height : 100px; align-items : center;
`;
const StyledTitle = styled.h1`
    width : 200px;
    .link { color : black; }
    .link:hover { color : gray; }
`;
const StyledNav = styled.nav`
    display : flex; #ul끼리 가로 배치;
    justify-content : space-between; #ul끼리의 간격 양 끝으로;
    width : 100%;
    ul { display : flex; } #li 가로 배치;
    ul li { margin-right : 30px; } #li끼리 간격;
    .menu li a { font-size : 20px; font-weight : bold; }
    a { color :black; } #nav안에 있는 a태그(Link);
    a:hover { color :gray; } #nav안에 있는 a태그(Link);
`;
const HeaderCom = () => {
    const { isLoggedIn, username } = useSelector(state => state.auth );
    const dispatch = useDispatch(); //action호출 기능
    const onLogout = (e) => {  e.preventDefault(); dispatch( logoutAuth() )  }

    return (<WrapBlock>
        <StyledHeader>
            <StyledTitle>
                <Link className="link" to="/">탱이냥</Link>
            </StyledTitle>
            <StyledNav>
                <ul className="menu">
                    <li><Link to="/">사료</Link></li>
                    <li><Link to="/">간식</Link></li>
                    <li><Link to="/list">LIST</Link></li>

                </ul>
                <ul>
                    {isLoggedIn 
                    ? (<>
                        <li><Link to="/logout" onClick={onLogout}>로그아웃</Link>&nbsp;
                        {username}님 로그인 상태</li>
                        </>) 
                    :(<>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/register">회원가입</Link></li>
                    </>)}

                </ul>
            </StyledNav>
        </StyledHeader>
    </WrapBlock>)
}
export default HeaderCom


