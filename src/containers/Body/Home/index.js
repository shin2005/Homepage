import React, { Component } from "react";
import { css } from "emotion";
import request from "axios";
import URL from "../../../constants/URL";

export default class Home extends Component {
  state = {
    feeds: [],
    questionInput: "",
    descriptionInput: "",
    inputText: "",
    posts: []
  };

  async componentDidMount() {
    const { data } = await request.get(`${URL}/posts`);
    this.setState({ posts: data });
  }

  render() {
    const {
      feeds,
      questionInput,
      descriptionInput,
      inputText,
      posts
    } = this.state;
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
          <header>Rumors for New Stuff</header>
          <div
            className={css`
              width: 100%;
              display: flex;
              align-items: center;
              flex-direction: column;
              .ipad {
                margin-top: 1rem;
                width: 80%;
              }
            `}
          >
            <img className="ipad" src="/ipad_pro.jpg" rel="" />
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 50%;
              `}
            >
              <img className="iphonered" src="/iPhone8red.png" rel="" />
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 50%;
                `}
              >
                <img className="homepod" src="/Homepod.png" rel="" />
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 50%;
                  `}
                >
                  <input
                    className={css`
                      margin-top: 3rem;
                      font-size: 2rem;
                      line-height: 1.5;
                      padding: 0.5rem;
                    `}
                    value={inputText}
                    placeholder=""
                    onChange={event =>
                      this.setState({ inputText: event.target.value })
                    }
                  />
                  <button
                    className={css`
                      margin-top: 1rem;
                    `}
                    onClick={this.onTextSubmit}
                  >
                    Press to submit
                  </button>
                  {posts.map(post => <div key={post.id}>{post.content}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onTextSubmit = async () => {
    const { inputText } = this.state;
    const { data } = await request.post(`${URL}/posts`, { post: inputText });
    this.setState(state => ({
      inputText: "",
      posts: state.posts.concat([data])
    }));
  };
}
