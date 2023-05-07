import { LightningElement ,api, wire, track} from 'lwc';
import getBirthdayList from '@salesforce/apex/UAF_Birthdate_Report_Controller.BirthdayReport';
export default class reportDemo1LWC extends LightningElement {
    @track columns = [{
            label: 'First Name',
            fieldName: 'FirstName',
            type: 'text',
            sortable: true
        },
        {
            label: 'Last Name',
            fieldName: 'LastName',
            type: 'text',
            sortable: true
        },
        {
            label: 'Email',
            fieldName: 'Email',
            type: 'text',
            sortable: true
        }
    ];
 
    @track error;
    @track conList ;
    @wire(getBirthdayList)
    wiredContacts({
        error,
        data
    }) {
        if (data) {
            this.conList = data;
        } else if (error) {
            this.error = error;
        }
    }
}