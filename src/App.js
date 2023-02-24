import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <img
            className="dp"
            src="https://i.pinimg.com/564x/ab/94/b5/ab94b52be1a966989f85e15b28e49b98.jpg"
          />
          <div className="title">
            <h3>Anne Instagram</h3>
            <p> @anngram</p>
          </div>
          <div className="correct">
            <img className="tick" src="./checkmark.png" />
          </div>
        </div>

        <div className="connect">
          <p>
            <span>+</span> Connect other account
          </p>
        </div>

        <hr className="solid" />

        <div className="icons">
          <div className="option">
            <div>
              <p>
                <MdOutlineSupport className="pd" /> Support
              </p>
            </div>
            <div>
              <p>
                <BsStar className="pd" /> Upgrade
              </p>
            </div>
          </div>

          <div className="option">
            <div>
              <p>
                <FiSettings className="pd" /> Settings
              </p>
            </div>
            <div>
              <p>
                <TbLogout className="pd" /> Log out
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="small-card">
        <div className="row">
          <img
            className="dp"
            src="https://i.pinimg.com/564x/ab/94/b5/ab94b52be1a966989f85e15b28e49b98.jpg"
          />
          <div className="title">
            <h4>Anne Instagram</h4>
            <p> @anngram</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
