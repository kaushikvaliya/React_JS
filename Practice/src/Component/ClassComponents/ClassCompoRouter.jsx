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

export default class ClassCompoRouter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<ClassCompoMenu />}>
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
                    </Route>

                </Routes>
            </>
        )
    }
}
