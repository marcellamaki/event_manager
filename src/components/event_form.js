import React from 'react';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      organizer: '',
      location: '',
      startTime: '',
      endTime: '',
      price: '',
      categories: '',
      rsvp: false
    };

  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
    console.log(event.target.value);
  }

  handleOrganizerChange = (event) => {
    this.setState({organizer: event.target.value});
    console.log(event.target.value);
  }

  handleLocationChange = (event) => {
    this.setState({location: event.target.value});
    console.log(event.target.value);
  }

  handleStartTimeChange = (event) => {
    this.setState({startTime: event.target.value});
    console.log(event.target.value);
  }

  handleEndTimeChange = (event) => {
    this.setState({endTime: event.target.value});
    console.log(event.target.value);
  }

  handlePriceChange = (event) => {
    this.setState({price: event.target.value});
    console.log(event.target.value);
  }

  handleCategoriesChange = (event) => {
    this.setState({categories: event.target.value});
    console.log(event.target.value);
  }

  handleRSVPChange = (event) => {
    this.setState({rsvp: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit = (event) => {
    console.log('The following event has been submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <p>Fields with an * are required. </p>
      <br></br>
        <label>
          Name*:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <br></br>
        <label>
          Organizer*:
          <input type="text" value={this.state.organizer} onChange={this.handleOrganizerChange} />
        </label>
        <br></br>
        <label>
          Location (as address)*:
          <input type="text" value={this.state.location} onChange={this.handleLocationChange} />
        </label>
        <br></br>
        <label>
          Start Time*:
          <input type="datetime-local" value={this.state.startTime} onChange={this.handleStartTimeChange} />
        </label>
        <br></br>
        <label>
          End Time*:
          <input type="datetime-local" value={this.state.endTime} onChange={this.handleEndTimeChange} />
        </label>
        <br></br>
        <label>
          Price ($USD) *:
          <input type="text" value={this.state.price} onChange={this.handlePriceChange} />
        </label>
        <br></br>
        <label>
          Categories/Tags:
          <input type="text-area" value={this.state.categories} onChange={this.handleCategoriesChange} />
        </label>
        <br></br>
        <label>
          RSVP required? (check for yes):
          <input type="radio" value={this.state.rsvp} onChange={this.handleRSVPChange}/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EventForm;
