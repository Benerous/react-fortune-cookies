import React, { Component } from 'react'

export default class Cookie extends Component {
    render() {
        const { message, handleChange, phraseVisibility, handleReset, language } = this.props;
        return (
            <div className="container pt-5">
                <div>
                    <div className="mx-auto">
                        <img className={phraseVisibility ? 'fadeOut':'fadeIn cookie'} onClick={handleChange} src="https://www.online-fortune-telling.com/images/saxumpicker/rose/fortune-cookie.png" alt="cookie" />
                    </div>
                    <div className="cookie mx-auto">
                        <div className={phraseVisibility ? 'fadeIn-button pt-5':'fadeOut-button pt-5'}>
                            <h4> {message} </h4>
                            <div className={phraseVisibility ? 'fadeIn-button':'invisible'}>
                                <button className="btn btn-outline-dark mt-5" onClick={handleReset}>
                                    {
                                        language === "Eng" ? "Try again" : 
                                            language === "Ukr" ? "Спробуй ще раз" : 
                                            "Попробуй еще раз"
                                    } 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
