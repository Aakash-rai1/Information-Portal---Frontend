import React, { useState, useEffect } from "react";

import { Component } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default function ManageNews() {
  const [news, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete("http://localhost:2020/delete/user/" + id)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
    loadUsers();
  };

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:2020/show/news");
    console.log(result);
    const { success, data } = result;
    if (data.success) {
      console.log("cos", data);
      setUser(data.data);
    } else {
      if (data.message == "Unauthorized access!!") {
        console.log();
      }
    }
  };

  // const deleteUser=async id=>{
  //     await axios.delete('http://localhost:1500/user/delete/${id}');
  //     loadUsers()
  // }

  <>{/* return ( */}</>;

  return (
    <>
      <Navbar />

      <div class="container">
        <div style={{ padding: 50 }}>
          <div>
            <h2>News </h2>

            <table class="table border shadow">
              <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>

                  <th>Action</th>
                  <th scope="col">
                    {" "}
                    <Link class="btn btn-success">Add</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {news.map((news, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{news.title}</td>
                    <td>{news.content.substr(0, 75)}</td>

                    <td>
                      <Link class="btn btn-outline-primary mr-2">Edit</Link>
                      <Link class="btn btn-danger">Delete</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
