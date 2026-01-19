
import FeedBack from "../../components/FeedBack/FeedBack";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
function HomePage() {
  return (
    <>
      <HomeBanner />
    
    </>
  )
}

export default HomePage;


// function HomePage() {
//   return (
//     <>
//     <Navbar />
//       <HomeBanner />
//       <OurSolutions />
//       <Testimonials />
//       <OurClients />
//       <OurPartners />
//      <GetInTouch />

//       <Footer /> 
      

//     </>
//   )
// }
// export default HomePage;



// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// // function HomePage() {
// // //  const arrFruits =["apple" , "banana" , "orange" , "mango" , "graps"];
// // //  const [search, setSearch] = useState("")
// //   return (
// //     <>
// //     {/* <input type="text"
// //     placeholder="search"
// //     value={search}
// //     onChange={(e) => setSearch (e.target.value)}>
// //     </input>
// //      <ul>
// //     { arrFruits.map(item , index) =>}

// //      </ul> */}
// //     </>
// //   );
// // }

// // export default HomePage;

//   // https://jsonplaceholder.typicode.com/users
 
//     // . then true case w response dy mmkn aktb ay asm 3ady w log response hygeb el data w 3lashan ageb el data zay el file h3ml response.json

// import { useEffect, useState } from "react";

// const [users , setUsers] =useState([])

// function HomePage() {
//   // useEffect(() => {
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //     .then(response => response.json())
//   //     .then (data => {
//   //       setUsers(data);
//   //     });
  
//   // },[]);


//   // install axios
//   useEffect?(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
//       setUsers(response);
//     })
//   })

//   return (
//     <>
//   <ul>
//     {users.map(singleUser => {
//       return (<li>{singleUser.name}</li>)
//     })}
//   </ul>
//     </>
//   );
// }

// export default HomePage;