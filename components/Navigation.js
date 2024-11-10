import { ImStatsBars } from 'react-icons/im';

function Nav() {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://thispersondoesnotexist.com/image"
              alt=""
            ></img>
          </div>

          <small>Hi, Leon</small>
        </div>
        <nav className="flex items-center gap-2">
          <div>
            <ImStatsBars className="text-2xl" />
          </div>
          <div className="btn btn-danger">Sign Out</div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
