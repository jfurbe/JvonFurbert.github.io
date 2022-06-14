import React from 'react';
import * as d3 from 'd3';

   // set the dimensions and margins of the graph
   var margin = { top: 20, right: 20, bottom: 50, left: 70 },
   width = 960 - margin.left - margin.right,
   height = 500 - margin.top - margin.bottom;

function LineChart({data}){
  console.log(data)
  let t = data[0].length;
  const svgRef = React.useRef(null);
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  React.useEffect(() => {
    const xScale = d3.scaleTime()
    .domain(d3.extent(data[0], (d) => d.date))
    .range([0, width]);

    
  const yScale = d3.scaleLinear()
    .domain([
      d3.min(data[0], (d) => d.value)-10,
      d3.max(data[0], (d) => d.value)+10
    ])
    .range([height-margin.bottom, 0]);
  
     // Create root container where we will append all other chart elements
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove(); // Clear svg content before adding new elements 
    const svg = svgEl
       .append("g")
     .attr("transform", `translate(${margin.left},${margin.top})`);

     //Add Xgrid lines with labels
     const dataPoint=data[0].map(x=>x.date);
  const xAxis = d3.axisBottom(xScale)
     .ticks(t)
     .tickSize(-height + margin.bottom)
     .tickFormat((x,i)=> dataPoint[i]);
   const xAxisGroup = svg.append("g")
     .attr("transform", `translate(0, ${height - margin.bottom+10})`)
     .call(xAxis);
   xAxisGroup.select(".domain").remove();
   xAxisGroup.selectAll("line").attr("stroke", "rgba(255, 255, 255, 0.2)");
   xAxisGroup.selectAll("text")
     .attr("opacity", 0.5)
     .attr("color", "white")
     .attr("font-size", "0.75rem");
   // Add Y grid lines with labels
   const yAxis = d3.axisLeft(yScale)
     .ticks(t)
     .tickSize(-width);
     
   const yAxisGroup = svg.append("g").call(yAxis);
   yAxisGroup.select(".domain").remove();
   yAxisGroup.selectAll("line").attr("stroke", "rgba(255, 255, 255, 0.2)");
   yAxisGroup.selectAll("text")
     .attr("opacity", 0.5)
     .attr("color", "white")
     .attr("font-size", "0.75rem");
    // Draw the lines
    
    const line = d3.line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value));
    svg.selectAll(".line")
      .data(data)
      .enter()
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "steelblue") //(d) => d.color)
      .attr("stroke-width", 3)
      .attr("d", (d) => line(d));
  }, [data]); // Redraw chart if data changes


    return (
      <svg ref={svgRef} width={svgWidth} height={svgHeight} style={{backgroundColor:"grey"}}/>
      )
  }
export default LineChart;