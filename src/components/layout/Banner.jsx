import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Heading2 from '../../components/Heading2'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
    var banner = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    };

  return (
    <>
    {/* Banner Part Start */}
    <Slider {...banner}>
        <div className="bg-banner bg-no-repeat bg-cover bg-center">
          <Container>
            <Flex className={"justify-start"}>
              <div className="w-1/2 ml-40 py-44">
                <Heading as={"h1"} className={"font-DMSans font-bold text-[64px] w-8/12 "} text={"Final Offer"} />
                <Heading2 className={"font-DMSans text-menuColor text-xl w-10/12 mt-4"}
                  text={"Up to #50%# sale for all furniture items!"} />
                <Button btnName={"Shop Now"} className={"py-4 px-12 mt-16 text-white bg-black "} />
              </div>
            </Flex>
          </Container>
        </div>
        <div className="bg-banner bg-no-repeat bg-cover bg-center">
          <Container>
            <Flex className={"justify-start"}>
              <div className="w-1/2 ml-40 py-44">
                <Heading as={"h1"} className={"font-DMSans font-bold text-[64px] w-8/12 "} text={"Final Offer"} />
                <Heading2 className={"font-DMSans text-menuColor text-xl w-10/12 mt-4"}
                  text={"Up to #50%# sale for all furniture items!"} />
                <Button btnName={"Shop Now"} className={"py-4 px-12 mt-16 text-white bg-black "} />
              </div>
            </Flex>
          </Container>
        </div>
        <div className="bg-banner bg-no-repeat bg-cover bg-center">
          <Container>
            <Flex className={"justify-start"}>
              <div className="w-1/2 ml-40 py-44">
                <Heading as={"h1"} className={"font-DMSans font-bold text-[64px] w-8/12 "} text={"Final Offer"} />
                <Heading2 className={"font-DMSans text-menuColor text-xl w-10/12 mt-4"}
                  text={"Up to #50%# sale for all furniture items!"} />
                <Button btnName={"Shop Now"} className={"py-4 px-12 mt-16 text-white bg-black "} />
              </div>
            </Flex>
          </Container>
        </div>

      </Slider>

      {/* Banner Part End */}
    </>
  )
}

export default Banner