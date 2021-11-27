// from react
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../components/common/loading/loading";
//services
import httpService from "../../../services/httpService";
// css
import "./listActors.css";
// assets
import addNewImg from "../../../assets/addNew.svg";
import Table from "../../../components/common/table/table";
import NotFound from "../../../components/common/not-found/not-found";
import Search from "../../../components/common/search/search";
import Select from "../../../components/common/select-input/select";

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
          <Search text={search} action={searchData} />
        </div>
        <div className="col-lg-2 ">
          <Select
            action={searchBy}
            options={["Male.", "Female."]}
          />
        </div>

        <div className="col-lg-2">
          <Link to="/actors/form" className="btn btn-info btn-block">
            add
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <Table headers={HEADERS} items={actors} title={"Actors"}></Table>
          {!actors ? <Loading></Loading> : ""}
          {actors.length === 0 && actors ? (
            <>
              <NotFound title={"No found actors"} urlImg={addNewImg} />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default ListActors;
