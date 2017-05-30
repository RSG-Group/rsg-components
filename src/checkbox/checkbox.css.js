const checkboxCss = {
  switch_input_checked_span: {
    backgroundColor: "#5d9cec",
    borderColor: "#5d9cec",
    transition: "all .5s",
  },
  switch_switch_lg_span: {
    width: "50px",
    height: "25px",
  },
  switch_span: {
    position: "relative",
    display: "inline-block",
    width: "40px",
    height: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "100px",
    transition: "all .5s",
    boxShadow: "1px 2px 3px rgba(0,0,0,.1) inset",
    verticalAlign: "middle",
  },
  switch: { cursor: "pointer" },
  switch_span_after: {
    content: "\"\"",
    position: "absolute",
    backgroundColor: "#fff",
    top: "0",
    left: "0",
    height: "18px",
    width: "18px",
    border: "1px solid #ddd",
    borderRadius: "400px",
    boxShadow: "1px 1px 3px rgba(0,0,0,.1)",
    WebkitTransition: "all .2s",
  },
  switch_input: { opacity: "0", position: "absolute", zIndex: "-1" },
  switch_input_checked_span_after: { left: "50%", transition: "all .2s" },
  switch_switch_lg_span_after: { height: "23px", width: "23px" },
};

module.exports = checkboxCss;
