import React, { Component } from 'react'

export default class Cookie extends Component {
    render() {
        const { message, handleChange, phraseVisibility, handleReset } = this.props;
        return (
            <div className="container">
                <div>
                    <div className="mx-auto">
                        <img className={phraseVisibility ? 'fadeOut':'fadeIn cookie'} onClick={handleChange} src="https://www.online-fortune-telling.com/images/saxumpicker/rose/fortune-cookie.png" alt="cookie" />
                    </div>
                    <div className="cookie mx-auto">
                        <div className={phraseVisibility ? 'fadeIn-button pt-5':'fadeOut-button pt-5'}>
                            <p> {message} </p>
                            <button className="btn btn-outline-dark" onClick={handleReset}>Try again</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
