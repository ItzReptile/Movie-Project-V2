import { ArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ShowContent(ShowA) {
  document.getElementById("display-question").style.display = "block";
}

function toggleClass() {
  const p = document.getElementById("display-question");
  p.classList.toggle("SHOW");
}

const FAQ = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="FAQ-wrapper">
            <div className="FAQ-text-wrapper">
              <h1 onClick={() => ShowContent(this)} className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  id="display-now"
                  icon="fa-solid fa-arrow-down"
                />
              </h1>
              <h2 className="FAQ-Answear" value="SHOW" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 onClick={() => ShowContent(this)} className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  id="display-now"
                  icon="fa-solid fa-arrow-down"
                />
              </h1>
              <h2 className="FAQ-Answear" value="SHOW" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 onClick={() => ShowContent(this)} className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  id="display-now"
                  icon="fa-solid fa-arrow-down"
                />
              </h1>
              <h2 className="FAQ-Answear" value="SHOW" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 onClick={() => ShowContent(this)} className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  id="display-now"
                  icon="fa-solid fa-arrow-down"
                />
              </h1>
              <h2 className="FAQ-Answear" value="SHOW" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 onClick={() => ShowContent(this)} className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  id="display-now"
                  icon="fa-solid fa-arrow-down"
                />
              </h1>
              <h2 className="FAQ-Answear" value="SHOW" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 onClick={() => ShowContent(this)} className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  id="display-now"
                  icon="fa-solid fa-arrow-down"
                />
              </h1>
              <h2 className="FAQ-Answear" value="SHOW" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 onClick={() => ShowContent(this)} className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  id="display-now"
                  icon="fa-solid fa-arrow-down"
                />
              </h1>
              <h2 className="FAQ-Answear" value="SHOW" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 onClick={() => ShowContent(this)} className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  id="display-now"
                  icon="fa-solid fa-arrow-down"
                />
              </h1>
              <h2 className="FAQ-Answear" value="SHOW" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 onClick={() => ShowContent(this)} className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  id="display-now"
                  icon="fa-solid fa-arrow-down"
                />
              </h1>
              <h2 className="FAQ-Answear" value="SHOW" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
            <div className="FAQ-text-wrapper">
              <h1 onClick={() => ShowContent(this)} className="FAQ-Question ">
                Q: Does Infinite Movies Include A Functioning Search Bar?{" "}
                <FontAwesomeIcon
                  id="display-now"
                  icon="fa-solid fa-arrow-down"
                />
              </h1>
              <h2 className="FAQ-Answear" value="SHOW" id="display-question">
                A: Yes,It'll Display The First 8 Movies Thats Corresponding
                Whatever You search up!{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
