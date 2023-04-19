import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import WelcomeToFunctional from './WelcomeToFunctionalCompo.jsx';
import FunctionalCompoState from './02FunctionalCompoState.jsx';
import FunctionalCompoUseEffect from './03FunctionalCompoUseEffect.jsx';

const FunctionalCompoRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<FunctionalCompoMenu />} >
                <Route path="functionalcompointro" element={<WelcomeToFunctional />} />
                <Route path="functionalcompostate" element={<FunctionalCompoState />} />
                <Route path="functionalcompouseeffect" element={<FunctionalCompoUseEffect />} />
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