/* tutorial react
https://es.reactjs.org/docs/thinking-in-react.html
<FilterableProductTable products={ PRODUCTS } />
*/

import React from 'react';
//import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import CitiesTable from './CitiesTable';
import SearchBarRedux from './SearchBarRedux';
import CitiesTableRedux from './CitiesTableRedux';
import '../../css/citiesNew.css';

class FilterableCitiesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
     
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        {/*}
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <CitiesTable
          //remoteCities={this.props.remoteCities}
          filterText={this.state.filterText}
        />
        */}
        <SearchBarRedux />
        <CitiesTableRedux />
      </div>
    );
  }
}
/*
const mapStateToProps = (state) => {
  return {
    filterText2: state.filterText2
    //onFilterText2Change: state.onFilterText2Change
  };
}
*/
//export default connect(mapStateToProps)(FilterableCitiesTable);
export default FilterableCitiesTable;