import React from 'react';

const Washroom_data = [
    {'district': 'Island',
    'name': 'Arrival Goods Vehicle Clearance Plaza Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=1346&type=toilet',
    'address': 'Arrival Goods Vehicle Clearance Plaza, Hong Kong-Zhuhai-Macao Bridge Hong Kong Port'},
    {'district': 'Island',
    'name': 'Arrival Private Car Clearance Plaza Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=1345&type=toilet',
    'address': 'Arrival Private Car Clearance Plaza, Hong Kong-Zhuhai-Macao Bridge Hong Kong Port'},
    {'district': 'Island',
    'name': 'Cheung Chau Peak Road Public Toilet cum Bathhouse',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=886&type=toilet',
    'address': 'Peak Road, Cheung Chau'},
    {'district': 'Island',
    'name': 'Choi Yuen Tsuen Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=981&type=toilet',
    'address': 'Choi Yuen Tsuen, Lantau'},
    {'district': 'Island',
    'name': 'Chung Hau Village Public Toilet, Mui Wo',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=913&type=toilet',
    'address': 'Chung Hau Village, Mui Wo'},
    {'district': 'Island',
    'name': 'Chung Hing Back Street Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=883&type=toilet',
    'address': 'Chung Hing Back Street, Cheung Chau'},
    {'district': 'Island',
    'name': 'Departure Goods Vehicle Clearance Plaza Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=1347&type=toilet',
    'address': 'Departure Goods Vehicle Clearance Plaza, Hong Kong-Zhuhai-Macao Bridge Hong Kong Port'},
    {'district': 'Island',
    'name': 'Departure Private Car Clearance Plaza Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=1348&type=toilet',
    'address': 'Departure Private Car Clearance Plaza, Hong Kong-Zhuhai-Macao Bridge Hong Kong Port'},
    {'district': 'Island',
    'name': 'Ha Ling Pei Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=1366&type=toilet',
    'address': 'Ha Ling Pei, Tung Chung'},
    {'district': 'Island',
    'name': 'Ham Tin San Tsuen, Lantau Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=973&type=toilet',
    'address': 'Ham Tin San Tsuen, Lantau'},
    {'district': 'Central and Western',
    'name': "Belcher's Street Public Toilet",
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=370&type=toilet',
    'address': "Behind No.2-12 Belcher's Street, Sai Wan"},
    {'district': 'Central and Western',
    'name': 'Centre Street Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=1353&type=toilet',
    'address': 'near Centre Street Market, First Street, Sai Ying Pun'},
    {'district': 'Central and Western',
    'name': 'Exchange Square Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=340&type=toilet',
    'address': 'G/F of Exchange Square near Bus Terminus, Central'},
    {'district': 'Central and Western',
    'name': 'Glenealy Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=348&type=toilet',
    'address': 'Junction of Glenealy &amp; Arbuthnot Road, Central'},
    {'district': 'Central and Western',
    'name': 'Hatton Road Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=355&type=toilet',
    'address': 'Junction of Hatton Road &amp; Harlech Road, Mid-levels'},
    {'district': 'Central and Western',
    'name': 'Hong Kong Park Indoor Game Hall Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=350&type=toilet',
    'address': 'At rear of Hong Kong Park Indoor Game Hall, Central'},
    {'district': 'Central and Western',
    'name': 'Hospital Road Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=364&type=toilet',
    'address': 'Basement, Centre for Food Safety, No 4 Hospital Road, Sai Ying Pun'},
    {'district': 'Central and Western',
    'name': 'Ice House Street Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=347&type=toilet',
    'address': 'Opposite to No.16 Ice House Street, Central'},
    {'district': 'Central and Western',
    'name': 'In Ku Lane Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=366&type=toilet',
    'address': 'No 8 In Ku Lane, Sheung Wan'},
    {'district': 'Central and Western',
    'name': 'Kennedy Road Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=351&type=toilet',
    'address': 'Junction of Kennedy Road &amp; Garden Road, Central'},
    {'district': 'Kwun Tong',
    'name': 'Cha Kwo Ling Road Public Toilet cum Bathhouse',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=460&type=toilet',
    'address': 'At side of No.90 Cha Kwo Ling Main Street'},
    {'district': 'Kwun Tong',
    'name': 'Chun Wah Road Public Toilet ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=453&type=toilet',
    'address': 'At Chun Wah Road Bus Terminus, Ngau Tau Kok'},
    {'district': 'Kwun Tong',
    'name': 'Kei Yip Lane Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=456&type=toilet',
    'address': 'Near Kwun Tong Ferry Pier Bus Terminus at Kei Yip Lane, Kwun Tong'},
    {'district': 'Kwun Tong',
    'name': 'Kwun Tong Road Public Toilet ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=458&type=toilet',
    'address': 'At Kwun Tong Road Bus Terminus'},
    {'district': 'Kwun Tong',
    'name': 'Lai Yip Street Public Toilet ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=455&type=toilet',
    'address': 'At junction of Lai Yip Street &amp; Wai Yip Street'},
    {'district': 'Kwun Tong',
    'name': 'Lei Yue Mun (Ling Nam Sun Tsuen) Public Toilet ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=459&type=toilet',
    'address': 'At Lei Yue Mun Path Lei Yue Mun'},
    {'district': 'Kwun Tong',
    'name': 'Lei Yue Mun Ma Wan Public Toilet cum Bathhouse',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=462&type=toilet',
    'address': 'At entrance of Ma Wan Village Lei Yue Mun'},
    {'district': 'Kwun Tong',
    'name': 'Ngau Tau Kok Public Toilet / Bathhouse',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=461&type=toilet',
    'address': 'At No.1 Ting Fu Street Ngau Tau Kok'},
    {'district': 'Kwun Tong',
    'name': 'Shung Yan Street Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=454&type=toilet',
    'address': 'At side of No. 39, Shung Yan Street Kwun Tong'},
    {'district': 'Kwun Tong',
    'name': 'Tseung Kwan O Tunnel Bus-Bus Interchange Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=1360&type=toilet',
    'address': 'Tseung Kwan O Tunnel Bus-Bus Interchange, Kwun Tong'},
    {'district': 'Kowloon City',
    'name': 'Baker Street Public Toilet  ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=607&type=toilet',
    'address': 'No.65, Baker Street  '},
    {'district': 'Kowloon City',
    'name': 'Dyer Avenue Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=602&type=toilet',
    'address': 'No. 1, Dyer Avenue'},
    {'district': 'Kowloon City',
    'name': 'Gillies Avenue South Public Toilet  ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=606&type=toilet',
    'address': 'Junction of Gillies Avenue South and Station Lane '},
    {'district': 'Kowloon City',
    'name': 'Hok Yuen Street Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=608&type=toilet',
    'address': 'No.12A, Hok Yuen Street'},
    {'district': 'Kowloon City',
    'name': 'Hung Hom Complex Public Toilet  ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=610&type=toilet',
    'address': '1/F, Hung Hom Complex, 11 Ma Tai Wai Road  '},
    {'district': 'Kowloon City',
    'name': 'Kowloon City Complex Public Toilet  ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=615&type=toilet',
    'address': '1/F, Kowloon City Complex, Hau Wong Road  '},
    {'district': 'Kowloon City',
    'name': 'Kowloon City Road Public Toilet  ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=604&type=toilet',
    'address': 'No. 3, Kowloon City Road  '},
    {'district': 'Kowloon City',
    'name': 'Kowloon Tong Public Transport Interchange Public Toilet',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=616&type=toilet',
    'address': 'Suffolk Road, Kowloon Tong'},
    {'district': 'Kowloon City',
    'name': 'Lung Kong Road Public Toilet  ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=613&type=toilet',
    'address': 'No. 30-32, Lung Kong Road  '},
    {'district': 'Kowloon City',
    'name': 'Ma Tau Kok Road Public Toilet-cum-bathhouse  ',
    'url': 'https://www.fehd.gov.hk/english/map/toilet/toilet_pt.html?mapID=603&type=toilet',
    'address': 'No. 180, Kowloon City Road  '}

]


export default Washroom_data;
