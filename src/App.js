import React from "react";
import logo from "./images/logo.svg";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  connectHighlight,
  InfiniteHits,
  connectStateResults,
} from "react-instantsearch-dom";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary>{hit.metadata.title}</ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {hit.body_text.map((content) => {
              return <p>{content.text}</p>;
            })}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
});

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? children : <h1>loading...</h1>
);
const Hit = ({ hit }) => (
  <p>
    <CustomHighlight attribute="bio" hit={hit} />
  </p>
);
function App() {
  const searchClient = algoliasearch(
    "2W7VX0CAF7",
    "e0ceb0ded36a2065b1cc5341478e23ce"
  );
  return (
    <div className="App">
      <InstantSearch searchClient={searchClient} indexName="CureSearch">
        <header>
          <img src={logo} alt="" class="logo" />
        </header>
        <div class="body-container">
          <div class="search-container">
            <h1 class="landing-header">
              AI POWERED QA SYSTEM MADE FOR THE RESEARCHERS
            </h1>
            <SearchBox />
            {/* <button id="search-button">search</button> */}
          </div>
          <Results>
            <InfiniteHits hitComponent={Hit} />
          </Results>
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;
