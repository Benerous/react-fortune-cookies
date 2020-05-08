import React, { Component } from 'react'

export default class Language extends Component {
    render() {
        const { languages, handleSubmit } = this.props;
        return (
            <div className="container pt-3">
                <div className="h-50">
                    {
                        languages.map((item, index) => {
                            return (
                                <button onClick={handleSubmit} className="btn btn-outline-dark m-1" value={index}>{item}</button>
                            );
                    })}
                </div>
            </div>
        )
    }
}
