import React, {useEffect, useRef, useState} from 'react';
import logo1 from './../../assets/logos/Union.svg'
import logo from './../../assets/logos/Union (1).svg'
import cat from './../../assets/bgs/Frame 96.png'
import {CiSearch} from "react-icons/ci";
import {SlUser} from "react-icons/sl";
import {AiOutlineMessage} from "react-icons/ai";
import {TbTruckDelivery} from "react-icons/tb";
import {LuShoppingCart} from "react-icons/lu";
import {MdArrowForwardIos, MdOutlineArrowBackIos, MdOutlineKeyboardArrowDown} from "react-icons/md";
import {FiMenu} from "react-icons/fi";
import {IoMdClose} from "react-icons/io";
import {FaLongArrowAltLeft} from "react-icons/fa";


const Header = () => {

    const navTexts = [
        "О нас",
        "Как заказать",
        "Как работать с KGMART.RU",
        "Доставка",
        "Отзывы",
        "Постоянным клиентам",
        "Услуги"
    ]
    const catalog = [
        "Женщинам", "Детям", "Мужчинам", "Разное", "Карнавал", "Зима",
        "Новинки", "Распродажа", "Акции", "Большие размеры", "VIP поставщики",
        "Спорт", "Летняя коллекция", "Обувь", "Аксессуары", "Подарки",
        "Скидки", "Эксклюзив"
    ];
    const catalogMenu =  [
        "Платье и сарафаны",
        "Блузки и рубашки",
        "Туники",
        "Брюки и шорты",
        "Юбки",
        "Костюмы",
        "Верхняя одежда",    ];
    const catalogMenu1 =  [
        "Кардиганы, джемпера",
        "Водолазки",
        "Футболки и топы",
        "Жилеты",
        "Пиджаки и жакеты",
        "Толстовки",
        "Халаты",
    ];
    const catalogMenu2 =  [
        "Одежда для беременных",
        "Белье",
        "Комбинезоны"
    ];
    const catalogMenu3 = [...catalogMenu,...catalogMenu1,...catalogMenu2]

    const [cir,setCir] = useState(1)
    const [catalogVisible,setCatalogVisible] = useState('')
    const [catalogVisible1,setCatalogVisible1] = useState('Женщинам')
    const [catalogManuTwo,setCatalogManuTwo] = useState(false)
    const [catalogManuMob,setCatalogManuMob] = useState('')
    const [headerManuMob,setHeaderManuMob] = useState(false)
    const [headerManuMob1,setHeaderManuMob1] = useState(false)
    const [headerSearch,setHeaderSearch] = useState(false)
    const [headerSearch1,setHeaderSearch1] = useState(false)

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                setCatalogVisible('');
                setCatalogManuTwo(false)
                setHeaderManuMob(false)
                setHeaderManuMob1(false)
                setHeaderSearch(false)
                setHeaderSearch1(false)
            },
            {
                threshold: 0.1, // Устанавливаем порог видимости
            }
        );

        if (ref.current) {
            observer.observe(ref.current); // Наблюдаем за элементом
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current); // Отключаем наблюдение
            }
        };
    }, []);

    return (
        <header ref={ref} id='header'>
            <div className="work">
                <div className="work--group">
                    <div className="work--group__border">
                        <div className="work--group__border--block">
                            <div className="work--group__border--block__img">
                                <img src={logo1} alt=""/>
                            </div>
                        </div>
                        <h1>Новый принцип <span>работы!</span></h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="header">
                    <div className="header--nav">
                        {
                            navTexts.map((el,index)=> (
                                <p key={index}>{el}</p>
                            ))
                        }
                    </div>
                    <div className="header--main">
                        {
                            headerManuMob? <IoMdClose onClick={()=> setHeaderManuMob(false)} className='header--main__icon' />:
                                <FiMenu onClick={()=> setHeaderManuMob(true)} className='header--main__icon' />
                        }
                        <img src={logo} alt=""/>
                        <div className="header--main__search">
                            <input placeholder='Найти среди 266 227 товаров...' type="text"/>
                            <div>
                                <CiSearch />
                            </div>
                        </div>
                        <div className="header--main__group">
                            <div className="header--main__group--block">
                                <SlUser  className="header--main__group--block__icon" />
                                <p>Войти</p>
                            </div>
                            <div className="header--main__group--block">
                                <AiOutlineMessage  className="header--main__group--block__icon" />
                                <p>Сообщения</p>
                            </div>
                            <div className="header--main__group--block">
                                <TbTruckDelivery  className="header--main__group--block__icon" />
                                <p>Доставка</p>
                            </div>
                            <div className="header--main__group--block">
                                <LuShoppingCart  className="header--main__group--block__icon" />
                                <p>Корзина</p>
                            </div>
                        </div>
                        {
                            headerSearch? <IoMdClose onClick={()=> setHeaderSearch(false)} className='header--main__icon' />:
                                <CiSearch onClick={()=> setHeaderSearch(true)} className='header--main__icon' />
                        }
                    </div>
                    <div className="header--catalog">
                        {
                            catalog.map((el,index)=> (
                                <div onClick={()=> catalogVisible === el? setCatalogVisible(''): setCatalogVisible(el)}  className="header--catalog__text" key={index} style={{marginLeft: index === 0? '': '30px'}}>
                                    <p style={{color: catalogVisible === el? '#8134AF': ''}}>{el}</p>
                                    <MdOutlineKeyboardArrowDown style={{color: catalogVisible === el? '#8134AF': '', transform: catalogVisible === el? 'rotate(180deg)': ''}} />
                                </div>
                            ))
                        }
                    </div>
                    <div style={{display: catalogVisible? '': 'none'}} className="header--menu">
                        <div className="header--menu__group">
                            <h2>{catalogVisible}</h2>
                            <div className="header--menu__group--cat">
                                <div>
                                    {
                                        catalogMenu.map((el,index)=> (
                                            <p key={index}>{el}</p>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        catalogMenu1.map((el,index)=> (
                                            <p key={index}>{el}</p>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        catalogMenu2.map((el,index)=> (
                                            <p key={index}>{el}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="header--menu__group--text">
                                <h3>Акции</h3>
                                <p>Все акции</p>
                            </div>
                            <div className="header--menu__group--stock">
                                <h2>Игра в кальмара <br/><span>костюмы</span></h2>
                                <div onClick={()=> cir > 1? setCir(cir - 1): ''}  className="header--menu__group--stock__arr"><MdOutlineArrowBackIos /></div>
                                <div onClick={()=> cir < 3? setCir(cir + 1): ''} className="header--menu__group--stock__arr1"><MdArrowForwardIos /></div>
                            </div>
                            <div className="header--menu__group--circle">
                                <div onClick={()=> setCir(1)} style={{background: cir ===1? '#8134AF': ''}}></div>
                                <div onClick={()=> setCir(2)} style={{background: cir ===2? '#8134AF': ''}}></div>
                                <div onClick={()=> setCir(3)} style={{background: cir ===3? '#8134AF': ''}}></div>
                            -</div>
                        </div>
                    </div>
                    <div style={{display: headerManuMob? '': 'none'}} className="header--mobMenu">
                        {
                            catalogManuMob?
                                <div className='header--mobMenu__dit'>
                                    <h2 onClick={()=> setCatalogManuMob('')}><span><FaLongArrowAltLeft /></span>{catalogManuMob}</h2>
                                    <div>
                                        {
                                            catalogMenu3.map((el,index)=> (
                                                <p key={index}>{el}</p>
                                            ))
                                        }
                                    </div>
                                </div>:
                                <div className="header--mobMenu__cat">
                                    <h2>Каталог</h2>
                                    <div className="header--mobMenu__cat--group">
                                        {
                                            catalog.map((el,ind) => (
                                                <div onClick={()=> setCatalogManuMob(el)} style={{marginLeft: ind === 0? '': '20px'}} key={ind} className="header--mobMenu__cat--group__block">
                                                    <img src={cat} alt=""/>
                                                    <p>{el}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                        }
                        <div className="header--mobMenu__stock">
                            <h2>Акции</h2>
                            <div  className="header--mobMenu__stock--img">
                                <h3>Игра в кальмара <br/><span>костюмы</span></h3>
                            </div>
                            <div  className="header--mobMenu__stock--circle">
                                <div onClick={()=> setCir(1)} style={{background: cir ===1? '#8134AF': ''}}></div>
                                <div onClick={()=> setCir(2)} style={{background: cir ===2? '#8134AF': ''}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="header--searchMenu">
                        <div style={{display: headerSearch? '': 'none'}} className="header--searchMenu__group">
                            <input placeholder='Поиск' type="text"/>
                            <CiSearch className="header--searchMenu__group--icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{top: isVisible? '-20%': ''}} className="headerTwo">
                <div className="container">
                    <div className="headerSec">
                        <div onClick={()=> setCatalogManuTwo(!catalogManuTwo)} style={{background: catalogManuTwo? 'rgba(129,52,175,0.37)': ''}} className="headerSec--btn">
                            {
                                catalogManuTwo? <IoMdClose  className="headerSec--btn__icon"/>: <FiMenu  className="headerSec--btn__icon"/>
                            }
                            <p>Каталог</p>
                        </div>
                        <div className="headerSec--search">
                            <input placeholder='Найти среди 266 227 товаров...' type="text"/>
                            <div>
                                <CiSearch />
                            </div>
                        </div>
                        <div className="headerSec--group">
                            <div className="headerSec--group__block">
                                <SlUser  className="headerSec--group__block--icon" />
                                <p>Войти</p>
                            </div>
                            <div className="headerSec--group__block">
                                <AiOutlineMessage  className="headerSec--group__block--icon" />
                                <p>Сообщения</p>
                            </div>
                            <div className="headerSec--group__block">
                                <TbTruckDelivery  className="headerSec--group__block--icon" />
                                <p>Доставка</p>
                            </div>
                            <div className="headerSec--group__block">
                                <LuShoppingCart  className="headerSec--group__block--icon" />
                                <p>Корзина</p>
                            </div>
                        </div>
                        {
                            headerManuMob1? <IoMdClose onClick={()=> setHeaderManuMob1(false)} className='header--main__icon' />:
                                <FiMenu onClick={()=> setHeaderManuMob1(true)} className='header--main__icon' />
                        }
                        <img src={logo} alt=""/>
                        {
                            headerSearch1? <IoMdClose onClick={()=> setHeaderSearch1(false)} className='header--main__icon' />:
                                <CiSearch onClick={()=> setHeaderSearch1(true)} className='header--main__icon' />
                        }
                    </div>
                </div>
                <div style={{display: catalogManuTwo? '': 'none'}} className="headerTwo--menu">
                    <div className="headerTwo--menu__cat">
                        {
                            catalog.map((el,index)=> (
                                <div style={{marginTop: index === 0? '': '10px', background: el === catalogVisible1? 'rgba(130, 130, 130, 0.13)': ''}} onClick={()=> setCatalogVisible1(el)} key={index} className="headerTwo--menu__cat--block">
                                    <div></div>
                                    <h3>{el}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className="headerTwo--menu__group">
                        <h2>{catalogVisible1}</h2>
                        <div className="headerTwo--menu__group--cat">
                            <div>
                                {
                                    catalogMenu.map((el,index)=> (
                                        <p key={index}>{el}</p>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    catalogMenu1.map((el,index)=> (
                                        <p key={index}>{el}</p>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    catalogMenu2.map((el,index)=> (
                                        <p key={index}>{el}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="headerTwo--menu__group--text">
                            <h3>Акции</h3>
                            <p>Все акции</p>
                        </div>
                        <div className="headerTwo--menu__group--stock">
                            <h2>Игра в кальмара <br/><span>костюмы</span></h2>
                        </div>
                        <div className="headerTwo--menu__group--circle">
                            <div onClick={()=> setCir(1)} style={{background: cir ===1? '#8134AF': ''}}></div>
                            <div onClick={()=> setCir(2)} style={{background: cir ===2? '#8134AF': ''}}></div>
                            <div onClick={()=> setCir(3)} style={{background: cir ===3? '#8134AF': ''}}></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div style={{display: headerManuMob1? '': 'none'}} className="headerTwo--mobMenu">
                        {
                            catalogManuMob?
                                <div className='headerTwo--mobMenu__dit'>
                                    <h2 onClick={()=> setCatalogManuMob('')}><span><FaLongArrowAltLeft /></span>{catalogManuMob}</h2>
                                    <div>
                                        {
                                            catalogMenu3.map((el,index)=> (
                                                <p key={index}>{el}</p>
                                            ))
                                        }
                                    </div>
                                </div>:
                                <div className="headerTwo--mobMenu__cat">
                                    <h2>Каталог</h2>
                                    <div className="headerTwo--mobMenu__cat--group">
                                        {
                                            catalog.map((el,ind) => (
                                                <div onClick={()=> setCatalogManuMob(el)} style={{marginLeft: ind === 0? '': '20px'}} key={ind} className="header--mobMenu__cat--group__block">
                                                    <img src={cat} alt=""/>
                                                    <p>{el}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                        }
                        <div className="headerTwo--mobMenu__stock">
                            <h2>Акции</h2>
                            <div  className="headerTwo--mobMenu__stock--img">
                                <h3>Игра в кальмара <br/><span>костюмы</span></h3>
                            </div>
                            <div  className="headerTwo--mobMenu__stock--circle">
                                <div onClick={()=> setCir(1)} style={{background: cir ===1? '#8134AF': ''}}></div>
                                <div onClick={()=> setCir(2)} style={{background: cir ===2? '#8134AF': ''}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="headerTwo--searchMenu">
                        <div style={{display: headerSearch1? '': 'none',marginTop: headerSearch1? '40px': ''}} className="headerTwo--searchMenu__group">
                            <input placeholder='Поиск' type="text"/>
                            <CiSearch className="headerTwo--searchMenu__group--icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;