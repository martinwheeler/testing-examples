import React, { Component, Fragment } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import AlertDialog from "../components/dialog";

class ExampleOne extends Component {
  state = { values: {}, loading: false };
  handleChange = this.handleChange.bind(this);

  handleChange(fieldName) {
    return event => {
      const {
        target: { value: newValue }
      } = event;
      const { values } = this.state;

      this.setState({ values: { ...values, [fieldName]: newValue } });
    };
  }

  render() {
    const { values } = this.state;

    return (
      <div className="container">
        <h1>Example Two (can't exit)</h1>
        <AlertDialog disableBackdropClick label="Create User" title="New User">
          <Fragment>
            <div className="form-container">
              <TextField
                id="standard-name"
                label="First Name"
                value={values.name}
                onChange={this.handleChange("first")}
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Last Name"
                value={values.name}
                onChange={this.handleChange("last")}
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Email"
                type="email"
                autoComplete="email"
                value={values.name}
                onChange={this.handleChange("email")}
                margin="normal"
              />
              <div className="spaced-evenly">
                <AlertDialog label="cancel" title="Error">
                  cancel
                </AlertDialog>
                <Button variant="outlined">save</Button>
              </div>
            </div>
          </Fragment>
        </AlertDialog>
      </div>
    );
  }
}

export default ExampleOne;
