import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul className='mt-3'>
                    <li> <Link to='classcompointro' className='h4 text-capitalize'>Class Compo Intro</Link> </li>
                    <li> <Link to='classcompoconstructor' className='h4 text-capitalize'>class compo constructor</Link> </li>
                    <li> <Link to='classcompoState' className='h4 text-capitalize'>Class Compo State</Link> </li>
                    <li> <Link to='classcompojsx' className='h4 text-capitalize'>Class compo jsx</Link> </li>
                    <li> <Link to='classcompoprop' className='h4 text-capitalize'>class component prop</Link> </li>
                    <li> <Link to='lifecycle' className='h4 text-capitalize'>class component life cycle</Link> </li>
                    <li> <Link to='lifecyclelaoder' className='h4 text-capitalize'>class component life cycle  laoder</Link> </li>
                    <li> <Link to='conditionalrendering' className='h4 text-capitalize'>class component conditional rendering</Link> </li>
                    <li> <Link to='listKeysmap' className='h4 text-capitalize'>Class Compo List Keys</Link> </li>
                </ul>
                <Outlet></Outlet>
            </>
        )
    }
}
