var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return this.state = {
      name: this.props.contact.firstName,
      lastName: this.props.contact.lastName,
      email: this.props.contact.email
    }
  },

  onChangeFormInputHandler(field, value) {
    this.state[field] = value;

    this.setState(this.state);
  },

  addContact(e) {
    e.preventDefault();
    
    this.props.addContact({
      firstName: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email
    });
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.state.name,
          onChange: function(e) { this.onChangeFormInputHandler('name', e.target.value); }.bind(this)
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.state.lastName,
          onChange: function(e) { this.onChangeFormInputHandler('lastName', e.target.value); }.bind(this)
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.state.email,
          onChange: function(e) { this.onChangeFormInputHandler('email', e.target.value); }.bind(this)
        }),
        React.createElement('button', {type: 'submit', onClick: this.addContact}, "Dodaj kontakt")
      )
    )
  },
})
