import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import config from './config/config';
import store from './redux/store';
import Docs from './routes/docs';
import './static/css/style.css';

const { themeColor } = config;

const ProviderConfig = () => {
  const { rtl, topMenu, mainContent } = useSelector(state => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
      mainContent: state.ChangeLayoutMode.mode,      
    };
  });

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, [setPath]);

  
  return (
    
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...themeColor, rtl, topMenu, mainContent }}>
        
          <Router basename={process.env.PUBLIC_URL}>          
              <Routes>
                <Route path="/*" element={<Docs />} />
              </Routes>    
          </Router>       
      </ThemeProvider>
    </ConfigProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default App;
