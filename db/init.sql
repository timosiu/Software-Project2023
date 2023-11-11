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
    'Hiking Trails',
    'Enjoy the nature, waterways, forests, ridges and vantage points while hiking along the trails.'
  );
INSERT INTO `services` (`id`, `title`, `description`)
VALUES (
    3,
    'Spa',
    'Finnish dry sauna, wet sauna, waterfall shower, and a peaceful relaxing area.'
  );
INSERT INTO `services` (`id`, `title`, `description`)
VALUES (
    4,
    'Gym',
    'Packed with cardio and resistance equipment and free weights, you can unwind after a busy day in our gym facilities.'
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
    'https://i2.wp.com/stepintoblacksburg.org/wp-content/uploads/2019/03/hiking-trail-lg.jpg?fit=1568%2C1045&ssl=1'
  );
INSERT INTO `service_images` (`id`, `service_id`, `image`)
VALUES (
    3,
    2,
    'https://i0.wp.com/stepintoblacksburg.org/wp-content/uploads/2019/03/brparkway.jpeg?fit=1920%2C1076&ssl=1'
  );
INSERT INTO `service_images` (`id`, `service_id`, `image`)
VALUES (
    4,
    3,
    'https://www.hotel-goldried-tirol.com/andsrv/content/files/resized/171005-martinlugger-goldried-b7939204.700x420m1.227.jpg'
  );
INSERT INTO `service_images` (`id`, `service_id`, `image`)
VALUES (
    5,
    3,
    'https://regattaspahotel.fi/wp-content/uploads/2022/07/spa-1-1024x682.jpeg'
  );
INSERT INTO `service_images` (`id`, `service_id`, `image`)
VALUES (
    6,
    4,
    'https://s3.amazonaws.com/virginhotelslv.com/content/uploads/2022/07/The-Gym-2022-2540x1040-1.jpg'
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