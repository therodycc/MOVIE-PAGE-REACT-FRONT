import { Fragment } from "react";

function Search({ text, action }) {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control  bg-white pl-5"
          placeholder="Search"
          value={text}
          onChange={(e) => action(e)}
        />
      </div>
    </>
  );
}

export default Search;
