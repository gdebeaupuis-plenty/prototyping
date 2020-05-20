import React from 'react';
import { Box, AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';
import './index.css';

const useStyles = makeStyles((theme) => ({
  bgGrey300: {
    backgroundColor: theme.palette.grey[500],
  },
  bgGrey200: {
    backgroundColor: theme.palette.grey[600],
  },
}));

export const Grid: React.FC = () => {
  const classes = useStyles({});
  const items = [];
  for (var i = 0; i < 1000; i++) {
    items.push('hello world');
  }

  return (
    <div className="grid-container-layout">
      <div className="navbar"></div>
      <div className="sidebar"></div>
      <div className="content">
        <div className="content-header"></div>
        <div className="content-body">
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="content-footer"></div>
      </div>
    </div>
  );
};
