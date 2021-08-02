import React, { useState, useEffect } from "react";

import { Component } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ManageNews() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete("http://localhost:2020/delete/news/" + id)
      .then((response) => {
        toast.success("News Deleted Successfully", {
          position: "bottom-right",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
    loadUsers();
  };

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:2020/show/users");
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
            <h2>Results </h2>
            <br />
            <table class="table border shadow">
              <thead class="thead-light">
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Email</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((users, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{users.fname + users.lname}</td>
                    <td>{users.email}</td>

                    <td>
                      <Link class="btn btn-outline-primary mr-2">Edit</Link>
                      <Link
                        class="btn btn-danger"
                        onClick={deleteProduct.bind(this, users._id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}
