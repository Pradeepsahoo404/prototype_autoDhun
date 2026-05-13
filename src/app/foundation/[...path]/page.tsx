type Props = {
  params: { path?: string[] };
};

export default function FoundationSubPage({ params }: Props) {
  const slug = params.path?.join("/") ?? "";
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>Foundation</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>Dummy subpage: /foundation/{slug}</p>
    </main>
  );
}
