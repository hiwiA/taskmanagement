import React, { Component } from "react";
import axios from "axios";

export default class TMSCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangeTMSNumber = this.onChangeTMSNumber.bind(this);
    this.onChangeTMSName = this.onChangeTMSName.bind(this);
    this.onChangeTMSDescription = this.onChangeTMSDescription.bind(this);
    this.onChangeTMSAssigned = this.onChangeTMSAssigned.bind(this);
    this.onChangeTMSStartDate = this.onChangeTMSStartDate.bind(this);
    this.onChangeTMSEndDate = this.onChangeTMSEndDate.bind(this);
    this.onChangeTMSStatus = this.onChangeTMSStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tms_number: "",
      tms_name: "",
      tms_description: "",
      tms_assigned: "",
      tms_startdate: "",
      tms_enddate: "",
      tms_status: "",
      tms_completed: false,
    };
  }

  onChangeTMSNumber(e) {
    this.setState({
      tms_number: e.target.value,
    });
  }
  onChangeTMSName(e) {
    this.setState({
      tms_name: e.target.value,
    });
  }
  onChangeTMSDescription(e) {
    this.setState({
      tms_description: e.target.value,
    });
  }

  onChangeTMSAssigned(e) {
    this.setState({
      tms_assigned: e.target.value,
    });
  }

  onChangeTMSStartDate(e) {
    this.setState({
      tms_startdate: e.target.value,
    });
  }

  onChangeTMSEndDate(e) {
    this.setState({
      tms_enddate: e.target.value,
    });
  }

  onChangeTMSStatus(e) {
    this.setState({
      tms_status: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`TMS Number: ${this.state.tms_number}`);
    console.log(`TMS Name: ${this.state.tms_name}`);
    console.log(`TMS Description: ${this.state.tms_description}`);
    console.log(`TMS Assigned: ${this.state.tms_assigned}`);
    console.log(`TMS Status: ${this.state.tms_status}`);
    console.log(`TMS Start Date: ${this.state.tms_startdate}`);
    console.log(`TMS End Date: ${this.state.tms_enddate}`);
    console.log(`Todo Completed: ${this.state.tms_completed}`);

    const newTask = {
      tms_number: this.state.tms_number,
      tms_name: this.state.tms_name,
      tms_description: this.state.tms_description,
      tms_assigned: this.state.tms_assigned,
      tms_startdate: this.state.tms_startdate,
      tms_enddate: this.state.tms_enddate,
      tms_status: this.state.tms_status,
      tms_completed: this.state.tms_completed,
    };

    axios
      .post("http://localhost:4000/tasks/add", newTask)
      .then((res) => console.log(res.data));

    this.setState({
      tms_number: "",
      tms_name: "",
      tms_description: "",
      tms_assigned: "",
      tms_startdate: "",
      tms_enddate: "",
      tms_status: "",
      tms_completed: false,
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Task</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tms_number}
              onChange={this.onChangeTMSNumber}
            />
          </div>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tms_name}
              onChange={this.onChangeTMSName}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tms_description}
              onChange={this.onChangeTMSDescription}
            />
          </div>
          <div className="form-group">
            <label>Assigned: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tms_assigned}
              onChange={this.onChangeTMSAssigned}
            />
          </div>
          <div className="form-group">
            <label>Start Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tms_startdate}
              onChange={this.onChangeTMSStartDate}
            />
          </div>
          <div className="form-group">
            <label>End Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tms_enddate}
              onChange={this.onChangeTMSEndDate}
            />
          </div>
          <div className="form-group">
            <label>Status: </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="statusOptions"
                id="statusNew"
                value="New"
                checked={this.state.tms_status === "New"}
                onChange={this.onChangeTMSStatus}
              />
              <label className="form-check-label">New</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="statusOptions"
                id="statusCompleted"
                value="Completed"
                checked={this.state.tms_status === "Completed"}
                onChange={this.onChangeTMSStatus}
              />
              <label className="form-check-label">Completed</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="statusOptions"
                id="statusCancelled"
                value="Cancelled"
                checked={this.state.tms_status === "Cancelled"}
                onChange={this.onChangeTMSStatus}
              />
              <label className="form-check-label">Cancelled</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Task"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
