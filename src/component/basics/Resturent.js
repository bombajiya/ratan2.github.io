import React, { useState } from 'react'
import "./style.css";
import Menu from './Apimenu';
import Menucard from "./Menucard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map((curElem) => {          // new set use for avoid repeat Api
    return curElem.category         // pure data and avoid [[entries]]  use ... (spread operator)
})
),
"All"
];
console.log(uniqueList);

const Resturent = () => {
    const [menuData, setmenuData] = useState(Menu);    // hook method for loop in Api object
    const [menuList, setmenuList] = useState(uniqueList);
    //console.log(menuData);
    const filterItem = (category) => {
        if(category==="All"){
            setmenuData(Menu);
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setmenuData(updatedList);
    }

    return (
        <>
            {/* props pass */}

            <Navbar filterItem={filterItem} menuList={menuList} />
            <Menucard menuValue={menuData} />

        </>
    )
}
export default Resturent;  