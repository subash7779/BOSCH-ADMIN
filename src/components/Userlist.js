import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';

export default function Userlist() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Id</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.email}>
            <td>{item.id}</td><td>{item.first_name}</td><td>{item.last_name}</td><td>{item.email}</td><td><img alt={item.first_name} src={item.avatar} className="img-thumbnail"/></td>
          </tr>
        ))}
        </tbody>
      </Table>
    );
  }
}