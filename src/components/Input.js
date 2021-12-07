function Input({ error, onChangeFunction }) {
  return (
    <>
      <input
        style={{ borderColor: error ? "red" : "black" }}
        type="text"
        onChange={onChangeFunction}
      />
      {error && <p>Error</p>}
    </>
  );
}

export default Input;
