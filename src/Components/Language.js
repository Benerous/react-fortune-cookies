import React, { Component } from 'react'

export default class Language extends Component {
    render() {
        const { languages, language, handleSubmit, phraseVisibility } = this.props;
        return (
            <div className="container p-5">
                <div className="h-50">
                    {
                        languages.map((item, index) => {
                            return (
                                <button onClick={handleSubmit} className="btn btn-outline-dark m-1" value={index}>{item}</button>
                            );
                    })}
                </div>
                <div className="m-5">
                    {
                        language === "Eng" ? <h3 className={phraseVisibility ? 'fadeOut-button':'fadeIn-button'}>Try your Luck and get an Advice</h3> : 
                            language === "Ukr" ? <h3 className={phraseVisibility ? 'fadeOut-button':'fadeIn-button'}>Спробуйте свою удачу та отримайте пораду</h3> : 
                            <h3 className={phraseVisibility ? 'fadeOut-button':'fadeIn-button'}>Испытайте свою удачу и получите ответ</h3>
                    }
                </div>
            </div>
        )
    }
}
