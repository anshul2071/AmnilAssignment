const btn = document.querySelector("#button");
const messageDiv = document.querySelector("#message");

//async function it makes the fetchdata asychronous and lets us use await now 

btn.addEventListener("click", async function fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/users'; // Example API
  try {
    // Fetch the data from the API
    const response = await fetch(url); // until the data is fetched we wait the execution is paused until api response is fetched with the help of await
    const data = await response.json();

    // Filter the data
    const filteredData = data.filter(user => user.name.includes('e'));

    // Map the filtered data to get user names
    const userNames = filteredData.map(user => user.name);

    // Reduce the user names to get the total length
    const totalLength = userNames.reduce((sum, name) => sum + name.length, 0);

    // Log the results
    console.log("Filtered Users:", filteredData);
    console.log("User Names:", userNames);
    console.log("Total Length of Names:", totalLength);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
