import React from "react";

const Collect = ({ handleSubmit }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <button onClick={handleSubmit} style={{ padding: '10px 20px', backgroundColor: '#90ee90', border: 'none', borderRadius: '20px', color: '#fff', fontSize: '18px' }}>
        Continue
      </button>
    </div>
  );
};

export default Collect;
