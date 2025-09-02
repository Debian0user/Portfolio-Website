import "./skillpage.css"
import "./progskill.css"
import "./skillpage-right.css"
import Skillcard from "./Skillcard";
import React, { useState } from "react";

import hackergif from '../assets/hacking.gif'
import frontendgif from '../assets/frontend.gif'
import programgif from '../assets/program.gif'

const skillData = [
  {
    img: hackergif,
    high: 'Cyber Security',
    low: 'Hacking',
    logo: 'shield',
    desc: 'Identifying vulnerabilities and exploiting weaknesses through structured and simulated real-world attack scenarios.'
  },
  {
    img: frontendgif,
    high: 'FrontEnd',
    low: 'UI/UX',
    logo: 'draw',
    desc: 'Designing responsive, accessible interfaces with modern HTML, CSS, and React frameworks to deliver engaging user experiences.'
  },
  {
    img: programgif,
    high: 'Programming',
    low: 'Language',
    logo : 'developer_mode_tv',
    desc: 'Building efficient, maintainable code using languages like Python and Java to solve complex problems and automate real-world tasks.'
  }
];

// RIGHT SIDE CONTENT
const contentData = {
  cybersecurity: {
    title: "Cyber Security",
    desc: "I have a strong foundation in Cybersecurity, built through certifications, structured study, and hands-on practice. My expertise includes Networking Fundamentals, the OWASP Top 10, and practical experience with penetration testing and ethical hacking.",
    desc2 : "I have worked with tools like Burp Suite, Wireshark, and Kali Linux for analyzing vulnerabilities and simulating real-world attack scenarios. I also have experience in Bug Bounty Hunting, Capture the Flag (CTF) challenges, and system hardening, which help me apply both theoretical and practical knowledge.",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original-wordmark.svg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDsIMwEubnS43MuXjzPzgFVJ1rGtiDFJjwg&s",
      "https://www.kali.org/tools/metasploit-framework/images/metasploit-framework-logo.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmC0SpnKtvVB4u9HZNJpP4XEb8yr3MKgOjA&s",
      "https://images.icon-icons.com/1508/PNG/512/wireshark_104082.png"
    ],
    progress: { experience: "68%", knowledge: "80%" }
  },
  programming: {
    title: "Programming",
    desc: "I have experience in different programming areas. I use Python for scripting, automation, and solving problems. With C, I understand the basics of low-level programming. I know Java, which helps me work with object-oriented programming and data structures.",
    desc2 : "I also enjoy working with Arduino for hardware and IoT projects. I am comfortable using the Command Line (CMD/Terminal) for system tasks and scripting. I have also worked with RTC (Real-Time Clock) in hardware projects. Additionally, I know MySQL for managing databases and handling data efficiently.",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
    ],
    progress: { experience: "62%", knowledge: "73%" }
  },
  frontend: {
    title: "FrontEnd",
    desc: "I have experience in frontend development with a solid understanding of HTML, CSS, and JavaScript for building responsive and user-friendly interfaces. I am proficient in React for creating dynamic single-page applications and I am currently learning React Native to extend my skills into mobile app development.",
    desc2 : "Alongside coding, I use Figma for designing and prototyping, which helps me bring modern UI/UX concepts into real projects. My focus is on building clean, efficient, and visually appealing designs that balance functionality with a smooth user experience.",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    ],
    progress: { experience: "80%", knowledge: "70%" }
  }
};

const Skillpage = () => {
  const [activeSkill, setActiveSkill] = useState("cybersecurity"); // default

  return (
    <>
      <section className="skill-page">
        <div className="sp-left">

          <div className="skill-heading">
            <h1>My Skillsets</h1>
            <h2>Technologies and Tools</h2>
          </div>

          <div className="sp-intro">
            {/* <span className="material-symbols-outlined">memory</span> */}
            <h2>Intro</h2>
            <hr />
            <p>
              Over the years, I’ve developed skills that allow me to build functional, 
              secure, and visually engaging digital experiences.
            </p>
            <div className="spi-misc"></div>
          </div>

          <div className="sp-info">
            <h1>Skill Summary</h1>
            <hr />
            <div className="sp-semi">
              <ul className="chart-skills">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <hr />
            <div className="pi-langs">
              <ul>
                <li>
                  <span className="material-symbols-outlined" style={{ color: "#9300ff"}}>shield_locked</span>
                  <h3>Security</h3>
                  <h1>7</h1>
                </li>
                <li>
                  <span className="material-symbols-outlined" style={{ color: "#4e9dfc"}}>data_object</span>
                  <h3>Program</h3>
                  <h1>5</h1>
                </li>
                <li>
                  <span className="material-symbols-outlined" style={{ color: "#6efbff"}}>developer_mode_tv</span>
                  <h3>UI / UX</h3>
                  <h1>4</h1>
                </li>
              </ul>
            </div>
            <div className="sp-misc"><p>Number of tools and Langs I know</p></div>
            <div className="sp-border-box"></div>
          </div>

          <div className="skill-card-container">
            <div className="box box1 " onClick={() => setActiveSkill("cybersecurity")}>
              <Skillcard 
                img={skillData[0].img}
                high={skillData[0].high}
                low={skillData[0].low}
                logo={skillData[0].logo}
                desc={skillData[0].desc}
              />
            </div>
            <div className="box box2 " onClick={() => setActiveSkill("frontend")}>
              <Skillcard 
                img={skillData[1].img}
                high={skillData[1].high}
                low={skillData[1].low}
                logo={skillData[1].logo}
                desc={skillData[1].desc}
              />
            </div>
            <div className="box box3" onClick={() => setActiveSkill("programming")}>
              <Skillcard 
                img={skillData[2].img}
                high={skillData[2].high}
                low={skillData[2].low}
                logo={skillData[2].logo}
                desc={skillData[2].desc}
              />
            </div>
          </div>
        </div>

        <div className="sp-right">
          <div className="sp-quote">
            <p>“Give me six hours to chop down a tree and I will spend the first four sharpening the axe.”</p>
            <hr />
            <h3>- Abraham Lincoln</h3>
          </div>

          <div className="sp-about">
            <h3>{contentData[activeSkill].title}</h3>
            <hr />
            <p>{contentData[activeSkill].desc}</p>

            <p>{contentData[activeSkill].desc2}</p>
          </div>

          <div className="sp-icon-list">
            {contentData[activeSkill].icons.map((icon, i) => (
              <div className="sp-icon" key={i}><img src={icon} /></div>
            ))}
          </div>

          <div className="sp-progress-info">
            <span className="material-symbols-outlined">shield_locked</span>
            <h2>{contentData[activeSkill].title}</h2>
            <hr />
            <ul>
              <li>
                <h3>Experience</h3>
                <div className="sp-bar">
                  <div className="sp-bar-inner" 
                    style={{
                      background : "linear-gradient(90deg,rgba(147, 0, 255, 1) 0%, rgba(78, 157, 252, 1) 50%, rgb(11, 204, 230) 100%)", 
                      width : contentData[activeSkill].progress.experience, 
                      height: "100%", 
                      borderRadius: "7px"
                    }}></div>
                </div>
              </li>
              <li>
                <h3>Knowledge</h3>
                <div className="sp-bar">
                  <div className="sp-bar-inner" 
                    style={{
                      background : "linear-gradient(90deg,rgba(147, 0, 255, 1) 0%, rgba(78, 157, 252, 1) 50%, rgb(11, 204, 230) 100%)", 
                      width : contentData[activeSkill].progress.knowledge, 
                      height: "100%", 
                      borderRadius: "7px"
                    }}></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="divx"></div>
        </div>
      </section>
    </>
  );
}

export default Skillpage;
