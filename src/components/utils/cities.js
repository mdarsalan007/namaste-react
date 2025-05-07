const cities = [
    {
      "city": "Delhi",
      "lat": 28.7040592,
      "lng": 77.10249019999999
    },
    {
      "city": "Mumbai",
      "lat": 19.076,
      "lng": 72.8777
    },
    {
      "city": "Bengaluru",
      "lat": 12.9716,
      "lng": 77.5946
    },
    {
      "city": "Hyderabad",
      "lat": 17.385,
      "lng": 78.4867
    },
    {
      "city": "Chennai",
      "lat": 13.0827,
      "lng": 80.2707
    },
    {
      "city": "Kolkata",
      "lat": 22.5726,
      "lng": 88.3639
    },
    {
      "city": "Pune",
      "lat": 18.5204,
      "lng": 73.8567
    },
    {
      "city": "Jaipur",
      "lat": 26.9124,
      "lng": 75.7873
    },
    {
      "city": "Ahmedabad",
      "lat": 23.0225,
      "lng": 72.5714
    },
    {
      "city": "Lucknow",
      "lat": 26.8467,
      "lng": 80.9462
    },
    {
      "city": "Kanpur",
      "lat": 26.4499,
      "lng": 80.3319
    },
    {
      "city": "Nagpur",
      "lat": 21.1458,
      "lng": 79.0882
    },
    {
      "city": "Indore",
      "lat": 22.7196,
      "lng": 75.8577
    },
    {
      "city": "Bhopal",
      "lat": 23.2599,
      "lng": 77.4126
    },
    {
      "city": "Patna",
      "lat": 25.5941,
      "lng": 85.1376
    },
    {
      "city": "Ludhiana",
      "lat": 30.901,
      "lng": 75.8573
    },
    {
      "city": "Agra",
      "lat": 27.1767,
      "lng": 78.0081
    },
    {
      "city": "Nashik",
      "lat": 19.9975,
      "lng": 73.7898
    },
    {
      "city": "Vadodara",
      "lat": 22.3072,
      "lng": 73.1812
    },
    {
      "city": "Varanasi",
      "lat": 25.3176,
      "lng": 82.9739
    },
    {
      "city": "Amritsar",
      "lat": 31.634,
      "lng": 74.8723
    },
    {
      "city": "Surat",
      "lat": 21.1702,
      "lng": 72.8311
    },
    {
      "city": "Rajkot",
      "lat": 22.3039,
      "lng": 70.8022
    },
    {
      "city": "Srinagar",
      "lat": 34.0837,
      "lng": 74.7973
    },
    {
      "city": "Jodhpur",
      "lat": 26.2389,
      "lng": 73.0243
    },
    {
      "city": "Ranchi",
      "lat": 23.3441,
      "lng": 85.3096
    },
    {
      "city": "Guwahati",
      "lat": 26.1445,
      "lng": 91.7362
    },
    {
      "city": "Chandigarh",
      "lat": 30.7333,
      "lng": 76.7794
    },
    {
      "city": "Allahabad",
      "lat": 25.4358,
      "lng": 81.8463
    },
    {
      "city": "Coimbatore",
      "lat": 11.0168,
      "lng": 76.9558
    },
    {
      "city": "Vijayawada",
      "lat": 16.5062,
      "lng": 80.648
    },
    {
      "city": "Madurai",
      "lat": 9.9252,
      "lng": 78.1198
    },
    {
      "city": "Raipur",
      "lat": 21.2514,
      "lng": 81.6296
    },
    {
      "city": "Jamshedpur",
      "lat": 22.8046,
      "lng": 86.2029
    },
    {
      "city": "Dehradun",
      "lat": 30.3165,
      "lng": 78.0322
    },
    {
      "city": "Gwalior",
      "lat": 26.2183,
      "lng": 78.1828
    },
    {
      "city": "Jabalpur",
      "lat": 23.1815,
      "lng": 79.9864
    },
    {
      "city": "Udaipur",
      "lat": 24.5854,
      "lng": 73.7125
    },
    {
      "city": "Mysuru",
      "lat": 12.2958,
      "lng": 76.6394
    },
    {
      "city": "Hubballi",
      "lat": 15.3647,
      "lng": 75.124
    },
    {
      "city": "Belagavi",
      "lat": 15.8497,
      "lng": 74.4977
    },
    {
      "city": "Dhanbad",
      "lat": 23.7957,
      "lng": 86.4304
    },
    {
      "city": "Tiruchirappalli",
      "lat": 10.7905,
      "lng": 78.7047
    },
    {
      "city": "Bareilly",
      "lat": 28.367,
      "lng": 79.4304
    },
    {
      "city": "Moradabad",
      "lat": 28.8386,
      "lng": 78.7733
    },
    {
      "city": "Kolhapur",
      "lat": 16.705,
      "lng": 74.2433
    },
    {
      "city": "Guntur",
      "lat": 16.3067,
      "lng": 80.4365
    },
    {
      "city": "Noida",
      "lat": 28.5355,
      "lng": 77.391
    },
    {
      "city": "Ghaziabad",
      "lat": 28.6692,
      "lng": 77.4538
    },
    {
      "city": "Jammu",
      "lat": 32.7266,
      "lng": 74.857
    },
    {
      "city": "Panaji",
      "lat": 15.4909,
      "lng": 73.8278
    },
    {
      "city": "Imphal",
      "lat": 24.817,
      "lng": 93.9368
    },
    {
      "city": "Shillong",
      "lat": 25.5788,
      "lng": 91.8933
    },
    {
      "city": "Aizawl",
      "lat": 23.7271,
      "lng": 92.7176
    },
    {
      "city": "Agartala",
      "lat": 23.8315,
      "lng": 91.2868
    },
    {
      "city": "Itanagar",
      "lat": 27.0844,
      "lng": 93.6053
    },
    {
      "city": "Port Blair",
      "lat": 11.6234,
      "lng": 92.7265
    },
    {
      "city": "Silchar",
      "lat": 24.8333,
      "lng": 92.7789
    },
    {
      "city": "Kochi",
      "lat": 9.9312,
      "lng": 76.2673
    },
    {
      "city": "Thiruvananthapuram",
      "lat": 8.5241,
      "lng": 76.9366
    },
    {
      "city": "Thrissur",
      "lat": 10.5276,
      "lng": 76.2144
    },
    {
      "city": "Alappuzha",
      "lat": 9.4981,
      "lng": 76.3388
    },
    {
      "city": "Vellore",
      "lat": 12.9165,
      "lng": 79.1325
    },
    {
      "city": "Tirunelveli",
      "lat": 8.7139,
      "lng": 77.7567
    },
    {
      "city": "Nellore",
      "lat": 14.4426,
      "lng": 79.9865
    },
    {
      "city": "Warangal",
      "lat": 17.9784,
      "lng": 79.6003
    },
    {
      "city": "Kurnool",
      "lat": 15.8281,
      "lng": 78.0373
    },
    {
      "city": "Karimnagar",
      "lat": 18.4386,
      "lng": 79.1288
    },
    {
      "city": "Anantapur",
      "lat": 14.6819,
      "lng": 77.6006
    },
    {
      "city": "Tirupati",
      "lat": 13.6288,
      "lng": 79.4192
    },
    {
      "city": "Eluru",
      "lat": 16.7107,
      "lng": 81.0955
    },
    {
      "city": "Nizamabad",
      "lat": 18.6725,
      "lng": 78.0941
    },
    {
      "city": "Bhimavaram",
      "lat": 16.5448,
      "lng": 81.5212
    },
    {
      "city": "Ongole",
      "lat": 15.5057,
      "lng": 80.0499
    },
    {
      "city": "Adoni",
      "lat": 15.6301,
      "lng": 77.2757
    },
    {
      "city": "Proddatur",
      "lat": 14.7502,
      "lng": 78.5522
    },
    {
      "city": "Hindupur",
      "lat": 13.8291,
      "lng": 77.4922
    },
    {
      "city": "Kadapa",
      "lat": 14.4674,
      "lng": 78.8241
    },
    {
      "city": "Machilipatnam",
      "lat": 16.1875,
      "lng": 81.1389
    },
    {
      "city": "Nandyal",
      "lat": 15.4786,
      "lng": 78.4836
    },
    {
      "city": "Chittoor",
      "lat": 13.2172,
      "lng": 79.1003
    },
    {
      "city": "Kavali",
      "lat": 14.9158,
      "lng": 79.9928
    },
    {
      "city": "Aligarh",
      "lat": 27.881911,
      "lng": 77.997073
    },
    {
      "city": "Jhansi",
      "lat": 25.439995,
      "lng": 78.552586
    },
    {
      "city": "Ujjain",
      "lat": 23.199444,
      "lng": 75.797500
    }
  ]

  export default cities;