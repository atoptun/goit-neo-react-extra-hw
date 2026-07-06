import Container from './components/Container/Container';
import PhoneBook from './components/PhoneBook/PhoneBook';
import Section from './components/Section/Section';

export default function App() {
  return (
    <>
      <Section>
        <Container>
          <PhoneBook />
        </Container>
      </Section>
    </>
  );
}
