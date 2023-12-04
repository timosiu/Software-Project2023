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
  `message` varchar(255) NOT NULL,
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
INSERT INTO `users` (`id`, `name`, `email`, `password`)
VALUES (
    1,
    'Test User',
    'test@user.com',
    '$2a$12$stzoKdDeAhklwUiwIKyK7./Ijl3L03UxMyKg.ElzCrgQCW9wkA7Wi'
  );
INSERT INTO `users` (`id`, `name`, `email`, `password`)
VALUES (
    2,
    'Matti Meikalainen',
    'matti@meikalainen.com',
    '$2a$12$stzoKdDeAhklwUiwIKyK7./Ijl3L03UxMyKg.ElzCrgQCW9wkA7Wi'
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
    'Explore the natural beauty of the surroundings with knowledgeable guides leading invigorating hikes, providing insights into the area’s flora, fauna and hidden gems'
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
INSERT INTO `reviews` (`id`, `user_id`, `message`)
VALUES (
    1,
    2,
    'Review message'
  );
INSERT INTO `reviews` (`id`, `user_id`, `message`)
VALUES (
    2,
    2,
    'Review message 2'
  );