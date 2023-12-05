import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import React from "react";
import { useState } from "react";

function Uploadbook() {
  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Home",
    "Horror",
    "BiblioGraphy",
    "AutoBioGraphy",
    "History",
    "Self-Help",
    "Memoir",
    "Bussiness",
    "Childlren Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [SelectbookCategory, setSelectbookCategory] = useState(bookCategory[0]);
  const handlechangeSelectedValue = (event) => {
    setSelectbookCategory(event.target.value);
  };
  const handblesumbition=(event)=>{
      event.preventDefault();
      const form = event.target;
      const bookTitle=form.bookTitle.value;
      const authorName=form.authorName.value;
      const bookDescription=form.bookDescription.value;
    
      const imageURL=form.imageURL.value;
    const bookPDFURL=form.bookPDFURL.value;
      const category=form.categoryName.value;
      const bookObj={
        bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
      }
     //send data to db ;
     fetch("http://localhost:3000/upload-book",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(bookObj)
     }).then(res=>res.json()).then(data=>{
      alert(`Book with ${data.bookTitle} uploaded succesfully`)
      form.reset();
     })
  
  }
  return (
    <div className=" px-4 my-12">
      <h2 className=" mb-8 text-3xl font-bold">
        Upload A <span className=" text-blue-700 font-extrabold">Book</span>
      </h2>
      <form onSubmit={handblesumbition} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row  */}
        <div className=" flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        {/* Second row  */}
        <div className=" flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URl" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Image URL .."
              required
            />
          </div>
          {/* category seleted */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="input State" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className=" w-full rounded "
              value={SelectbookCategory}
              onChange={handlechangeSelectedValue}
            >
              {bookCategory.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* thir row */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Description" />
        </div>
        <Textarea id="bookDescription" name="bookDescription" className=" w-full" rows={6} type="text" placeholder="Write your Book Description" required />
      </div>
      {/* book pdf link  */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book Pdf Url" />
        </div>
        <TextInput id="bookPDFURL" type="text" name="bookPDFURL" placeholder="bookPdf Url" required />
      </div>
      <Button className=" mt-5" type="submit">Upload BOOK</Button>
      </form>
    </div>
  );
}

export default Uploadbook;
