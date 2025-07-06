import Counter from "../counter/Counter";

const AchievementCounter1 = () => {
    return (
        <>
            <div className="achivement-counter">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="flaticon-handshake"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><Counter end={500} /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Business advices given over 30 years</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="flaticon-employee"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><Counter end={30} /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Business Excellence awards achieved</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AchievementCounter1;