import React, { useState } from "react";
import "./diagram.css";

function Diagram() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);

  const toggleModal1 = () => {
    setModal1(!modal1);
  };
  const toggleModal2 = () => {
    setModal2(!modal2);
  };
  const toggleModal3 = () => {
    setModal3(!modal3);
  };
  const toggleModal4 = () => {
    setModal4(!modal4);
  };
  const toggleModal5 = () => {
    setModal5(!modal5);
  };

  return (
    <>
      <div className="diagram">
        <div className="diagram-btn btn-1" onClick={toggleModal1}>
          1
        </div>
        <div className="diagram-btn btn-2" onClick={toggleModal2}>
          2
        </div>
        <div className="diagram-btn btn-3" onClick={toggleModal3}>
          3
        </div>
        <div className="diagram-btn btn-4" onClick={toggleModal4}>
          4
        </div>
        <div className="diagram-btn btn-5" onClick={toggleModal5}>
          5
        </div>
      </div>

      {modal1 && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal1}></div>
          <div className="infobox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
              className="btn-close"
              onClick={toggleModal1}
            >
              <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
            </svg>
            <h2 className="infobox-title">Dendrites</h2>
            <p className="infobox-desc">
              Dendrites are part of the neuron's input zone and recieve all
              incoming information from presynaptic axon terminals via synapses.
              This information is transmitted to the cell body. Dendritic spines
              are small projections on the surface of dendrites that form
              connections to other neurons.
            </p>
          </div>
        </div>
      )}

      {modal2 && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal2}></div>
          <div className="infobox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
              className="btn-close"
              onClick={toggleModal2}
            >
              <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
            </svg>
            <h2 className="infobox-title">Cell Body</h2>
            <p className="infobox-desc">
              The cell body (aka the soma) is part of the neuron's integration
              zone and contains the nucleus. Integrating the information from
              the dendrites, the cell body decides whether to trigger the action
              potential and send signals to other neurons.
            </p>
          </div>
        </div>
      )}

      {modal3 && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal3}></div>
          <div className="infobox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
              className="btn-close"
              onClick={toggleModal3}
            >
              <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
            </svg>
            <h2 className="infobox-title">Axon</h2>
            <p className="infobox-desc">
              The axon is part of the neuron's conduction zone. When an action
              potential is triggered, the axon carries electrical signals toward
              the terminal buttons. The axon often splits into multiple branches
              which are called axon collaterals. The axon is also responsible
              for transporting substances to and from the axon terminals in a
              process known as axonal transport.
            </p>
          </div>
        </div>
      )}

      {modal4 && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal4}></div>
          <div className="infobox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
              className="btn-close"
              onClick={toggleModal4}
            >
              <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
            </svg>
            <h2 className="infobox-title">Myelin Sheath</h2>
            <p className="infobox-desc">
              The mylein sheath functions as a protective and insulating layer
              around the neuron. It also allows for faster transmission of
              electrical impulses. However, damage to the myelin sheath may
              result in a demyelinating disease, the most common being multiple
              scelorosis. In 2020, multiple sceloris was estimated to have
              affected 2.8 million people (Walton et al., 2020). There is no
              cure for multiple scelorosis and its etiology is not well
              understood.
            </p>
          </div>
        </div>
      )}

      {modal5 && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal5}></div>
          <div className="infobox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
              className="btn-close"
              onClick={toggleModal5}
            >
              <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
            </svg>
            <h2 className="infobox-title">Axon Terminals</h2>
            <p className="infobox-desc">
              Axon terminals (aka synaptic buttons) are part of the neuron's
              output zone. They are responsible for releasing neurotransmitters
              across the synapse to other neurons.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Diagram;
