import styled from "styled-components"
export const PopulaStyle2 = ({ img, text1, text2, mark1 }) => {

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
.mark1{
  width: 60px;
  height: 20px;
  position: relative;
  top:-200px;
  color: white;
  text-align: center;
  //background-color: black;
  
}
    
`
  function myFunction12345() {
    //console.log(document.getElementsByClassName('mark1'));
    if (mark1 === "Hot") {
      // document.getElementsByClassName('mark1')[0].style.backgroundColor = "#ff0000";
      // document.getElementsByClassName('mark1')[1].style.backgroundColor = "#ff0000";
      // document.getElementsByClassName('mark1')[2].style.backgroundColor = "#ff0000";
      // document.getElementsByClassName('mark1')[3].style.backgroundColor = "#ff0000";
      // document.getElementsByClassName('mark1')[4].style.backgroundColor = "#ff0000";
      var i ;
      var elements = document.getElementsByClassName('mark1');
      
      elements[i].style.backgroundColor = "#ff0000";
      // for (var i = 0; i < elements.length; i++) {
      //   elements[i].style.backgroundColor = "#ff0000";
      // }

    }
    if (mark1 === "Sale") {
      // document.getElementsByClassName('mark1')[0].style.backgroundColor = "#000000";
      // document.getElementsByClassName('mark1')[1].style.backgroundColor = "#000000";
      // document.getElementsByClassName('mark1')[2].style.backgroundColor = "#000000";
      // document.getElementsByClassName('mark1')[3].style.backgroundColor = "#000000";
      // document.getElementsByClassName('mark1')[4].style.backgroundColor = "#000000";
      var elements = document.getElementsByClassName('mark1');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#000000";
      }
    }
  }
  return (
    <Container>
      <div onLoad={myFunction12345}>
        <img src={img} alt="Avatar" class="image" />
        <div class="middle">
          <div class="text">
            <div>{text1}</div>
            <div>{text2}</div>

          </div>

        </div>
      </div>
      <div className="mark1">
        {mark1}
      </div>

    </Container>



  )
}
