import Sidebar from "./sidebar";
import Main from "./main";
import Notifi from "./notifi";
function Home() {
  return (
    <div className="container mx-auto xl:max-w-[1200px]">
      <div className="flex   mt-7 relative">
        <div className="mr-3">
          {" "}
          <div className=" sticky top-4">
            {" "}
            <Sidebar />
          </div>
        </div>

        <div className="flex-1 ml-4 bg-black">
          <Main />
        </div>
        <div className="ml-4">
          <div className="sticky top-2 mb-32">
            {" "}
            <Notifi />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
