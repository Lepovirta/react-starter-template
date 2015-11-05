import React from 'react';

require('./amon.scss');

var Amon = React.createClass({
    render: function() {
        return (
          <div>
              <p id="errors">Maailmassa on kaikki ok<a title="Sulje ilmoitus" href="#">&#9587;</a></p>
              <div id="wrapper">
                  <h1>Kiteyttäjä</h1>
                  <form id="crystallized" method="post" action="/submit">
                      <h2>Perustiedot</h2>
                      <div className="flow">
                          <label htmlFor="company">Yrityksen nimi</label>
                          <input className="required" type="text" name="crystal[company]" id="company" autofocus="autofocus" />
                          <label htmlFor="email">Sähköposti</label>
                          <input className="email" type="email" name="crystal[email]" id="email" />
                      </div>
                      <h2>Pelilaudalle valikoituneet kortit</h2>
                      <div className="flow">
                          <div className="row">
                              <div className="col">
                                  <h3>Vihreät (otsikko)</h3>
                                  <label htmlFor="category-cards-green-1">Vihreä 1</label>
                                  <input type="text" id="category-cards-green-1" placeholder="Syötä ensimmäinen" name="crystal[category_cards_green_1]" />
                                  <label htmlFor="category-cards-green-2">Vihreä 2</label>
                                  <input type="text" id="category-cards-green-2" placeholder="Syötä tarvittaessa" name="crystal[category_cards_green_2]" />
                                  <label htmlFor="category-cards-green-3">Vihreä 3</label>
                                  <input type="text" id="category-cards-green-3" placeholder="Syötä tarvittaessa" name="crystal[category_cards_green_3]" />
                                  <label htmlFor="category-cards-green-4">Vihreä 4</label>
                                  <input type="text" id="category-cards-green-4" placeholder="Syötä tarvittaessa" name="crystal[category_cards_green_4]" />
                                  <label htmlFor="category-cards-green-5">Vihreä 5</label>
                                  <input type="text" id="category-cards-green-5" placeholder="Syötä tarvittaessa" name="crystal[category_cards_green_5]" />
                                  <label htmlFor="category-cards-green-6">Vihreä 6</label>
                                  <input type="text" id="category-cards-green-6" placeholder="Syötä tarvittaessa" name="crystal[category_cards_green_6]" />
                              </div>
                              <div className="col">
                                  <h3>Punaiset (otsikko)</h3>
                                  <label htmlFor="category-cards-red-1">Punainen 1</label>
                                  <input type="text" id="category-cards-red-1" placeholder="Syötä ensimmäinen" name="crystal[category_cards_red_1]" />
                                  <label htmlFor="category-cards-red-2">Punainen 2</label>
                                  <input type="text" id="category-cards-red-2" placeholder="Syötä tarvittaessa" name="crystal[category_cards_red_2]" />
                                  <label htmlFor="category-cards-red-3">Punainen 3</label>
                                  <input type="text" id="category-cards-red-3" placeholder="Syötä tarvittaessa" name="crystal[category_cards_red_3]" />
                                  <label htmlFor="category-cards-red-4">Punainen 4</label>
                                  <input type="text" id="category-cards-red-4" placeholder="Syötä tarvittaessa" name="crystal[category_cards_red_4]" />
                                  <label htmlFor="category-cards-red-5">Punainen 5</label>
                                  <input type="text" id="category-cards-red-5" placeholder="Syötä tarvittaessa" name="crystal[category_cards_red_5]" />
                                  <label htmlFor="category-cards-red-6">Punainen 6</label>
                                  <input type="text" id="category-cards-red-6" placeholder="Syötä tarvittaessa" name="crystal[category_cards_red_6]" />
                              </div>
                          </div>
                      </div>
                      <h2>Vihreä Topaasia</h2>
                      <div className="flow">
                          <label htmlFor="topaasia-green">Oleellisin kortti kehityksen kannalta (otsikko)</label>
                          <input type="text" name="crystal[topaasia_green]" id="topaasia-green" />
                          <label htmlFor="improvement-green">Miten kehitämme seuraavaan pelisessioon mennessä (pienin kokeilu)</label>
                          <textarea id="improvement-green" name="crystal[improvement_green]" rows="3"></textarea>
                          <label htmlFor="lead-green">Vetovastuu</label>
                          <input type="text" name="crystal[lead_green]" id="lead-green" />
                      </div>
                      <h2>Punainen Topaasia</h2>
                      <div className="flow">
                          <label htmlFor="topaasia-red">Oleellisin kortti kehityksen kannalta (otsikko)</label>
                          <input type="text" name="crystal[topaasia_red]" id="topaasia-red" />
                          <label htmlFor="improvement-red">Miten kehitämme seuraavaan pelisessioon mennessä (pienin kokeilu)</label>
                          <textarea id="improvement-red" name="crystal[improvement_red]" rows="3"></textarea>
                          <label htmlFor="lead-red">Vetovastuu</label>
                          <input type="text" name="crystal[lead_red]" id="lead-red" />
                      </div>
                      <h2>Arviointi</h2>
                      <div className="flow">
                          <label>Miten hyödyllinen pelisessio oli käytettyyn aikaan nähden (1 = hyödytön, 5 = erittäin hyödyllinen)</label>
                          <div className="row">
                              <div className="col">
                                  <label htmlFor="rating-1">1 &#9785;</label>
                                  <input className="required" type="radio" name="crystal[rating]" value="1" id="rating-1" />
                              </div>
                              <div className="col">
                                  <label htmlFor="rating-2">2</label>
                                  <input className="required" type="radio" name="crystal[rating]" value="2" id="rating-2" />
                              </div>
                              <div className="col">
                                  <label htmlFor="rating-3">3</label>
                                  <input className="required" type="radio" name="crystal[rating]" value="3" id="rating-3" />
                              </div>
                              <div className="col">
                                  <label htmlFor="rating-4">4</label>
                                  <input className="required" type="radio" name="crystal[rating]" value="4" id="rating-4" />
                              </div>
                              <div className="col">
                                  <label htmlFor="rating-5">5 &#9786;</label>
                                  <input className="required" type="radio" name="crystal[rating]" value="5" id="rating-5" />
                              </div>
                          </div>

                          <label>Viime pelisessiossa päätetyt kokeilut (ei täytetä ensimmäisessä pelisessiossa)</label>
                          <div className="row">
                              <div className="col"><label htmlFor="last-used-yes">Tehty</label><input className="required" type="radio" name="crystal[last_used]" value="Tehty" id="last-used-yes" /></div>
                              <div className="col"><label htmlFor="last-used-no">Tekemättä</label><input className="required" checked="checked" type="radio" name="crystal[last_used]" value="Tekemättä" id="last-used-no" /></div>
                          </div>
                      </div>

                      <h2>Seuraava pelisessio</h2>
                      <div className="flow">
                          <label htmlFor="next_session">Ehdota aikaa seuraavalle pelisessiolle</label>
                          <input type="text" name="crystal[next_session]" id="next_session" />
                      </div>

                      <button type="submit">Lähetä lomake</button>
                  </form>
              </div>
          </div>
        );
    }
});

export default Amon;
