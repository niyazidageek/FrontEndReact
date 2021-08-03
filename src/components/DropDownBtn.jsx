import React, {useEffect, useState} from 'react';
import Aos from 'aos';

const DropDownBtn = ({type,lang1, lang2, lang3, currency1, currency2}) => {
    const [currency, setCurrency] = useState('USD')
    const [lang, setLang] = useState('English')
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    if(type=="language"){
        return (
            <div class="dropdown __dropdown">
                <span class="btn dropdown-toggle __btn-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {lang}
                </span>
                <ul class="dropdown-menu" data-aos="zoom-out" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" onClick={()=>setLang(prev=>prev=lang1)}>{lang1}</a></li>
                    <li><a class="dropdown-item" onClick={()=>setLang(prev=>prev=lang2)}>{lang2}</a></li>
                    <li><a class="dropdown-item" onClick={()=>setLang(prev=>prev=lang3)}>{lang3}</a></li>
                </ul>
            </div>
        );
    }
    else if(type=="currency"){
        return (
            <div class="dropdown __dropdown">
                <span class="btn dropdown-toggle __btn-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {currency}
                </span>
                <ul class="dropdown-menu" data-aos="zoom-out" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" onClick={()=>setCurrency(prev=>prev=currency1)}>{currency1}</a></li>
                    <li><a class="dropdown-item" onClick={()=>setCurrency(prev=>prev=currency2)}>{currency2}</a></li>
                </ul>
            </div>
        );
    }
    
}

export default DropDownBtn;
