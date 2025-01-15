import noResultsImg from "../assets/no-results.png";
import Wrapper from "../styles/NoResults";

function NoResults() {
  return (
    <Wrapper>
      <img src={noResultsImg} alt="no results" />
      <h2>title</h2>
      <p className="secondary">text</p>
    </Wrapper>
  );
}

export default NoResults;
