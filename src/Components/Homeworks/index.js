import React from "react";
import { Jumbotron, Container } from "reactstrap";
import NavBar from "../Navbar/Navbar";
import { Table } from "reactstrap";
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">WELCOME TO BOOTCAMP - July 18 EDITION</h1>
            <p className="lead">My Name is Khabibullo and I am student here </p>
            <NavBar />

            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Homework 1</td>
                  <td>Git Practice. Provide link of your repo here </td>
                  <td>
                    <a href="https://github.com/Khabibkh/July18React"> Link</a>{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Homework 2.2</td>
                  <td>Wynisco Bootcamp HTML Website</td>
                  <td>
                    <a href="https://wynisco-bootcamp.netlify.app/"> Link</a>{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Homework 3.2</td>
                  <td>Design a navigation bar</td>
                  <td>
                    <a href="https://codepen.io/Khujamberdiev/pen/zYwEKMY"> Link</a>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Homeworks;

