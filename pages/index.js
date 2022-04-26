import FilterComponent from "./filter";
import SpaceXmissionComponent from "./spaceXmission";

export default function Home({missionsData}) {
  return (
    <>
      <main className="home">
        <h1>SpaceX Launch Programs</h1>
        <FilterComponent />
        <SpaceXmissionComponent missionsData = { missionsData } />
      </main>
      <footer>Developed by: Joel Kiggwe</footer>
    </>
  );
}

export async function getStaticProps() {
  const missionsData = await fetch("https://api.spacexdata.com/v3/launches?limit=100").then( r=> r.json());
  console.log(missionsData);
  return {
    props: { missionsData }
  };
}