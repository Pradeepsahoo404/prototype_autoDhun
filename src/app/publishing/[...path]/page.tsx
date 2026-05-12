type Props = {
  params: { path?: string[] };
};

export default function PublishingSubPage({ params }: Props) {
  const slug = params.path?.join("/") ?? "";
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>Publishing</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>Dummy subpage: /publishing/{slug}</p>
    </main>
  );
}

