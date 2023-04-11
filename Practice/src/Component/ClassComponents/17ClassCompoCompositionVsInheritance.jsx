import React, { Component } from 'react';
import CompositionChild from './18CompositionChild';


class ClassCompoCompositionVsInheritance extends Component {
    render() {
        return (
            <>
                <h2>Parent Compo</h2>

                <CompositionChild data="this is props data">

                    <h3>Something</h3>
                    <p>This is the data from parent compo with html strucutre</p>
                </CompositionChild>

            </>
        );
    }
}

export default ClassCompoCompositionVsInheritance;