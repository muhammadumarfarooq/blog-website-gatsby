import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const InputField = props => {
  const {
    id,
    label,
    type,
    placeholder,
    helperText,
    handleChange,
    value,
    name,
    error,
  } = props;
  
  const cn = error ? "input-field error" : "input-field";
  return (
    <Form.Group className={cn} controlId={id}>
      <Form.Label>
        {label}
      </Form.Label>
      <Form.Control
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
      />
      {helperText && (
        <Form.Text className="helper-text">{helperText}</Form.Text>
      )}
    </Form.Group>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  helperText: PropTypes.node,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  isSolution: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  helperText: "",
  disabled: false,
  isRequired: false,
  isSolution: false,
};

export default InputField;
