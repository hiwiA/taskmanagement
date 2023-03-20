import React, { Component } from "react";
import axios from "axios";

export default class TMSEdit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTMSNumber = this.onChangeTMSNumber.bind(this);
    this.onChangeTMSName = this.onChangeTMSName.bind(this);
    this.onChangeTMSDescription = this.onChangeTMSDescription.bind(this);
    this.onChangeTMSAssigned = this.onChangeTMSAssigned.bind(this);
    this.onChangeTMSStartDate = this.onChangeTMSStartDate.bind(this);
    this.onChangeTMSEndDate = this.onChangeTMSEndDate.bind(this);
    this.onChangeTMSStatus = this.onChangeTMSStatus.bind(this);
    this.onChangeTMSCompleted = this.onChangeTMSCompleted.bind(this);
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

  componentDidMount() {
    axios
      .get("http://localhost:4000/tasks/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          tms_number: response.data.tms_number,
          tms_name: response.data.tms_name,
          tms_description: response.data.tms_description,
          tms_assigned: response.data.tms_assigned,
          tms_startdate: response.data.tms_startdate,
          tms_enddate: response.data.tms_enddate,
          tms_status: response.data.tms_status,
          tms_completed: response.data.tms_completed,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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

  onChangeTMSStatus(e) {
    this.setState({
      tms_status: e.target.value,
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

  onChangeTMSCompleted(e) {
    this.setState({
      tms_completed: !this.state.tms_completed,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      tms_number: this.state.tms_number,
      tms_name: this.state.tms_name,
      tms_description: this.state.tms_description,
      tms_assigned: this.state.tms_assigned,
      tms_status: this.state.tms_status,
      tms_startdate: this.state.tms_startdate,
      tms_enddate: this.state.tms_enddate,
      tms_completed: this.state.tms_completed,
    };
    axios
      .post(
        "http://localhost:4000/tasks/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3>Update Task</h3>
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
            <label>status: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tms_status}
              onChange={this.onChangeTMSStatus}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="statusOptions"
                id="new"
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
                id="Completed"
                value="completed"
                checked={this.state.tms_status === "completed"}
                onChange={this.onChangeTMSStatus}
              />
              <label className="form-check-label">Completed</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="statusOptions"
                id="cancelled"
                value="cancelled"
                checked={this.state.tms_status === "Cancelled"}
                onChange={this.onChangeTMSStatus}
              />
              <label className="form-check-label">Cancelled</label>
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
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Update Task"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
