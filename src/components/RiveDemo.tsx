import Rive from "@rive-app/react-canvas";
const rivePath = new URL(
	"../Rive/github.riv",
	// astroはbuild時に自身ではなくdist/entry.mjsに向けてしまう
	import.meta.url
);

export const RiveDemo = () => {
  return (
    <>
      <Rive
        src={rivePath.toString()}
        stateMachines={["State Machine 1"]}
      />
    </>
  )
};
