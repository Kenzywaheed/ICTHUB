import { useEffect, useMemo, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Authentication.css";

function Authentication({ show, handleClose, action }) {
  // hna ana b7dd no30 f ana b2ol el action bta3y register gher kda hykon login
  // ana b use el useMemo 3lashan my3mlsh run w calculations kol shwya 
  const isRegister = useMemo(() => action === "Register", [action]);
  
  // login => pass w email bssss
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState(""); 
  const [thirdName, setThirdName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // el usestate dy btakhod objecttttt 3lashan ana hna b3ml set l kol el errors
  const [errors, setErrors] = useState({});

  //  hna 3lashan lw kan fe error 2w haga y3ml clean leha 3lashan myfdalsh maktob error
  useEffect(() => {
    if (!show) return;
    setErrors({});
  }, [show, action]);

  // b3ml reset lkol haga b2a
  const resetAll = () => {
    setFirstName("");
    setSecondName("");
    setThirdName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
  };

  // lma a3ml close ymsa7 kol haga
  const onClose = () => {
    resetAll();
    handleClose();
  };

  // hna b2a dy function el validationn
  const handleSubmit = (event) => {
    event.preventDefault();
    const tempErrors = {};

  
    if (!email.includes("@")) tempErrors.email = "Email must contain @";

    if (!isRegister) {
      
      // numbers bsss w max 5
      if (!/^\d{1,5}$/.test(password)) {
        tempErrors.password = "Password must be numbers only, max 5 digits";
      }
    } else {
    

      // register validationnn

      if (firstName.length < 3)
        tempErrors.firstName = "First Name must be at least 3 characters";

      if (secondName.length < 3)
        tempErrors.secondName = "Second Name must be at least 3 characters";

      if (thirdName.length < 3)
        tempErrors.thirdName = "Third Name must be at least 3 characters";

      if (!/^\d{11}$/.test(phone))
        tempErrors.phone = "Phone Number must be exactly 11 digits";

      if (password.length < 6)
        tempErrors.password = "Password must be at least 6 characters";

      // ana lazem 3andy w ana bktb el confirmpass ykon zay el ktabto fe el pass
      if (confirmPassword !== password)
        tempErrors.confirmPassword = "Confirm Password must match Password";
    }
      // lw fe error yzhar
    setErrors(tempErrors);

      //  lw mafesh error print data w close el modal
    if (Object.keys(tempErrors).length === 0) {
      console.log("Form submitted:", {
        firstName,
        secondName,
        thirdName,
        phone,
        email,
        password,
      });

      onClose();
    }
  };

  return (
    <Modal

    // open ya3ni show = true
      show={show}  
        // el * bta3t el model lma adghat 3lha close model 
      onHide={onClose}
      // model fe el center 
      centered
      dialogClassName="auth-modal"
      contentClassName="auth-content"
      backdropClassName="auth-backdrop"
    >
      <Modal.Header closeButton className="auth-header">
        <Modal.Title className="auth-title">
          {isRegister ? "REGISTER" : "Welcome Back"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="auth-body">
        <Form onSubmit={handleSubmit} noValidate className="auth-form">
          {/* Conditional Rendering */}
          {/* true && show el condition */}
          {/* false && wala haga ttnafz */}
          {/* ya3ni lw hwa register show el first name w el hagat dy */}
          {/* lw mesh register w hwa login mt3mlsh show llhagat dy */}
          {isRegister && (
            <>
              <Form.Group className="auth-group">
                <Form.Label className="auth-label">First Name</Form.Label>
                <Form.Control
                  className="auth-input"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="auth-group">
                <Form.Label className="auth-label">Second Name</Form.Label>
                <Form.Control
                  className="auth-input"
                  type="text"
                  value={secondName}
                  onChange={(e) => setSecondName(e.target.value)}
                  isInvalid={!!errors.secondName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.secondName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="auth-group">
                <Form.Label className="auth-label">Third Name</Form.Label>
                <Form.Control
                  className="auth-input"
                  type="text"
                  value={thirdName}
                  onChange={(e) => setThirdName(e.target.value)}
                  isInvalid={!!errors.thirdName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.thirdName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="auth-group">
                <Form.Label className="auth-label">Phone Number</Form.Label>
                <Form.Control
                  className="auth-input"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </>
          )}

          <Form.Group className="auth-group">
            <Form.Label className="auth-label">Email</Form.Label>
            <Form.Control
              className="auth-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="auth-group">
            <Form.Label className="auth-label">Password</Form.Label>
            <Form.Control
              className="auth-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          {isRegister && (
            <Form.Group className="auth-group">
              <Form.Label className="auth-label">Confirm Password</Form.Label>
              <Form.Control
                className="auth-input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          )}

          <Button type="submit" className="auth-submit">
            {isRegister ? "Join Now" : "Login"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Authentication;
