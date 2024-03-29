import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "./LearningOptions/LearningOptions";
import LinkList from "./LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "projectLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "CGI Apps",
            url: "#main-container-Wrapper-About-Portfolio",
            id: 1,
          },
          {
            text: "Web Apps",
            url: "#main-container-Wrapper-About-Portfolio",
            id: 2,
          },
          {
            text: "Android Application",
            url: "#main-container-Wrapper-About-Portfolio",
            id: 3,
          },
          {
            text: "Python Project",
            url: "#main-container-Wrapper-About-Portfolio",
            id: 4,
          },
        ],
      },
    },
  ],
};

export default config;