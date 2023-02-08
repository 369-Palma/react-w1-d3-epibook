const Welcome = (props) => {
  return (
    <>
      <div style={{ margin: props.size * 2 + "em" }} ClassName="jumbotron ">
        <h1 ClassName="display-4">Hello, world!</h1>
        <p ClassName="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <button
          style={{
            marginTop: props.size + "em",
            backgroundColor: props.bg,
            color: props.color,
          }}
        >
          Scopri di più{" "}
        </button>
      </div>
    </>
  );
};

export default Welcome;
