import React from "react";
import { moneyFormat } from "../helpers";

function Header({ money, total }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          <span>${moneyFormat(money - total)}</span> harcanacak paranız kaldı.
        </div>
      )}
      {total === 0 && (
        <div className="header">
          <span>${moneyFormat(money)}</span> harcanacak paranız var.
        </div>
      )}
      {money - total === 0 && (
        <div className="header empty">
          Paran bitti, parasız insan boş insandır!
        </div>
      )}
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          background: linear-gradient(to bottom, #ff4d4d, #ff3838);
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 24px;
          letter-spacing: 1px;
        }
        .header.empty {
          background: linear-gradient(to bottom, #b82020, #be1414);
        }
        .header span {
          margin: 0 10px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default Header;
