import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Scurity Software Intern</h4>
                <h5>HP Inc</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
            •	Built a TPM-integrated device integrity tool using C++ and PowerShell; adopted for compliance use by internal security teams.<br />
            •	Strengthened provisioning workflows by implementing cryptographic signing and verification mechanisms.<br />
            •	Developed firmware monitoring logic to detect unauthorized BIOS changes, reducing undetected tampering cases by 25%.<br />
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Security Software Developer</h4>
                <h5>HP Inc.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            •	Engineered firmware validation features using C#/.NET and TPM cryptography, securing over 500K enterprise devices.<br />
            •	Automated security testing pipelines using NUnit/XUnit in Azure DevOps, increasing pre-release vulnerability detection by 45%.<br />
            •	Developed PowerShell scripts to validate patches and integrated them into CI/CD workflows, reducing manual testing by 30%.<br />
            •	Led static and dynamic code analysis using Nessus, Wireshark, and open-source tools, cutting critical vulnerabilities by 35% per release.<br />
            •	Partnered with cross-functional teams to implement secure boot protections and TPM integrations for endpoint integrity.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance and Upskilling</h4>
                <h5>Self</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Developed an AI-powered chatbot system using large language models and prompt engineering, experimenting with tools like DeepSeek and OpenAI APIs to automate business workflows.<br/>
            Built a full-stack <strong>Volleyball Tournament Management Module</strong> that includes:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- Player stat tracking interface modeled after SoloStats<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- Team creation, scheduling, and public scoreboard display<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- Real-time updates, leaderboard generation, and match history logging<br/>
            Explored trending technologies in AI, including Retrieval-Augmented Generation (RAG), multi-agent systems, and vector databases like ChromaDB for personalized assistants.<br/>
            Continued learning through hands-on projects in modern web stacks (React, Tailwind, Flask) and backend optimization practices.<br/>
            Collaborated with an offshore development team on prototyping business tools for legal and signage industries using AI and automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
