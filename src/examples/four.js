import React, { Component, Fragment } from "react";

import SaveIcon from "@material-ui/icons/Save";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

class ExampleOne extends Component {
  state = {
    values: { first: "", last: "", email: "" },
    loading: false,
    success: false
  };
  triggerSubmit = this.triggerSubmit.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSave = this.handleSave.bind(this);
  submitRef = React.createRef();

  componentDidUpdate() {
    console.warn("VALUES: ", this.state.values);
  }

  handleChange(fieldName) {
    return event => {
      const {
        target: { value: newValue }
      } = event;
      const { values } = this.state;

      this.setState({ values: { ...values, [fieldName]: newValue } });
    };
  }

  handleSave(event) {
    event.preventDefault();
    this.setState({ loading: true }, () => {
      new Promise((resolve, reject) => {
        setTimeout(() => reject({ error: "Network request failure." }), 1500);
      }).catch(error => {
        // TODO: Show the user an error notification
      });
    });
  }

  triggerSubmit(event) {
    event.preventDefault();
    this.submitRef.current.click();
  }

  render() {
    const { values, loading, success } = this.state;

    return (
      <div className="container">
        <h1>Example Four (never loads)</h1>
        <form onSubmit={this.handleSave}>
          <div className="form-container">
            <TextField
              id="standard-name"
              label="First Name"
              value={values.first}
              onChange={this.handleChange("first")}
              margin="normal"
              required
            />
            <TextField
              id="standard-name"
              label="Last Name"
              value={values.last}
              onChange={this.handleChange("last")}
              margin="normal"
              required
            />
            <TextField
              id="standard-name"
              label="Email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={this.handleChange("email")}
              margin="normal"
              required
            />

            <div className="button-bar right-aligned">
              {loading ? (
                <CircularProgress />
              ) : success ? (
                <div style={{ color: "green" }}>User created successfully!</div>
              ) : (
                <div className="spaced-evenly">
                  <input
                    type="submit"
                    ref={this.submitRef}
                    style={{ display: "none" }}
                  />
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={this.triggerSubmit}
                  >
                    <SaveIcon
                      style={{ fontSize: "16px", marginRight: "5px" }}
                    />
                    save
                  </Button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ExampleOne;
