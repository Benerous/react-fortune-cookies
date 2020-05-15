import React, { Component } from 'react'

export default class Cookie extends Component {
    render() {
        const { message, handleChange, phraseVisibility, handleReset, language } = this.props;
        return (
            <div className="row">
                <div className="text-center p-3 col-12">
                    {
                        language === "Eng" ? <h3 className={phraseVisibility ? 'fadeOut-button':'fadeIn-button'}>Think about the Question and get an Answer to It</h3> : 
                            <h3 className={phraseVisibility ? 'fadeOut-button':'fadeIn-button'}>Придумай запитання та отримай відповідь на нього</h3>
                    }
                </div>
                <div className="text-center p-3 col-12">
                    <img className={phraseVisibility ? 'fadeOut':'fadeIn cookie'} onClick={handleChange} src="https://www.online-fortune-telling.com/images/saxumpicker/rose/fortune-cookie.png" alt="cookie" />
                </div>
                <div className="text-center col-12">
                    <div className={phraseVisibility ? 'fadeIn-button':'fadeOut-button'}>
                        <h4 className=""> {message} </h4>
                        <div className={phraseVisibility ? 'fadeIn-button text-center p-3':'invisible'}>
                            <button className="btn btn-outline-dark" onClick={handleReset}>
                                {
                                    language === "Eng" ? "Try again" : "Спробуй ще раз"
                                } 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
