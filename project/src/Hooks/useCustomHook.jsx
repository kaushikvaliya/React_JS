import React from 'react';
import { useState } from 'react';

const CustomHook = (intval, initError) => {
    const [inp, setInput] = useState(intval);
    const [errors, setError] = useState(initError);

    const handleChange = (e) => {
        setInput((inp) => ({ ...inp, [e.target.name]: e.target.value }));

        const errorKey = e.target.name;
        const errorMessage = `${e.target.name} is required`;
        const errorContainer = e.target.nextElementSibling;

        // if (e.target.className.includes("thisrequired")) {
        if (e.currentTarget.classList.contains("thisrequired")) {

            if (e.target.value === "") {
                setError((prevErrors) => ({ ...prevErrors, [errorKey]: errorMessage }));

                if (!errorContainer || errorContainer.nodeName !== 'SPAN') {
                    const errorSpan = document.createElement('span');
                    errorSpan.style.width = '200px';
                    errorSpan.textContent = errorMessage;
                    e.target.insertAdjacentElement('afterend', errorSpan);
                }
            } else {
                setError((prevErrors) => ({ ...prevErrors, [errorKey]: "" }));
                if (errorContainer && errorContainer.nodeName === 'SPAN') {
                    errorContainer.remove();
                }
            }
        }
    }

    const updatedData = (data) => {
        setInput(data);
    }

    return { handleChange, inp, errors, updatedData };
};

export default CustomHook;







// import React from 'react';

// const UseCustomHook = () => {


//     React.useEffect(() => {
//         const elements = document.querySelectorAll('.thisrequired');
//         elements.forEach((element) => {
//             element.addEventListener('blur', handleBlur);
//         });

//         // return () => {
//         //     elements.forEach((element) => {
//         //         element.removeEventListener('blur', handleBlur);
//         //     });
//         // };
//     }, []);

//     const handleBlur = (event) => {
//         const element = event.target;
//         console.log(element);

//         // console.log(event);
//         const val = element.getAttribute('name');
//         const arroe = val + '&nbsp;' + 'required';
//         const txt = document.createElement('span');
//         txt.style.textTransform = 'capitalize';
//         txt.innerHTML = arroe;
//         const validationMsg = element.nextSibling;

//         if (element.value === '') {
//             if (!validationMsg || validationMsg.nodeName !== 'SPAN') {
//                 element.insertAdjacentElement('afterend', txt);
//             }
//         } else {
//             if (validationMsg && validationMsg.nodeName === 'SPAN') {
//                 validationMsg.remove();
//             }
//         }


//         const node = event.target.getAttribute('type');
//         // const emailValue = ;
//         if (node === 'email') {
//             const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//             if (emailRegex.test(event.target.value.trim())) {
//                 event.target.style.color = 'green';

//             } else {
//                 event.target.style.color = 'red';
//                 element.insertAdjacentElement('afterend', txt);
//                 // console.log('Invalid email'); // Add this line
//             }
//         }

//     };





//     return { handleBlur };
// };

// export default UseCustomHook;












// import React from 'react';

// const useCustomHook = () => {
//     var elements = document.querySelectorAll('.thisrequired');

//     for (var i = 0; i < elements.length; i++) {
//         elements[i].addEventListener('blur', function () {
//             var val = this.getAttribute('name');
//             console.log(this);
//             var arroe = val + '&nbsp;' + "required";
//             var txt = document.createElement("SPAN");
//             txt.style.textTransform = "capitalize";
//             txt.innerHTML = arroe;
//             const validationMsg = this.nextSibling;

//             if (this.value === '') {
//                 if (!validationMsg || validationMsg.nodeName !== 'SPAN') {
//                     this.insertAdjacentElement('afterend', txt);
//                 }
//             } else {
//                 if (validationMsg && validationMsg.nodeName === 'SPAN') {
//                     validationMsg.remove();
//                 }
//             }
//         });
//     }
//     return { useCustomHook }
// };

// export default useCustomHook;























// import React from 'react';
// import { useState, useEffect } from 'react';

// const CustomHook = (intval, initError) => {
//     const [inp, setInput] = useState(intval);
//     const [errors, setError] = useState(initError);

//     // useEffect(() => {
//     const handleBlur = (e) => {
//         setInput((prevInput) => ({ ...prevInput, [e.target.name]: e.target.value }));

//         const errorKey = `${e.target.name}Error`;
//         const errorMessage = `${e.target.name} is required`;
//         const errorContainer = e.target.nextElementSibling;

//         if (e.target.classList.contains("thisrequired")) {
//             if (e.target.value === "") {
//                 setError((prevErrors) => ({ ...prevErrors, [errorKey]: errorMessage }));

//                 console.log(errorKey);
//                 if (!errorContainer || errorContainer.nodeName !== 'SPAN') {
//                     const errorSpan = document.createElement('span');
//                     errorSpan.textContent = errorMessage;
//                     e.target.parentNode.insertBefore(errorSpan, e.target.nextSibling);
//                 }
//             } else {
//                 setError((prevErrors) => ({ ...prevErrors, [errorKey]: "" }));

//                 if (errorContainer && errorContainer.nodeName === 'SPAN') {
//                     errorContainer.remove();
//                 }
//             }
//         }
//     };

//     const elements = document.querySelectorAll('.thisrequired');
//     elements.forEach((element) => {
//         element.addEventListener('blur', handleBlur);
//     });

//     // return () => {
//     //     elements.forEach((element) => {
//     //         element.removeEventListener('blur', handleBlur);
//     //     });
//     // };
//     // }, []);

//     return { handleChange: () => inp, errors };
// };

// export default CustomHook;




















