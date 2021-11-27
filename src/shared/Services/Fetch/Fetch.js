import axios from "axios";

export const fetchEmployees = () => {
  return axios.get(
    "https://yalantis-react-school-api.yalantis.com/api/task0/users",
  );
};
console.log(fetchEmployees());
