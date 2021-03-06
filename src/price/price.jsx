import React from 'react';
import './price.style.css'
import Pricecomponent from './price.component';
import {showform} from './btnscript.js';
import Close from '../images/Close.png';
import {Nonform} from './btnscript.js'
const Price = () => (
    <div id="main">
        <h1><Pricecomponent text="Цены" /></h1>
            <div id="form">]
            <form>
                    <button id="btn1" onClick={Nonform}> <img src={Close}/></button>
                    <input type="text" placeholder="номер телефона"/>
                    </form>
            </div>
        <div className="top">
            <div className="store">
                <div className="btn" >
                    <button onClick={showform}><span className="buy">Купить </span> </button>
                </div>
                <p>
                <Pricecomponent text="Пакет документов 180/365" /> 
                <Pricecomponent text="Полугодовые приглашение 180 / 180-180 / 365-3-4 дней (электронные) или + доставка -2400 грн" />
                </p>
                
            </div>
                <div className="store">
                    <div className="btn" >
                        <button onClick={showform}> Купить </button>
                    </div>
                <p>
                <Pricecomponent text="Пакет документов 180/365" /> 
                <Pricecomponent text="Полугодовые Приглашение 180-180-180 / 365 - 10 дней (электронные) или + доставка - 2000 грн" /> 
                </p>
            </div>
            <div className="store">
            <div className="btn" >
                    <button onClick={showform}> Купить </button>
                    </div>
                <p>
                <Pricecomponent text="Пакет документов 180/365" /> 
                <Pricecomponent text="Полугодовые Приглашение 180 / 180-180 / 365 - 10-15 дней (электронные) или + Доставка- 1950 грн" /> 
                </p>
            </div>
        </div>
        <div className="center">
            <div className="store">
            <div className="btn" >
                    <button onClick={showform}> Купить </button>
                    </div>
                <p>
                <Pricecomponent text="Сезонные Приглашение" /> 
                <Pricecomponent text="Сезонные Приглашение 270/270 - 3-4 дня + доставка 2600 грн" />
                </p>
            </div>
            <div className="store">
            <div className="btn" >
                    <button onClick={showform}> Купить </button>
                    </div>
                <p>
                <Pricecomponent text="Пакет документов 180/365" />
                <Pricecomponent text="Сезонные Приглашение 270/270 - 10 дней + доставка 2400 грн" />
                </p>
            </div>
            <div className="store">
            <div className="btn" >
                    <button onClick={showform}> Купить </button>
                    </div>
                <p>
                <Pricecomponent text="Анкета Польша - 70грн" /> 
                </p>
            </div>
        </div>
        <div className="bot">
            <div className="store">
            <div className="btn" >
                    <button onClick={showform}> Купить </button>
                    </div>
                <p>
                <Pricecomponent text="Воевудский Приглашение" /> 
                <Pricecomponent text="Воевудский Приглашение 365/365 - 1 мес - 280Е +1020 ГРН (страховка + анкета)" /> 
                </p>
            </div>
            <div className="store">
            <div className="btn" >
                    <button onClick={showform}> Купить </button>
                    </div>
                <p>
                <Pricecomponent text="Воевудский Приглашение" />
                <Pricecomponent text="Воевудский Приглашение 365/365 - 35-50 дней - 270 евро + 1020 ГРН (страховка + анкета)" />
                </p>  
            </div>
            <div className="store">
            <div className="btn" >
                    <button onClick={showform}> Купить </button>
                    </div>
                <p>
                <Pricecomponent text="Воевудский Приглашение" /> 
                <Pricecomponent text="Воевудский Приглашение 365/365 - 2 мес (возможно быстрее) - 250 евро + 1020 ГРН (страховка + анкета)" /> 
                </p>
            </div>
        </div>
    </div>
)
export default Price;