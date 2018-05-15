import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, } from 'reactstrap';

const LeftCards = (props) => {
  return (
    <div className="card-size">
      <Card>
        <CardImg top width="100%" src={props.src} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
const items =
  [
    {
      src: 'https://img.etimg.com/thumb/msid-64156134,width-643,imgsize-90826,resizemode-4/nokia-7-plus-review-thin-bezels-6-inch-full-hd-screen-the-device-wows-with-a-big-screen-experience.jpg',
      heading: 'Trending Blog 1',
      caption: 'caption 1',
      text: "The recently-launched Nokia 7 Plus runs the 'Android One' platform -- the unmodified Android operating system (OS) with a promise of improved security via frequent updates. "
    },
    {
      src: 'https://img.etimg.com/thumb/msid-64156134,width-643,imgsize-90826,resizemode-4/nokia-7-plus-review-thin-bezels-6-inch-full-hd-screen-the-device-wows-with-a-big-screen-experience.jpg',
      heading: 'Trending Blog 2',
      caption: 'caption 2',
      text: "The recently-launched Nokia 7 Plus runs the 'Android One' platform -- the unmodified Android operating system (OS) with a promise of improved security via frequent updates. "
    }
  ];
export class TrendCards extends Component {
  render() {
    const slides = items.map((item, index) => {
      return (
        <LeftCards title={item.heading} subtitle={item.caption} src={item.src} text={item.text}/>
      );
    });
    return (
      <div className="Cards-trends col-md-3">
        {slides}
      </div>
    );
  }
}
