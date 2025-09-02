import "./certpage.css";

function Certpage(){
    return(
        <>
        <section className="cert-page">
            <hr />
            <h3>Click on Any Folder to View the Certificate</h3>
            <hr />
            <div className="show-cert">
                <div className="cert-div coursera">
                    <img src="./src/assets/coursera.png" style={{paddingBottom : "4px" ,height : "25px", width : "73%"}}></img>
                    <h2>Certification of Google</h2>
                    <hr style={{border : "2px solid #4a00d8"}}></hr>
                    <h3>Foundations of Cyber Security</h3>
                    <h4>Feb 26, 2024</h4>
                    <h5>https://coursera.org/verify/GHV2PDC9GTG3</h5>
                </div>

                <div className="cert-div udemy">
                    <img src="./src/assets/udemy.png" style={{width : "110px", marginTop : "-5px"}}></img>
                    <h2>Certification of Udemy</h2>
                    <hr style= {{border : "2px solid #bd01f4"}}></hr>
                    <h3>Ethical Hacking : Course 101</h3>
                    <h4>Feb 26, 2024</h4>
                    <h5 style={{color : "#bd01f4"}}>https://coursera.org/verify/GHV2PDC9GTG3</h5>
                </div>

                <div className="cert-div cisco">
                    <img src="./src/assets/cisco.png" style={{width : "120px", marginTop : "-25px"}}></img>
                    <hr style= {{border : "2px solid #298fde", marginTop : "-7px"}}></hr>
                    <h3>Foundations of Cyber Security</h3>
                    <h4>Feb 26, 2024</h4>
                    <h5 style = {{color : "#298fde"}}>https://coursera.org/verify/GHV2PDC9GTG3</h5>
                </div>

                <div className="cert-div nptel">
                    <img src="./src/assets/nptel.png" style={{width : "160px", marginLeft : "-16px"}}></img>
                    <h2>Certification of IIT</h2>
                    <hr style= {{border : "2px solid #d10021"}}></hr>
                    <h3>Cyber Security & Privacy</h3>
                    <h4>Feb 26, 2024</h4>
                    <h5 style = {{color : "#d10021"}}>https://coursera.org/verify/GHV2PDC9GTG3</h5>
                </div>
            </div>

            <div className="folder-container">
                <div className="boxx coursera">
                    <svg className="fold-inner" width="235" height="240" viewBox="0 0 355 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25H348C351.866 25 355 28.134 355 32V233C355 236.866 351.866 240 348 240H6.99999C3.134 240 0 236.866 0 233V25Z" fill="#3D8DFF"/>
                        <path d="M0 35H234C237.866 35 241 31.866 241 28V7C241 3.13401 237.866 0 234 0H7C3.13401 0 0 3.13401 0 7V35Z" fill="#3D8DFF"/>
                        <path d="M238 0L265.713 31.5H210.287L238 0Z" fill="#3D8DFF"/>
                    </svg>

                    <div className="cert-card1"></div>
                    <div className="cert-card2"></div>
                    <div className="cert-card3"></div>

                    <svg className= "fold-outer" width="370" height="273" viewBox="0 0 558 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="353" height="174.085" transform="matrix(1 0 0 -1 55.0874 251.227)" fill="#95B9FB"/>
                        <path d="M52.6193 246.562C53.2926 251.739 60.4904 252.45 62.2871 247.517L122.685 81.6908C123.797 78.6368 121.76 75.3844 118.534 75.0656L35.5018 66.8584C32.2764 66.5396 29.568 69.3229 29.9848 72.5281L52.6193 246.562Z" fill="#95B9FB"/>
                        <path d="M34.2314 66.8115L427.362 66.5823L415.354 156.669L34.2314 66.8115Z" fill="#95B9FB"/>
                        <path d="M411.444 246.604C410.771 251.783 403.571 252.494 401.775 247.56L341.355 81.5465C340.243 78.4928 342.281 75.2413 345.506 74.9225L428.542 66.715C431.767 66.3963 434.475 69.1787 434.059 72.3834L411.444 246.604Z" fill="#95B9FB"/>
                    </svg>

                    <img src= "https://images.ctfassets.net/00atxywtfxvd/2MlqAOzmHjSPtssv6HlNox/1cb35b40775835a5f574ebc5509907a1/coursera-wordmark-blue.svg" style= {{width : "160px", left : "15px"}}></img>
                </div>

                <div className="boxx udemy">
                    <svg className="fold-inner" width="235" height="240" viewBox="0 0 355 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25H348C351.866 25 355 28.134 355 32V233C355 236.866 351.866 240 348 240H6.99999C3.134 240 0 236.866 0 233V25Z" fill="#A435F0"/>
                        <path d="M0 35H234C237.866 35 241 31.866 241 28V7C241 3.13401 237.866 0 234 0H7C3.13401 0 0 3.13401 0 7V35Z" fill="#A435F0"/>
                        <path d="M238 0L265.713 31.5H210.287L238 0Z" fill="#A435F0"/>
                    </svg>

                    <div className="cert-card1"></div>
                    <div className="cert-card2"></div>
                    <div className="cert-card3"></div>

                    <svg className= "fold-outer" width="370" height="273" viewBox="0 0 558 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="353" height="174.085" transform="matrix(1 0 0 -1 55.0874 251.227)" fill="#E1BBFA"/>
                        <path d="M52.6193 246.562C53.2926 251.739 60.4904 252.45 62.2871 247.517L122.685 81.6908C123.797 78.6368 121.76 75.3844 118.534 75.0656L35.5018 66.8584C32.2764 66.5396 29.568 69.3229 29.9848 72.5281L52.6193 246.562Z" fill="#E1BBFA"/>
                        <path d="M34.2314 66.8115L427.362 66.5823L415.354 156.669L34.2314 66.8115Z" fill="#E1BBFA"/>
                        <path d="M411.444 246.604C410.771 251.783 403.571 252.494 401.775 247.56L341.355 81.5465C340.243 78.4928 342.281 75.2413 345.506 74.9225L428.542 66.715C431.767 66.3963 434.475 69.1787 434.059 72.3834L411.444 246.604Z" fill="#E1BBFA"/>
                    </svg>

                    <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJuU6rxh_TTHgX0NYDUXc1mI38LToXCLtoA&s" style={{padding : "2px 50px", width: "100px", left : "17px"}}></img>
                </div>

                <div className="boxx cisco">
                    <svg className="fold-inner" width="235" height="240" viewBox="0 0 355 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25H348C351.866 25 355 28.134 355 32V233C355 236.866 351.866 240 348 240H6.99999C3.134 240 0 236.866 0 233V25Z" fill="#049FD9"/>
                        <path d="M0 35H234C237.866 35 241 31.866 241 28V7C241 3.13401 237.866 0 234 0H7C3.13401 0 0 3.13401 0 7V35Z" fill="#049FD9"/>
                        <path d="M238 0L265.713 31.5H210.287L238 0Z" fill="#049FD9"/>
                    </svg>

                    <div className="cert-card1"></div>
                    <div className="cert-card2"></div>
                    <div className="cert-card3"></div>

                    <svg className= "fold-outer" width="370" height="273" viewBox="0 0 558 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="353" height="174.085" transform="matrix(1 0 0 -1 55.0874 251.227)" fill="#8DCEE6"/>
                        <path d="M52.6193 246.562C53.2926 251.739 60.4904 252.45 62.2871 247.517L122.685 81.6908C123.797 78.6368 121.76 75.3844 118.534 75.0656L35.5018 66.8584C32.2764 66.5396 29.568 69.3229 29.9848 72.5281L52.6193 246.562Z" fill="#8DCEE6"/>
                        <path d="M34.2314 66.8115L427.362 66.5823L415.354 156.669L34.2314 66.8115Z" fill="#8DCEE6"/>
                        <path d="M411.444 246.604C410.771 251.783 403.571 252.494 401.775 247.56L341.355 81.5465C340.243 78.4928 342.281 75.2413 345.506 74.9225L428.542 66.715C431.767 66.3963 434.475 69.1787 434.059 72.3834L411.444 246.604Z" fill="#8DCEE6"/>
                    </svg>

                    <img src= "https://www.imprivata.com/sites/imprivata/files/2024-09/cisco_logo.png" style={{width: "80px" , padding : "0 30px", left: "14%", top: "110px"}}></img>
                </div>

                <div className="boxx cisco">
                    <svg className="fold-inner" width="235" height="240" viewBox="0 0 355 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25H348C351.866 25 355 28.134 355 32V233C355 236.866 351.866 240 348 240H6.99999C3.134 240 0 236.866 0 233V25Z" fill="#CB0737"/>
                        <path d="M0 35H234C237.866 35 241 31.866 241 28V7C241 3.13401 237.866 0 234 0H7C3.13401 0 0 3.13401 0 7V35Z" fill="#CB0737"/>
                        <path d="M238 0L265.713 31.5H210.287L238 0Z" fill="#CB0737"/>
                    </svg>

                    <div className="cert-card1"></div>
                    <div className="cert-card2"></div>
                    <div className="cert-card3"></div>

                    <svg className= "fold-outer" width="370" height="273" viewBox="0 0 558 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="353" height="174.085" transform="matrix(1 0 0 -1 55.0874 251.227)" fill="#FA8183"/>
                        <path d="M52.6193 246.562C53.2926 251.739 60.4904 252.45 62.2871 247.517L122.685 81.6908C123.797 78.6368 121.76 75.3844 118.534 75.0656L35.5018 66.8584C32.2764 66.5396 29.568 69.3229 29.9848 72.5281L52.6193 246.562Z" fill="#FA8183"/>
                        <path d="M34.2314 66.8115L427.362 66.5823L415.354 156.669L34.2314 66.8115Z" fill="#FA8183"/>
                        <path d="M411.444 246.604C410.771 251.783 403.571 252.494 401.775 247.56L341.355 81.5465C340.243 78.4928 342.281 75.2413 345.506 74.9225L428.542 66.715C431.767 66.3963 434.475 69.1787 434.059 72.3834L411.444 246.604Z" fill="#FA8183"/>
                    </svg>

                    <img src= "https://internalapp.nptel.ac.in/B2C/exam_form/images/logo.png" style={{width: "160px" , padding : "4px 0px", left: "12%", top: "118px"}}></img>
                </div>
            </div>

        </section>
        </>
    );
}

export default Certpage;