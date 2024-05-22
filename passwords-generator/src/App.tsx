import { useState } from 'react';
import './App.css';
import { generatePassword } from './helpers/password';
import { Settings, SettingsInputMap } from './interfaces/password';

const settingsList: SettingsInputMap[] = [
  {
    key: 'hasLowercase',
    label: 'With lowercase'
  },
  {
    key: 'hasUppercase',
    label: 'With uppercase'
  },
  {
    key: 'hasNumbers',
    label: 'With numbers'
  },
  {
    key: 'hasSymbols',
    label: 'With symbols'
  }
];


const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [settings, setSettings] = useState(new Set([...settingsList.map(setting => setting.key)]));

  const formHandler = (event: any) => {
    event.preventDefault();

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

  const settingMap = settingsList.map(({key, label}) => 
    <div key={key}>
      <input 
        type='checkbox'
        value={key} 
        checked={settings.has(key)}
        onChange={(event) => handleSettingsChange(event) } 
      />
      <label>{label}</label>
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
          <div>
            <input 
              type='text'
              value={password}
              placeholder='sdkfjhsdf4r23-'
              disabled
            />
            <button>copy</button>
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
        >
          Generate
        </button>
      </form>
    </>
  )
}

export default App;
