function Input({ label, type, name, onChange, placeholder }) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className="u-full-width"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default Input;