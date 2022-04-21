import React, { FC, Fragment } from "react";

const PaybackTab: FC<{}> = () => {
  return (
    <Fragment>
      <div className="mb-5">
        <h3>Deposit</h3>
        <div className="flex flex-row">
          <button name="deposit" className="deposit basis-1/4">
            {`UCD`}
          </button>
          <input type="text" className="bg-[#ce8d3e] h-10 w-full !pl-28"/>
        </div>
      </div>

      <div className="mb-3">
        <h3>Receive</h3>
        <div className="flex flex-row">
          <input type="text" className="bg-[#d8a064] h-10 w-full" placeholder="STABL3:"/>
        </div>
      </div>

      <div>
        
        <div className="flex justify-center mt-10">
          <button className="w-60">
            {`EXCHANGE`}
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default PaybackTab;