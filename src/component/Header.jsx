import TextField from "@atlaskit/textfield";
export const Header = ({ setSearch }) => {
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="header">
      <TextField
        width={400}
        onChange={changeHandler}
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
};
