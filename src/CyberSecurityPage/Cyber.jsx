import "./cyber.css";

function Cyber(){
    return(
        <>
        <section className="cyber-page">
            <div className="cyber-misc"></div>
            <div className="cyber-container">
                <div class="cyber-top">
                    <div className="cyber-title">
                        <div className="ct-left">Cyber Security Specialization</div>
                        <div className="ct-right">Vulnerability Assessment & Pentesting</div>
                    </div>
                    <div className="cyber-list">
                        <ul>
                            <li>
                                <div className="cl-text"><p><h3>@ Phase-1</h3>Active process of finding or extracting detailed information about a target after scanning.</p></div>
                                <div className="cl-title"><h2>Enumeration</h2></div>
                            </li>
                            <li>
                                <div className="cl-text"><p><h3>@ Phase-2</h3>Using discovered vulnerabilities to gain unauthorized access or execute attacks.</p></div>
                                <div className="cl-title"><h2>Exploitation</h2></div>
                            </li>
                            <li>
                                <div className="cl-text"><p><h3>@ Phase-3</h3>Is performed after initial access to gain higher privileges, moving from a basic user to root.</p></div>
                                <div className="cl-title"><h2>Privilage&nbsp;Esc</h2></div>
                            </li>
                            <li>
                                <div className="cl-text"><p><h3>@ Phase-4</h3>Ensuring persistence on a compromised system through backdoors or hidden methods.</p></div>
                                <div className="cl-title"><h2>Persistance</h2></div>
                            </li>
                            <li>
                                <div className="cl-text"><p><h3>@ Phase-5</h3>Extracting data, pivoting, and demonstrating the real impact of exploit & compromise.</p></div>
                                <div className="cl-title"><h2>Post&nbsp;Exploit</h2></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="cl-number">
                    <ul>
                        <li>1</li> <li>2</li> <li>3</li> <li>4</li> <li>5</li>
                    </ul>
                </div>

                <div class="cyber-card">
                    <div className="cyc-img">
                        <h2>Enumeration <h3>Extracting Information</h3></h2>
                    </div>
                    <div className="cyc-title">
                        <h3>Enumeration</h3>
                        <h4>Collecting Data</h4>
                    </div>
                    <div className="cyc-text">
                        <p>It is the active process of extracting detailed information 
                            from a target after scanning. It reveals valuable Info that 
                            expand the attack surface.</p>
                    </div>
                </div>

                <div class="cy-tools">
                    <h3>Tools</h3>
                    <hr></hr>
                    <p>Enumeration is the process of gathering detailed information about a 
                        target after initial scanning. It reveals usernames, running services, 
                        directories, shares, and technologies that define the attack surface. 
                        Attackers actively probe the system to identify exploitable entry points 
                        and convert raw scan data into actionable intelligence. Common techniques 
                        include banner grabbing, DNS lookups, SNMP queries, etc. </p>
                    <div className="cy-icon-container">
                        <div className="cy-icons">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmC0SpnKtvVB4u9HZNJpP4XEb8yr3MKgOjA&s"></img>
                            <div className="cyi-text">
                                <h2>Nmap</h2>
                                <h3>Port Scanner</h3>
                            </div>
                        </div>
                        <div className="cy-icons" >
                            <img src="https://freesoft.net/storage/images/760/7599/759831/759831_normal.png"></img>
                            <div className="cyi-text">
                                <h2>Nessus</h2>
                                <h3>Tenable Product</h3>
                            </div>
                        </div>
                        <div className="cy-icons">
                            <img src="./src/assets/icons/gdorking.png"></img>
                            <div className="cyi-text">
                                <h2>Browser</h2>
                                <h3>Google Dorking</h3>
                            </div>
                        </div>
                        <div className="cy-icons">
                            <img src="./src/assets/icons/go.svg"></img>
                            <div className="cyi-text">
                                <h2>Go Buster</h2>
                                <h3>DNS BruteForce</h3>
                            </div>
                        </div>
                        <div className="cy-icons">
                            <img src="./src/assets/icons/wireshark.png"></img>
                            <div className="cyi-text">
                                <h2>WireShark</h2>
                                <h3>Network Scan</h3>
                            </div>
                        </div>
                        <div className="cy-icons">
                            <img src="./src/assets/icons/nikto.svg"></img>
                            <div className="cyi-text">
                                <h2>Nikto</h2>
                                <h3>Vuln. Scanner</h3>
                            </div>
                        </div>
                        <div className="cy-icons">
                            <img src="./src/assets/icons/shodan.jpeg"></img>
                            <div className="cyi-text">
                                <h2>Showdan</h2>
                                <h3>Open Source</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Cyber;