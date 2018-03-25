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
        this is home
      </div>
    );
  }
}
