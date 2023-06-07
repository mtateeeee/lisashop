import { Space } from 'antd';
import styled from "styled-components";
export const CardProduct = ({ img, namecard, type, price, text1, text2, icon1, icon2, icon3 }) => {

    const Name = styled.div`
    width: 189px;
    height: 22px;
    left: 10px;
    top: 418px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
        
    `
    const Price = styled.div`
        display: flex;
        justify-content: space-between;
        
    `
    const GAP = styled.div`
        display: flex;
        gap:10px;
        
    `
    const P1 = styled.div`
    width: 43px;
    height: 22px;
    left: 10px;
    top: 456px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.5);
        
    `
    const Infor=styled.div`
        padding-top: 15px;
        padding-left: 10px;
        padding-right: 15px;
    `
    const P2 = styled.div`
    width: 43px;
    height: 22px;
    left: 10px;
    top: 456px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
        
    `
    const Shop = styled.div`
        display: flex;
        gap:10px;
        &:hover {
        color: red !important;
        //border-color: var(--primary-hover-color) !important;
            }
    `
    const Container = styled.div`
    position: relative;
.image {
  opacity: 1;
  display: block;
  width: 250px;
  height: 350px;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  
  opacity: 0;
  

  
  transform: translate(0%, -100%);
  
  text-align: center;
}

.container:hover .image {
  opacity: 1;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color:black;
  height: 30px;
  width: 250px;
  color: white;
  font-size: 15px;
  display: flex;
  position: absolute;
  bottom: 54px;
  justify-content: space-between;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 3px;
  
}
    
    
`



    return (
        <Container>







            <div class="container">
                <img src={img} class="image" />
                <Infor>
                    <Name>{namecard}</Name>
                    <Price>
                        <P1>{type}</P1>
                        <P2>{price}</P2>
                    </Price>
                </Infor>

                <div class="middle">
                    <div class="text">
                        <GAP>
                            <div>{icon1}</div>
                            <div>{icon2}</div>
                        </GAP>
                        <GAP>
                            <Shop>
                                <div>
                                    {icon3}
                                </div>
                                <div>
                                    <span>
                                        Shop Now
                                    </span>
                                </div>
                            </Shop>
                        </GAP>

                    </div>
                </div>
            </div>
        </Container>
    )
}