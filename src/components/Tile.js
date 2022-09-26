export function Tile(props) {
  return (
    <div>
      <tile className="flex flex-wrap justify-center bg-gray-500 border-4 border-slate-700 w-64 h-28 rounded my-5 mx-5">
        <h3 className="">{props.name}</h3>
        <img src={props.image} alt="joj"></img>
      </tile>
    </div>
  );
}
