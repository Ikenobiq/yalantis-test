import { useState } from "react";
import Button from "../../shared/Components/RadioButton/RadioButton";
import styles from "./EmployeesList.module.scss";

function Column({ letter, users, onChangeUserState }) {
  return (
    <div className={styles.row}>
      <h1>{letter}</h1>
      {users.map((user) => (
        <Card
          className={styles.card}
          key={user.id}
          user={user}
          onChangeUserState={onChangeUserState}
        />
      ))}
    </div>
  );
}

function Card({ user, onChangeUserState }) {
  const [isActive, setIsActive] = useState(false);

  function handleClickNonActiveButton() {
    setIsActive(false);
    onChangeUserState((prev) =>
      prev.filter((activeUser) => activeUser.id !== user.id)
    );
  }

  function handleClickActiveButton() {
    setIsActive(true);
    onChangeUserState((prev) => [...prev, user]);
  }

  return (
    <ul>
      <li>
        <p style={{ color: isActive ? "blue" : "black" }}>
          {user.firstName} {user.lastName}
        </p>
        <Button
          label="non-active"
          value={0}
          checked={!isActive}
          onClick={handleClickNonActiveButton}
        />
        <Button
          label="active"
          value={1}
          checked={isActive}
          onClick={handleClickActiveButton}
        />
      </li>
    </ul>
  );
}

function UserColumns({ groupedUsers, onChangeUserState }) {
  return (
    <div className={styles.column}>
      {Object.keys(groupedUsers).map((letter) => (
        <Column
          key={letter}
          letter={letter}
          users={groupedUsers[letter]}
          onChangeUserState={onChangeUserState}></Column>
      ))}
    </div>
  );
}

export default UserColumns;
