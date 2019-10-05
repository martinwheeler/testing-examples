import React, { Component, Fragment } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const LAST_STEP = 3;

class ExampleOne extends Component {
  state = { values: {}, loading: false, step: 0, error: null };
  handleChange = this.handleChange.bind(this);
  goForward = this.goForward.bind(this);
  goBack = this.goBack.bind(this);

  handleChange(fieldName) {
    return event => {
      const {
        target: { value: newValue }
      } = event;
      const { values } = this.state;

      this.setState({ values: { ...values, [fieldName]: newValue } });
    };
  }

  goForward() {
    if (this.state.step !== LAST_STEP) {
      this.setState({ step: this.state.step + 1 });
    }
  }

  goBack() {
    const { step } = this.state;

    try {
      const previousDetails = step.previous;
      this.setState({ step: step - 1, currentValues: previousDetails.data });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { values, step, error } = this.state;

    return (
      <div className="container">
        <h1>Example One (multi form blows up)</h1>
        {error ? (
          <Paper style={{ padding: "10px", color: "red" }}>
            <Typography variant="h5" component="h3">
              Caught Error
            </Typography>
            <Typography component="p">{error.toString()}</Typography>
          </Paper>
        ) : (
          <Fragment>
            <h2>
              Step {step + 1} out of {LAST_STEP}
            </h2>
            <div className="form-container">
              {step === 0 ? (
                <Fragment>
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
                </Fragment>
              ) : null}
              {step === 1 ? (
                <Fragment>
                  <TextField
                    id="standard-name"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    value={values.name}
                    onChange={this.handleChange("email")}
                    margin="normal"
                  />
                  <TextField
                    id="date"
                    label="Date of Birth"
                    type="date"
                    defaultValue="2000-01-01"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Fragment>
              ) : null}
              {step === 2 ? (
                <Fragment>
                  <TextField
                    id="standard-name"
                    label="Street"
                    value={values.name}
                    onChange={this.handleChange("email")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-name"
                    label="Suburb"
                    value={values.name}
                    onChange={this.handleChange("email")}
                    margin="normal"
                  />
                  <TextField
                    id="standard-name"
                    label="Post Code"
                    value={values.name}
                    onChange={this.handleChange("email")}
                    margin="normal"
                  />
                </Fragment>
              ) : null}
              <div className="button-bar right-aligned">
                <div className="spaced-evenly">
                  {step > 0 ? (
                    <Button variant="outlined" onClick={this.goBack}>
                      previous
                    </Button>
                  ) : null}
                  {step < LAST_STEP - 1 ? (
                    <Button variant="outlined" onClick={this.goForward}>
                      continue
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default ExampleOne;
