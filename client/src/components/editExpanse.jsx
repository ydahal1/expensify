import React from "react";
const EditExpenses = props => {
  console.log(props);
  return (
    <div>
      <p>
        {" "}
        This is a edit expanse page. We are updating : {
          props.match.params.id
        }{" "}
      </p>
    </div>
  );
};

export default EditExpenses;
