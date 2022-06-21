const Cats = (caty)=> {
    return (
      <div>
        <img src={caty.catImage} alt="Cat" />
        <h3>Name: {caty.Name}</h3>
        <p>Age: {caty.Age}</p>
      </div>
    );
  }
export default Cats;
