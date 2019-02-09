import React, { Component } from "react";
import MockData from "./MockData";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: MockData
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const newContact = e.target.value;
    this.setState({ newContact });
  }

  render() {
    const ContactElement = MockData.map(contact => this.renderDetail(contact));

    return (
      <div className="app">
        <div className="header">
          <span className="header_branding">
            <img
              src="https://hyf-contacts.netlify.com/static/media/logo.4b7bec3b.svg"
              width="35"
              heigth="35"
              className="header_logo"
              alt="contacts app logo"
            />
            <h1 className="header__title">Contacts</h1>
            <span className="header_actions">
              <span className="btn">
                <i className="btn_icon fas fa-plus" />
                <span className="btn_laber">Create Contact</span>
              </span>
            </span>
          </span>
        </div>
        <div className="main">
          <div className="clist">
            <div className="clist__search">
              <span className="clist__searchIcon">
                <i className="fas fa-search" />
              </span>
              <input
                className="clist__searchInput"
                type="search"
                placeholder="Search"
                value={this.state.contacts}
                onChange={this.handleSearch}
              />
            </div>
          </div>
        </div>
        <div className="clist_contacts">
          <div className="clist_contact active">
            {ContactElement}
            <div className="clist_icon">
              <img src="/profiles/male-1.jpg" alt="" />
              <span className="details__lastName">Ron</span>
              <span className="details__lastName">Brookes</span>
            </div>
          </div>
        </div>
        <div className="details__info">
          <div className="details__row">
            <label className="details__label">Mobile</label>
            <span className="details__text">(530) 4689217</span>
          </div>
          <div className="details__row">
            <label className="details__label">Telephone</label>
            <span className="details__text">(301) 8210933</span>
          </div>
          <div className="details__row">
            <label className="details__label">Email</label>
            <span className="details__text">rbrookes0@timesonline.co.uk</span>
          </div>
          <div className="details__row">
            <label className="details__label">Home Address</label>
            <span className="details__text">38816 Weeping Birch Park</span>
          </div>
        </div>
      </div>
    );
  }
  renderDetail(contact) {
    return (
      <div
        key={contact.id}
        className={contact.active ? "clist__contact active" : "clist__contact"}
      >
        <div className="clist__icon">
          <img
            src={contact.profileImage}
            alt={contact.firstName + " " + contact.lastName}
          />
        </div>
        <div className="clist__name">
          <span className="clist__firstName">{contact.firstName}</span>
          <span className="clist__lastName">{contact.lastName}</span>
        </div>
      </div>
    );
  }
}

export default App;
