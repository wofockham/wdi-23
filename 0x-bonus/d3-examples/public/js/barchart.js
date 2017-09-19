const data = [4, 8, 15, 16, 23, 42]; // You could also get these via AJAX

// This returns a function to ensure all our values fit within 420 pixels.
const x = d3.scaleLinear().domain([0, d3.max(data)]).range([0, 420]);

d3.select('.chart') // Find the chart element
    .selectAll('div') // Select the divs within it (they don't exist yet!)
    .data(data) // Associate data with the ghost divs
    .enter().append('div') // And then actually create them
      .style('width', (d) => x(d) + 'px') // Set the width with the scale above
      .text( (d) => d ); // Set the text from the data
