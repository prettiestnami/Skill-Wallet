function Display(props) {
  return (
    <div>
      <h3>Display Component</h3>

      <p>Current Message: {props.message}</p>
    </div>
  );
}

export default Display;