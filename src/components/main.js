'use strict';

var GalleryByReactsApp = require('./GalleryByReactsApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={GalleryByReactsApp}>
    <Route name="/" handler={GalleryByReactsApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
