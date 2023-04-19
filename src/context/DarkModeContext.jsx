import { createContext, useContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    // APP이 마운트 될때 딱 한 번 실행됨
    // 유저가 마지막에 사용한 theme을 기억해서 보여줌
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark); // provider
    updateDarkMode(isDark); // html에 class를 넣을지말지 판단하는 함수
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const updateDarkMode = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
  // html 태그에 dark 클래스를 넣었다가, 제거했다가 해주는 함수
  // localStorage에도 저장
};

export const useDarkMode = () => useContext(DarkModeContext);
