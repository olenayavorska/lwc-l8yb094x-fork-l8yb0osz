import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
     orderItems = [
        {
            Id: 1,
            Name: 'Some soup',
            Price: '4',
        },
        {
            Id: 2,
            Name: 'Potato',
            Price: '4',
        },
        {
            Id: 3,
            Name: 'Cappuchino',
            Price: '2',
        },
        
    ];
     @track quantity = 0;

    incrementClick(event){
        this.quantity++;
    }
    decrementClick (event){
        this.quantity > 0 && this.quantity--;
    }
}
