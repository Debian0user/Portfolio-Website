import "./projectpage.css"

function Projectpage(){
    return(
        <> 

        <section className="project-page">
            <div class="prj-cnt">
                <div className="prj-top-misc"></div>
                <div className="prj-misc">
                    <div className="prj-circ"></div>
                    <div className="prj-circ"></div>
                    <div className="prj-circ"></div>
                </div>

                <div class="prj-heading">
                    <h2>Projects</h2>
                    <div className="prj-quote">
                        <h2>"Most good programmers do programming not because they expect to get paid, but because it is fun."</h2>
                        <h3>– Linus Torvalds</h3>
                    </div>
                </div>

                <div class="prj-list">
                    <div className="cont1 hosp-mng">
                        <h2>Hospital Management</h2>
                    </div>
                    <div className="cont1 enlg">
                        <div className="pl-top">
                            <img src="https://cdn-icons-png.flaticon.com/512/10809/10809712.png"></img>
                            <h2>Portfolio Website <h3>#self promotion</h3> </h2>
                        </div>
                        <div className="pl-middle">
                            <p>"A creative project showcasing my ability to blend design and functionality"</p>
                        </div>
                        <div className="pl-down">Visit Project <span class="material-symbols-outlined">captive_portal</span> </div>
                    </div>
                    <div className="cont1 safe-shr">
                        <h2>Safe Share</h2>
                    </div>
                    <div className="cont1 aiom">
                        <h2>AIO Malware</h2>
                    </div>
                </div>

                <div className="prj-main-cnt">
                    <div className="prj-desc">
                        <div className="prj-title-box" style={{backgroundColor : "rgba(0, 204, 255, 0.185)", color: "darkblue"}}>Project Description</div>
                        <div className="prj-text">
                            <p>I built my <b>Personal Portfolio Website</b> to showcase my technical <b>Skills, Projects</b>,
                                and Professional journey in a structured and visually appealing way. The site is 
                                fully responsive, designed with :
                            </p>
                            <p style={{padding:"10px", border:"1px solid #dfdfdf", borderRadius:"5px"}}>
                                <b>Tech Stack & Tools</b>
                                <hr></hr>
                                <ul>
                                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" /></li>
                                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" /></li>
                                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></li>
                                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" /></li>
                                    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" /></li>
                                </ul>
                            </p>
                            <p>
                                It features sections for my <b>Background, Skills, Certifications</b>, and <b>Real-World Projects</b>, each organized 
                                for clarity and impact. 
                             </p>
                             <p>
                                I also integrated animations, interactive layouts, and 
                                a clean navigation system to provide an engaging user experience.
                            </p>
                            <p>
                                More than just a website, this project highlights my ability to combine design, functionality, and 
                                security, while serving as a growing reflection of my professional development.
                            </p>
                        </div>
                    </div>

                    <div className="prj-status">
                        <div className="prj-title-box" style={{backgroundColor : "rgba(255, 255, 0, 0.185)", color: "darkorange"}}>Project Status</div>
                        <h2>42% Completed  <div className="prjs-box"><p>20 Days</p></div></h2>
                    </div>

                    <div className="prj-features">
                        <div className="prj-title-box" style={{backgroundColor : "rgba(0, 255, 34, 0.18)" , color: "darkgreen"}}>Project Features</div>
                        <ul>
                            <li>✔️ Responsive Design</li>
                            <li>🎨 Clean & Modern UI</li>
                            <li>✨ Interactive Animations</li>
                            <li>📂 Projects Showcase</li>
                            <li>💡 Skill Highlights</li>
                            <li>🙋 About Me Section</li>
                            <li>⚡ Performance Optimized</li>
                            <li>🚀 Future Ready</li>
                            <li>📞 Contact & Social Links</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
}

export default Projectpage;