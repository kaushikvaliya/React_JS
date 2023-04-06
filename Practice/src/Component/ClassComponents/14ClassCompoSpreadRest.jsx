import React, { Component } from 'react';

class ClassCompoSpreadRest extends Component {

    render() {
        // Rest
        const addnumbe = (a, ...b) => {
            console.log("called addition value of a : ", a, "value of b ", b);
        }
        addnumbe(10, 20, 30, 40, 66, 77);



        var data = ""
        // Spread
        const additionSpread = (a, b, c, ...d) => {

            console.log("called addition value of a :", a, "value of b :", b, "value of c :", c, "value of d :", d);
            return (
                data = (<p>{"value of b :" + a + "value of b :" + b + "value of b :" + c + "value of b :" + d} </p>)
            )
        }

        // function additionSpread(a, b, c, ...d) {
        //     console.log("called addition value of a :", a, "value of b :", b, "value of c :", c, "value of d :", d);
        //     return (
        //         data = (<p>{"value of b :" + a + "value of b :" + b + "value of b :" + c + "value of b :" + d} </p>)
        //     )
        // }


        // additionSpread(10, 20, 30, 40)

        const number = [1, 2, 4, 5, 6, 7]
        additionSpread(...number)

        // additionSpread(10, 20, 30, 40)

        return (
            <>

                <>
                    function myBio(firstName, lastName, ...otherInfo) &#123; <br />
                    &nbsp;&nbsp;&nbsp; return otherInfo;<br />
                    &#125;<br />
                // Invoke myBio function while passing five arguments to its parameters: <br />
                    myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

                    <br />
                    const myName = ["Sofela", "is", "my"];
                    <br />
                    const aboutMe = ["Oluwatobi", ...myName, "name."];
                    <br />
                    <p>About me : aboutMe</p>

                    const numbers = [1, 3, 5, 7];<br />

                    function addNumbers(a, b, c, d)&#123;<br />
                    &nbsp;&nbsp;&nbsp;return a + b + c + d;<br />
                    &#125;<br />

                    console.log(addNumbers(...numbers));
                    <br />
                    console.log(aboutMe);
                    {/* {this.getDataSpread(arr)} */}

                    {data}

                </>
            </>
        );
    }
}

export default ClassCompoSpreadRest;