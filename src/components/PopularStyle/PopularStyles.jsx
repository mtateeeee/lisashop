import styled from "styled-components"
export const PopulaStyle = ({ img, text1, text2, mark }) => {



  const Container = styled.div`
    //position: absolute;
 width: 450px;
 
.image {
  opacity: 1;
  display: block;
  width: 100%;
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
  width: 450px;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 3px;
  
}
.mark{
  width: 60px;
  height: 20px;
  position: relative;
  top:-450px;
  color: white;
  text-align: center;
  //background-color: black;
}
    
`
  function myFunction123() 
  {
    if (mark==="Hot")
    {
    document.getElementsByClassName('mark')[0].style.backgroundColor = "#ff0000";
  }
  if (mark==="Sale")
    {
    document.getElementsByClassName('mark')[0].style.backgroundColor = "#000000";
  }
  }
  

  return (
    <Container>


      <div class="container" onLoad={myFunction123}>
        <img src={img} alt="Avatar" class="image" />
        <div class="middle">
          <div class="text">
            <div>{text1}</div>
            <div>{text2}</div>
          </div>
        </div>
        <div className="mark">
          {mark}
          {/* <button onClick={myFunction123}>123</button> */}
        </div>
      </div>
    </Container>
  );
  
  
}


