import React, { useState } from 'react';
import './App.css';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './characters'

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(15)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const handleGeneratePassword = (e) => {
    let characterList = ''

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters
    }

    if (includeNumbers) {
      characterList = characterList + numbers
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters
    }

    setPassword(createPassword(characterList))
  }

  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()

  }

  const handleCopyPassword = (e) => {
    copyToClipboard()
  }


  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator__header">Генератор пароля</h2>
          <div className="generator__password">
            <h3>{password}</h3>
          </div>
          <div className="wraperForm-group">
            <div className="form-group">
              <label htmlFor="password-strenght">Длина пароля</label>
              <input className="range"
                defaultValue={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
                type="range"
                id="password-strenght"
                name="password-strenght"
                max="20"
                min="10" />
            </div>
            <button
              onClick={handleCopyPassword}
              className="copy__btn">Kопировать</button>
          </div>
          <div className="wraperForm-group">
            <div className="form-group">
              <label htmlFor="uppercase-letters">Прописные буквы</label>
              <input className="options"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                type="checkbox"
                id="uppercase-letters"
                name="uppercase-letters"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lowercase-letters">Строчные буквы</label>
              <input className="options"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                type="checkbox"
                id="lowercase-letters"
                name="lowercase-letters"
              />
            </div>
            <div className="form-group">
              <label htmlFor="include-numbers">Цифры</label>
              <input className="options"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                type="checkbox"
                id="include-numbers"
                name="include-numbers"
              />
            </div>
            <div className="form-group">
              <label htmlFor="include-symbols">Символы</label>
              <input className="options"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                type="checkbox"
                id="include-symbols"
                name="include-symbols"
              />
            </div>
          </div>
          <button onClick={handleGeneratePassword} className="generator__btn">Сгенерировать</button>
        </div>
      </div>
    </div>
  );
}

export default App;