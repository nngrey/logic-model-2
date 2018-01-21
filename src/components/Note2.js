import React from 'react';

const Note = ({children, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

// Destructuring: These are the same...

// export default ({task}) => <div>{task}</div>;
// export default (props) => <div>{props.task}</div>;

export default Note;
