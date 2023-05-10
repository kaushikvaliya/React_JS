import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import WelcomeToFunctional from './WelcomeToFunctionalCompo.jsx';
import FunctionalCompoState from './02FunctionalCompoState.jsx';
import FunctionalCompostateuseStatewithobject from './FunctionalCompostateuseStatewithobject.jsx';
import FunctionalCompostateuseStatewithArray from './FunctionalCompostateuseStatewithArray.jsx';
import FunctionalCompoUseEffect from './03FunctionalCompoUseEffect.jsx';
import FunctionalCompoUseEffectExample from './3.1FunctionalCompoUseEffectExample.jsx';
import FunctionalCompouseCallback from './04FunctionalCompouseCallback.jsx';
import FunctionalCompoUseMemo from './06FunctionalCompoUseMemo.jsx';
import FunctionalCompoUseContext from './07UseContext/FunctionalCompoUseContext.jsx';
import UseContext from './08FunctionalCompoUseContext.jsx';
import FunctionalCompoUseReducer from './09FunctionalCompoUseReducer.jsx';
import FunctionalCompoTodolist from './Todolist.jsx';


const FunctionalCompoRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<FunctionalCompoMenu />} >
                <Route path="usecontext" element={<UseContext />} />
                <Route path="navbar" element={<Navbar />} />
                <Route path="functionalcompointro" element={<WelcomeToFunctional />} />
                <Route path="functionalcompostate" element={<FunctionalCompoState />} />
                <Route path="functionalcompostateuseStatewithobject" element={<FunctionalCompostateuseStatewithobject />} />
                <Route path="functionalcompostateuseStatewitharray" element={<FunctionalCompostateuseStatewithArray />} />
                <Route path="functionalcompouseeffect" element={<FunctionalCompoUseEffect />} />
                <Route path="functionalcompouseeffectexample" element={<FunctionalCompoUseEffectExample />} />
                <Route path="functionalfompousefallback" element={<FunctionalCompouseCallback />} />
                <Route path="functionalfompousememo" element={<FunctionalCompoUseMemo />} />
                <Route path="functionalfompousecontext" element={<FunctionalCompoUseContext />} />
                <Route path="usecontext" element={<UseContext />} />
                <Route path="functionalcompouusereducer" element={<FunctionalCompoUseReducer />} />
                <Route path="functionalcompotodolist" element={<FunctionalCompoTodolist />} />
            </Route>
        </Routes>
    );
};


// class ClassCompoRoute extends Component {
//     render() {
//         return (
//             <>
//                 <Routes>
//                     <Route path="/" element={<ClassCompoMenu />} >
//                         <Route path="functionalcompointro" element={<WelcomeToFunctionalCompo />} />
//                     </Route>
//                 </Routes>
//             </>
//         );
//     }
// }
export default FunctionalCompoRoute;



// <div className={`app-container ${theme}`}>












// import { useState } from 'react';

// function Navbar() {
//   const [activeLink, setActiveLink] = useState(null);
//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };
//   const links = [
//     { label: 'Home', href: '#' },
//     { label: 'About', href: '#' },
//     { label: 'Contact', href: '#' },
//   ];
//   return (
//     <div className="header">
//       <div className="header_text">
//         <ul>
//           {links.map((link, index) => (
//             <li key={index}>
//               <a
//                 href={link.href}
//                 onClick={(event) => {
//                   event.preventDefault();
//                   handleLinkClick(index);
//                 }}
//                 className={activeLink === index ? 'dot_active' : ''}
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
