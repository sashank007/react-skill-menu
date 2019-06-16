import { css } from "styled-components";

export const container = css`
  border: 20px solid #e2a61e;
`;

export const center = css`
  border: 8px solid #e4d308e3;
  &:not(:empty):hover {
    cursor: pointer;
  }
  > svg {
    position: relative;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
  }
`;

export const slice = css`
  cursor: pointer;
  color: grey;
  background: radial-gradient(
    transparent
      ${({ centerRadius }) => `${centerRadius}, transparent ${centerRadius}`}
  );
  &[filled="true"] {
    color: black;
  }
  &:hover,
  &[active="true"] {
    color: black;
    background: radial-gradient(
      transparent
        ${({ centerRadius }) => `${centerRadius + 5}, #efefef ${centerRadius}`}
    );
  }
`;
