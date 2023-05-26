import React from "react";

function EnrolledFriends() {
  return (
    <div className="enrolled">
      <div>
        <span>Friends who enrolled (3)</span>
        <div className="carousel">
          <div>
            <div className="name">
              <div>Dhiraj Saxsena</div>
              <span style={{ fontWeight: "300" }}>14 Sep, 2022</span>
            </div>
            <div className="courses-title">Courses Enrolled(6)</div>
            <div className="courses">
              <span>UI/UX</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Python</span>
              <span>MERN</span>
              <span>Java</span>
            </div>
            <div className="friends-amount-refer">
              Referral Amount <span>R185</span>
            </div>
          </div>
          <div>
            <div className="name">
              <div>Subhash Mishra</div>
              <span style={{ fontWeight: "300" }}>15 Sep, 2022</span>
            </div>
            <div className="courses-title">Courses Enrolled(23)</div>
            <div className="courses">
              <span>UI/UX</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Python</span>
              <span>MERN</span>
              <span>Java</span>
              <span>C++</span>
            </div>
            <div className="friends-amount-refer">
              Referral Amount <span>R485</span>
            </div>
          </div>
          <div>
            <div className="name">
              <div>Prafull Kumar</div>
              <span style={{ fontWeight: "300" }}>14 Sep, 2022</span>
            </div>
            <div className="courses-title">Courses Enrolled(6)</div>
            <div className="courses">
              <span>UI/UX</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Python</span>
              <span>MERN</span>
              <span>Java</span>
              <span>C++</span>
            </div>
            <div className="friends-amount-refer">
              Referral Amount <span>R485</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <span style={{ fontSize: "16px" }}>
          <a href="/referred">Terms and Condition</a>
        </span>
      </div>
    </div>
  );
}

export default EnrolledFriends;
