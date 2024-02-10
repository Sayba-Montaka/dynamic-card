// // //dummy data
// // const posts = [
// //     {
// //         title : " This is title 1",
// //         body :  "Thsi is body 1"
// //     },
// //     {
// //         title : " This is title 2",
// //         body :  "Thsi is body 2"
// //     },
// //     {
// //         title : " This is title 3",
// //         body :  "Thsi is body 3"
// //     },
// //     {
// //         title : " This is title 4",
// //         body :  "Thsi is body 4"
// //     },
// //     {
// //         title : " This is title 5",
// //         body :  "Thsi is body 5"
// //     },
// //     {
// //         title : " This is title 6",
// //         body :  "Thsi is body 6"
// //     },
// //     {
// //         title : " This is title 7",
// //         body :  "Thsi is body 7"
// //     },
// //     {
// //         title : " This is title 8",
// //         body :  "Thsi is body 8"
// //     },
  

// // ];

//fetch data

  
const fetchData = async (config) => {
    try{
        const res = await axios(config);
return res.data;
}
    catch(error){
        throw Error("data is not defined");
    }
    
};


//selecton
const postsElement = document.querySelector(".posts");

const loadAlldata = async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
    <p class="post-body">${post.body}</p>`;
    postsElement.appendChild(postElement)
        
    });
 
};
loadAlldata();









