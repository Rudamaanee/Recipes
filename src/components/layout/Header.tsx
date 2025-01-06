import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header id="header">
      <div className="search-wrap">
        {/* <label>
          저자
          <select name="selectedFruit">
            <option value="apple">마카롱여사</option>
            <option value="banana">김가연</option>
            <option value="orange">조샘</option>
          </select>
        </label>
        <label>
          구분
          <select name="selectedFruit">
            <option value="apple">1</option>
            <option value="banana">2</option>
            <option value="orange">3</option>
          </select>
        </label> */}
        <label>
          <input type="text" />
        </label>
        <button type="button" className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </header>
  );
}

export default Header;
