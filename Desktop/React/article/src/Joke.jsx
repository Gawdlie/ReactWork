export default function Joke(props) {

    return (
    <>
      <h1>{props.setup}</h1>
      <p>{props.punch}</p>
      <hr />
    </>
  );
}
