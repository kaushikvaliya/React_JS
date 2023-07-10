import React, { useState } from 'react';

const SearchCompo = () => {
    const [inputData, setInputData] = useState('');
    const [showResult, setShowResult] = useState([]);
    const name = ["apple", "nandan", "kaushik", "vivek", "ravi", "raju"];

    const inpval = (e) => {
        const inputValue = e.target.value;
        setInputData(inputValue);

        const filteredName = name.filter((data) => data.includes(inputValue));
        console.log(filteredName);
        setShowResult(filteredName)

    };

    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <input type="text" placeholder='search names' onChange={inpval} className='form-control' />

                        <ul className='my-3'>
                            {showResult.map((age) => (
                                <li key={age}>{age}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchCompo;
