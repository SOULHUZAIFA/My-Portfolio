import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Volleyball Tournament Management</h4>
                  <a href="https://vball.burhanisportsclub.com">Web Application</a>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Javascript, TypeScript, React, Threejs</p>
            </div>
            <WorkImage image="/images/vball.png" alt="Volleyball Tournament App" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Portfolio Website</h4>
                  <a href="https://www.huzaifaambakhutwala.com/#">Web Application</a>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, TypeScript, Three.js, GSAP, Vite</p>
            </div>
            <WorkImage image="/images/portfolio.png" alt="Portfolio Website" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>E-Commerce Platform</h4>
                  <a href="#">Web Application</a>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, Node.js, MongoDB, Express</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="E-Commerce Platform" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Task Management System</h4>
                  <a href="#">Web Application</a>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, TypeScript, Firebase, Material-UI</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Task Management System" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
