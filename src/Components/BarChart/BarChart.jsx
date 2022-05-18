import React, { useEffect } from "react";
import * as d3 from "d3";

import Styles from "./barchart.module.scss";

function BarChart() {
  const arr = ["number1", "number2", "number3", "number4", "number5"];

  let DUMMY_DATA = arr.map((d, i) => {
    return {
      id: i + 1,
      value: Math.floor(Math.random() * 20 + 5),
      key: d,
    };
  });

  const xScale = d3
    .scaleBand()
    .domain(DUMMY_DATA.map((d) => d.key))
    .rangeRound([0, 550])
    .padding(0.1);
  const yScale = d3.scaleLinear().domain([0, 25]).range([450, 0]);

  const updateDummyDataOnCLick = (fn) => {
    DUMMY_DATA = arr.map((d, i) => {
      return {
        id: i + 1,
        value: Math.floor(Math.random() * 20 + 5),
        key: d,
      };
    });
    fn();
  };

  useEffect(() => {
    const container = d3.select("svg");

    const d3Chart = container
      .selectAll("rect")
      .data(DUMMY_DATA)
      .enter()
      .append("rect")
      .attr("width", xScale.bandwidth())
      .attr("height", (data) => 450 - yScale(data.value))
      .attr("x", (data) => xScale(`${data.key}`))
      .attr("y", (data) => yScale(data.value));

    window.addEventListener("click", () => {
      updateDummyDataOnCLick(() => {
        d3Chart
          .data(DUMMY_DATA)
          .attr("height", (data) => 450 - yScale(data.value))
          .attr("y", (data) => yScale(data.value));
      });
    });
    return () => window.removeEventListener("click", {});
  }, []);

  return (
    <div className={Styles.barChart_container}>
      <svg></svg>
    </div>
  );
}

export default BarChart;
