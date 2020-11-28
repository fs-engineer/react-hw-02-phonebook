import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Layout from './Layout/Layout';
import Section from './Layout/Section';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = filter => this.setState({ filter: filter });

  handleChangeFilter = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  isAdded = name =>
    this.state.contacts.map(contact => contact.name).includes(name);

  handleDelBtn = id => {
    const contacts = this.state.contacts;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  };

  addContacts = (name, phone) => {
    if (this.isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            { id: uuid(), name: name, phone: phone },
          ],
        };
      });
    }
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.handleChangeFilter();

    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onAddContacts={this.addContacts} />
        </Section>

        {contacts.length ? (
          <Section title="Contacts">
            <Filter value={filter} onChangeFilter={this.changeFilter} />
            <ContactsList
              contactsData={filteredContacts}
              onDeleteBtn={this.handleDelBtn}
            />
          </Section>
        ) : null}
      </Layout>
    );
  }
}
