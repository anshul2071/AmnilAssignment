
//Promise.race() returns the first promise that settles (either fulfilled or rejected). It does not wait for other promises to complete.





export async function fetchFastest() {
    try {
      const response = await Promise.race([
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
      ]);
  
      console.log("Fastest Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  








  export async function fetchFast() {
    try {
        const response = await Promise.race([
            fetch("https://jsonholder.com/wait").then(res=>res.json()),
            fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()),
            fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
        ])

        console.log(`Response: ${JSON.stringify(response, null, 2)}`);
    }

    catch(error) {
        console.error("Error:", error);
    }
  }
  