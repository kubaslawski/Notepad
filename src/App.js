import logo from './logo.svg';
import './App.css';
//COMPONENTS
import AddNote from './components/AddNote';
import Notes from './components/Notes';
//MUI
import Grid from '@material-ui/core/Grid';
//REDUX
import {connect, Provider} from 'react-redux';
import store from './redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <Grid container className="container">
        <Grid item xs={1}/>
        <Grid item xs={10}>
          <AddNote/>
          <Grid container className="container">
            <Notes/>
          </Grid>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
    </Provider>
  )
}

export default App;