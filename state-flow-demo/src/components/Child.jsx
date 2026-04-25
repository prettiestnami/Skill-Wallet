function Child(props) {
  return (
    <div>
      <h3>Child Component</h3>

      <p>{props.message}</p>

      <button onClick={props.updateMessage}>
        Update Message
      </button>
    </div>
  );
}

export default Child;