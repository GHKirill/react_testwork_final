import { Routes, Route, Navigate } from 'react-router-dom';
import { TweetsPage } from 'Pages/TweetsPage.jsx';
import { HomePage } from 'Pages/HomePage.jsx';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
