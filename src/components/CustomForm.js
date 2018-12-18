
import React from 'react'

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value
      });
  
    return (
      <div>
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <button onClick={submit}>
          Submit
        </button>
        {status === "sending" && <div style={{ color: "blue", paddingTop: "12px" }}>Verifying...</div>}
        {status === "error" && (
          <div
            style={{ color: "red", paddingTop: "12px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green", paddingTop: "12px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    );
  };

  export default CustomForm;