import './page21.css'
 
function AboutPage(){
    
    const biodata = [
        { question: "Name", answer: "Gubbala Sri Sai Aditya" },
        { question: "Status", answer: "Student [4th year]" },
        { question: "Date Of Birth", answer: "23rd February, 2005" },
        { question: "Availability", answer: "Remote, Full-Time" },
        { question: "Location", answer: "Chennai, India" }
      ];

    return(
        <>
        
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" />

        <section className="about-page-new">
            <div className='about-container1'>
                <div className="a-pic"></div>

                <div className="a-data">
                    <span class="material-symbols-outlined">info</span>
                    <span className='a-heading'>Information</span>
                    <hr className='about-hr'></hr>
                    <ul className="a-bio-ul">
                        {biodata.map((item, index) => (
                            <li key={index} className="a-biodata">
                                <span className="bio-ul-q">{item.question}</span>
                                <span className="bio-ul-a">{item.answer}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="a-middle">

                    <div className='a-intro'>
                        <div className='a-title'>ABOUT ME</div>
                        <div className='right-misc'></div>
                    </div>

                    <div className='a-desc'>
                        <span class="material-symbols-outlined">book</span>
                        <span className='a-heading'>Description</span>
                        <hr className='about-hr'></hr>
                        <div className='desc-content'>
                            Hello there! I’m Gubbala Sri Sai Aditya, a 20-year-old technology 
                            enthusiast with a deep passion for exploring and understanding the 
                            evolving landscape of modern digital technologies.
                            <br></br><br></br>
                            I am currently pursuing my Degree in Computer Science at 
                            KCG College of Technology , Chennai.
                            <br></br><br></br>
                            I am a highly Motivated Individual who enjoys solving problems, 
                            working on innovative ideas, and collaborating with like-minded professionals. 
                            My ultimate goal is to build a career in Cybersecurity and Emerging Tech,
                            <br></br><br></br>
                            I have completed various courses and Certifications and am also equipped with excellent soft skills. [ Communication , Probelm Solving.]
                        </div>
                    </div>

                    <div className='a-social'>
                    <span class="material-symbols-outlined">3p</span>
                        <span className='a-heading'>Socials</span>
                        <ul className='socials-menu'>
                            <li className='menu-li'><i class="fab fa-github"></i> <b>Github</b></li>
                            <li className='menu-li'><i class="fab fa-linkedin"></i> <b>LinkedIn</b></li>
                            <li className='menu-li'><i class="fab fa-telegram"></i> <b>Gmail</b></li>
                            <li className='menu-li'><i class="fab fa-whatsapp"></i> <b>Whatsapp</b></li>
                        </ul>
                    </div>
                </div>

                <div className="a-edu">
                    <span class="material-symbols-outlined">book</span>
                    <span className='a-heading'>Education</span>
                    <hr className='about-hr'></hr>
                    <ul className="a-bio-ul"> 
                        <li className="a-biodata">
                            <span className="bio-ul-q">School</span>
                            <span className="bio-ul-a">Apex Pon Vidyashram</span>
                            <div className='marks-container'>
                                <div className='marks'>82%<hr className='marks-hr'></hr><br></br><span className='marks-class'>10th</span></div>
                                <div className='marks'>74%<hr className='marks-hr'></hr><br></br><span className='marks-class'>12th</span></div>
                            </div>
                        </li>
                        <li className="a-biodata">
                            <span className="bio-ul-q">College</span>
                            <span className="bio-ul-a">KCG College of Tech.</span>
                            <div className='marks-container'>
                                <div className='marks'>x%<hr className='marks-hr'></hr><br></br><span className='marks-class'>GPA</span></div>
                                <div className='marks'>y%<hr className='marks-hr'></hr><br></br><span className='marks-class'>CGPA</span></div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="a-lang">
                    <span class="material-symbols-outlined">info</span>
                    <span className='a-heading'>Languages</span>
                    <hr className='about-hr'></hr>
                    <ul className="a-bio-ul"> 
                        <li className="a-biodata"><span className="bio-ul-a">English [ Indian ]</span></li>
                        <li className="a-biodata"><span className="bio-ul-a">Telugu [ తెలుగు ]</span></li>
                        <li className="a-biodata"><span className="bio-ul-a">Tamil [ தமிழ் ]</span></li>
                        <li className="a-biodata"><span className="bio-ul-a">Hindi [ हिन्दी ]</span></li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}

export default AboutPage;