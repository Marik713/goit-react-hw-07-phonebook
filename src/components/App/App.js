import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Loader from "./Loader/Loader";
import ContactForm from "./ContactForm/ContactForm";
import titleTransition from "../../transitions/title.module.css";
import filterTransition from "../../transitions/filter.module.css";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className="mainContainer">
        <CSSTransition
          in={true}
          timeout={500}
          classNames={titleTransition}
          appear={true}
        >
          <h1 className="mainTitle">Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        <CSSTransition
          in={true}
          timeout={250}
          unmountOnExit
          classNames={filterTransition}
        >
          <Filter />
        </CSSTransition>
        {this.props.isLoadingContacts && <Loader />}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
