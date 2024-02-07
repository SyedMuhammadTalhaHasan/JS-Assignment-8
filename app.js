// --------first--------
function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Operation successful!");
        } else {
          reject(new Error("Operation failed!"));
        }
      }, 3000);
    });
  }
  
  simulateAsyncOperation(true)
    .then((successMessage) => {
      console.log(successMessage);
    })
    .catch((errorMessage) => {
      console.error(errorMessage.message);
    });

  simulateAsyncOperation(false)
    .then((successMessage) => {
      console.log(successMessage);
    })
    .catch((errorMessage) => {
      console.error(errorMessage.message);
    });


// ---------second--------

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Fetched data successfully" };
        resolve(data);
      }, 4000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processedData = { message: "Processed data successfully", originalData: data };
        resolve(processedData);
      }, 3500); 
    });
  }
  
  fetchData()
    .then((fetchedData) => {
      console.log("Data fetched:", fetchedData);
      return processData(fetchedData);
    })
    .then((processedData) => {
      console.log("Data processed:", processedData);
      console.log("Final result:", processedData);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });