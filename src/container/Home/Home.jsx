import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AddRecord from "../../components/AddRecord/AddRecord";
import DisplayRecord from "../../components/DisplayRecord/DisplayRecord";

const styles = {
  buttonClass: {
    marginTop: "2%",
    backgroundColor: "#4CAF50",
    "&:hover": {
      backgroundColor: "#8BC34A"
    }
  }
};

//Use State insted of route because state can update only particular div which concept of virtual dom.
class Home extends Component {
  state = {
    addPage: false,
    directoryData: []
  };

  //handle the add and display state.
  _handleHide = () => {
    this.setState(prevState => ({
      addPage: !prevState.addPage
    }));
  };

  //Make only one function which can handle large number of textbox.
  //But name should be same when you declare texbox.
  _handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //Add new record in state.
  //make copy of existing state and change in that.
  //After change then assign into DirectoryData.
  _handleAddNew = () => {
    let newData = [...this.state.directoryData];
    let body = {
      uId: Date.now(),
      uName: this.state.uName,
      uPhone: this.state.uPhone
    };
    newData.push(body);
    this.setState({
      directoryData: newData,
      addPage: false,
      uName: "",
      uPhone: ""
    });
  };

  //Delete filter the record by id from existing state data.
  _handleDelete = uId => {
    let newData = [...this.state.directoryData];
    newData = newData.filter(directory => directory.uId !== uId);
    this.setState({
      directoryData: newData
    });
  };
  //I am using only function component and 1 parent state component which can handle all data.
  render() {
    const { classes } = this.props;
    const { addPage, directoryData } = this.state;
    return (
      <div>
        <Header />
        <div>
          {addPage ? (
            <Button
              variant="contained"
              color="default"
              onClick={this._handleHide}
              style={{ marginTop: "2%" }}
            >
              Back
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonClass}
              onClick={this._handleHide}
            >
              Add
            </Button>
          )}

          {/**Passing data to child component using props. */}
          {addPage ? (
            <AddRecord
              handleChange={this._handleChange}
              uName={this.state.uName}
              uPhone={this.state.uPhone}
              handleAddNew={this._handleAddNew}
            />
          ) : (
            <DisplayRecord
              directoryData={directoryData}
              handleDelete={uId => this._handleDelete(uId)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
