import React, { Component } from "react";
import { css } from "emotion";
import Panel from "../../../components/Panel";
import URL from "../../../constants/URL";
import request from "axios";

export default class Home extends Component {
  state = {
    feeds: [],
    questionInput: "",
    descriptionInput: ""
  };

  async componentDidMount() {
    try {
      const { data } = await request.get(`${URL}/feeds`);
      this.setState({
        feeds: data
      });
    } catch (error) {
      console.error(error);
    }
  }

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
        <section>
          <input
            placeholder="Type your question"
            value={questionInput}
            onChange={event =>
              this.setState({ questionInput: event.target.value })
            }
          />
          <textarea
            placeholder="Enter content"
            value={descriptionInput}
            onChange={event =>
              this.setState({ descriptionInput: event.target.value })
            }
          />
          <button onClick={this.onSubmitFeed}>submit</button>
        </section>
        {feeds.map(feed => (
          <Panel
            key={feed.id}
            title={feed.title}
            description={feed.description}
          />
        ))}
      </div>
    );
  }

  onSubmitFeed = async () => {
    const { questionInput, descriptionInput } = this.state;
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await request.post(
          `${URL}/feeds`,
          {
            title: questionInput,
            description: descriptionInput
          },
          {
            headers: {
              authorization: token
            }
          }
        );
        this.setState({ feeds: data, questionInput: "", descriptionInput: "" });
      } catch (error) {
        console.error(error);
      }
    }
  };
}
