import "./App.css";
import "./style.css";
import data from "./object.js";
import { useState } from "react";

function App() {
  const [arr, update] = useState(data);
  return (
    <div className="App">
      <header className="App-header">
        <div className="data-container">
          <h2>Learnable Intern Assessment</h2>
          <div class="table-box">
            <table>
              <tr>
                <th>
                  <span className="box">Name</span>
                </th>
                <th>
                  <span className="box">Path</span>
                </th>
                <th>
                  <span className="box">task 1</span>
                </th>
                <th>
                  <span className="box">Task 2</span>
                </th>
                <th>
                  <span className="box">Task 3</span>
                </th>
                <th>
                  <span className="box">Total</span>
                </th>
              </tr>
              <tr>
                <td>{arr.user.name}</td>
                <td>{arr.user.path}</td>
                <td>{arr.user.task[0]}</td>
                <td>{arr.user.task[1]}</td>
                <td>{arr.user.task[2]}</td>
                <td>{arr.user.task[2]}</td>
              </tr>
              <tr>
                <td>{arr.user2.name}</td>
                <td>{arr.user2.path}</td>
                <td>{arr.user2.task[0]}</td>
                <td>{arr.user2.task[1]}</td>
                <td>{arr.user2.task[2]}</td>
              </tr>
              <tr>
                <td>{arr.user3.name}</td>
                <td>{arr.user3.path}</td>
                <td>{arr.user3.task[0]}</td>
                <td>{arr.user3.task[1]}</td>
                <td>{arr.user3.task[2]}</td>
              </tr>
              <tr>
                <td>{arr.user4.name}</td>
                <td>{arr.user4.path}</td>
                <td>{arr.user4.task[0]}</td>
                <td>{arr.user4.task[1]}</td>
                <td>{arr.user4.task[2]}</td>
              </tr>
            </table>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
