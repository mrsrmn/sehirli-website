/* @refresh reload */
import { Route, Router, Routes } from '@solidjs/router';
import { render } from 'solid-js/web';

import styles from './App.module.css';
import './index.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Agreement from './pages/agreement';
import Contact from './pages/contact';
import Home from './pages/home';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      <div class={styles.page}>
        <Header />
        <main>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/sozlesme" component={Agreement} />
            <Route path="/ulas" component={Contact} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  ),
  root!
);
