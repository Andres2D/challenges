import { useRef, useState } from 'react';
import './App.css';
import { generatePassword } from './helpers/password';
import { Settings } from './interfaces/password';
import { settingsList } from './constants/constants';

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [validForm, setValidForm] = useState(true);
  const [settings, setSettings] = useState(new Set([...settingsList.map(setting => setting.key)]));
  let passwordElement = useRef<any>(null);

  const formHandler = (event: any) => {
    event.preventDefault();

    if(
      !settings.has('hasLowercase') &&
      !settings.has('hasNumbers') &&
      !settings.has('hasSymbols') &&
      !settings.has('hasUppercase') 
    ) {
      setValidForm(false);
    }

    const passwordConfiguration: Settings = {
      hasLowercase: settings.has('hasLowercase') ? true : false,
      hasNumbers: settings.has('hasNumbers') ? true : false,
      hasSymbols: settings.has('hasSymbols') ? true : false,
      hasUppercase: settings.has('hasUppercase') ? true : false,
      length
    }

    const password = generatePassword(passwordConfiguration);
    setPassword(password);
  }

  const handleSettingsChange = (event: any) => {
    const checkedId = event.target.value;
    setValidForm(true);
    if(event.target.checked) {
      setSettings(new Set([...settings, checkedId]));
    } else {
      setSettings(new Set([...settings].filter(setting => setting !== checkedId)));
    }
  };

  const handleLengthChange = (event: any) => {
    const value = event.target.value;
    setLength(value);
  }
  
  const copyToClipboard = async() => {
    const passwordValue = passwordElement?.current?.value;
    try {
      if(!passwordValue) {
        return;
      }

      await navigator.clipboard.writeText(passwordValue);
      alert('Content copied to clipboard');
    } catch (err) {
      alert('Failed to copy. try again later');
    }
  }

  const settingMap = settingsList.map(({key, label}) => 
    <div key={key}>
      <input 
        type='checkbox'
        value={key} 
        checked={settings.has(key)}
        onChange={(event) => handleSettingsChange(event) } 
        className='setting-input'
      />
      <label className='setting-label'>{label}</label>
    </div>
  )

  return (
    <>
      <h1 className='app-title'>Password generator</h1>
      <form className='form' onSubmit={formHandler}>
        <section className='password-input'>
          <label 
            htmlFor='password'
            className='label'
          >
            Your new password
          </label>
          <div className='password-group'>
            <input 
              ref={passwordElement}
              className="output-text"
              type='text'
              value={password}
              placeholder='Select at least one option'
              disabled
            />
            <button 
              type='button'
              className='copy-button'
              onClick={copyToClipboard}
            >
              copy
            </button>
          </div>
        </section>
        <section className='password-configuration'>
          {settingMap}
        </section>
        <div className='length-input'>
          <label 
            htmlFor='password'
            className='label'
          >
            Length
          </label>
          <input 
            className='length'
            type='number'
            value={length}
            onChange={handleLengthChange}
            placeholder='10'
            min={8}
            max={50}
          />
        </div>
        <button 
          className='generate-button'
          type='submit'
          disabled={!validForm}
        >
          Generate
        </button>
      </form>
    </>
  )
}

export default App;
