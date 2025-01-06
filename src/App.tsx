import React, { useState, useMemo, useEffect } from 'react';
import recipeData from './db/dishLists.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDishBy, setSelectedDishBy] = useState('');
  const [selectedByType, setSelectedByType] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipeData.recipe);

  // 초기화 함수 추가
  const handleReset = () => {
    setSearchTerm('');
    setSelectedDishBy('');
    setSelectedByType('');
    setFilteredRecipes(recipeData.recipe);
  };

  useEffect(() => {
    const filtered = recipeData.recipe.filter(item =>
      item.dishName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedDishBy === '' || item.dishBy === selectedDishBy) &&
      (selectedByType === '' || item.byType === selectedByType)
    );
    setFilteredRecipes(filtered);
  }, [searchTerm, selectedDishBy, selectedByType]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const dishByOptions = useMemo(() => {
    const options = new Set(recipeData.recipe.map(item => item.dishBy));
    return ['', ...Array.from(options)];
  }, []);

  const byTypeOptions = useMemo(() => {
    const options = new Set(recipeData.recipe.map(item => item.byType));
    return ['', ...Array.from(options)];
  }, []);

  const handleDishByChange = (e) => {
    setSelectedDishBy(e.target.value);
  };

  const handleByTypeChange = (e) => {
    setSelectedByType(e.target.value);
  };

  return (
    <div className="wrap">
      <header id="header">
        <div className="search-wrap">
          <div className="select-wrap">
            <select name="selectedDishBy" value={selectedDishBy} onChange={handleDishByChange}>
              <option value="">전체 저자</option>
              {dishByOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <select name="selectedByType" value={selectedByType} onChange={handleByTypeChange}>
              <option value="">전체 구분</option>
              {byTypeOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="요리 이름을 검색하세요"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="button" className="btn" onClick={handleReset}>
            <FontAwesomeIcon icon={faRefresh} />
          </button>
        </div>
      </header>
      <section id="container">
        <div className="card-wrap">
          <div className="card-list">
            {filteredRecipes.map((item) => (
              <div key={item.id}>
                <div className="top">
                  <h2>
                    <span>{item.dishName}</span>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" title={item.dishName + " 원문 바로가기"}>
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                  </h2>
                  <img src={'/assets/images/dish/' + item.imgUrl} alt={item.dishName} />
                  <div>
                    <p>{item.dishBy}</p>
                    <p>{item.byType}</p>
                  </div>
                </div>
                <div className="detail">
                  <ul className='ingredients'>
                    {item.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.value}</li>
                    ))}
                  </ul>
                  
                  <ol className='sequences'>
                    {item.sequences.map((step, index) => (
                      <li key={index}>{step.value}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
