import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobURL, setJobURL] = useState("");
  const [appStatus, setAppStatus] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.formControl}
      >
        <DialogTitle id="form-dialog-title">Job Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            id="companyName"
            label="Company"
            type="text"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="position"
            label="Position"
            type="text"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="jobLocation"
            label="Location"
            type="text"
            value={jobLocation}
            onChange={(e) => {
              setJobLocation(e.target.value);
            }}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="jobURL"
            label="Link"
            type="url"
            value={jobURL}
            onChange={(e) => {
              setJobURL(e.target.value);
            }}
            fullWidth
          />

          <TextField
            margin="dense"
            id="outlined-textarea"
            label="Job Description"
            multiline
            variant="outlined"
            value={jobDescription}
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

/*<FormControl>
<InputLabel id="demo-simple-select-label">Status</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={appStatus}
  onChange={handleChange}
  variant="outlined"
  fullWidth
>
<MenuItem value=''>
  <em>None</em>
</MenuItem>
<MenuItem value='Wishlist'>Wishlist</MenuItem>
<MenuItem value='Applied'>Applied</MenuItem>
<MenuItem value='Interview'>Interview</MenuItem>
<MenuItem value='Offered'>Offered</MenuItem>
<MenuItem value='Rejected'>Rejected</MenuItem>
</Select>
</FormControl>
<br/>
*/