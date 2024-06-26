import { styled } from "styled-components";

interface Meaning {
  partOfSpeech: string;
  definitions: { definition: string; example: string }[];
  synonyms: string[];
}

interface DictionaryItem {
  meanings: Meaning[];
  sourceUrls: string[];
}

interface MeaningsType {
  dictionaryData: DictionaryItem[];
}

const Meanings = ({ dictionaryData }: MeaningsType) => {
  return (
    <MeaningWrapper>
      <div>
        {dictionaryData &&
          dictionaryData.length === 1 &&
          dictionaryData[0].meanings.map((item, index) => (
            <div key={index}>
              <div className="partOfSpeech">
                <strong>
                  <span>{item.partOfSpeech}</span>
                </strong>
                <div className="meaningLine"></div>
              </div>
              <h4>Meaning</h4>
              <ul>
                {item.definitions.map((definitions, index) => (
                  <li key={index}>
                    {definitions.definition}
                    {definitions.example && (
                      <p className="example">"{definitions.example}"</p>
                    )}
                  </li>
                ))}
              </ul>
              {item.synonyms && item.synonyms.length !== 0 && (
                <div>
                  <span className="sunonymesHd">Synonyms: </span>
                  {item.synonyms.map((synonym, sIndex) => (
                    <span key={sIndex} className="synonyms">
                      {" "}
                      {synonym}
                      {sIndex === item.synonyms.length - 1 ? "." : ","}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
      <div>
        {dictionaryData &&
          dictionaryData.length > 1 &&
          dictionaryData.map((item, index) => (
            <div key={index}>
              {item.meanings.map((meaning, mIndex) => (
                <div key={mIndex}>
                  <div className="partOfSpeech">
                    <strong>
                      <span>{meaning.partOfSpeech}</span>
                    </strong>
                    <div className="meaningLine"></div>
                  </div>
                  <h4>Meaning</h4>

                  <ul>
                    {meaning.definitions.map((definition, dIndex) => (
                      <li key={dIndex}>
                        {definition.definition}
                        {definition.example && (
                          <p className="example">"{definition.example}"</p>
                        )}
                      </li>
                    ))}
                  </ul>
                  {meaning.synonyms && meaning.synonyms.length !== 0 && (
                    <div>
                      <span className="sunonymesHd">Synonyms: </span>
                      {meaning.synonyms.map((synonym, sIndex) => (
                        <span key={sIndex} className="synonyms">
                          {" "}
                          {synonym}
                          {sIndex === meaning.synonyms.length - 1 ? "." : ","}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
      {dictionaryData && <div className="lastLine"></div>}
      {dictionaryData && <span className="source">Source: </span>}
      <a href={dictionaryData && dictionaryData[0]["sourceUrls"][0]}>
        {dictionaryData && dictionaryData[0]["sourceUrls"][0]}
      </a>
    </MeaningWrapper>
  );
};

const MeaningWrapper = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.6rem;
  letter-spacing: 0.1px;

  .partOfSpeech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Cinzel Decorative;
    margin: 0.7rem 0;
    font-size: 2rem;
  }
  .meaningLine {
    width: 85%;
    height: 0.1rem;
    background-color: #ebebeb;
  }
  h4 {
    color: #aaa9a9;
    margin-bottom: 1rem;
  }
  ul {
    padding: 0 1rem;
    margin-bottom: 1rem;
    li::marker {
      color: #bb76db;
    }
  }
  .example {
    margin: 0.3rem 0;
    color: #aaa9a9;
  }
  .synonyms {
    color: #bb76db;
  }
  .sunonymesHd {
    color: #aaa9a9;
  }

  .lastLine {
    width: 100%;
    height: 0.1rem;
    background-color: #ebebeb;
    margin: 2rem 0;
  }
  .source {
    color: #aaa9a9;
  }
`;

export default Meanings;
