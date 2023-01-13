import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

const imgs = [
  "https://s3-alpha-sig.figma.com/img/5237/37b7/cae17c3d5188302163b555d22ab929f5?Expires=1674432000&Signature=L7Wi~yBc49uCv086lGZ6awXISNiJmk3-w3vaX5oXdhAjax6O4Ncg0PLp5s6hIkcxyPQKnTi58k-ltqDBU6WCPfwork2BRhF1JOI6wQjxYNGMWosCOybyIa0k-yQsN58H73sOZKY9JvMOgcsfP6uop1rRo~zJ~u-b6FL0CSrGaFUuhdXsB47MGwq~KIB~5ETxEOwtXWKzzX2bLg2mu0-WR9HzL9LozUVxByM81IHGgSJ0oe2IZntO~S429pvhE-TfIVgEH9vD1hy7di--OS0KpvGdczjMg5a1h6ndpOBWUiRJ0Lhh~fkmPnEXbBzILv7SQKwRdO7fJptL7DsqIabPzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/7ecf/e8b5/c459f6297ea7d8af0fe13a4f5f5107bd?Expires=1674432000&Signature=HF9Yh4mCZckEYpKRU3z9lG5sTdZT567P416yCUMAMOKYyTZ4UJ-l~qSxjZ~jg8VRsoPmIaT1Bx68Vo4PiZ4~raNfEl4tRK3iZVU-Zb7q~nS1jkjGGrUng960rTaCybcBskY-SmLK0294ceygUH7MBHzLR-KIH-XPclztuHF4HERcMqFwXHPflBAWZ1ranqoBmu6v33aUL~OaJZTIWHfIh19hzAlyV1sjl8EkfdKyP1zLh6SAoQAb66OLRpbF218i6TgnBMOvY8oSGkmSWgq7TDuwyC9mTqW4XOTXHbkFUcbYF~FoR~UgCD6P2osaGAk6ahJXLbcKO4KXqGBv16uStQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/7fe7/3367/69a5e0d805a9a2e83f84c503a677f75b?Expires=1674432000&Signature=M5vbbvovki2E9PlbNSsjKFUq6o9Jp6OgjgraGx0P3-ZpETTTB5QycKQmMIz5PwWuGOOF1sGMoYVsT-eaaVhwlEPn6aEmrO3Anq3d2d9saPOxzHWu9XC6JVEiBL32FFkiuQh8xek86WOB78sak05XvUpbDmSsWfl4EANa9hAzV6O-Z3SCUzJetW7wFxhij4W7jAWE5mW-cWqy~~PaAWnuZDFv11GsMXgakRUb6xqs7ugh4UBTzanQooUH5-l68HS6O6KNJVOVkFcaJ-F7lr9HQcjBgy2REB-I2GFrEYcF3T1DNaHwH-IUKXoI4dHAH6UQqUzgz-tG-JjVBWZnrSfbSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const profileImg =
  "https://s3-alpha-sig.figma.com/img/7672/2bd4/56a014395cf7b7f161c2223f8720c704?Expires=1674432000&Signature=MG~3Q6fdfjkaSopWjwLDQKWXPBIY8EKUvtmSiQ24Vq-zscxqbaVWF2a2j9WDEvcwOBmXp2Iz3BOKSIrq6vQ64ypHixyf99dswK6uRNMRxrj7e1RECWu-78LIKTtWMfWID0OlP~5nZSVnRJ9S8EfbuQqOtqVflQpuYTvCbo~W6dlwwmiHebXCf9JGJXrWnb8KIJ8xqOg2F0lC1I0tsmzXUSVQAgztakwQ9iEohL~f2Tf0PMsY8g37afzqIdMXICfvnWF86e0MyqBaeDK8HuWCqTiKNH9sxSynXRMDYyisQHdgoq6xkFNvtiXWQBxV97By4wvTyceT19wBPJ80hgc4Ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarContainerLeft>
        <SearchBarContainer>
          <BiSearchAlt2
            style={{
              transform: "scale(1.2)",
              color: "#48409E",
            }}
          />
          <InputContainer type="text" />
        </SearchBarContainer>
        <Line></Line>
        <PeopleContainer>
          {imgs.map((data, index) => (
            <img
              key={data}
              src={data}
              alt="human 1"
              index={index}
              style={{
                position: "absolute",
                top: -17,
                left: index * 20,
                width: "34px",
                height: "34px",
                objectFit: "cover",
                borderRadius: "50%",
                zIndex: 10 - index,
                filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))",
              }}
            />
          ))}
          <div
            style={{
              position: "absolute",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              top: -17,
              left: 96,
              border: "2px solid #fff",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            10+
          </div>
        </PeopleContainer>
      </TopBarContainerLeft>
      <TopBarContainerRight>
        <div>Stephanie</div>
        <ProfileImg src={profileImg} alt="human 1" />
      </TopBarContainerRight>
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #48409e;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
`;

const TopBarContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const TopBarContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 14px;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 50%;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`;

const SearchBarContainer = styled.div`
  background: #fff;
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  gap: 12px;
`;

const InputContainer = styled.input`
  border: none;
  width: 200px;
`;

const Line = styled.div`
  height: 30px;
  width: 2px;
  background: #fff;
`;

const PeopleContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;

export default TopBar;