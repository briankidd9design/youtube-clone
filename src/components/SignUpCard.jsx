import React from "react";
import Wrapper from "../styles/SignUpCard";
import GoogleAuth from "./GoogleAuth";

function SignUpCard() {
  return (
    <Wrapper>
      icon
      <div>
        <h1>title</h1>
        <p>description</p>
        <br />
        <GoogleAuth />
      </div>
    </Wrapper>
  );
}

export default SignUpCard;
