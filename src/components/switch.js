import React from "react";

export default function Switch() {
  const [state, setState] = React.useState(true);

  return (
    <a className="cursor-pointer" onClick={() => setState(t => !t)}>
      {state ? (
        <img src="https://img.icons8.com/windows/32/26e07f/toggle-on.png" alt="img"/>
      ) : (
        <img src="https://img.icons8.com/officel/32/ffffff/toggle-off.png" alt="img"/>
      )}
    </a>
  );
}
