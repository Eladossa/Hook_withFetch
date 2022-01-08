import { useState, useEffect } from "react";

export default function useUsersList() {
  const [userList, setUserObjsList] = useState([]);
  let randomUsers = [];

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserObjsList(randomUser(data));
      })
      .catch((e) => console.error("Critical failure: " + e.message));
  };

  const randomUser = (userObjectList) => {
    console.log("randomUser()", userObjectList);
    const users = [...userObjectList];
    for (let index = 0; index < 3; index++) {
      let idx = Math.floor(Math.random() * users.length);
      randomUsers.push(users[idx]);
      users.splice(idx, 1);
    }
    console.log("randomUsers[0]", randomUsers[0]);
    return randomUsers;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return userList;
}
