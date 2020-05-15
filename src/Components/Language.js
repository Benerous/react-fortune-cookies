import React, { Component } from 'react'

export default class Language extends Component {
    render() {
        const { languages, handleSubmit } = this.props;
        return (
            <div className="text-center p-3">
                {
                    languages.map((item, index) => {
                        return (
                            <button onClick={handleSubmit} className="btn btn-outline-dark m-1" value={index}>{item}</button>
                        );
                })}
            </div>
        )
    }
}
