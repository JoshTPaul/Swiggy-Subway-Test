const subwayData = {
    id: '00example00',
    rName: 'Subway',
    rLogo: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/subway_020_ooxsox',
    categories: 'Fast Food, Salads, Snacks, Desserts, Beverages',
    location: 'Central Bangalore, Central Bangalore',
    rating: 4.4,
    deliveryTime: '31 mins',
    avgPrice: '350',
    offers: ['20% off up to ₹50 | Use code SWIGGYIT', 'Free delivery up to ₹30 on orders above ₹149 | Use code FREEDEL'],
    dishList: {
        Recommended: [
            {
                name: 'BFF Veg Sub Combo (15 cm, 6 Inch)',
                price: 371,
                desc: 'Buy any two 6" veg sub & get 2 cookie free',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gjj06n5ktrxtx1tzmcac',
                veg: true,
                addOns: [
                    {
                        name: 'Choice of Bread',
                        items: ['Multigrain Bread', 'Multigrain Honey Oats Bread', 'Italian Bread', 'Roasted Garlic Bread', 'Parmesan Oregano Bread', 'Flat Bread'],

                        optional: false,
                        priced: false
                    },
                    {
                        name: 'Choice of Preperation',
                        items: ['Plain Bread', 'Plain Bread with Cheese Slice', 'Toasted Bread', 'Toasted Bread with Cheese Slice', 'Toasted with Mozzarella Cheese'],

                        optional: false,
                        priced: false
                    },
                    {
                        name: 'Choice of Vegetables',
                        items: ['Lettuce', 'Tomato', 'Cucumber', 'Pickle', 'Olives'],

                        optional: true,
                        priced: false
                    },
                    {
                        name: 'Add On',
                        items: ['Veg Protein', 'Cheese Slice', 'Mozzarella Cheese'],

                        optional: true,
                        priced: false
                    },
                    {
                        name: 'Choice of Sauce Any(3)',
                        items: ['Mayonnaise', 'Mint Mayonnaise', 'Honey Mustard', 'Red Chilli', 'Marinara'],

                        optional: true,
                        priced: false
                    }

                ]
            },
            {
                name: 'BFF Non-Veg Sub Combo (15 cm, 6 Inch)',
                price: 448,
                desc: 'Buy any two 6" non-veg sub & get 2 cookie free',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0q0eex55cmkpkxtbrhw',
                veg: false
            },
            {
                name: 'BFF Veg Signature Wrap Combo',
                price: 486,
                desc: 'Buy any two signature wrap & get 2 cookie free',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/boc1y4gwuwahwt0lij06',
                veg: true
            },
            {
                name: 'BFF Non-Veg Signature Wrap Combo',
                price: 553,
                desc: 'Buy any two signature wrap & get 2 cookie free',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mwgmpozm7p71jeay7yra',
                veg: false
            },
            {
                name: 'Turkey Sub (15 cm, 6 Inch) + Subway club Sub (15 cm, 6 Inch)',
                price: 429,
                desc: 'Price shown is after 10% discount',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pb4whdgqrvv8hxa4u3jg',
                veg: false
            }

        ],

        'BFF Combos': [
            {
                name: 'BFF Veg Sub Combo (15 cm, 6 Inch)',
                price: 371,
                desc: 'Buy any two 6" veg sub & get 2 cookie free',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gjj06n5ktrxtx1tzmcac',
                veg: true
            },
            {
                name: 'BFF Non-Veg Sub Combo (15 cm, 6 Inch)',
                price: 448,
                desc: 'Buy any two 6" non-veg sub & get 2 cookie free',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0q0eex55cmkpkxtbrhw',
                veg: false
            },
            {
                name: 'BFF Veg Signature Wrap Combo',
                price: 486,
                desc: 'Buy any two signature wrap & get 2 cookie free',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/boc1y4gwuwahwt0lij06',
                veg: true
            },
            {
                name: 'BFF Non-Veg Signature Wrap Combo',
                price: 553,
                desc: 'Buy any two signature wrap & get 2 cookie free',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mwgmpozm7p71jeay7yra',
                veg: false
            }

        ],

        'Classic Combo': [
            {
                name: 'Turkey Sub (15 cm, 6 Inch) + Subway club Sub (15 cm, 6 Inch)',
                price: 429,
                desc: 'Price shown is after 10% discount',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pb4whdgqrvv8hxa4u3jg',
                veg: false
            },
            {
                name: 'BMT Sub (15 cm, 6 Inch) + Turkey & Chicken Slice Sub (15 cm, 6 Inch)',
                price: 429,
                desc: 'Price shown is after 10% discount',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yqskqclsz5zkzrxxnwhg',
                veg: false
            }


        ],

        'Fusion Combo': [
            {
                name: 'Cheesy Aloo Patty Sub (15 cm, 6 Inch)+ Cheesy aloo patty Sub (15 cm, 6 Inch)',
                price: 454,
                desc: 'Price shown is after 10% discount. Aloo patty + four cheese slices.',
                img: '',
                veg: true
            },
            {
                name: 'Smokey Chicken Club Sub (15 cm, 6 Inch) + Smoked Chicken Club Sub (15 cm, 6 Inch)',
                price: 557,
                desc: 'Price shown is after 10% discount. Roasted chicken strips + Chicken slice',
                img: '',
                veg: false
            }
        ],

        'Meal for One': [
            {
                name: 'Cookie With Veg Sub Combos (15 cm, 6 Inch)',
                price: 229,
                desc: 'Veg Combos includes one 6" sub along with Choice of Cookie (1 Piece)',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nfk0a8g6fncsbdhqyi43',
                veg: true
            },
            {
                name: 'Cookie With Non Veg Sub Combos (15 cm, 6 Inch)',
                price: 277,
                desc: 'Non Veg Combos includes one 6" sub along with Choice of Cookie (1 Piece)',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/y9vfnainpzvshvncywhs',
                veg: false
            },
            {
                name: 'Cookie With Veg Signature Wrap Combos',
                price: 296,
                desc: 'Veg Combos includes one signature wrap along with Choice of Cookie (1 Piece)',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vqdtrkbggxuatot05wzw',
                veg: true
            }
        ],

        'Fusion Range': [
            {
                name: '6 Inch Cheesy Aloo Patty',
                price: 253,
                desc: 'Aloo Patty +  Four Cheese Slice',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/j0hjgzyjb14pz2zihzey',
                veg: true
            }
        ],

        'Sandwiches': [
            {
                name: 'Aloo Patty Sub ( 15 cm, 6 Inch )',
                price: 205,
                desc: 'The traditional aloo patty seasoned with special herbs and spices with your choice of crisp fresh veggies,  on freshly baked bread. New bread featured - Flatbread.',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/abuelolipwddmh74tbz1',
                veg: true
            }

        ],

        'Signature Wraps': [
            {
                name: 'Paneer Tikka Signature Wraps',
                price: 243,
                desc: 'Signature wraps packed with double protein and loaded flavours',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wwque6g5ijpqc47epbv7',
                veg: true
            }

        ],

        'Salads': [
            {
                name: 'Veggie Delite Salad',
                price: 243,
                desc: 'Everything but the bread!',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rzkndwxfptexltwmoioo',
                veg: true
            },
            {
                name: 'Chicken Teriyaki Salad',
                price: 296,
                desc: 'Everything but the bread!',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f18lz4jojmwqcecp1u45',
                veg: false
            },
        ],

        'Sides': [
            {
                name: 'Veggie Toastie',
                price: 72,
                desc: '',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/chxczmvytkbycfrfupyb',
                veg: true
            },
            {
                name: 'Pepperoni Toastie',
                price: 91,
                desc: '',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cb20w45kovm4f5r9yfmm',
                veg: false
            }
        ],

        'Cookies and Desserts': [
            {
                name: 'Double Dark Chunk Chocolate Cookie',
                price: 53,
                desc: '',
                img: '',
                veg: false
            },
            {
                name: 'Oatmeal Raisin Cookie',
                price: 53,
                desc: '',
                img: '',
                veg: false
            },
            {
                name: 'Dark Chunk Chocolate Cookie ',
                price: 53,
                desc: '',
                img: '',
                veg: false
            }

        ],

        'Meal for Two': [
            {
                name: 'Regular 6 Inch Veg Sub Combo (15 cm, 6 Inch)',
                price: 372,
                desc: 'Combo includes two regular 6" veg sub price plus any one cookie worth Rs 50 free.',
                img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/msewefhscfmyedz3diz8',
                veg: true
            }
        ],
    }
}

export default subwayData;