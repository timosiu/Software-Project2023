CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL,
  `image` varchar(200),
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `rooms` (
  `id` varchar(36) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(1000),
  `amenities` varchar(255),
  `price` FLOAT NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `room_images` (
  `id` varchar(36) NOT NULL,
  `room_id` varchar(36) NOT NULL,
  `image` varchar(200) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `services` (
  `id` varchar(36) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255),
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `service_images` (
  `id` varchar(36) NOT NULL,
  `service_id` varchar(36) NOT NULL,
  `image` varchar(200) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `activities` (
  `id` varchar(36) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255),
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `activity_images` (
  `id` varchar(36) NOT NULL,
  `activity_id` varchar(36) NOT NULL,
  `image` varchar(200) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  `room_id` varchar(100) NOT NULL,
  `message` varchar(1600) NOT NULL,
  `rating` tinyint NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `reservations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  `room_id` varchar(100) NOT NULL,
  `price_total` FLOAT NOT NULL,
  `people_amount` int(11) NOT NULL,
  `start_date` varchar(100) NOT NULL,
  `end_date` varchar(100) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`)
VALUES (
    1,
    'Xavier Oeth',
    'xavier@oeth.com',
    '$2a$12$stzoKdDeAhklwUiwIKyK7./Ijl3L03UxMyKg.ElzCrgQCW9wkA7Wi',
    'https://xsgames.co/randomusers/assets/avatars/male/69.jpg'
  );
INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`)
VALUES (
    2,
    'Daniela Magnaye',
    'daniela@magnaye.com',
    '$2a$12$stzoKdDeAhklwUiwIKyK7./Ijl3L03UxMyKg.ElzCrgQCW9wkA7Wi',
    'https://xsgames.co/randomusers/assets/avatars/female/69.jpg'
  );
INSERT INTO `rooms` (`id`, `title`, `description`, `amenities`, `price`)
VALUES (
    1,
    'Serene Forest Suite',
    'Indulge in the tranquility of our Serene Forest Suite, where nature seamlessly intertwines with luxury. This thoughtfully designed haven invites you to unwind amidst the gentle rustle of leaves and the dappled sunlight filtering through the trees. Adorned with earthy tones and natural textures, the Serene Forest Suite offers a harmonious escape complete with panoramic views of the surrounding woodlands. Immerse yourself in the serenity of nature while enjoying the comfort of modern amenities, creating an enchanting retreat that seamlessly blends the outdoors with unparalleled relaxation.',
    '["TV","Safe","Minibar","Bath with rain shower and bathtub","Air conditioning","King-size bed","Desk and chair","Blackout curtains","Free wifi","Bathrobes and towels"]',
    385
  );
INSERT INTO `rooms` (`id`, `title`, `description`, `amenities`, `price`)
VALUES (
    2,
    'Sunset Serenity Suite',
    'Step into the "Sunset Serenity Suite," a luxurious haven infused with sunset hues and tranquility. Enjoy a king-sized bed draped in soft linens, an opulent en-suite bathroom with a soaking tub, and a private balcony offering breathtaking views - a perfect blend of luxury and natural beauty for a memorable stay.',
    '["TV","Safe","Minibar","Bath with rain shower and bathtub","Air conditioning","King-size bed"]',
    325
  );
INSERT INTO `rooms` (`id`, `title`, `description`, `amenities`, `price`)
VALUES (
    3,
    'Tranquil Oasis Family Suite',
    'Step into the "Tranquil Oasis Family Suite," a serene retreat designed for family comfort. Enjoy a spacious living area with picturesque views, a master bedroom with a king-sized bed, and a separate sleeping space for kids. The modern bathroom features a rainfall shower and soaking tub, while a private balcony invites moments of togetherness amidst tranquility and natural beauty.',
    '["TV","Safe","Minibar","Bath with rain shower and bathtub","Air conditioning"]',
    355
  );
INSERT INTO `rooms` (`id`, `title`, `description`, `amenities`, `price`)
VALUES (
    4,
    'Green Serenity Skyline',
    'Welcome to the "Green Serenity Skyline," an eco-luxury haven perched above the city. This elegantly designed retreat features panoramic city views, a king-sized bed with organic linens, and an en-suite bathroom adorned with energy-efficient fixtures. Relax on the private terrace, embracing nature while enjoying the sustainable luxury of this exclusive sanctuary.',
    '["TV","Safe","Minibar","Bath with rain shower and bathtub","Air conditioning","King-size bed","Desk and chair","Blackout curtains","Free wifi"]',
    365
  );
INSERT INTO `room_images` (`id`, `room_id`, `image`)
VALUES (
    1,
    1,
    'https://monbret.com/cdn/shop/articles/mark-champs-Id2IIl1jOB0-unsplash.jpg?v=1686999360&width=1100'
  );
INSERT INTO `room_images` (`id`, `room_id`, `image`)
VALUES (
    2,
    2,
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg'
  );
INSERT INTO `room_images` (`id`, `room_id`, `image`)
VALUES (
    3,
    3,
    'https://www.hospitalitynet.org/picture/xxl_153137742.jpg?t=1644918765'
  );
INSERT INTO `room_images` (`id`, `room_id`, `image`)
VALUES (
    4,
    4,
    'https://www.matkapojat.fi//images/imagemanager/thumbnails/Nordic_Hotel_Forum_Tallinna_standard_doubleroom_720x490.f5256ef39a95e9cb4b0a97be2f0240059485db75.jpg'
  );
INSERT INTO `services` (`id`, `title`, `description`)
VALUES (
    1,
    'Summer Terrace',
    'Enjoy alfresco lunches and dinners or unwind and enjoy one of our great cocktail concoctions outdoors.'
  );
INSERT INTO `services` (`id`, `title`, `description`)
VALUES (
    2,
    'Spa',
    'Finnish dry sauna, wet sauna, waterfall shower, and a peaceful relaxing area.'
  );
INSERT INTO `services` (`id`, `title`, `description`)
VALUES (
    3,
    'Gym',
    'Packed with cardio and resistance equipment and free weights, you can unwind after a busy day in our gym facilities.'
  );
INSERT INTO `activities` (`id`, `title`, `description`)
VALUES (
    1,
    'Music and dance retreats',
    'Immerse yourself in a vibrant world of rhythm and movement during our music and dance retreats'
  );
INSERT INTO `activities` (`id`, `title`, `description`)
VALUES (
    2,
    'Art and creativity sessions',
    'Unleash your creativity in our art sessions designed to ignite inspiration and imagination : host painting or sculptures workshops with renowned artists'
  );
INSERT INTO `activities` (`id`, `title`, `description`)
VALUES (
    3,
    'Meditation',
    'Discover inner peace and tranquility through guided meditation sessions designed to relax the mind, rejuvenate the spirit, and promote overall well-being'
  );
INSERT INTO `activities` (`id`, `title`, `description`)
VALUES (
    4,
    'Yoga sessions',
    'Join our experienced instructors for yoga sessions that cater to all skill levels, fostering balance, flexibility and mindfulness in a serene and scenic setting'
  );
INSERT INTO `activities` (`id`, `title`, `description`)
VALUES (
    5,
    'Hiking with a guide',
    'Explore the natural beauty of the surroundings with knowledgeable guides leading invigorating hikes, providing insights into the area''s flora, fauna and hidden gems'
  );
INSERT INTO `activities` (`id`, `title`, `description`)
VALUES (
    6,
    'Bikes',
    'Embark on adventures around the locale on our available bikes, allowing guests to explore the nature of Tampere at their own pace'
  );
INSERT INTO `activities` (`id`, `title`, `description`)
VALUES (
    7,
    'Canoe and Paddle',
    'Glide across tranquil waters on our canoes, offering an opportunity to immerse yourself in nature and enjoy a leisurely paddle, taking in picturesque views along the way'
  );
INSERT INTO `service_images` (`id`, `service_id`, `image`)
VALUES (
    1,
    1,
    'https://www.hotelsolan.com/upload/obrazky/gastronomie/letni-terasa/big/letni-terasa1.jpg'
  );
INSERT INTO `service_images` (`id`, `service_id`, `image`)
VALUES (
    2,
    2,
    'https://www.hotel-goldried-tirol.com/andsrv/content/files/resized/171005-martinlugger-goldried-b7939204.700x420m1.227.jpg'
  );
INSERT INTO `service_images` (`id`, `service_id`, `image`)
VALUES (
    3,
    2,
    'https://regattaspahotel.fi/wp-content/uploads/2022/07/spa-1-1024x682.jpeg'
  );
INSERT INTO `service_images` (`id`, `service_id`, `image`)
VALUES (
    4,
    3,
    'https://s3.amazonaws.com/virginhotelslv.com/content/uploads/2022/07/The-Gym-2022-2540x1040-1.jpg'
  );
INSERT INTO `activity_images` (`id`, `activity_id`, `image`)
VALUES (
    1,
    5,
    'https://i2.wp.com/stepintoblacksburg.org/wp-content/uploads/2019/03/hiking-trail-lg.jpg?fit=1568%2C1045&ssl=1'
  );
INSERT INTO `activity_images` (`id`, `activity_id`, `image`)
VALUES (
    2,
    5,
    'https://i0.wp.com/stepintoblacksburg.org/wp-content/uploads/2019/03/brparkway.jpeg?fit=1920%2C1076&ssl=1'
  );
INSERT INTO `activity_images` (`id`, `activity_id`, `image`)
VALUES (
    3,
    1,
    'https://colleenashakti.com/wp-content/uploads/2022/03/Recovered_jpg_file3840.jpeg'
  );
INSERT INTO `activity_images` (`id`, `activity_id`, `image`)
VALUES (
    4,
    2,
    'https://majfoil.files.wordpress.com/2022/04/pxl_20220421_190118680-01.jpeg?w=1024'
  );
INSERT INTO `activity_images` (`id`, `activity_id`, `image`)
VALUES (
    5,
    3,
    'https://img.freepik.com/premium-photo/silhouette-fitness-girl-practicing-yoga-mountain-with-sun-light_35029-431.jpg'
  );
INSERT INTO `activity_images` (`id`, `activity_id`, `image`)
VALUES (
    6,
    4,
    'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/14091531/YOGA-1024x646.jpg'
  );
INSERT INTO `activity_images` (`id`, `activity_id`, `image`)
VALUES (
    7,
    6,
    'https://vilniuswithlocals.com/image/blogs/2020/07/01/MTB-and-nature.jpg'
  );
INSERT INTO `activity_images` (`id`, `activity_id`, `image`)
VALUES (
    8,
    7,
    'https://d1l57x9nwbbkz.cloudfront.net/files/s3fs-public/2022-09/canoeing-quetico-park-ontario.jpg?VersionId=5ZlWtCVOG7crlJONvW9542NSi.G2N2s'
  );
INSERT INTO `reviews` (`id`, `user_id`, `room_id`, `message`, `rating`)
VALUES (
    1,
    2,
    1,
    'I recently stayed at this hotel and found the experience quite delightful. The room I stayed in was spacious and clean, providing a comfortable environment throughout my stay. The bed was cozy, offering a good night''s sleep after a long day of activities. The amenities were well-maintained, and the room service was prompt and efficient.
The design and ambiance of the room were pleasing, creating a relaxing atmosphere. I particularly appreciated the attention to detail in the decor, which added a touch of elegance to the space. Additionally, the room had a nice view, allowing me to enjoy some scenic moments during my downtime.
While my overall stay was enjoyable, there were a couple of areas that could have been improved upon. The Wi-Fi connection was a bit spotty at times, which made it slightly inconvenient for work-related tasks. Also, although the room was generally well-kept, I noticed a few minor maintenance issues that could use attention.
Overall, this hotel room provided a comfortable and enjoyable experience. With its spaciousness, cleanliness, and pleasant ambiance, coupled with attentive service, it was a wonderful stay that I would consider revisiting in the future with hopes of even further enhancements.',
    4
  );
INSERT INTO `reviews` (`id`, `user_id`, `room_id`, `message`, `rating`)
VALUES (
    2,
    2,
    3,
    'My stay at this hotel was nothing short of exceptional. The room I stayed in exceeded all expectations, offering a luxurious and comfortable retreat. From the moment I stepped in, I was greeted with a spotlessly clean and well-appointed space. The bed was incredibly comfortable, providing a night of restful sleep, and the room''s layout was thoughtfully designed for convenience and functionality.
The attention to detail in the room''s decor and amenities was impressive. Everything felt meticulously arranged, from the stylish furnishings to the high-quality toiletries provided. The panoramic view from the room was breathtaking, adding an extra layer of delight to the overall experience.
The service provided was top-notch. The staff was not only courteous but also went above and beyond to ensure a memorable stay. From the warm welcome at check-in to the helpful recommendations from the concierge, every interaction was marked by professionalism and genuine hospitality.
Furthermore, the hotel''s facilities, including the gym and spa, were of excellent quality, contributing to a well-rounded and indulgent experience. Throughout my stay, I encountered no issues with Wi-Fi or maintenance, showcasing the hotel''s commitment to delivering a flawless experience.
In conclusion, this hotel room offered a perfect blend of luxury, comfort, and exceptional service. I would highly recommend it to anyone seeking a truly five-star experience and look forward eagerly to returning for another delightful stay.',
    5
  );
INSERT INTO `reviews` (`id`, `user_id`, `room_id`, `message`, `rating`)
VALUES (
    3,
    1,
    2,
    'My recent stay at this hotel was decent overall. The room I stayed in was comfortable and adequately sized for a pleasant stay. The bed was comfortable enough for a good night''s sleep, and the amenities provided the basics needed for a short stay.
However, there were a few aspects that could be improved. The room, while generally clean, showed signs of wear and tear, and the decor felt a bit dated. Additionally, the Wi-Fi connection was somewhat unreliable, making it challenging to stay connected at times. Despite these issues, the staff was friendly and responsive, addressing concerns promptly.
While it wasn''t a standout experience, the hotel provided a decent stay for the price, offering the essentials for a comfortable night''s rest.',
    3
  );
INSERT INTO `reviews` (`id`, `user_id`, `room_id`, `message`, `rating`)
VALUES (
    4,
    1,
    4,
    'My stay at this hotel was quite pleasant. The room I occupied was spacious and well-appointed, providing a comfortable and relaxing environment. The bed was cozy, and the cleanliness of the room was maintained to a good standard throughout my stay.
The hotel''s staff were accommodating and friendly, ensuring a smooth check-in process and being responsive to any queries or requests I had during my stay. Additionally, the amenities offered, such as the in-room coffee maker and toiletries, added convenience to my stay.
However, there were a couple of areas where improvements could be made. While the room was generally clean, there were a few minor maintenance issues that could use attention. Moreover, the Wi-Fi, though available, was a bit slow at times, which could be inconvenient for those relying heavily on internet access.
Overall, the hotel provided a comfortable stay with friendly service. With a few enhancements in maintenance and internet speed, it could easily elevate the experience to a higher level.',
    4
  );
INSERT INTO `reviews` (`id`, `user_id`, `room_id`, `message`, `rating`)
VALUES (
    5,
    1,
    1,
    'My recent stay at this hotel was decent overall. The room I stayed in was comfortable and adequately sized for a pleasant stay. The bed was comfortable enough for a good night''s sleep, and the amenities provided the basics needed for a short stay.
However, there were a few aspects that could be improved. The room, while generally clean, showed signs of wear and tear, and the decor felt a bit dated. Additionally, the Wi-Fi connection was somewhat unreliable, making it challenging to stay connected at times. Despite these issues, the staff was friendly and responsive, addressing concerns promptly.
While it wasn''t a standout experience, the hotel provided a decent stay for the price, offering the essentials for a comfortable night''s rest.',
    3
  );