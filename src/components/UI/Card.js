import "./Card.css";

const Card=(props) =>{
  const classes = "card " + props.className;
  // this is the whole syntax to add any sort of class in our Card 

  return <div className={classes}>{props.children}</div>;
  // props.children is basically allow us to add other custom componet inside of our Card.
}
export default Card;
