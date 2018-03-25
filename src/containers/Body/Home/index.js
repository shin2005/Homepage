import React, { Component } from "react";
import { css } from "emotion";

export default class Home extends Component {
  state = {
    feeds: [],
    questionInput: "",
    descriptionInput: ""
  };

  render() {
    const { feeds, questionInput, descriptionInput } = this.state;
    return (
      <div
        className={css`
          width: 70%;
          display: flex;
          flex-direction: column;
          > section {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            > textarea {
              margin-top: 1rem;
            }
            > button {
              margin-top: 1rem;
            }
          }
        `}
      >
        <div
          className={css`
            margin-top: 2rem;
            > header {
              font-size: 2rem;
              font-weight: bold;
              display: flex;
              justify-content: center;
            }
          `}
        >
          <header>New Gadgets</header>
          <div className={css`
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            .ipad {
              margin-top: 1rem;
              width: 80%;
            }
          `}>
            <img className="ipad" src="/ipad_pro.jpg" rel="" />
          </div>
        </div>
      </div>
    );
  }
}
