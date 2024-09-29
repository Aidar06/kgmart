import React from 'react';
import {GrHome} from "react-icons/gr";
import {AiOutlineMessage} from "react-icons/ai";
import {LuShoppingCart} from "react-icons/lu";
import {SlUser} from "react-icons/sl";

const Nav = () => {
    return (
        <section id='nav'>
            <div className="container">
                <div className="nav">
                    <div className="nav--block">
                        <GrHome style={{color: '#8134AF'}} className="nav--block__icon"/>
                        <h2 style={{color: "black"}}>Главная</h2>
                    </div>
                    <div className="nav--block">
                        <AiOutlineMessage  className="nav--block__icon"/>
                        <h2>Чат</h2>
                    </div>
                    <div className="nav--block">
                        <LuShoppingCart  className="nav--block__icon"/>
                        <h2>Корзина</h2>
                    </div>
                    <div className="nav--block">
                        <SlUser  className="nav--block__icon"/>
                        <h2>Профиль</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nav;