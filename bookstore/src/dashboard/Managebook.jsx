import React, { useEffect, useState } from "react";
import { Table, TableBody } from "flowbite-react";
import { Link } from "react-router-dom";
function Managebook() {
  const [allbooks, setallbooks] = useState([]);
  useEffect(() => {
    async function fetc() {
      await fetch("http://localhost:3000/all-books")
        .then((res) => res.json())
        .then((data) => setallbooks(data));
    }
    fetc();
  }, []);
  //delete a book
  const handledelete = (id) => {
    fetch(`http://localhost:3000/book/${id}`, {
      method: "DELETE",
    }).then((res) =>
      res.json().then((data) => alert("BOOk is deleted succesfully"))
    );
   
  };
  return (
    <div className=" px-4 my-28 ml-28">
      <h2 className=" mb-8 text-5xl font-bold">
        Manage Your <span className=" text-blue-700">BOOK</span>{" "}
      </h2>
      <Table className=" lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>BookName</Table.HeadCell>
          <Table.HeadCell>AuthorName</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Pricess</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit or Mange</span>
          </Table.HeadCell>
        </Table.Head>
        {allbooks.map((book, index) => {
          return (
            <TableBody className=" divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{book.bookTitle}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>{Math.floor(Math.random() * 1000)}</Table.Cell>
                <Table.Cell>
                  <Link
                    to={`/admin/dashboard/edit-book/${book._id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      handledelete(book._id);
                    }}
                    className=" bg-red-700 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 "
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            </TableBody>
          );
        })}
      </Table>
    </div>
  );
}

export default Managebook;
