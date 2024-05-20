import { useState } from 'react';
import './App.css';

const App = () => {

  const [password, setPassword] = useState('');

  const formHandler = (event: any) => {
    event.preventDefault();
    setPassword('ksdjfkjwe786823423-.,g')
  }

  return (
    <>
      <h1 className='app-title'>Password generator</h1>
      <form className='form' onSubmit={formHandler}>
        <div className='password-input'>
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
