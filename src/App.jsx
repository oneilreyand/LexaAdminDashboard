import './App.css'
import {useEffect, useRef} from 'react'
import Router from './router'
import useOnline from './hooks/useOnline';
import useSnackbar from './hooks/useSnackbar';

function App() {

  const { isOnline } = useOnline();
  const prevOnlineRef = useRef(navigator.onLine);
  const { showWarning } = useSnackbar();

  useEffect(() => {
    if (!isOnline && prevOnlineRef.current) {
      console.log('Showing warning snackbar');
      showWarning("Koneksi internet terputus");
    } else {
      console.log('No need to show warning snackbar');
    }
    prevOnlineRef.current = isOnline;
  }, [isOnline, showWarning]);

  return (
    <>
      <Router/>
    </>
  )
}

export default App
