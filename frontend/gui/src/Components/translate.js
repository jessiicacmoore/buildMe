
import React, { useState } from 'react';

import { AutoComplete } from 'antd';

function onSelect(value) {
  console.log('onSelect', value);
}

// class Complete extends React.Component {
//   state = {
//     dataSource: [],
//   };

//   handleSearch = value => {
//     this.setState({
//       dataSource: !value ? [] : [value, value + value, value + value + value],
//     });
//   };

//   render() {
//     const { dataSource } = this.state;
//     return (
//       <AutoComplete
//         dataSource={dataSource}
//         style={{ width: 200 }}
//         onSelect={onSelect}
//         onSearch={this.handleSearch}
//         placeholder="input here"
//       />
//     );
//   }
// }



const Complete = () => {
    const  [dataSource, setDataSource] = useState([]);

    const handleSearch = value => {
        const newDataSource = !value ? [] : [value, value + value, value + value + value] 
        setDataSource(newDataSource);    
    };
  
    return (
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={handleSearch}
          placeholder="input here"
        />
      );
}

export default Complete;