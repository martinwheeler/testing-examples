import React, { Component } from "react";

import SaveIcon from "@material-ui/icons/Save";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

import { simpleFetch } from "../utils";

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
      simpleFetch
        .post("http://localhost:3001/create")
        .catch(error => {
          // TODO: Show the user an error notification
        })
        .finally(() => {
          this.setState({
            loading: false,
            success: true,
            values: { first: "", last: "", email: "" }
          });
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
        <h1>Add New Dog</h1>
        <form onSubmit={this.handleSave}>
          <div className="form-container">
              <TextField
                id="dog-name"
                label="Dog Name"
                value={values.name}
                onChange={this.handleChange("dog-name")}
                margin="normal"
                required
              />
              <TextField
                id="breed"
                label="Dog Breed"
                value={values.breed}
                onChange={this.handleChange("breed")}
                margin="normal"
                required
              />
              <TextField
                id="date"
                label="Dog Date of Birth"
                type="date"
                defaultValue="2010-10-10"
                InputLabelProps={{
                  shrink: true
                }}
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
