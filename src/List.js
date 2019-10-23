import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => (
            <li key={index}>{item}<button>EDIT</button>
                <input value={item}></input>
            </li>
        )
      )
    }
  </ul>
);

export default List;