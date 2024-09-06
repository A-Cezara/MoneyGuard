import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import { Link } from 'react-router-dom';
import PasswordInput from 'components/PasswordInput';

export default function Modal({ header }) {
  const imagePath = '/images/MGlogo.svg';
  return (
    <div className={styles.overlay}>
      <dialog className={styles.modal} open>
        <header className={styles.header}>
          <img
            src={`${process.env.PUBLIC_URL}${imagePath}`}
            alt="Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>{header.title}</h1>
        </header>
        <main className={styles.content}>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_7_132)">
                  <path
                    d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                    fill="white"
                    fill-opacity="0.4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_132">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input
                type="email"
                placeholder="E-mail"
                className={styles.input}
                required
              />
            </div>
            <PasswordInput />
            <div className={styles.buttons}>
              <Link to="/MoneyGuard/MainPage" className={styles.button}>
                Log in
              </Link>
              <Link
                to="/MoneyGuard/RegisterPage"
                className={`${styles.button} ${styles.secondary}`}
              >
                Register
              </Link>
            </div>
          </form>
        </main>
      </dialog>
    </div>
  );
}
