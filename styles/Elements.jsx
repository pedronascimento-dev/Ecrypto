import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

export const GlobalStyles = createGlobalStyle`
    html, body {
      padding: 0;
      margin: 0;
      overflow-x: hidden !important;
      background-color: #222121 !important;
      color: #eee6e6
    }

    * {
      box-sizing: border-box;
      font-family: 'win99';
    }

    .blur-navbar{
      backdrop-filter: blur(4px) !important;
    }
    .click{
    cursor: pointer;
    }

    .cancel-menu {
          user-select: none;
    }


    h1{
      line-height: 1.1 !important;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #222121;
    }

    ::-webkit-scrollbar-thumb {
      background: #6d6ff7;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #a39e9e;
    }

  `;

export const Div = styled(motion.div)`
  display: ${(props) => props.display || ""};
  margin-top: ${(props) => props.mt || ""};
  padding-top: ${(props) => props.pt || ""};
  padding-bottom: ${(props) => props.pb || ""};
  padding-left: ${(props) => props.pl || ""};
  padding-right: ${(props) => props.pr || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.bg || ""};
  position: ${(props) => props.position || ""};
  border: ${(props) => props.border || ""};
  @media screen and (min-width: 768px) {
    height: ${(props) => props.heightmd || ""};
    width: ${(props) => props.widthmd || ""};
  }
`;

export const Section = styled(motion.section)`
  padding-top: ${(props) => props.pt || ""};
  padding-left: ${(props) => props.pl || ""};
  padding-right: ${(props) => props.pr || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.bg || ""};
  position: ${(props) => props.position || ""};
  @media screen and (min-width: 768px) {
    height: ${(props) => props.heightmd || ""};
    width: ${(props) => props.widthmd || ""};
  }
`;

export const Color = styled(motion.span)`
  padding-top: ${(props) => props.pt || ""};
  padding-left: ${(props) => props.pl || ""};
  padding-right: ${(props) => props.pr || ""};
  color: ${(props) => props.value || "#6d6ff7"};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.bg || ""};
  position: ${(props) => props.position || ""};
`;

export const Btn = styled(motion.button)`
  padding-top: ${(props) => props.pt || ""};
  padding-left: ${(props) => props.pl || ""};
  padding-right: ${(props) => props.pr || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.bg || ""};
  position: ${(props) => props.position || ""};
  border-radius: ${(props) => props.br || ""};
  font-size: ${(props) => props.fs || ""};
  border: ${(props) => props.border || ""};
  border-bottom: ${(props) => props.bb || ""};
  color: ${(props) => props.color || "#6d6ff7"};
  border: 1px solid #6d6ff7;

  background: linear-gradient(#140d12 0 0) padding-box,
    linear-gradient(to right, #9c20aa, #9836a3, #6d6ff7) border-box;
  border: 1px solid transparent;
  display: inline-block;
  color: #6d6ff7 !important;

  :hover {
    color: #fafafa !important;
    background-color: #181616 !important;
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
  :active {
    outline: none;
    box-shadow: none;
  }
`;

export const Input = styled(motion.input)`
  padding-top: ${(props) => props.pt || ""};
  padding-left: ${(props) => props.pl || ""};
  padding-right: ${(props) => props.pr || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.bg || ""};
  position: ${(props) => props.position || ""};
  border-radius: ${(props) => props.br || ""};
  color: #6d6ff7 !important;
  border: 1px solid #6d6ff7;
  background-color: #222121;

  :hover {
    color: #6d6ff7 !important;
    border: 1px solid #6d6ff7;
    background-color: #131313;
  }
  :focus {
    color: #6d6ff7 !important;
    border: 1px solid #6d6ff7;
    background-color: #131313;
    outline: none;
    box-shadow: none;
  }
  :checked {
    background-color: #131313;
    border-color: #6d6ff7;
  }
`;
