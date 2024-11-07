export default function json2html(data) {
    // Validate if the input is a non-empty array
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available.</p>';
    }
  
    // Extract column headers (keys from the first object)
    const columns = Object.keys(data[0]);
  
    // Start constructing the HTML table
    let html = '<table data-user="rishabchib1@gmail.com">';
  
    // Table header
    html += '<thead><tr>';
    columns.forEach(col => {
      html += <th>${col}</th>;
    });
    html += '</tr></thead>';
  
    // Table body
    html += '<tbody>';
    data.forEach(row => {
      html += '<tr>';
      columns.forEach(col => {
        // Add a cell for each column, even if it's not in the object
        html += <td>${row[col] || ''}</td>;
      });
      html += '</tr>';
    });
    html += '</tbody>';
  
    // Close the table tag
    html += '</table>';
  
    // Return the generated HTML table as a string
    return html;
  }