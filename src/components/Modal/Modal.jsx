import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

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
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              required
            />
            <div className={styles.buttons}>
              <button type="submit" className={styles.button}>
                Login
              </button>
              <button type="button" className={styles.button}>
                Register
              </button>
            </div>
          </form>
        </main>
      </dialog>
    </div>
  );
}
