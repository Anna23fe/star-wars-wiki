import React from 'react';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';
import ErrorComponent from '../ErrorComponent';
import SwapiService from '../../services/SwapiService';

const Row = ({left, right}) => {
    return (
        <div className="row">
            <div className="col">
                {left}
            </div>
            <div className="col">
               {right}
            </div>
        </div>
    )
}

export default class PeoplePage extends React.Component {
    swapi = new SwapiService();

    state= {
        selectedPerson: 3
    }

    componentDidCatch() {
        this.setState({ error: true});
    }

    onPersonSelect = (id) => {
        this.setState({
            selectedPerson: id,
        });  
    }
    
    
    
    render(){
        if (this.state.error){
            return <ErrorComponent />
        }
         
        const itemsList = ( <ItemsList 
            onItemClick={this.onPersonSelect} 
            getData={this.swapi.getAllPeople}
            renderItem={(item) => `${item.gender}, ${item.mass}`} />);


        const detailsInfo = ( <DetailsInfo personId={this.state.selectedPerson} />);
        return (
        <div className="PeoplePage">
            <Row left={itemsList} right={detailsInfo} />
        </div>
        )

    }  
}