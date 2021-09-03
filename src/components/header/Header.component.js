import React from "react"
import Logo from "../../assets/graphics/logo.png"
import style from "./Header.module.scss"

const Header = () => {
    return (
        <header data-test="header-component">
            <div className={style.wrap}>
                <div>
                    <img src={Logo} alt="Logo" data-test="logo-image"/>
                </div>
            </div>
        </header>
    )
}

export default Header