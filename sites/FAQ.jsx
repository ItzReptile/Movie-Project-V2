import { ArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function ShowContent() {
  document.getElementById("display-question").style.display = "block";
}

function StopShowing() {
  document.getElementById("display-question").style.display = "none";
}

function ShowContent1() {
  document.getElementById("display-question1").style.display = "block";
}

function StopShowing1() {
  document.getElementById("display-question1").style.display = "none";
}
function ShowContent2() {
  document.getElementById("display-question2").style.display = "block";
}

function StopShowing2() {
  document.getElementById("display-question2").style.display = "none";
}
function ShowContent3() {
  document.getElementById("display-question3").style.display = "block";
}

function StopShowing3() {
  document.getElementById("display-question3").style.display = "none";
}
function ShowContent4() {
  document.getElementById("display-question4").style.display = "block";
}

function StopShowing4() {
  document.getElementById("display-question4").style.display = "none";
}

const FAQ = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="FAQ-wrapper">
            <div className="FAQ-text-wrapper">
              <h1 className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  onClick={() => ShowContent(this)}
                  icon="fa-solid fa-arrow-down"
                />
                <FontAwesomeIcon
                  onClick={() => StopShowing(this)}
                  icon="fa-solid fa-arrow-up"
                />
              </h1>
              <h2 className="FAQ-Answear" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 className="FAQ-Question ">
                Q: How Many Pages Does Infinite Movies Have?{" "}
                <FontAwesomeIcon
                  onClick={() => ShowContent1(this)}
                  icon="fa-solid fa-arrow-down"
                />
                <FontAwesomeIcon
                  onClick={() => StopShowing1(this)}
                  icon="fa-solid fa-arrow-up"
                />
              </h1>
              <h2 className="FAQ-Answear" id="display-question1">
                A: We Have A Total Of 8 Pages!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 className="FAQ-Question ">
                Q: How Long Did It Take To Create This Masterpeice?{" "}
                <FontAwesomeIcon
                  onClick={() => ShowContent2(this)}
                  icon="fa-solid fa-arrow-down"
                />
                <FontAwesomeIcon
                  onClick={() => StopShowing2(this)}
                  icon="fa-solid fa-arrow-up"
                />
              </h1>
              <h2 className="FAQ-Answear" id="display-question2">
                A: 1-2 Weeks,Only Because I Would Take Some Time Off To Relax{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 className="FAQ-Question ">
                Q: Is There Room For Improvement Into This Website?{" "}
                <FontAwesomeIcon
                  onClick={() => ShowContent3(this)}
                  icon="fa-solid fa-arrow-down"
                />
                <FontAwesomeIcon
                  onClick={() => StopShowing3(this)}
                  icon="fa-solid fa-arrow-up"
                />
              </h1>
              <h2 className="FAQ-Answear" id="display-question3">
                A: Yes,There's Actually Some Flaws I Could'nt Solve <br />
                Such As Transistions,Image Slider,FAQ Page And Alot More{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 className="FAQ-Question ">
                Q: Reptile Why Are You So Handsome And Very Well Dedicated?{" "}
                <FontAwesomeIcon
                  onClick={() => ShowContent4(this)}
                  icon="fa-solid fa-arrow-down"
                />
                <FontAwesomeIcon
                  onClick={() => StopShowing4(this)}
                  icon="fa-solid fa-arrow-up"
                />
              </h1>
              <h2 className="FAQ-Answear" id="display-question4">
                A: Well,Reptile Is Actually A top dawg,powerhouse,ruler,
                dominator, placer, overdog, subjugator, champ, champion,
                conqueror,But Most Importantly Here To Succeed. IF ANYONE IS
                READING THIS CHECK MY{" "}
                <Link to="/ReptileLetter">
                  <span className="motivation-letter-link">
                    MOTIVATION LETTER
                  </span>
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
