import {InputAdornment, TextField} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        'margin-top': 0,
        'margin-bottom': 0,

        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'grey',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'white',
        },

        '&& .searchIcon': {
            color: 'grey',
        },
        '&:hover': {
            '&& .searchIcon': {
                color: 'white',
            },
        },
        '& .Mui-focused .searchIcon': {
            color: 'white',
        },
    },
}));

export function Search() {
    const classes = useStyles();

    return (
        <div>
            <TextField
                placeholder="Поиск..."
                margin="normal"
                className={classes.root}
                InputProps={{
                    style: {color: '#fff'},
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon className="searchIcon" />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
}
