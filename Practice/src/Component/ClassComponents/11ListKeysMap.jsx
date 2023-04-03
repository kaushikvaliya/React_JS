import React, { Component } from 'react';

class ClassCompoListKeyMap extends Component {
    render() {
        // arrow banviyo 
        // const data = [12, 99, "nandan", true];
        // arrow ni andar object banviyo che 
        // const objarray = [{ key: 1, value: 10 }, { key: 2, value: 30 }, { key: 3, value: 50 },]
        // arrow ni andar object banviyo che 
        const navbar = [{ key: 1, value: "home" }, { key: 2, value: "about" }, { key: 3, value: "contact us" }, { key: 3, value: "example" },]
        // let htmlLi = ""
        //foreach loop 
        // const foreachdata = data.forEach(element => {
        //     return < li > {element}</ li>
        //     // console.log(element);
        //     console.log(htmlLi);
        //     htmlLi += <li>{element}</li>
        //     // jyare foreach loop ma array ne webpage ma print karvi tyre object object lakhelu ave che sidhu array ne foreach ma access nahi kari sakta aena mate array ne string ma fervu pade che
        // });

        // const mapdata = data.map((dt, index) => {

        //     console.log("index", index);
        // dt means arrow na  data
        //     console.log("dt", dt);
        // JSON.stringify thi apde boolen value bhi show kari sakiye
        //     return <li key={index}>{JSON.stringify(dt)}</li>
        // })

        // map function thi arrow ni value ne print karvi 
        // const objarraydata = objarray.map(({ key, value }, index) => {
        //index arrow ni value ketla index par che te show karse 0,1,2 etc
        //     console.log("menudata index", index);
        // object ni andar ni key je hase te show karse beacuse ani andar apde speficy kariyu che object ni andar ni {key , value} mathi key ne show karva ni che
        //     console.log("menudata key", key);
        // object ni andar ni value je hase te show karse beacuse ani andar apde speficy kariyu che object ni andar ni {key , value} mathi value ne show karva ni che
        //     console.log("menudata value", value);

        // })

        // const objarraydata = objarray.map((value, index) => {
        //     //index arrow ni value ketla index par che te show karse 0,1,2 etc
        //     console.log("menudata index", index);
        //     // object (value = key and value)  means ke key and value bey show karse ani andar jyare khali value api hase tyare 
        //     console.log("menudata value  ", value);
        //     // object (value) ni andar ni key ne accecs karvi hase tyare value.key lakhva ma ave che 
        //     console.log("menudata value of key", value.key);
        //     // object (value) ni andar ni value ne accecs karvi hase tyare value.value lakhva ma ave che 
        //     console.log("menudata value", value.value);
        // })

        const navbardata = navbar.map((value, index) => {

            // console.log("menudata index", index);
            // console.log("menudata value  ", value);
            // console.log("menudata value of key", value.key);
            // console.log("menudata value", value.value);

            return <li key={index}>{value.value}</li>
            // key={} means ke Each child in a list should have a unique "key" prop.(arrow ni value ne unique key madvi joi)
        })
        return (
            <>
                {/* {data[0]}
                {data[2]} */}
                <h2>array data access using foreach with appending</h2>
                {/* {htmlLi} */}
                <ul>
                    {/* {mapdata} */}
                </ul>
                {/* {foreachdata} */}
                <ul>
                    {navbardata}
                </ul>
            </>
        );
    }
}

export default ClassCompoListKeyMap;