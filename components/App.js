var App = React.createClass({
  getInitialState: function() {
    var contacts = localStorage.getItem('contacts') 
      ? JSON.parse(localStorage.getItem('contacts'))
      : []; 

    return this.state = {
      contacts: contacts
    }
  },

  addContact(contact) {
    var contacts = this.state.contacts,
        prevId = contacts.length ? contacts[contacts.length - 1].id : 1;

    contact.id = prevId + 1;
    contacts.push(contact);

    localStorage.setItem('contacts', JSON.stringify(contacts));

    this.setState({
      contacts: contacts
    });
  },

  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm, addContact: this.addContact}),
        React.createElement(Contacts, {items: this.state.contacts}, {})
      )
    );
  }
});

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};
