export default {
  "@global": {
    "switchInput:checked+span": {
      backgroundColor: "#5d9cec",
      borderColor: "#5d9cec",
      transition: "all .5s",
    },
    switchSwitchLgSpan: {
      width: 50,
      height: 25,
    },
    switchSpan: {
      position: "relative",
      display: "inline-block",
      width: 40,
      height: 20,
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: 100,
      transition: "all .5s",
      boxShadow: "1px 2px 3px rgba(0,0,0,.1) inset",
      verticalAlign: "middle",
    },
    "switch *": {
      cursor: "pointer",
    },
    "switchSpan:after": {
      content: "\"\"",
      position: "absolute",
      backgroundColor: "#fff",
      top: "0",
      left: "0",
      height: 18,
      width: 18,
      border: "1px solid #ddd",
      borderRadius: 400,
      boxShadow: "1px 1px 3px rgba(0,0,0,.1)",
      webkitTransition: "all .2s",
    },
    switchInput: {
      opacity: "0",
      position: "absolute",
      zIndex: "-1",
    },
    "switchInput:checked+span:after": {
      left: "50%",
      transition: "all .2s",
    },
    "switchSwitchLgSpan:after": {
      height: 23,
      width: 23,
    },
  },
};
