import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
const ResultComponent = () => {
  const [userDetails, setUserDetails] = useState({});
  const [result, setResult] = useState({});
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentResult, setCurrentResult] = useState({});
  const [oldResult, setOldResult] = useState({});

  const data = [
    {
      subject: "Math",
      Current: currentResult.math,
      Previous: oldResult.math,
      fullMark: 100,
    },
    {
      subject: "Nepali",
      Current: currentResult.nepali,
      Previous: oldResult.nepali,
      fullMark: 100,
    },
    {
      subject: "English",
      Current: currentResult.english,
      Previous: oldResult.english,
      fullMark: 100,
    },
    {
      subject: "Science",
      Current: currentResult.science,
      Previous: oldResult.science,
      fullMark: 100,
    },
    {
      subject: "Account",
      Current: currentResult.account,
      Previous: oldResult.account,
      fullMark: 100,
    },
    {
      subject: "Health & Population",
      Current: currentResult.health_population,
      Previous: oldResult.health_population,
      fullMark: 100,
    },
    {
      subject: "opt_math",
      Current: currentResult.opt_math,
      Previous: oldResult.opt_math,
      fullMark: 100,
    },
  ];

  const getUser = () => {
    axios({
      url: "http://localhost:2020/checklogin",
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    })
      .then((res) => {
        // console.log(res.data._id);
        setUserDetails(res.data);
        setId(res.data._id);
        axios({
          url: `http://localhost:2020/admin/getresult/${res.data._id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        })
          .then((res) => {
            // console.log(res.data);

            setResult(res.data);
            setCurrentResult(res.data.message[0]);
            setOldResult(res.data.message[1]);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
    // getResult();
  }, []);
  console.log(userDetails);
  return (
    <div>
      {loading === false ? (
        <section class="event_section layout_padding">
          <div class="container">
            <div class="heading_container">
              <h3>Result</h3>
              <p>Your Result.</p>
            </div>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Subjects</th>
                  <th scope="col">Marks</th>
                  <th scope="col">Prctical</th>
                  <th scope="col">Aggregate</th>
                  <th scope="col">Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>English</td>
                  <td>{result.message[0].english}</td>
                  <td>-</td>
                  <td>{result.message[0].english}</td>
                  {result.message[0].english >= 40 ? (
                    <td>Pass</td>
                  ) : (
                    <td>Fail</td>
                  )}
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Nepali</td>
                  <td>{result.message[0].nepali}</td>
                  <td>-</td>
                  <td>{result.message[0].nepali}</td>
                  {result.message[0].nepali >= 40 ? (
                    <td>Pass</td>
                  ) : (
                    <td>Fail</td>
                  )}
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Account</td>
                  <td>{result.message[0].account}</td>
                  <td>-</td>
                  <td>{result.message[0].account}</td>
                  {result.message[0].account >= 40 ? (
                    <td>Pass</td>
                  ) : (
                    <td>Fail</td>
                  )}
                </tr>

                <tr>
                  <th scope="row">4</th>
                  <td>Math</td>
                  <td>{result.message[0].math}</td>
                  <td>-</td>
                  <td>{result.message[0].math}</td>
                  {result.message[0].math >= 40 ? <td>Pass</td> : <td>Fail</td>}
                </tr>

                <tr>
                  <th scope="row">5</th>
                  <td>Science</td>
                  <td>{result.message[0].science}</td>
                  <td>-</td>
                  <td>{result.message[0].science}</td>
                  {result.message[0].science >= 40 ? (
                    <td>Pass</td>
                  ) : (
                    <td>Fail</td>
                  )}
                </tr>

                <tr>
                  <th scope="row">6</th>
                  <td>Opt_math</td>
                  <td>{result.message[0].opt_math}</td>
                  <td>-</td>
                  <td>{result.message[0].opt_math}</td>
                  {result.message[0].opt_math >= 40 ? (
                    <td>Pass</td>
                  ) : (
                    <td>Fail</td>
                  )}
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Health & Population</td>
                  <td>{result.message[0].health_population}</td>
                  <td>-</td>
                  <td>{result.message[0].health_population}</td>
                  {result.message[0].health_population >= 40 ? (
                    <td>Pass</td>
                  ) : (
                    <td>Fail</td>
                  )}
                </tr>
              </tbody>
              <tr>
                <td>Total:</td>
                <td>{result.message[0].total}</td>
              </tr>
            </table>
          </div>

          <div>
            <h2 style={{ textAlign: "center", marginBottom: 10 }}>
              Result Chart
            </h2>
            <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
              <RadarChart outerRadius={90} width={730} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Current"
                  dataKey="Current"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Previous"
                  dataKey="Previous"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
                <Legend />
              </RadarChart>

              <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" name="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Current" fill="#8884d8" />
                <Bar dataKey="Previous" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ResultComponent;
