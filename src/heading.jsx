// const Heading = function (props) {
//     console.log(props);
//     return <h1> saurav </h1>;

// };

// function Heading(props) {
//   console.log(props);
//   return <h1> saurav </h1>;
// }

const Heading = (props) => {
  console.log(props);
  return <h1> {props.name} </h1>;
};

export default Heading;
