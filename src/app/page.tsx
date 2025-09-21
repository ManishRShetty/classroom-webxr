import SketchfabViewer from '@/components/SketchfabViewer';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My Classroom</h1>
      <p>Here is an interactive 3D model of a virtual classroom:</p>

      <SketchfabViewer />

      <p>More content can go here...</p>
    </main>
  );
}