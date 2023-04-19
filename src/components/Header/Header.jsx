import React from 'react';
import styles from './Header.module.css';
import { FaMoon } from 'react-icons/fa';
import { RiSunFill } from 'react-icons/ri';
import { useDarkMode } from '../../context/DarkModeContext';

const Header = ({ filter, filters, onFilterChange }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.darkmode}>
        {darkMode ? <RiSunFill /> : <FaMoon />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${filter === value && styles.selected}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
