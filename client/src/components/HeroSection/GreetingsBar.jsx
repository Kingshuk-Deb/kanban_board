import styled from "styled-components";
import { TaskState } from "../../context/TaskContext";

const handImg =
  "https://s3-alpha-sig.figma.com/img/b71b/64bf/30cd70aca236d986b8828bb5ad1ed8a5?Expires=1674432000&Signature=d4i28oOYRsEILYjD8ssrWJ1oCaSibjNrOoUoM9scfQjiR-3we-w7~AHLOSDiwzWiLQ5iOk2SJVF4-GmNqLePcuafxl0ksxGc5267rzDkFS9BFxYLoO5NnWH19-m1yI5NBBciGY97vNo0dElNh1LxLIBkV8P12H5Il0xJu9w1CgMgjQDR24zGkOMj8FrWWYwCuHZR6lnhTxrwEHCgH168ePeQxoFxwg-h0LX244zhx1r9sgb1dfFkgx5pzplbfZrQ-PrQnZ2QFiWGbWIOEKu4ea9uAbXvSA2-7LyyK~1rS5ADI48lqTkYFoTMYOfVtFSenE6bOoGKL7sD6mZrBMb8wA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const GreetingsBar = () => {
  const { user } = TaskState();

  return (
    <GreetingsBarContainer>
      <GreetingsBarTextSection>
        <GreetingsBarTextSectionHeading>
          Hello
          <GreetingsBarTextSectionSpan>
            {user.firstName}!
          </GreetingsBarTextSectionSpan>
        </GreetingsBarTextSectionHeading>
        You have 2 new projects to do. Keep up the good work!
      </GreetingsBarTextSection>
      <GreetingsBarImage
        src={handImg}
        alt="Hand Png"
        style={{
          width: "128px",
          aspectRatio: "185/100",
        }}
      />
    </GreetingsBarContainer>
  );
};

const GreetingsBarContainer = styled.div`
  background: linear-gradient(91.75deg, #48409e -9.31%, #4332f7 130.93%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const GreetingsBarTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 200;
  font-size: 14px;
  color: #fff;
`;

const GreetingsBarTextSectionHeading = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 24px;
  display: flex;
  gap: 6px;
`;

const GreetingsBarTextSectionSpan = styled.span`
  font-weight: 900;
`;

const GreetingsBarImage = styled.img`
  width: 128px;
  aspect-ratio: 185/100;
`;

export default GreetingsBar;
