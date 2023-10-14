import "./Register.css";

export default function Register() {
  return (
    <>
      <div className="register-form">
        <div>Register</div>
        <h2>Your Details</h2>
        <input placeholder="Name"></input>
        <input placeholder="Blood Group"></input>
        <input placeholder="something"></input>
        <input placeholder="something"></input>
        <input placeholder="something"></input>
        <input placeholder="something"></input>
        <input placeholder="something"></input>
        <input placeholder="something"></input>
        <div>
            <div>Doctor</div>
          <input placeholder="Doctor" type="checkbox"></input>
          <div>Patient</div>
          <input placeholder="Patient" type="checkbox"></input>

        </div>
      </div>
    </>
  );
}
