(this["webpackJsonpswiggy-subway-test"]=this["webpackJsonpswiggy-subway-test"]||[]).push([[0],{26:function(e,a,i){},27:function(e,a,i){},28:function(e,a,i){},29:function(e,a,i){},30:function(e,a,i){},31:function(e,a,i){},32:function(e,a,i){},34:function(e,a,i){},35:function(e,a,i){"use strict";i.r(a);var t=i(1),o=i(8),r=i.n(o),n=i(7),s=i(9),c=i(6),d={uData:{},rData:{},customiser:{}},l=Object(s.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CUSTOMISE":return Object(c.a)(Object(c.a)({},e),{},{customiser:a.addOns});case"SET-UDATA":return Object(c.a)(Object(c.a)({},e),{},{uData:a.uData});case"SET-RDATA":return Object(c.a)(Object(c.a)({},e),{},{rData:a.rData});default:return e}})),h=i(2),m=i(3),u=i(5),p=i(4),g=(i(26),i(27),i(28),i(29),i(30),i(31),i(32),i.p+"static/media/header-logo.94eac957.svg"),C=i.p+"static/media/header-chevronOrange.95f55b38.svg",B=i.p+"static/media/nav-search.ea4eacf1.svg",b=i.p+"static/media/nav-offers.daea1f37.svg",f=i.p+"static/media/nav-help.4381fbcf.svg",y=i.p+"static/media/nav-signIn.4a8ff5b0.svg",O=i.p+"static/media/nav-cart.537ef780.svg",j=i(0),M=function(e){Object(u.a)(i,e);var a=Object(p.a)(i);function i(e){var t;return Object(h.a)(this,i),(t=a.call(this,e)).state={addr1:"Sivanchetti Garden",addr2:"Bengaluru, Karnataka, India"},t}return Object(m.a)(i,[{key:"render",value:function(){return Object(j.jsx)("header",{children:Object(j.jsxs)("section",{className:"NavBar",children:[Object(j.jsxs)("div",{id:"logoAddr",children:[Object(j.jsx)("img",{src:g,alt:"Swiggy"}),Object(j.jsx)("span",{id:"addr1",children:this.state.addr1}),Object(j.jsx)("span",{id:"addr2",children:this.state.addr2}),Object(j.jsx)("img",{src:C,alt:"v"})]}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{id:"nav-search",children:[Object(j.jsx)("img",{src:B,alt:"\ud83d\udd0d"}),"Search"]}),Object(j.jsxs)("li",{id:"nav-offers",children:[Object(j.jsx)("img",{src:b,alt:"%"}),"Offers",Object(j.jsx)("span",{children:"NEW"})]}),Object(j.jsxs)("li",{id:"nav-help",children:[Object(j.jsx)("img",{src:f,alt:"?"}),"Help"]}),Object(j.jsxs)("li",{id:"nav-signIn",children:[Object(j.jsx)("img",{src:y,alt:"\ud83d\udc64"}),"Sign In"]}),Object(j.jsxs)("li",{id:"nav-cart",children:[Object(j.jsx)("img",{src:O,alt:"\ud83d\uded2"}),"Cart"]})]})}),Object(j.jsxs)("div",{id:"breadcrumbs",children:[Object(j.jsx)("span",{children:"Home"})," / ",Object(j.jsx)("span",{children:"Bangalore"})," / ",Object(j.jsx)("span",{children:"Central Bangalore"})," / ",Object(j.jsx)("span",{children:"Subway"})]})]})})}}]),i}(t.Component),w=i.p+"static/media/banner-chevronWhite.da2e2046.svg",P=i.p+"static/media/banner-offers.9f496acb.svg",v=function(e){Object(u.a)(i,e);var a=Object(p.a)(i);function i(e){var t;return Object(h.a)(this,i),(t=a.call(this,e)).state={id:"00example00",rName:"Subway",rLogo:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/subway_020_ooxsox",categories:"Fast Food, Salads, Snacks, Desserts, Beverages",location:"Central Bangalore, Central Bangalore",rating:4.4,deliveryTime:"31 mins",avgPrice:"350",offers:["20% off up to \u20b950 | Use code SWIGGYIT","Free delivery up to \u20b930 on orders above \u20b9149 | Use code FREEDEL"]},t}return Object(m.a)(i,[{key:"render",value:function(){var e=this.state.offers.map((function(e,a){return Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:P,alt:""}),e]},"offer"+a)}));return Object(j.jsx)("section",{className:"Banner",children:Object(j.jsxs)("div",{className:"swiggyGrid",children:[Object(j.jsx)("div",{id:"rLogo",children:Object(j.jsx)("img",{src:this.state.rLogo,alt:this.state.rName})}),Object(j.jsxs)("div",{id:"desc",children:[Object(j.jsx)("h1",{id:"rName",children:this.state.rName}),"     ",Object(j.jsx)("h4",{id:"categories",children:this.state.categories}),Object(j.jsxs)("h4",{id:"location",children:[this.state.location," | ",Object(j.jsxs)("span",{children:["Change Outlet ",Object(j.jsx)("img",{src:w,alt:"v"})]})," "]}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("div",{id:"rating",children:[Object(j.jsxs)("h3",{children:[Object(j.jsx)("i",{className:"fas fa-star fa-sm"})," ",this.state.rating]}),Object(j.jsx)("h6",{children:"100+ Ratings"})]}),Object(j.jsxs)("div",{id:"openClosed",children:[Object(j.jsx)("h3",{children:this.state.deliveryTime}),Object(j.jsx)("h6",{children:"Delivery Time"})]}),Object(j.jsxs)("div",{id:"avgPrice",children:[Object(j.jsxs)("h3",{children:["\u20b9 ",this.state.avgPrice]}),Object(j.jsx)("h6",{children:"Cost for two"})]})]}),Object(j.jsxs)("div",{className:"actions",children:[Object(j.jsxs)("div",{id:"dishSearch",children:[Object(j.jsx)("i",{className:"fas fa-search"}),Object(j.jsx)("input",{type:"text",placeholder:"Search for dishes..."})]}),Object(j.jsxs)("div",{id:"veg",children:[Object(j.jsx)("i",{className:"far fa-square"}),"Veg Only"]}),Object(j.jsxs)("div",{id:"fav",children:[Object(j.jsx)("i",{className:"far fa-heart"}),"Favourite"]})]})]}),Object(j.jsxs)("aside",{className:"offersBox",children:[Object(j.jsx)("div",{id:"offersHeading",children:"OFFER"}),Object(j.jsx)("ul",{children:e})]})]})})}}]),i}(t.Component),S=i.p+"static/media/cartEmpty.60834114.webp",_=function(e){Object(u.a)(i,e);var a=Object(p.a)(i);function i(){return Object(h.a)(this,i),a.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Cart",children:[Object(j.jsx)("h1",{children:"Cart Empty"}),Object(j.jsx)("img",{src:S,alt:""}),Object(j.jsx)("p",{children:"Good food is always cooking! Go ahead, order some yummy items from the menu."})]})}}]),i}(t.Component),x=i(10),T=i.p+"static/media/dish-veg.2d426882.svg",z=i.p+"static/media/dish-nonVeg.a246aa86.svg",k=function(e){return{type:"CUSTOMISE",addOns:e}},V=function(e){Object(u.a)(i,e);var a=Object(p.a)(i);function i(e){var t;return Object(h.a)(this,i),(t=a.call(this,e)).add=t.add.bind(Object(x.a)(t)),t}return Object(m.a)(i,[{key:"add",value:function(e){this.props.callCustomiser(this.props.obj)}},{key:"render",value:function(){return Object(j.jsxs)("li",{className:"Dish",children:[Object(j.jsxs)("div",{className:"DishDesc",children:[Object(j.jsx)("img",{src:this.props.obj.veg?T:z,alt:""}),Object(j.jsx)("h2",{children:this.props.obj.name}),Object(j.jsxs)("h4",{children:["\u20b9 ",this.props.obj.price]}),Object(j.jsx)("h4",{children:this.props.obj.desc})]}),Object(j.jsxs)("div",{className:"DishRight",children:[""!==this.props.obj.img&&Object(j.jsx)("div",{className:"DishImg",children:Object(j.jsx)("img",{src:this.props.obj.img,alt:""})}),Object(j.jsxs)("div",{className:"DishAction",children:[Object(j.jsx)("button",{onClick:this.add,children:"ADD"}),Object(j.jsx)("h6",{children:"Customisable"})]})]})]})}}]),i}(t.Component),A=Object(n.b)(null,(function(e){return{callCustomiser:function(a){return e(k(a))}}}))(V),R={id:"00example00",rName:"Subway",rLogo:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/subway_020_ooxsox",categories:"Fast Food, Salads, Snacks, Desserts, Beverages",location:"Central Bangalore, Central Bangalore",rating:4.4,deliveryTime:"31 mins",avgPrice:"350",offers:["20% off up to \u20b950 | Use code SWIGGYIT","Free delivery up to \u20b930 on orders above \u20b9149 | Use code FREEDEL"],dishList:{Recommended:[{name:"BFF Veg Sub Combo (15 cm, 6 Inch)",price:371,desc:'Buy any two 6" veg sub & get 2 cookie free',img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gjj06n5ktrxtx1tzmcac",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"BFF Non-Veg Sub Combo (15 cm, 6 Inch)",price:448,desc:'Buy any two 6" non-veg sub & get 2 cookie free',img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0q0eex55cmkpkxtbrhw",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"BFF Veg Signature Wrap Combo",price:486,desc:"Buy any two signature wrap & get 2 cookie free",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/boc1y4gwuwahwt0lij06",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"BFF Non-Veg Signature Wrap Combo",price:553,desc:"Buy any two signature wrap & get 2 cookie free",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mwgmpozm7p71jeay7yra",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"Turkey Sub (15 cm, 6 Inch) + Subway club Sub (15 cm, 6 Inch)",price:429,desc:"Price shown is after 10% discount",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pb4whdgqrvv8hxa4u3jg",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],"BFF Combos":[{name:"BFF Veg Sub Combo (15 cm, 6 Inch)",price:371,desc:'Buy any two 6" veg sub & get 2 cookie free',img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gjj06n5ktrxtx1tzmcac",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"BFF Non-Veg Sub Combo (15 cm, 6 Inch)",price:448,desc:'Buy any two 6" non-veg sub & get 2 cookie free',img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0q0eex55cmkpkxtbrhw",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"BFF Veg Signature Wrap Combo",price:486,desc:"Buy any two signature wrap & get 2 cookie free",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/boc1y4gwuwahwt0lij06",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"BFF Non-Veg Signature Wrap Combo",price:553,desc:"Buy any two signature wrap & get 2 cookie free",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mwgmpozm7p71jeay7yra",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],"Classic Combo":[{name:"Turkey Sub (15 cm, 6 Inch) + Subway club Sub (15 cm, 6 Inch)",price:429,desc:"Price shown is after 10% discount",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pb4whdgqrvv8hxa4u3jg",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"BMT Sub (15 cm, 6 Inch) + Turkey & Chicken Slice Sub (15 cm, 6 Inch)",price:429,desc:"Price shown is after 10% discount",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yqskqclsz5zkzrxxnwhg",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],"Fusion Combo":[{name:"Cheesy Aloo Patty Sub (15 cm, 6 Inch)+ Cheesy aloo patty Sub (15 cm, 6 Inch)",price:454,desc:"Price shown is after 10% discount. Aloo patty + four cheese slices.",img:"",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"Smokey Chicken Club Sub (15 cm, 6 Inch) + Smoked Chicken Club Sub (15 cm, 6 Inch)",price:557,desc:"Price shown is after 10% discount. Roasted chicken strips + Chicken slice",img:"",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],"Meal for One":[{name:"Cookie With Veg Sub Combos (15 cm, 6 Inch)",price:229,desc:'Veg Combos includes one 6" sub along with Choice of Cookie (1 Piece)',img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nfk0a8g6fncsbdhqyi43",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"Cookie With Non Veg Sub Combos (15 cm, 6 Inch)",price:277,desc:'Non Veg Combos includes one 6" sub along with Choice of Cookie (1 Piece)',img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/y9vfnainpzvshvncywhs",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"Cookie With Veg Signature Wrap Combos",price:296,desc:"Veg Combos includes one signature wrap along with Choice of Cookie (1 Piece)",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vqdtrkbggxuatot05wzw",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],"Fusion Range":[{name:"6 Inch Cheesy Aloo Patty",price:253,desc:"Aloo Patty +  Four Cheese Slice",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/j0hjgzyjb14pz2zihzey",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],Sandwiches:[{name:"Aloo Patty Sub ( 15 cm, 6 Inch )",price:205,desc:"The traditional aloo patty seasoned with special herbs and spices with your choice of crisp fresh veggies,  on freshly baked bread. New bread featured - Flatbread.",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/abuelolipwddmh74tbz1",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],"Signature Wraps":[{name:"Paneer Tikka Signature Wraps",price:243,desc:"Signature wraps packed with double protein and loaded flavours",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wwque6g5ijpqc47epbv7",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],Salads:[{name:"Veggie Delite Salad",price:243,desc:"Everything but the bread!",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rzkndwxfptexltwmoioo",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"Chicken Teriyaki Salad",price:296,desc:"Everything but the bread!",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f18lz4jojmwqcecp1u45",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],Sides:[{name:"Veggie Toastie",price:72,desc:"",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/chxczmvytkbycfrfupyb",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"Pepperoni Toastie",price:91,desc:"",img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cb20w45kovm4f5r9yfmm",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],"Cookies and Desserts":[{name:"Double Dark Chunk Chocolate Cookie",price:53,desc:"",img:"",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"Oatmeal Raisin Cookie",price:53,desc:"",img:"",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]},{name:"Dark Chunk Chocolate Cookie ",price:53,desc:"",img:"",veg:!1,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}],"Meal for Two":[{name:"Regular 6 Inch Veg Sub Combo (15 cm, 6 Inch)",price:372,desc:'Combo includes two regular 6" veg sub price plus any one cookie worth Rs 50 free.',img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/msewefhscfmyedz3diz8",veg:!0,addOns:[{name:"Choice of Bread",items:["Multigrain Bread","Multigrain Honey Oats Bread","Italian Bread","Roasted Garlic Bread","Parmesan Oregano Bread","Flat Bread"],optional:!1,priced:!1},{name:"Choice of Preperation",items:["Plain Bread","Plain Bread with Cheese Slice","Toasted Bread","Toasted Bread with Cheese Slice","Toasted with Mozzarella Cheese"],optional:!1,priced:!1},{name:"Choice of Vegetables",items:["Lettuce","Tomato","Cucumber","Pickle","Olives"],optional:!0,priced:!1},{name:"Add On",items:["Veg Protein","Cheese Slice","Mozzarella Cheese"],optional:!0,priced:!1},{name:"Choice of Sauce Any(3)",items:["Mayonnaise","Mint Mayonnaise","Honey Mustard","Red Chilli","Marinara"],optional:!0,priced:!1}]}]}},F=function(e){Object(u.a)(i,e);var a=Object(p.a)(i);function i(){return Object(h.a)(this,i),a.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){var e=R.dishList,a=Object.keys(e).map((function(a){return Object(j.jsxs)("ul",{className:"ch",id:a,children:[Object(j.jsx)("h1",{children:a}),Object(j.jsx)("h5",{children:"".concat(e[a].length," ITEMS")}),e[a].map((function(e){return Object(j.jsx)(A,{obj:e})}))]})}));return Object(j.jsx)("section",{className:"DishList",children:a})}}]),i}(t.Component),I=function(e){Object(u.a)(i,e);var a=Object(p.a)(i);function i(){return Object(h.a)(this,i),a.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){var e=Object.keys(R.dishList).map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"#".concat(e),children:e})})}));return Object(j.jsx)("section",{className:"Categories",children:e})}}]),i}(t.Component),H=function(e){Object(u.a)(i,e);var a=Object(p.a)(i);function i(){return Object(h.a)(this,i),a.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){var e=this;return Object(j.jsx)(j.Fragment,{children:0===Object.keys(this.props.data).length?null:Object(j.jsx)("div",{id:"CustomiserBG",children:Object(j.jsxs)("form",{id:"Customiser",children:[Object(j.jsxs)("section",{id:"Customiser-top",children:[Object(j.jsx)("img",{src:this.props.data.veg?T:z,alt:""}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:['Customise "',this.props.data.name,'"']}),Object(j.jsxs)("h3",{children:["\u20b9",this.props.data.price]})]}),Object(j.jsx)("button",{onClick:function(){return e.props.reset({})},children:"\xd7"})]}),Object(j.jsx)("section",{id:"Customiser-titles",children:this.props.data.addOns.map((function(e){return Object(j.jsx)("div",{children:e.name})}))}),Object(j.jsx)("section",{id:"Customiser-items",children:this.props.data.addOns.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{htmlFor:e,children:e.name}),e.items.map((function(a){return Object(j.jsxs)("label",{htmlFor:e,children:[Object(j.jsx)("input",{type:"radio",value:a,name:e}),a]})}))]})}))}),Object(j.jsx)("section",{id:"Customiser-submit",children:Object(j.jsxs)("div",{id:"Customiser-submit-btn",children:[Object(j.jsxs)("h3",{children:["Total \u20b9",this.props.data.price]}),Object(j.jsx)("h3",{children:"ADD ITEM"})]})})]})})})}}]),i}(t.Component),L=Object(n.b)((function(e){return{data:e.customiser}}),(function(e){return{reset:function(a){return e(k(a))}}}))(H),q=function(e){Object(u.a)(i,e);var a=Object(p.a)(i);function i(){return Object(h.a)(this,i),a.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(M,{}),Object(j.jsx)(v,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)(I,{}),Object(j.jsx)(F,{}),Object(j.jsx)(_,{})]}),Object(j.jsx)(L,{})]})}}]),i}(t.Component);i(34);r.a.render(Object(j.jsx)(n.a,{store:l,children:Object(j.jsx)(q,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ed3257f9.chunk.js.map