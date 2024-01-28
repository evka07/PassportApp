const express = require('express');
const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/no-permission');
  } else {
    next();
  }
};

router.get('/logged', isAuthenticated, (req, res) => {
  const loggedUser = {
    userName: req.user.displayName,
    img: req.user.photos[0].value,
  };
  res.render('logged', { loggedUser: loggedUser });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  res.render('userProfile');
});

router.get('/profile/settings', (req, res) => {
  res.render('userProfileSettings');
});

module.exports = router;
