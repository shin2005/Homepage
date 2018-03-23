import React from "react";
import { css } from "emotion";

export default function Panel({ title, description }) {
  return (
    <section>
      <div
        className={css`
          border: 1px solid gray;
          padding: 1rem;
          > main {
            border: 1px solid gray;
            padding: 1rem;
          }
        `}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <main>
          <section
            className={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <b>Username goes here</b>
            <p>User's comment will go here</p>
          </section>
        </main>
      </div>
    </section>
  );
}
