import React from 'react';


const Hotel_data = [
    {
      id: id_prefix + '1',
      website: 'agoda',
      name: 'Ibis Hong Kong Central',
      address: '德輔道西28號, 中環',
      image_src: 'https://pix8.agoda.net/hotelImages/7540349/0/aca80a93ed9357111a0229b33ae84f68.jpg',
      price: '492',
      price_min: 492,
      rating: 80,
      popularity: 87,
      details: `8.1 激讚 18,634 條評價`,
      url:'https://www.agoda.com/zh-tw/ibis-hong-kong-central-sheung-wan-hotel/hotel/hong-kong-hk.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1729890&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2021-12-4&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=HKD&isFreeOccSearch=false&tag=272992264I5WJy61a1302765&isCityHaveAsq=false&los=1&searchrequestid=8167c1ab-0fd4-49e9-91ed-e29048d7aef0',
      interiors: [
      ],
    },
    {
      id: id_prefix + '2',
      website: 'agoda',
      name: 'Eco Tree Hotel',
      address: '德輔道西156-160號, 港島西區, 香港, 中國香港 ',
      image_src: 'https://pix8.agoda.net/hotelImages/1120100/-1/04c88c70fc19116af9ab7f29d023807e.jpg',
      price: '831',
      price_min: 831,
      rating: 75,
      popularity: 76,
      details: `8.5 激讚 4,430 條評價`,
      url: 'https://www.agoda.com/zh-tw/eco-tree-hotel/hotel/hong-kong-hk.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1729890&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2021-12-4&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=HKD&isFreeOccSearch=false&tag=272992264I5WJy61a1302765&isCityHaveAsq=false&tspTypes=4&los=1&searchrequestid=f6121ef0-2a19-4d36-8ee0-687bdd8c347e',
      interiors: [
      ],
    },
    {
      id: id_prefix + '3',
      website: 'Trip.com',
      name: 'Ibis Hong Kong Sheung Wan Hotel',
      address: '上環德輔道西28號，中西區',
      image_src: 'https://ak-d.tripcdn.com/images/200k0h0000008s4ooB95F_Z_1080_808_R5_D.jpg',
      details: `性價比高、無敵海景 95%推薦度`,
      price: '364',
      price_min: 364,
      rating: 70,
      popularity: 89,
      url: 'https://hk.trip.com/hotels/hong-kong-hotel-detail-436864/ibis-hong-kong-central-and-sheung-wan-hotel/?cityId=58&checkIn=2021-12-07&checkOut=2021-12-08&adult=2&children=0&crn=1&ages=&travelpurpose=0&curr=HKD&link=title&hoteluniquekey=H4sIAAAAAAAAAONaz8jFK8Fk8B8GGIWYOBilZjJyXNgyu4_FYLaAxcxcRwYQUCh08AQzLhQ5BPBMYpTihPEEPR5Wiax7XuDgxMbxdh6TBMsMxoarUhsZwfIM1g47GJlOMJ5jWsB06PJihV1MUEWHmFg5uqQkWE4xMVxiYrjFxPCIieEVE8MnJoZfMCVNzAxdzAyTmCEKZzEzLGJmEGIFu0xKIdHMMDUxLTHZzMjCzMQ8zSLRzNgoOTnVyNTM0MzcwtBAgVtj78OWXjYj8VOMIoZmxubm5qbGhqaGBqZ6RqUG2SnFVsxSjG4ejEFsLi4GlkYWUTJczM5-kYIQV3-wl2L28HZRdGx6dHyG9Sv7JNaqDF0P74z1HAWMXYxsAowejBGMAIxvDVo-AQAA',
      interiors: [
      ],
    },
    {
      id: id_prefix + '4',
      website: 'Trip.com',
      name: '99 Bonham',
      address: '上環文咸東街99號，中西區',
      image_src: 'https://ak-d.tripcdn.com/images/hotel/709000/708750/e3de6c6dd00243c7886b660689492394_Z_1080_808_R5_D.jpg',
      details: `設施很好、房間很大 95%推薦度`,
      price: '691',
      price_min: 691,
      rating: 60,
      popularity: 91,
      url: 'https://hk.trip.com/hotels/hong-kong-hotel-detail-708765/99-bonham/?cityId=58&checkIn=2021-12-07&checkOut=2021-12-08&adult=2&children=0&crn=1&ages=&travelpurpose=0&curr=HKD&link=title&hoteluniquekey=H4sIAAAAAAAAAOO6xsTFK8Fk8B8GGIWYOBilDjBxTN7azeTIAAICTQ6eYMaDZocAnkIwkyHNoZHRW3NeZsW9SIdJjKsZOcGiH_ocBMEMny4HJWeOqZtWsQmIS9y6tYpPgVETLNEQ52AIY1iUOXJlKOWAjPCEMYJYOc5ySzBFsXFMvMUuwaakzfFr_1ROAUaJ_T_micIMYVCCGgJkWHTyBLFwJAO1MCgpKLBAbXGD2eLmYPGME2joUhaQCidmjnvsMxjnLtTeyAgxwNdhByPTCcZDrAuY-hZq72ICKTjExMrRYS7BcoqJ4RITwy0mhkdAgasCEkyvmBg-MUFd9gustImZoYuZYRIzRMMsZoi6RcwMQiygAJRSSDS0NLZINU02MTE0MklKMbY0sEhNTDNMsTCztEgzNDRQ4Nb48LCll81I_BSjiKGZsbm5uamxoamhgameUalBdkqxFbMUo5sHYxCbhaOLm5NBlAwXs4e3i6Bj06PjM6xf2UuBeIowXhJrVYauh3fGeo4Cxi5GNgFGD8YIRgAz7KSp5AEAAA&barcurr=HKD',
      interiors: [
      ],
    },
    {
      id: id_prefix + '5',
      website: 'hotels.com',
      name: '宜必思香港中上環酒店',
      address: '上環, 香港',
      image_src: 'https://exp.cdn-hotels.com/hotels/6000000/5280000/5276000/5275901/9941d1df_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium',
      details: `202 位旅客評價位置方便`,
      price: '575',
      price_min: 575,
      rating: 55,
      popularity: 93,
      url: 'https://zh.hotels.com/ho415581/?q-check-in=2021-11-27&q-check-out=2021-11-28&q-rooms=1&q-room-0-adults=2&q-room-0-children=0&WOD=6&WOE=7&MGT=1&ZSX=0&SYE=3&YGF=1',
      interiors: [
      ],
    },
    {
      id: id_prefix + '6',
      website: 'hotels.com',
      name: '富薈尚乘上環酒店',
      address: '文咸西街 5 號, 香港',
      image_src: 'https://exp.cdn-hotels.com/hotels/54000000/53210000/53201600/53201579/a2c66b66_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium',
      details: `197 位旅客評價位置方便`,
      price: '585',
      price_min: 585,
      rating: 100,
      popularity: 78,
      url:'https://zh.hotels.com/ho450301/?q-check-in=2021-11-27&q-check-out=2021-11-28&q-rooms=1&q-room-0-adults=2&q-room-0-children=0&WOD=6&WOE=7&MGT=1&ZSX=0&SYE=3&YGF=1',
      interiors: [
      ],
    }
]

export default Hotel_data;