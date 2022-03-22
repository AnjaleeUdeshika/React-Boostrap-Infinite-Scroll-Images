import "../App.css";

function Photo({item: { id, autourl }}) {
  console.log(autourl);

  


    return (
      
      <div className="card" > 
          <h5 className="h2">Image : {id}</h5>
          <img className="card-image" src={autourl} alt="photos"/>

      </div>
    
    )
}

export default Photo;
