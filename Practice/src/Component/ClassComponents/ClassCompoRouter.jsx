import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassCompoMenu from './ClassCompoMenu.jsx'
import ClassCompoIntor from './ClassComponentsintro'
import ClassCompoConstructor from './02ClassCompoConstructor'
import ClassCompoState from './03ClassCompoState'
import ClassCompojsx from './04ClassCompojsx.jsx'
import ClassCompoProps from './05ClassCompoProps.jsx'
import Lifecycle from './07Lifecycle'
import Lifecyclelaoder from './08Lifecyclelaoder'
import ConditionalRendering from './10ConditionalRendering.jsx'
import ListKeysMap from './11ListKeysMap.jsx'
import ClassCompoListKeyMapExample from './12ClassCompoListKeyMapExample.jsx'
import ClassCompoDynamicSubMenu from './13ClassCompoDynamicSubMenu.jsx'
import ClassCompoSpreadRest from './14ClassCompoSpreadRest.jsx'
import ClassCompoControlledCompo from './15ClassCompoControlledCompo.jsx'
import ClassCompoControlledCompoObject from './15.1ClassCompoControlledCompoObject.jsx'
import ClassCompoUnControlledCompo from './16ClassCompoUnControlledCompo.jsx'
import ClassCompoCompositionVsInheritance from './17ClassCompoCompositionVsInheritance.jsx'
import ClassCompoStateLifting from './19ClassCompoStateLifting/mainfile.jsx'
import HOC_in_classCompo from './20HOC_in_classCompo/01mainfile.jsx'
import FetchAPI from './21FetchAPI.jsx'



export default class ClassCompoRouter extends Component {
    render() {
        return (
            <>
                <Routes >
                    <Route path='/' element={<ClassCompoMenu />} >
                        <Route path='/classcompointro' element={<ClassCompoIntor />}></Route>
                        <Route path='/classcompoconstructor' element={< ClassCompoConstructor />}></Route >
                        <Route path='/classcompoState' element={< ClassCompoState />}></Route >
                        <Route path='/classcompojsx' element={< ClassCompojsx />}></Route >
                        <Route path='/classcompoprop' element={< ClassCompoProps />}></Route >
                        <Route path='/lifecycle' element={< Lifecycle />}></Route >
                        <Route path='/lifecyclelaoder' element={< Lifecyclelaoder />}></Route >
                        <Route path='/conditionalrendering' element={< ConditionalRendering />}></Route >
                        <Route path='/listKeysmap' element={< ListKeysMap />}></Route >
                        <Route path='/classcompocistceysexample' element={< ClassCompoListKeyMapExample />}></Route >
                        <Route path='/classCompocynamicsubMenu' element={< ClassCompoDynamicSubMenu />}></Route >
                        <Route path='/classcompospreadrest' element={< ClassCompoSpreadRest />}></Route >
                        <Route path='/classcompocontrolledcompo' element={< ClassCompoControlledCompo />}></Route >
                        <Route path='/classcompocontrolledcompoobject' element={< ClassCompoControlledCompoObject />}></Route >
                        <Route path='/classcompouncontrolledcompo' element={< ClassCompoUnControlledCompo />}></Route >
                        <Route path='/classcompocompositionvsInheritance' element={< ClassCompoCompositionVsInheritance />}></Route >
                        <Route path="classcompocompostatelifting" element={<ClassCompoStateLifting />} />
                        <Route path="classcompohoc" element={<HOC_in_classCompo />} />
                        <Route path="fetchapi" element={<FetchAPI />} />
                    </Route>

                </Routes >
            </>
        )
    }
}
