import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const EzSnackbar = ({open, close}) => {
  // console.log(open, close);
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open.open}
        autoHideDuration={5000}
        onClose={close}
      >
        <Alert onClose={close} severity="info">
            Component has not been implemenented in mock-up. Developer had no access to back-end.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default EzSnackbar;