// from react
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// components
import Loading from "../../../components/common/loading/loading";
// services
import httpService from "../../../services/httpService";
// css
import "./listMovies.css";
// assets
import addNewImg from "../../../assets/addNew.svg";
import Table from "../../../components/common/table/table";
import NotFound from "../../../components/common/not-found/not-found";
import Search from "../../../components/common/search/search";
import Select from "../../../components/common/select-input/select";

function ListMovies() {
  const [movies, setMovies] = useState([]);
  const [TableMovies, setTableMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchByDrop, setSearchByDrop] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const data = await httpService.get("http://localhost:3000/api/movies");
      setMovies(data);
      setTableMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMovie = async (id) => {
    await httpService
      .delete("http://localhost:3000/api/movies/", id)
      .then(() => {
        getMovies();
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
    const searchResult = TableMovies.filter((element) => {
      if (
        element.title.toString().toLowerCase().includes(byItem.toLowerCase()) ||
        element.premiere
          .toString()
          .toLowerCase()
          .includes(byItem.toLowerCase()) ||
        element.gender.toString().toLowerCase().includes(byItem.toLowerCase())
      ) {
        return element;
      }
    });
    setMovies(searchResult);
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
    { title: "Title", key: "title" },
    { title: "Premiere", key: "premiere" },
    { title: "Gender", key: "gender" },
    {
      title: "Actions",
      key: "",
      render: (item) => {
        return (
          <>
            <Link
              to={"/popup/actors/" + item.data.id}
              className="btn btn-primary m-1"
            >
              <i className="far fa-star mr-1 text-warning"></i> See
            </Link>
            <button
              onClick={(id) => deleteMovie(item.data.id)}
              type="button"
              className="btn btn-danger m-1"
            >
              <i className="fas fa-user-alt-slash"></i>
            </button>
            <Link
              to={"/movies/form/" + item.data.id}
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
    <Fragment>
      <div className="row mt-3 d-flex justify-content-between">
        <div className="col-lg-8">
          <Search text={search} action={searchData} />
        </div>
        <div className="col-lg-2">
          <Select
            action={searchBy}
            options={[
              "FICTION",
              "ADVENTURE",
              "COMEDY",
              "TERROR",
              "ACTION",
              "SUSPENSE",
            ]}
          />
        </div>

        <div className="col-lg-2">
          <Link to="/movies/form" className="btn btn-info btn-block">
            add
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <Table headers={HEADERS} items={movies} title={"Movies"}></Table>
          {!movies ? <Loading></Loading> : ""}
          {movies.length === 0 && movies ? (
            <>
              <NotFound title={"No found movies"} urlImg={addNewImg} />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default ListMovies;
