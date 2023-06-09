import { PrimaryLayout } from "C:/Users/KITS_21/Desktop/lisastore/src/components/Layout";
import styled from "styled-components";
import Layout from "antd/es/layout/layout";
import Headimg from "assets/imaghead.svg";
import Brandimg from "assets/brand.svg";
import PopulaStyle from "components/PopularStyle";
import PopulaStyle2 from "components/PopularStyle2";
import Popularimg1 from "assets/Popularimg1.svg";
import Buttons from "components/Buttons";
import { ShoppingOutlined, FilterOutlined, HeartOutlined, SearchOutlined } from '@ant-design/icons';
import CardProduct from "components/CardProduct";
import Bannerimg from "assets/Banner.svg";
import Logo from "assets/Logo.svg";
import Igimg from "components/Igimg";
import Igimage from 'assets/igimg.png'
import pscard1 from 'assets/pscard1.svg';
import pscard2 from 'assets/03.svg';
import pscard3 from 'assets/pscard3.svg';
import pscard4 from 'assets/pscard4.svg';








const HeaderPage = styled.div`
    height: 100vh;
    padding-right: 180px;
    padding-left: 150px;
    //background-color: red;
    display: flex;
    justify-content: space-between;
    img{
        width: 340px;
        padding-top: 225px;
    }
`
const HeaderPagetxt = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding-top: 300px;
    //justify-content: space-between;
    p1{
        width: 360px;
        height: 55px;
        left: 300px;
        top: 299px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 65px;
        line-height: 55px;
    }
    p2{
        width: 700px;
        height: 119px;
        left: 304px;
        top: 406px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 55px;
    }
    
`
const PopularProduct = styled.div`
//position: relative;

width:500px;
//height: 700px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap:30px;

`
const Banner = styled.div`
//background-image:"C:/Users/KITS_21/Desktop/lisastore/src/assets/Banner.svg";
background-image: url(${Bannerimg});
margin-bottom: 50px;
margin-top: 35px;
background-repeat: no-repeat;
padding-top: 150px;
padding-left: 750px;
gap: 25px;
background-size: cover;
//width: 100%;
height: 760px;
display: flex;
//align-items: center;
flex-direction: column;
//position: relative;
color: white;
p{
    width: 500px;
    left: 1083px;
    top: 369px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    text-transform: capitalize;
    color: #FF6F61;
    padding-bottom: 10px;
}
a{
    background-color: white;
    padding: 15px;

    color: black;
    width: 185px;
    height: 34px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    
    line-height: 34px;
    &:hover {
        background-color: #ff4d00 !important;
        //border-color: var(--primary-hover-color) !important;
            }
}

 
`
const IMG = styled.div`
    color: white;
    width: 150px;
    display: flex;
    flex-direction: column;
    
    //position: absolute;
    bottom: 450px;
    left: 800px;
    justify-content: center;
`

const P3 = styled.div`
display: flex;
//flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 59px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 50px;
line-height: 59px;
text-transform: capitalize;
color: #000000;
p{
    color: #FF6F61;
    font-size: 25px;
}

    
`
const FilterContent = styled.div`
width: 100%;
display: flex;
align-items: center;
//justify-content: space-between;
padding-left: 130px;
padding-top: 30px;
padding-right: 130px;
//flex-direction: column;
justify-content: center;
align-items: center;



    
`
const Product = styled.div`
width: 100%;
justify-content: center;
display: flex;
flex-wrap: wrap;
flex-direction: row;

gap: 30px;
    
`
const Filter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    
`
const PopularStyles1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const PopularStyles = styled.div`
@media only screen and (max-width: 600px) {
  .abc{ display:none }
}

height:500px ;
//position: relative;
gap:30px;
//background-color: orange ;
display: flex;


p{
    //width: 450px;
    //height: 450px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 35px;
    transform: rotate(-90deg);
    text-align: center;
    //width: 348px;
    height: 70px;
    left: -52px;
    top: 648px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;

}
`
const Filtertxt = styled.div`
    @media only screen and (max-width: 600px) {
  .def{ display:flex,
       }
}

    width: 100%;
    display: flex;
    padding-top: 55px;
    justify-content: space-between;
    padding-left: 220px;
    padding-right: 145px;
    p{
        &:hover {
        color: orange !important;
        //border-color: var(--primary-hover-color) !important;
            }
        
    }
`
const Slider = styled.div`
    padding-bottom: 50px;

.slider {
  width: 100%;
  height: 350px;
  
  position: relative;
  margin: auto;
  overflow-x: scroll;
  overflow-y: hidden;
}

.slider::-webkit-scrollbar {
  display: none;
}

.slider .slide {
  display: flex;
  position: absolute;
  gap: 30px;
  left: 0;
  transition: 0.3s left ease-in-out;
}

.slider .item {
  margin-right: 10px;
}

.slider .item:last-child {
  margin-right: 0;
}

.ctrl {
  text-align: center;
  margin-top: 5px;
}

.ctrl-btn {
  padding: 20px 20px;
  min-width: 50px;
  background: #fff;
  border: none;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  outline: none;

  position: absolute;
  top: 50%;
  margin-top: -27.5px;
}

.ctrl-btn.pro-prev {
  left: 0;
}

.ctrl-btn.pro-next {
  right: 0;
}

    
`
const { Content } = Layout;
const Brands = styled.div`
    height: 200px;
    //background-color: green;
    padding-bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 1320px;
        padding-top: 90px;
        padding-left: 300px;
        padding-right: 300px;
        
    }
    align-items: center;
`
const P4 = styled.div`

    display: flex;
    gap: 15px;
    font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-transform: capitalize;
    
    
`
const Insta = styled.div`
width: 100%;
padding-top: 50px;
padding-bottom: 50px;

display: flex;
flex-direction: column;
align-items: center;
.center{
    display: flex;
    gap:30px;
}
    
`

let slide = document.getElementById("slide");


productScroll();

function productScroll() {
    let slider = document.getElementById("slider");
    let next = document.getElementsByClassName("pro-next");
    let prev = document.getElementsByClassName("pro-prev");
    let slide = document.getElementById("slide");
    let item = document.getElementById("slide");

    for (let i = 0; i < next.length; i++) {
        //refer elements by class name

        let position = 0; //slider postion

        prev[i].addEventListener("click", function () {
            //click previos button
            if (position > 0) {
                //avoid slide left beyond the first item
                position -= 1;
                translateX(position); //translate items
            }
        });

        next[i].addEventListener("click", function () {
            if (position >= 0 && position < hiddenItems()) {
                //avoid slide right beyond the last item
                position += 1;
                translateX(position); //translate items
            }
        });
    }

    function hiddenItems() {
        //get hidden items
        let items = getCount(item, false);
        let visibleItems = slider.offsetWidth / 210;
        return items - Math.ceil(visibleItems);
    }
}

function translateX(position) {
    //translate items
    slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
    //count no of items
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType != 3) {
            if (getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i], true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}
const Home = () => {
    return (
        <PrimaryLayout>
            <Content>

                <HeaderPage>
                    <HeaderPagetxt>

                        <div>
                            <p1>
                                Collections
                            </p1>
                        </div>
                        <div>
                            <p2>
                                You can explore ans shop many differnt collection
                                <br />
                                From various barands here.
                            </p2>

                        </div>
                        <div>
                            <Buttons
                                icon={<ShoppingOutlined />}
                                text="Shop Now"
                                type="primary"
                            />


                        </div>

                    </HeaderPagetxt>
                    <div>
                        <img src={Headimg} />
                    </div>
                </HeaderPage>

                <Brands>
                    <img src={Brandimg} />
                </Brands>
                <PopularStyles1>
                    <PopularStyles>
                        <div>
                            <p>
                                Explore
                            </p>
                            <p>
                                new
                            </p>
                            <p>
                                and
                            </p>
                            <p>
                                popular
                            </p>
                            <p>
                                styles
                            </p>
                        </div>
                        <div>
                            <PopulaStyle img={Popularimg1} text1="Manto" mark={"Hot"} text2="86 Product"></PopulaStyle>
                        </div>

                        <div class="abc">
                            <PopularProduct>
                                <div>
                                    <PopulaStyle2 img={pscard1} text1="Manto" mark1= {"Hot"} text2="86 Product"></PopulaStyle2>
                                </div>
                                <div>
                                    <PopulaStyle2 img={pscard2} text1="Manto" mark1= {"Sale"} text2="86 Product"></PopulaStyle2>
                                </div>
                                <div>
                                    <PopulaStyle2 img={pscard3} text1="Manto" mark1= {"Hot"}  text2="86 Product"></PopulaStyle2>
                                </div>
                                <div>
                                    <PopulaStyle2 img={pscard4} text1="Manto" text2="86 Product"></PopulaStyle2>
                                </div>

                            </PopularProduct>
                        </div>

                    </PopularStyles>
                    <P3>
                        <div>
                            Or subscribe to the newsletter
                        </div>

                    </P3>
                    <Filtertxt>
                        <div class="def">
                        <P4>
                            <div>

                                <p>
                                    All Products
                                </p>

                            </div>
                            <div>
                                <p>
                                    T-Shirt
                                </p>
                            </div>
                            <div>
                                <p>
                                    Hoodies
                                </p>
                            </div>
                            <div>
                                <p>
                                    Jacket
                                </p>
                            </div>
                        </P4>

                        </div>
                        <div>
                            <Buttons
                                icon={<FilterOutlined />}
                                text="Filter"
                                type="primary"
                            />
                        </div>
                    </Filtertxt>
                </PopularStyles1>

                <Filter>

                    <FilterContent>

                        <Product>
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                        </Product>




                    </FilterContent>

                </Filter>
                <Banner>
                    {/* <img src={Bannerimg} /> */}
                    <IMG>
                        <img src={Logo} />

                    </IMG>
                    <div>
                        <p>
                            Lustrous yet understated. The new evening
                            wear collection exclusively offered at the
                            reopened Giorgio Armani boutique in Los
                            Angeles.
                        </p>
                    </div>
                    <div>
                        <a>
                            See Collection
                        </a>
                    </div>
                </Banner>
                <P3>
                    <div>
                        Best Seller
                    </div>

                </P3>
                <Filtertxt>
                    <P4>
                        <div>

                            <p>
                                All Products
                            </p>

                        </div>
                        <div>
                            <p>
                                T-Shirt
                            </p>
                        </div>
                        <div>
                            <p>
                                Hoodies
                            </p>
                        </div>
                        <div>
                            <p>
                                Jacket
                            </p>
                        </div>
                    </P4>
                    <div>
                        <Buttons
                            //icon={<FilterOutlined />}
                            text="Show All"
                            type="primary"
                        />
                    </div>
                </Filtertxt>
                <Filter>

                    <FilterContent>
                        {/* <Product>
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                        </Product> */}






                    </FilterContent>

                </Filter>
                <Slider>

                    <div class="slider" id="slider">
                        <div class="slide" id="slide">
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />
                            <CardProduct img={Popularimg1} namecard="Adicolor Classics Joggers" type="Dress" price="$62.85" icon1={<HeartOutlined />} icon2={<SearchOutlined />} icon3={<ShoppingOutlined />} />

                        </div>
                        <button class="ctrl-btn pro-prev">Prev</button>
                        <button class="ctrl-btn pro-next">Next</button>
                    </div>


                </Slider>
                <P3>
                    <div>
                        Follow products and discounts on Instagram
                    </div>

                </P3>
                <Insta>
                    <div className="center">
                        <Igimg img={Popularimg1} ></Igimg>
                        <Igimg img={Popularimg1} ></Igimg>
                        <Igimg img={Popularimg1} ></Igimg>
                        <Igimg img={Popularimg1} ></Igimg>
                        <Igimg img={Popularimg1} ></Igimg>

                    </div>

                </Insta>
                <P3>
                    <p>
                        @Lisa.Office
                    </p>

                </P3>


            </Content>
        </PrimaryLayout >

    );

};
export default Home;