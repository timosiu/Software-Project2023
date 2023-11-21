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