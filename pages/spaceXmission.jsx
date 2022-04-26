import Image from "next/image";

export default function SpaceXmissionComponent ({ missionsData }) {
  return (
    <>
      <div className="space-mission-container">
        <>
          {missionsData.map(mission => {
            return (
              <section key={mission.id} className="space-mission">
               <img src={mission.links.mission_patch} height="230px" width="100%" objectFit="fill" alt=""/>
                <main>
                  <p className="mission-name"> {mission.mission_name} </p>
                  <p>
                    Mission Ids:
                    <br /> <span> {mission.mission_id}</span>
                  </p>

                  <p>
                    {" "}
                    Launch Year: <span>{mission.launch_year}</span>{" "}
                  </p>

                  <p>
                    Successful Launching: <span> {mission.launch_success}</span>{" "}
                  </p>

                  <p>
                    {" "}
                    Successful Landing: <span>{mission.rocket.first_stage.cores.land_success}</span>
                  </p>
                </main>
              </section>
            );
          })}
        </>
      </div>
    </>
  );
};


