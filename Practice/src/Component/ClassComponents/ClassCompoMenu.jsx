import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul className='mt-3' style={{ width: "91%", margin: "0 auto" }}>
                    <li><Link to='classcompointro' className='h4 text-capitalize'>Class Compo Intro</Link> </li>
                    <li><Link to='classcompoconstructor' className='h4 text-capitalize'>class compo constructor</Link> </li>
                    <li><Link to='classcompoState' className='h4 text-capitalize'>Class Compo State</Link> </li>
                    <li><Link to='classcompojsx' className='h4 text-capitalize'>Class compo jsx</Link> </li>
                    <li><Link to='classcompoprop' className='h4 text-capitalize'>class component prop</Link> </li>
                    <li><Link to='lifecycle' className='h4 text-capitalize'>class component life cycle</Link> </li>
                    <li><Link to='lifecyclelaoder' className='h4 text-capitalize'>class component life cycle  laoder</Link> </li>
                    <li><Link to='conditionalrendering' className='h4 text-capitalize'>class component conditional rendering</Link> </li>
                    <li><Link to='listKeysmap' className='h4 text-capitalize'>Class Compo List Keys</Link> </li>
                    <li><Link to='classcompocistceysexample' className='h4 text-capitalize'>Class Compo List Keys example</Link> </li>
                    <li><Link to='classCompocynamicsubMenu' className='h4 text-capitalize'>Class Compo Dynamic SubMenu</Link> </li>
                    <li><Link to='classcompospreadrest' className='h4 text-capitalize'>Class Compo Spread Rest</Link> </li>
                    <li><Link to='classcompocontrolledcompo' className='h4 text-capitalize'>Class Compo Controlled Compo</Link> </li>
                    <li><Link to='classcompocontrolledcompoobject' className='h4 text-capitalize'>Class Compo Controlled Compo Object</Link> </li>
                    <li><Link to='classcompouncontrolledcompo' className='h4 text-capitalize'>Class Compo UnControlled Compo</Link> </li>
                    <li><Link to='classcompocompositionvsInheritance' className='h4 text-capitalize'>Class Compo CompositionVsInheritance</Link> </li>
                    <li><Link to='classcompocompostatelifting' className='h4 text-capitalize'>Class Compo State Lifting</Link> </li>
                    <li><Link to='classcompohoc' className='h4 text-capitalize'>Class Compo high order</Link> </li>
                    <li><Link to='fetchapi' className='h4 text-capitalize'>fetch API</Link> </li>
                </ul>
                <Outlet></Outlet>
            </>
        )
    }
}
