import styled from "styled-components"
import { InstagramOutlined } from '@ant-design/icons';
import Igimage from 'assets/igimg.png'
export const Igimg = ({ img, ico }) => {
    const Style = styled.div`
    position: relative;
    &:hover {
        background-color: red !important;
        //border-color: var(--primary-hover-color) !important;
            }
    width: 200px;
    height: 200px;
        background-color: red;
    .image{
        width: 200px;
        height: 200px;
    
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
  background-color:rgba(0, 0, 0, 0.5);
  height: 200px;
  width: 200px;
  align-items: center;
  opacity: 0.5;
  color: white;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  padding-top: 85px;
  text-align: center;
  .instagram-icon {
  font-size: 10px;
}
  
  &:hover {
        opacity:1 !important;
        //border-color: var(--primary-hover-color) !important;
            }
  
}

    `
    return (
        <div>
            <Style>

                <div class="container">
                    <img src={img} alt="Avatar" class="image" />
                    <div class="middle">
                        <div class="text">
                        <InstagramOutlined style={{fontSize:'30px'}}/>
                        </div>
                    </div>
                </div>


            </Style>
        </div>
    )

}
