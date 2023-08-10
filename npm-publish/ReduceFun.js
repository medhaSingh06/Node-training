
function reduce(array) {
   const result = array.reduce( (acc, curr) => acc+ curr, 0)
  
    return result;
  }
  
  // Export the reduce function
  module.exports = reduce;
  