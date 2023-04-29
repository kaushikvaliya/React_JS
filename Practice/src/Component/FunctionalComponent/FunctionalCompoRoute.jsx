import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import WelcomeToFunctional from './WelcomeToFunctionalCompo.jsx';
import FunctionalCompoState from './02FunctionalCompoState.jsx';
import FunctionalCompoUseEffect from './03FunctionalCompoUseEffect.jsx';
import FunctionalCompoUseEffectExample from './3.1FunctionalCompoUseEffectExample.jsx';
import FunctionalCompouseCallback from './04FunctionalCompouseCallback.jsx';
import FunctionalCompoUseMemo from './06FunctionalCompoUseMemo.jsx';
import FunctionalCompoUseContext from './07UseContext/FunctionalCompoUseContext.jsx';
import UseContext from './08FunctionalCompoUseContext.jsx';


const FunctionalCompoRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<FunctionalCompoMenu />} >
                <Route path="functionalcompointro" element={<WelcomeToFunctional />} />
                <Route path="functionalcompostate" element={<FunctionalCompoState />} />
                <Route path="functionalcompouseeffect" element={<FunctionalCompoUseEffect />} />
                <Route path="functionalcompouseeffectexample" element={<FunctionalCompoUseEffectExample />} />
                <Route path="functionalfompousefallback" element={<FunctionalCompouseCallback />} />
                <Route path="functionalfompousememo" element={<FunctionalCompoUseMemo />} />
                <Route path="functionalfompousecontext" element={<FunctionalCompoUseContext />} />
                <Route path="usecontext" element={<UseContext />} />
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