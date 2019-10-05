import React, { Component, Fragment } from "react";

import SaveIcon from "@material-ui/icons/Save";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

import AlertDialog from "../components/dialog";

class ExampleOne extends Component {
  state = {
    values: { first: "", last: "", email: "" },
    loading: false,
    success: false,
    errorOpen: false
  };
  triggerSubmit = this.triggerSubmit.bind(this);
  handleChange = this.handleChange.bind(this);
  handleCancel = this.handleCancel.bind(this);
  handleSave = this.handleSave.bind(this);
  submitRef = React.createRef();

  handleChange(fieldName) {
    return event => {
      const {
        target: { value: newValue }
      } = event;
      const { values } = this.state;

      this.setState({ values: { ...values, [fieldName]: newValue } });
    };
  }

  handleCancel(event) {
    event.preventDefault();
    this.handleClose();
    this.setState({ errorOpen: true }, () =>
      this.setState({ errorOpen: false })
    );
  }

  handleSave(event) {
    event.preventDefault();
    this.setState({ loading: true }, () => {
      setTimeout(() => {
        this.setState({ loading: false, success: true }, () => {
          // Reset the form + close dialog
          setTimeout(() => {
            this.setState({ loading: false, success: false });
            this.handleClose();
          }, 1500);
        });
      }, 2500);
    });
  }

  triggerSubmit(event) {
    event.preventDefault();
    this.submitRef.current.click();
  }

  render() {
    const { values, loading, success, errorOpen } = this.state;

    return (
      <div className="container">
        <h1>Example Two (can't exit)</h1>
        <AlertDialog title="Error" open={errorOpen}>
          cancel
        </AlertDialog>

        <AlertDialog disableBackdropClick label="Create User" title="New User">
          {({ handleClose }) => {
            this.handleClose = handleClose;

            return (
              <Fragment>
                <form onSubmit={this.handleSave}>
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
                    <div className="button-bar right-aligned">
                      {loading ? (
                        <CircularProgress />
                      ) : success ? (
                        <div style={{ color: "green" }}>
                          User created successfully!
                        </div>
                      ) : (
                        <div className="spaced-evenly">
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={this.handleCancel}
                          >
                            cancel
                          </Button>
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
              </Fragment>
            );
          }}
        </AlertDialog>
      </div>
    );
  }
}

export default ExampleOne;
