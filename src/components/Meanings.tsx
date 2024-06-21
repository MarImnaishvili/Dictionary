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
                      <p className="example">
                        {" "}
                        Example: "{definitions.example}"
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              {item.synonyms && item.synonyms.length !== 0 && (
                <div>
                  <span>Synonyms: </span>
                  {item.synonyms.map((synonym, sIndex) => (
                    <span key={sIndex} className="synonyms">
                      {" "}
                      {synonym},
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
                          <p className="example">
                            {" "}
                            Example: "{definition.example}"
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  {meaning.synonyms && meaning.synonyms.length !== 0 && (
                    <div>
                      <span>Synonyms: </span>
                      {meaning.synonyms.map((synonym, sIndex) => (
                        <span key={sIndex} className="synonyms">
                          {" "}
                          {synonym},
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
      <a href={dictionaryData && dictionaryData[0]["sourceUrls"][0]}>
        {dictionaryData && dictionaryData[0]["sourceUrls"][0]}
      </a>
    </MeaningWrapper>
  );
};

const MeaningWrapper = styled.div`
  width: 100%;

  .partOfSpeech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Cinzel Decorative;
    font-size: 1.5rem;
    margin: 0.7rem 0;
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
  }
  .synonyms {
    color: #bb76db;
  }
  li {
    line-height: 1.3rem;
    letter-spacing: 0.1px;
  }
  .lastLine {
    width: 100%;
    height: 0.1rem;
    background-color: #ebebeb;
    margin: 2rem 0;
  }
`;

export default Meanings;
