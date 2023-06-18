// import React from 'react';
// const Homepage = () => {


//     const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
//     const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
//     const DURATION = 15000;
//     const ROWS = 5;
//     const TAGS_PER_ROW = 5;

//     const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//     const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

//     const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
//         return (
//             <div className='loop-slider' style={{
//                 '--duration': `${duration}ms`,
//                 '--direction': reverse ? 'reverse' : 'normal'
//             }}>
//                 <div className='inner'>
//                     {children}
//                     {children}
//                 </div>
//             </div>
//         );
//     };

//     const Tag = ({ text }) => (
//         <div className='tag'><span>#</span> {text}</div>
//     );

//     return (
//         <div>
//             <div className='app'>
//                 <div className='tag-list'>
//                     {[...new Array(ROWS)].map((_, i) => (
//                         <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
//                             {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
//                                 <Tag text={tag} key={tag} />
//                             ))}
//                         </InfiniteLoopSlider>
//                     ))}
//                     <div className='fade' />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Homepage;






import React from 'react';

const Homepage = () => {
    const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
    const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
    const DURATION = 15000;
    const ROWS = 5;
    const TAGS_PER_ROW = 5;

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

    const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
        return (
            <div className='loop-slider' style={{
                '--duration': `${duration}ms`,
                '--direction': reverse ? 'reverse' : 'normal'
            }}>
                <div className='inner'>
                    {children}
                    {children}
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className='app'>
                <div className='tag-list'>
                    {[...new Array(ROWS)].map((_, i) => (
                        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
                            {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
                                <div className='tag' key={tag}><span></span> {tag}</div>
                            ))}

                            {/* COLORS   add  teg  */}

                            {/* {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag, index) => (
                                <div className='tag' key={tag} style={{ backgroundColor: COLORS[index] }}>
                                    <span></span> {tag}
                                </div>
                            ))} */}

                        </InfiniteLoopSlider>
                    ))}
                    <div className='fade' />
                </div>
            </div>
        </div>
    );
};

export default Homepage;






































// import React, { useState } from 'react';

// const Calculator = () => {
//     const [display, setDisplay] = useState('');

//     const handleButtonClick = (value) => {
//         setDisplay(display + value);
//         console.log(display + value);
//     };

//     const calculateResult = () => {
//         try {
//             const result = eval(display)
//             setDisplay(result);
//         } catch (error) {
//             setDisplay('Error');
//         }
//     };

//     const clearDisplay = () => {
//         setDisplay('');
//     };

//     return (
//         <div className="calculator">
//             <input type="text" value={display} readOnly />
//             <div className="buttons">
//                 <button onClick={() => handleButtonClick('7')}>7</button>
//                 <button onClick={() => handleButtonClick('8')}>8</button>
//                 <button onClick={() => handleButtonClick('9')}>9</button>
//                 <button onClick={() => handleButtonClick('+')}>+</button>
//                 <button onClick={() => handleButtonClick('4')}>4</button>
//                 <button onClick={() => handleButtonClick('5')}>5</button>
//                 <button onClick={() => handleButtonClick('6')}>6</button>
//                 <button onClick={() => handleButtonClick('-')}>-</button>
//                 <button onClick={() => handleButtonClick('1')}>1</button>
//                 <button onClick={() => handleButtonClick('2')}>2</button>
//                 <button onClick={() => handleButtonClick('3')}>3</button>
//                 <button onClick={() => handleButtonClick('*')}>*</button>
//                 <button onClick={() => handleButtonClick('0')}>0</button>
//                 <button onClick={() => handleButtonClick('.')}>.</button>
//                 <button onClick={() => calculateResult()}>=</button>
//                 <button onClick={() => handleButtonClick('/')}>/</button>
//                 <button onClick={() => clearDisplay()}>Clear</button>
//             </div>
//         </div>
//     );
// };

// export default Calculator;






































// function Calculator() {
//     const [firstNumber, setFirstNumber] = useState("");
//     const [secondNumber, setSecondNumber] = useState("");
//     const [operator, setOperator] = useState("");
//     const [result, setResult] = useState("");

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         switch (name) {
//             case "firstNumber":
//                 setFirstNumber(value);
//                 break;
//             case "secondNumber":
//                 setSecondNumber(value);
//                 break;
//             case "operator":
//                 setOperator(value);
//                 break;
//             default:
//                 break;
//         }
//     };

//     const handleCalculate = () => {
//         const firstNumberValue = parseFloat(firstNumber);
//         const secondNumberValue = parseFloat(secondNumber);

//         console.log(operator);
//         switch (operator) {
//             case "+":
//                 setResult(firstNumberValue + secondNumberValue);
//                 break;
//             case "-":
//                 setResult(firstNumberValue - secondNumberValue);
//                 break;
//             case "*":
//                 setResult(firstNumberValue * secondNumberValue);
//                 break;
//             case "/":
//                 setResult(firstNumberValue / secondNumberValue);
//                 break;
//         }
//     };

//     console.log(result);

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="First number"
//                 name="firstNumber"
//                 value={firstNumber}
//                 onChange={handleChange}
//             />
//             <select name="operator" onChange={handleChange}>
//                 <option value="+">+</option>
//                 <option value="-">-</option>
//                 <option value="*">*</option>
//                 <option value="/">/</option>
//             </select>
//             <input
//                 type="text"
//                 placeholder="Second number"
//                 name="secondNumber"
//                 value={secondNumber}
//                 onChange={handleChange}
//             />
//             <button onClick={handleCalculate}>Calculate</button>
//             <h1>Result: {result}</h1>
//         </div>
//     );
// }

// export default Calculator;