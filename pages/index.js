import Layout from "../ui/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="container section h-[200vh] flex flex-col gap-lg">
        <div className="bg-black h-4xl bg-opacity-40"></div>
        <h1 className="heading-lg">Heading 1</h1>
        <h2 className="heading">Heading 2</h2>
        <h3 className="heading-sm">Heading 2</h3>
        <span className="label">Label</span>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          posuere dolor ac accumsan consectetur. Quisque eleifend libero odio.
          Sed posuere congue lacinia. Nulla sollicitudin, est id ullamcorper
          tempor, tortor erat suscipit ante, id accumsan elit est ut dolor.
          Nulla pharetra egestas vulputate. Aenean eget imperdiet lorem. Duis
          bibendum libero eu felis auctor, a faucibus ipsum pharetra. Vivamus
          vestibulum, arcu dignissim tristique porttitor, lectus neque
          pellentesque sem, feugiat venenatis metus sem sed augue.
        </p>
      </section>
    </Layout>
  );
}
