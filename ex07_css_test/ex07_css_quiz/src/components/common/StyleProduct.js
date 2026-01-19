import styled from "styled-components";
const ProductTitle = styled.h2`
    text-align : center; color : chocolate;
`;
const ProductList = styled.div`
    display : flex; flex-flow : wrap; /* 넘치는값 다음줄 이동 */
`;
const ProductListBox = styled.div`
    margin-right : 30px;
    width : 252.5px; border: 1px solid #ccc;
    border-radius: 5px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    &:nth-child(4n) { margin-right : 0; }
    margin-top : 20px; /* 위 간격 넓히기 */

`;
const ProductImg = styled.img`
    width : 100%;
`;
const ProductName = styled.h3`
    font-size: 20px; text-align : center;
    width : 50%; margin : auto;
    padding : 10px 0; border-bottom : 1px solid gray;
`;
const ProductContext = styled.p`
    font-size : 15px;
    margin-left : 5px;
    margin-right : 5px;
`;
const ProductPrice = styled.p`
    font-size: 15px;
    margin-right : 5px;
    color: #007bff;
    text-align : right;
`;

export {ProductPrice,ProductContext,ProductTitle,ProductList,ProductListBox, ProductImg, ProductName}
