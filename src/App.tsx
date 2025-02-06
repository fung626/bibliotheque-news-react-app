import './App.css';
import AppContent from './components/AppContent';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="wrapper d-flex flex-column bg-slate-50 min-h-screen">
      <AppHeader />
      <div className="body flex-grow-1 pt-[112px] md:pt-[120px] lg:mx-[24px] xl:mx-[214px]">
        <AppContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
