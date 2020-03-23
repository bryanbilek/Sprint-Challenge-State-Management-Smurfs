import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import Loader from "react-loader-spinner";

const GetSmurfs = props => {

  const handleSmurf = e => {
    e.preventDefault();
    props.fetchSmurfs();
  };

  return (
    <div className="get-smurfs">
      <h1 className="list-smurfs">Smurfs List!</h1>
      {props.isFetching && (
        <>
          <p className="is-fetching-msg">Getting Smurfs...</p>
          <Loader
            type="Puff"
            color="blue"
            height={100}
            width={100}
            timeout={3000}
          />
        </>
      )}
      <div>
        {props.smurfs.map(smurf => (
          <p className="smurfs" key={smurf.id}>
            Name: {smurf.name}, Age: {smurf.age}, Height: {smurf.height}
          </p>
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button className="get-smurfs-button" onClick={handleSmurf}>
        Get Smurfs!
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(GetSmurfs);