import React from 'react';

import './DetailsInfo.css';

// import ErrorTest from '../ErrorTest';
import SwapiContext from '../SwapiServiceContext';

export default class DetailsInfo extends React.Component {

    static contextType = SwapiContext;

    state = {
        item: null
    }
    
    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if(!itemId){
            return;
        }
        // this.context.getItem(itemId).then((item) => {
        //     this.setState({item});
        // })
        getData(itemId).then((item) => {
            this.setState({item});
        })
    }

    render() {

        const { item } = this.state;

        if (!item){
            return <p>please, select an item</p>
        }

        const { id, name } = item;
        const { info, imgRef } = this.props;

        const elements = info.map((key) => {
            return (
                <li key={key}>
                    <span>{key} </span>
                    <span>{item[key]}</span>
                </li>
            );
        });


        return(
            <div className="DetailsInfo">
                <h3>{name}</h3>
                <div className="d-flex info_block">
                    <img
                        alt="item"
                        src={imgRef + `${id}.jpg`}
                        onError={e => { e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg' }}
                    />
                    <ul className="detail_info_block">
                        {elements}
                    </ul>
                </div>
                {/* <ErrorTest /> */}
            </div>
        );

    }

}

//DetailsInfo.contextType = SwapiContext;