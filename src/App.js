import { useEffect, useState } from "react";
import { fetchEmployees } from "./shared/Services/Fetch/Fetch";
import UserColumns from "./client/UserList";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// : {id: '5e00928d91e7feaa9872ec08', firstName: 'Yang', lastName: 'Carson', dob: '2019-02-26T16:52:36.244Z'}

const compareUsers = (userA, userB) =>
  userA.firstName.localeCompare(userB.firstName);

function useGroupedUsers() {
  const [groupedUsers, setGroupedUsers] = useState({});

  useEffect(() => {
    fetchEmployees().then((resp) => {
      const groupedUsersToInit = {};

      alphabet.forEach((letter) => {
        groupedUsersToInit[letter] = [];
      });

      const sortedUsersByFirstName = resp.data.sort(compareUsers);

      sortedUsersByFirstName.forEach((user) => {
        const firstLetter = user.firstName[0].toLowerCase();
        groupedUsersToInit[firstLetter].push(user);
      });

      setGroupedUsers(groupedUsersToInit);
    });
  }, []);

  return groupedUsers;
}

function App() {
  const groupedUsers = useGroupedUsers();
  const [activeUsers, setActiveUsers] = useState([]);
  console.log(activeUsers);

  return (
    <UserColumns
      groupedUsers={groupedUsers}
      onChangeUserState={setActiveUsers}
    />
  );
}

export default App;
