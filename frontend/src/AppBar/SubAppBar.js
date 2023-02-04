import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLocation, useNavigate, useMatch } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const data = {
  '/category': {
    name: '카테고리',
  },
  '/login': {
    name: '로그인',
  },
  '/signup': {
    name: '회원가입',
  },
  '/wishlist': {
    name: '장바구니',
  },
  '/post/join': {
    name: '상품등록',
  },
  // 결제도 추가하기
};

export default function SubAppBar() {
  const pageUrl = useLocation();
  const navigate = useNavigate();
  const pageName = data[pageUrl.pathname];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{ textAlign: 'start' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 2 }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pageName && pageName.name}
          </Typography>
          {useMatch('/stores/:storeId') && (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="search"
            >
              <MoreVertIcon />
            </IconButton>
          )}
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
