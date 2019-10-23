import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => (
            // <li key={index}>{item}<button>EDIT</button>
            //     <input value={item}></input>
            // </li>

            <li key={index}>
                {isEditing ? (
                    <div>
                        <input value={item}></input>
                    </div>
                ):(
                    <div>
                        <span>{item}</span><button>EDIT</button>
                    </div>
                )}
            </li>
        )
      )
    }
  </ul>
);

export default List;