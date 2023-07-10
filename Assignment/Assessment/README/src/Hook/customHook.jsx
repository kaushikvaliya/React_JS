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