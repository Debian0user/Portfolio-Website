import "./lastpage.css";

function Lastpage(){
    return(
        <> 
        <section className="contact-page">
            <div className="cp-map">
                <div className="socials-dropdown"><span class="material-symbols-outlined">captive_portal</span>Socials</div>
                <div className="cp-form">
                    <h2>Form Application</h2>
                    <form>
                        <label for="fname">Name</label>
                        <input type="text" id="fname" name="fname" ></input>

                        <label for="fname">Contact</label>
                        <input type="text" id="fname" name="fname"></input>

                        <label for="fname">Mail ID</label>
                        <input type="text" id="fname" name="fname"></input>

                        <label for="fname" >Message</label>
                        <textarea id="message" name="message" rows="4" cols="40" placeholder="Enter your message here..."></textarea>
                    </form>
                    <button className="cp-submit">Submit <span class="material-symbols-outlined">keyboard_return</span></button>
                </div>
            </div>
            <ul>
                <li>
                <span><span class="material-symbols-outlined">phone</span><h2>Contact</h2> </span>
                    <h3>+91 915-(0160)-641</h3>
                </li>
                <li>
                <span><span class="material-symbols-outlined">MAIL</span><h2>Mail ID</h2> </span>
                    <h3>Linuxnerd05@gmail.com</h3>
                </li>
                <li>
                    <span><span class="material-symbols-outlined">explore_nearby</span><h2>Location</h2> </span>
                    <h3>Chennai, India</h3>
                </li>
            </ul>
            <div className="copy-right">
                <h3>Copyright <br /> <h4>2025</h4></h3> <span class="material-symbols-outlined">copyright</span>
            </div>
        </section>
        </>
    );
}

export default Lastpage;