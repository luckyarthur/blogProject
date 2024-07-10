import React from 'react';

import styles from './LogInForm.module.css';

function LogInForm({ isLoggedIn, handleLogIn }) {
  const id = React.useId();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  if (isLoggedIn) {
    return (
      <p>You're already logged in!</p>
    );
  }

  return (
    <form className={styles.wrapper} onSubmit={handleLogIn}>
      <div className={styles.row}>
        <label htmlFor={`${id}-email`}>Email</label>
        <input
          required
          type="email"
          id={`${id}-email`}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor={`${id}-password`}>
          Password
        </label>
        <input
          required
          type="password"
          id={`${id}-password`}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button>Submit</button>
  </form>

  );
}


export default LogInForm;
