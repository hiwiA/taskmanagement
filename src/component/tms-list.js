import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Task = (props) => (
  <tr>
    <td className={props.tasks.tms_completed ? "completed" : ""}>
      {props.tasks.tms_number}
    </td>
    <td className={props.tasks.tms_completed ? "completed" : ""}>
      {props.tasks.tms_name}
    </td>
    <td className={props.tasks.tms_completed ? "completed" : ""}>
      {props.tasks.tms_description}
    </td>

    <td className={props.tasks.tms_completed ? "completed" : ""}>
      {props.tasks.tms_assigned}
    </td>
    <td className={props.tasks.tms_completed ? "completed" : ""}>
      {props.tasks.tms_startdate}
    </td>
    <td className={props.tasks.tms_completed ? "completed" : ""}>
      {props.tasks.tms_enddate}
    </td>
    <td className={props.tasks.tms_completed ? "completed" : ""}>
      {props.tasks.tms_status}
    </td>
    <td>
      <Link to={"/edit/" + props.tasks._id}>Edit</Link>
    </td>
  </tr>
);

export default class TMSList extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { task: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/tasks/")
      .then((response) => {
        this.setState({ task: response.data });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    this._isMounted = true;
    axios
      .get("http://localhost:4000/tasks/")
      .then((response) => {
        this.setState({ task: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  taskList() {
    return this.state.task.map(function (currentTask, i) {
      return <Task tasks={currentTask} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Task List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Description</th>
              <th>Assigned</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.taskList()}</tbody>
        </table>
      </div>
    );
  }
}
