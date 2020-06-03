/* Components that fetches json response from IBM Api with user input */
import React from 'react'
const base64 = require('base-64');

class FetchDomiciliarioInfo extends React.Component {
    state = {
        loading: true
    }
    async componentDidMount() {
        const url = "https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/7de3d44f-6f7b-4f57-82c8-d71424b89af6/v3/profile?version=2017-10-13/v3/profile?version=2017-10-13&consumption_preferences=true&raw_scores=true";
        const h = new Headers();
        const apikey = "LjnSYRYozfZzM1ij0HGeVLRWZTuNWbpTRnWcasXN7MAw"
        h.append('Accept', 'application/json');
        h.append('Authorization', 'Basic ' + 
        base64.encode('')

        const request = new Request(url, {
            method: 'GET',
            headers: h,
            credentials: 'same-origin'
        })
        const response = await fetch(url);
        const data = await response.json()
        console.log(data.results)


    }
    render () {
        return (
        <div>
            if ({this.state.loading}) {
                <div>Loading</div>
            } else {
                <div>person</div>
            }


        </div>
        )
    }
}

export default FetchDomiciliarioInfo

