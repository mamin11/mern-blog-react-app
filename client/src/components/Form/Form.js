import React, {useState} from 'react';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', subTitle: '', message: '', selectedFile: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create A post</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
                <TextField name="subTitle" variant="outlined" label="SubTitle" fullWidth value={postData.subTitle} onChange={(e) => setPostData({ ...postData, subTitle: e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;