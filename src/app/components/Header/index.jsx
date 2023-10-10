"use client"

import Image from "next/image"
import logo from "../../assets/images/logo_atm.png"
import { HeaderContainer } from "./styles"

export default function Header() {
    return <HeaderContainer>
        <Image src={logo} alt="logo atmosmarine"/>
    </HeaderContainer>
}