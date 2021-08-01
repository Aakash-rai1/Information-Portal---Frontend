import React, { useState, useEffect } from "react";

import { Component } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default function ManageAdmin() {
  const [users, setUser] = useState([]);

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
    const result = await axios.get("http://localhost:2020/show/admins");
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
            <h2>Manage Admin </h2>

            <table class="table border shadow">
              <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>

                    <td>
                      <Link
                        class="btn btn-outline-primary mr-2"
                        to={"/user/update/" + user._id}
                      >
                        Edit
                      </Link>
                      <Link
                        class="btn btn-danger"
                        onClick={deleteProduct.bind(this, user._id)}
                      >
                        Delete
                      </Link>
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
