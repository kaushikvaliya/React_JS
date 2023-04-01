import React, { Component } from 'react';

class LoaderCompo extends Component {
    render() {
        return (
            <div>
                <div className="spinner-container">
                    <div className="loading-spinner">
                    </div>
                </div>
            </div>
        );
    }
}

export default LoaderCompo;