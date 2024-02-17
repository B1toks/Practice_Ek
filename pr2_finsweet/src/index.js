import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function WebsitePage() {
  const [isHovered, setIsHovered] = useState(false); // Стан для визначення, чи наведений курсор на блок
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseEnter = () => {
      setIsHovered(true);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
};

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
};

  return (
      <div className={`websitePage ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="price_box">
              <div className="price">$399</div>
              <div className="price-Task">Multi Design</div>
          </div>
          <div className="price-Title">Website Page</div>
          <div className="price-underTitle">When you’re ready to go beyond prototyping in Figma.</div>
          <div class="benefits_box">
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">All limited links</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Own analytics platform</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Chat support</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Optimize hashtags</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Unlimited users</p>
                                    </div>
                                    
            </div>
          <div className={`button_plan ${isButtonHovered ? 'button_hovered' : ''}`} onMouseEnter={handleButtonMouseEnter} onMouseLeave={handleButtonMouseLeave}>
                <div class="div_but_view_ourwork">
                    <a href="#" class="bav">Get started</a>
                </div>
            </div>
      </div>
  );
}

ReactDOM.render(<WebsitePage />, document.getElementById('targetDiv'));

function LandingPage() {
  const [isHovered, setIsHovered] = useState(false); // Стан для визначення, чи наведений курсор на блок
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseEnter = () => {
      setIsHovered(true);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };
  
  return (
    <div className={`landingPage ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div class="price_box">
            <div class="price">$299</div>
            <div class="price-Task">Per-Design</div>
        </div>
        <div class="price-Title">Landing Page </div>
        <div class="price-underTitle">When you’re ready to go beyond prototyping in Figma</div>
        <div class="benefits_box">
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">All limited links</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Own analytics platform</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Chat support</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#ccc" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Optimize hashtags</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#ccc" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_122" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="white"/>
                                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Unlimited users</p>
                                    </div>
                                    
            </div>
          <div className={`button_plan ${isButtonHovered ? 'button_hovered' : ''}`} onMouseEnter={handleButtonMouseEnter} onMouseLeave={handleButtonMouseLeave}>
                <div class="div_but_view_ourwork">
                    <a href="#" class="bav">Get started</a>
                </div>
            </div>
    </div>
  );
}

ReactDOM.render(<LandingPage />, document.getElementById('targetPage'));

function ComplexProjext() {
  const [isHovered, setIsHovered] = useState(false); // Стан для визначення, чи наведений курсор на блок
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonMouseEnter = () => {
  setIsButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
  setIsButtonHovered(false);
  };  

  return (
    <div className={`complexProjext ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div class="price_box">
          <div class="price">$499+</div>
            <div class="price-Task">Per Design</div>
              </div>
              <div class="price-Title">Complex Project</div>
              <div class="price-underTitle">When you’re ready to go beyond prototyping in Figma</div>
              <div class="benefits_box">
                            <div class="benefit_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                    <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <p class="benefit">All limited links</p>
                            </div>
                            <div class="benefit_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                    <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <p class="benefit">Own analytics platform</p>
                            </div>
                            <div class="benefit_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                    <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <p class="benefit">Chat support</p>
                            </div>
                            <div class="benefit_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                    <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <p class="benefit">Optimize hashtags</p>
                            </div>
                            <div class="benefit_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                    <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <p class="benefit">Unlimited users</p>
                            </div>
                            <div class="benefit_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                    <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#FC80AD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <p class="benefit">Assist and Help</p>
                            </div>
              </div>
              <div class="button_plan">
              <div class="div_but_view_ourwork">
                  <a href="contacts.html" class = "bav">Contact Us</a>
                </div>
            </div>
    </div>
  )
}

ReactDOM.render(<ComplexProjext />, document.getElementById('targetComplex'));



function FAQItem({ id, number, question, answer, activeId, setActiveId }) {
  const isOpen = activeId === id;

  const toggleAnswer = () => {
    setActiveId(isOpen ? null : id);
  };

  return (
    <div className="faq_question_item">
      <div className="faq_number_of_question">{number}</div>
      <div className="faq_question">
        <div className="faq_question_title">{question}</div>
        <div id={`faq_answer_${id}`} className="faq_question_underTitle" style={{ display: isOpen ? 'block' : 'none' }}>
          {answer}
        </div>
      </div>
      <div className={`x ${isOpen ? 'rotate' : 'rotateCross'}`} onClick={toggleAnswer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path opacity="0.7" d="M13.449 15.8929L8.30697 10.7508L3.03761 16.0201L0.339287 13.3218L5.60865 8.05247L0.466566 2.91039L2.91033 0.466626L8.05241 5.60871L13.3218 0.339346L16.0201 3.03767L10.7507 8.30703L15.8928 13.4491L13.449 15.8929Z" fill="#282938"/>
        </svg>
      </div>
    </div>
  );
}

function FAQ() {
  const [activeId, setActiveId] = React.useState(null);

  return (
    <div id="faq">
      <FAQItem
        id="1"
        number="01"
        question="How much time does it take ?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <FAQItem
        id="2"
        number="02"
        question="What is your class naming convention ?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <FAQItem
        id="3"
        number="03"
        question="How do we communicate ?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <FAQItem
        id="4"
        number="04"
        question="I have a bigger project. Can you handle it ?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <FAQItem
        id="5"
        number="05"
        question="What is your class naming convention ?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        activeId={activeId}
        setActiveId={setActiveId}
      />
      
    </div>
  );
}

ReactDOM.render(<FAQ />, document.getElementById('faq'));