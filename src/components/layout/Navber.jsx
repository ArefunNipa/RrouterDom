import React from 'react'

import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Logo from '../../assets/logo.png'
import Menu from '../../components/Menu'
import Button from '../../components/Button'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser, FaShoppingCart} from "react-icons/fa";

const Navber = () => {
  return (
    <>
    {/* Menu-top Part Start */}
    <div className="bg-white border-b border-borderColor py-5">
        <Container>
          <Flex className={"items-center"}>
            <div className="w-[15%]">
              <Image imgSrc={Logo} imgAlt={"Image"} />
            </div>
            <div className="w-[65%]">
              <Flex className={"justify-center text-menuColor"}>
                <Menu menuTxt={"Home"} className={"hover:font-bold"} />
                <Menu menuTxt={"Shop"} className={"hover:font-bold"} />
                <Menu menuTxt={"About"} className={"hover:font-bold"} />
                <Menu menuTxt={"Contacts"} className={"hover:font-bold"} />
                <Menu menuTxt={"Journal"} className={"hover:font-bold"} />
              </Flex>
            </div>

          </Flex>
        </Container>
      </div>
      {/* Menu-top Part End */}


      {/* Menu Part Start */}
      <div className="bg-menuBg border-b border-borderColor py-5">
        <Container>
          <Flex className={"items-center"}>
            <div className="w-[20%]">
              <Flex className={"justify-start"}>
                <HiMiniBars3BottomLeft className='relative top-[2px] mr-1' />
                <Button btnName={"Shop by Category"} />
              </Flex>
            </div>
            <div className="w-[60%]">
              <form class="flex items-center justify-center relative">
                <input placeholder="Search Products" type="search" className='inline w-full border-0 bg-white py-3 pl-3 pr-3 leading-5 placeholder-gray-300 focus:outline-none' />
                <button type="submit" className='absolute right-4 top-0 bottom-0 text-xl'><IoSearch /></button>
              </form>
            </div>
            <div className="w-[20%]">
              <Flex className={"justify-end"}>
                <FaUser className='mr-5' />
                <FaShoppingCart />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Menu Part End */}
    </>
  )
}

export default Navber