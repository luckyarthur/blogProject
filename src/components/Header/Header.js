'use client';
import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';
import Link from 'next/link';

import Logo from '../Logo';
import VisuallyHidden from '../VisuallyHidden';
import { LIGHT_TOKENS, DARK_TOKENS, COLOR_THEME_COOKIE_NAME, } from '../../constants';
import Modal from '../Modal';
import LogInForm from '../LogInForm';

import styles from './Header.module.css';

function Header({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme);
  const [showLogInModal, setShowLogInModal] = React.useState(false);

  function handleThemeChange() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 1000,
    });

    const newTokens = newTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;
    const root = document.documentElement;

    root.setAttribute("data-color-theme", newTheme);
    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  function showLogIn() {
    setShowLogInModal(true);
  }

  function handleDismiss() {
    setShowLogInModal(false);
  }

  function handleLogIn(event) {
    console.log("handle log in");
    event.preventDefault();
    event.stopPropagation();
    setShowLogInModal(false);
  }

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />

      <div className={styles.actions}>
        <Link href="/rss.xml" className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>
            View RSS feed
          </VisuallyHidden>
        </Link>
        <button className={styles.action} onClick={handleThemeChange}>
          {theme === 'dark' ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />}
          <VisuallyHidden>
            Toggle dark / light mode
          </VisuallyHidden>
        </button>
        <button onClick={showLogIn} className={styles.action}>
            LogIn
            <VisuallyHidden>
            Toggle LogIn action
          </VisuallyHidden>
        </button>         
      </div>
      {showLogInModal && <Modal title="LogIn" handleDismiss={handleDismiss}> 
      <LogInForm isLoggedIn={false} handleLogin={handleLogIn}/>
      </Modal>}
    </header>
  );
}

export default Header;
