const express = require('express');
const router = express.Router();
const card = require('../models/card_model');

router.get('/:card?',
 function(request, response) {
  if (request.params.card) {
    console.log('Käyttäjä antoi'+request)
    card.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    card.get(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});

router.post('/', 
function(request, response) {
  card.add(request.body, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});

router.delete('/', 
function(request, response) {
  card.delete(request.body, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(count);
    }
  });
});

router.put('/', 
function(request, response) {
  card.update(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});

module.exports = router;