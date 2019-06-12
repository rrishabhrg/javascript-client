import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

export const MyContext = React.createContext();

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

class SnackbarProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: '',
      status: '',
    };
  }

  openSnackBar = (message, status) => {
    this.setState({
      open: true,
      message,
      status,
    });
  }

  closeSnackBar = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    const { open, message, status } = this.state;
    const { children, classes } = this.props;
    return (
      <React.Fragment>
        <MyContext.Provider
          value={{
            onClick: this.openSnackBar,
            message,
            status,
          }}
        >
          { children }
        </MyContext.Provider>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={open}
          message
          status
          autoHideDuration={5000}
          onClose={this.closeSnackBar}
          className={classes.root}
        >
          <SnackbarProvider
            onClose={this.closeSnackBar}
            variant="success"
            message="This is a success message!"
          />
        </Snackbar>
      </React.Fragment>
    );
  }
}

SnackbarProvider.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.func,
};

SnackbarProvider.defaultProps = {
  classes: undefined,
  children: undefined,
};

export default withStyles(styles)(SnackbarProvider);
