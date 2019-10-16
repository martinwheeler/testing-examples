import React, { Component, Fragment } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
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
        <h1>Dog Registration Form</h1>
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
                    id="owner-name"
                    label="Owner Name"
                    value={values.name}
                    onChange={this.handleChange("owner-name")}
                    margin="normal"
                  />
                  <TextField
                    id="dog-name"
                    label="Dog Name"
                    value={values.name}
                    onChange={this.handleChange("dog-name")}
                    margin="normal"
                  />
                  <TextField
                    id="date"
                    label="Dog Date of Birth"
                    type="date"
                    defaultValue="2010-10-10"
                    InputLabelProps={{
                      shrink: true
                    }}
                    style={{ marginTop: "40px" }}
                  />
                </Fragment>
              ) : null}
              {step === 1 ? (
                <Fragment>
                  <TextField
                    id="breed"
                    label="Dog Breed"
                    value={values.breed}
                    onChange={this.handleChange("breed")}
                    margin="normal"
                  />
                  <TextField
                    id="dog-colour"
                    label="Dog Colour"
                    value={values.colour}
                    onChange={this.handleChange("colour")}
                    margin="normal"
                  />
                  <FormControl style={{ paddingTop: "40px" }}>
                    <FormLabel component="legend" style={{ textAlign: "left" }}>
                      Dog Gender
                    </FormLabel>
                    <RadioGroup
                      name="gender"
                      onChange={this.handleChange("gender")}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                </Fragment>
              ) : null}
              {step === 2 ? (
                <Fragment>
                  <TextField
                    id="street-address"
                    label="Street Address"
                    value={values.name}
                    onChange={this.handleChange("street-address")}
                    margin="normal"
                  />
                  <TextField
                    id="suburb"
                    label="Suburb"
                    value={values.suburb}
                    onChange={this.handleChange("suburb")}
                    margin="normal"
                  />
                  <TextField
                    id="postcode"
                    label="Postcode"
                    value={values.postcode}
                    onChange={this.handleChange("postcode")}
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
