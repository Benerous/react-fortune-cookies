import React, { Component } from 'react'

export default class Cookie extends Component {
    render() {
        const { message, handleChange, phraseVisibility, handleReset, language } = this.props;
        return (
            <div className="container pt-5">
                <div>
                    <div className="m-md-5 m-4">
                        {
                            language === "Eng" ? <h3 className={phraseVisibility ? 'fadeOut-button':'fadeIn-button'}>Think about the Question and get an Answer to It</h3> : 
                                <h3 className={phraseVisibility ? 'fadeOut-button':'fadeIn-button'}>Придумай запитання та отримай відповідь на нього</h3>
                        }
                    </div>
                    <div className="mx-auto">
                        <img className={phraseVisibility ? 'fadeOut':'fadeIn cookie'} onClick={handleChange} src="https://www.online-fortune-telling.com/images/saxumpicker/rose/fortune-cookie.png" alt="cookie" />
                    </div>
                    <div className="phrase mx-auto">
                        <div className={phraseVisibility ? 'fadeIn-button pt-5':'fadeOut-button pt-5'}>
                            <h4> {message} </h4>
                            <div className={phraseVisibility ? 'fadeIn-button':'invisible'}>
                                <button className="btn btn-outline-dark mt-5" onClick={handleReset}>
                                    {
                                        language === "Eng" ? "Try again" : "Спробуй ще раз"
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
