// interface
//-------------------------------------------------
//Manikant=====>


//keep your code in this box
export interface signuptype{
  username:string,
  email:string,
  password:string,
  address: string,
  phone:string,
  state:string,
  buy:Array<ProductType>,
  cart:Array<ProductType>
}

export interface ProductType{
    id: number;
    image: string;
    imgbag: Array<string>;
    Title: string;
    Brand: string;
    Category: string;
    Price: number;
    Rating: number;
    Stock: number;
    Quantity: number;
    Size: Array<string>;
}

//Manikant=====>
//------------------------------------------------------

//Rohit=====>

//keep your code in this box



//Rohit=====>
//---------------------------------------------------------//
//Yash=====>

//keep your code in this box

//Yash=====>
//----------------------------------------------------------//
//Biswajit=====>

//keep your code in this box
export interface AddProductType{
    id?: number;
    image: string;
    imgbag: Array<string>;
    Title: string;
    Brand: string;
    Category: string;
    Price: number | string;
    Rating: number | string;
    Stock: number | string;
    Quantity: number | string;
    Size: Array<string>;
}


//Biswajit=====>












