const Button = ({ label, ...rest }) => {
  return (
    <div className="radio" style={{ flexDir: "row" }}>
      <label>
        <input type="radio" {...rest} />
        {label}
      </label>
    </div>
  );
};

export default Button;
