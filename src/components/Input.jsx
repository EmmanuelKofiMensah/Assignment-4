const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      class={props.class}
    />
  );
};

export default Input;
