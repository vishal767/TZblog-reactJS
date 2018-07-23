import React ,{Component} from 'react';
import $ from 'jquery';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, } from 'reactstrap';

export class MainStory extends Component {
  componentDidMount(){
    $.fn.addClassSVG = function(className) {
  $(this).attr('class', function(index, existingClassNames) {
    return existingClassNames + ' ' + className;
  });
  return this;
}

$.fn.removeClassSVG = function(className) {
  $(this).attr('class', function(index, existingClassNames) {
    var re = new RegExp(className, 'g');
    return existingClassNames.replace(re, '');
  });
  return this;
}

$.fn.toggleClassSVG = function(className) {
  var elClass = $(this).attr('class'),
      re = new RegExp(className, 'g');
  if (re.test(elClass)) {
    $(this).removeClassSVG(className);
  } else {
    $(this).addClassSVG(className);
  }
  return this;
}
$('svg').on('click', function() {
  console.log("das");
  $(this).toggleClassSVG('minus');
});
  }
  componentDidUpdate(){

    $('svg').on('click', function() {
      console.log("das");
      $(this).toggleClassSVG('minus');
    });
  }
  render() {
    return (
      <div className="Main-story col-md-6">
        <hr/>

        <br/>
        <br />
        <div className="Main-heading">
          <div className="date-auth">12 November,2017 . Vishal J</div>
          <h1>This is my first test story</h1>
          <div className="social-icons">
            <i class="fa fa-facebook" aria-hidden="true"></i>.
            <i class="fa fa-twitter" aria-hidden="true"></i>.
            <i class="fa fa-instagram" aria-hidden="true"></i>.
            <i class="fa fa-pinterest" aria-hidden="true"></i>
          </div>
          <br/>
          <img src="https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" className="blog-img" alt="blog-title-img"/>
          <div className="img-caption">Blog-title image description copyright courtesy 12 November ,2017. Taken by Author Name </div>
          <div className="blog-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend leo id mi efficitur, eu consequat metus congue. Mauris velit augue, sodales nec facilisis quis, aliquam et nibh. Sed ullamcorper diam quis lorem condimentum gravida. Nunc sit amet nisl justo. Sed vitae porttitor augue, in tempus ex. Morbi feugiat, nibh dignissim molestie egestas, nunc lorem semper purus, quis vulputate justo eros quis ligula. Aenean faucibus sem ac elementum euismod. Curabitur maximus sodales suscipit. Sed fermentum suscipit cursus. Nullam malesuada luctus eros, vel molestie metus aliquet nec. Pellentesque imperdiet nibh sit amet mollis feugiat. Donec venenatis est non fermentum euismod.</p>
            <p>Donec dignissim laoreet faucibus. Quisque congue et augue at lobortis. Maecenas lacus urna, rutrum nec nulla a, euismod suscipit velit. Maecenas sit amet erat eget ante facilisis facilisis. Integer ac pretium enim. Quisque ut blandit ligula. Donec blandit nunc eu hendrerit convallis. Nam vulputate metus lorem, at suscipit metus ullamcorper ac. Suspendisse tempor ultricies hendrerit. Praesent vulputate urna ut massa tempor, sed auctor risus iaculis. In mauris neque, ultricies sed venenatis sit amet, congue ut ex. Aliquam malesuada nisl magna, vel semper lorem ultrices nec. Donec at ante in nisl consectetur finibus.</p>
            <p>Quisque tincidunt rutrum nunc et egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, metus id placerat eleifend, lectus risus sagittis risus, quis volutpat justo ex eu risus. Aliquam ac vehicula tellus. Aenean vitae porttitor turpis, at ornare felis. Aenean luctus urna bibendum nibh volutpat, ut viverra metus commodo. Quisque et rutrum sapien, at accumsan magna. Integer efficitur felis ut elementum vulputate. Duis sit amet urna congue, feugiat mauris vitae, venenatis felis. Praesent ut mauris urna.</p>
            <p>Phasellus sed nisl ante. Maecenas condimentum tincidunt facilisis. Curabitur aliquet elit dapibus purus iaculis, ut viverra nisi sagittis. Morbi in lorem nibh. Vivamus volutpat interdum metus id volutpat. Donec rutrum tempor ante, vel ullamcorper mi efficitur eget. Vivamus in turpis nec ex suscipit molestie. Maecenas faucibus gravida urna sed consectetur. Quisque mollis ultrices sapien, vitae rhoncus nisi vulputate ut.</p>
            <p>Phasellus et nisl tempor, efficitur est eget, sagittis metus. Duis a justo et nulla mattis eleifend. Aliquam semper eu ipsum at varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque facilisis justo ac sapien convallis, ac egestas nulla dictum. Vestibulum lacus enim, consectetur vestibulum venenatis dignissim, dignissim sit amet est. Sed sed dolor sem. Nam et tellus varius tellus tristique lacinia vel at orci. Suspendisse potenti. Nunc vel ligula dapibus, lobortis elit a, pretium nibh. Nam vitae massa luctus mauris tincidunt fringilla in in sapien. In tempus ornare diam, et sodales lorem tempor eu.</p>
          </div>
        </div>
      </div>
    );
  }
}
// <div className="svg-minus">
// <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="20px"
//   	 height="20px" viewBox="0 0 400 400" enableBackground="new 0 0 400 400">
//
//   <g id="Layer_1">
//   	<rect x="175" width="50" height="400"/>
//   </g>
//   <g id="Layer_2">
//   	<rect y="175" fill="#575fcf" width="400" height="50"/>
//   </g>
// </svg>
// </div>
