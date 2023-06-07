import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import Payment from 'assets/payment.svg'
import { ArrowUpOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Social from 'assets/Social.svg';
import { SearchOutlined } from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
// const items1 = ['1', '2', '3'].map((key) => ({
//     key,
//     label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//     const key = String(index + 1);
//     return {
//         key: `sub${key}`,
//         icon: React.createElement(icon),
//         label: `subnav ${key}`,
//         children: new Array(4).fill(null).map((_, j) => {
//             const subKey = index * 4 + j + 1;
//             return {
//                 key: subKey,
//                 label: `option${subKey}`,
//             };
//         }),
//     };
// });
// let mybutton = document.getElementById("myBtn");
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }
const HeaderStyle=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
p{
    width: 179px;
    left: 611px;
    top: 0px;
    text-align: center;
    font-family: 'AmstelvarAlpha';
    font-style: normal;
    //font-weight: 400;
    //font-size: 42px;
    line-height: 50px;
}
    
`
const About=styled.div`
    width: 100%;
    height: 450px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    .lisa{
        display: flex;
        flex-direction: column;
        gap: 20px;
        h1{
            width: 52px;
            height: 34px;
            left: 0px;
            top: 0px;
            font-family: 'AmstelvarAlpha';
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 34px;

        }
        h2{
            width: 392px;
            height: 84px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;
            color: rgba(30, 40, 50, 0.75);

        }
        

    }
    .catalog{
        display: flex;
        flex-direction: column;
        h1{
            width: 74px;
            height: 22px;
            left: 0px;
            top: 0px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;


        }
        h2{
            width: 94px;
            height: 24px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            text-transform: capitalize;
            color: #1E2832;


        }
    }
    .aboutus{
        display: flex;
        flex-direction: column;
        h1{
            width: 174px;
            height: 22px;
            left: 0px;
            top: 0px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;


        }
        h2{
            width: 194px;
            height: 24px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            text-transform: capitalize;
            color: #1E2832;


        }
    }
    .customer{
        display: flex;
        flex-direction: column;
        h1{
            width: 174px;
            height: 22px;
            left: 0px;
            top: 0px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;


        }
        h2{
            width: 194px;
            height: 24px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            text-transform: capitalize;
            color: #1E2832;


        }
    }
`
const PrimaryLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'space-between'
                    
                }}
            >
                <HeaderStyle>
                <div>
                    Search
                </div>
                <div>
                    <p>
                    Lisa store
                    </p>
                </div>
                <div>
                    Account
                </div>
                </HeaderStyle>
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                    }}
                >
                    
                        
                    
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Content>
            <About>
                <div className='lisa'>
                    <div>
                        <h1>
                            Lisa
                        </h1>
                        
                    </div>
                    <div>
                        <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua

                        </h2>
                    </div>
                    <div>
                        <img src={Social}/>
                    </div>

                </div>
                <div className='catalog'>
                    <h1>
                        CATALOG
                    </h1>
                    <h2>
                        Necklaces
                    </h2>
                    <h2>
                        Hoodie
                    </h2>
                    <h2>
                        Jeweiry Box
                    </h2>
                    <h2>
                        T-Shirt

                    </h2>
                    <h2>
                        Jacket
                    </h2>

                </div>
                <div className='aboutus'>
                    <h1>
                        ABOUT US
                    </h1>
                    <h2>
                        Our Procucers
                    </h2>
                    <h2>
                        Sitemap
                    </h2>
                    <h2>
                        FAQ
                    </h2>
                    <h2>
                        About Us
                    </h2>
                    <h2>
                        Terms & Conditions
                    </h2>

                </div>
                <div className='customer'>
                <h1>
                CUSTOMER SERVICES
                    </h1>
                    <h2>
                    Contact Us
                    </h2>
                    <h2>
                    Track Your Order
                    </h2>
                    <h2>
                    Product Care & Repair
                    </h2>
                    <h2>
                    Book an Appointment
                    </h2>
                    <h2>
                    Shipping & Returns
                    </h2>
                    

                </div>

                
            </About>
            <Footer
                style={{
                    display: 'flex',
                    backgroundColor:'black',
                    textAlign: 'center',
                    color: 'white',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    2023 LISA,Inc
                </div>
                <div>
                    <img src={Payment}/>
                </div>
                <div>
                {/* <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> */}
                    Scroll To Top
                    <ArrowUpOutlined />
                </div>
            </Footer>
        </Layout>
    );
};
export default PrimaryLayout;
