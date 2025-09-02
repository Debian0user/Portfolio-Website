import './landignpage.css'

function Landingpage(){
    return(
        <>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

        <section className='landing-page'>
            <div className='lp-left'>
                <h3>"Where imagination takes shape in lines of code."</h3>
                <h1>Hello There ! <br></br>
                    Welcome to my <br></br>
                    <span>Creative Space.</span>
                </h1>
                <h2>Hey! I’m Aditya, and this is my little corner of the internet. Here, you’ll find my favorite projects, experiments, and a glimpse into what I’m passionate about. Take a look around — you might just find something cool !</h2>
                <div className='lp-btn'>
                    <h3>Built with React &nbsp;</h3><h3><i class="devicon-react-original"></i></h3><h3>&nbsp;and JavaScript &nbsp;</h3><h3>
                        <i class="devicon-javascript-plain"></i>
                    </h3>
                </div>

            </div>
            <div className='lp-right'>
            </div>
        </section>
        </>
    );
}

export default Landingpage;