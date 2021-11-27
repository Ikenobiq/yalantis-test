import { useState } from "react";
import styles from "./EmployeesList.module.scss";
const EmployeesList = () => {
    const [data, setData] = useState("")
    
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.name}>Name</h3>
      <input
        onChange={handlechangeName}
        value={name}
        className={styles.inputName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <h3 className={styles.name}>Number</h3>
      <input
        onChange={handlechangeNumber}
        value={number}
        type="tel"
        className={styles.inputNumber}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button className={styles.button}>add contact</button>
    </form>
  );
};
export default Form;
