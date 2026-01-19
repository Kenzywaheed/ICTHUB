// import "./QuestionOne.css";
// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { Form } from "react-bootstrap";
// import Alert from "react-bootstrap/Alert";
// import Spinner from "react-bootstrap/Spinner";
// // 10
// const POSTS_PER_PAGE = 5;
// const TOTAL_POSTS = 100;
// const TOTAL_PAGES = TOTAL_POSTS / POSTS_PER_PAGE;

// function QuestionOne() {
  // one
  // const [text, setText] = useState("");
  // const handleClick = () => {
  //   if (!text) {
  //     toast.error(`error`);
  //   } else {
  //     toast.success(`Success: ${text}`);
  //   }
  // };

  // two
  // const [count, setCount] = useState(0);
  // const increment = () => setCount(count + 1);

  // const decrement = () => {
  //   if (count <= 0) {
  //     toast.error(`error`);
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  // three
  // const [showInput, setShowInput] = useState(false);
  // const [word, setWord] = useState("");
  // const handleType = () => {
  //   setShowInput(!showInput);
  // };

  // Four
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //     setUsers(response.data);
  //   });
  // });

  // Five
  // const [Input, setInput] = useState("");

  //6
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");
  // const [showForm, setShowForm] = useState(true);

  // const handleSubmit = () => {
  //   if (email.includes("@") && password) {
  //     setMessage(`Login successful! Welcome, ${email}`);
  //     setShowForm(false);
  //   } else {
  //     setMessage("Please enter a valid email and password!");
  //   }
  // };

  // seven
  // const [countries, setCountries] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [cities, setCities] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://countriesnow.space/api/v0.1/countries")
  //     .then((response) => {
  //       setCountries(response.data.data);
  //     });
  // }, []);

  // const fetchCities = (country) => {
  //   if (!country) return;
  //   axios
  //     .post("https://countriesnow.space/api/v0.1/countries/cities", { country })
  //     .then((response) => {
  //       setCities(response.data.data);
  //     });
  // };

  // const handleCountryChange = (e) => {
  //   const country = e.target.value;
  //   setSelectedCountry(country);
  //   fetchCities(country);
  // };

  // 8
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       setPosts(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //       setError("error");
  //       setLoading(false);
  //     });
  // }, []);

  // loading
  // if (loading) {
  //   return (
  //     <div>
  //       <Spinner animation="border" />
  //       <p>Loading</p>
  //     </div>
  //   );
  // }

  // error
  // if (error) {
  //   return (
  //     <Alert variant="danger">
  //       <Alert.Heading>Error</Alert.Heading>
  //     </Alert>
  //   );
  // }

  // 9
  // const [person, setPerson] = useState([]);
  // const [myloading, setmyLoading] = useState(false);
  // const [selectedUserId, serSelectedUserId] = useState(null);
  // useEffect(() => {
  //   setmyLoading(true);
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //     setPerson(response.data);
  //     setmyLoading(false);
  //     if (response.data.length > 0) {
  //       serSelectedUserId(response.data[0].id);
  //     }
  //   });
  // }, []);
  // if (myloading) {
  //   return (
  //     <div className="text-center mt-5">
  //       <Spinner animation="border" />
  //       <p>Loading</p>
  //     </div>
  //   );
  // }

  // const selectUser = person.find((user) => user.id === selectedUserId);

  // 10

//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading , setLoading] = useState(false);
//   const [error, setError] =useState("") ;

// useEffect ( () =>{
//   const fetchPosts= async () => {
//     setLoading(true);
//     setError("");
//     try{
//       const {data} = await axios.get{
//         "https://jsonplaceholder.typicode.com/posts" ,
//         {
//       params: {_page: page, _limit: POSTS_PER_PAGE},
//         },
//       }
//     }
//   }
// })
//   return (
//     <>
      {/* one */}
      {/* <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Card</Card.Title>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Type here..."
            value={text}
          />

          <Button variant="primary" onClick={handleClick}>
            Click me
          </Button>
        </Card.Body>
      </Card>
      <ToastContainer position="top-center" /> */}

      {/* two */}
      {/* <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Counter {count}</Card.Title>

          <Button className="plus" variant="primary" onClick={increment}>
            +
          </Button>
          <Button className="minus" variant="primary" onClick={decrement}>
            -
          </Button>
        </Card.Body>
      </Card> */}

      {/* three */}
      {/* <div>
        <input
          type={showInput ? "text" : "password"}
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleType}>{showInput ? "hide" : "show"}</button>
      </div> */}

      {/* Four */}
      {/* <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div> */}

      {/* Five */}
      {/* <div>
        <input
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p>Hello,{Input}</p>
      </div> */}

      {/* 6 */}
      {/* <div>
        {showForm ? (
          <form>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div>
              <Button onClick={handleSubmit} variant="primary">
                Submit
              </Button>
            </div>
          </form>
        ) : null}

        {message !== "" ? <p>{message}</p> : null}
      </div> */}

      {/* seven */}
      {/* <div>
        <Form.Select
          aria-label="Select Country"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">Open this select menu</option>
          {countries.map((c) => (
            <option key={c.country} value={c.country}>
              {c.country}
            </option>
          ))}
        </Form.Select>
        <ul>
          {cities.map((city, id) => (
            <li key={id}>{city}</li>
          ))}
        </ul>
      </div> */}

      {/* 8 */}
      {/* <div>
        <p>Titles</p>
        <ul className="myList">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div> */}

      {/* 9 */}
      {/* <div className="d-flex flex-wrap mb-5 gap-2">
        {person.map((user) => (
          <button
            key={user.id}
            className={`btn ${
              selectedUserId === user.id ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => serSelectedUserId(user.id)}
          >
            {user?.name}
          </button>
        ))}
      </div>

      {selectUser && (
        <div className="card">
          <div className="card-body">
            <h3>Name: {selectUser.name}</h3>
            <p>Email: {selectUser.email}</p>
            <p>phone: {selectUser.phone}</p>
            <p>city: {selectUser.address.city}</p>
            <p>company: {selectUser.company.name}</p>
          </div>
        </div>
      )} */}

      {/* 10 */}
//  <div>
//       <h2>Page {page}</h2>
//       <div>
//         {posts.map((post) => (
//           <div key={post.id} className="d-flex flex-wrap mb-5">
//             <h4>{post.title}</h4>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//       <div>
//         <button
//           onClick={() => setPage(page - 1)}
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => setPage(page + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
      
//     </>
//   );
// }

// export default QuestionOne;
