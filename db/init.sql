CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `locations` (
  `id` varchar(36) NOT NULL,
  `provider_id` varchar(36) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255),
  `comforts` varchar(255),
  `price` FLOAT NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `location_images` (
  `id` varchar(36) NOT NULL,
  `location_id` varchar(36) NOT NULL,
  `image` varchar(200) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `forum_threads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  `title` varchar(50) NOT NULL,
  `message` varchar(255) NOT NULL,
  `category` varchar(50) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `forum_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(36) NOT NULL,
  `thread_id` varchar(36) NOT NULL,
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
INSERT INTO `locations` (`id`, `provider_id`, `city`, `country`, `title`, `description`, `comforts`, `price`)
VALUES (
    1,
    1,
    'Kajaani',
    'Finland',
    'Cozy Farmhouse',
    'Comfortable two-storey holiday home with accommodation for 10 people.',
    '{"bathtub":false,"microwave":true,"refrigerator":true,"beach":false}',
    80
  );
INSERT INTO `locations` (`id`, `provider_id`, `city`, `country`, `title`, `description`, `comforts`, `price`)
VALUES (
    2,
    2,
    'Inari',
    'Finland',
    'Chalet of Auroras',
    'Cottage by the lake. Great Northern Light views from your own lake shore!',
    '{"bathtub":false,"microwave":true,"refrigerator":true,"beach":true}',
    75
  );
INSERT INTO `locations` (`id`, `provider_id`, `city`, `country`, `title`, `description`, `comforts`, `price`)
VALUES (
    3,
    1,
    'Pohjankuru',
    'Finland',
    'Broback cosy cottage',
    'Welcome to stay in our lively and lovely little farm! Our cottage is a haven for Raasepori area visitors who appreciate nature and wish to make day trips to beautiful places nearby.',
    '{"bathtub":false,"microwave":false,"refrigerator":true,"beach":false}',
    85
  );
INSERT INTO `locations` (`id`, `provider_id`, `city`, `country`, `title`, `description`, `comforts`, `price`)
VALUES (
    4,
    2,
    'Tornio',
    'Finland',
    'Villa Saagala',
    'Amazing river view. Big windows to the river: you can admire the midnight sun & Northern Lights.',
    '{"bathtub":false,"microwave":true,"refrigerator":true,"beach":true}',
    66
  );
INSERT INTO `locations` (`id`, `provider_id`, `city`, `country`, `title`, `description`, `comforts`, `price`)
VALUES (
    5,
    1,
    'Suomussalmi',
    'Finland',
    'Luxury Cabin of Hossa',
    'Quiet location with outdoor electricity for car, big windows with view towards Northern Lights, outdoor bathtub and sauna.',
    '{"bathtub":true,"microwave":false,"refrigerator":true,"beach":false}',
    73
  );
INSERT INTO `locations` (`id`, `provider_id`, `city`, `country`, `title`, `description`, `comforts`, `price`)
VALUES (
    6,
    2,
    'La Hague',
    'France',
    'La petite maison de Vauville',
    'Typical La Hague house located by the sea a few meters from the Vauville pond, the Chemins des Douaniers and the beach.',
    '{"bathtub":true,"microwave":true,"refrigerator":true,"beach":true}',
    95
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    1,
    1,
    'https://a0.muscache.com/im/pictures/6094ab16-9889-431d-b3f7-20d37006f720.jpg?im_w=1440'
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    2,
    2,
    'https://a0.muscache.com/im/pictures/aab97265-a1e5-464c-bcf2-faffadf6d38f.jpg?im_w=1200'
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    3,
    2,
    'https://a0.muscache.com/im/pictures/ef0c8000-c12e-43db-9d09-1bb6a9f34c87.jpg?im_w=1440'
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    4,
    3,
    'https://a0.muscache.com/im/pictures/85c23a0b-2ca8-421b-be36-9e2cfca35762.jpg?im_w=960'
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    5,
    4,
    'https://a0.muscache.com/im/pictures/e6c51e95-ceb4-457c-93b8-f549b448ebdb.jpg?im_w=960'
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    6,
    4,
    'https://a0.muscache.com/im/pictures/e4bf545b-c584-43aa-b49e-48189368b2b8.jpg?im_w=720'
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    7,
    5,
    'https://a0.muscache.com/im/pictures/86d8dc75-e83a-4a75-a96d-6a1b0a50d4d3.jpg?im_w=960'
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    8,
    6,
    'https://a0.muscache.com/im/pictures/miso/Hosting-48845539/original/6a333252-e559-4bb8-84df-979e037cf6f1.jpeg?im_w=960'
  );
INSERT INTO `forum_threads` (`id`, `user_id`, `title`, `message`, `category`)
VALUES (
    1,
    2,
    'Title about something',
    'Message about something',
    'Traveling'
  );
INSERT INTO `forum_threads` (`id`, `user_id`, `title`, `message`, `category`)
VALUES (
    2,
    2,
    'Title about something else',
    'Message about something else',
    'Traveling'
  );
INSERT INTO `forum_posts` (`id`, `user_id`, `thread_id`, `message`)
VALUES (
    1,
    2,
    1,
    'Some post on a thread'
  );
INSERT INTO `forum_posts` (`id`, `user_id`, `thread_id`, `message`)
VALUES (
    2,
    1,
    1,
    'Some other post on a thread'
  );
INSERT INTO `forum_posts` (`id`, `user_id`, `thread_id`, `message`)
VALUES (
    3,
    1,
    2,
    'Random post'
  );
