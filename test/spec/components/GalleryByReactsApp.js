'use strict';

describe('GalleryByReactsApp', () => {
  let React = require('react/addons');
  let GalleryByReactsApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GalleryByReactsApp = require('components/GalleryByReactsApp.js');
    component = React.createElement(GalleryByReactsApp);
  });

  it('should create a new instance of GalleryByReactsApp', () => {
    expect(component).toBeDefined();
  });
});
