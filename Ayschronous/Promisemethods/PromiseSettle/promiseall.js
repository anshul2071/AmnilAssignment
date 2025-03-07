


export async function fetchPromiseAll () {
    try {
        const [postData, userData] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/invalid-endpoint").then(res=>res.json()),//this will fail
            fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()),
            fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
        ]);

        console.log(`Data from First Api is : ${JSON.stringify(postData, null, 2)}`);
        console.log(`Data from Second Api is : ${JSON.stringify(userData, null, 2)}`);



    }

    catch(error) {
        console.error("Error Fetching Data", error);
    }
}


// //as we know in promise.all if one promise fails and isnot fullfilled all of promise will fail so it will show error as a result if one promise fails