class App extends React.Component {

    constructor(props) {
        super(props)


        this.state = {
            break: 5,
            session: 25,
            timer: 25
        }



    };




    render() {


        return (
            <>
                <React.StrictMode>
                    <div className='app-container'>

                        <div className='title'>25 + 5 Clock

                        </div>

                        <div className='length'>

                            <div className='length_break'>
                                <p>Break Length</p>
                                <div>
                                    <i className="fa-solid fa-down-long"></i>
                                    <span>{this.state.break}</span>
                                    <i className="fa-solid fa-up-long"></i>
                                </div>

                            </div>

                            <div className='length_session'>

                                <p>Session Length</p>
                                <div>
                                    <i className="fa-solid fa-down-long"></i>
                                    <span>{this.state.session}</span>
                                    <i className="fa-solid fa-up-long"></i>
                                </div>
                            </div>

                        </div>

                        <div className='timer'>
                            <p>Session</p>

                            <p>{this.state.timer}</p>


                        </div>

                        <div className='controler'>
                            <i className="fa-solid fa-circle-play"></i>
                            <i className="fa-solid fa-rotate"></i>
                        </div>


                    </div>
                </React.StrictMode>
            </>
        )
    }

};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);