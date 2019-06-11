import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Comic Sans MS',
      'cursive',
      'sans-serif',
    ].join(','),
    fontSize: 20,
  },
  raisedButton: {
    textColor: '#09054A', // this should work
    primaryTextColor: '#09054A', // or this if using `primary` style
  },
});

export default theme;
