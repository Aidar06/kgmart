import React from 'react';

const HomeStock = () => {
    return (
        <section id='homeStock'>
            <div className="container">
                <div className="homeStock">
                    <div className="homeStock--main">
                        <h2>Игра в кальмара <br/><span>костюмы</span></h2>
                    </div>
                    <div className="homeStock--group">
                        <div  className="homeStock--group__block">
                            <h3>Акция на платья для <br/>девочек</h3>
                        </div>
                        <div  className="homeStock--group__block1">
                            <h3>Таможенное <br/>оформление</h3>
                        </div>
                        <div  className="homeStock--group__block2">
                            <h3>Подборка женских <br/>брюк</h3>
                        </div>
                        <div  className="homeStock--group__block3">
                            <h3>Женские <br/>   костюмы</h3>
                        </div>
                        <div  className="homeStock--group__block4">
                            <h3>Топ 10 производителей <br/>детской одежды</h3>
                        </div>
                        <div  className="homeStock--group__block5">
                            <h3>Коллекция платьев</h3>
                        </div>
                    </div>
                    <div className="homeStock--main homeStock--main2">
                        <h2>Документы для <br/><span>маркетплейсов</span></h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeStock;