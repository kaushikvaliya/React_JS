import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import WelcomeToFunctional from './WelcomeToFunctionalCompo.jsx';
import FunctionalCompoState from './02FunctionalCompoState.jsx';
import FunctionalCompoUseEffect from './03FunctionalCompoUseEffect.jsx';
import FunctionalCompoUseEffectExample from './3.1FunctionalCompoUseEffectExample.jsx';
import FunctionalCompouseCallback from './04FunctionalCompouseCallback.jsx';
import FunctionalCompoUseContext from './07UseContext/FunctionalCompoUseContext.jsx';


const FunctionalCompoRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<FunctionalCompoMenu />} >
                <Route path="functionalcompointro" element={<WelcomeToFunctional />} />
                <Route path="functionalcompostate" element={<FunctionalCompoState />} />
                <Route path="functionalcompouseeffect" element={<FunctionalCompoUseEffect />} />
                <Route path="functionalcompouseeffectexample" element={<FunctionalCompoUseEffectExample />} />
                <Route path="functionalfompousefallback" element={<FunctionalCompouseCallback />} />
                <Route path="functionalfompousecontext" element={<FunctionalCompoUseContext />} />
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