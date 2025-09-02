import "./firstpage.css"

function FirstPage(){
    return(
        <>
        <section className="first-page">
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="./src/assets/wave.mp4" type="video/mp4" />
            </video>
            <header>
                <ul>
                    <li className="active">Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Socials</li>
                </ul>
                <button className="fg-cont">Hire Me <span class="material-symbols-outlined">person_check</span></button>
            </header>

            <div className="fp-content">
                <h4>I am Good at What I Create </h4>
                <h1>COMMUNICATION THROUGH</h1>
                <h2>QUALITY VISUALS</h2>
                <h3>"Where Strategy meets Design - Communication through Visuals"</h3>
            </div>
        </section>
        </>
    )
}

export default FirstPage;