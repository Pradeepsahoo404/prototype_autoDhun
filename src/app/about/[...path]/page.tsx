type Props = {
  params: Promise<{ path?: string[] }>;
};

export default async function AboutSubPage({ params }: Props) {
  const { path } = await params;
  const slug = path?.join("/") ?? "";
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>About</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>Dummy subpage: /about/{slug}</p>
    </main>
  );
}
