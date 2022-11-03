import React, { useEffect } from "react";

import "./Faqs.css";

const Faqs = () => {
  useEffect(() => {
    let i;
    const panels = document.getElementsByClassName("accordion");

    for (i = 0; i < panels.length; i++) {
      panels[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const nextPanel = this.nextElementSibling;
        console.log(nextPanel);
        if (nextPanel.style.maxHeight) {
          nextPanel.style.maxHeight = null;
        } else {
          nextPanel.style.maxHeight = nextPanel.scrollHeight + "px";
        }
      });
    }
  });

  return (
    <section className="faqs" id="faqs">
      <h1 className="faqs__title green">FAQS</h1>
      <div className="faqs__main">
        <div className="faqs__sub-1">
          <article className="accordion">What is a hackathon?</article>
          <div className="panel">
            <p>
              {" "}
              A hackathon is a design sprint-like event in which computer
              programmers and others involved in software development, including
              graphic designers, interface designers, project managers, and
              others, often including domain experts, collaborate intensively on
              projects.
            </p>
          </div>
          <article className="accordion">Who can register?</article>
          <div className="panel">
            <p> Everyone's welcome. Student or Professional.</p>
          </div>
          <article className="accordion">Is there a registration fee?</article>
          <div className="panel">
            <p> Absolutely not. This event is totally free of cost :)</p>
          </div>
          <article className="accordion">
            What's the last date of registrations?
          </article>
          <div className="panel">
            <p>
              {" "}
              Registrations close on 10th November, 2022 at 23:59. So, giddy up
              and submit your ideas ASAP and don't wait for the last minute!
            </p>
          </div>
          {/* <article className="accordion"> 
            What are Bounties? How to win them?
          </article>
          <div className="panel">
            <p>
              {" "}
              Bounties are special side prizes which you and your team can win
              with/without the main prizes. Just make sure your teams follows
              the requirements of the specific bounty to stand a chance to win
              it. PS Your team can win more than one bounty.
            </p>
          </div>
  */}
        </div>
        <div className="faqs__sub-2">
          <article className="accordion">
            This is my first hackathon. What if I'm clueless?{" "}
          </article>
          <div className="panel">
            <p>
              {" "}
              Then we'll be happy that we were the one to guide you through your
              problems. It's helpful to have some programming or technical
              experience. We'll have talks, mentors and workshops to help you
              with your project.
            </p>
          </div>
          <article className="accordion">
            How many members are required in a team?
          </article>
          <div className="panel">
            <p>
              {" "}
              The maximum team size is 4. The minimum is 2. Because we want you
              to have company and not be alone on this amazing journey :)
            </p>
          </div>

          {/* <article className="accordion"> 
            What if I haven't formed a team yet !
          </article>
          <div className="panel">
            <p>
              {" "}
              Don't worry you can collaborate with other hackers on our Discord
              server to work on an idea in the same track to form a team!
            </p>
          </div>
  */}
          <article className="accordion">How does judging work? </article>
          <div className="panel">
            <p>
              {" "}
              A panel of some experienced professionals will evaluate the
              project based on creativity, design, and usefulness.
            </p>
          </div>
          <article className="accordion">
            I didn't find my question here, what can i do?
          </article>
          <div className="panel">
            <p>
              {" "}
              If you have any other questions or concerns, reach out to us using
              the contact details below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
