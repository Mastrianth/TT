import React from "react";
import "./Intro.scss";

export const Intro = () => {
  const windowSize = document.documentElement.clientWidth;
  const islittleText = windowSize < 550;

  return (
    <header className="intro">
      <div className="container">
        <div className="intro-bg-image">
          <div className="intro-content">
            <div className="intro-text">
              <h1>
                Test assignment
                <br /> for Frontend <br /> Developer position
              </h1>
              <p className="text">
                We kindly remind you that your test assignment should be
                submitted as a link to github/bitbucket repository. Please be
                patient, we consider and respond to every application that meets
                minimum requirements. We look forward to your submission. Good
                luck! The photo has to scale in the banner area on the different
                screens
              </p>

              <p className="text-mobile">
                We kindly remind you that your test assignment should be
                submitted as a link to github/bitbucket repository.
              </p>
              <a className="btn" href="/tt/#register">
                <span className="btn-text">Sign up now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
