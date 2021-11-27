// from react
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../components/common/loading/loading";
//services
import httpService from "../../../services/httpService";
// css
import "./listActors.css";
// assets
import serverDownImg from "../../../assets/serverdown.svg";
import addNewImg from "../../../assets/addNew.svg";
import Table from "../../../components/common/table/table";
import NotFound from "../../../components/common/not-found/not-found";

function ListActors() {
  const [actors, setActors] = useState([]);
  const [tableActors, setTableActors] = useState([]);
  const [search, setSearch] = useState("");
  const [searchByDrop, setSearchByDrop] = useState("");

  useEffect(() => {
    getActors();
  }, []);

  const getActors = async () => {
    try {
      const data = await httpService.get("http://localhost:3000/api/actors");
      setActors(data);
      setTableActors(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    await httpService
      .delete("http://localhost:3000/api/actors/", id)
      .then(() => {
        getActors();
      })
      .catch((error) => console.log(error));
  };

  const searchBy = (e) => {
    setSearchByDrop(e.target.value);
    filterData(e.target.value);
  };

  const searchData = async (e) => {
    setSearch(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (byItem) => {
    const searchResult = tableActors.filter((element) => {
      if (
        element.full_name
          .toString()
          .toLowerCase()
          .includes(byItem.toLowerCase()) ||
        element.born.toString().toLowerCase().includes(byItem.toLowerCase()) ||
        element.gender.toString().toLowerCase().includes(byItem.toLowerCase())
      ) {
        return element;
      }
    });
    setActors(searchResult);
  };

  const HEADERS = [
    { title: "ID", key: "id" },
    {
      title: "Photo",
      key: "",
      render: (item) => {
        return (
          <>
            <img src={item.data.photo} alt="Logo" className="imgTable" />
          </>
        );
      },
    },
    { title: "Name", key: "full_name" },
    { title: "Born", key: "born" },
    { title: "Gender", key: "gender" },
    {
      title: "Actions",
      key: "",
      render: (item) => {
        console.log(item.data.id);
        return (
          <>
            <Link
              to={"/popup/movies/" + item.data.id}
              className="btn btn-primary m-1"
            >
              <i className="far fa-star mr-1 text-warning"></i> See
            </Link>
            <button
              onClick={(id) => deleteItem(item.data.id)}
              type="button"
              className="btn btn-danger m-1"
            >
              <i className="fas fa-user-alt-slash"></i>
            </button>
            <Link
              to={"/actors/form/" + item.data.id}
              type="button"
              className="btn btn-warning m-1"
            >
              <i className="fas fa-user-edit"></i>
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="row mt-3 d-flex justify-content-between">
        <div className="col-lg-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control  bg-white pl-5"
              placeholder="Search"
              value={search}
              onChange={(e) => searchData(e)}
            />
          </div>
        </div>
        <div className="col-lg-2 ">
          <select
            className="form-control mb-3 bg-white pl-5 "
            onChange={(e) => searchBy(e)}
          >
            <option value="">General</option>
            <option value="Male.">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="col-lg-2">
          <Link to="/actors/form" className="btn btn-info btn-block">
            add
          </Link>
        </div>
      </div>
      <div className="card">
        {actors ? (
          <div className="card-body">
            <Table headers={HEADERS} items={actors}></Table>
            {!actors ? <Loading></Loading> : ""}
            {actors.length === 0 && actors? (
              <>
                <NotFound title={"No found actors"} urlImg={addNewImg} />
              </>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="p-5">
            <h1 className="text-danger col-lg-8 offset-2 mb-5">
              Service Unavailable 503
            </h1>
            <img src={serverDownImg} className="col-lg-6 offset-3" alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default ListActors;
