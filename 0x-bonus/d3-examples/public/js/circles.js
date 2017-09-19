const svg = d3.select('svg');

// Associate some data with circle elements that don't exist yet.
const circle = svg.selectAll('circle').data([32, 57, 112, 293]);

circle.enter().append('circle') // Create circles as needed for all our data.
  .attr('cy', 60) // Set the vertical position
  .attr('cx', (d, i) => i * 100 + 30) // Set the horizontal position from the index
  .attr('r', (d) => Math.sqrt(d)); // Use the square root of the data as radius
