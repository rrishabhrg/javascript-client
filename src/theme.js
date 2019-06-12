import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Comic Sans MS',
      'cursive',
      'sans-serif',
    ].join(','),
    fontSize: 11,
  },
  raisedButton: {
    textColor: '#09054A',
    primaryTextColor: '#09054A',
  },
});

export default theme;
