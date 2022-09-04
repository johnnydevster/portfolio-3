import Container from "../ui/layout/Container";
import Section from "../ui/layout/Section";
import Layout from "../ui/layout/Layout";
import Paragraph from "../ui/utilities/Paragraph";
import Heading from "../ui/utilities/Heading";

export default function Home() {
  return (
    <Layout>
      <Container className="">
        <Section className="">
          <Heading>Heading 1</Heading>
          <Heading size="lg">Heading 2</Heading>
          <Heading size="md">Heading 3</Heading>
          <Heading size="sm">Heading 4</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            posuere dolor ac accumsan consectetur. Quisque eleifend libero odio.
            Sed posuere congue lacinia. Nulla sollicitudin, est id ullamcorper
            tempor, tortor erat suscipit ante, id accumsan elit est ut dolor.
            Nulla pharetra egestas vulputate. Aenean eget imperdiet lorem. Duis
            bibendum libero eu felis auctor, a faucibus ipsum pharetra. Vivamus
            vestibulum, arcu dignissim tristique porttitor, lectus neque
            pellentesque sem, feugiat venenatis metus sem sed augue.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
}
