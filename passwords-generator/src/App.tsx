import './App.css';

const App = () => {

  return (
    <>
      <h1 className='app-title'>Password generator</h1>
      <form className='form'>
        <div className='password-input'>
          <label 
            htmlFor='password'
            className='label'
          >
              Your new password
          </label>
          <input type='text' placeholder='andres123-' />
        </div>
        <button className='generate-button'>Generate</button>
      </form>
    </>
  )
}

export default App;
