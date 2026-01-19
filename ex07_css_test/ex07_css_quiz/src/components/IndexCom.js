import imageFile from "../styles/images/삐진탱이.png"

import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent"
import { ProductContext, ProductImg, ProductList, ProductListBox, ProductName, ProductPrice, ProductTitle } from "./common/StyleProduct";

// 상품 목록 데이터 예시
const products = [
    { id: 1, name: '탱담 사료',context :"맛있고 건강한 다이어트 사료입니다!!! 냥이들의 식사시간~", price: '500백만원', url : imageFile },
    { id: 2, name: '탱담 사료',context :"맛있고 건강한 다이어트 사료입니다!!! 냥이들의 식사시간~", price: '500백만원', url : imageFile },
    { id: 3, name: '탱담 사료',context :"맛있고 건강한 다이어트 사료입니다!!! 냥이들의 식사시간~", price: '500백만원', url : imageFile },
    { id: 4, name: '탱담 사료',context :"맛있고 건강한 다이어트 사료입니다!!! 냥이들의 식사시간~", price: '500백만원', url : imageFile },
    { id: 5, name: '탱담 사료',context :"맛있고 건강한 다이어트 사료입니다!!! 냥이들의 식사시간~", price: '500백만원', url : imageFile },
    { id: 6, name: '탱담 사료',context :"맛있고 건강한 다이어트 사료입니다!!! 냥이들의 식사시간~", price: '500백만원', url : imageFile },
    { id: 7, name: '탱담 사료',context :"맛있고 건강한 다이어트 사료입니다!!! 냥이들의 식사시간~", price: '500백만원', url : imageFile },
    { id: 8, name: '탱담 사료',context :"맛있고 건강한 다이어트 사료입니다!!! 냥이들의 식사시간~", price: '500백만원', url : imageFile },
    { id: 9, name: '탱담 사료',context :"맛있고 건강한 다이어트 사료입니다!!! 냥이들의 식사시간~", price: '500백만원', url : imageFile },
];


const IndexCom = () => {
    return (<>
    <StyleContentBlock>
    <StyleContentWrap>
    <ProductTitle>맛있고 건강한 사료!!!</ProductTitle>
    <ProductList>
        {products.map(pro => (
            <ProductListBox key={pro.id}>
                <ProductImg src={pro.url} alt="" />
                <ProductName>{pro.name}</ProductName>
                <ProductContext>{pro.context}</ProductContext>
                <ProductPrice>{pro.price}</ProductPrice>
            </ProductListBox>
        ))}
    </ProductList>


    </StyleContentWrap>

    </StyleContentBlock>
    </>)
}
export default IndexCom
