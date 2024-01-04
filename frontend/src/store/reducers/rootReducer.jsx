// rootReducer.js
import { combineReducers } from 'redux';
import botReducer from './botReducer.jsx';
import mobileViewReducer from './mobileViewReducer.jsx';
import certificationsReducer from './certificationsReducer.jsx';
import dataReducer from './dataReducer.jsx';

const rootReducer = combineReducers({
  chatbot: botReducer,
  mobileView:mobileViewReducer,
  certifications:certificationsReducer,
  data:dataReducer 
  // other reducers...
});

export default rootReducer;
