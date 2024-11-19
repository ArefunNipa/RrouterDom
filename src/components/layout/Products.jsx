import React from 'react'
import productOne from '../../assets/p1.png'
import productTwo from '../../assets/p2.png'
import productThree from '../../assets/p3.png'
import productFour from '../../assets/p4.png'
import ProductTxt from '../../components/ProductTxt'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from '../../components/NextArrow'
import PrevArrow from '../../components/PrevArrow'

const Products = () => {

    var settingss = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            {/* Product Part Start */}
            <div className="py-20">
                <Container>
                    <Heading as={"h1"} className={"font-DMSans capitalize text-[39px] pb-10 leading-9 font-bold"} text={"new arrival"} />
                    <Slider {...settingss}>
                        <ProductTxt
                            badgeName={'New'}
                            imgSrc={productOne}
                            textOneH={'Add to Wish List'}
                            textTwoH={'Compare'}
                            textThreeH={'Add to Cart'}
                            pHeadingTxt={'Basic Crew Neck Tee'}
                            pPrice={'$44.00'}
                            pColor={'Black'}
                        />
                        <ProductTxt
                            badgeName={'New'}
                            imgSrc={productTwo}
                            textOneH={'Add to Wish List'}
                            textTwoH={'Compare'}
                            textThreeH={'Add to Cart'}
                            pHeadingTxt={'Basic Crew Neck Tee'}
                            pPrice={'$64.00'}
                            pColor={'Black'}
                        />
                        <ProductTxt
                            badgeName={'Update'}
                            imgSrc={productThree}
                            textOneH={'Add to Wish List'}
                            textTwoH={'Compare'}
                            textThreeH={'Add to Cart'}
                            pHeadingTxt={'Basic Crew Neck Tee'}
                            pPrice={'$54.00'}
                            pColor={'Black'}
                        />
                        <ProductTxt
                            badgeName={'New'}
                            imgSrc={productFour}
                            textOneH={'Add to Wish List'}
                            textTwoH={'Compare'}
                            textThreeH={'Add to Cart'}
                            pHeadingTxt={'Basic Crew Neck Tee'}
                            pPrice={'$34.00'}
                            pColor={'Black'}
                        />
                    </Slider>
                </Container>
            </div>
            {/* Product Part End */}

        </>
    )
}

export default Products