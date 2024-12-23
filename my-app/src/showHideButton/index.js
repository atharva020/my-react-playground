import React, { useState } from "react";

const ShowHideButton = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      index
      <button onClick={() => setVisible((visible) => !visible)}>
        Show/Hide
      </button>
      {visible ? <h1>Visible</h1> : null}
    </div>
  );
};

export default ShowHideButton;
