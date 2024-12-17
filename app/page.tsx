import NotesPicker from "../components/Notepicker";

export default function Home() {
  return (
    <main className="bg-slate-100 w-full min-h-screen pb-10 flex justify-center items-start">
      <div className="w-full max-w-4xl p-6 mt-10 bg-white rounded-lg shadow-md">
        <NotesPicker />
      </div>
    </main>
  );
}
