import GitHub from '../../assets/github.svg';
export default function index() {
  function toGithub() {
    location.href = 'https://github.com/Small-Tina';
  }
  return (
    <>
      <div className="absolute bottom-0 flex flex-row h-10 w-full">
        <div className="basis-1/3 text-base" id="MyName">
          <div className="absolute left-3 top-2">©SmallTina</div>
        </div>
        <div className="basis-1/3" id="TechStack"></div>
        <div className="basis-1/3" id="GitHub">
          <img className="absolute right-2" src={GitHub} alt="" width="40px" onClick={toGithub} />
        </div>
      </div>
    </>
  );
}
