import FilterComponent from "./filter";
import SpaceXmissionComponent from "./spaceXmission";

export default function Home() {
  return (
    <>
      <main className="home">
        <h1>SpaceX Launch Programs</h1>
        <FilterComponent />
        <SpaceXmissionComponent />
      </main>
      <footer>Developed by: Joel Kiggwe</footer>
    </>
  );
}
