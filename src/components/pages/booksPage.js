import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {

  gotService = new gotService();
  state = {
    selectedItem: 5,
    error: false
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage/>
    }

    const itemList = (
      <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => name}/>
    )

    const itemDetails = (
      <ItemDetails 
        itemId={this.state.selectedItem}
        getDates={this.gotService.getBook}>
        <Field field='numberOfPages' label='Number of pages'/>
        <Field field='publisher' label='Publisher'/>
        <Field field='released' label='Released'/>
      </ItemDetails>
    )

    return(
      <RowBlock left={itemList} right={itemDetails}/>
    )
    
  }
}