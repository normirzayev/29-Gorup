import{ useState } from "react";
export const ObjCount = () => {
  const [set, setting] = useState({ count: 1 });

  function change() {
    setting({ ...set, count: set.count + 1 });
  }
  function change1() {
    if (set.count > -5) {
      setting({ ...set, count: set.count - 1 });
    }
  }

  return (
    <div>
      <button onClick={change}> plus </button>
      <h1> {set.count} </h1>
      <button onClick={change1}> minus </button>
    </div>
  );
};
