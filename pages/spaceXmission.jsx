import React from "react";
import Image from "next/image";
import demo_image from "../public/demo_image.jpg";

const ImageComponent = () => {
  return (
    <>
      <div className="image-container">
        <Image src={demo_image} />
      </div>
    </>
  );
};

const SpaceXmissionComponent = () => {
  return (
    <>
      <div className="space-mission-container">
        <section className="space-mission">
          <ImageComponent />
          <main>
            <p className="mission-name"> Mission Name </p>
            <p>
              Mission Ids:
              <br /> <span>2456</span>
            </p>

            <p>
              {" "}
              Launch Year: <span>2012</span>{" "}
            </p>

            <p>
              Successful Launching: <span> True</span>{" "}
            </p>

            <p>
              {" "}
              Successful Landing: <span>False</span>
            </p>
          </main>
        </section>

        {/* Others */}
        <section className="space-mission">
          <ImageComponent />
          <main>
            <p className="mission-name"> Mission Name </p>
            <p>
              Mission Ids:
              <br /> <span>2456</span>
            </p>

            <p>
              {" "}
              Launch Year: <span>2012</span>{" "}
            </p>

            <p>
              Successful Launching: <span> True</span>{" "}
            </p>

            <p>
              {" "}
              Successful Landing: <span>False</span>
            </p>
          </main>
        </section>
        <section className="space-mission">
          <ImageComponent />
          <main>
            <p className="mission-name"> Mission Name </p>
            <p>
              Mission Ids:
              <br /> <span>2456</span>
            </p>

            <p>
              {" "}
              Launch Year: <span>2012</span>{" "}
            </p>

            <p>
              Successful Launching: <span> True</span>{" "}
            </p>

            <p>
              {" "}
              Successful Landing: <span>False</span>
            </p>
          </main>
        </section>
        <section className="space-mission">
          <ImageComponent />
          <main>
            <p className="mission-name"> Mission Name </p>
            <p>
              Mission Ids:
              <br /> <span>2456</span>
            </p>

            <p>
              {" "}
              Launch Year: <span>2012</span>{" "}
            </p>

            <p>
              Successful Launching: <span> True</span>{" "}
            </p>

            <p>
              {" "}
              Successful Landing: <span>False</span>
            </p>
          </main>
        </section>
        <section className="space-mission">
          <ImageComponent />
          <main>
            <p className="mission-name"> Mission Name </p>
            <p>
              Mission Ids:
              <br /> <span>2456</span>
            </p>

            <p>
              {" "}
              Launch Year: <span>2012</span>{" "}
            </p>

            <p>
              Successful Launching: <span> True</span>{" "}
            </p>

            <p>
              {" "}
              Successful Landing: <span>False</span>
            </p>
          </main>
        </section>
      </div>
    </>
  );
};

export default SpaceXmissionComponent;
