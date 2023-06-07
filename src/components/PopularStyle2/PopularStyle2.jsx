import styled from "styled-components"
export const PopulaStyle2 = ({ img, text1,text2, mark }) => {

    const Container = styled.div`
    //position: absolute;
    width: 210px;
    height: 210px;
.image {
  opacity: 1;
  display: block;
  width: 100%;
  //height: auto;
  //transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  //transition:;
  opacity: 0;
  //position: absolute;
  //top: 9.7%;
  //left: 700%;
  transform: translate(0%, -100%);
  //-ms-transform: translate(-50%, -50%);
  text-align: center;
}

:hover .image {
  opacity: 1;
}

:hover .middle {
  opacity: 1;
}

.text {
  background-color:black;
  height: 30px;
  width: 210px;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 3px;
  
}
    
`
    return (
        <Container>
          <img src={img}  alt="Avatar" class="image"/>
              <div class="middle">
                  <div class="text">
                    <div>{text1}</div>
                    <div>{text2}</div>
                  </div>
              </div>
        </Container>


    )
}
