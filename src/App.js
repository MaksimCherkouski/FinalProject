import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator__header">Генератор пароля</h2>
          <div className="generator__password">
            <h3>Пароль</h3>
          </div>
          <div className="wraperForm-group">
            <div className="form-group">
              <label htmlFor="password-strenght">Длина пароля</label>
              <input className="range"
                type="range"
                id="password-strenght"
                name="password-strenght"
                max="20"
                min="8" />
            </div>
            <button className="copy__btn">Kопировать</button>
          </div>
          <div className="wraperForm-group">
            <div className="form-group">
              <label htmlFor="uppercase-letters">Прописные буквы</label>
              <input className="options"
                type="checkbox"
                id="uppercase-letters"
                name="uppercase-letters"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lowercase-letters">Строчные буквы</label>
              <input className="options"
                type="checkbox"
                id="lowercase-letters"
                name="lowercase-letters"
              />
            </div>
            <div className="form-group">
              <label htmlFor="include-numbers">Цифры</label>
              <input className="options"
                type="checkbox"
                id="include-numbers"
                name="include-numbers"
              />
            </div>
            <div className="form-group">
              <label htmlFor="include-symbols">Символы</label>
              <input className="options"
                type="checkbox"
                id="include-symbols"
                name="include-symbols"
              />
            </div>
          </div>
          <button className="generator__btn">Сгенерировать</button>
        </div>
      </div>
    </div>
  );
}

export default App;
