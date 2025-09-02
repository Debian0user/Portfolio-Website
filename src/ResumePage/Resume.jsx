import "./resume.css";

function Resume(){
    return(
        <>
        <section className="resume-page">
            <div className="rp-left">
                <h2>Resume Page</h2>
                <hr></hr>
                <p>This section serves as a snapshot of my professional journey. While the rest of this 
                    website goes into detail about who I am and what I’ve worked on, this page offers a 
                    simplified and condensed version of it all.
                </p>
                <br />
                <p>This page, however, is a simplified and condensed version of all that — presented in 
                    a PDF resume. Think of it as a quick summary of everything this 
                    website covers.
                </p>
                <br />
                <p>
                You’ll find here a downloadable PDF resume that captures the most important highlights 
                of my profile in a structured, easy-to-read format.
                </p>
                <div className="resume-download">Download <span class="material-symbols-outlined">download</span></div>
                <p>Download My Resume</p>
            </div>

            <div className="rp-right">
                <div className="resume-view"></div>
            </div>
        </section>
        </>
    );
}

export default Resume;