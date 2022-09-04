import Container from "../ui/layout/Container";
import Section from "../ui/layout/Section";
import Layout from "../ui/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Container className="">
        <Section className="bg-sky-900 text-sky-200">
          <h1 className="text-6xl">Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
        </Section>
      </Container>
    </Layout>
  );
}
