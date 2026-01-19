import styled from "styled-components";
// 전체 영역 설정 top를 주기 위해 사용
// 이후 margin을 통해 가운데 정렬할 Content영역 만들어야 함
const StyleContentBlock = styled.div`
    position : absolute;
    width : 100%;
    top : 120px;
`;
const StyleContentWrap = styled.div`
    width : 1100px;
    margin : 0 auto;
`;

export {StyleContentBlock , StyleContentWrap};