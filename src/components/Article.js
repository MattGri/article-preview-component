import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 50px;


  @media (max-width: 570px) {
    flex-wrap: wrap;
  }

  @media(max-width: 400px){
      margin: 50px 20px 0px 20px;
  }
`;

const LeftBox = styled.div`
  background-image: url('./images/drawers.jpg');
  background-size: cover;
  height: 292px;
  width: 200px;

  @media (max-width: 570px) {
    width: 355px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const RightBox = styled.div`
  background-color: #fff;
  padding: 30px;
  width: 355px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const Subtitle = styled.h3`
  color: #000;
  margin-bottom: 15px;
`;

const Text = styled.p`
  color: #abafb3;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftBoxWrapper = styled.div``;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

const RightBoxWrapper = styled.div``;

const Name = styled.p`
  color: #7a7e87;
`;

const Date = styled.p`
  color: #d5d7d8;
  margin-top: 5px;
`;

const Article = () => {
  return (
    <>
      <Container>
        <LeftBox></LeftBox>
        <RightBox>
          <Subtitle>
            Shift the overall look and feel by adding those wonderful touches to
            furniture in your home
          </Subtitle>
          <Text>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </Text>
          <Wrapper>
            <LeftBoxWrapper>
              <ProfileImage src="./images/avatar-michelle.jpg" />
            </LeftBoxWrapper>
            <RightBoxWrapper>
              <Name>Michelle Appleton</Name>
              <Date>28 Jun 2020</Date>
            </RightBoxWrapper>
          </Wrapper>
        </RightBox>
      </Container>
    </>
  );
};

export default Article;
