import React from "react";
import ProgressBar from "./ProgressBar";

const Monster = () => {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2 offset-sm-3'>
            <img
              className='img-fluid'
              src='http://res.publicdomainfiles.com/pdf_view/67/13925387417373.png'
              alt='monster'
            />
          </div>

          <ProgressBar
            pv='800'
            pvMax='800'
            bgType='bg-danger'
            faType='fa-heart'
            barName=' : pv'
          />
        </div>
      </div>
    </section>
  );
};

export default Monster;
