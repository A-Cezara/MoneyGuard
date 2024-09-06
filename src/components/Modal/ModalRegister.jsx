import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import { Link } from 'react-router-dom';
import PasswordInput from 'components/PasswordInput';

export default function ModalRegister({ header }) {
  const imagePath = '/images/MGlogo.svg';
  return (
    <div className={styles.overlayRegister}>
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
                <path
                  d="M12.0001 15C8.83002 15 6.01089 16.5306 4.21609 18.906C3.8298 19.4172 3.63665 19.6728 3.64297 20.0183C3.64785 20.2852 3.81546 20.6219 4.02546 20.7867C4.29728 21 4.67396 21 5.42733 21H18.5729C19.3262 21 19.7029 21 19.9747 20.7867C20.1847 20.6219 20.3523 20.2852 20.3572 20.0183C20.3635 19.6728 20.1704 19.4172 19.7841 18.906C17.9893 16.5306 15.1702 15 12.0001 15Z"
                  fill="white"
                  fill-opacity="0.4"
                />
                <path
                  d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z"
                  fill="white"
                  fill-opacity="0.4"
                />
              </svg>
              <input
                type="name"
                placeholder="Name"
                className={styles.input}
                required
              />
            </div>
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
            <div className={styles.inputContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_7_119)">
                  <path
                    d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                    fill="white"
                    fill-opacity="0.4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_119">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input
                type="password"
                placeholder="Confirm Password"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.buttons}>
              <Link to="/MoneyGuard/RegisterPage" className={styles.button}>
                Register
              </Link>
              <Link
                to="/MoneyGuard/"
                className={`${styles.button} ${styles.secondary}`}
              >
                Log in
              </Link>
            </div>
          </form>
        </main>
      </dialog>
    </div>
  );
}
