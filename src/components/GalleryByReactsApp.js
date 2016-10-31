'use strict';

var React = require('react/addons');
//var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');

//获取图片相关的数据
var imageDatas = require("../data/imageDatas.json");

//利用自执行函数，将图片信息转成图片UPL路径信息
imageDatas = (function genImageURL(imageDatasArr){
    for(var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require("../images/" + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
		console.log("222");
    }
    return imageDatasArr;
})(imageDatas);

//imageDatas = getImageURL(imageDatasArr);等于上面

var GalleryByReactsApp = React.createClass({
  render: function() {
    return (
      <section className = "stage">
        <section className = "img-sec"></section>
        <nav className = "controller-nav"></nav>
      </section>
    );
  }
});

React.render(<GalleryByReactsApp></GalleryByReactsApp>, document.getElementById("content"));

//将需要暴露的文件暴露出去，其他文件只需要require("GalleryByREactsApp.js")
module.exports = GalleryByReactsApp;
